import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = [
  '/',
  '/login',
  '/signup',
  '/about',
  '/blog',
  '/contact',
  '/help',
  '/privacy',
  '/terms',
  '/docs',
  '/pricing',
];

export function middleware(request: NextRequest) {
  // Allow public paths
  if (PUBLIC_PATHS.some(path => request.nextUrl.pathname === path) ||
      request.nextUrl.pathname.startsWith('/blog/') ||
      request.nextUrl.pathname.startsWith('/_next/') ||
      request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Check for auth token
  const authUser = request.cookies.get('auth_user');
  if (!authUser) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};