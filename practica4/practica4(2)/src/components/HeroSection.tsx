import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-dark.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-crypto-orange/10"></div>
      
      {/* Hero image with dark overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-crypto-orange rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-crypto-blue rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading with gradient */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-crypto-orange bg-clip-text text-transparent">
                Memecoins
              </span>
              <br />
              <span className="text-foreground text-4xl md:text-6xl font-medium">
                Professional Guide
              </span>
            </h1>
          </div>
          
          {/* Subtitle with glassmorphism */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="backdrop-blur-sm bg-glass-bg border border-glass-border rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                Master the world of meme cryptocurrencies with our comprehensive guide. 
                Learn advanced concepts, trading strategies, and the best market tools.
              </p>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-6 justify-center mb-16" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white text-lg px-10 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 animate-glow"
              onClick={() => scrollToSection('what-are-memecoins')}
            >
              Start Learning
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-crypto-orange text-crypto-orange hover:bg-crypto-orange hover:text-black text-lg px-10 py-6 rounded-xl transition-all duration-300 backdrop-blur-sm"
              onClick={() => scrollToSection('advanced-concepts')}
            >
              Advanced Concepts
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              className="w-8 h-8 text-primary cursor-pointer mx-auto opacity-70 hover:opacity-100 transition-opacity"
              onClick={() => scrollToSection('what-are-memecoins')}
            />
          </div>
        </div>
      </div>
      
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-crypto-orange rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-crypto-blue rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;