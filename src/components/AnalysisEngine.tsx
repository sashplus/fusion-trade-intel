import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, TrendingUp, BarChart3, Zap, Clock, CheckCircle } from "lucide-react";

interface AnalysisStep {
  id: string;
  name: string;
  status: 'completed' | 'running' | 'pending';
  progress: number;
  duration: string;
  result?: number;
}

const analysisSteps: AnalysisStep[] = [
  {
    id: "news",
    name: "News Aggregation",
    status: "completed",
    progress: 100,
    duration: "0.8s",
    result: 156
  },
  {
    id: "fundamental",
    name: "Fundamental Analysis",
    status: "completed", 
    progress: 100,
    duration: "1.2s",
    result: 87
  },
  {
    id: "technical",
    name: "Technical Analysis",
    status: "running",
    progress: 75,
    duration: "2.1s"
  },
  {
    id: "ai",
    name: "AI Signal Generation",
    status: "pending",
    progress: 0,
    duration: "-"
  }
];

const metrics = [
  {
    label: "Processing Speed",
    value: "1.2s",
    subtitle: "Avg analysis time",
    icon: Zap,
    color: "text-primary"
  },
  {
    label: "Accuracy Rate",
    value: "94.7%",
    subtitle: "Signal precision",
    icon: TrendingUp,
    color: "text-profit"
  },
  {
    label: "Data Sources",
    value: "23",
    subtitle: "Active feeds",
    icon: BarChart3,
    color: "text-accent"
  },
  {
    label: "AI Confidence",
    value: "87%",
    subtitle: "Current model",
    icon: Brain,
    color: "text-primary"
  }
];

export const AnalysisEngine = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Analysis Engine</h2>
        <Badge className="bg-profit text-profit-foreground animate-pulse-profit">
          <Brain className="w-3 h-3 mr-1" />
          Processing
        </Badge>
      </div>

      {/* Real-time Processing */}
      <Card className="p-6 gradient-card border-border shadow-trading">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Real-time Analysis Pipeline</h3>
            <Badge variant="outline" className="text-xs">
              <Clock className="w-3 h-3 mr-1" />
              Last update: 2s ago
            </Badge>
          </div>

          <div className="space-y-4">
            {analysisSteps.map((step) => (
              <div key={step.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-profit" />
                    ) : step.status === 'running' ? (
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-muted-foreground/30" />
                    )}
                    
                    <span className="font-medium">{step.name}</span>
                    
                    {step.result && (
                      <Badge variant="secondary" className="text-xs font-trading">
                        {step.result}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{step.duration}</span>
                  </div>
                </div>
                
                <Progress 
                  value={step.progress} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-4 gradient-card border-border hover:shadow-glow transition-trading">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold font-trading">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
              </div>
              <metric.icon className={`w-8 h-8 ${metric.color}`} />
            </div>
          </Card>
        ))}
      </div>

      {/* AI Model Status */}
      <Card className="p-6 gradient-card border-border shadow-trading">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">AI Model Performance</h3>
            <Badge className="bg-primary text-primary-foreground">
              GPT-4 Turbo
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Technical Analysis</span>
                <span className="font-semibold">92%</span>
              </div>
              <Progress value={92} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Sentiment Analysis</span>
                <span className="font-semibold">88%</span>
              </div>
              <Progress value={88} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Pattern Recognition</span>
                <span className="font-semibold">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-secondary/30 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Signals Today</div>
                <div className="text-2xl font-bold text-primary">247</div>
              </div>
              
              <div className="p-3 bg-profit/10 rounded-lg border border-profit/20">
                <div className="text-sm text-muted-foreground mb-1">Success Rate</div>
                <div className="text-2xl font-bold text-profit">94.7%</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};