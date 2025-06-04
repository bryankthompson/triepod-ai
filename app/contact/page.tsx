export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Questions about our disability rights AI platform? Need help with accommodation requests? We&apos;re here to help you achieve equal access in the workplace.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">General Inquiries</h3>
              <p className="text-muted-foreground">
                Email: <a href="mailto:info@triepod.ai" className="text-primary hover:underline">info@triepod.ai</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Accommodation Support</h3>
              <p className="text-muted-foreground">
                Email: <a href="mailto:support@triepod.ai" className="text-primary hover:underline">support@triepod.ai</a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Office Location</h2>
          <div className="space-y-2">
            <p className="text-muted-foreground">Triepod, Inc.</p>
            <p className="text-muted-foreground">PO Box 123</p>
            <p className="text-muted-foreground">Madison, MS 39110</p>
            <p className="text-muted-foreground">United States</p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Response Times</h2>
          <p className="text-muted-foreground mb-4">
            We understand that disability accommodation requests are time-sensitive. Our team prioritizes urgent requests:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Urgent accommodation requests: Within 24 hours</li>
            <li>• General inquiries: 1-2 business days</li>
            <li>• Partnership opportunities: 3-5 business days</li>
          </ul>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
          <div className="space-y-2">
            <a href="https://twitter.com/triepod_ai" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
              Twitter
            </a>
            <a href="https://github.com/triepod-ai" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
              GitHub
            </a>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Partnership Opportunities</h2>
          <p className="text-muted-foreground mb-4">
            Are you a disability rights organization, law firm, or healthcare provider? Let&apos;s work together to expand access to workplace accommodations.
          </p>
          <p className="text-muted-foreground">
            Partnership inquiries: <a href="mailto:partners@triepod.ai" className="text-primary hover:underline">partners@triepod.ai</a>
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Investor Relations</h2>
          <p className="text-muted-foreground mb-4">
            Interested in our mission to democratize disability rights? We&apos;re raising capital to scale our impact.
          </p>
          <p className="text-muted-foreground">
            Investor inquiries: <a href="mailto:investors@triepod.ai" className="text-primary hover:underline">investors@triepod.ai</a>
          </p>
        </section>
      </div>
    </div>
  );
}