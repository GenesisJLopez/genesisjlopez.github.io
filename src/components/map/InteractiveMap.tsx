"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { locations } from "@/lib/data";
import { placeholderImages } from '@/lib/placeholder-images.json';

const mapImage = placeholderImages.find(p => p.id === 'world-map');

const InteractiveMap = () => {
  return (
    <Card className="relative w-full mx-auto max-w-6xl overflow-hidden aspect-[2/1] rounded-lg shadow-lg">
      <TooltipProvider delayDuration={100}>
        {mapImage && (
          <Image 
            src={mapImage.imageUrl} 
            alt={mapImage.description} 
            fill 
            className="object-cover" 
            data-ai-hint={mapImage.imageHint}
          />
        )}
        <div className="absolute inset-0">
          {locations.map((location) => (
            <Tooltip key={location.id}>
              <TooltipTrigger asChild>
                <Link
                  href={`/blog/${location.blogSlug}`}
                  className="absolute transition-transform hover:scale-125"
                  style={{ left: `${location.coords.x}%`, top: `${location.coords.y}%` }}
                  aria-label={`Read more about ${location.name}`}
                >
                  <div className="w-4 h-4 -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-accent border-2 border-accent-foreground"></span>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">{location.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </Card>
  );
};

export default InteractiveMap;
