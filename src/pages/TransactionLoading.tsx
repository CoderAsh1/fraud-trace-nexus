
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";

export default function TransactionLoading() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing transaction trace...");
  const navigate = useNavigate();
  
  const loadingMessages = [
    "Initializing transaction trace...",
    "Connecting to secure banking network...",
    "Retrieving transaction details...",
    "Analyzing transaction patterns...",
    "Mapping transaction flow across banks...",
    "Identifying connected accounts...",
    "Tracing money flow path...",
    "Scanning for suspicious patterns...",
    "Building transaction tree...",
    "Finalizing transaction analysis..."
  ];
  
  useEffect(() => {
    // Simulate loading process
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Navigate to results page after loading completes
          setTimeout(() => {
            navigate("/transaction-results");
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    // Change loading text messages
    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingMessages.length);
      setLoadingText(loadingMessages[randomIndex]);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [navigate]);
  
  // Get transaction details from localStorage
  const transactionData = JSON.parse(localStorage.getItem("transactionSearch") || "{}");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="flex justify-center">
          <div className="relative">
            <Loader2 className="h-20 w-20 text-primary animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">{progress}%</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-display font-bold">Tracing Transaction</h2>
          <p className="text-muted-foreground animate-pulse">
            {loadingText}
          </p>
          
          <div className="px-2">
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="pt-4 bg-card p-4 rounded-lg shadow-sm border border-border mt-8">
            <p className="font-medium">Transaction Details</p>
            <div className="flex justify-between mt-2">
              <span className="text-muted-foreground">Transaction ID:</span>
              <span className="font-medium">{transactionData.transactionId || "N/A"}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{transactionData.date || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
