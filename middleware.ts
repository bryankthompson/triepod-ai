import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Protected paths that require authentication
  const protectedPaths = ['/services', '/settings', '/dashboard'];
  
  // Check if the current path is protected
  const isProtected = protectedPaths.some(path => pathname.startsWith(path));
  
  // For now, just allow all requests to pass through
  // This prevents any redirect loops while we fix the auth system
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};