import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id?: string;
  image: string;
  title: string;
  price: string;
  badge?: string;
  stock?: number;
}

export const ProductCard = ({ id, image, title, price, badge, stock }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const productId = id || `${title}-${price}`;
  const inWishlist = isInWishlist(productId);

  const handleAddToCart = () => {
    addToCart({ id: productId, title, price, image });
    toast({ title: "Added to cart", description: `${title} added to your cart` });
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(productId);
      toast({ title: "Removed from wishlist", description: `${title} removed from wishlist` });
    } else {
      addToWishlist({ id: productId, title, price, image });
      toast({ title: "Added to wishlist", description: `${title} added to your wishlist` });
    }
  };
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(28_100%_60%/0.2)]">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wide">
            {badge}
          </div>
        )}
        {stock !== undefined && stock <= 8 && (
          <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-bold uppercase tracking-wide">
            Only {stock} left!
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className={`hover:bg-primary hover:text-primary-foreground ${inWishlist ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={handleToggleWishlist}
            >
              <Heart className={`h-4 w-4 ${inWishlist ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-5 space-y-2">
        <h3 className="font-semibold text-sm line-clamp-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xl font-bold text-primary">${price}</p>
      </div>
    </Card>
  );
};
