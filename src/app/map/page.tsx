import { PageHeader } from "@/components/shared/PageHeader";
import InteractiveMap from "@/components/map/InteractiveMap";

export const metadata = {
  title: "Our Travel Map | Travel & Ask Adventures",
  description: "Explore all the locations we've visited on our interactive map.",
};

export default function MapPage() {
  return (
    <div>
      <PageHeader
        title="Our Travel Map"
        description="Explore all the locations we've visited. Click on a pin to read the story."
        imageId="hero-map"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <InteractiveMap />
        <div className="mt-8 text-center">
          <h3 className="font-headline text-2xl font-bold">How to use the map</h3>
          <p className="mt-2 text-muted-foreground">
            Hover over a pin to see the location name, and click to read the full blog post about our adventure there.
          </p>
        </div>
      </div>
    </div>
  );
}
