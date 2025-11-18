'use server';
/**
 * @fileOverview Generates a personalized travel itinerary based on user preferences.
 *
 * - generatePersonalizedItinerary - A function that generates a personalized travel itinerary.
 * - GeneratePersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - GeneratePersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedItineraryInputSchema = z.object({
  destination: z.string().describe('The desired travel destination.'),
  interests: z.string().describe('The user interests, e.g., history, food, adventure.'),
  travelStyle: z.string().describe('The preferred travel style, e.g., luxury, budget, backpacking.'),
  dates: z.string().describe('The travel dates or duration.'),
});
export type GeneratePersonalizedItineraryInput = z.infer<typeof GeneratePersonalizedItineraryInputSchema>;

const GeneratePersonalizedItineraryOutputSchema = z.object({
  itinerary: z.string().describe('A personalized travel itinerary.'),
});
export type GeneratePersonalizedItineraryOutput = z.infer<typeof GeneratePersonalizedItineraryOutputSchema>;

export async function generatePersonalizedItinerary(input: GeneratePersonalizedItineraryInput): Promise<GeneratePersonalizedItineraryOutput> {
  return generatePersonalizedItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedItineraryPrompt',
  input: {schema: GeneratePersonalizedItineraryInputSchema},
  output: {schema: GeneratePersonalizedItineraryOutputSchema},
  prompt: `You are a travel expert specializing in creating personalized itineraries based on user preferences and travel data from Travel & Ask Adventures.

  Based on the following user preferences, generate a detailed and engaging travel itinerary:

  Destination: {{{destination}}}
  Interests: {{{interests}}}
  Travel Style: {{{travelStyle}}}
  Dates: {{{dates}}}

  Incorporate relevant travel experiences and destinations from past Travel & Ask Adventures blogs and vlogs to enhance the itinerary. The itinerary should be well-structured, including daily activities, recommended restaurants, hotels, and other services. The itinerary should also include personal travel photos, if relevant.`,
});

const generatePersonalizedItineraryFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedItineraryFlow',
    inputSchema: GeneratePersonalizedItineraryInputSchema,
    outputSchema: GeneratePersonalizedItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
