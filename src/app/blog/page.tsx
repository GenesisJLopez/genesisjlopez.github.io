'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { PageHeader } from "@/components/shared/PageHeader";
import { useFirestore, useCollection, useMemoFirebase } from "@/firebase";
import { collectionGroup, query, orderBy } from "firebase/firestore";
import type { TravelBlog } from "@/lib/types";

export default function BlogPage() {
  const firestore = useFirestore();
  
  // This query uses a collectionGroup to fetch blogs from ALL users' subcollections.
  // This requires a specific index in Firestore.
  // The index is: collectionGroup: travelBlogs, field: datePublished, order: descending.
  const blogsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collectionGroup(firestore, 'travelBlogs'), orderBy('datePublished', 'desc'));
  }, [firestore]);
  
   const { data: posts, isLoading } = useCollection<TravelBlog>(blogsQuery);


  return (
    <div>
      <PageHeader
        title="From Our Journal"
        description="Stories, tips, and reflections from our travels around the world."
        imageId="hero-blog"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {isLoading && <p className="text-center">Loading posts...</p>}
        {!isLoading && posts && (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const postImage = placeholderImages.find(p => p.id === 'post-tokyo-streets'); // Placeholder
              return (
                <Card key={post.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
                   {postImage && (
                    <Link href={`/blog/${post.slug}`} className="block aspect-video w-full overflow-hidden">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        data-ai-hint={postImage.imageHint}
                      />
                    </Link>
                   )}
                  <CardHeader>
                    <CardDescription>{post.datePublished ? new Date(post.datePublished.toDate()).toLocaleDateString() : 'Just now'} &bull; Travel & Ask</CardDescription>
                    <CardTitle className="font-headline text-2xl">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{post.content.split('\n')[0]}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
        {!isLoading && (!posts || posts.length === 0) && (
            <p className="text-center text-muted-foreground">No blog posts have been published yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}
