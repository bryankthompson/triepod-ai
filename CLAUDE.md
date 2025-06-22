## React/TSX Linting Prevention
- ALWAYS escape apostrophes in JSX text content: `'` → `&apos;`
- ALWAYS use self-closing tags: `<br>` → `<br />`
- Run `npm run lint` before every commit to prevent build failures
- Common patterns to escape:
  - "Let's" → "Let&apos;s"
  - "Company's" → "Company&apos;s"  
  - "It's" → "It&apos;s"
- Never commit code with ESLint errors

## Project Architecture Lessons
- **Next.js 15 App Router**: Use App Router architecture for modern React applications
- **Component Strategy**: Radix UI + shadcn/ui for accessibility-first design
- **Content Processing**: Automated blog/research pipelines with JSX compliance
- **Vercel Deployment**: Use vercel.json for production deployment configuration
- **Database**: Prisma ORM with PostgreSQL for data management
- **Authentication**: NextAuth.js for user session management
- **Styling**: Tailwind CSS with professional design system
- **TypeScript**: Full type safety across all components and data structures

## Development Workflow
- Run `npm run lint` before commits
- Use `npm run build` to verify production readiness
- Test responsive design across devices before deployment
- Maintain accessibility-first approach in all components