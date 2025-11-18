import { PageHeader } from "@/components/shared/PageHeader";
import { ItineraryForm } from "@/components/itinerary-generator/ItineraryForm";
import { ItineraryDisplay } from "@/components/itinerary-generator/ItineraryDisplay";

export const metadata = {
  title: "Itinerary Generator | Travel & Ask Adventures",
  description: "Craft your personalized travel itinerary with our AI-powered tool.",
};

export default function ItineraryGeneratorPage() {

  return (
    <div>
      <PageHeader
        title="AI Itinerary Generator"
        description="Craft a personalized itinerary based on your preferences, powered by our travel experiences."
        imageId="hero-itinerary"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-xl">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="font-headline text-2xl font-semibold">Plan Your Dream Trip</h2>
              <p className="mt-2 text-muted-foreground">Fill out the details below, and our AI will create a custom itinerary for you.</p>
              <ItineraryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
