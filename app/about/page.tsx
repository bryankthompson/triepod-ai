import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Bryan Thompson - AI Consultant & Business Solutions Expert',
  description: 'Meet Bryan Thompson, your AI consultant with Fortune 500 experience. Specializing in business transformation, custom AI solutions, and strategic AI implementation for enterprises.',
  keywords: ['Bryan Thompson', 'AI consultant', 'business transformation', 'Fortune 500 experience', 'AI strategy', 'enterprise AI'],
  openGraph: {
    title: 'About Bryan Thompson - AI Consultant & Business Solutions Expert',
    description: 'Fortune 500 experience meets cutting-edge AI innovation. Transform your business with proven expertise.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">About Bryan Thompson</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Your AI Business Consultant</h2>
          <p className="text-muted-foreground mb-6">
            I&apos;m Bryan Thompson, your AI consultant dedicated to transforming businesses through strategic AI implementation. With Fortune 500 experience and a proven track record of delivering $16K+ in validated value, I help enterprises navigate the AI revolution and position themselves for success in the new economy.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              With extensive Fortune 500 experience in enterprise systems and financial technology, I bring a unique perspective to AI consulting. I understand both the technical complexities of AI implementation and the business realities of enterprise transformation.
            </p>
            <p className="text-muted-foreground">
              My journey from corporate technology leader to AI consultant was driven by recognizing the massive opportunity gap: businesses know AI is transformative, but they struggle with where to start, how to implement, and how to measure success. I solve this by providing strategic guidance backed by proven results.
            </p>
            <p className="text-muted-foreground">
              <strong>Key Achievement:</strong> Delivered $16,000 in validated business value through AI-powered solutions with an 85% project success rate across diverse industries.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Consulting Expertise</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              My consulting practice focuses on practical AI implementation that delivers measurable business results:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>AI Strategy & Roadmapping:</strong> Custom implementation plans aligned with business goals</li>
              <li><strong>Technology Assessment:</strong> Evaluate AI tools and platforms for your specific needs</li>
              <li><strong>Custom AI Development:</strong> End-to-end solution development using enterprise frameworks</li>
              <li><strong>State AI Initiative Positioning:</strong> Prepare your organization for upcoming opportunities</li>
              <li><strong>Change Management:</strong> Guide teams through AI transformation with minimal disruption</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              My methodology combines technical expertise with business acumen, ensuring AI implementations that work in the real world and deliver bottom-line results.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Bryan Thompson as Your AI Consultant</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">🏢 Fortune 500 Enterprise Experience</h3>
              <p className="text-muted-foreground">
                Deep understanding of enterprise constraints, compliance requirements, and scaling challenges that come with large-scale AI implementations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">💰 Proven ROI Track Record</h3>
              <p className="text-muted-foreground">
                $16,000+ in validated business value delivered with an 85% project success rate. I focus on implementations that deliver measurable business impact.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">🚀 State AI Initiative Ready</h3>
              <p className="text-muted-foreground">
                Positioned to help your organization capitalize on the $9 billion state AI initiative. I understand how to position businesses for government and enterprise partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">🛠️ Technical + Business Expertise</h3>
              <p className="text-muted-foreground">
                Unlike pure technology consultants or business strategists, I bridge both worlds with hands-on development experience and strategic business insight.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Consulting Approach</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">Results-Driven</h3>
              <p className="text-muted-foreground">
                Every engagement is measured by business impact, not just technical implementation. ROI is the ultimate success metric.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Enterprise-Ready</h3>
              <p className="text-muted-foreground">
                AI solutions designed for scale, compliance, and integration with existing enterprise systems and processes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Strategic Partnership</h3>
              <p className="text-muted-foreground">
                I work as an extension of your team, providing ongoing guidance through implementation, deployment, and optimization.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Future-Focused</h3>
              <p className="text-muted-foreground">
                AI implementations designed to position your organization for upcoming opportunities, including state initiatives and partnerships.
              </p>
            </div>
          </div>
        </section>

        <ConsultationCTA variant="primary" showBenefits={true} />
      </div>
    </div>
  );
}