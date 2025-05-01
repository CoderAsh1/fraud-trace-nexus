
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

export default function TransactionSearch() {
  const [transactionId, setTransactionId] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!transactionId.trim()) {
      toast.error("Please enter a transaction ID");
      return;
    }
    
    if (!date) {
      toast.error("Please select a date");
      return;
    }
    
    // Save the search parameters to use them in the loading screen
    localStorage.setItem("transactionSearch", JSON.stringify({ 
      transactionId, 
      date 
    }));
    
    // Navigate to the loading screen
    navigate("/transaction-loading");
  };
  
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-display font-bold">Track Transaction</h1>
          <p className="mt-2 text-muted-foreground">
            Enter the transaction ID and date to trace transaction flow
          </p>
        </div>
        
        <div className="bg-card shadow-lg rounded-lg p-8 border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="transactionId" className="block text-sm font-medium">
                Transaction ID / UTR Number
              </label>
              <Input
                id="transactionId"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="Enter transaction ID or UTR"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium">
                Transaction Date
              </label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full">
                Track Transaction
              </Button>
            </div>
          </form>
        </div>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-medium mb-2">Recent Searches</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-card p-3 rounded-md">
              <div>
                <p className="font-medium">UTR: 123456789012</p>
                <p className="text-sm text-muted-foreground">May 10, 2023</p>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
            <div className="flex justify-between items-center bg-card p-3 rounded-md">
              <div>
                <p className="font-medium">UTR: 987654321098</p>
                <p className="text-sm text-muted-foreground">April 25, 2023</p>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
