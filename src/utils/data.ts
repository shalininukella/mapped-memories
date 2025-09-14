export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  location: string;
  budget: string;
  category: string;
  content: string;
  tags: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
  image: string;
  description: string;
  visitedDate: string;
  blogPostId?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Backpacking Through Southeast Asia',
    excerpt: 'Our incredible 3-month journey across Thailand, Vietnam, and Cambodia on just $50 a day.',
    image: 'https://images.pexels.com/photos/2422913/pexels-photo-2422913.jpeg',
    date: '2024-01-15',
    location: 'Southeast Asia',
    budget: '$4,500 total',
    category: 'Backpacking',
    content: 'Our Southeast Asian adventure was the trip of a lifetime...',
    tags: ['budget', 'backpacking', 'asia', 'culture']
  },
  {
    id: '2',
    title: 'European Cities on a Shoestring',
    excerpt: 'Exploring 8 European capitals in 2 weeks with smart budget strategies and local insights.',
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
    date: '2024-02-20',
    location: 'Europe',
    budget: '$3,200 total',
    category: 'City Hopping',
    content: 'Europe doesn\'t have to break the bank...',
    tags: ['europe', 'cities', 'budget', 'culture']
  },
  {
    id: '3',
    title: 'Road Trip Across New Zealand',
    excerpt: 'Epic landscapes and hidden gems discovered during our 3-week campervan adventure.',
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg',
    date: '2024-03-10',
    location: 'New Zealand',
    budget: '$5,800 total',
    category: 'Road Trip',
    content: 'New Zealand\'s natural beauty exceeded all expectations...',
    tags: ['roadtrip', 'nature', 'camping', 'adventure']
  },
  {
    id: '4',
    title: 'Japan\'s Hidden Treasures',
    excerpt: 'Beyond Tokyo and Kyoto - discovering authentic Japan in small towns and rural areas.',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    date: '2024-04-05',
    location: 'Japan',
    budget: '$4,100 total',
    category: 'Cultural',
    content: 'Japan\'s rural beauty and traditional culture...',
    tags: ['japan', 'culture', 'tradition', 'hidden gems']
  },
  {
    id: '5',
    title: 'South American Adventure',
    excerpt: 'From Machu Picchu to Patagonia - our unforgettable journey through South America.',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
    date: '2024-05-18',
    location: 'South America',
    budget: '$6,200 total',
    category: 'Adventure',
    content: 'South America offered adventures beyond our wildest dreams...',
    tags: ['southamerica', 'trekking', 'culture', 'adventure']
  },
  {
    id: '6',
    title: 'African Safari & Culture',
    excerpt: 'Wildlife encounters and cultural immersion in Kenya, Tanzania, and Rwanda.',
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
    date: '2024-06-12',
    location: 'East Africa',
    budget: '$7,500 total',
    category: 'Safari',
    content: 'Africa changed our perspective on life and travel...',
    tags: ['africa', 'safari', 'wildlife', 'culture']
  }
];

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Bangkok',
    country: 'Thailand',
    coordinates: [100.5018, 13.7563],
    image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
    description: 'Vibrant street food and golden temples',
    visitedDate: '2024-01',
    blogPostId: '1'
  },
  {
    id: '2',
    name: 'Paris',
    country: 'France',
    coordinates: [2.3522, 48.8566],
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
    description: 'City of lights and romance',
    visitedDate: '2024-02',
    blogPostId: '2'
  },
  {
    id: '3',
    name: 'Queenstown',
    country: 'New Zealand',
    coordinates: [168.6626, -45.0312],
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg',
    description: 'Adventure capital surrounded by stunning landscapes',
    visitedDate: '2024-03',
    blogPostId: '3'
  },
  {
    id: '4',
    name: 'Kyoto',
    country: 'Japan',
    coordinates: [135.7681, 35.0116],
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    description: 'Ancient temples and traditional culture',
    visitedDate: '2024-04',
    blogPostId: '4'
  },
  {
    id: '5',
    name: 'Cusco',
    country: 'Peru',
    coordinates: [-71.9675, -13.5319],
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
    description: 'Gateway to Machu Picchu',
    visitedDate: '2024-05',
    blogPostId: '5'
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah & Mike',
    location: 'California, USA',
    text: 'These two helped us plan the perfect European honeymoon on our tight budget. Every recommendation was spot-on!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
  },
  {
    id: '2',
    name: 'Alex Chen',
    location: 'Toronto, Canada',
    text: 'Their Southeast Asia itinerary saved us thousands while giving us the most authentic experiences. Incredible value!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    text: 'The detailed budget breakdowns and local tips made our Japan trip absolutely perfect. Would recommend to anyone!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg'
  }
];

export const upcomingTravels = [
  {
    id: '1',
    destination: 'Iceland',
    dates: 'July 2024',
    image: 'https://images.pexels.com/photos/1483337/pexels-photo-1483337.jpeg',
    description: 'Northern lights and epic waterfalls',
    status: 'Planning'
  },
  {
    id: '2',
    destination: 'Morocco',
    dates: 'September 2024',
    image: 'https://images.pexels.com/photos/2374967/pexels-photo-2374967.jpeg',
    description: 'Desert adventures and vibrant markets',
    status: 'Booked'
  },
  {
    id: '3',
    destination: 'Nepal',
    dates: 'November 2024',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    description: 'Himalayan trekking expedition',
    status: 'Researching'
  }
];

export const sampleItinerary = {
  title: 'Southeast Asia Explorer - 21 Days',
  totalBudget: '$2,800',
  countries: ['Thailand', 'Vietnam', 'Cambodia'],
  days: [
    {
      day: 1,
      location: 'Bangkok, Thailand',
      activities: ['Arrive at Suvarnabhumi Airport', 'Check into hostel in Khao San Road', 'Street food tour'],
      budget: '$45',
      accommodation: 'Mad Monkey Hostel',
      meals: 'Street food ($8), Restaurant dinner ($12)'
    },
    {
      day: 2,
      location: 'Bangkok, Thailand',
      activities: ['Visit Grand Palace', 'Wat Pho Temple', 'Chao Phraya River cruise'],
      budget: '$35',
      accommodation: 'Mad Monkey Hostel',
      meals: 'Local breakfast ($3), Lunch at market ($6), Dinner ($10)'
    },
    {
      day: 3,
      location: 'Bangkok to Chiang Mai',
      activities: ['Morning flight to Chiang Mai', 'Explore Old City', 'Night Bazaar'],
      budget: '$85',
      accommodation: 'Hostel in Old City',
      meals: 'Airport food ($8), Khao Soi lunch ($5), Night market dinner ($8)'
    }
  ]
};