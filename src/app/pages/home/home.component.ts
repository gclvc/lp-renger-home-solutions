import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { homeFaqs } from '../../data/faq-content';
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

  pricingGroups = [
    {
      title: 'Furniture Assembly',
      note: '$90 per hour or fixed prices below',
      items: [
        'Side chair - $39.99',
        'Office chair - $44.99',
        'Armchair - $59.99',
        'Dining table - $59.99',
        'Adjustable standing desk - $79.99',
        'Bed frame - $84.99',
        'Bed frame with drawers - $84.99 + $14.99 per drawer',
        'Bunk bed - from $199',
        'Bunk bed with desk - from $199',
        'Bunk bed with storage or cabinet - from $249.99',
        'Murphy bed - from $449',
        'Murphy bed with wardrobe - from $599',
        'Bookcase - $79',
        'Dresser, 4 drawers - $99',
        'Dresser, 6 drawers - $99',
        'Dresser, 8 drawers - $129',
        'Shelving system installation - from $169'
      ]
    },
    {
      title: 'TV Mounting',
      note: 'Starts at $149.99 each',
      items: [
        'Base price - $149.99',
        'TV larger than 60 inches - +$70',
        'Wire concealment - +$49.99',
        'Brick, stone, or concrete wall - +$49.99'
      ]
    },
    {
      title: 'Kitchen & Bathroom Caulking',
      note: 'Starting prices',
      items: [
        'Countertops, kitchen or bathroom - starting at $149.99',
        'Showers - starting at $219.99',
        'Bathtubs - starting at $199'
      ]
    },
    {
      title: 'Door Repair',
      note: 'Starts at $149.99',
      items: ['Labor only']
    }
  ];
}
