'use client';

import { z } from 'zod';
import { logger } from './logger';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type AuthUser = {
  id: string;
  email: string;
};

class AuthService {
  private static instance: AuthService;
  private currentUser: AuthUser | null = null;
  private readonly STORAGE_KEY = 'auth_user';
  
  private constructor() {
    if (typeof window !== 'undefined') {
      try {
        const storedUser = window.localStorage.getItem(this.STORAGE_KEY);
        if (storedUser) {
          this.currentUser = JSON.parse(storedUser);
        }
      } catch (error) {
        logger.error('Error loading stored user:', error as Error, 'auth');
        window.localStorage.removeItem(this.STORAGE_KEY);
      }
    }
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(email: string, password: string): Promise<AuthUser> {
    try {
      const { email: validEmail, password: validPassword } = loginSchema.parse({ email, password });

      // Demo authentication
      if (validEmail === 'demo@triepod.ai' && validPassword === 'demo12345') {
        const user = {
          id: '1',
          email: validEmail,
        };
        
        this.currentUser = user;
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
        }
        logger.info(`User logged in successfully: ${validEmail}`, 'auth');
        return user;
      }

      logger.warn(`Login failed for email: ${validEmail}`, 'auth');
      throw new Error('Invalid credentials. Please use the demo account credentials.');
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.error('Validation error:', error, 'auth');
        throw new Error('Invalid email or password format');
      }
      logger.error('Authentication error:', error as Error, 'auth');
      throw error;
    }
  }

  logout(): void {
    const email = this.currentUser?.email;
    this.currentUser = null;
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(this.STORAGE_KEY);
    }
    if (email) {
      logger.info(`User logged out: ${email}`, 'auth');
    }
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}

export const authService = AuthService.getInstance();

export async function verifyAuth(request: Request): Promise<{ success: boolean; userId?: string; token?: string } | null> {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return { success: false };
    }

    const token = authHeader.slice(7);
    
    // For demo purposes, accept any token and return demo user
    if (token) {
      return {
        success: true,
        userId: '1',
        token: token
      };
    }

    return { success: false };
  } catch (error) {
    logger.error('Auth verification error:', error as Error, 'auth');
    return { success: false };
  }
}