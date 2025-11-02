import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { X, ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface WishlistDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WishlistDrawer = ({ open, onOpenChange }: WishlistDrawerProps) => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart(item);
    toast({ title: "Added to cart", description: `${item.title} added to your cart` });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Wishlist ({items.length})</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6">
          {items.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Your wishlist is empty</p>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-card border border-border rounded-lg p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1 space-y-2">
                    <h4 className="font-medium text-sm line-clamp-2">{item.title}</h4>
                    <p className="text-primary font-bold">${item.price}</p>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart className="h-3 w-3 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
