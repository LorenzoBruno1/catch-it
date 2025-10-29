import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Package, Mail, Phone, Sparkles, ShoppingCart, CreditCard, Gift, Shield, Zap, Headphones, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import distributeur from "@/assets/distributeur.png";
import serieEcarlateViolet from "@/assets/series-ecarlate-violet.jpg";
import serieDestineesPaldea from "@/assets/series-destinees-paldea.jpg";
import serieParadeParadoxe from "@/assets/series-parade-paradoxe.jpg";
import serieEpeeBouclier from "@/assets/series-epee-bouclier.jpg";
import seriePremium from "@/assets/series-premium.jpg";
import serieMystere from "@/assets/series-mystere.jpg";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message envoyé avec succès !", {
      description: "Nous vous répondrons dans les plus brefs délais."
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <img src={logo} alt="Catcht Logo" className="h-12 w-auto transition-transform duration-300 hover:scale-105" />
          <nav className="flex gap-8">
            <button 
              onClick={() => scrollToSection("machines")} 
              className="relative text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Nos Machines
            </button>
            <button 
              onClick={() => scrollToSection("disponibilites")} 
              className="relative text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Disponibilités
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="relative text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden max-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%),radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.15),transparent_50%)]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }}></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-semibold mb-4">
                <Sparkles className="h-4 w-4" />
                Nouveau concept en France
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
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
                <Button onClick={() => scrollToSection("machines")} size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Découvrir nos machines
                  <Package className="h-4 w-4" />
                </Button>
                <Button onClick={() => scrollToSection("disponibilites")} variant="outline" size="lg" className="gap-2 hover:scale-105 transition-all duration-300">
                  Voir les boosters
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 rounded-3xl blur-[80px]"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src={distributeur} 
                alt="Distributeur Pokémon Catcht" 
                className="relative rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] animate-float w-full h-auto select-none pointer-events-none"
                draggable="false"
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Choisissez votre série</p>
                  <p className="text-sm text-muted-foreground">Navigation intuitive sur écran tactile HD</p>
                </div>
              </div>
              <div className="flex gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 text-primary-foreground shadow-lg">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Payez en toute sécurité</p>
                  <p className="text-sm text-muted-foreground">CB sans contact ou espèces acceptées</p>
                </div>
              </div>
              <div className="flex gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/70 text-accent-foreground shadow-lg">
                  <Gift className="h-6 w-6" />
                </div>
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
              <div className="flex items-center justify-center p-12">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-muted/50 rounded-full">
                      <AlertCircle className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-muted-foreground">
                    Pas de distributeur pour le moment
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    Revenez bientôt pour découvrir nos emplacements !
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Caractéristiques de nos machines</CardTitle>
            <CardDescription className="text-base">Technologie de pointe pour votre confort</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start gap-3 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Paiement sécurisé</p>
                  <p className="text-sm text-muted-foreground">CB sans contact et espèces</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Interface tactile HD</p>
                  <p className="text-sm text-muted-foreground">Navigation intuitive et colorée</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Stock en temps réel</p>
                  <p className="text-sm text-muted-foreground">Disponibilité actualisée</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Service 24h/24</p>
                  <p className="text-sm text-muted-foreground">Accessible à toute heure</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Produits officiels</p>
                  <p className="text-sm text-muted-foreground">100% authentiques garantis</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Headphones className="h-5 w-5" />
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
              <div className="aspect-square overflow-hidden">
                <img src={serieEcarlateViolet} alt="Écarlate et Violet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Écarlate et Violet
                </CardTitle>
                <CardDescription className="text-base">Série en cours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">5,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Top Chase:</p>
                  <p className="text-sm font-medium">Pikachu ex, Miraidon ex, Koraidon ex</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>
              <div className="aspect-square overflow-hidden">
                <img src={serieDestineesPaldea} alt="Destinées à Paldea" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Destinées à Paldea
                </CardTitle>
                <CardDescription className="text-base">Extension récente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-secondary">5,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Top Chase:</p>
                  <p className="text-sm font-medium">Mewtwo ex, Charizard ex, Mew ex</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
              <div className="aspect-square overflow-hidden">
                <img src={serieParadeParadoxe} alt="Parade Paradoxe" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Parade Paradoxe
                </CardTitle>
                <CardDescription className="text-base">Extension populaire</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-accent">5,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Top Chase:</p>
                  <p className="text-sm font-medium">Roaring Moon ex, Iron Valiant ex</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="aspect-square overflow-hidden">
                <img src={serieEpeeBouclier} alt="Épée et Bouclier" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Épée et Bouclier</CardTitle>
                <CardDescription className="text-base">Collection classique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">5,49€</span>
                  <span className="text-xs bg-orange-500/20 text-orange-600 font-semibold px-3 py-1.5 rounded-full border border-orange-500/30">
                    Stock limité
                  </span>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Top Chase:</p>
                  <p className="text-sm font-medium">Zacian V, Zamazenta V, Eternatus VMAX</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>
              <div className="aspect-square overflow-hidden">
                <img src={seriePremium} alt="Collection Premium" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Collection Premium</CardTitle>
                <CardDescription className="text-base">Éditions spéciales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-secondary">8,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Top Chase:</p>
                  <p className="text-sm font-medium">Charizard VSTAR, Lugia V Alt Art</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
              <div className="aspect-square overflow-hidden">
                <img src={serieMystere} alt="Boosters Mystère" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Boosters Mystère</CardTitle>
                <CardDescription className="text-base">Surprise garantie</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-accent">4,99€</span>
                  <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                    En stock
                  </span>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Top Chase:</p>
                  <p className="text-sm font-medium">Surprise ! Toutes séries confondues</p>
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
            Une question ? Un problème ? Envoyez-nous un message
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                Envoyez-nous un message
              </CardTitle>
              <CardDescription className="text-base">
                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre question, suggestion ou problème..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px] border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email direct</h4>
                    <a 
                      href="mailto:contact@catcht.fr" 
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      contact@catcht.fr
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <a 
                      href="tel:+33123456789" 
                      className="text-sm text-secondary hover:text-secondary/80 transition-colors"
                    >
                      01 23 45 67 89
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Lun-Ven, 9h-18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-br from-card to-muted/30 mt-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col items-center gap-8">
            <img src={logo} alt="Catcht Logo" className="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground font-semibold">
                © {new Date().getFullYear()} Catcht. Tous droits réservés.
              </p>
              <p className="text-xs text-muted-foreground/80 max-w-md">
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
