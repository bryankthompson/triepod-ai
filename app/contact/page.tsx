import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule AI Consultation - Bryan Thompson Business Solutions',
  description: 'Ready to transform your business with AI? Schedule a free consultation with Bryan Thompson, AI consultant with Fortune 500 experience. Discuss your AI strategy today.',
  keywords: ['AI consultation', 'business consultation', 'AI strategy', 'schedule consultation', 'Bryan Thompson', 'AI consultant'],
  openGraph: {
    title: 'Schedule AI Consultation - Bryan Thompson Business Solutions',
    description: 'Free consultation with AI expert. Transform your business with proven strategies.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Schedule Your AI Consultation</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how AI can drive growth, efficiency, and competitive advantage for your organization. 
            I&apos;m here to help you navigate the AI revolution and position your business for success.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">Business Consultation</h3>
              <p className="text-muted-foreground">
                Email: <a href="mailto:bryan@triepod.ai" className="text-primary hover:underline">bryan@triepod.ai</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Strategic Partnerships</h3>
              <p className="text-muted-foreground">
                Email: <a href="mailto:partnerships@triepod.ai" className="text-primary hover:underline">partnerships@triepod.ai</a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Consultation Options</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-medium mb-2">📞 Phone Consultation</h3>
              <p className="text-sm text-muted-foreground">30-minute strategic discussion</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-medium mb-2">💻 Video Meeting</h3>
              <p className="text-sm text-muted-foreground">In-depth AI roadmap session</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-medium mb-2">🏢 On-site Visit</h3>
              <p className="text-sm text-muted-foreground">Enterprise assessment (MS region)</p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <p className="text-muted-foreground mb-4">
            I understand that AI transformation is critical for staying competitive. I prioritize business consultations to help you move quickly:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <strong>Consultation requests:</strong> Response within 24 hours</li>
            <li>• <strong>Free AI assessment:</strong> Delivered within 48 hours of meeting</li>
            <li>• <strong>Project proposals:</strong> Custom solutions within 3-5 business days</li>
            <li>• <strong>State AI initiative inquiries:</strong> Priority response within 24 hours</li>
          </ul>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Professional Network</h2>
          <div className="space-y-2">
            <a href="https://linkedin.com/in/bryanthompson-ai" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
              LinkedIn - Connect Professionally
            </a>
            <a href="https://github.com/triepod-ai" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
              GitHub - View Technical Work
            </a>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Enterprise Partnerships</h2>
          <p className="text-muted-foreground mb-4">
            Are you a technology partner, systems integrator, or enterprise seeking AI solutions? Let&apos;s discuss strategic collaboration opportunities.
          </p>
          <p className="text-muted-foreground">
            Partnership inquiries: <a href="mailto:partnerships@triepod.ai" className="text-primary hover:underline">partnerships@triepod.ai</a>
          </p>
        </section>

        <ConsultationCTA variant="secondary" showBenefits={true} />
      </div>
    </div>
  );
}