export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">About Triepod</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            At Triepod, we&apos;re building cutting-edge AI solutions that solve real-world problems. We believe advanced technology should be accessible to everyone, not just large corporations. Our portfolio of AI projects demonstrates how innovative thinking and powerful technology can create meaningful impact across multiple domains.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Founded by Bryan Thompson, Triepod emerged from a vision to democratize access to powerful AI technology. With extensive experience in enterprise systems and financial technology at Fortune 500 companies, Bryan recognized the gap between cutting-edge AI capabilities and real-world accessibility.
            </p>
            <p className="text-muted-foreground">
              What started as a personal challenge became a portfolio of revolutionary solutions. By combining deep technical expertise with real-world understanding, we create AI systems that deliver exceptional results where traditional approaches fall short. Our flagship success: creating $16,000 in validated value through AI-powered research and documentation.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Triepod&apos;s proprietary AI technology stack represents breakthroughs across multiple domains:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Multi-database knowledge synthesis using Neo4j, Chroma, and Qdrant</li>
              <li>Advanced natural language processing for complex document generation</li>
              <li>Intelligent file system analysis and semantic code understanding</li>
              <li>Strategic research automation that delivers enterprise-grade results</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Our methodology combines cutting-edge AI with practical implementation, delivering solutions that work in the real world, not just in theory.
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
                A veteran technologist with deep expertise in enterprise systems, financial technology, and AI development. Bryan brings unique insights from his experience at Fortune 500 companies, combined with a passion for making advanced technology accessible to everyone. His journey from corporate tech leader to AI innovator drives Triepod&apos;s mission to democratize powerful AI solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We push the boundaries of what&apos;s possible with AI, creating solutions that didn&apos;t exist before.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                Enterprise-grade AI capabilities shouldn&apos;t require enterprise budgets. We make powerful tech accessible.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Impact</h3>
              <p className="text-muted-foreground">
                Every project we build solves real problems and creates measurable value for real people.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Our 85% success rate across projects speaks for itself - we deliver exceptional results consistently.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            Whether you&apos;re an investor, partner, potential client, or someone passionate about AI innovation, we&apos;re building a future where advanced technology serves everyone.
          </p>
          <div className="flex gap-4">
            <a href="/projects" className="text-primary hover:underline">
              Explore Our Projects →
            </a>
            <a href="/contact" className="text-primary hover:underline">
              Get in Touch →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}