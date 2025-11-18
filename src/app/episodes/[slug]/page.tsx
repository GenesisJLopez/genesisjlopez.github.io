

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { locations, vlogs, blogPosts, businesses } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.episodeSlug,
  }));
}

export default function EpisodePage({ params }: { params: { slug: string } }) {
  const location = locations.find((l) => l.episodeSlug === params.slug);

  if (!location) {
    notFound();
  }

  // For demo purposes, we'll find related content. In a real app, this would be structured better.
  const vlog = vlogs[0]; // Assuming first vlog is related
  const post = blogPosts.find(p => p.slug === location.blogSlug);
  const relatedBusinesses = businesses.slice(0, 2);
  const headerImage = placeholderImages.find(p => p.id === location.imageId);


  return (
    <article>
        <section className="relative h-[50vh] w-full text-white">
          {headerImage && (
            <Image
              src={headerImage.imageUrl}
              alt={location.name}
              fill
              className="object-cover"
              priority
              data-ai-hint={headerImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <p className="text-lg uppercase tracking-widest text-accent">Coming Soon</p>
            <h1 className="font-headline text-5xl font-bold md:text-7xl">
              Episode: {location.name}
            </h1>
          </div>
        </section>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold">This Adventure is Still Being Planned!</h2>
            <p className="mt-4 text-muted-foreground text-lg">
                The full episode for {location.name} is coming in 2026. Once released, this page will be filled with the full video episode, a photo gallery, our travel journal, and information about all the amazing businesses we feature.
            </p>
            <Button asChild className="mt-8">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
      </div>
    </article>
  );
}
