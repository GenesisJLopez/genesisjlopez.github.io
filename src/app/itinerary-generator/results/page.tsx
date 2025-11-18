import { PageHeader } from "@/components/shared/PageHeader";
import { ItineraryDisplay } from "@/components/itinerary-generator/ItineraryDisplay";

export const metadata = {
    title: "Your Itinerary | Travel & Ask Adventures",
    description: "Your personalized travel itinerary.",
};

export default function ItineraryResultsPage() {
    return (
        <div>
            <PageHeader
                title="Your Custom Itinerary"
                description="Here is your personalized travel plan, crafted by AI."
                imageId="hero-itinerary"
            />
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="mx-auto max-w-4xl">
                   <ItineraryDisplay />
                </div>
            </div>
        </div>
    );
}
