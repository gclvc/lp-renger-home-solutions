import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

const formDestination = 'https://formsubmit.co/ajax/hello@rengerhomesolutions.com';
const formTimeoutMs = 10000;
const minimumLoadingMs = 900;

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));
}

async function sendForm(payload: Record<string, string>) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), formTimeoutMs);

  try {
    const response = await fetch(formDestination, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error('The form could not be sent.');
    }
  } finally {
    window.clearTimeout(timeoutId);
  }
}

@Component({
  selector: 'app-work-with-us',
  imports: [FormsModule, RouterLink],
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.scss'
})
export class WorkWithUsComponent {
  submitted = false;
  submitting = false;
  formStatus = '';
  formError = false;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialty: '',
    yearsExperience: '',
    experience: ''
  };

  async submit() {
    if (this.submitting) {
      return;
    }

    this.submitting = true;
    this.submitted = false;
    this.formError = false;
    this.formStatus = '';

    try {
      const name = `${this.form.firstName} ${this.form.lastName}`.trim();
      await Promise.all([
        sendForm({
          'Form type': 'Work application',
          name,
          email: this.form.email,
          phone: this.form.phone || 'Not provided',
          specialty: this.form.specialty,
          yearsExperience: this.form.yearsExperience,
          experience: this.form.experience,
          _subject: `New work application from ${name || 'Renger website'}`,
          _template: 'table',
          _captcha: 'false'
        }),
        wait(minimumLoadingMs),
      ]);

      this.submitted = true;
      this.formStatus = 'Thanks. Your application was sent to Renger Home Solutions.';
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialty: '',
        yearsExperience: '',
        experience: ''
      };
      this.submitting = false;
    } catch (error) {
      this.formError = true;
      this.formStatus = 'Sorry, the application could not be sent. Please call or email Renger Home Solutions directly.';
      this.submitting = false;
    }
  }
}
