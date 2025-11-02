import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { products as catalogProducts } from "@/data/products";
import { Product } from "@/data/products";

const Catalog = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Full </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Catalog
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed specifications and information for all our products
            </p>
          </div>
          
          <div className="space-y-4 animate-fade-in">
            {catalogProducts.map((product, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-48 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                        {product.badge && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 flex-shrink-0">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground block mb-1">Blade Material</span>
                        <span className="text-foreground font-medium">{product.blade}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1">Handle Material</span>
                        <span className="text-foreground font-medium">{product.handle}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1">Price</span>
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                      </div>
                    </div>
                    
                    {product.stock <= 8 && (
                      <div className="flex items-center gap-2 px-3 py-2 bg-destructive/10 border border-destructive/30 rounded-lg">
                        <span className="text-sm font-semibold text-destructive">⚠️ Only {product.stock} left in stock - Order soon!</span>
                      </div>
                    )}
                    
                    <div className="flex gap-3 pt-2">
                      <Button 
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.title}</DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Product Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">SKU</span>
                  <span className="font-medium">{selectedProduct.sku}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">Price</span>
                  <span className="text-2xl font-bold text-primary">${selectedProduct.price}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">Blade Material</span>
                  <span className="font-medium">{selectedProduct.blade}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">Handle Material</span>
                  <span className="font-medium">{selectedProduct.handle}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Catalog;
