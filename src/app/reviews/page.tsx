import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { reviews } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Featured Reviews | Travel & Ask Adventures",
  description: "Honest reviews of hotels, restaurants, and services from our travels.",
};

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-accent">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 fill-current" />
      ))}
      {halfStar && <StarHalf key="half" className="h-5 w-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 text-muted" />
      ))}
    </div>
  );
};

export default function ReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Featured Reviews"
        description="Honest reviews of hotels, restaurants, and services from our travels."
        imageId="hero-reviews"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => {
            const reviewImage = placeholderImages.find(p => p.id === review.image);
            return (
              <Card key={review.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
                {reviewImage && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={reviewImage.imageUrl}
                      alt={review.title}
                      width={400}
                      height={225}
                      className="h-full w-full object-cover"
                      data-ai-hint={reviewImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <Badge variant={review.category === 'Hotel' ? 'default' : review.category === 'Restaurant' ? 'secondary' : 'outline'} className="bg-primary/10 text-primary border-primary/20">
                            {review.category}
                        </Badge>
                        <StarRating rating={review.rating} />
                    </div>
                  <CardTitle className="font-headline text-2xl pt-2">{review.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{review.summary}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
