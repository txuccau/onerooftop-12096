import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Link } from "react-router-dom";

const products = [
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/black-rope6-scaled-1-300x300.jpeg",
    title: "Mini EDC Karambit Fixed Knife Blade Camping Hunting Tactical Straight Knives",
    price: "79.95",
    badge: "Popular"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/brown-rope6-scaled-1-300x300.jpeg",
    title: "Mini EDC Karambit Fixed Knife Blade Camping Hunting Tactical Straight Knives",
    price: "79.95"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/green-rope6-scaled-1-300x300.jpeg",
    title: "Mini EDC Karambit Fixed Knife Blade Camping Hunting Tactical Straight Knives",
    price: "79.95"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/Linder3-300x300.jpg",
    title: "LINDER Mini Fixed Knife Blade Real Antler Horn Camping Hunting Straight Knives",
    price: "49.95",
    badge: "New Arrival"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/O1CN018Vn9XH1UejzRrFdLZ_2215088982543-0-cib-300x300.jpg",
    title: "LIGHTNING Fixed Knife Blade Camping Hunting Survival Tactical Straight Knives",
    price: "99.95"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/115a04004-0-300x300.jpg",
    title: "GDR Ninja Knife Fixed Blade Camping Hunting Survival Tactical Straight Knives",
    price: "69.95"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/FOX-DERESRINA-KARAMBIT-1-300x300.jpg",
    title: "Fox Knives Karambit Fixed Straight Knife Blade Camping Fishing Hunting Tactical",
    price: "79.95"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/20160601094208458-300x300.jpg",
    title: "Fox Knife Fixed Blade Camping Outdoor Hunting Survival Tactical Straight Knives",
    price: "69.95",
    badge: "Best Seller"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/2017050203266954-300x300.jpg",
    title: "Fox Knife Fixed Blade Camping Outdoor Hunting Survival Tactical Straight Knives",
    price: "99.95"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/rbvavlyv22wafxdeaaf8gro6qfg815-300x300.jpg",
    title: "FOX CLAW Silver Mini Neck Karambit Fixed Knife Blade Camping Hunting Tactical AU",
    price: "49.95"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/rbvawvyv22oaldosaaf-wpjvgli7601-300x300.jpg",
    title: "FOX CLAW Black Mini Neck Karambit Fixed Knife Blade Camping Hunting Tactical NEW",
    price: "49.95"
  },
  {
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/longblack6-scaled-1-300x300.jpeg",
    title: "EDC Karambit Fixed Knife Blade Outdoor Camping Hunting Tactical Straight Knives",
    price: "79.95"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      <Hero />
      
      <section id="products" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Featured </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Collection
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our premium selection of tactical and camping knives, crafted for performance and durability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <footer id="contact" className="border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ONEROOFTOP
          </h3>
          <p className="text-muted-foreground mb-6">
            Premium tactical knives for professionals and enthusiasts
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2025 OneRooftop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
