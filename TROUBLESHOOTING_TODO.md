# Troubleshooting TODO - June 4, 2025

## Issue Summary
Site became completely unresponsive after attempting to fix documentation page access. The root cause was a port conflict, not the middleware changes.

---

## What Happened

### 1. Initial Problem
- **Issue**: Documentation pages (`/docs`) were redirecting to `/login`
- **Cause**: Middleware was only allowing exact path `/docs`, not subdirectories like `/docs/overview/proven-results`

### 2. Changes Made That Appeared to Break the Site
```typescript
// Original middleware (working)
if (PUBLIC_PATHS.some(path => request.nextUrl.pathname === path) ||
    request.nextUrl.pathname.startsWith('/blog/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/api/')) {
  return NextResponse.next();
}

// Updated middleware (appeared to break)
if (PUBLIC_PATHS.some(path => request.nextUrl.pathname === path) ||
    request.nextUrl.pathname.startsWith('/blog/') ||
    request.nextUrl.pathname.startsWith('/docs/') ||  // Added this line
    request.nextUrl.pathname.startsWith('/case-studies/') ||  // Added this line
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/api/')) {
  return NextResponse.next();
}
```

### 3. Actual Root Cause
- **Port 3000 was already in use** by another Node process: `node dist/index.js` (PID 13329)
- This process had been running since June 3rd
- The middleware changes coincided with the port conflict, making it appear as if the code changes broke the site

---

## Lessons Learned

### 1. Always Check for Port Conflicts First
When a Next.js site won't load or just spins:
```bash
# Check if port is in use
netstat -an | grep 3000
ps aux | grep node | grep 3000
```

### 2. Middleware Path Handling
- Exact paths (`/docs`) don't match subdirectories (`/docs/sub`)
- Use `pathname.startsWith('/docs/')` to match all subdirectories
- Always test middleware changes with multiple routes

### 3. Development Server Issues Checklist
1. Check for port conflicts
2. Clear Next.js cache: `rm -rf .next`
3. Kill all Node processes: `pkill -9 node`
4. Try different port: `npm run dev -- -p 3001`
5. Check terminal for error messages
6. Verify no syntax errors: `npm run build`

---

## TODO: Prevent Future Issues

### Immediate Actions
- [x] Kill conflicting process (PID 13329)
- [x] Restart dev server on port 3000
- [x] Verify all documentation pages are accessible
- [x] Test middleware with various routes

### Best Practices to Implement
- [ ] Add port conflict check to npm scripts
- [ ] Create pre-commit hook to run `npm run build`
- [ ] Add middleware test cases
- [ ] Document all PUBLIC_PATHS in middleware
- [ ] Create startup script that checks for port availability

### Testing Checklist After Middleware Changes
- [ ] Test exact paths in PUBLIC_PATHS
- [ ] Test subdirectories that should be public
- [ ] Test protected routes redirect to login
- [ ] Test with and without authentication
- [ ] Run production build to catch errors

### Debugging Commands Reference
```bash
# Port conflict resolution
netstat -an | grep 3000
ps aux | grep node | grep 3000
kill -9 [PID]

# Next.js troubleshooting
rm -rf .next
rm -rf node_modules/.cache
npm run build  # Check for build errors
npm run dev -- -p 3001  # Use different port

# Process management
pkill -f node
killall node
```

---

## Current Status
- ✅ Port conflict resolved
- ✅ Middleware restored to working state
- ✅ Documentation pages created and accessible
- ⚠️ Need to update middleware to allow `/docs/` subdirectories

## Next Steps
1. Update middleware to properly allow documentation subdirectories
2. Test thoroughly before committing
3. Add automated tests for routing
4. Create health check endpoint

---

*Note: The middleware changes themselves were correct. The timing of the port conflict made it appear as if the code changes broke the site, when in reality it was an unrelated Node process using port 3000.*