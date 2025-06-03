export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Contact Support</h1>
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help. We typically respond within 24 hours during business days.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Email Support</h3>
              <p className="text-muted-foreground">
                For general inquiries: <a href="mailto:support@triepod.ai" className="text-primary hover:underline">support@triepod.ai</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Priority Support</h2>
          <p className="text-muted-foreground mb-4">
            Enterprise customers receive priority support with guaranteed response times and dedicated support channels.
          </p>
          <p className="text-muted-foreground">
            Contact your account manager or email <a href="mailto:enterprise@triepod.ai" className="text-primary hover:underline">enterprise@triepod.ai</a>
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Community Support</h2>
          <p className="text-muted-foreground mb-4">
            Join our community channels for peer support and discussions:
          </p>
          <div className="space-y-2">
            <a href="https://github.com/triepod" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
              GitHub Discussions
            </a>
            <a href="https://twitter.com/triepod" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
              Twitter Community
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}