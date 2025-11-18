'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { useDoc, useFirestore, useMemoFirebase, useCollection } from '@/firebase';
import { doc, collectionGroup, query, where, limit } from 'firebase/firestore';
import type { TravelBlog } from '@/lib/types';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Skeleton } from '@/components/ui/skeleton';

function BlogPostContent({ post }: { post: TravelBlog }) {
  const postImage = placeholderImages.find(p => p.id === 'post-tokyo-streets'); // Placeholder

  return (
    <article className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <p className="mb-2 text-sm text-muted-foreground">
            {post.datePublished && `Published on ${new Date(post.datePublished.toDate()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
          </p>
          <h1 className="font-headline text-4xl font-bold md:text-6xl">{post.title}</h1>
        </header>

        {postImage && (
          <div className="relative mb-8 h-[50vh] w-full overflow-hidden rounded-lg">
            <Image
              src={postImage.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              data-ai-hint={postImage.imageHint}
            />
          </div>
        )}
        
        <div className="prose prose-lg mx-auto max-w-4xl prose-headings:font-headline prose-p:font-body prose-a:text-primary hover:prose-a:text-primary/80">
           {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)![0].length;
                const text = paragraph.replace(/^#+\s*/, '');
                const Tag = `h${level}` as keyof JSX.IntrinsicElements;
                return <Tag key={index}>{text}</Tag>;
              }
              if (paragraph.startsWith('![')) {
                const altMatch = paragraph.match(/!\[(.*?)\]/);
                const urlMatch = paragraph.match(/\((.*?)\)/);
                if (altMatch && urlMatch) {
                    return <div key={index} className="my-6 rounded-lg overflow-hidden shadow-lg"><Image src={urlMatch[1]} alt={altMatch[1]} width={800} height={500} className="w-full" /></div>
                }
              }
              return <p key={index}>{paragraph}</p>
           })}
        </div>
      </div>
    </article>
  );
}

function BlogPostSkeleton() {
    return (
        <div className="container mx-auto px-4 py-12 sm:py-16">
            <header className="mb-8 text-center">
                <Skeleton className="h-4 w-48 mx-auto mb-4" />
                <Skeleton className="h-10 w-3/4 mx-auto" />
            </header>
            <Skeleton className="h-[50vh] w-full rounded-lg mb-8" />
            <div className="prose prose-lg mx-auto max-w-4xl">
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-5/6 mb-4" />
            </div>
        </div>
    )
}

function PostFetcher({ slug }: { slug: string }) {
    const firestore = useFirestore();

    const postQuery = useMemoFirebase(() => {
        if (!firestore || !slug) return null;
        // Use a collectionGroup query to find the post by slug across all users.
        // This requires a Firestore index on the 'travelBlogs' collection group for the 'slug' field.
        return query(collectionGroup(firestore, 'travelBlogs'), where('slug', '==', slug), limit(1));
    }, [firestore, slug]);

    const { data: posts, isLoading } = useCollection<TravelBlog>(postQuery);
    const post = posts?.[0];

    if (isLoading) {
        return <BlogPostSkeleton />;
    }

    if (!isLoading && !post) {
        notFound();
    }
    
    if (post) {
      return <BlogPostContent post={post} />;
    }

    return <BlogPostSkeleton />;
}


export default function BlogPostPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  if (!slug) {
      notFound();
  }

  return <PostFetcher slug={slug} />;
}
