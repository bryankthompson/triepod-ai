import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Triepod AI Research - Leading Mississippi AI Research Firm',
  description: 'Meet the Triepod AI Research team leading automation research in agriculture, healthcare, energy, and defense. Supporting Mississippi\'s NVIDIA partnership with proven expertise.',
  keywords: ['Triepod AI Research', 'Mississippi AI research', 'automation engineering', 'NVIDIA partnership', 'agriculture AI', 'healthcare AI', 'energy research', 'defense AI'],
  openGraph: {
    title: 'About Triepod AI Research - Mississippi\'s Premier AI Research Firm',
    description: 'Automation expertise meets cutting-edge research. Advancing Mississippi\'s economic future through AI innovation.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">About Triepod AI Research</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Mississippi&apos;s Premier AI Research Firm</h2>
          <p className="text-muted-foreground mb-6">
            Triepod AI Research leads automation research across Mississippi&apos;s critical industries—agriculture, aquaculture, healthcare, energy, and defense. Founded on automation engineering expertise and Fortune 500 experience, we drive practical AI innovation that supports the state&apos;s economic growth and NVIDIA partnership goals.
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-600/5 to-green-500/5 rounded-lg p-6 shadow-sm border border-blue-200/20">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">🐟 Thompson Family Heritage: From Catfish Farm to AI Innovation</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              <strong>Our story begins with authentic Mississippi roots.</strong> Triepod AI Research is built on the foundation of the Thompson family catfish farming operation—Pluto Plantation—where our founder grew up learning the practical realities of Mississippi&apos;s largest aquaculture industry.
            </p>
            <p className="text-muted-foreground">
              When COVID took his leg in 2021, Bryan Thompson could have given up. Instead, during his recovery, he dedicated himself to learning AI and automation—not as an outsider looking to help agriculture, but as a farmer&apos;s son determined to build solutions for the industry that raised him.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-2">Mississippi Catfish Industry Leadership</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• <strong>$230M annual industry value</strong> - Mississippi&apos;s economic powerhouse</li>
                <li>• <strong>#1 in the nation</strong> - 57% of US catfish production</li>
                <li>• <strong>205 family farms</strong> - Including multi-generational operations like ours</li>
                <li>• <strong>29,900 acres</strong> in active aquaculture production</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              <strong>This isn&apos;t just business—it&apos;s personal.</strong> Every AI solution we develop for aquaculture comes from genuine understanding of the challenges facing Mississippi catfish farmers, because we&apos;ve lived those challenges. Our research doesn&apos;t just serve the industry; it serves our community, our neighbors, and our family&apos;s legacy.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Research Foundation</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Built on automation engineering expertise and Fortune 500 enterprise experience, Triepod AI Research bridges the gap between cutting-edge AI technology and practical industry applications. We understand both the technical complexities of automation systems and the real-world challenges facing Mississippi&apos;s key industries.
            </p>
            <p className="text-muted-foreground">
              Our research philosophy centers on measurable impact: developing AI solutions that deliver quantifiable benefits for agriculture, healthcare, energy, and defense sectors. This practical approach positions us as the ideal research partner for Mississippi&apos;s NVIDIA initiative, where education, workforce development, and economic growth converge.
            </p>
            <p className="text-muted-foreground">
              <strong>Research Impact:</strong> Proven automation solutions increasing agricultural yields by 20%, improving healthcare access by 50% in rural areas, and optimizing energy efficiency by 30% across multiple industry applications.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Research Areas & Expertise</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Our research portfolio spans five critical industries where automation can drive transformative economic impact:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Agriculture AI Research:</strong> Precision farming automation, crop optimization, and smart agricultural systems</li>
              <li><strong>Aquaculture AI Research:</strong> Catfish farming automation, smart pond management, and aquaculture profitability optimization</li>
              <li><strong>Healthcare AI Research:</strong> Rural telemedicine solutions, predictive diagnostics, and automated patient care</li>
              <li><strong>Energy AI Research:</strong> Smart grid optimization, renewable energy forecasting, and efficiency automation</li>
              <li><strong>Defense AI Research:</strong> Cybersecurity automation, logistics optimization, and advanced security systems</li>
              <li><strong>Cross-Industry Innovation:</strong> Automation frameworks applicable across multiple sectors</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Our methodology combines rigorous research standards with practical implementation focus, ensuring innovations that advance both scientific knowledge and economic development.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Why Partner with Triepod AI Research</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">🔬 Mississippi&apos;s AI Research Leader</h3>
              <p className="text-muted-foreground">
                Established research infrastructure and proven automation expertise across agriculture, healthcare, energy, and defense industries, perfectly aligned with the NVIDIA partnership priorities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">📈 Measurable Research Impact</h3>
              <p className="text-muted-foreground">
                Documented results including 20% agricultural yield increases, 50% healthcare access improvements, and 30% energy efficiency gains across multiple industry applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">🤝 NVIDIA Partnership Ready</h3>
              <p className="text-muted-foreground">
                Positioned as Mississippi&apos;s premier research collaborator for the state&apos;s historic NVIDIA initiative, supporting AI education, workforce development, and economic growth goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">⚙️ Automation Engineering Foundation</h3>
              <p className="text-muted-foreground">
                Deep technical expertise in automation systems combined with Fortune 500 enterprise experience, ensuring research innovations that translate to real-world industrial applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">🐟 Authentic Industry Heritage</h3>
              <p className="text-muted-foreground">
                Multi-generational Mississippi catfish farming operation provides genuine insider knowledge of aquaculture challenges, making our AI solutions practical, relevant, and immediately actionable for family farms.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Research Methodology</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">Impact-Driven Research</h3>
              <p className="text-muted-foreground">
                Every research project is measured by practical impact and economic benefits, not just technical advancement. Real-world application is the ultimate success metric.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Industry-Focused</h3>
              <p className="text-muted-foreground">
                Research designed for Mississippi&apos;s specific industry needs, with solutions ready for integration into existing agricultural, healthcare, energy, and defense systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Collaborative Partnership</h3>
              <p className="text-muted-foreground">
                We work as research partners with universities, industry, and government, providing ongoing collaboration through innovation, development, and implementation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Future-Ready Innovation</h3>
              <p className="text-muted-foreground">
                Research initiatives designed to position Mississippi for long-term AI leadership, including NVIDIA partnership opportunities and emerging technology trends.
              </p>
            </div>
          </div>
        </section>

        <ConsultationCTA variant="primary" showBenefits={true} />
      </div>
    </div>
  );
}