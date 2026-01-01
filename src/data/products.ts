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
    id: 'entree_1',
    name: 'Chicken and Sausage Gumbo',
    image: '/Images/Menu/product_1_black.png',
    prices: [
      {
        tag1: 'Bowl',
        tag2: 14.95,
      },
    ],
    description: 'Our third generation recipe made with homemade stock, homemade roux, andouille sausage, chicken, okra, and The Holy Trinity (bell pepper, celery, onion). Served with a side of white rice.',
    tags: ['Entrees', 'Gumbo', 'Chicken', 'Sausage'],
    category: 'Entrees',
    starred: true,
  },
  {
    id: 'entree_2',
    name: 'Sweep The Kitchen Gumbo',
    image: '/Images/Menu/product_1_red.png',
    prices: [
      {
        tag1: 'Bowl',
        tag2: 16.95,
      },
    ],
    description: 'Our third generation recipe made with homemade stock, homemade roux, shrimp, andouille sausage, chicken, okra, and The Holy Trinity (bell pepper, celery, onion). A little bit of everything good!',
    tags: ['Entrees', 'Gumbo', 'Shrimp', 'Sausage'],
    category: 'Entrees',
    starred: false,
  },
  {
    id: 'entree_3',
    name: 'Red Beans and Rice',
    image: '/Images/Menu/product_2_black.png',
    prices: [
      {
        tag1: 'Plate',
        tag2: 12.95,
      },
    ],
    description: 'Soaked overnight and slow cooked to perfection. Smothered red kidney beans with savory andouille sausage, tasso, and smoked turkey neck, served over fluffy white rice.',
    tags: ['Entrees', 'Beans', 'Rice', 'Sausage'],
    category: 'Entrees',
    starred: false,
  },
  {
    id: 'entree_4',
    name: 'Shrimp and Grits',
    image: '/Images/Menu/product_2_red.png',
    prices: [
      {
        tag1: 'Plate',
        tag2: 18.50,
      },
    ],
    description: 'Creamy southern cheese grits topped with a rich creole sauce and tender sautéed shrimp. A true southern classic.',
    tags: ['Entrees', 'Shrimp', 'Grits'],
    category: 'Entrees',
    starred: true,
  },
  {
    id: 'entree_5',
    name: 'Crawfish Étouffée',
    image: '/Images/Menu/product_1_black.png',
    prices: [
      {
        tag1: 'Plate',
        tag2: 19.95,
      },
    ],
    description: 'A classic Louisiana dish made from our family\'s secret recipe. A creamy, well-seasoned stew made with plump crawfish tails, served over a bed of steamed rice.',
    tags: ['Entrees', 'Crawfish', 'Étouffée'],
    category: 'Entrees',
    starred: false,
  },
  {
    id: 'dessert_1',
    name: 'Bread Pudding',
    image: '/Images/Menu/product_1_red.png',
    prices: [
      {
        tag1: 'Serving',
        tag2: 5.35,
      },
    ],
    description: 'A rich, spongy bread-based dessert made with pecans, chocolate chips, and cinnamon. Topped with a decadent caramel sauce.',
    tags: ['Desserts', 'Sweet'],
    category: 'Desserts',
    starred: false,
  },
  {
    id: 'drink_1',
    name: 'Sweet Tea',
    image: '/Images/Menu/product_2_black.png',
    prices: [
      {
        tag1: '24oz',
        tag2: 5.90,
      },
    ],
    description: '24oz home-brewed southern sweet tea served ice cold with a fresh lemon wedge.',
    tags: ['Drinks', 'Tea', 'Sweet'],
    category: 'Drinks',
    starred: false,
  },
  {
    id: 'drink_2',
    name: 'Kool-Aid',
    image: '/Images/Menu/product_2_red.png',
    prices: [
      {
        tag1: 'Cup',
        tag2: 4.75,
      },
    ],
    description: 'Refreshing Peach Mango Kool-Aid, purely nostalgic and delicious.',
    tags: ['Drinks', 'Kool-Aid'],
    category: 'Drinks',
    starred: false,
  },
  {
    id: 'drink_3',
    name: 'Big Shot Soda',
    image: '/Images/Menu/product_1_black.png',
    prices: [
      {
        tag1: 'Bottle',
        tag2: 3.50,
      },
    ],
    description: 'New Orleans\' own Big Shot soda. 24 FL OZ. A local favorite to wash down your meal.',
    tags: ['Drinks', 'Soda'],
    category: 'Drinks',
    starred: false,
  },
  {
    id: 'misc_1',
    name: 'Cornbread',
    image: '/Images/Menu/product_1_red.png',
    prices: [
      {
        tag1: 'Piece',
        tag2: 1.19,
      },
    ],
    description: 'Sweet, moist, golden-brown cornbread muffin.',
    tags: ['Sides', 'Bread'],
    category: 'Sides',
    starred: false,
  },
  {
    id: 'misc_2',
    name: 'White Rice',
    image: '/Images/Menu/product_2_black.png',
    prices: [
      {
        tag1: 'Cup',
        tag2: 1.19,
      },
    ],
    description: 'Extra side of fluffy steamed white rice.',
    tags: ['Sides', 'Rice'],
    category: 'Sides',
    starred: false,
  },
  {
    id: 'misc_3',
    name: 'Sausage Link',
    image: '/Images/Menu/product_2_red.png',
    prices: [
      {
        tag1: 'Order',
        tag2: 5.90,
      },
    ],
    description: 'Two grilled andouille sausage links, perfect for adding a spicy kick.',
    tags: ['Sides', 'Sausage'],
    category: 'Sides',
    starred: false,
  },
  {
    id: 'bite_1',
    name: 'Fried Alligator',
    image: '/Images/Menu/product_1_black.png',
    prices: [
      {
        tag1: 'Basket',
        tag2: 13.59,
      },
    ],
    description: 'Tender Louisiana alligator bites, breaded and fried to a golden crisp. Served with a side of remoulade.',
    tags: ['Appetizers', 'Alligator', 'Fried'],
    category: 'Appetizers',
    starred: true,
  },
  {
    id: 'bite_2',
    name: 'Fried Catfish Bites',
    image: '/Images/Menu/product_1_red.png',
    prices: [
      {
        tag1: 'Basket',
        tag2: 11.80,
      },
    ],
    description: 'Crispy catfish nuggets fried to perfection in our signature cornmeal blend.',
    tags: ['Appetizers', 'Catfish', 'Fried'],
    category: 'Appetizers',
    starred: false,
  },
  {
    id: 'bite_3',
    name: 'Fried Okra',
    image: '/Images/Menu/product_2_black.png',
    prices: [
      {
        tag1: 'Basket',
        tag2: 10.65,
      },
    ],
    description: 'Crispy battered okra served with Sissy\'s Signature Remoulade Sauce.',
    tags: ['Appetizers', 'Okra', 'Fried'],
    category: 'Appetizers',
    starred: false,
  },
  {
    id: 'bite_4',
    name: 'Cajun Fries',
    image: '/Images/Menu/product_2_red.png',
    prices: [
      {
        tag1: 'Basket',
        tag2: 4.75,
      },
    ],
    description: 'Crispy golden fries generously salted with our house Cajun seasoning blend.',
    tags: ['Appetizers', 'Fries', 'Cajun'],
    category: 'Appetizers',
    starred: false,
  },
  {
    id: 'bite_5',
    name: 'Hush Puppies',
    image: '/Images/Menu/product_1_black.png',
    prices: [
      {
        tag1: '6 Pcs',
        tag2: 8.29,
      },
    ],
    description: '6 deep-fried savory cornmeal bites. Crispy on the outside, soft on the inside. Served with Sissy\'s signature remoulade sauce.',
    tags: ['Appetizers', 'Hush Puppies'],
    category: 'Appetizers',
    starred: false,
  },
  {
    id: 'bite_6',
    name: 'Softshell Crab',
    image: '/Images/Menu/product_1_red.png',
    prices: [
      {
        tag1: 'Each',
        tag2: 10.65,
      },
    ],
    description: 'A whole crispy fried softshell crab, seasoned to perfection.',
    tags: ['Appetizers', 'Crab', 'Seafood'],
    category: 'Appetizers',
    starred: false,
  },
  {
    id: 'bite_7',
    name: 'Cajun Eggroll',
    image: '/Images/Menu/product_2_black.png',
    prices: [
      {
        tag1: 'Each',
        tag2: 5.90,
      },
    ],
    description: 'Unique fusion! A delicious three-cheese blend, red beans and rice, and andouille sausage rolled into an egg roll and deep fried. Served with remoulade.',
    tags: ['Appetizers', 'Eggroll', 'Cajun'],
    category: 'Appetizers',
    starred: true,
  },
  {
    id: 'bite_8',
    name: 'Fried Shrimp Basket',
    image: '/Images/Menu/product_2_red.png',
    prices: [
      {
        tag1: 'Medium',
        tag2: 12.95,
      },
      {
        tag1: 'Large',
        tag2: 16.95,
      }
    ],
    description: 'Succulent shrimp fried golden brown. Served with remoulade sauce, hot sauce, and a lemon.',
    tags: ['Appetizers', 'Shrimp', 'Fried'],
    category: 'Appetizers',
    starred: false,
  },
  {
    id: 'bite_9',
    name: 'Grilled Shrimp Basket',
    image: '/Images/Menu/product_1_black.png',
    prices: [
      {
        tag1: 'Medium',
        tag2: 13.95,
      },
      {
        tag1: 'Large',
        tag2: 17.95,
      }
    ],
    description: 'Juicy shrimp grilled with cajun spices and herbs.',
    tags: ['Appetizers', 'Shrimp', 'Grilled'],
    category: 'Appetizers',
    starred: false,
  },
  {
    id: 'bite_10',
    name: 'Swamp Fries',
    image: '/Images/Menu/product_1_red.png',
    prices: [
      {
        tag1: 'Plate',
        tag2: 9.45,
      },
    ],
    description: 'The ultimate loaded fries: Crispy cajun fries topped with shredded cheese, and our famous red beans with andouille sausage. Served with Remoulade and ketchup.',
    tags: ['Appetizers', 'Fries', 'Loaded'],
    category: 'Appetizers',
    starred: true,
  },
  {
    id: 'poboy_1',
    name: 'Blackened Shrimp Po-Boy',
    image: '/Images/Menu/product_2_black.png',
    prices: [
      {
        tag1: 'Regular',
        tag2: 17.70,
      },
    ],
    description: 'Spicy blackened shrimp served on crisp Leidenheimer bread dressed with lettuce, tomato, pickles and Sissy\'s Signature remoulade sauce.',
    tags: ['Po-Boys', 'Shrimp', 'Blackened'],
    category: 'Po-Boys',
    starred: false,
  },
  {
    id: 'poboy_2',
    name: 'Fried Catfish Po-Boy',
    image: '/Images/Menu/product_2_red.png',
    prices: [
      {
        tag1: 'Regular',
        tag2: 16.55,
      },
    ],
    description: 'Crispy catfish nuggets fried to perfection. Served on fresh Leidenheimer bread with lettuce, tomato, and pickles. Topped with Sissy\'s Signature Remoulade sauce.',
    tags: ['Po-Boys', 'Catfish', 'Fried'],
    category: 'Po-Boys',
    starred: true,
  },
  {
    id: 'poboy_3',
    name: 'Fried Shrimp Po-Boy',
    image: '/Images/Menu/product_1_black.png',
    prices: [
      {
        tag1: 'Regular',
        tag2: 17.70,
      },
    ],
    description: 'Golden fried shrimp served on crisp Leidenheimer bread. Dressed with Sissy\'s signature remoulade sauce, lettuce, tomato, and pickles.',
    tags: ['Po-Boys', 'Shrimp', 'Fried'],
    category: 'Po-Boys',
    starred: false,
  },
  {
    id: 'poboy_4',
    name: 'Smoked Sausage Po-Boy',
    image: '/Images/Menu/product_1_red.png',
    prices: [
      {
        tag1: 'Regular',
        tag2: 16.55,
      },
    ],
    description: 'Butterflied, grilled andouille sausage served on toasted Leidenheimer bread dressed with lettuce, tomato, pickles and Sissy\'s Signature remoulade sauce.',
    tags: ['Po-Boys', 'Sausage', 'Smoked'],
    category: 'Po-Boys',
    starred: false,
  },
  {
    id: 'poboy_5',
    name: 'Softshell Crab Po-Boy',
    image: '/Images/Menu/product_2_black.png',
    prices: [
      {
        tag1: 'Regular',
        tag2: 18.89,
      },
    ],
    description: 'Two whole fried soft shell crabs served between crisp Leidenheimer bread. On a bed of lettuce, tomato, and pickles, topped with Sissy\'s Signature remoulade sauce.',
    tags: ['Po-Boys', 'Crab', 'Soft Shell'],
    category: 'Po-Boys',
    starred: true,
  },
  {
    id: 'poboy_6',
    name: 'Blackened Catfish Po-Boy',
    image: '/Images/Menu/product_2_red.png',
    prices: [
      {
        tag1: 'Regular',
        tag2: 18.29,
      },
    ],
    description: 'Blackened Catfish filets served on crisp Leidenheimer bread dressed with lettuce, tomato, pickles and Sissy\'s Signature remoulade sauce.',
    tags: ['Po-Boys', 'Catfish', 'Blackened'],
    category: 'Po-Boys',
    starred: false,
  },
  {
    id: 'poboy_7',
    name: 'Fried Alligator Po-Boy',
    image: '/Images/Menu/product_1_black.png',
    prices: [
      {
        tag1: 'Regular',
        tag2: 20.09,
      },
    ],
    description: 'Breaded and fried, double tenderized, Louisiana alligator nuggets, served on fresh Leidenheimer po\'boy bread. Dressed with lettuce, tomato, pickles, and Sissy\'s signature remoulade sauce.',
    tags: ['Po-Boys', 'Alligator', 'Fried'],
    category: 'Po-Boys',
    starred: true,
  },
  {
    id: 'plate_1',
    name: 'Catfish Platter',
    image: '/Images/Menu/product_1_red.png',
    prices: [
      {
        tag1: 'Plate',
        tag2: 21.25,
      },
    ],
    description: 'Generous serving of catfish nuggets fried to perfection served with fries and hush puppies. Garnished with a lemon wedge, ketchup, hot sauce, and remoulade.',
    tags: ['Platters', 'Catfish', 'Dinner'],
    category: 'Platters',
    starred: false,
  },
  {
    id: 'plate_2',
    name: 'Half And Half Platter',
    image: '/Images/Menu/product_2_black.png',
    prices: [
      {
        tag1: 'Plate',
        tag2: 27.15,
      },
    ],
    description: 'Best of both worlds: 6 pieces of fried shrimp and 6 pieces of crispy fried catfish served with fries and hush puppies. Garnished with lemon and sauces.',
    tags: ['Platters', 'Shrimp', 'Catfish'],
    category: 'Platters',
    starred: true,
  },
  {
    id: 'plate_3',
    name: 'Seafood Platter',
    image: '/Images/Menu/product_2_red.png',
    prices: [
      {
        tag1: 'Plate',
        tag2: 36.59,
      },
    ],
    description: 'The big one: Fried shrimp, fried catfish, and fried soft shell crab served with fries and hush puppies. A true seafood feast.',
    tags: ['Platters', 'Seafood', 'Platter'],
    category: 'Platters',
    starred: true,
  },
  {
    id: 'plate_4',
    name: 'Shrimp Platter',
    image: '/Images/Menu/product_1_black.png',
    prices: [
      {
        tag1: 'Plate',
        tag2: 24.79,
      },
    ],
    description: 'Crispy fried shrimp served with fries and hush puppies. Garnished with a lemon wedge, ketchup, hot sauce, and Sissy\'s signature remoulade sauce.',
    tags: ['Platters', 'Shrimp', 'Dinner'],
    category: 'Platters',
    starred: false,
  },
  {
    id: 'plate_5',
    name: 'Sweep the Kitchen Platter',
    image: '/Images/Menu/product_1_red.png',
    prices: [
      {
        tag1: 'Feast',
        tag2: 48.39,
      },
    ],
    description: 'For the hungry: 6 Fried Shrimp, 6 Fried Catfish nuggets, 1 whole Softshell Crab, 8 Alligator nuggets, fries, and hush puppies. Served with all the sauces.',
    tags: ['Platters', 'Seafood', 'Feast'],
    category: 'Platters',
    starred: true,
  },
];