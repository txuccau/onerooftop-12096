import { useState } from "react";
import { ShoppingCart, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { CartDrawer } from "./CartDrawer";
import { WishlistDrawer } from "./WishlistDrawer";
import { SearchDialog } from "./SearchDialog";

export const Navigation = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();

  return (
    <>
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <WishlistDrawer open={wishlistOpen} onOpenChange={setWishlistOpen} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link to="/">
              <h1 className="text-2xl font-bold tracking-tight cursor-pointer">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ONEROOFTOP
                </span>
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                HOME
              </Link>
              <Link to="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                SHOP
              </Link>
              <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                CONTACT US
              </Link>
              <Link to="/support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                SUPPORT
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-secondary"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-secondary relative"
              onClick={() => setWishlistOpen(true)}
            >
              <Heart className="h-5 w-5" />
              {wishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistItems}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-secondary relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
