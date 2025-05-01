
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const banks = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Axis Bank",
  "Canara Bank",
  "Union Bank of India",
  "Bank of India",
  "Indian Bank",
];

export default function Login() {
  const [bankName, setBankName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bankName) {
      toast.error("Please select your bank");
      return;
    }
    if (!userId) {
      toast.error("Please enter your user ID");
      return;
    }
    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    setIsLoading(true);
    // Simulate login - in a real app, this would be an API call
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("user", JSON.stringify({ bankName, userId }));
      toast.success(`Welcome, ${userId}!`);
      navigate("/transaction-search");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold">Secure Login</h1>
          <p className="mt-2 text-muted-foreground">
            Sign in to Transaction Tracking System
          </p>
        </div>
        
        <div className="mt-8 bg-card shadow-lg rounded-lg p-8 border border-border">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="bank" className="block text-sm font-medium">
                Select Bank
              </label>
              <Select value={bankName} onValueChange={setBankName}>
                <SelectTrigger id="bank" className="w-full">
                  <SelectValue placeholder="Select your bank" />
                </SelectTrigger>
                <SelectContent>
                  {banks.map((bank) => (
                    <SelectItem key={bank} value={bank}>
                      {bank}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="userId" className="block text-sm font-medium">
                User ID
              </label>
              <Input
                id="userId"
                name="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                className="w-full"
                placeholder="Enter your user ID"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
                placeholder="••••••••"
              />
              <div className="text-right">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Sign in"}
              </Button>
            </div>
          </form>
          
          <div className="mt-6">
            <p className="text-center text-sm text-muted-foreground">
              For admin login or support, please contact your administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
