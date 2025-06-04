export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">About Triepod</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            At Triepod, we&apos;re revolutionizing disability rights advocacy through AI technology. We believe everyone deserves equal access to workplace accommodations, and we&apos;re making it possible without expensive lawyers or lengthy litigation. Our AI-powered platform achieves an 85% success rate in accommodation requests, compared to the industry average of 39%.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Founded by Bryan Thompson, Triepod emerged from personal experience navigating the disability accommodation process. After witnessing firsthand how difficult and expensive it can be to secure workplace accommodations, Bryan set out to democratize access to disability rights.
            </p>
            <p className="text-muted-foreground">
              What started as a personal challenge became a revolutionary solution. By combining AI technology with deep understanding of ADA law and employer psychology, we created a platform that generates comprehensive, legally-sound accommodation requests that actually work. Our first success story: a $16,000 document that achieved voluntary compliance where traditional methods had failed.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Triepod&apos;s proprietary AI technology represents a breakthrough in disability advocacy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Multi-framework analysis combining legal, medical, and psychological insights</li>
              <li>Educational tone that achieves voluntary compliance without litigation</li>
              <li>Comprehensive documentation that addresses employer concerns proactively</li>
              <li>Evidence-based approach with quantifiable economic impact analysis</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Our methodology remains our competitive advantage - delivering results that traditional legal approaches can&apos;t match.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Leadership</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Bryan Thompson</h3>
              <p className="text-sm text-muted-foreground mb-2">Founder & CEO</p>
              <p className="text-muted-foreground">
                A veteran in enterprise systems and financial technology with experience at Fortune 500 companies, Bryan brings unique insights into both technology and workplace dynamics. His personal journey through the disability accommodation process inspired the creation of Triepod&apos;s revolutionary approach to disability rights advocacy.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                Disability rights shouldn&apos;t require a $50,000 legal retainer. We make advocacy accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Empowerment</h3>
              <p className="text-muted-foreground">
                We empower individuals to advocate for themselves with professional-grade documentation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We use cutting-edge AI to solve real-world civil rights challenges.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Results</h3>
              <p className="text-muted-foreground">
                Our 85% success rate speaks for itself - we deliver outcomes, not just documents.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            Whether you&apos;re an investor, partner, or someone who needs our help, we&apos;re building a movement to transform disability rights advocacy.
          </p>
          <div className="flex gap-4">
            <a href="/early-access" className="text-primary hover:underline">
              Join the Waitlist →
            </a>
            <a href="/investors" className="text-primary hover:underline">
              Investor Information →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}