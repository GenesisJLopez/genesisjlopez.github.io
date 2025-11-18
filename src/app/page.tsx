
import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Sparkles, Tv } from 'lucide-react';
import { initializeAdmin } from '@/firebase/server-init';
import { doc, getDoc } from 'firebase/firestore';

// This is now a Server Component
async function getHomepageContent() {
  try {
    const { firestore } = await initializeAdmin();
    const pageRef = doc(firestore, 'pages', 'homepage');
    const pageSnap = await getDoc(pageRef);

    if (pageSnap.exists()) {
      const data = pageSnap.data();
      return data.htmlContent;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch homepage content:", error);
    // In case of error (e.g., service account not set up), return null
    // and let the page render the fallback content.
    return null;
  }
}

// Fallback content in case Firestore content is not available
function FallbackHomePage() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-home');
  const premiumImage = placeholderImages.find(p => p.id === 'hero-premium');

  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex h-dvh w-full items-center justify-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center">
            <h1 className="font-headline text-6xl font-bold md:text-8xl">
              Travel & Ask
            </h1>
            <p className="mt-4 text-2xl md:text-4xl">Coming in 2026</p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="bg-background py-16 lg:py-24">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-4xl font-bold">A New Adventure is on the Horizon</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Travel & Ask is a new travel show where we explore the world's most fascinating destinations, answer your burning travel questions, and uncover hidden gems. Get ready to join Genesis and Stephanie on a journey to inspire your own adventures.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    <Card className="text-center">
                        <CardHeader>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <Plane className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="font-headline pt-2">Explore Destinations</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Discover unique places and cultures through our immersive vlogs.</p>
                        </CardContent>
                    </Card>
                     <Card className="text-center">
                        <CardHeader>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <Tv className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="font-headline pt-2">Watch Episodes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Each episode is a new story, a new city, a new adventure.</p>
                        </CardContent>
                    </Card>
                     <Card className="text-center">
                        <CardHeader>
                             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <Sparkles className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="font-headline pt-2">Get Featured</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground">Showcase your business to a global audience of travelers.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Featured Business Section */}
        <section className="relative py-16 lg:py-24">
             {premiumImage && (
                <Image
                src={premiumImage.imageUrl}
                alt={premiumImage.description}
                fill
                className="object-cover"
                data-ai-hint={premiumImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
                 <h2 className="font-headline text-4xl font-bold">Become a Featured Business</h2>
                <p className="mt-4 text-lg text-background/80">
                    Are you a hotel, restaurant, or tour operator with an amazing experience to share? Partner with us to be featured in one of our first episodes and get your business in front of thousands of eager travelers.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/premium">Learn More & Sign Up</Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

export default async function Home() {
  const htmlContent = await getHomepageContent();

  if (htmlContent) {
    // If custom HTML is found, render it.
    // Using dangerouslySetInnerHTML is safe here because the content is controlled by you in the admin panel.
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  }

  // Otherwise, render the original fallback component
  return <FallbackHomePage />;
}
