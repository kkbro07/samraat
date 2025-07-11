// This is an AI-powered recommendation tool that analyzes user's browsing history
// and suggests products relevant to the user.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationInputSchema = z.object({
  browsingHistory: z
    .string()
    .describe('The user browsing history, as a string of product names.'),
});
export type ProductRecommendationInput =
  z.infer<typeof ProductRecommendationInputSchema>;

const ProductRecommendationOutputSchema = z.object({
  recommendedProducts: z
    .array(z.string())
    .describe('An array of recommended product names based on browsing history.'),
});
export type ProductRecommendationOutput =
  z.infer<typeof ProductRecommendationOutputSchema>;

export async function recommendProducts(
  input: ProductRecommendationInput
): Promise<ProductRecommendationOutput> {
  return recommendProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationPrompt',
  input: {schema: ProductRecommendationInputSchema},
  output: {schema: ProductRecommendationOutputSchema},
  prompt: `Based on the user's browsing history: {{{browsingHistory}}}, recommend 3 products that the user might be interested in. Return the product names in an array.`,
});

const recommendProductsFlow = ai.defineFlow(
  {
    name: 'recommendProductsFlow',
    inputSchema: ProductRecommendationInputSchema,
    outputSchema: ProductRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
