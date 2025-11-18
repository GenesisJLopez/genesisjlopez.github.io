"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { generateItineraryAction, ItineraryState } from "@/app/itinerary-generator/actions";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2, Terminal } from "lucide-react";

export const ItinerarySchema = z.object({
  destination: z.string().min(2, { message: "Destination must be at least 2 characters." }),
  interests: z.string().min(3, { message: "Interests must be at least 3 characters." }),
  travelStyle: z.string().min(3, { message: "Travel style must be at least 3 characters." }),
  dates: z.string().min(3, { message: "Dates/duration must be at least 3 characters." }),
});


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Itinerary
        </>
      )}
    </Button>
  );
}

export function ItineraryForm() {
  const initialState: ItineraryState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(generateItineraryAction, initialState);

  return (
    <form action={dispatch} className="mt-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="destination">Destination</Label>
        <Input id="destination" name="destination" placeholder="e.g., Paris, France" />
        {state.errors?.destination && (
          <p className="text-sm text-destructive">{state.errors.destination[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="interests">Interests</Label>
        <Textarea id="interests" name="interests" placeholder="e.g., history, food, art, hiking" />
        {state.errors?.interests && (
          <p className="text-sm text-destructive">{state.errors.interests[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="travelStyle">Travel Style</Label>
        <Input id="travelStyle" name="travelStyle" placeholder="e.g., luxury, budget, family-friendly" />
         {state.errors?.travelStyle && (
          <p className="text-sm text-destructive">{state.errors.travelStyle[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="dates">Dates or Duration</Label>
        <Input id="dates" name="dates" placeholder="e.g., July 10-17, 2024 or 'One week'" />
        {state.errors?.dates && (
          <p className="text-sm text-destructive">{state.errors.dates[0]}</p>
        )}
      </div>

      <SubmitButton />

      {state.message && !state.errors && (
        <Alert variant="destructive" className="mt-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
