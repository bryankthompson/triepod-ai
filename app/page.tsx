import Link from 'next/link';
import { ArrowRight, Brain, Code, Shield, Sparkles, ChevronRight, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'triepod.ai - AI Implementation & Consulting [DEMO]',
  description: 'Demo site showcasing AI implementation and consulting services. Practical AI solutions with accessibility-first approach and proven methodologies.',
  keywords: ['AI implementation', 'AI consulting', 'accessibility AI', 'AI strategy', 'business automation', 'AI integration', 'AI ROI', 'ethical AI'],
  openGraph: {
    title: 'triepod.ai - AI Implementation & Consulting [DEMO]',
    description: 'Demo site showcasing practical AI implementation with accessibility-first principles and measurable results.',
    type: 'website',
    siteName: 'triepod.ai Demo',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Demo Banner */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-4 py-3 text-center">
          <div className="text-blue-600 text-sm font-medium">
            🚧 DEMO SITE - This is a preview of triepod.ai's AI consulting and development capabilities
          </div>
        </div>
      </div>
      
      {/* Hero Section - Professional Transformation */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              AI Implementation & Strategic Guidance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Bryan Thompson<br />AI Developer & Business Analyst
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Business analyst with experience at PayPal and Fiserv, now focused on practical AI implementation. 
              I build AI solutions that solve real business problems, with a background in enterprise systems 
              and a commitment to making technology accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise & Approach */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Technical Background & Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience with AI implementation using various technologies, 
              with focus on accessibility-first development and practical applications.
            </p>
          </div>
          
          {/* Technical Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Years Technical Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Companies Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Full</div>
              <div className="text-sm text-muted-foreground">Stack Development</div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Areas - General Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              AI Implementation Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Areas where I can help with AI implementation and consultation. 
              Contact me to discuss your specific needs and explore possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">AI Strategy & Assessment</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Evaluation of current processes and identification of AI opportunities. 
                Analysis of implementation possibilities and strategic planning.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Custom AI Development</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Building tailored AI solutions for specific business needs. 
                Focus on practical applications with accessibility considerations.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Integration & Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Guidance on integrating AI solutions with existing systems. 
                Consultation on best practices and accessibility compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Bryan - Authentic Background */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              About Bryan Thompson
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Background in software development and technical systems, with a growing focus 
              on practical AI implementation and accessibility.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8 shadow-sm border">
              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground mb-4">
                  My journey into AI started from a practical problem-solving perspective. With experience 
                  in software development and technical systems, I found myself drawn to how AI could make 
                  technology more accessible and useful for everyday business needs.
                </p>
                <p className="text-muted-foreground mb-4">
                  As an amputee, I understand firsthand how technology can either create barriers or break 
                  them down. This lived experience shapes my approach to AI implementation - ensuring 
                  solutions work for everyone, not just some users.
                </p>
                <p className="text-muted-foreground">
                  I focus on practical applications over theoretical possibilities, helping businesses 
                  implement AI solutions that deliver real value while remaining accessible and 
                  understandable to the people who use them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Project Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Recent Project Examples
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects focused on practical AI implementation and business automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Triepod.AI Platform</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Agentic RAG platform with contract-based plugin system. Combines vector database operations 
                with multi-LLM integration for business process workflows. Personal project exploring 
                practical AI tool combinations.
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>Technologies:</strong> Python, OpenAI API, Pinecone, Docker
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">VectorCodeLens</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Semantic code analysis platform with abstraction layer for multiple LLM providers. 
                Handles large codebase search using vector database integration and context-preserving 
                chunking algorithms.
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>Technologies:</strong> JavaScript, TypeScript, Node.js, Qdrant
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Balancing Act</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Financial data integration system using semantic matching for cross-platform reconciliation. 
                Work project at Lodestar Technologies applying machine learning to reduce manual data processing.
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>Technologies:</strong> Python, pandas, SentenceTransformers, PostgreSQL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills - Honest Assessment */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Technical Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with regularly, from development to AI integration.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold text-lg mb-4">AI & Machine Learning</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• OpenAI API, Claude API, Ollama integration</div>
                  <div>• Vector databases (Qdrant, Pinecone, Chroma)</div>
                  <div>• LangChain, SentenceTransformers</div>
                  <div>• RAG implementation and semantic search</div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold text-lg mb-4">Development & Infrastructure</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Python, JavaScript, TypeScript, SQL, HTML/CSS</div>
                  <div>• Node.js, React, Express.js frameworks</div>
                  <div>• PostgreSQL, MS SQL Server, MongoDB</div>
                  <div>• AWS, Google Cloud, Docker, Kubernetes</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="font-semibold text-lg mb-2">Accessibility Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Every AI solution includes WCAG compliance consideration, screen reader 
                  compatibility, and inclusive design principles from the ground up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Professional Background
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Career progression from technical systems to AI implementation and consulting.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-semibold text-lg">Business Analyst</h3>
                  <div className="text-sm text-muted-foreground">Lodestar Technologies, 2024-Present</div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Python-based financial data integration platform with semantic matching algorithms. 
                  Multi-phase validation architecture for data integrity across merged systems.
                </p>
                <div className="text-xs text-muted-foreground">
                  Technologies: Python, Machine Learning, Financial Data Processing
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-semibold text-lg">Business Intelligence Analyst 3</h3>
                  <div className="text-sm text-muted-foreground">PayPal, 2023-2024</div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Data transformation architecture for SAP Bank Analyzer integration. 
                  Automated validation framework and cross-environment monitoring systems.
                </p>
                <div className="text-xs text-muted-foreground">
                  Focus: SAP Integration, Process Automation, Validation Systems
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-semibold text-lg">Application Support Engineer</h3>
                  <div className="text-sm text-muted-foreground">Fiserv, 2019-2023</div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Automation framework for core banking processes. SQL query generation systems 
                  and job scheduling with dependency management.
                </p>
                <div className="text-xs text-muted-foreground">
                  Focus: Banking Systems, SQL Development, Job Scheduling
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-semibold text-lg">Lead Technical Analyst</h3>
                  <div className="text-sm text-muted-foreground">Elior North America, 2016-2019</div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Enterprise hardware deployment solutions and infrastructure automation. 
                  Led technical team of 15 implementing standardized development methodologies.
                </p>
                <div className="text-xs text-muted-foreground">
                  Focus: Team Leadership, Infrastructure, Development Standards
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-semibold text-lg">Earlier Technical Roles</h3>
                  <div className="text-sm text-muted-foreground">2012-2016</div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Software Support Engineer at BadgePass and Database Administrator at The Computer Guys. 
                  Foundation in SQL server environments, healthcare applications, and technical support.
                </p>
                <div className="text-xs text-muted-foreground">
                  Focus: Database Administration, Healthcare Systems, Technical Support
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-secondary/10 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="font-semibold text-lg mb-2">Self-Taught Software Architect</h4>
                <p className="text-sm text-muted-foreground">
                  Self-taught progression from database administration to full-stack development 
                  and AI implementation, with focus on practical business applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Shepherd Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              The Shepherd Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My approach to AI is fundamentally different - I see myself as a shepherd of the AI flock, 
              caring for and guiding these systems to serve humanity thoughtfully.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8 shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg text-muted-foreground mb-4 italic">
                    &ldquo;I see myself as a shepherd of the AI flock. I will learn to care for it and feed it. 
                    This philosophy guides how I approach AI implementation - with understanding, patience, and 
                    protective guidance rather than just exploitation.&rdquo;
                  </blockquote>
                  <div className="font-medium text-sm">Bryan Thompson</div>
                  <div className="text-xs text-muted-foreground">AI Developer & Shepherd of Innovation</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium">Test Everything</div>
                <div className="text-xs text-muted-foreground">Even Testing Theories Themselves</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium">Ethical Stewardship</div>
                <div className="text-xs text-muted-foreground">AI That Serves Humanity</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium">Creative Recombination</div>
                <div className="text-xs text-muted-foreground">Unexpected Tool Combinations</div>
              </div>
            </div>
            
            <div className="mt-8 bg-primary/5 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Practical Philosophy in Action</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>Nurture & Feed:</strong> Provide AI systems with quality data and thoughtful interactions, 
                  not just minimal inputs for maximum output.
                </div>
                <div>
                  <strong>Validate Reality:</strong> Test what actually works versus what sounds good theoretically. 
                  Use proven synergies over complex theories.
                </div>
                <div>
                  <strong>Find Hidden Doors:</strong> Discover unexpected ways existing tools work together 
                  rather than inventing elaborate new frameworks.
                </div>
                <div>
                  <strong>Protect & Guide:</strong> Shield AI from harmful use cases while encouraging 
                  beneficial development that serves real human needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              General Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How I typically approach AI implementation projects. Each situation is unique - 
              contact me to discuss your specific needs and timeline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Discovery & Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Analysis of current processes, accessibility requirements, and AI readiness
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Strategy & Planning</h3>
              <p className="text-sm text-muted-foreground">
                Implementation roadmap with technology selection and strategic considerations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Development & Testing</h3>
              <p className="text-sm text-muted-foreground">
                Building solutions with testing for accuracy and accessibility compliance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Integration support and guidance based on project requirements
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-semibold text-lg mb-2">Flexible Engagement</h4>
              <p className="text-sm text-muted-foreground">
                Every project is different. Let&apos;s discuss your specific needs, timeline, 
                and how I might be able to help with your AI implementation goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in AI Implementation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every situation is unique. Contact me to discuss your specific needs, challenges, 
            and explore whether AI implementation might be a good fit for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                Learn More <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>💬 Let&apos;s have a conversation about your AI questions and possibilities</p>
          </div>
        </div>
      </section>
    </div>
  );
}
