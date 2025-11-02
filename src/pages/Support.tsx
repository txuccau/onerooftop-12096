import { Navigation } from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Package, Shield, RefreshCw, Truck } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Support </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions and learn more about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16 animate-fade-in">
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-muted-foreground">Free delivery on orders over $150</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quality Guarantee</h3>
              <p className="text-muted-foreground">All products backed by our quality promise</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy on all items</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure Packaging</h3>
              <p className="text-muted-foreground">Your items arrive safely and securely</p>
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How long does shipping take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Standard shipping takes 5-7 business days within Australia. Express shipping options are available at checkout.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer a 30-day return policy on all unused items in their original packaging. Contact our support team to initiate a return.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Are your knives legal in Australia?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All our products comply with Australian knife laws. However, we recommend checking your local state regulations before purchasing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
