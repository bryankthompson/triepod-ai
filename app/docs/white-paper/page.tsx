'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WhitePaperPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In production, this would submit to your email capture service
    // For now, we'll simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setShowThankYou(true);
    
    // In production, trigger the PDF download here
    // For demo, we'll just show a success message
    setTimeout(() => {
      // Redirect to documentation after showing thank you
      router.push('/docs');
    }, 5000);
  };

  if (showThankYou) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-green-50 dark:bg-green-950 rounded-lg p-8">
          <svg className="mx-auto h-16 w-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg mb-4">
            Your white paper download will begin shortly.
          </p>
          <p className="text-muted-foreground">
            Check your email for additional resources and updates from Triepod.AI
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <nav className="mb-8">
        <a href="/docs" className="text-primary hover:underline">← Back to Documentation</a>
      </nav>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - White Paper Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Technical White Paper
          </h1>
          
          <h2 className="text-xl text-muted-foreground mb-6">
            The Evolution of AI-Powered Disability Rights Technology: 
            A Technical Analysis
          </h2>

          <div className="prose prose-lg dark:prose-invert mb-8">
            <p>
              Discover how Triepod.AI achieved breakthrough results in disability 
              rights advocacy through our proprietary 3-pronged AI system.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-4">What You&rsquo;ll Learn:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>How we achieve 85% success rates vs. 39% industry standard</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The technology behind $16,000 value creation per case</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Real-world case studies with measurable outcomes</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Performance benchmarks and ROI analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Future roadmap and investment opportunities</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 mb-8">
            <p className="text-sm">
              <strong>Note:</strong> This white paper provides technical insights while 
              protecting our proprietary methodologies and trade secrets.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">20</div>
              <div className="text-sm text-muted-foreground">Pages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">Case Studies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Data Points</div>
            </div>
          </div>
        </div>

        {/* Right Column - Download Form */}
        <div>
          <div className="bg-card border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">
              Download Your Free Copy
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">
                  Your Role
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your role</option>
                  <option value="executive">Executive / C-Suite</option>
                  <option value="hr">HR / People Operations</option>
                  <option value="legal">Legal / Compliance</option>
                  <option value="it">IT / Technology</option>
                  <option value="disability">Disability Services</option>
                  <option value="investor">Investor / VC</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Download White Paper'}
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By downloading, you agree to receive occasional updates from Triepod.AI. 
                You can unsubscribe at any time.
              </p>
            </form>
          </div>

          {/* Trust Signals */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by forward-thinking organizations
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}