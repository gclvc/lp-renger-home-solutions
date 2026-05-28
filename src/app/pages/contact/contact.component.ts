import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { contactFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-contact',
  imports: [FaqComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;
  faqs = contactFaqs;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      const city = params.get('city');

      if (city && !this.form.message) {
        this.form.message = `Hello, I am requesting service in ${city}, ...`;
      }
    });
  }

  submit() {
    this.submitted = true;
  }
}
