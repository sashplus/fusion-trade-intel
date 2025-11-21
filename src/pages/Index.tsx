import { TradingHero } from "@/components/TradingHero";
import { NewsFeed } from "@/components/NewsFeed";
import { TradingSignals } from "@/components/TradingSignals";
import { MarketOverview } from "@/components/MarketOverview";
import { AnalysisEngine } from "@/components/AnalysisEngine";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <TradingHero />
      
      {/* Dashboard Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <TradingSignals />
              <AnalysisEngine />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <MarketOverview />
              <NewsFeed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
