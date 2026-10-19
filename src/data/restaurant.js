export const RESTAURANT_DATA = {
  name: 'ỌJÀ KITCHEN',
  tagline: 'Contemporary Nigerian Gastronomy',
  location: 'Victoria Island, Lagos & Mayfair, London',
  hours: 'Tue – Sun: 12:00 PM – 11:30 PM',
  phone: '+234 (0) 1 892 4400',
  email: 'reservations@ojakitchen.com',

  hero: {
    badge: 'Michelin Guide Listed • Lagos & London',
    title: 'THE SOUL OF NIGERIAN FIRE',
    subtitle:
      'Where ancestral open-hearth embers meet avant-garde West African culinary artistry. Taste the smoke, the warmth, the celebration.',
    image: '/dishes/suya',
    stat1: { value: '48hr', label: 'Smoked Marinade' },
    stat2: { value: '100%', label: 'Ancestral Herbs' },
    stat3: { value: '4.9 ★', label: 'Culinary Acclaim' },
  },

  signatureDishes: [
    {
      id: 'suya-skewer',
      title: 'Heritage Yaji-Glazed Suya',
      tag: 'Flame Grill & Embers',
      price: '₦ 24,500',
      description:
        'Prime pasture-fed beef strip loin skewers dry-rubbed in our secret 12-spice northern yaji blend, char-grilled over aromatic hardwood coals, finished with pickled red onions and fresh ginger-infused honey drizzle.',
      notes: 'Notes: Hardwood charcoal smoke, roasted peanut crust, scotch bonnet heat',
      image: '/dishes/suya',
      badge: 'Chef Signature',
    },
    {
      id: 'smoky-jollof',
      title: 'Grand Cru Firewood Jollof',
      tag: 'Slow Pot Heritage',
      price: '₦ 28,000',
      description:
        'Aged long-grain rice slow-braised over smoking red cherry-wood with heirloom plum tomatoes, sweet bell peppers, and smoked crayfish broth. Crowned with char-grilled tiger prawns and caramelized dodo batons.',
      notes: 'Notes: Bottom-pot socarrat smoke, sweet caramelized plantain, tiger prawn umami',
      image: '/dishes/smoky_jollof',
      badge: 'Celebration Icon',
    },
    {
      id: 'egusi-oxtail',
      title: 'Slow-Braised Oxtail Egusi',
      tag: 'Native Pot & Swallow',
      price: '₦ 32,500',
      description:
        'Toasted hand-shelled melon seeds simmered in bleached palm oil with shredded bitterleaf, scent leaf, and dry-cured smoked catfish. Served alongside melt-in-mouth slow-braised oxtail and warm, velvet pounded yam.',
      notes: 'Notes: Rich nutty broth, tender collagen oxtail, aromatic wild scent leaf',
      image: '/dishes/egusi_soup',
      badge: 'Ancestral Classic',
    },
    {
      id: 'catfish-peppersoup',
      title: 'River Catfish Pepper Broth',
      tag: 'Herbal Elixir',
      price: '₦ 22,000',
      description:
        'Line-caught river catfish poached in a clarified golden broth of alligator pepper, uda pods, ehuru (calabash nutmeg), and fresh torn garden herbs. Searing, fragrant, and profoundly invigorating.',
      notes: 'Notes: Alligator pepper zest, toasted calabash nutmeg, restorative steam',
      image: '/dishes/pepper_soup',
      badge: 'Night Market Elixir',
    },
  ],

  fullMenu: {
    smallChops: [
      {
        name: 'Gourmet Asun Croquettes',
        price: '₦ 14,000',
        desc: 'Crispy panko goat meat croquettes with roasted scotch bonnet reduction and green herb emulsion.',
      },
      {
        name: 'Truffle Yam Fries & Suya Mayo',
        price: '₦ 9,500',
        desc: 'Twice-cooked white yam batons drizzled with white truffle oil and house-whipped yaji mayonnaise.',
      },
      {
        name: 'Charred Snail in Spicy Pepper Sauce',
        price: '₦ 19,000',
        desc: 'Giant African land snails sautéed in caramelized sweet pepper paste and scallions.',
      },
      {
        name: 'Golden Puff-Puff with Palm Treacle',
        price: '₦ 8,000',
        desc: 'Airy nutmeg-infused fried dough pillows served with dark spiced palm sugar dip.',
      },
    ],
    mains: [
      {
        name: '48-Hour Short Rib Ayamase (Ofada)',
        price: '₦ 34,000',
        desc: 'Bleached palm oil green pepper stew, fermented locust beans (iru), boiled farm eggs, and fragrant unpolished ofada rice.',
      },
      {
        name: 'Seafood Okra Royale',
        price: '₦ 36,000',
        desc: 'Finely sliced crunchy okra with jumbo tiger prawns, blue swimmer crab, calamari rings, and scotch bonnet relish.',
      },
      {
        name: 'Honey-Glazed Roasted Guinea Fowl',
        price: '₦ 29,500',
        desc: 'Spiced marinated whole bird slow-roasted over hardwood charcoal, served with roasted sweet potato mash.',
      },
      {
        name: 'Efo Riro with Smoked Assorted Cuts',
        price: '₦ 30,000',
        desc: 'Rich spinach pot cooked with dried shrimp, pomo, tripe, and shaki, served with choice of swallow.',
      },
    ],
    drinks: [
      {
        name: 'Zobo Sangria Royale',
        price: '₦ 8,500',
        desc: 'Wild hibiscus flower reduction, star anise, ginger, pressed orange, and sparkling champagne splash.',
      },
      {
        name: 'Smoked Palm Wine Highball',
        price: '₦ 9,000',
        desc: 'Fresh morning palm sap, infused with mezcal smoke, lime zest, and charred rosemary sprig.',
      },
      {
        name: 'Chapman 1960 Reserve',
        price: '₦ 7,500',
        desc: 'House-made grenadine, aromatic Angostura bitters, fresh cucumber, orange wheel, and sparkling tonic.',
      },
    ],
  },

  story: {
    subtitle: 'THE ESSENCE OF ỌJÀ',
    title: 'A Tapestry of Smoke, Spice & Royalty',
    p1: 'In Yoruba culture, "Ọjà" represents the bustling marketplace — the pulsating epicentre of life, conversation, aromatic spices, and shared feasts. It is where grandmother’s recipes meet the crackle of midnight open-fire grills.',
    p2: 'At Ọjà Kitchen, we honor this ancestral vitality with Michelin-level culinary rigor. We source our yaji spices directly from Kano artisans, our palm oil from organic groves in Edo, and our wood from sustainably seasoned hardwood timbers to craft the true smoky alchemy of Nigerian gastronomy.',
  },

  reviews: [
    {
      quote:
        'The Grand Cru Jollof captures that elusive smoky party flavor with the finesse of modern fine dining. Unrivalled anywhere in West Africa.',
      author: 'Folashade Adeyemi',
      title: 'Epicurean Critic, Lagos Luxury Post',
    },
    {
      quote:
        'The tender braised oxtail egusi melted like butter on the palate. The ambient lighting and curated playlist make this a masterclass in hospitality.',
      author: 'Chef David Sterling',
      title: 'London Gastronomy Quarterly',
    },
    {
      quote:
        'A multi-sensory tribute to Nigerian culinary royalty. Every bite of the suya takes you from the streets of the North straight into Michelin grandeur.',
      author: 'Chinedu Okeke',
      title: 'Afro-Luxury Life & Travel',
    },
  ],
}
