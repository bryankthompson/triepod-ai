'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/components/auth-provider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { loadStripe } from '@stripe/stripe-js';
import { Shield, CreditCard, CheckCircle } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function BillingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  
  const plan = searchParams.get('plan') || 'basic';

  const handleSubscribe = async () => {
    if (!user) {
      router.push('/login');
      return;
    }

    try {
      setIsLoading(true);
      
      // Create Stripe Checkout Session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          userId: user.id,
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({ sessionId });

      if (error) {
        throw error;
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to process subscription. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 glow-text">Complete Your Subscription</h1>
          
          <Card className="p-6 mb-8 bg-white/5">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Secure Checkout</h2>
                <p className="text-muted-foreground">Your payment is protected</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-white/5">
                <h3 className="text-lg font-medium mb-2">Selected Plan</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</p>
                    <p className="text-sm text-muted-foreground">
                      {plan === 'basic' ? '$10/month' : plan === 'pro' ? '$29/month' : 'Custom pricing'}
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CreditCard className="h-5 w-5" />
                  <span>Secure card payment via Stripe</span>
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={handleSubscribe}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Subscribe Now'}
              </Button>
            </div>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            By subscribing, you agree to our{' '}
            <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}