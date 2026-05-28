import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ServiceAreasComponent } from './pages/service-areas/service-areas.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Renger Home Solutions | Bay Area Handyman Services' },
  { path: 'about', component: AboutComponent, title: 'About Renger Home Solutions' },
  { path: 'pricing', component: PricingComponent, title: 'Service Pricing | Renger Home Solutions' },
  { path: 'service-areas', component: ServiceAreasComponent, title: 'San Francisco & Bay Area Service Areas' },
  { path: 'contact', component: ContactComponent, title: 'Contact Renger Home Solutions' },
  { path: 'work-with-us', component: WorkWithUsComponent, title: 'Work With Us | Renger Home Solutions' },
  { path: '**', redirectTo: '' }
];
