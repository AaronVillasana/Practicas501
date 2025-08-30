import HeroSection from "@/components/HeroSection";
import ConceptCard from "@/components/ConceptCard";
import PlatformCard from "@/components/PlatformCard";
import { 
  Coins, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Zap, 
  Shield,
  AlertTriangle,
  Info,
  Brain,
  Target,
  BarChart3,
  Lock,
  Bot,
  Smartphone
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const concepts = [
    {
      icon: DollarSign,
      title: "Market Cap",
      description: "Market capitalization represents the total value of all coins in circulation, a crucial indicator for evaluating a project's size and importance.",
      details: [
        "Calculated by multiplying current price by circulating supply",
        "Allows comparison between projects of different sizes",
        "Categories: Micro-cap (<$10M), Small-cap ($10M-$100M), Mid-cap ($100M-$1B)",
        "Doesn't include locked tokens or team reserves"
      ],
      level: 'beginner' as const
    },
    {
      icon: TrendingUp,
      title: "Liquidity",
      description: "The ability to buy or sell an asset quickly without significantly affecting its price. Essential for efficient trading.",
      details: [
        "Higher liquidity = lower slippage on large trades",
        "Measured in terms of daily trading volume",
        "DEX liquidity pools vs CEX order books",
        "Directly affects price stability"
      ],
      level: 'intermediate' as const
    },
    {
      icon: Coins,
      title: "Supply & Tokenomics",
      description: "The total supply and economic structure of the token, including distribution, inflation, deflation, and burn mechanisms.",
      details: [
        "Circulating Supply: tokens available in the market",
        "Total Supply: all tokens created so far",
        "Max Supply: maximum limit of tokens that will exist",
        "Burn mechanisms can reduce supply over time"
      ],
      level: 'intermediate' as const
    },
    {
      icon: Zap,
      title: "Slippage",
      description: "The difference between expected and actual execution price in a transaction, especially relevant for large orders.",
      details: [
        "Low slippage (<1%): good liquidity",
        "High slippage (>5%): limited liquidity or very large order",
        "Configurable on most DEX platforms",
        "Can protect against MEV (Maximal Extractable Value)"
      ],
      level: 'advanced' as const
    },
    {
      icon: Users,
      title: "FDV (Fully Diluted Valuation)",
      description: "The theoretical value of the project if all possible tokens were in circulation, providing a long-term perspective.",
      details: [
        "FDV = Current Price × Max Supply",
        "Important for evaluating growth potential",
        "FDV/Market Cap ratio indicates future dilution pressure",
        "Considers team tokens, investor tokens, and future rewards"
      ],
      level: 'advanced' as const
    },
    {
      icon: Brain,
      title: "On-Chain Analysis",
      description: "Study of data directly from the blockchain to understand holder patterns, distribution, and token activity.",
      details: [
        "Holder concentration: risk of 'whale dumps'",
        "Wallet activity: active users vs. speculators",
        "Exchange flows: buying/selling pressure",
        "Network metrics: transactions, fees, congestion"
      ],
      level: 'advanced' as const
    }
  ];

  const platforms = [
    {
      name: "Axiom Trade",
      type: "Professional DEX Terminal",
      description: "A Solana-based non-custodial trading platform that combines spot swaps, perpetuals, and passive yield into a single interface. Built for speed and simplicity.",
      features: [
        "Lightning-fast execution on Solana",
        "Advanced charting with TradingView integration",
        "Multi-chain support (Solana, Ethereum, Base)",
        "Portfolio tracking and PnL analytics",
        "MEV protection and smart routing",
        "Social sentiment analysis",
        "Copy trading features",
        "Automated trading strategies"
      ],
      pros: [
        "Completely free to use",
        "Professional-grade interface",
        "Fastest execution speeds",
        "Advanced analytics built-in",
        "Active community of traders"
      ],
      cons: [
        "Learning curve for beginners",
        "Primarily focused on Solana",
        "Beta features may have bugs"
      ],
      rating: 5,
      pricing: "Free"
    },
    {
      name: "BullX",
      type: "Telegram Trading Bot",
      description: "Multi-chain trading bot accessible through Telegram and web interface. Supports Solana, Ethereum, Base, BSC, Blast, and Arbitrum networks.",
      features: [
        "Telegram bot integration",
        "Multi-chain trading (6+ networks)",
        "Copy trading functionality",
        "Trending token discovery",
        "Real-time price alerts",
        "Portfolio management",
        "Social trading features",
        "Advanced order types"
      ],
      pros: [
        "Completely free to use",
        "Convenient Telegram interface",
        "Multi-chain support",
        "No technical knowledge required",
        "Large user community"
      ],
      cons: [
        "Limited advanced charting",
        "Dependent on Telegram",
        "Less customization options"
      ],
      rating: 4,
      pricing: "Free"
    },
    {
      name: "Photon SOL",
      type: "Solana DEX Interface",
      description: "A high-speed DEX interface built specifically for Solana memecoin trading and sniping. Optimized for lightning-fast transactions.",
      features: [
        "Ultra-fast Solana trading",
        "Token sniping capabilities",
        "Auto-buy/auto-sell features",
        "Advanced token discovery",
        "MEV protection",
        "Portfolio tracking",
        "Price alerts and notifications",
        "One-click trading"
      ],
      pros: [
        "Completely free to use",
        "Fastest sniping on Solana",
        "User-friendly interface",
        "Excellent for new launches",
        "Built-in token analytics"
      ],
      cons: [
        "Solana network only",
        "Limited to basic features",
        "High gas fees during congestion"
      ],
      rating: 4,
      pricing: "Free + Network fees"
    },
    {
      name: "Padre",
      type: "Multi-Chain Trading Terminal",
      description: "A unified trading terminal supporting multiple blockchains with focus on memecoin trading. Combines simplicity with powerful features.",
      features: [
        "Multi-chain trading interface",
        "Advanced portfolio analytics",
        "Social trading integration",
        "Token research tools",
        "Risk management features",
        "Real-time market data",
        "Trading automation",
        "Community insights"
      ],
      pros: [
        "Completely free to use",
        "Clean, intuitive UI/UX",
        "Strong community features",
        "Multi-chain convenience",
        "Regular feature updates"
      ],
      cons: [
        "Newer platform with less volume",
        "Limited advanced trading tools",
        "Still building liquidity sources"
      ],
      rating: 4,
      pricing: "Free"
    }
  ];

  const advancedStrategies = [
    {
      title: "Dollar Cost Averaging (DCA)",
      description: "Gradual investment strategy to reduce volatility impact through regular purchases",
      risk: "Low"
    },
    {
      title: "Momentum Trading",
      description: "Capitalizing on strong trends and market momentum for quick profits",
      risk: "High"
    },
    {
      title: "Contrarian Investing",
      description: "Buying during fear and selling during euphoria - against the crowd",
      risk: "Medium"
    },
    {
      title: "Sniper Trading",
      description: "Using bots to buy tokens immediately upon launch for maximum gains",
      risk: "Very High"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* What are Memecoins Section */}
      <section id="what-are-memecoins" className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              What are Memecoins?
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-purple-400 to-crypto-orange mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border border-glass-border">
                <CardContent className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Definition and Origin</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Memecoins are cryptocurrencies born from internet memes, cultural trends, or 
                    community experiments. Unlike Bitcoin or Ethereum, which solve specific technical 
                    problems, memecoins capitalize on the viral power of social media and cultural moments.
                  </p>
                  
                  <div className="bg-section-bg p-6 rounded-xl border border-glass-border">
                    <h4 className="font-semibold text-foreground mb-3">Historical Examples:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-crypto-orange rounded-full mr-3"></div>
                        <strong>Dogecoin (2013):</strong> The first successful memecoin, based on the "Doge" meme
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <strong>Shiba Inu (2020):</strong> "Dogecoin killer" that reached a $40B market cap
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-crypto-blue rounded-full mr-3"></div>
                        <strong>Pepe (2023):</strong> Resurgence of memecoin trading on Ethereum
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Card className="p-8 bg-card/80 backdrop-blur-sm border border-glass-border">
                <CardContent className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Unique Characteristics</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Community Driven</h4>
                        <p className="text-sm text-muted-foreground">Value depends more on social engagement than technical utility</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-crypto-orange to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Extreme Volatility</h4>
                        <p className="text-sm text-muted-foreground">Can experience +/- 1000% price movements in days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-crypto-blue to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Fast Cycles</h4>
                        <p className="text-sm text-muted-foreground">Trends lasting from hours to months</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section id="key-concepts" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Fundamental Concepts
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-purple-400 to-crypto-orange mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master these essential concepts to navigate the memecoin world with confidence and professional knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concepts.map((concept, index) => (
              <div key={index} style={{animationDelay: `${index * 0.1}s`}}>
                <ConceptCard
                  icon={concept.icon}
                  title={concept.title}
                  description={concept.description}
                  details={concept.details}
                  level={concept.level}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Strategies Section */}
      <section id="advanced-concepts" className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-crypto-orange to-yellow-400 bg-clip-text text-transparent">
              Advanced Strategies
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-crypto-orange to-yellow-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advancedStrategies.map((strategy, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border border-glass-border transition-all duration-300 hover:shadow-glow hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{strategy.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Risk:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      strategy.risk === 'Low' ? 'bg-crypto-green/20 text-crypto-green' :
                      strategy.risk === 'Medium' ? 'bg-crypto-blue/20 text-crypto-blue' :
                      strategy.risk === 'High' ? 'bg-crypto-orange/20 text-crypto-orange' :
                      'bg-destructive/20 text-destructive'
                    }`}>
                      {strategy.risk}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
              Trading Platforms & Tools
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-crypto-blue to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The best professional tools for research, analysis, and trading memecoins. All platforms are completely free to use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {platforms.map((platform, index) => (
              <div key={index} style={{animationDelay: `${index * 0.2}s`}}>
                <PlatformCard
                  name={platform.name}
                  type={platform.type}
                  description={platform.description}
                  features={platform.features}
                  pros={platform.pros}
                  cons={platform.cons}
                  rating={platform.rating}
                  pricing={platform.pricing}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks & Disclaimers Section */}
      <section id="risks" className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-destructive to-red-400 bg-clip-text text-transparent">
              Risks & Important Notes
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-destructive to-red-400 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <Alert className="border-crypto-orange/30 bg-crypto-orange/10 backdrop-blur-sm animate-fade-in">
              <AlertTriangle className="h-6 w-6 text-crypto-orange" />
              <AlertDescription className="text-base leading-relaxed">
                <strong className="text-lg">Extreme Volatility:</strong> Memecoins can lose or gain more than 90% of their value in 24 hours. 
                This volatility can generate extraordinary gains but also total losses. Never invest more than you can afford to lose completely.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-destructive/30 bg-destructive/10 backdrop-blur-sm animate-fade-in" style={{animationDelay: '0.1s'}}>
              <Shield className="h-6 w-6 text-destructive" />
              <AlertDescription className="text-base leading-relaxed">
                <strong className="text-lg">Rug Pulls & Scams:</strong> Many projects are created with the intention of stealing funds. 
                Warning signs include: liquidity locked for short periods, anonymous teams, guaranteed profit promises, 
                and high token concentration in few wallets.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-crypto-blue/30 bg-crypto-blue/10 backdrop-blur-sm animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Info className="h-6 w-6 text-crypto-blue" />
              <AlertDescription className="text-base leading-relaxed">
                <strong className="text-lg">Educational Content Only:</strong> This information is purely educational and does not constitute financial advice. 
                Always do your own research (DYOR), consult with financial professionals, and consider your personal situation before investing.
              </AlertDescription>
            </Alert>

            <Card className="bg-card/80 backdrop-blur-sm border border-glass-border animate-fade-in" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  Security Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Before Investing:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-crypto-green rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        Verify liquidity and lock duration
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-crypto-green rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        Check holder distribution
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-crypto-green rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        Research team history
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-crypto-green rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        Use on-chain analysis tools
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">During Trading:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        Set strict stop-losses
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        Diversify your portfolio
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        Take profits gradually
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        Keep records of all trades
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Memecoin Professional Guide
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              High-quality educational content to understand the meme cryptocurrency ecosystem. 
              Stay informed, trade responsibly.
            </p>
            <div className="flex justify-center space-x-8 text-white/50 text-sm">
              <span>© 2024 Memecoin Guide</span>
              <span>•</span>
              <span>Educational purposes only</span>
              <span>•</span>
              <span>Not financial advice</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;