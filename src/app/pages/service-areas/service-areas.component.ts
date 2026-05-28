import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { serviceAreaFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-service-areas',
  imports: [FaqComponent, RouterLink],
  templateUrl: './service-areas.component.html',
  styleUrl: './service-areas.component.scss'
})
export class ServiceAreasComponent {
  faqs = serviceAreaFaqs;

  areas = [
    {
      name: 'San Francisco',
      label: 'Core service area',
      text: 'Home repairs, exterior fixes, paint, drywall, flooring, and punch-list projects throughout San Francisco neighborhoods.',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80',
      alt: 'San Francisco skyline and bay'
    },
    {
      name: 'Daly City',
      label: 'Peninsula north',
      text: 'Practical home improvement support for Daly City homeowners, from small repairs to larger residential upgrades.',
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=900&q=80',
      alt: 'Coastal Bay Area neighborhood near Daly City'
    },
    {
      name: 'Pacifica',
      label: 'Coastside',
      text: 'Exterior repairs, maintenance, paint, and small home projects for homes near the coast.',
      image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=900&q=80',
      alt: 'Coastal Bay Area homes near Pacifica'
    },
    {
      name: 'South San Francisco',
      label: 'Peninsula access',
      text: 'Flexible scheduling for home repairs, exterior fixes, and improvement projects in South San Francisco.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80',
      alt: 'Modern Bay Area residential buildings'
    },
    {
      name: 'San Bruno',
      label: 'Peninsula north',
      text: 'Small-to-medium repairs, drywall, paint, assembly, and property maintenance for San Bruno homes.',
      image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80',
      alt: 'Peninsula residential home exterior'
    },
    {
      name: 'Burlingame',
      label: 'Peninsula',
      text: 'Kitchen and bath updates, finish repairs, flooring details, and maintenance support in Burlingame.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
      alt: 'Well maintained suburban Bay Area home'
    },
    {
      name: 'San Mateo',
      label: 'Mid-Peninsula',
      text: 'Drywall, painting, flooring, exterior repairs, and home repair help for San Mateo and nearby Peninsula homes.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
      alt: 'Well maintained suburban Bay Area home'
    },
    {
      name: 'San Carlos',
      label: 'Mid-Peninsula',
      text: 'Property maintenance, fixture updates, paint, drywall patches, and exterior repair support in San Carlos.',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=900&q=80',
      alt: 'Bay Area residential street'
    },
    {
      name: 'Redwood City',
      label: 'Mid-Peninsula',
      text: 'Home repair help for Redwood City properties, including finish work, caulking, assembly, paint, and maintenance.',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=900&q=80',
      alt: 'Bay Area craftsman style residential street'
    },
    {
      name: 'Woodside',
      label: 'Peninsula foothills',
      text: 'Maintenance, careful repairs, flooring details, and exterior fixes for Woodside properties.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      alt: 'Residential home surrounded by trees'
    },
    {
      name: 'Palo Alto',
      label: 'South Peninsula',
      text: 'Handyman support, drywall and paint repairs, fixture updates, and property maintenance in Palo Alto.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
      alt: 'Bright Bay Area home exterior'
    },
    {
      name: 'Mountain View',
      label: 'South Peninsula',
      text: 'Small home projects, assembly, caulking, paint touch-ups, and maintenance support in Mountain View.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
      alt: 'Updated home interior'
    },
    {
      name: 'Sunnyvale',
      label: 'South Bay access',
      text: 'Practical home fixes, drywall repairs, flooring details, and exterior repair help for Sunnyvale homes.',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=80',
      alt: 'Flooring detail in a bright home'
    },
    {
      name: 'Foster City',
      label: 'Peninsula waterfront',
      text: 'Property maintenance, caulking, door repairs, fixture updates, and punch-list support in Foster City.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      alt: 'Clean residential interior'
    },
    {
      name: 'Millbrae',
      label: 'Peninsula north',
      text: 'Exterior repairs, drywall and paint, flooring details, and everyday home fixes for Millbrae residents.',
      image: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=900&q=80',
      alt: 'Bay Area residential entryway'
    }
  ];
}
