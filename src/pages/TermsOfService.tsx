import { Navigation } from "@/components/Navigation";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 animate-fade-in">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using OneRooftop's website and services, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Age Restriction</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 18 years old to purchase products from our website. All knife sales are 
                subject to applicable local, state, and federal laws. It is your responsibility to ensure that 
                your purchase and possession of our products complies with all applicable laws in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions and images. However, we do not warrant that 
                product descriptions or other content is accurate, complete, reliable, or error-free. Colors and 
                specifications may vary slightly from what appears on your screen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Orders and Payments</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By placing an order, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Pay all charges at the prices in effect when you place your order</li>
                <li>Comply with all applicable laws regarding the purchase and use of our products</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Shipping and Returns</h2>
              <p className="text-muted-foreground leading-relaxed">
                We ship to addresses within Australia. Shipping times and costs vary by location. Returns are 
                accepted within 30 days of purchase for unused products in original packaging. Please contact 
                our customer service for return authorization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                OneRooftop shall not be liable for any indirect, incidental, special, or consequential damages 
                arising out of or in connection with your use of our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at support@onerooftop.com.au.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
