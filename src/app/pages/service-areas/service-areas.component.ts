import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { serviceAreaFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-service-areas',
  imports: [FaqComponent, FormsModule, RouterLink],
  templateUrl: './service-areas.component.html',
  styleUrl: './service-areas.component.scss'
})
export class ServiceAreasComponent {
  faqs = serviceAreaFaqs;
  searchTerm = '';

  areas = [
    {
      name: 'San Francisco',
      label: 'Core service area',
      text: 'Home repairs, exterior fixes, paint, drywall, flooring, and punch-list projects throughout San Francisco neighborhoods.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/San_Francisco_golden_gate_bridge.JPG?width=900',
      alt: 'Golden Gate Bridge in San Francisco'
    },
    {
      name: 'Daly City',
      label: 'Peninsula north',
      text: 'Practical home improvement support for Daly City homeowners, from small repairs to larger residential upgrades.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/City_of_Daly_City.jpg?width=900',
      alt: 'Daly City hillside neighborhood'
    },
    {
      name: 'Pacifica',
      label: 'Coastside',
      text: 'Exterior repairs, maintenance, paint, and small home projects for homes near the coast.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pacifica_ca_pier.jpg?width=900',
      alt: 'Pacifica Pier on the coast'
    },
    {
      name: 'South San Francisco',
      label: 'Peninsula access',
      text: 'Flexible scheduling for home repairs, exterior fixes, and improvement projects in South San Francisco.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sign_Hill_Park%2C_South_San_Francisco%2C_California_%287527962822%29.jpg?width=900',
      alt: 'South San Francisco hillside sign'
    },
    {
      name: 'San Bruno',
      label: 'Peninsula north',
      text: 'Small-to-medium repairs, drywall, paint, assembly, and property maintenance for San Bruno homes.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_photo_of_San_Bruno%2C_Colma%2C_Millbrae%2C_SFO_Airport.jpg?width=900',
      alt: 'Aerial view of San Bruno and nearby Peninsula communities'
    },
    {
      name: 'Burlingame',
      label: 'Peninsula',
      text: 'Kitchen and bath updates, finish repairs, flooring details, and maintenance support in Burlingame.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Burlingame_caltrain_station.JPG?width=900',
      alt: 'Burlingame Caltrain station'
    },
    {
      name: 'San Mateo',
      label: 'Mid-Peninsula',
      text: 'Drywall, painting, flooring, exterior repairs, and home repair help for San Mateo and nearby Peninsula homes.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Downtown_San_Mateo%2C_California_%2825571394628%29.jpg?width=900',
      alt: 'Downtown San Mateo'
    },
    {
      name: 'San Carlos',
      label: 'Mid-Peninsula',
      text: 'Property maintenance, fixture updates, paint, drywall patches, and exterior repair support in San Carlos.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Downtownsancarlos.jpg?width=900',
      alt: 'Downtown San Carlos'
    },
    {
      name: 'Redwood City',
      label: 'Mid-Peninsula',
      text: 'Home repair help for Redwood City properties, including finish work, caulking, assembly, paint, and maintenance.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Redwood_City%2C_California_Downtown_residences.jpg?width=900',
      alt: 'Downtown residences in Redwood City'
    },
    {
      name: 'Woodside',
      label: 'Peninsula foothills',
      text: 'Maintenance, careful repairs, flooring details, and exterior fixes for Woodside properties.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Historic_photo_of_Woodside%2C_California_%281965%29.jpg?width=900',
      alt: 'Historic Woodside, California'
    },
    {
      name: 'Palo Alto',
      label: 'South Peninsula',
      text: 'Handyman support, drywall and paint repairs, fixture updates, and property maintenance in Palo Alto.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Downtown_Palo_Alto_Library.jpg?width=900',
      alt: 'Downtown Palo Alto Library'
    },
    {
      name: 'Mountain View',
      label: 'South Peninsula',
      text: 'Small home projects, assembly, caulking, paint touch-ups, and maintenance support in Mountain View.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Castro_Street_Mountain_View_sidewalk.jpg?width=900',
      alt: 'Castro Street in Mountain View'
    },
    {
      name: 'Sunnyvale',
      label: 'South Bay access',
      text: 'Practical home fixes, drywall repairs, flooring details, and exterior repair help for Sunnyvale homes.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2022-03-27_08_50_18_View_northwest_along_California_State_Route_82_%28El_Camino_Real%29_between_Sunnyvale_Avenue_and_Murphy_Avenue_in_Sunnyvale%2C_Santa_Clara_County%2C_California.jpg?width=900',
      alt: 'Street view near Murphy Avenue in Sunnyvale'
    },
    {
      name: 'Foster City',
      label: 'Peninsula waterfront',
      text: 'Property maintenance, caulking, door repairs, fixture updates, and punch-list support in Foster City.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Foster_City_Lagoon_1_2020-08-11.jpeg?width=900',
      alt: 'Foster City Lagoon'
    },
    {
      name: 'Millbrae',
      label: 'Peninsula north',
      text: 'Exterior repairs, drywall and paint, flooring details, and everyday home fixes for Millbrae residents.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Millbrae%2C_CA%2C_USA_-_panoramio.jpg?width=900',
      alt: 'Millbrae, California'
    }
  ];

  get filteredAreas() {
    const query = this.searchTerm.trim().toLowerCase();

    if (!query) {
      return this.areas;
    }

    return this.areas.filter((area) => area.name.toLowerCase().includes(query) || area.label.toLowerCase().includes(query));
  }
}
