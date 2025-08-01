import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, DollarSign } from "lucide-react";

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  changePercent: number;
  volume24h: number;
  marketCap: number;
  signal?: 'BUY' | 'SELL' | 'HOLD';
}

const mockMarketData: MarketData[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 67240,
    change24h: 1840,
    changePercent: 2.81,
    volume24h: 28500000000,
    marketCap: 1320000000000,
    signal: "BUY"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 3420,
    change24h: 125,
    changePercent: 3.79,
    volume24h: 15200000000,
    marketCap: 410000000000,
    signal: "BUY"
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 198.50,
    change24h: -8.30,
    changePercent: -4.01,
    volume24h: 2100000000,
    marketCap: 92000000000,
    signal: "SELL"
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: 0.52,
    change24h: 0.012,
    changePercent: 2.36,
    volume24h: 850000000,
    marketCap: 18200000000,
    signal: "HOLD"
  }
];

export const MarketOverview = () => {
  const formatPrice = (price: number) => {
    if (price < 1) {
      return `$${price.toFixed(4)}`;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1e9) {
      return `$${(volume / 1e9).toFixed(1)}B`;
    }
    if (volume >= 1e6) {
      return `$${(volume / 1e6).toFixed(1)}M`;
    }
    return `$${(volume / 1e3).toFixed(1)}K`;
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`;
    }
    if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(1)}B`;
    }
    return `$${(marketCap / 1e6).toFixed(1)}M`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Market Overview</h2>
        <Badge variant="outline" className="animate-pulse">
          <Activity className="w-3 h-3 mr-1" />
          Live Data
        </Badge>
      </div>
      
      <div className="grid gap-4">
        {mockMarketData.map((asset) => (
          <Card key={asset.symbol} className="p-4 gradient-card border-border hover:shadow-glow transition-trading">
            <div className="flex items-center justify-between">
              {/* Asset Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary font-trading">
                    {asset.symbol}
                  </span>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">{asset.name}</h3>
                  <p className="text-sm text-muted-foreground font-trading">{asset.symbol}/USDT</p>
                </div>
              </div>

              {/* Price and Change */}
              <div className="text-right">
                <div className="font-trading text-xl font-bold">
                  {formatPrice(asset.price)}
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  asset.changePercent >= 0 ? 'text-profit' : 'text-loss'
                }`}>
                  {asset.changePercent >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>
                    {asset.changePercent >= 0 ? '+' : ''}{asset.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* Signal */}
              <div className="flex flex-col items-end gap-2">
                {asset.signal && (
                  <Badge 
                    className={
                      asset.signal === 'BUY' 
                        ? "bg-profit text-profit-foreground" 
                        : asset.signal === 'SELL' 
                        ? "bg-loss text-loss-foreground"
                        : "bg-warning text-warning-foreground"
                    }
                  >
                    {asset.signal}
                  </Badge>
                )}
                
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    <span>{formatVolume(asset.volume24h)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">24h Change</span>
                  <div className={`font-trading font-semibold ${
                    asset.change24h >= 0 ? 'text-profit' : 'text-loss'
                  }`}>
                    {asset.change24h >= 0 ? '+' : ''}{formatPrice(Math.abs(asset.change24h))}
                  </div>
                </div>
                
                <div>
                  <span className="text-muted-foreground">24h Volume</span>
                  <div className="font-trading font-semibold">
                    {formatVolume(asset.volume24h)}
                  </div>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Market Cap</span>
                  <div className="font-trading font-semibold">
                    {formatMarketCap(asset.marketCap)}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};