/**
 * Environment variable validation and type definitions
 * Ensures all required environment variables are present and correctly typed
 */

import { z } from 'zod';

const envSchema = z.object({
  // OpenAI Configuration
  OPENAI_API_KEY: z.string().min(1, 'OpenAI API key is required'),
  OPENAI_MODEL: z.string().default('gpt-4-turbo-preview'),

  // Pinecone Configuration
  PINECONE_API_KEY: z.string().min(1, 'Pinecone API key is required'),
  PINECONE_ENVIRONMENT: z.string().min(1, 'Pinecone environment is required'),
  PINECONE_INDEX: z.string().min(1, 'Pinecone index name is required'),

  // Application Configuration
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
});

/**
 * Validate and parse environment variables
 * @throws {Error} If validation fails
 * @returns {Record<string, string>} Validated environment variables
 */
function validateEnv(): z.infer<typeof envSchema> {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors.map(err => err.path.join('.')).join(', ');
      throw new Error(`Missing or invalid environment variables: ${missingVars}`);
    }
    throw error;
  }
}

export const env = validateEnv();