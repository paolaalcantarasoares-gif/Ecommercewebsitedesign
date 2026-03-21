export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  marca: string;
  aro: number;
  furacao: string;
  size: string[];
  color: string[];
  rating: number;
  reviews: number;
  featured?: boolean;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  images: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Sport Racing Wheel RS-7',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1729243830701-b3acde954451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGFsbG95JTIwc3BvcnRzfGVufDF8fHx8MTc3MzI0NjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sport Wheels',
    marca: 'Racing Pro',
    aro: 17,
    furacao: '5x112',
    size: ['17"', '18"', '19"', '20"'],
    color: ['Black', 'Silver', 'Gunmetal'],
    rating: 4.8,
    reviews: 124,
    featured: true,
    description: 'High-performance racing wheels designed for maximum speed and style. Lightweight alloy construction with aggressive spoke design.',
    specifications: [
      { label: 'Material', value: 'Forged Aluminum Alloy' },
      { label: 'Weight', value: '8.5 kg per wheel' },
      { label: 'Width', value: '8.5J - 9.5J' },
      { label: 'PCD', value: '5x112, 5x114.3' },
      { label: 'Offset', value: 'ET35 - ET45' },
      { label: 'Finish', value: 'Powder Coated' },
    ],
    images: [
      'https://images.unsplash.com/photo-1729243830701-b3acde954451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGFsbG95JTIwc3BvcnRzfGVufDF8fHx8MTc3MzI0NjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758563920433-4b89316160e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFsbG95JTIwd2hlZWwlMjByaW18ZW58MXx8fHwxNzczMjQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1772391579024-fc09e103be4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjB3aGVlbCUyMHJpbSUyMGF1dG9tb3RpdmV8ZW58MXx8fHwxNzczMjQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    id: '2',
    name: 'Black Matte Alloy Wheel',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1758563920433-4b89316160e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFsbG95JTIwd2hlZWwlMjByaW18ZW58MXx8fHwxNzczMjQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sport Wheels',
    marca: 'Elite Motors',
    aro: 18,
    furacao: "",
    size: ['18"', '19"', '20"'],
    color: ['Black', 'Matte Black'],
    rating: 4.7,
    reviews: 89,
    featured: true,
    description: 'Sleek matte black wheels perfect for modern vehicles. Elegant design with superior durability.',
    specifications: [
      { label: 'Material', value: 'Cast Aluminum Alloy' },
      { label: 'Weight', value: '9.2 kg per wheel' },
      { label: 'Width', value: '8.0J - 9.0J' },
      { label: 'PCD', value: '5x112, 5x120' },
      { label: 'Offset', value: 'ET40 - ET50' },
      { label: 'Finish', value: 'Matte Black Powder Coat' },
    ],
    images: [
      'https://images.unsplash.com/photo-1758563920433-4b89316160e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFsbG95JTIwd2hlZWwlMjByaW18ZW58MXx8fHwxNzczMjQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1729243830701-b3acde954451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGFsbG95JTIwc3BvcnRzfGVufDF8fHx8MTc3MzI0NjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    id: '3',
    name: 'Chrome Performance Rim',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1772391579024-fc09e103be4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjB3aGVlbCUyMHJpbSUyMGF1dG9tb3RpdmV8ZW58MXx8fHwxNzczMjQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sport Wheels',
    marca: 'Chrome Master',
    size: ['17"', '18"', '19"', '20"', '22"'],
    color: ['Chrome', 'Black Chrome'],
    rating: 4.9,
    reviews: 156,
    featured: true,
    description: 'Premium chrome finish wheels for the ultimate luxury look. Mirror-like shine with exceptional strength.',
    specifications: [
      { label: 'Material', value: 'Forged Aluminum with Chrome Plating' },
      { label: 'Weight', value: '8.8 kg per wheel' },
      { label: 'Width', value: '8.5J - 10.0J' },
      { label: 'PCD', value: '5x114.3, 5x120' },
      { label: 'Offset', value: 'ET30 - ET45' },
      { label: 'Finish', value: 'Triple Chrome Plated' },
    ],
    images: [
      'https://images.unsplash.com/photo-1772391579024-fc09e103be4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjB3aGVlbCUyMHJpbSUyMGF1dG9tb3RpdmV8ZW58MXx8fHwxNzczMjQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1752959818576-b0991721789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3aGVlbCUyMGRldGFpbHxlbnwxfHx8fDE3NzMyNDYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    aro: 17,
    furacao: ""
  },
  {
    id: '4',
    name: 'SUV Off-Road Wheel',
    price: 1099.99,
    image: 'https://images.unsplash.com/photo-1617045434421-a72d713fc8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjB0cnVjayUyMHdoZWVsJTIwdGlyZXxlbnwxfHx8fDE3NzMyNDYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'SUV Wheels',
    marca: 'Terrain King',
    aro: 17,
    furacao: "",
    size: ['17"', '18"', '20"'],
    color: ['Black', 'Bronze', 'Gunmetal'],
    rating: 4.6,
    reviews: 98,
    featured: true,
    description: 'Rugged off-road wheels built for SUVs and trucks. Maximum durability for all terrains.',
    specifications: [
      { label: 'Material', value: 'Heavy-Duty Alloy' },
      { label: 'Weight', value: '11.5 kg per wheel' },
      { label: 'Width', value: '9.0J - 10.0J' },
      { label: 'PCD', value: '6x139.7, 5x150' },
      { label: 'Offset', value: 'ET-12 - ET20' },
      { label: 'Finish', value: 'Powder Coated' },
    ],
    images: [
      'https://images.unsplash.com/photo-1617045434421-a72d713fc8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjB0cnVjayUyMHdoZWVsJTIwdGlyZXxlbnwxfHx8fDE3NzMyNDYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1705357311458-398681eb9da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd29ya3Nob3AlMjB3aGVlbHN8ZW58MXx8fHwxNzczMjQ2MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    id: '5',
    name: 'Performance Racing Wheel Pro',
    price: 1399.99,
    image: 'https://images.unsplash.com/photo-1767712774532-2d58c9edf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGNhciUyMHdoZWVsJTIwY2xvc2V8ZW58MXx8fHwxNzczMjQ2MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sport Wheels',
    marca: 'Racing Pro',
    aro: 18,
    furacao: "",
    size: ['18"', '19"', '20"'],
    color: ['Black', 'Red', 'Silver'],
    rating: 4.8,
    reviews: 142,
    description: 'Professional-grade racing wheels for track performance. Ultra-lightweight construction.',
    specifications: [
      { label: 'Material', value: 'Forged Aluminum' },
      { label: 'Weight', value: '7.8 kg per wheel' },
      { label: 'Width', value: '9.0J - 10.0J' },
      { label: 'PCD', value: '5x112, 5x114.3' },
      { label: 'Offset', value: 'ET35 - ET48' },
      { label: 'Finish', value: 'Powder Coated' },
    ],
    images: [
      'https://images.unsplash.com/photo-1767712774532-2d58c9edf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGNhciUyMHdoZWVsJTIwY2xvc2V8ZW58MXx8fHwxNzczMjQ2MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1553072464-6e106d8b602f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB3aGVlbCUyMHNwb3J0cyUyMGNhcnxlbnwxfHx8fDE3NzMyNDYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    id: '6',
    name: 'Track Racing Wheel Elite',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1553072464-6e106d8b602f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB3aGVlbCUyMHNwb3J0cyUyMGNhcnxlbnwxfHx8fDE3NzMyNDYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sport Wheels',
    marca: 'Track Master',
    size: ['19"', '20"', '21"'],
    color: ['Black', 'Silver', 'Titanium'],
    rating: 4.9,
    reviews: 178,
    description: 'Elite racing wheels for serious enthusiasts. Competition-ready design and performance.',
    specifications: [
      { label: 'Material', value: 'Forged Aluminum Alloy' },
      { label: 'Weight', value: '7.5 kg per wheel' },
      { label: 'Width', value: '9.5J - 11.0J' },
      { label: 'PCD', value: '5x112, 5x114.3, 5x120' },
      { label: 'Offset', value: 'ET30 - ET45' },
      { label: 'Finish', value: 'Anodized' },
    ],
    images: [
      'https://images.unsplash.com/photo-1553072464-6e106d8b602f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB3aGVlbCUyMHNwb3J0cyUyMGNhcnxlbnwxfHx8fDE3NzMyNDYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1732564401435-1a27110f2528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzcG9ydHMlMjBjYXIlMjB3aGVlbHxlbnwxfHx8fDE3NzMyNDYxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    aro: 19,
    furacao: ""
  },
  {
    id: '7',
    name: 'Luxury Design Wheel',
    price: 1799.99,
    image: 'https://images.unsplash.com/photo-1752959818576-b0991721789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3aGVlbCUyMGRldGFpbHxlbnwxfHx8fDE3NzMyNDYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sport Wheels',
    marca: 'Luxury Auto',
    aro: 19,
    furacao: "",
    size: ['19"', '20"', '21"', '22"'],
    color: ['Silver', 'Chrome', 'Black'],
    rating: 4.7,
    reviews: 92,
    description: 'Premium luxury wheels with sophisticated design. Perfect for high-end vehicles.',
    specifications: [
      { label: 'Material', value: 'Forged Aluminum' },
      { label: 'Weight', value: '9.0 kg per wheel' },
      { label: 'Width', value: '8.5J - 10.5J' },
      { label: 'PCD', value: '5x112, 5x120' },
      { label: 'Offset', value: 'ET35 - ET50' },
      { label: 'Finish', value: 'Polished' },
    ],
    images: [
      'https://images.unsplash.com/photo-1752959818576-b0991721789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3aGVlbCUyMGRldGFpbHxlbnwxfHx8fDE3NzMyNDYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1772391579024-fc09e103be4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjB3aGVlbCUyMHJpbSUyMGF1dG9tb3RpdmV8ZW58MXx8fHwxNzczMjQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    id: '8',
    name: 'Red Sport Performance Wheel',
    price: 1449.99,
    image: 'https://images.unsplash.com/photo-1732564401435-1a27110f2528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzcG9ydHMlMjBjYXIlMjB3aGVlbHxlbnwxfHx8fDE3NzMyNDYxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sport Wheels',
    marca: 'Speed Demon',
    aro: 18,
    furacao: "",
    size: ['18"', '19"', '20"'],
    color: ['Red', 'Black', 'White'],
    rating: 4.8,
    reviews: 134,
    description: 'Bold red accent wheels for sporty cars. Stand out with aggressive styling.',
    specifications: [
      { label: 'Material', value: 'Cast Aluminum Alloy' },
      { label: 'Weight', value: '8.9 kg per wheel' },
      { label: 'Width', value: '8.5J - 9.5J' },
      { label: 'PCD', value: '5x114.3' },
      { label: 'Offset', value: 'ET38 - ET45' },
      { label: 'Finish', value: 'Powder Coated with Red Accents' },
    ],
    images: [
      'https://images.unsplash.com/photo-1732564401435-1a27110f2528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzcG9ydHMlMjBjYXIlMjB3aGVlbHxlbnwxfHx8fDE3NzMyNDYxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1729243830701-b3acde954451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGFsbG95JTIwc3BvcnRzfGVufDF8fHx8MTc3MzI0NjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    id: '9',
    name: 'Truck Heavy-Duty Wheel',
    price: 1199.99,
    image: 'https://images.unsplash.com/photo-1705357311458-398681eb9da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd29ya3Nob3AlMjB3aGVlbHN8ZW58MXx8fHwxNzczMjQ2MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Truck Wheels',
    marca: 'Heavy Hauler',
    aro: 17,
    furacao: "",
    size: ['17"', '18"', '20"'],
    color: ['Black', 'Gunmetal', 'Bronze'],
    rating: 4.7,
    reviews: 87,
    description: 'Heavy-duty wheels designed for trucks and commercial vehicles. Maximum load capacity.',
    specifications: [
      { label: 'Material', value: 'Heavy-Duty Steel Alloy' },
      { label: 'Weight', value: '13.2 kg per wheel' },
      { label: 'Width', value: '9.0J - 10.0J' },
      { label: 'PCD', value: '6x139.7, 8x165.1' },
      { label: 'Offset', value: 'ET-12 - ET18' },
      { label: 'Finish', value: 'Powder Coated' },
    ],
    images: [
      'https://images.unsplash.com/photo-1705357311458-398681eb9da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd29ya3Nob3AlMjB3aGVlbHN8ZW58MXx8fHwxNzczMjQ2MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1617045434421-a72d713fc8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjB0cnVjayUyMHdoZWVsJTIwdGlyZXxlbnwxfHx8fDE3NzMyNDYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    id: '10',
    name: 'Premium Performance Rim',
    price: 1699.99,
    image: 'https://images.unsplash.com/photo-1769500152368-a38a756b0367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwZXJmb3JtYW5jZSUyMHJpbXN8ZW58MXx8fHwxNzczMjQ2MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sport Wheels',
    marca: 'Elite Motors',
    aro: 19,
    furacao: "",
    size: ['19"', '20"', '21"'],
    color: ['Black', 'Silver', 'Bronze'],
    rating: 4.9,
    reviews: 201,
    description: 'Top-tier performance rims for the ultimate driving experience. Precision engineered.',
    specifications: [
      { label: 'Material', value: 'Forged Aluminum Alloy' },
      { label: 'Weight', value: '7.9 kg per wheel' },
      { label: 'Width', value: '9.0J - 11.0J' },
      { label: 'PCD', value: '5x112, 5x114.3, 5x120' },
      { label: 'Offset', value: 'ET32 - ET48' },
      { label: 'Finish', value: 'Anodized' },
    ],
    images: [
      'https://images.unsplash.com/photo-1769500152368-a38a756b0367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwZXJmb3JtYW5jZSUyMHJpbXN8ZW58MXx8fHwxNzczMjQ2MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767712774532-2d58c9edf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGNhciUyMHdoZWVsJTIwY2xvc2V8ZW58MXx8fHwxNzczMjQ2MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
];

export const categories = [
  {
    id: '1',
    name: 'Sport Wheels',
    image: 'https://images.unsplash.com/photo-1729243830701-b3acde954451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGFsbG95JTIwc3BvcnRzfGVufDF8fHx8MTc3MzI0NjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-performance wheels for sports cars'
  },
  {
    id: '2',
    name: 'SUV Wheels',
    image: 'https://images.unsplash.com/photo-1617045434421-a72d713fc8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjB0cnVjayUyMHdoZWVsJTIwdGlyZXxlbnwxfHx8fDE3NzMyNDYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Durable wheels for SUVs and crossovers'
  },
  {
    id: '3',
    name: 'Truck Wheels',
    image: 'https://images.unsplash.com/photo-1705357311458-398681eb9da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd29ya3Nob3AlMjB3aGVlbHN8ZW58MXx8fHwxNzczMjQ2MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Heavy-duty wheels for trucks and pickups'
  }
];
