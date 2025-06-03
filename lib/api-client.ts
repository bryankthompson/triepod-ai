/**
 * Base API client with error handling and retry logic
 */

import { env } from '@/lib/env';
import { logger } from '@/lib/logger';

interface RequestOptions extends RequestInit {
  retries?: number;
  retryDelay?: number;
}

interface ApiError extends Error {
  status?: number;
  code?: string;
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = env.NEXT_PUBLIC_APP_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * Make an API request with automatic retry and error handling
   * @param endpoint - API endpoint path
   * @param options - Request options including retry configuration
   * @returns Promise with the API response
   * @throws {ApiError} When the request fails after all retries
   */
  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const {
      retries = 3,
      retryDelay = 1000,
      ...fetchOptions
    } = options;

    let lastError: ApiError | null = null;
    let attempt = 0;

    while (attempt < retries) {
      try {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
          ...fetchOptions,
          headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
          },
        });

        if (!response.ok) {
          const error = new Error(`HTTP error! status: ${response.status}`) as ApiError;
          error.status = response.status;
          throw error;
        }

        return await response.json();
      } catch (error) {
        lastError = error as ApiError;
        attempt++;

        if (attempt < retries) {
          logger.warn(
            `Request failed (attempt ${attempt}/${retries}), retrying...`,
            'ApiClient'
          );
          await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
        }
      }
    }

    logger.error(
      `Request failed after ${retries} attempts`,
      lastError as Error,
      'ApiClient'
    );
    throw lastError;
  }

  /**
   * Handle API errors with appropriate fallback behavior
   * @param error - The caught error
   * @param fallback - Optional fallback value
   * @returns Fallback value if provided
   * @throws {Error} Original error if no fallback is provided
   */
  static handleError<T>(error: unknown, fallback?: T): T {
    if (error instanceof Error) {
      logger.error('API Error:', error, 'ApiClient');
      
      if (fallback !== undefined) {
        logger.info('Using fallback value', 'ApiClient');
        return fallback;
      }
    }
    throw error;
  }
}

export const apiClient = new ApiClient();