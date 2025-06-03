export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                <p className="text-muted-foreground">
                  When you create an account or contact us, we may collect your name, email address, and other details you provide.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Usage Data</h3>
                <p className="text-muted-foreground">
                  We collect information about how you interact with our Services, such as IP addresses, browser type, pages visited, and timestamps.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">User Content</h3>
                <p className="text-muted-foreground">
                  Any data or content you submit to our Services is processed to provide functionality and improve our AI.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Service Provision</h3>
                <p className="text-muted-foreground">
                  We use your information to operate, maintain, and enhance our AI-powered tools, including processing queries and generating responses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Service Improvement</h3>
                <p className="text-muted-foreground">
                  Usage data helps us analyze trends, optimize performance, and develop new features.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-muted-foreground">
              We implement reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Access and Updates</h3>
                <p className="text-muted-foreground">
                  You can review or update your account information by contacting us at support@triepod.ai.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Data Deletion</h3>
                <p className="text-muted-foreground">
                  You can request deletion of your personal data, subject to legal requirements and technical limitations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground">
              Have questions about our privacy practices? Email us at support@triepod.ai
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}