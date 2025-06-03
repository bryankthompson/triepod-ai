import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';
import { verifyAuth } from '@/lib/auth';
import { logger } from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const auth = await verifyAuth(req);
    if (!auth || !auth.success || !auth.userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Generate new token
    const newToken = jwt.sign(
      { userId: auth.userId },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );

    // Update session
    await prisma.session.update({
      where: { token: auth.token },
      data: {
        token: newToken,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    logger.info(`Token refreshed for user: ${auth.userId}`, 'auth');

    return NextResponse.json({ token: newToken });
  } catch (error) {
    logger.error('Token refresh error:', error as Error, 'auth');
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}