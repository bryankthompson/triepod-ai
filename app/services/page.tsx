import Link from 'next/link';
import { ArrowRight, Palette } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Link 
          href="/services/logo-generator"
          className="group relative bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-6 relative">
            <div className="mb-4">
              <div className="inline-block p-3 bg-primary/10 rounded-lg">
                <Palette className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
              Logo Generator
            </h2>
            <p className="text-muted-foreground mb-4">
              Create unique, AI-powered logos for your brand using our advanced generation technology.
            </p>
            <div className="flex items-center text-primary">
              Try now <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}