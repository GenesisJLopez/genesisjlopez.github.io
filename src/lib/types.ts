
export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string;
};

export type Vlog = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
};

export type Review = {
  id: string;
  title: string;
  category: 'Hotel' | 'Restaurant' | 'Service';
  rating: number;
  summary: string;
  image: string;
};

export type Business = {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
};

export type Location = {
  id: string;
  name: string;
  coords: { x: number; y: number }; // Percentage coordinates for the map image
  blogSlug: string;
  episodeSlug: string;
  imageId: string;
};

// Firestore Data Types
export interface TravelBlog {
    id: string;
    title: string;
    content: string;
    authorId: string;
    datePublished: any; // Allow serverTimestamp
    dateModified?: any;
    destination: string;
    imageUrls?: string[];
    slug: string;
}

    
