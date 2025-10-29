import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wifi, Shield, Zap, Home as HomeIcon, Smartphone, Cloud } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Pripojené zariadenia",
      description: "Prepojte všetky vaše zariadenia do jedného inteligentného ekosystému"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bezpečnosť",
      description: "Pokročilé šifrovanie a ochrana vašich údajov na prvom mieste"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatizácia",
      description: "Automatizujte rutinné úlohy a ušetrite čas aj energiu"
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Smart Home",
      description: "Ovládajte svoje bývanie odkiaľkoľvek pomocou aplikácie"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobilná aplikácia",
      description: "Prístup k vašim zariadeniam kedykoľvek a kdekoľvek"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud riešenia",
      description: "Vaše dáta bezpečne uložené v cloude s možnosťou zálohovania"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Budúcnosť inteligentného bývania
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              HomeCline prináša inovatívne IoT riešenia pre váš domov. Pripojte, ovládajte a automatizujte všetky vaše zariadenia na jednom mieste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button 
                size="lg" 
                className="text-lg shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link to="/registracia">
                  Začať teraz
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg"
                asChild
              >
                <Link to="/o-nas">
                  Zistiť viac
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Naše služby</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Komplexné IoT riešenia pre moderné domácnosti a firmy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 bg-card"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 text-primary-foreground">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pripravení na inteligentnú budúcnosť?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zaregistrujte sa ešte dnes a získajte prístup k našim pokročilým IoT riešeniam
            </p>
            <Button 
              size="lg" 
              className="text-lg shadow-lg hover:shadow-xl"
              asChild
            >
              <Link to="/registracia">
                Registrovať sa
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 HomeCline. Všetky práva vyhradené.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
