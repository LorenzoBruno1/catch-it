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
      {/* Animated multicolor bar at top */}
      <div className="fixed top-0 left-0 z-50 w-full h-1 [background-size:200%_100%] bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--secondary)),hsl(var(--accent)),hsl(var(--primary)))] animate-marquee"></div>
      <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-8">
        <div className="w-[700px] min-w-[350px] max-w-3xl grid grid-cols-3 rounded-full border border-white/20 bg-background/50 shadow-lg backdrop-blur-3xl backdrop-saturate-200 supports-[backdrop-filter]:bg-background/50 h-16 px-10">
          <div className="flex items-center h-full">
            <button
              onClick={() => scrollToSection('machines')}
              className="relative whitespace-nowrap text-base font-semibold text-white hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-10/12"
              style={{textShadow: '0 2px 8px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.4)'}}
            >
              Nos Machines
            </button>
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={logo} alt="Catcht Logo" className="h-12 w-auto transition-transform duration-300 hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" />
          </div>
          <div className="flex items-center justify-end h-full">
            <button
              onClick={() => scrollToSection('disponibilites')}
              className="relative whitespace-nowrap text-base font-semibold text-white hover:text-primary transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-10/12"
              style={{textShadow: '0 2px 8px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.4)'}}
            >
              Disponibilités
            </button>
          </div>
        </div>
        <a
          href="mailto:contact@catcht.fr"
          aria-label="Contact"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-background/50 backdrop-blur-2xl backdrop-saturate-150 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      {/* Hero Section - Immersive Branding */}
      <section
        className="relative min-h-[800px] flex items-center justify-center overflow-hidden py-12 md:py-0"
        style={{ minHeight: '100vh', maxHeight: '1000px' }}
      >
        {/* Main animated background gradient, subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFDEE9] via-[#B5C6E0] to-[#6699FF] hero-bg-animate"></div>
        {/* Decorative blobs / glows for poké ambiance */}
        <div className="absolute top-14 left-1/4 md:left-[24%] w-60 h-60 bg-[#ff4d4d44] rounded-full blur-[110px] animate-drift-slow"></div>
        <div className="absolute bottom-24 right-10 w-[19rem] h-[19rem] bg-[#FFD84A22] rounded-full blur-[160px] animate-drift-slow" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-[55%] left-1/2 w-16 h-16 bg-[#4A7BFF33] rounded-full blur-2xl animate-drift" style={{ animationDuration: '8s', animationDelay: '-1s' }}></div>
        {/* Subtle highlight behind text for readability */}
        <div className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 w-[700px] max-w-full h-[350px] bg-white/30 blur-3xl z-10 md:block hidden pointer-events-none" />
        <div className="container mx-auto px-4 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 min-h-[650px]">
          {/* Bloc texte - centré verticalement avec la machine à droite */}
          <div className="flex-1 min-w-[320px] flex flex-col items-center md:items-start justify-center md:pl-10 md:pr-8">
            <div className="badge-glossy inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-[2px] border border-primary/20 text-primary text-sm font-semibold mb-2 mt-2 md:mb-4 md:mt-0 select-none">
              <Sparkles className="h-4 w-4" />
              Nouveau concept en France
            </div>
            <h1
              className="hero-halo font-outfit font-extrabold text-[2rem] md:text-[2.8rem] lg:text-[3.3rem] tracking-tight text-center md:text-left pb-2 max-w-[750px]"
              style={{lineHeight: '1.4'}}
            >
              Attrapez vos cartes<br />
              <span className="gradient-chrome-text">Pokémon</span>, à tout moment.
            </h1>
            <p className="font-manrope text-lg md:text-xl opacity-90 text-center md:text-left max-w-[600px] mb-8 mt-3 md:mb-9 md:mt-5" style={{lineHeight: '1.8'}}>
              Découvrez nos distributeurs automatiques Pokémon :<br />
              une nouvelle façon d'ouvrir vos boosters, 24h/24, partout en France.
            </p>
            {/* Buttons centrés sous le texte */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-7 w-full md:w-auto items-center justify-center md:justify-start">
              <Button onClick={() => scrollToSection("machines")} size="lg" className="gap-2 px-7 shadow-lg hover:shadow-xl font-manrope font-semibold text-base">
                Découvrir nos machines
                <Package className="h-5 w-5" />
              </Button>
              <Button onClick={() => scrollToSection("disponibilites")} variant="outline" size="lg" className="gap-2 px-7 font-manrope font-semibold text-base">
                Voir les boosters
              </Button>
            </div>
          </div>
          {/* Machine - alignée verticalement au center sur grand écran, toujours visible mais jamais plus imposante que le texte visuellement */}
          <div className="flex-1 w-full flex items-center justify-center pt-12 pb-6 md:py-0">
            <div className="relative md:w-[480px] w-[95vw] max-w-[380px] md:max-w-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 rounded-3xl blur-[65px]"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              {/* Image loading skeleton */}
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-muted/50 [background-size:200%_100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] animate-shimmer"></div>
                <img
                  src={distributeur}
                  alt="Distributeur Pokémon Catcht"
                  className="relative rounded-2xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.29)] w-full h-auto select-none pointer-events-none opacity-0 animate-fade-in"
                  draggable="false"
                  onLoad={(e) => { (e.currentTarget.previousElementSibling as HTMLElement).style.display = 'none'; e.currentTarget.style.opacity = '1'; }}
                />
              </div>
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

      {/* Section Contact removed as per request */}

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
