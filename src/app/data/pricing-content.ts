export interface PricingGroup {
  title: string;
  note: string;
  featuredPrice: string;
  items: string[];
}

export const pricingGroups: PricingGroup[] = [
  {
    title: 'Furniture Assembly',
    note: '$90 per hour or fixed prices below',
    featuredPrice: '$39.99+',
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
    featuredPrice: '$149.99',
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
    featuredPrice: '$149.99+',
    items: [
      'Countertops, kitchen or bathroom - starting at $149.99',
      'Showers - starting at $219.99',
      'Bathtubs - starting at $199'
    ]
  },
  {
    title: 'Door Repair',
    note: 'Labor only',
    featuredPrice: '$149.99+',
    items: ['Door repair starts at $149.99']
  }
];
