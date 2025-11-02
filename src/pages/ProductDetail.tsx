import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Package, Shield, Truck, ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-32 pb-24 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold mb-4">Product not found</h1>
            <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
          </div>
        </section>
      </div>
    );
  }

  const handleAddToCart = () => {
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

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    navigate("/checkout");
  };

  const handleWishlist = () => {
    addToWishlist({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to wishlist",
      description: `${product.title} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-6 text-muted-foreground hover:text-foreground"
            onClick={() => navigate("/shop")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Collection
          </Button>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden bg-card border border-border aspect-square">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary/10 text-primary border-primary/30">
                    {product.badge}
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                  {product.title}
                </h1>
                <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
              </div>

              <div className="text-4xl font-bold text-primary">
                ${product.price}
              </div>

              <div className="space-y-4 py-6 border-y border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Blade Material</p>
                    <p className="font-semibold text-foreground">{product.blade}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Handle Material</p>
                    <p className="font-semibold text-foreground">{product.handle}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
                <Button 
                  className="flex-1 bg-accent hover:bg-accent/90"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline"
                  size="icon"
                  onClick={handleWishlist}
                  className={isInWishlist(product.id) ? "bg-primary/10 border-primary" : ""}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-primary text-primary" : ""}`} />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Secure Payment</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Truck className="h-8 w-8 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Package className="h-8 w-8 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Quality Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Product Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
