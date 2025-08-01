import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, TrendingDown } from "lucide-react";

interface NewsItem {
  id: string;
  timestamp: string;
  source: string;
  headline: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  fundamentalScore: number;
  assets: string[];
}

const mockNews: NewsItem[] = [
  {
    id: "1",
    timestamp: "2 min ago",
    source: "Bloomberg",
    headline: "Bitcoin ETF sees $2.1B inflows as institutional adoption accelerates",
    sentiment: "positive",
    fundamentalScore: 87,
    assets: ["BTC", "ETH"]
  },
  {
    id: "2",
    timestamp: "5 min ago",
    source: "Reuters",
    headline: "Fed signals potential rate cuts, crypto markets rally on dovish stance",
    sentiment: "positive",
    fundamentalScore: 78,
    assets: ["BTC", "ETH", "SOL"]
  },
  {
    id: "3",
    timestamp: "12 min ago",
    source: "Coindesk",
    headline: "Major exchange faces regulatory scrutiny in European markets",
    sentiment: "negative",
    fundamentalScore: 34,
    assets: ["BTC", "ETH"]
  },
  {
    id: "4",
    timestamp: "18 min ago",
    source: "The Block",
    headline: "DeFi protocol launches innovative yield farming strategies",
    sentiment: "positive",
    fundamentalScore: 65,
    assets: ["ETH", "UNI"]
  }
];

export const NewsFeed = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Market News</h2>
        <Badge variant="outline" className="animate-pulse">
          Live Feed
        </Badge>
      </div>
      
      <div className="space-y-3">
        {mockNews.map((news) => (
          <Card key={news.id} className="p-4 gradient-card border-border hover:shadow-glow transition-trading cursor-pointer">
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{news.timestamp}</span>
                  <span>•</span>
                  <span className="font-medium">{news.source}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {news.sentiment === 'positive' ? (
                    <TrendingUp className="w-4 h-4 text-profit" />
                  ) : news.sentiment === 'negative' ? (
                    <TrendingDown className="w-4 h-4 text-loss" />
                  ) : null}
                  
                  <Badge 
                    variant={news.fundamentalScore >= 70 ? "default" : news.fundamentalScore >= 40 ? "secondary" : "destructive"}
                    className="font-trading text-xs"
                  >
                    {news.fundamentalScore}
                  </Badge>
                </div>
              </div>

              {/* Headline */}
              <h3 className="font-medium leading-relaxed hover:text-primary transition-colors">
                {news.headline}
              </h3>

              {/* Assets */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {news.assets.map((asset) => (
                    <Badge key={asset} variant="outline" className="text-xs px-2 py-1 font-trading">
                      {asset}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Impact Score: <span className="font-semibold">{news.fundamentalScore}/100</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};