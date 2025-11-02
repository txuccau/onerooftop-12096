import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const allProducts = [
  {
    id: "1",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/black-rope6-scaled-1-300x300.jpeg",
    title: "Mini EDC Karambit Fixed Knife Blade Camping Hunting Tactical Straight Knives",
    price: "79.95",
  },
  {
    id: "2",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/brown-rope6-scaled-1-300x300.jpeg",
    title: "Mini EDC Karambit Fixed Knife Blade Camping Hunting Tactical Straight Knives",
    price: "79.95",
  },
  {
    id: "3",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/green-rope6-scaled-1-300x300.jpeg",
    title: "Mini EDC Karambit Fixed Knife Blade Camping Hunting Tactical Straight Knives",
    price: "79.95",
  },
  {
    id: "4",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/Linder3-300x300.jpg",
    title: "LINDER Mini Fixed Knife Blade Real Antler Horn Camping Hunting Straight Knives",
    price: "49.95",
  },
];

export const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart(product);
    toast({ title: "Added to cart", description: `${product.title} added to your cart` });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for knives..."
              className="pl-9"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          
          <div className="overflow-y-auto max-h-[400px] space-y-3">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No products found
              </p>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-2 line-clamp-2">
                      {product.title}
                    </h4>
                    <p className="text-primary font-bold mb-2">${product.price}</p>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
