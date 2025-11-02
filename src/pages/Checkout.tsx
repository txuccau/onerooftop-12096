import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Wallet } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  const applyCoupon = () => {
    // Demo coupon codes
    const validCoupons: { [key: string]: number } = {
      "SAVE10": 0.10,
      "SAVE20": 0.20,
      "WELCOME": 0.15
    };

    const discountRate = validCoupons[couponCode.toUpperCase()];
    if (discountRate) {
      setDiscount(totalPrice * discountRate);
      setCouponApplied(true);
      toast({
        title: "Coupon applied!",
        description: `You saved $${(totalPrice * discountRate).toFixed(2)}`,
      });
    } else {
      toast({
        title: "Invalid coupon",
        description: "Please check your coupon code and try again.",
        variant: "destructive",
      });
    }
  };

  const finalTotal = totalPrice - discount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
      clearCart();
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-32 pb-24 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some items to your cart before checking out.</p>
            <Button onClick={() => navigate("/shop")}>Continue Shopping</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-foreground">Checkout</span>
          </h1>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP/Postal Code</Label>
                      <Input id="zip" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 border border-border rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center cursor-pointer flex-1">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex items-center cursor-pointer flex-1">
                        <Wallet className="mr-2 h-4 w-4" />
                        PayPal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors">
                      <RadioGroupItem value="googlepay" id="googlepay" />
                      <Label htmlFor="googlepay" className="flex items-center cursor-pointer flex-1">
                        <Wallet className="mr-2 h-4 w-4" />
                        Google Pay
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors">
                      <RadioGroupItem value="applepay" id="applepay" />
                      <Label htmlFor="applepay" className="flex items-center cursor-pointer flex-1">
                        <Wallet className="mr-2 h-4 w-4" />
                        Apple Pay
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {paymentMethod === "card" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Card Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="md:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.title.substring(0, 30)}... x{item.quantity}
                        </span>
                        <span className="font-medium">
                          ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-border pt-4 space-y-4">
                    <div>
                      <Label htmlFor="coupon" className="text-sm mb-2 block">Coupon Code</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="coupon"
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          disabled={couponApplied}
                        />
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={applyCoupon}
                          disabled={couponApplied || !couponCode}
                        >
                          Apply
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Try: SAVE10, SAVE20, or WELCOME
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-sm text-primary">
                          <span>Discount</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                        <span>Total</span>
                        <span className="text-primary">${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Place Order"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
