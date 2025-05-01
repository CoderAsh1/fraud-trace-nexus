
import { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  label: string;
  amount: number;
  risk: 'low' | 'medium' | 'high' | 'critical';
  bank?: string;
  accountType?: string;
}

interface Edge {
  from: string;
  to: string;
  amount: number;
}

interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

const sampleData: GraphData = {
  nodes: [
    { id: 'source', label: 'Source Account', amount: 50000, risk: 'low', bank: 'HDFC Bank', accountType: 'Personal' },
    { id: 'node1', label: 'Account 1', amount: 20000, risk: 'medium', bank: 'ICICI Bank', accountType: 'Personal' },
    { id: 'node2', label: 'Account 2', amount: 15000, risk: 'low', bank: 'State Bank of India', accountType: 'Business' },
    { id: 'node3', label: 'Account 3', amount: 15000, risk: 'high', bank: 'Axis Bank', accountType: 'Personal' },
    { id: 'node4', label: 'Account 4', amount: 10000, risk: 'medium', bank: 'PNB', accountType: 'Merchant' },
    { id: 'node5', label: 'Account 5', amount: 5000, risk: 'high', bank: 'Canara Bank', accountType: 'Personal' },
    { id: 'node6', label: 'Account 6', amount: 5000, risk: 'critical', bank: 'Union Bank', accountType: 'Cash Withdrawal' },
  ],
  edges: [
    { from: 'source', to: 'node1', amount: 20000 },
    { from: 'source', to: 'node2', amount: 15000 },
    { from: 'source', to: 'node3', amount: 15000 },
    { from: 'node1', to: 'node4', amount: 10000 },
    { from: 'node1', to: 'node5', amount: 5000 },
    { from: 'node3', to: 'node6', amount: 5000 },
  ],
};

export default function TransactionGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [visibleNodes, setVisibleNodes] = useState<string[]>(['source']);
  const [visibleEdges, setVisibleEdges] = useState<Edge[]>([]);

  useEffect(() => {
    // Animation to reveal the graph over time
    const nodesTimer = setTimeout(() => {
      const nextLevelNodes = sampleData.edges
        .filter(edge => visibleNodes.includes(edge.from))
        .map(edge => edge.to);
      
      setVisibleNodes(prev => [...prev, ...nextLevelNodes]);
      
      const nextLevelEdges = sampleData.edges
        .filter(edge => visibleNodes.includes(edge.from));
      
      setVisibleEdges(nextLevelEdges);
    }, 1000);

    return () => {
      clearTimeout(nodesTimer);
    };
  }, [visibleNodes]);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'critical':
        return 'fill-red-700 dark:fill-red-600';
      case 'high':
        return 'fill-red-500 dark:fill-red-400';
      case 'medium':
        return 'fill-amber-500 dark:fill-amber-400';
      case 'low':
        return 'fill-green-500 dark:fill-green-400';
      default:
        return 'fill-blue-500 dark:fill-blue-400';
    }
  };

  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
  };

  // Simple tree layout calculation
  const nodePositions: Record<string, { x: number, y: number }> = {
    'source': { x: 100, y: 150 },
    'node1': { x: 250, y: 75 },
    'node2': { x: 250, y: 150 },
    'node3': { x: 250, y: 225 },
    'node4': { x: 400, y: 50 },
    'node5': { x: 400, y: 100 },
    'node6': { x: 400, y: 225 },
  };

  return (
    <div className="bg-white dark:bg-card rounded-xl shadow-lg p-4 overflow-hidden relative">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 h-[400px] overflow-auto">
          <svg ref={svgRef} width="500" height="300" className="w-full h-full">
            {/* Draw edges */}
            {visibleEdges.map((edge) => {
              const source = nodePositions[edge.from];
              const target = nodePositions[edge.to];
              
              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <defs>
                    <marker
                      id={`arrowhead-${edge.from}-${edge.to}`}
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" className="fill-current text-muted-foreground" />
                    </marker>
                  </defs>
                  <line
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeOpacity="0.5"
                    className="edge-enter"
                    markerEnd={`url(#arrowhead-${edge.from}-${edge.to})`}
                  />
                  <text
                    x={(source.x + target.x) / 2}
                    y={(source.y + target.y) / 2 - 5}
                    textAnchor="middle"
                    fontSize="12"
                    fill="currentColor"
                    className="font-medium"
                  >
                    ₹{edge.amount.toLocaleString()}
                  </text>
                </g>
              );
            })}
            
            {/* Draw nodes */}
            {sampleData.nodes.filter(node => visibleNodes.includes(node.id)).map((node) => {
              const pos = nodePositions[node.id];
              const nodeData = sampleData.nodes.find(n => n.id === node.id);
              
              return (
                <g 
                  key={node.id}
                  transform={`translate(${pos.x}, ${pos.y})`} 
                  onClick={() => handleNodeClick(node)}
                  className="cursor-pointer node-enter"
                >
                  <circle
                    r={node.id === 'source' ? 25 : 20}
                    className={`${getRiskColor(node.risk)} stroke-2 stroke-white dark:stroke-gray-800 shadow-lg transition-all`}
                  />
                  <text
                    textAnchor="middle"
                    y="0"
                    fontSize="10"
                    fill="white"
                    fontWeight="bold"
                  >
                    {node.id === 'source' ? 'SRC' : node.id.replace('node', '')}
                  </text>
                  <text
                    textAnchor="middle"
                    y="10"
                    fontSize="8"
                    fill="white"
                  >
                    {nodeData?.bank?.split(' ')[0] || ''}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        
        <div className="w-full md:w-1/4 p-4 border-t md:border-t-0 md:border-l border-border">
          <div className="mb-4">
            <h3 className="text-lg font-display font-semibold">Node Details</h3>
            {selectedNode ? (
              <div className="mt-3 space-y-2">
                <p className="font-medium">{selectedNode.label}</p>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Bank:</span>
                  <span className="text-sm font-medium">{selectedNode.bank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Amount:</span>
                  <span className="text-sm font-medium">₹{selectedNode.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Account Type:</span>
                  <span className="text-sm font-medium">{selectedNode.accountType}</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm mr-2">Risk:</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    selectedNode.risk === 'critical' 
                      ? 'bg-red-700/20 text-red-700 dark:bg-red-700/30 dark:text-red-400'
                      : selectedNode.risk === 'high' 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      : selectedNode.risk === 'medium'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  }`}>
                    {selectedNode.risk.charAt(0).toUpperCase() + selectedNode.risk.slice(1)}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-foreground/70 mt-2">
                Click on a node to see details.
              </p>
            )}
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-display font-semibold">Legend</h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Low Risk</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                <span className="text-sm">Medium Risk</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm">High Risk</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-700 mr-2"></div>
                <span className="text-sm">Critical Risk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
