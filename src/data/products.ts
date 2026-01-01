export type Product = {
  id: string;
  name: string;
  image: string; // path starting with "/" relative to public/
  prices?: {
    tag1: string,
    tag2: number
  }[];
  points?: number;
  description: string;
  tags: string[];
  starred?: boolean;
  category: string;
};

export const products: Product[] = [
  {
    id: 'cp-1',
    name: 'Fried Catfish Po’boy',
    image: '/Images/Menu/catfish-poboy.png',
    prices: [
      {
        tag1: 'Medium',
        tag2: 16.95,
      },
      {
        tag1: 'Large',
        tag2: 20.95,
      },
    ],
    description: 'Fried catfish nuggets piled high on light, crisp, buttery Leidenheimer bread. Dressed with lettuce, tomato, pickle, and our signature Sissy’s Sauce house Remoulade.',
    tags: ['Seafood', 'Po-boy', 'Catfish', 'Cajun'],
    category: 'Po’boys',
    starred: true,
  },
  {
    id: 'sp-1',
    name: 'Shrimp Platter',
    image: '/Images/Menu/shrimp-platter.png',
    prices: [
      {
        tag1: 'Medium',
        tag2: 19.95,
      },
      {
        tag1: 'Large',
        tag2: 24.95,
      },
    ],
    description: 'Golden fried shrimp served platter-style. Available all day, pairs perfectly with our Gumbo or Red Beans.',
    tags: ['Seafood', 'Shrimp', 'Platter', 'Dinner'],
    category: 'Seafood Platters',
    starred: true,
  }
];