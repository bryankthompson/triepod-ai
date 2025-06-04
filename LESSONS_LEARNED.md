# Lessons Learned: Build & Deployment Issues

## Problems Encountered and Fixed

### 1. Invalid Next.js Configuration
**Problem**: Build warnings due to invalid experimental property
- File: `next.config.js`
- Issue: `missingSuspenseWithCSRBailout` property was invalid/deprecated
- Error: Console warnings during build process

**Root Cause**: Using outdated or incorrect Next.js configuration properties

**Solution**: Removed the invalid experimental block entirely

### 2. Google Fonts Loading Failures
**Problem**: Font fetch timeouts causing build failures
- File: `app/layout.tsx`
- Issue: Inter font from Google Fonts failing to load during build
- Error: Network timeout errors

**Root Cause**: No fallback fonts configured, no display optimization

**Solution**: Enhanced font configuration with:
```typescript
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});
```

### 3. ESLint Unescaped Entity Errors
**Problem**: Multiple JSX files contained unescaped quotes and apostrophes
- Files affected: 5 different page components
- Issue: Direct quotes (`"`) and apostrophes (`'`) in JSX strings
- Error: ESLint react/no-unescaped-entities violations

**Root Cause**: Not properly escaping HTML entities in JSX content

**Solutions Applied**:
- Quotes: `"text"` → `&ldquo;text&rdquo;`
- Apostrophes: `don't` → `don&rsquo;t` or `don&apos;t`

### 4. Missing Test Configuration
**Problem**: `npm test` command failed
- Issue: No test script defined in package.json
- Impact: Unable to run automated tests

**Root Cause**: Incomplete project setup, missing testing infrastructure

## AI Prevention Prompt

Use this prompt to prevent these issues:

---

**NEXT.JS PROJECT CODING GUIDELINES - PREVENT COMMON BUILD FAILURES**

When working on Next.js projects, follow these critical rules:

**1. Next.js Configuration (next.config.js)**
- NEVER use experimental properties without verifying they're valid for the current Next.js version
- Always check Next.js documentation before adding experimental features
- Remove any deprecated or invalid configuration options immediately

**2. Font Loading (app/layout.tsx)**
- ALWAYS include fallback fonts when using Google Fonts: `fallback: ['system-ui', 'arial']`
- ALWAYS use `display: 'swap'` for better loading performance
- NEVER rely on external fonts without local fallbacks

**3. JSX Content Escaping**
- NEVER use raw quotes (`"`) in JSX strings - use `&ldquo;` and `&rdquo;`
- NEVER use raw apostrophes (`'`) in JSX strings - use `&rsquo;` or `&apos;`
- ALWAYS escape HTML entities in JSX content to prevent ESLint errors

**4. Testing Infrastructure**
- ALWAYS ensure package.json includes a test script
- NEVER assume testing is optional - include basic test setup

**5. Build Verification Process**
- ALWAYS run `npm run build` before committing
- ALWAYS run `npm run lint` to catch ESLint errors
- ALWAYS fix ALL warnings and errors before deployment

**Example of Correct Font Configuration:**
```typescript
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});
```

**Example of Correct JSX Escaping:**
```tsx
// WRONG:
<p>This is "quoted text" and it's problematic</p>

// CORRECT:
<p>This is &ldquo;quoted text&rdquo; and it&rsquo;s correct</p>
```

Follow these guidelines to prevent build failures and ensure smooth deployment.

---