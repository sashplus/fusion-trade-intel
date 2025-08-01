import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, BarChart3, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

export const TradingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Trading platform interface"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium border border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Real-time Analysis Platform
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Smart Trading
                </span>
                <br />
                <span className="text-foreground">Analytics</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Advanced fundamental and technical analysis powered by AI. 
                Get actionable trading signals with precise entry, exit, and stop-loss recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-profit transition-trading">
                Start Trading
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-border hover:bg-secondary">
                View Demo
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border">
                <TrendingUp className="w-4 h-4 text-profit" />
                <span className="text-sm font-medium">Real-time Signals</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">AI Analysis</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Risk Management</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <Card className="p-6 gradient-card border-border shadow-trading hover:shadow-glow transition-trading">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Platform Performance</h3>
                <Badge className="bg-profit text-profit-foreground">Live</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold text-profit">87.3%</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Avg ROI</p>
                  <p className="text-2xl font-bold text-profit">+24.7%</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Signals/Day</p>
                  <p className="text-2xl font-bold text-primary">156</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Assets Tracked</p>
                  <p className="text-2xl font-bold text-primary">2,847</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card border-border shadow-trading">
              <h3 className="text-lg font-semibold mb-4">Latest Signal</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-trading text-lg">BTC/USDT</span>
                  <Badge className="bg-profit text-profit-foreground">BUY</Badge>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Entry</p>
                    <p className="font-trading text-profit">$67,240</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Target</p>
                    <p className="font-trading text-profit">$69,500</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Stop</p>
                    <p className="font-trading text-loss">$65,800</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-sm text-muted-foreground">Confidence</span>
                  <span className="text-sm font-semibold text-profit">94%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};