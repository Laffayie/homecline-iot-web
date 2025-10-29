import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import teamImage from "@/assets/team-about.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Naša misia",
      description: "Sprístupniť pokročilé IoT technológie každému domovu a firme, aby sme uľahčili každodenný život a zvýšili efektivitu."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Náš tím",
      description: "Skupina odborníkov s vášňou pre technológie, ktorí neustále hľadajú nové spôsoby, ako zlepšiť životy našich zákazníkov."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kvalita",
      description: "Poskytujeme len tie najkvalitnejšie produkty a služby s dôrazom na bezpečnosť a spoľahlivosť."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Inovácia",
      description: "Neustále sa vzdelávame a implementujeme najnovšie technológie, aby sme zostali na čele odvetvia."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              O HomeCline
            </h1>
            <p className="text-xl text-muted-foreground">
              Sme lídri v oblasti inteligentných domácich riešení a IoT technológií na Slovensku
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Náš príbeh</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  HomeCline bola založená s víziou priniesť inteligenciu do každého domova. 
                  Od našich začiatkov sme sa venovali vývoju a implementácii IoT riešení, 
                  ktoré menia spôsob, akým ľudia interagujú so svojím prostredím.
                </p>
                <p>
                  Naša spoločnosť sa špecializuje na integráciu smart technológií, 
                  automatizáciu domácností a vývoj vlastných IoT zariadení. Spolupracujeme 
                  s popredými výrobcami a dodávateľmi, aby sme našim zákazníkom ponúkli 
                  tie najlepšie riešenia na trhu.
                </p>
                <p>
                  Veríme, že technológia by mala byť prístupná, bezpečná a užitočná. 
                  Preto kladieme dôraz na jednoduché ovládanie, maximálnu bezpečnosť 
                  a individuálny prístup k potrebám každého klienta.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={teamImage} 
                  alt="HomeCline tím" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Naše hodnoty</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Princípy, ktorými sa riadime pri každom projekte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 text-primary-foreground">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-lg">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-xl text-muted-foreground">Spokojných zákazníkov</p>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <p className="text-xl text-muted-foreground">Inštalovaných zariadení</p>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                5+
              </div>
              <p className="text-xl text-muted-foreground">Rokov skúseností</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pridajte sa k našej komunite
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Staňte sa súčasťou revolúcie inteligentných domov
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
          </div>
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

export default About;
