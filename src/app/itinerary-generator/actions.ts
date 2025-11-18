"use server";

import { generatePersonalizedItinerary } from "@/ai/flows/generate-personalized-itinerary";
import { z } from "zod";
import {redirect} from "next/navigation";

// Moved ItinerarySchema to ItineraryForm.tsx

export type ItineraryState = {
  message?: string | null;
  errors?: {
    destination?: string[];
    interests?: string[];
    travelStyle?: string[];
    dates?: string[];
  };
};

const ItinerarySchema = z.object({
  destination: z.string().min(2, { message: "Destination must be at least 2 characters." }),
  interests: z.string().min(3, { message: "Interests must be at least 3 characters." }),
  travelStyle: z.string().min(3, { message: "Travel style must be at least 3 characters." }),
  dates: z.string().min(3, { message: "Dates/duration must be at least 3 characters." }),
});

export async function generateItineraryAction(
  prevState: ItineraryState,
  formData: FormData
): Promise<ItineraryState> {
  const validatedFields = ItinerarySchema.safeParse({
    destination: formData.get("destination"),
    interests: formData.get("interests"),
    travelStyle: formData.get("travelStyle"),
    dates: formData.get("dates"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    };
  }
  
  let result;
  try {
     result = await generatePersonalizedItinerary(validatedFields.data);
  } catch (error) {
    console.error("AI Error:", error);
    return {
      message: "An error occurred while generating the itinerary. Please try again later.",
    };
  }
  
  if (result?.itinerary) {
    const encodedItinerary = encodeURIComponent(result.itinerary);
    redirect(`/itinerary-generator/results?itinerary=${encodedItinerary}`);
  }

  return {
    message: "Could not generate itinerary. Please try again."
  }
}
