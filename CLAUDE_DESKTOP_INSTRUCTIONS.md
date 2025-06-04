# Claude Desktop Instructions for Triepod.ai

## Project Overview
Triepod.ai is a Next.js 13.5.1 website for an AI research and technology firm. The stack includes:
- **Framework**: Next.js 13.5.1 with App Router
- **Styling**: Tailwind CSS with Radix UI components
- **Authentication**: NextAuth.js
- **Database**: Prisma ORM
- **Deployment**: Vercel with automatic GitHub integration
- **File Server**: nginx proxy manager on fileserver

## Essential Commands

### Development
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build with Prisma generation
npm run lint         # ESLint code quality check
npm run start        # Start production server
```

### Database
```bash
npx prisma generate  # Generate Prisma client
npx prisma studio    # Open database GUI
npx prisma migrate   # Run database migrations
```

### Deployment
```bash
npm run deploy       # Deploy using ./deploy.sh script
./deploy.sh          # Manual deployment to fileserver
```

## Project Structure

### Core Directories
- `app/` - Next.js App Router pages and API routes
- `components/` - Reusable React components
- `lib/` - Utilities (auth, database, API client)
- `hooks/` - Custom React hooks
- `types/` - TypeScript type definitions
- `prisma/` - Database schema and migrations

### Key Files
- `app/layout.tsx` - Root layout with providers
- `app/page.tsx` - Homepage
- `middleware.ts` - Next.js middleware for auth/routing
- `components.json` - Shadcn/ui configuration
- `CLAUDE.md` - Project-specific instructions
- `DEPLOYMENT.md` - Deployment documentation

## Development Workflow

### 1. Starting Work
```bash
cd /home/bryan/_websites/triepod.ai
npm run dev
```

### 2. Making Changes
- **Pages**: Edit files in `app/` directory
- **Components**: Edit files in `components/` directory
- **Styles**: Use Tailwind classes or edit `app/globals.css`
- **Database**: Modify `prisma/schema.prisma` then run `npx prisma generate`

### 3. Quality Checks
Always run before committing:
```bash
npm run lint         # Check code quality
npm run build        # Verify production build works
```

### 4. Testing Changes
- Local: `npm run dev` and test on http://localhost:3000
- Production: Changes auto-deploy to Vercel when pushed to main branch

## Component Architecture

### UI Components (`components/ui/`)
Built with Radix UI and Tailwind CSS:
- `button.tsx`, `card.tsx`, `input.tsx` - Basic form elements
- `dialog.tsx`, `sheet.tsx`, `popover.tsx` - Overlays
- `navigation-menu.tsx`, `tabs.tsx` - Navigation
- `toast.tsx`, `alert.tsx` - Feedback

### Custom Components (`components/`)
- `navigation.tsx` - Main site navigation
- `footer.tsx` - Site footer
- `auth-provider.tsx` - Authentication wrapper
- `theme-provider.tsx` - Dark/light theme support
- `chat.tsx` - AI chat interface

## Authentication & Security
- NextAuth.js handles authentication
- Middleware protects routes in `middleware.ts`
- Rate limiting configured in `lib/rate-limit.ts`
- Environment variables in `.env.local` (not committed)

## Database Operations
- Schema: `prisma/schema.prisma`
- Client: Auto-generated in `node_modules/.prisma/client`
- Connection: Configured in `lib/prisma.ts`

## Deployment Process

### Automatic (Recommended)
1. Push changes to main branch
2. Vercel automatically builds and deploys
3. Available at production URL

### Manual to Fileserver
```bash
./deploy.sh
```
This deploys to `bryan@fileserver:/var/www/triepod.ai`

## Troubleshooting

### Build Issues
- Ensure `npx prisma generate` runs successfully
- Check TypeScript errors with `npm run lint`
- Verify all dependencies are installed with `npm install`

### Database Issues
- Regenerate Prisma client: `npx prisma generate`
- Check database connection in `lib/prisma.ts`
- Verify `DATABASE_URL` environment variable

### Deployment Issues
- Check Vercel build logs in dashboard
- Verify environment variables are set in Vercel
- Ensure fileserver nginx proxy manager is running

## Environment Variables
Required for local development (`.env.local`):
```
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your-database-url
```

## Best Practices

### Code Style
- Use TypeScript for type safety
- Follow existing component patterns
- Use Tailwind CSS for styling
- Implement proper error handling

### Performance
- Optimize images with Next.js Image component
- Use dynamic imports for heavy components
- Minimize bundle size

### Security
- Never commit secrets to repository
- Use middleware for route protection
- Implement proper input validation
- Configure rate limiting for APIs

## File Server Access
```bash
ssh bryan@fileserver
# Website files: /var/www/triepod.ai
# Check nginx: docker ps | grep proxy
```

## Quick Reference

### Adding New Pages
1. Create file in `app/new-page/page.tsx`
2. Export default React component
3. Add navigation link if needed

### Adding New Components
1. Create file in `components/component-name.tsx`
2. Use existing patterns for styling and props
3. Export and import where needed

### Database Changes
1. Modify `prisma/schema.prisma`
2. Run `npx prisma generate`
3. Create and run migration if needed

### Styling
- Use Tailwind CSS classes
- Reference existing components for patterns
- Use CSS variables for theme colors