import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

interface PlatformCardProps {
  name: string;
  description: string;
  features: string[];
  type: string;
  pros: string[];
  cons: string[];
  rating: number;
  pricing: string;
}

const PlatformCard = ({ name, description, features, type, pros, cons, rating, pricing }: PlatformCardProps) => {
  return (
    <Card className="h-full transition-all duration-500 hover:shadow-glow hover:-translate-y-2 border border-glass-border bg-card/80 backdrop-blur-sm group animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            {name}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-crypto-blue/20 text-crypto-blue border-crypto-blue/30">
              {type}
            </Badge>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < rating ? 'text-crypto-orange fill-crypto-orange' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {/* Pricing */}
        <div className="flex items-center justify-between p-4 bg-section-bg rounded-lg border border-glass-border">
          <span className="text-sm font-medium text-foreground">Price:</span>
          <span className="text-crypto-orange font-bold">{pricing}</span>
        </div>
        
        {/* Features */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Key Features:</h4>
          <div className="grid grid-cols-1 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
        
        {/* Pros and Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-crypto-green">Pros:</h5>
            <ul className="space-y-1">
              {pros.map((pro, index) => (
                <li key={index} className="text-xs text-muted-foreground flex items-start">
                  <div className="w-1.5 h-1.5 bg-crypto-green rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-crypto-orange">Cons:</h5>
            <ul className="space-y-1">
              {cons.map((con, index) => (
                <li key={index} className="text-xs text-muted-foreground flex items-start">
                  <div className="w-1.5 h-1.5 bg-crypto-orange rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white transition-all duration-300 group-hover:animate-glow"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Explore {name}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlatformCard;