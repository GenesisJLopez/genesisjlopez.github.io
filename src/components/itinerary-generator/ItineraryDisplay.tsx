"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function ItineraryDisplay() {
  const searchParams = useSearchParams();
  const itinerary = searchParams.get("itinerary");

  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle className="flex items-center font-headline text-2xl">
          <Sparkles className="mr-2 h-6 w-6 text-accent" />
          Your Custom Itinerary
        </CardTitle>
        <CardDescription>
          {itinerary ? "Here is your personalized travel plan." : "Your generated itinerary will appear here."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {itinerary ? (
          <div className="prose prose-sm max-w-none prose-headings:font-headline">
            {decodeURIComponent(itinerary)
              .split('\n')
              .map((line, index) => {
                if (line.startsWith('###')) {
                  return <h3 key={index} className="font-headline">{line.replace('###', '')}</h3>;
                }
                if (line.startsWith('##')) {
                  return <h2 key={index} className="font-headline">{line.replace('##', '')}</h2>;
                }
                if (line.startsWith('#')) {
                  return <h1 key={index} className="font-headline">{line.replace('#', '')}</h1>;
                }
                if (line.trim() === '') {
                    return <br key={index} />;
                }
                return <p key={index}>{line}</p>;
              })}
          </div>
        ) : (
          <div className="flex h-64 flex-col items-center justify-center rounded-md border-2 border-dashed text-center">
            <p className="text-muted-foreground">Waiting for your travel details...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
