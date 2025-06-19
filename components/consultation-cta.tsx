'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ConsultationCTAProps {
  variant?: 'primary' | 'secondary'
  showBenefits?: boolean
}

export function ConsultationCTA({ variant = 'primary', showBenefits = false }: ConsultationCTAProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`rounded-lg p-6 ${variant === 'primary' ? 'bg-primary/5 border border-primary/20' : 'bg-muted/50'}`}>
      <div className="text-center">
        <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">
          Ready to Transform Your Business with AI?
        </h3>
        <p className="text-muted-foreground mb-6">
          Schedule a free 30-minute consultation to discuss your AI opportunities
        </p>
        
        {showBenefits && (
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>No obligation assessment</span>
            </div>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Custom AI roadmap discussion</span>
            </div>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>State AI initiative positioning</span>
            </div>
          </div>
        )}
        
        <Button 
          size="lg" 
          className="w-full sm:w-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          asChild
        >
          <Link href="/contact">
            Schedule Free Consultation 
            <ArrowRight className={`ml-2 h-5 w-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
          </Link>
        </Button>
      </div>
    </div>
  )
}