import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, Target, Shield, Clock } from "lucide-react";

interface TradingSignal {
  id: string;
  asset: string;
  action: 'BUY' | 'SELL' | 'HOLD';
  entry: number;
  target: number;
  stopLoss: number;
  confidence: number;
  fundamentalScore: number;
  technicalScore: number;
  totalScore: number;
  timeframe: string;
  timestamp: string;
}

const mockSignals: TradingSignal[] = [
  {
    id: "1",
    asset: "BTC/USDT",
    action: "BUY",
    entry: 67240,
    target: 69500,
    stopLoss: 65800,
    confidence: 94,
    fundamentalScore: 87,
    technicalScore: 82,
    totalScore: 85,
    timeframe: "4h",
    timestamp: "2 min ago"
  },
  {
    id: "2",
    asset: "ETH/USDT",
    action: "BUY",
    entry: 3420,
    target: 3580,
    stopLoss: 3280,
    confidence: 89,
    fundamentalScore: 78,
    technicalScore: 85,
    totalScore: 81,
    timeframe: "1h",
    timestamp: "8 min ago"
  },
  {
    id: "3",
    asset: "SOL/USDT",
    action: "SELL",
    entry: 198.50,
    target: 185.20,
    stopLoss: 205.30,
    confidence: 76,
    fundamentalScore: 45,
    technicalScore: 72,
    totalScore: 58,
    timeframe: "2h",
    timestamp: "15 min ago"
  }
];

export const TradingSignals = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const getRiskReward = (signal: TradingSignal) => {
    if (signal.action === 'BUY') {
      const reward = signal.target - signal.entry;
      const risk = signal.entry - signal.stopLoss;
      return (reward / risk).toFixed(2);
    } else {
      const reward = signal.entry - signal.target;
      const risk = signal.stopLoss - signal.entry;
      return (reward / risk).toFixed(2);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Trading Signals</h2>
        <Badge className="bg-primary text-primary-foreground animate-pulse">
          Active
        </Badge>
      </div>
      
      <div className="space-y-4">
        {mockSignals.map((signal) => (
          <Card key={signal.id} className="p-6 gradient-card border-border hover:shadow-glow transition-trading">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold font-trading">{signal.asset}</h3>
                  <Badge 
                    className={
                      signal.action === 'BUY' 
                        ? "bg-profit text-profit-foreground" 
                        : signal.action === 'SELL' 
                        ? "bg-loss text-loss-foreground"
                        : "bg-warning text-warning-foreground"
                    }
                  >
                    {signal.action === 'BUY' ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                    {signal.action}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {signal.timeframe}
                  </Badge>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Confidence</div>
                  <div className="text-lg font-bold text-profit">{signal.confidence}%</div>
                </div>
              </div>

              {/* Price Levels */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg bg-secondary/50">
                  <div className="text-sm text-muted-foreground mb-1">Entry</div>
                  <div className="font-trading font-bold text-primary">
                    {formatPrice(signal.entry)}
                  </div>
                </div>
                
                <div className="text-center p-3 rounded-lg bg-profit/10 border border-profit/20">
                  <div className="text-sm text-muted-foreground mb-1">Target</div>
                  <div className="font-trading font-bold text-profit flex items-center justify-center gap-1">
                    <Target className="w-4 h-4" />
                    {formatPrice(signal.target)}
                  </div>
                </div>
                
                <div className="text-center p-3 rounded-lg bg-loss/10 border border-loss/20">
                  <div className="text-sm text-muted-foreground mb-1">Stop Loss</div>
                  <div className="font-trading font-bold text-loss flex items-center justify-center gap-1">
                    <Shield className="w-4 h-4" />
                    {formatPrice(signal.stopLoss)}
                  </div>
                </div>
              </div>

              {/* Analysis Scores */}
              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Analysis Breakdown</div>
                  <div className="flex gap-4 text-sm">
                    <span>Fundamental: <span className="font-semibold">{signal.fundamentalScore}</span></span>
                    <span>Technical: <span className="font-semibold">{signal.technicalScore}</span></span>
                    <span>Total: <span className="font-bold text-primary">{signal.totalScore}</span></span>
                  </div>
                </div>
                
                <div className="text-right space-y-1">
                  <div className="text-xs text-muted-foreground">Risk:Reward</div>
                  <div className="font-bold text-accent">1:{getRiskReward(signal)}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{signal.timestamp}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Chart
                  </Button>
                  <Button 
                    size="sm" 
                    className={
                      signal.action === 'BUY' 
                        ? "bg-profit hover:bg-profit/90" 
                        : "bg-loss hover:bg-loss/90"
                    }
                  >
                    Execute Trade
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};