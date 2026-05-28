import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { homeFaqs } from '../../data/faq-content';
import { pricingGroups } from '../../data/pricing-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-home',
  imports: [FaqComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faqs = homeFaqs;

  services = [
    {
      title: 'Exterior Repairs',
      text: 'Fascia repair, siding touch-ups, gutter fixes, door repairs, and weatherproofing support for Bay Area homes.',
      image: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=900&q=80',
      alt: 'Residential exterior repair work'
    },
    {
      title: 'Kitchen & Bath Updates',
      text: 'Practical update help for cabinets, tile, fixtures, caulking, flooring, paint, and finish work that improves daily life.',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=900&q=80',
      alt: 'Modern kitchen remodel with bright finishes'
    },
    {
      title: 'Drywall & Paint',
      text: 'Drywall installation, ceiling repairs, water damage reconstruction, taping, mudding, texture matching, and paint touch-ups.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80',
      alt: 'Home painting and drywall renovation tools'
    },
    {
      title: 'Flooring',
      text: 'Flooring repairs, finish details, baseboards, transitions, and small-to-medium updates that make rooms feel complete.',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=80',
      alt: 'Flooring installation detail in a bright home'
    }
  ];

  pricingPreview = pricingGroups.map((group) => ({
    title: group.title,
    price: group.featuredPrice,
    note: group.note
  }));
}
