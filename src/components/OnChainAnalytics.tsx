import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, Activity, Wallet, TrendingUp, Users, Lock } from "lucide-react";

export const OnChainAnalytics = () => {
  const metrics = [
    {
      icon: Wallet,
      label: "Wallet Tracking",
      value: "10K+",
      subtitle: "Active wallets monitored",
      color: "text-primary"
    },
    {
      icon: Activity,
      label: "Transaction Volume",
      value: "$2.4B",
      subtitle: "24h on-chain volume",
      color: "text-accent"
    },
    {
      icon: Users,
      label: "Smart Money",
      value: "487",
      subtitle: "Whale alerts today",
      color: "text-warning"
    },
    {
      icon: Lock,
      label: "Token Locks",
      value: "1,234",
      subtitle: "Contracts verified",
      color: "text-profit"
    }
  ];

  const features = [
    {
      title: "Real-Time Blockchain Monitoring",
      description: "Track wallet movements, large transactions, and smart money flows across multiple chains.",
      icon: Link2
    },
    {
      title: "Whale Alert System",
      description: "Get instant notifications when significant on-chain movements occur that could impact market sentiment.",
      icon: TrendingUp
    },
    {
      title: "Token Analytics",
      description: "Deep dive into token metrics including holder distribution, liquidity pools, and lock-up schedules.",
      icon: Activity
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium border border-primary/20">
            <Link2 className="w-4 h-4 mr-2" />
            On-Chain Intelligence
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            <span className="text-foreground">On-Chain </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage blockchain data to gain an edge. Monitor wallet activities, track smart money, 
            and analyze on-chain metrics in real-time for informed trading decisions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="p-6 gradient-card border-border shadow-trading hover:shadow-glow transition-trading">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-secondary/50 ${metric.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold font-trading">{metric.value}</p>
                  <p className="text-sm font-medium text-foreground">{metric.label}</p>
                  <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 border-border bg-card hover:shadow-glow transition-trading">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
