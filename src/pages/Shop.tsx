import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Collection
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our complete range of premium tactical and camping knives
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-scale-in cursor-pointer" 
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <ProductCard {...product} stock={product.stock} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
