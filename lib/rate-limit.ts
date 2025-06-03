import { Redis } from '@upstash/redis';
import { logger } from './logger';

class RateLimit {
  private redis: Redis;

  constructor() {
    this.redis = new Redis({
      url: process.env.UPSTASH_REDIS_URL!,
      token: process.env.UPSTASH_REDIS_TOKEN!,
    });
  }

  async check(req: Request, limit: number, window: string): Promise<{ success: boolean; remaining: number }> {
    try {
      const ip = req.headers.get('x-forwarded-for') || 'unknown';
      const key = `rate-limit:${ip}`;
      
      const current = await this.redis.incr(key);
      if (current === 1) {
        await this.redis.expire(key, this.parseWindow(window));
      }

      const remaining = Math.max(0, limit - current);
      return {
        success: current <= limit,
        remaining,
      };
    } catch (error) {
      logger.error('Rate limit error:', error as Error, 'rate-limit');
      return { success: true, remaining: limit }; // Fail open
    }
  }

  private parseWindow(window: string): number {
    const value = parseInt(window);
    const unit = window.slice(-1);
    switch (unit) {
      case 's': return value;
      case 'm': return value * 60;
      case 'h': return value * 60 * 60;
      case 'd': return value * 60 * 60 * 24;
      default: return 60; // Default to 1 minute
    }
  }
}

export const rateLimit = new RateLimit();