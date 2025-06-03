import { NextResponse } from 'next/server';
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

    // Update user status
    await prisma.user.update({
      where: { id: auth.userId },
      data: { isOnline: false },
    });

    // Remove session
    await prisma.session.deleteMany({
      where: {
        userId: auth.userId,
        token: auth.token,
      },
    });

    // Log security event
    await prisma.securityLog.create({
      data: {
        userId: auth.userId,
        event: 'logout',
        ip: req.headers.get('x-forwarded-for') || undefined,
        userAgent: req.headers.get('user-agent') || undefined,
      },
    });

    logger.info(`User logged out: ${auth.userId}`, 'auth');

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error('Logout error:', error as Error, 'auth');
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}