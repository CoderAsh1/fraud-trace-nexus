
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Download,
  AlertTriangle,
  Shield,
  Ban,
  BarChart4,
  Search,
  ArrowDown
} from "lucide-react";

// Sample transaction data structure
const sampleTransactionTree = {
  id: "123456789012",
  amount: 50000,
  bank: "State Bank of India",
  accountType: "Personal",
  riskScore: "Low",
  timestamp: "2023-05-01T10:30:00",
  children: [
    {
      id: "234567890123",
      amount: 20000,
      bank: "HDFC Bank",
      accountType: "Personal",
      riskScore: "Medium",
      timestamp: "2023-05-01T11:15:00",
      children: [
        {
          id: "345678901234",
          amount: 20000,
          bank: "Axis Bank",
          accountType: "Merchant",
          riskScore: "Low",
          timestamp: "2023-05-01T14:22:00",
          children: []
        }
      ]
    },
    {
      id: "456789012345",
      amount: 30000,
      bank: "ICICI Bank",
      accountType: "Personal",
      riskScore: "High",
      timestamp: "2023-05-01T11:18:00",
      children: [
        {
          id: "567890123456",
          amount: 15000,
          bank: "Punjab National Bank",
          accountType: "Merchant",
          riskScore: "Medium",
          timestamp: "2023-05-01T13:45:00",
          children: []
        },
        {
          id: "678901234567",
          amount: 15000,
          bank: "Canara Bank",
          accountType: "Personal",
          riskScore: "High",
          timestamp: "2023-05-01T13:50:00",
          children: [
            {
              id: "789012345678",
              amount: 15000,
              bank: "Bank of Baroda",
              accountType: "Cash Withdrawal",
              riskScore: "Critical",
              timestamp: "2023-05-01T16:20:00",
              children: []
            }
          ]
        }
      ]
    }
  ]
};

interface TransactionNode {
  id: string;
  amount: number;
  bank: string;
  accountType: string;
  riskScore: string;
  timestamp: string;
  children: TransactionNode[];
}

interface NodeDetailsProps {
  node: TransactionNode | null;
}

const NodeDetails = ({ node }: NodeDetailsProps) => {
  if (!node) return null;
  
  const getRiskBadge = (risk: string) => {
    const riskClasses: Record<string, string> = {
      "Low": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "Medium": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      "High": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      "Critical": "bg-red-500 text-white"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${riskClasses[risk] || ""}`}>
        {risk}
      </span>
    );
  };
  
  return (
    <div className="bg-card p-4 rounded-lg border border-border">
      <h3 className="font-semibold text-lg mb-4">Transaction Details</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Transaction ID:</span>
          <span className="font-medium">{node.id}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Amount:</span>
          <span className="font-medium">₹{node.amount.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Bank:</span>
          <span className="font-medium">{node.bank}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Account Type:</span>
          <span className="font-medium">{node.accountType}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Risk Score:</span>
          {getRiskBadge(node.riskScore)}
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Timestamp:</span>
          <span className="font-medium">
            {new Date(node.timestamp).toLocaleString()}
          </span>
        </div>
      </div>
      
      <div className="mt-6 flex gap-2">
        <Button size="sm" variant="outline" className="w-full">
          <Search className="mr-2 h-4 w-4" />
          View Details
        </Button>
        
        <Button size="sm" variant="destructive" className="w-full">
          <Ban className="mr-2 h-4 w-4" />
          Flag Account
        </Button>
      </div>
    </div>
  );
};

const TransactionNodeComponent = ({ 
  node, 
  onSelect,
  selectedNode
}: { 
  node: TransactionNode; 
  onSelect: (node: TransactionNode) => void;
  selectedNode: TransactionNode | null;
}) => {
  const isSelected = selectedNode?.id === node.id;
  
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-green-500";
      case "Medium": return "bg-yellow-500";
      case "High": return "bg-red-500";
      case "Critical": return "bg-red-700";
      default: return "bg-blue-500";
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`transaction-card rounded-lg p-3 w-56 border ${isSelected ? "border-primary ring-2 ring-primary/20" : "border-border"} bg-card cursor-pointer hover:shadow-lg`}
        onClick={() => onSelect(node)}
      >
        <div className="flex items-center space-x-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${getRiskColor(node.riskScore)}`}></div>
          <span className="font-medium">{node.bank}</span>
        </div>
        
        <div className="text-lg font-bold">₹{node.amount.toLocaleString()}</div>
        
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>{node.accountType}</span>
          <span>{new Date(node.timestamp).toLocaleTimeString()}</span>
        </div>
      </div>
      
      {node.children.length > 0 && (
        <>
          <div className="w-0.5 h-6 bg-border"></div>
          <ArrowDown className="text-muted-foreground h-4 w-4 mb-1" />
          <div className="flex flex-row space-x-6">
            {node.children.map((child) => (
              <TransactionNodeComponent 
                key={child.id} 
                node={child} 
                onSelect={onSelect} 
                selectedNode={selectedNode}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function TransactionResults() {
  const [transactionData] = useState(sampleTransactionTree);
  const [selectedNode, setSelectedNode] = useState<TransactionNode | null>(null);
  
  // Select the root node initially
  useEffect(() => {
    setSelectedNode(transactionData);
  }, [transactionData]);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-display font-bold">Transaction Analysis</h1>
            <p className="text-muted-foreground">
              Transaction ID: {transactionData.id}
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button variant="destructive">
              <Ban className="mr-2 h-4 w-4" />
              Freeze Accounts
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4 overflow-x-auto">
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm min-h-[500px] overflow-x-auto">
              <h2 className="text-xl font-semibold mb-6">Transaction Flow</h2>
              
              <div className="p-4 min-w-[800px]">
                <TransactionNodeComponent 
                  node={transactionData} 
                  onSelect={setSelectedNode}
                  selectedNode={selectedNode} 
                />
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border shadow-sm flex items-center">
                <Shield className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                  <p className="text-xl font-bold">₹50,000</p>
                </div>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border shadow-sm flex items-center">
                <BarChart4 className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Risk Level</p>
                  <p className="text-xl font-bold">Medium</p>
                </div>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border shadow-sm flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Suspicious Accounts</p>
                  <p className="text-xl font-bold">2</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/4">
            <NodeDetails node={selectedNode} />
            
            <div className="mt-6 bg-card p-4 rounded-lg border border-border shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Actions</h3>
              <div className="space-y-3">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export Full Report
                </Button>
                <Button variant="outline" className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Investigate Further
                </Button>
                <Button variant="destructive" className="w-full">
                  <Ban className="mr-2 h-4 w-4" />
                  Request Account Freeze
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
