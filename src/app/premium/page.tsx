
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata = {
  title: "Premium Services | Travel & Ask Adventures",
  description: "Boost your business with our premium review and verification services.",
};

const features = [
    "A dedicated feature in a travel episode",
    "In-depth, honest showcase on our website",
    "High-quality photos & video content for your own use",
    "Social media spotlight across our channels",
    "A permanent spot in our episode guide",
    "Travel & Ask 'Featured Partner' badge for your marketing"
]

export default function PremiumPage() {
  return (
    <div>
      <PageHeader
        title="Become a Featured Business"
        description="Partner with us for our 2026 launch season and get your business in front of a global audience of eager travelers."
        imageId="hero-premium"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-4xl font-bold">Get Featured in Our First Episodes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our Premium Partnership is for hotels, restaurants, and tour operators who are confident in their exceptional service. We provide an authentic and engaging showcase that highlights the best of what you offer. We are now accepting applications for our inaugural 2026 season.
            </p>
        </div>

        <Card className="mx-auto mt-16 max-w-2xl shadow-xl">
            <CardHeader className="text-center pb-2">
                <CardTitle className="font-headline text-3xl">Partnership Package</CardTitle>
                <CardDescription>What's included in a feature:</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4 pt-4">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-start">
                            <Check className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1"/>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 text-center">
                    <Button size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                        Apply to Be Featured
                    </Button>
                     <p className="mt-4 text-sm text-muted-foreground">Limited spots available for the 2026 season.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
