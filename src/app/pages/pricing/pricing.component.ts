import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { pricingGroups } from '../../data/pricing-content';

@Component({
  selector: 'app-pricing',
  imports: [RouterLink],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  pricingGroups = pricingGroups;
}
