
import type { NavItem, Post, Vlog, Review, Business, Location } from './types';

export const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Episodes', href: '/#episodes' },
  { title: 'Become a Featured Business', href: '/premium'}
];

export const blogPosts: Post[] = [
  {
    slug: 'exploring-the-neon-lit-streets-of-tokyo',
    title: 'Exploring the Neon-Lit Streets of Tokyo',
    excerpt: 'A journey through the vibrant heart of Japan, from Shibuya Crossing to the serene alleys of Yanaka.',
    date: '2023-10-26',
    author: 'Genesis',
    image: 'post-tokyo-streets',
    content: `
# A Dive into Tokyo's Electric Dreams

There's a certain pulse to Tokyo that you can't find anywhere else on the planet. It's a city of contrasts, where ancient temples stand defiantly in the shadow of neon-drenched skyscrapers. Our first stop was, of course, the legendary **Shibuya Crossing**.

![Shibuya Crossing](https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop)

### The Scramble
Standing in the middle of that organized chaos is a humbling experience. Thousands of people, a symphony of footsteps and conversations, all moving with a purpose. We found a spot at the Starbucks overlooking the crossing – a classic tourist move, but one that offers an unparalleled view of the spectacle.

### Finding Peace in Yanaka
To escape the beautiful madness, we ventured to Yanaka, a district that feels like a step back in time. The old-world charm is palpable here. We wandered through Yanaka Ginza, a shopping street with a Showa-period atmosphere, sampling local snacks and marveling at the traditional storefronts. It was a perfect antidote to the sensory overload of Shibuya.

### Culinary Adventures
Tokyo's food scene deserves its own epic. From a seven-seat ramen bar that changed our lives to the freshest sushi we've ever tasted at the Tsukiji Outer Market, every meal was a discovery. Our advice: be adventurous. Point at something on the menu you can't read. You won't be disappointed.
    `,
  },
  {
    slug: 'serenity-in-kyoto-a-journey-through-temples',
    title: 'Serenity in Kyoto: A Journey Through Temples',
    excerpt: 'Finding peace and beauty in the ancient capital of Japan. A guide to Kyoto\'s most breathtaking temples.',
    date: '2023-11-05',
    author: 'Stephanie',
    image: 'post-kyoto-temples',
    content: `
# Whispers of the Old Capital: Kyoto

If Tokyo is the heart of modern Japan, Kyoto is its soul. This city was the imperial capital for over a thousand years, and its legacy is etched into every corner.

![Kinkaku-ji Temple](https://images.unsplash.com/photo-1528134374301-a2725ad05396?q=80&w=1974&auto=format&fit=crop)

### The Golden Pavilion
Our first visit was to Kinkaku-ji, the famous Golden Pavilion. Seeing it reflect perfectly in the mirror pond is a moment of pure magic. The top two floors are completely covered in gold leaf, a stunning symbol of the opulent Kitayama culture.

### A Walk Through Bamboos
The Arashiyama Bamboo Grove is another of Kyoto's iconic sights. Walking through the towering stalks of bamboo feels otherworldly. The way the light filters through the canopy, the rustling sound of the leaves in the wind – it's an experience that soothes the spirit.

### Fushimi Inari's Thousand Gates
Perhaps our most memorable experience was hiking through the thousands of vermilion torii gates at Fushimi Inari Shrine. The path winds up the mountain, creating vibrant tunnels of color. Each gate is a donation from a person or a business, a physical representation of their prayers and gratitude. It's a powerful testament to faith and tradition.
    `,
  },
  {
    slug: 'the-art-of-pasta-a-culinary-tour-of-italy',
    title: 'The Art of Pasta: A Culinary Tour of Italy',
    excerpt: 'From Rome to Bologna, we ate our way through Italy, discovering the secrets of authentic pasta.',
    date: '2024-03-15',
    author: 'Genesis & Stephanie',
    image: 'post-italian-pasta',
    content: `
# Italy on a Plate: The Pasta Diaries

We went to Italy with a mission: to eat as much pasta as humanly possible. Mission accomplished. But we also learned that "Italian food" is a myth. It's a country of fiercely proud regional cuisines.

![Making Pasta](https://images.unsplash.com/photo-1598696803133-ac2b7352312a?q=80&w=1974&auto=format&fit=crop)

### Rome: The Four Pastas
In Rome, it's all about the classics. We had a checklist:
1.  **Cacio e Pepe:** Deceptively simple, incredibly delicious. Pecorino Romano, black pepper, and pasta water. Magic.
2.  **Gricia:** Cacio e Pepe's ancestor, with the addition of crispy guanciale (cured pork jowl).
3.  **Amatriciana:** Add tomatoes to Gricia, and you get this masterpiece.
4.  **Carbonara:** The king. Guanciale, eggs, Pecorino, and pepper. No cream, ever.

### Bologna: The Heart of Emilia-Romagna
Bologna, known as 'La Grassa' (the fat one), is the capital of rich, satisfying food. We took a cooking class and learned to make fresh tagliatelle al ragù – the real bolognese sauce, a slow-cooked wonder that bears little resemblance to what's served elsewhere. The taste of fresh, handmade pasta is a revelation. It has a texture and flavor that dried pasta just can't match.
    `,
  },
  {
    slug: 'a-love-letter-to-paris',
    title: 'A Love Letter to Paris',
    excerpt: 'The city of lights, love, and endless charm. Falling for Paris all over again.',
    date: '2024-05-20',
    author: 'Stephanie',
    image: 'post-paris-eiffel',
    content: `
# Paris, Je T'aime

Paris is not just a place; it's an idea, a feeling. It's the cliché that turns out to be true. Every street corner looks like a postcard, every café invites you to linger, and the weight of art and history is all around.

![Louvre Museum](https://images.unsplash.com/photo-1591901358922-83546b6e41df?q=80&w=2070&auto=format&fit=crop)

### Museum Miles
You could spend a lifetime exploring Paris's museums. The Louvre is overwhelming in its scale and grandeur. Seeing the Mona Lisa in person is a bucket-list item, but the real joy is getting lost in its endless galleries. We spent a whole afternoon in the Musée d'Orsay, a former train station now home to an incredible collection of Impressionist art.

### The Art of Flânerie
The best way to experience Paris is to simply walk. Be a *flâneur* – an idle stroller, an observer of city life. We wandered through Le Marais, with its chic boutiques and historic squares, explored the intellectual heart of the Latin Quarter, and watched the world go by from a café in Saint-Germain-des-Prés.

### City of Lights
And then, there's Paris at night. Seeing the Eiffel Tower sparkle on the hour is pure, unadulterATED joy. A nighttime cruise on the Seine offers a magical perspective of the city's illuminated landmarks. Paris truly earns its nickname, the City of Lights.
    `,
  },
];

export const vlogs: Vlog[] = [
  {
    id: '1',
    title: 'Japan by Rail: Our Craziest Train Journey!',
    description: 'We took the Shinkansen (bullet train) from Tokyo to Kyoto. See the amazing views and our experience with the world\'s most efficient rail system.',
    thumbnail: 'vlog-japan-trains',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Italian Market Tour: Tasting Bologna',
    description: 'Genesis and Stephanie explore the Quadrilatero, Bologna\'s ancient food market, tasting everything from mortadella to parmigiano.',
    thumbnail: 'vlog-market-tour',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Island Hopping in Thailand - Phi Phi Islands',
    description: 'Join us as we explore the stunning limestone cliffs and turquoise waters of the Phi Phi Islands in Thailand.',
    thumbnail: 'vlog-island-hopping',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export const questions: Vlog[] = [
    {
        id: 'q1',
        title: 'Q&A Session: How We Afford to Travel',
        description: 'You asked, we answered! Our top tips and strategies for budgeting and saving for long-term travel.',
        thumbnail: 'vlog-qna',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'q2',
        title: 'Travel Trivia: Guess the Capital City!',
        description: 'Play along with us! We quiz each other on world capitals. How many can you get right?',
        thumbnail: 'vlog-market-tour',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'q3',
        title: 'Packing Disasters: What NOT to Bring',
        description: 'Learn from our mistakes! We share our biggest packing regrets and what we wish we had left at home.',
        thumbnail: 'vlog-island-hopping',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
]

export const reviews: Review[] = [
  {
    id: '1',
    title: 'Hotel Oceania, Santorini',
    category: 'Hotel',
    rating: 5,
    summary: 'Absolutely breathtaking views and impeccable service. Waking up to the caldera view was a dream come true. Worth every penny for a special occasion.',
    image: 'review-hotel-oceania',
  },
  {
    id: '2',
    title: 'Bistro LeBlanc, Paris',
    category: 'Restaurant',
    rating: 4,
    summary: 'A charming, authentic Parisian bistro with fantastic steak frites. It\'s small and popular, so be sure to book in advance. The atmosphere is cozy and romantic.',
    image: 'review-bistro-leblanc',
  },
  {
    id: '3',
    title: 'Summit Adventure Tours, Costa Rica',
    category: 'Service',
    rating: 5,
    summary: 'The zip-lining and canopy tour was the highlight of our trip. The guides were professional, funny, and made us feel safe. Highly recommended for thrill-seekers.',
    image: 'review-adventure-tours',
  },
];

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Global Eats Catering',
    description: 'Bringing the world\'s flavors to your events. Specializing in international cuisine for weddings, corporate events, and private parties.',
    logo: 'biz-logo-1',
    website: '#',
  },
  {
    id: '2',
    name: 'Horizon Hotels',
    description: 'Luxury accommodations with a view. Our hotels are located in the most scenic destinations worldwide, offering unparalleled comfort and service.',
    logo: 'biz-logo-2',
    website: '#',
  },
  {
    id: '3',
    name: 'Summit Adventures',
    description: 'Your adventure starts here. We offer guided tours for hiking, climbing, and zip-lining in the world\'s most exciting natural parks.',
    logo: 'biz-logo-3',
    website: '#',
  },
];

export const locations: Location[] = [
    { id: '1', name: 'Tokyo, Japan', coords: { x: 80, y: 38 }, blogSlug: 'exploring-the-neon-lit-streets-of-tokyo', episodeSlug: 'tokyo-japan', imageId: 'post-tokyo-streets' },
    { id: '2', name: 'Kyoto, Japan', coords: { x: 79, y: 39 }, blogSlug: 'serenity-in-kyoto-a-journey-through-temples', episodeSlug: 'kyoto-japan', imageId: 'post-kyoto-temples' },
    { id: '3', name: 'Rome, Italy', coords: { x: 53, y: 34 }, blogSlug: 'the-art-of-pasta-a-culinary-tour-of-italy', episodeSlug: 'rome-italy', imageId: 'post-italian-pasta' },
    { id: '4', name: 'Paris, France', coords: { x: 49, y: 27 }, blogSlug: 'a-love-letter-to-paris', episodeSlug: 'paris-france', imageId: 'post-paris-eiffel' },
    { id: '5', name: 'Santorini, Greece', coords: { x: 57, y: 37 }, blogSlug: 'a-love-letter-to-paris', episodeSlug: 'santorini-greece', imageId: 'review-hotel-oceania' }, // Reusing slug for demo
    { id: '6', name: 'Costa Rica', coords: { x: 23, y: 48 }, blogSlug: 'serenity-in-kyoto-a-journey-through-temples', episodeSlug: 'costa-rica', imageId: 'review-adventure-tours' }, // Reusing slug for demo
  ];
