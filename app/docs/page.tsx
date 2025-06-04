import Link from 'next/link';

export const metadata = {
  title: 'Documentation | Triepod.AI',
  description: 'Explore the technology behind Triepod.AI\'s revolutionary 85% success rate in disability rights advocacy',
};

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the technology behind Triepod.AI&rsquo;s revolutionary 85% success rate in disability rights advocacy
        </p>
      </div>

      {/* White Paper CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Technical White Paper</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          &ldquo;The Evolution of AI-Powered Disability Rights Technology&rdquo; - 
          A comprehensive analysis of our proven approach achieving $16,000 value creation per case
        </p>
        <Link href="/docs/white-paper" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Download White Paper
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </Link>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Overview Section */}
        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary/10 rounded-lg mr-3">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Overview</h2>
          </div>
          <div className="space-y-3">
            <Link href="/docs/overview/proven-results" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Proven Results</h3>
              <p className="text-sm text-muted-foreground">Real-world validation with 85% success rate</p>
            </Link>            <Link href="/docs/overview/cost-analysis" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">95% Cost Reduction</h3>
              <p className="text-sm text-muted-foreground">How we achieve enterprise results at fraction of cost</p>
            </Link>
            <Link href="/docs/overview/technology-stack" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Technology Overview</h3>
              <p className="text-sm text-muted-foreground">High-level architecture without revealing secrets</p>
            </Link>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary/10 rounded-lg mr-3">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Architecture</h2>
          </div>
          <div className="space-y-3">
            <Link href="/docs/architecture/3-pronged-approach" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Proprietary 3-Pronged System</h3>
              <p className="text-sm text-muted-foreground">Our revolutionary approach (details protected)</p>
            </Link>
            <Link href="/docs/architecture/performance-metrics" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Performance Benchmarks</h3>
              <p className="text-sm text-muted-foreground">Speed and efficiency metrics</p>
            </Link>
            <Link href="/docs/architecture/scalability" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Enterprise Scalability</h3>
              <p className="text-sm text-muted-foreground">Built for organizations of any size</p>
            </Link>
          </div>
        </section>
        {/* Implementation Section */}
        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary/10 rounded-lg mr-3">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Implementation</h2>
          </div>
          <div className="space-y-3">
            <Link href="/docs/implementation/quick-start" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Quick Start Guide</h3>
              <p className="text-sm text-muted-foreground">Get up and running in minutes</p>
            </Link>
            <Link href="/docs/implementation/best-practices" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Best Practices</h3>
              <p className="text-sm text-muted-foreground">Optimize your advocacy outcomes</p>
            </Link>
            <Link href="/docs/implementation/workflow-integration" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Workflow Integration</h3>
              <p className="text-sm text-muted-foreground">Seamlessly integrate with existing processes</p>
            </Link>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary/10 rounded-lg mr-3">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Use Cases</h2>
          </div>
          <div className="space-y-3">
            <Link href="/docs/use-cases/workplace-accommodations" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Workplace Accommodations</h3>
              <p className="text-sm text-muted-foreground">ADA compliance made simple</p>
            </Link>
            <Link href="/docs/use-cases/education-advocacy" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Education Rights</h3>
              <p className="text-sm text-muted-foreground">IDEA and Section 504 advocacy</p>
            </Link>
            <Link href="/docs/use-cases/healthcare-access" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Healthcare Access</h3>
              <p className="text-sm text-muted-foreground">Breaking down medical barriers</p>
            </Link>
          </div>
        </section>
        {/* Legal Frameworks Section */}
        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary/10 rounded-lg mr-3">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Legal Frameworks</h2>
          </div>
          <div className="space-y-3">
            <Link href="/docs/legal/supported-frameworks" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Supported Laws</h3>
              <p className="text-sm text-muted-foreground">Federal and state coverage</p>
            </Link>
            <Link href="/docs/legal/compliance-tracking" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Compliance Monitoring</h3>
              <p className="text-sm text-muted-foreground">Stay ahead of regulatory changes</p>
            </Link>
            <Link href="/docs/legal/precedent-analysis" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Precedent Integration</h3>
              <p className="text-sm text-muted-foreground">Leveraging case law effectively</p>
            </Link>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary/10 rounded-lg mr-3">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Support</h2>
          </div>
          <div className="space-y-3">
            <Link href="/docs/support/faq" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Frequently Asked Questions</h3>
              <p className="text-sm text-muted-foreground">Common questions answered</p>
            </Link>
            <Link href="/docs/support/troubleshooting" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Troubleshooting</h3>
              <p className="text-sm text-muted-foreground">Solutions to common issues</p>
            </Link>
            <Link href="/contact" className="block p-3 rounded hover:bg-accent transition-colors">
              <h3 className="font-medium mb-1">Contact Support</h3>
              <p className="text-sm text-muted-foreground">Get help from our team</p>
            </Link>
          </div>
        </section>
      </div>
      {/* Bottom CTA */}
      <div className="mt-12 text-center bg-accent/50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Advocacy?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join the revolution in AI-powered disability rights advocacy. Proven results, 95% cost savings.
        </p>
        <Link href="/early-access" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Request Early Access
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}