const destinationEmail = 'hello@rengerhomesolutions.com';
const https = require('https');

function readBody(req) {
  if (req.body && typeof req.body === 'object') {
    return Promise.resolve(req.body);
  }

  if (req.body && typeof req.body === 'string') {
    return Promise.resolve(JSON.parse(req.body));
  }

  return new Promise((resolve, reject) => {
    let raw = '';

    req.on('data', (chunk) => {
      raw += chunk;
    });

    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on('error', reject);
  });
}

function clean(value) {
  return String(value || '').trim();
}

function formatEstimate(payload) {
  const name = `${clean(payload.firstName)} ${clean(payload.lastName)}`.trim();

  return {
    name,
    subject: `New estimate request from ${name || 'Renger website'}`,
    message: [
      'New estimate request',
      '',
      `Name: ${name}`,
      `Email: ${clean(payload.email)}`,
      `Phone: ${clean(payload.phone) || 'Not provided'}`,
      `Budget: ${clean(payload.budget) || 'Not provided'}`,
      '',
      'Message:',
      clean(payload.message)
    ].join('\n')
  };
}

function formatApplication(payload) {
  const name = `${clean(payload.firstName)} ${clean(payload.lastName)}`.trim();

  return {
    name,
    subject: `New work application from ${name || 'Renger website'}`,
    message: [
      'New work application',
      '',
      `Name: ${name}`,
      `Email: ${clean(payload.email)}`,
      `Phone: ${clean(payload.phone) || 'Not provided'}`,
      `Primary specialty: ${clean(payload.specialty)}`,
      `Years of experience: ${clean(payload.yearsExperience)}`,
      '',
      'Experience:',
      clean(payload.experience)
    ].join('\n')
  };
}

function validate(payload) {
  const type = clean(payload.type);
  const email = clean(payload.email);

  if (!['estimate', 'application'].includes(type)) {
    return 'Invalid form type.';
  }

  if (!clean(payload.firstName) || !clean(payload.lastName) || !email) {
    return 'Name and email are required.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'A valid email is required.';
  }

  if (type === 'estimate' && !clean(payload.message)) {
    return 'Project message is required.';
  }

  if (type === 'application' && (!clean(payload.specialty) || !clean(payload.yearsExperience) || !clean(payload.experience))) {
    return 'Specialty, experience time, and experience details are required.';
  }

  return '';
}

function postToFormSubmit(data, siteOrigin) {
  const body = JSON.stringify(data);

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'formsubmit.co',
        path: `/ajax/${encodeURIComponent(destinationEmail)}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: siteOrigin,
          Referer: `${siteOrigin}/contact`,
          'Content-Length': Buffer.byteLength(body)
        }
      },
      (response) => {
        let raw = '';

        response.on('data', (chunk) => {
          raw += chunk;
        });

        response.on('end', () => {
          try {
            resolve({
              ok: response.statusCode >= 200 && response.statusCode < 300,
              statusCode: response.statusCode,
              result: raw ? JSON.parse(raw) : {}
            });
          } catch (error) {
            resolve({
              ok: response.statusCode >= 200 && response.statusCode < 300,
              statusCode: response.statusCode,
              result: {}
            });
          }
        });
      }
    );

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const payload = await readBody(req);
    const validationError = validate(payload);

    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const formatted = payload.type === 'application'
      ? formatApplication(payload)
      : formatEstimate(payload);

    const siteOrigin = req.headers.origin || 'https://www.rengerhomesolutions.com';
    const { ok, result } = await postToFormSubmit(
      {
        name: formatted.name || 'Renger website visitor',
        email: clean(payload.email),
        _subject: formatted.subject,
        _template: 'table',
        _captcha: 'false',
        message: formatted.message
      },
      siteOrigin
    );

    if (!ok) {
      return res.status(502).json({
        error: result.message || 'The email service could not send the form.'
      });
    }

    if (result.success === 'false' && /activation/i.test(result.message || '')) {
      return res.status(202).json({ ok: true, activationRequired: true });
    }

    if (result.success === 'false') {
      return res.status(502).json({
        error: result.message || 'The email service could not send the form.'
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Could not send the form. Please try again.' });
  }
};
