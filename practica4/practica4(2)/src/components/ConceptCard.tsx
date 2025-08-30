import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ConceptCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
}

const ConceptCard = ({ icon: Icon, title, description, details, level }: ConceptCardProps) => {
  const levelColors = {
    beginner: 'from-crypto-green to-emerald-400',
    intermediate: 'from-crypto-blue to-blue-400', 
    advanced: 'from-crypto-orange to-orange-400'
  };

  const levelLabels = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced'
  };

  return (
    <Card className="h-full transition-all duration-500 hover:shadow-glow hover:-translate-y-2 border border-glass-border bg-card/80 backdrop-blur-sm group animate-fade-in">
      <CardContent className="p-8">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className={`w-16 h-16 bg-gradient-to-br ${levelColors[level]} rounded-xl flex items-center justify-center shadow-lg group-hover:animate-glow`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
              <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${levelColors[level]} text-white`}>
                {levelLabels[level]}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground/80">Key details:</h4>
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <div className={`w-2 h-2 bg-gradient-to-r ${levelColors[level]} rounded-full mr-3 mt-1.5 flex-shrink-0`}></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConceptCard;