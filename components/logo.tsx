'use client';

import { Dog } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Dog className="h-8 w-8 text-primary" />
        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
        <div className="absolute -inset-1 bg-primary/10 blur-md rounded-full animate-pulse" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Triepod
      </span>
    </div>
  );
}