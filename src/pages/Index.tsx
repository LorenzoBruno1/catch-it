import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Package, Mail, Phone, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import distributeur from "@/assets/distributeur.png";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-xl supports-[backdrop-filter]:bg-card/70 shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <img src={logo} alt="Catcht Logo" className="h-12 w-auto" />
          <nav className="flex gap-8">
            <button onClick={() => scrollToSection("machines")} className="text-sm font-semibold hover:text-primary transition-all duration-300 hover:scale-105">
              Nos Machines
            </button>
            <button onClick={() => scrollToSection("disponibilites")} className="text-sm font-semibold hover:text-primary transition-all duration-300 hover:scale-105">
              Disponibilités
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-semibold hover:text-primary transition-all duration-300 hover:scale-105">
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <Sparkles className="h-4 w-4" />
                Nouveau concept en France
              </div>
              <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Cartes Pokémon
                </span>
                <br />
                <span className="text-foreground">en distributeur</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Vivez une expérience unique avec nos distributeurs automatiques de cartes Pokémon. Des boosters surprise disponibles 24h/24 !
              </p>
              <div className="flex gap-4 pt-4">
                <Button onClick={() => scrollToSection("machines")} size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  Découvrir nos machines
                  <Package className="h-4 w-4" />
                </Button>
                <Button onClick={() => scrollToSection("disponibilites")} variant="outline" size="lg" className="gap-2">
                  Voir les boosters
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src={distributeur} 
                alt="Distributeur Pokémon Catcht" 
                className="relative rounded-2xl shadow-2xl animate-float w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Machines */}
      <section id="machines" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nos Machines
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des distributeurs nouvelle génération pour une expérience collector unique
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                Comment ça marche ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-lg shadow-lg">1</div>
                <div>
                  <p className="font-semibold mb-1">Choisissez votre série</p>
                  <p className="text-sm text-muted-foreground">Navigation intuitive sur écran tactile HD</p>
                </div>
              </div>
              <div className="flex gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 text-primary-foreground font-bold text-lg shadow-lg">2</div>
                <div>
                  <p className="font-semibold mb-1">Payez en toute sécurité</p>
                  <p className="text-sm text-muted-foreground">CB sans contact ou espèces acceptées</p>
                </div>
              </div>
              <div className="flex gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/70 text-accent-foreground font-bold text-lg shadow-lg">3</div>
                <div>
                  <p className="font-semibold mb-1">Récupérez votre booster</p>
                  <p className="text-sm text-muted-foreground">Découvrez vos cartes immédiatement !</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                Où nous trouver ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <h4 className="font-bold mb-2 text-lg flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Centre Commercial Les Arcades
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">123 Avenue du Commerce, 75001 Paris</p>
                  <p className="text-xs text-muted-foreground">Niveau 1, près de l'entrée principale</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <h4 className="font-bold mb-2 text-lg flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    Gare Centrale
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">Place de la Gare, 69000 Lyon</p>
                  <p className="text-xs text-muted-foreground">Hall principal, zone commerciale</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <h4 className="font-bold mb-2 text-lg flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    Galerie du Port
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">45 Quai du Vieux Port, 13001 Marseille</p>
                  <p className="text-xs text-muted-foreground">Rez-de-chaussée</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <CardHeader>
            <CardTitle className="text-3xl">Caractéristiques de nos machines</CardTitle>
            <CardDescription className="text-base">Technologie de pointe pour votre confort</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Paiement sécurisé</p>
                  <p className="text-sm text-muted-foreground">CB sans contact et espèces</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Interface tactile HD</p>
                  <p className="text-sm text-muted-foreground">Navigation intuitive et colorée</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Stock en temps réel</p>
                  <p className="text-sm text-muted-foreground">Disponibilité actualisée</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Service 24h/24</p>
                  <p className="text-sm text-muted-foreground">Accessible à toute heure</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Produits officiels</p>
                  <p className="text-sm text-muted-foreground">100% authentiques garantis</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Maintenance régulière</p>
                  <p className="text-sm text-muted-foreground">Contrôle qualité permanent</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Section Disponibilités */}
      <section id="disponibilites" className="bg-gradient-to-br from-muted/30 to-muted/60 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nos Disponibilités
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Toutes les séries Pokémon actuellement disponibles dans nos distributeurs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Écarlate et Violet
                </CardTitle>
                <CardDescription className="text-base">Série en cours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-muted-foreground">Disponible dans toutes nos machines</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">5,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Destinées à Paldea
                </CardTitle>
                <CardDescription className="text-base">Extension récente</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-muted-foreground">Disponible dans toutes nos machines</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-secondary">5,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Parade Paradoxe
                </CardTitle>
                <CardDescription className="text-base">Extension populaire</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-muted-foreground">Paris et Lyon uniquement</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-accent">5,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Épée et Bouclier</CardTitle>
                <CardDescription className="text-base">Collection classique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-muted-foreground">Quantités limitées</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">5,49€</span>
                  <span className="text-xs bg-orange-500/20 text-orange-600 font-semibold px-3 py-1.5 rounded-full border border-orange-500/30">
                    Stock limité
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Collection Premium</CardTitle>
                <CardDescription className="text-base">Éditions spéciales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-muted-foreground">Toutes nos machines</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-secondary">8,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Boosters Mystère</CardTitle>
                <CardDescription className="text-base">Surprise garantie</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-muted-foreground">Séries variées aléatoires</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-accent">4,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              * Les stocks sont mis à jour quotidiennement. Disponibilité sous réserve de stock dans chaque machine.
            </p>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un problème ? Notre équipe est là pour vous aider
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                Par Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Pour toute question, suggestion ou partenariat
              </p>
              <a 
                href="mailto:contact@pokedistrib.fr" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
              >
                contact@pokedistrib.fr
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                Par Téléphone
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Service client disponible du lundi au vendredi, 9h-18h
              </p>
              <a 
                href="tel:+33123456789" 
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold text-lg transition-colors"
              >
                01 23 45 67 89
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 max-w-5xl mx-auto border-2 bg-gradient-to-br from-accent/5 to-primary/5">
          <CardHeader>
            <CardTitle className="text-3xl">Un problème avec une machine ?</CardTitle>
            <CardDescription className="text-base">
              Signalez-nous tout dysfonctionnement pour une intervention rapide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                En cas de problème technique, merci de nous indiquer :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">1</div>
                  <span className="text-muted-foreground">Le lieu de la machine concernée</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">2</div>
                  <span className="text-muted-foreground">La nature du problème rencontré</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">3</div>
                  <span className="text-muted-foreground">La date et l'heure de l'incident</span>
                </li>
              </ul>
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                Signaler un problème
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-6">
            <img src={logo} alt="Catcht Logo" className="h-16 w-auto" />
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground font-medium">
                © 2024 Catcht. Tous droits réservés.
              </p>
              <p className="text-xs text-muted-foreground">
                Pokémon et les noms de personnages Pokémon sont des marques déposées de Nintendo.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
