import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Package, Mail, Phone, Sparkles, ShoppingCart, CreditCard, Gift, Shield, Zap, Headphones, CheckCircle2, AlertCircle, Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { ScrollAnimateWrapper } from "@/components/ScrollAnimateWrapper";
import logo from "@/assets/logo.png";
import distributeur from "@/assets/distributeur.png";
import booster151 from "@/assets/booster/booster_151-fr.webp";
import chase151_1 from "@/assets/chase-card/151-1.webp";
import chase151_2 from "@/assets/chase-card/151-2.webp";
import chase151_3 from "@/assets/chase-card/151-3.webp";
import boosterPaldean from "@/assets/booster/Paldean-Fates-Booster-pack-2.webp";
import chasePaldean1 from "@/assets/chase-card/paldean-1.webp";
import chasePaldean2 from "@/assets/chase-card/paldean-2.webp";
import chasePaldean3 from "@/assets/chase-card/paldean-3.webp";
import boosterSurging from "@/assets/booster/pokemon-ev08-boosters-etincelles-deferlantes.webp";
import chaseSurging1 from "@/assets/chase-card/surging-1.webp";
import chaseSurging2 from "@/assets/chase-card/surging-2.webp";
import chaseSurging3 from "@/assets/chase-card/surging-3.webp";
import boosterRivals from "@/assets/booster/43C2E6D6-FB51-4349-933A-804B80B6CD5B.webp";
import chaseRivals1 from "@/assets/chase-card/rivals-1.jpg";
import chaseRivals2 from "@/assets/chase-card/rivals-2.webp";
import chaseRivals3 from "@/assets/chase-card/rivals-3.webp";
import boosterPrismatic from "@/assets/booster/booster_evolution-prismatique.webp";
import chasePrismatic1 from "@/assets/chase-card/prismatic-1.webp";
import chasePrismatic2 from "@/assets/chase-card/prismatic-2.webp";
import chasePrismatic3 from "@/assets/chase-card/prismatic-3.webp";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Sync isDragging state avec la ref
  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  // Défilement automatique fluide et continu avec boucle infinie
  useEffect(() => {
    const scrollSpeed = 1; // pixels par intervalle
    
    const interval = setInterval(() => {
      const carousel = carouselRef.current;
      
      if (carousel && !isDraggingRef.current) {
        const cardWidth = 350;
        const gapWidth = 24;
        const cardSetWidth = (cardWidth * 5) + (gapWidth * 4);
        
        if (carousel.scrollLeft >= cardSetWidth) {
          carousel.scrollLeft = carousel.scrollLeft - cardSetWidth;
        }
        
        carousel.scrollLeft += scrollSpeed;
      }
    }, 16); // ~60fps

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Gestion du drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    isDraggingRef.current = true;
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiplier réduit pour plus de contrôle
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  // Support tactile (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    isDraggingRef.current = true;
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiplier réduit pour plus de contrôle
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
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
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-background/50 backdrop-blur-2xl backdrop-saturate-150 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <Mail className="h-5.5 w-5.5" />
        </a>
      </div>

      {/* Hero Section - Immersive Branding */}
      <section
        className="relative min-h-[700px] flex items-center justify-center overflow-hidden py-12 md:py-0 animate-fade-in"
        style={{ minHeight: '85vh', maxHeight: '850px' }}
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
            <div className="badge-glossy inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-[2px] border border-primary/20 text-primary text-sm font-semibold mb-2 mt-2 md:mb-4 md:mt-0 select-none animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Sparkles className="h-4 w-4" />
              Nouveau concept en France
            </div>
            <h1
              className="hero-halo font-outfit font-extrabold text-[2rem] md:text-[2.8rem] lg:text-[3.3rem] tracking-tight text-center md:text-left pb-2 max-w-[750px] animate-fade-in"
              style={{lineHeight: '1.4', animationDelay: '200ms'}}
            >
              Attrapez vos cartes<br />
              <span className="gradient-chrome-text">Pokémon</span>, à tout moment.
            </h1>
            <p className="font-manrope text-lg md:text-xl opacity-90 text-center md:text-left max-w-[600px] mb-8 mt-3 md:mb-9 md:mt-5 animate-fade-in" style={{lineHeight: '1.8', animationDelay: '300ms'}}>
              Découvrez nos distributeurs automatiques Pokémon :<br />
              une nouvelle façon d'ouvrir vos boosters, 24h/24, partout en France.
            </p>
            {/* Buttons centrés sous le texte */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-7 w-full md:w-auto items-center justify-center md:justify-start animate-fade-in" style={{ animationDelay: '400ms' }}>
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
          <div className="flex-1 w-full flex items-center justify-center pt-12 pb-6 md:py-0 animate-fade-in" style={{ animationDelay: '250ms' }}>
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
      <section id="machines" className="container mx-auto px-4 pt-16 pb-24">
        <ScrollAnimateWrapper>
          <div className="text-center mb-16">
            <h2 className="hero-halo font-outfit font-extrabold text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] tracking-tight mb-4 inline-flex items-center gap-3 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-0 after:bg-gradient-to-r after:from-primary after:via-secondary after:to-accent after:transition-all after:duration-500 hover:after:w-11/12 after:rounded-full after:[background-size:200%_100%] after:animate-marquee-slow">
              <Package className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              Nos Machines
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des distributeurs nouvelle génération pour une expérience collector unique
            </p>
          </div>
        </ScrollAnimateWrapper>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollAnimateWrapper animationType="slide-left">
            <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                Comment ça marche ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow">
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
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animationType="slide-right">
            <Card className="h-full border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                Où nous trouver ?
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
              <div className="text-center space-y-4 w-full">
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
            </CardContent>
          </Card>
          </ScrollAnimateWrapper>
        </div>

        {/* Éléments de confiance */}
        <ScrollAnimateWrapper animationType="scale">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Shield className="h-5 w-5" />
              </div>
              <p className="font-semibold text-sm">Paiement sécurisé</p>
              <p className="text-xs text-muted-foreground">CB sans contact et espèces</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <Zap className="h-5 w-5" />
              </div>
              <p className="font-semibold text-sm">Interface tactile HD</p>
              <p className="text-xs text-muted-foreground">Navigation intuitive et colorée</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Package className="h-5 w-5" />
              </div>
              <p className="font-semibold text-sm">Stock en temps réel</p>
              <p className="text-xs text-muted-foreground">Disponibilité actualisée</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="font-semibold text-sm">Service 24h/24</p>
              <p className="text-xs text-muted-foreground">Accessible à toute heure</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="font-semibold text-sm">Produits officiels</p>
              <p className="text-xs text-muted-foreground">100% authentiques garantis</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Headphones className="h-5 w-5" />
              </div>
              <p className="font-semibold text-sm">Maintenance régulière</p>
              <p className="text-xs text-muted-foreground">Contrôle qualité permanent</p>
            </div>
          </div>
        </ScrollAnimateWrapper>
      </section>

      {/* Section Disponibilités */}
      <section id="disponibilites" className="bg-gradient-to-br from-muted/30 to-muted/60 pt-16 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollAnimateWrapper>
            <div className="text-center mb-16">
              <h2 className="hero-halo font-outfit font-extrabold text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] tracking-tight mb-4 inline-flex items-center gap-3 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-0 after:bg-gradient-to-r after:from-primary after:via-secondary after:to-accent after:transition-all after:duration-500 hover:after:w-11/12 after:rounded-full after:[background-size:200%_100%] after:animate-marquee-slow">
                <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
                Nos Produits
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Survolez les boosters pour découvrir les chase cards
              </p>
            </div>
          </ScrollAnimateWrapper>
          
          {/* Carousel horizontal full-bleed */}
          <ScrollAnimateWrapper animationType="fade" delay={200}>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4">
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto pb-8 px-0 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Série 151 */}
              <div className="group relative flex-shrink-0 w-[350px]">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                  {/* Image du booster */}
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img 
                      src={booster151} 
                      alt="Booster 151" 
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay chase cards au hover */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img 
                          src={chase151_1} 
                          alt="Chase Card 1" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chase151_2} 
                          alt="Chase Card 2" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chase151_3} 
                          alt="Chase Card 3" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Informations */}
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                        Booster 151
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Collection complète Kanto</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                        En stock
                      </span>
                    </div>
                  </div>
                  
                  {/* Badge "Hover pour voir" */}
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    Survolez-moi ✨
                  </div>
                </div>
              </div>

              {/* Booster Destinées de Paldea */}
              <div className="group relative flex-shrink-0 w-[350px]">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/10">
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img 
                      src={boosterPaldean} 
                      alt="Booster Destinées de Paldea" 
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay chase cards au hover */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img 
                          src={chasePaldean1} 
                          alt="Chase Card 1" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chasePaldean2} 
                          alt="Chase Card 2" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chasePaldean3} 
                          alt="Chase Card 3" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent leading-tight">
                        Booster Destinées de Paldea
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Écarlate et Violet</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-secondary">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                        En stock
                      </span>
                    </div>
                  </div>
                  
                  {/* Badge "Hover pour voir" */}
                  <div className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    Survolez-moi ✨
                  </div>
                </div>
              </div>

              {/* Booster Étincelles Déferlantes */}
              <div className="group relative flex-shrink-0 w-[350px]">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10">
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img 
                      src={boosterSurging} 
                      alt="Booster Étincelles Déferlantes" 
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay chase cards au hover */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img 
                          src={chaseSurging1} 
                          alt="Chase Card 1" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chaseSurging2} 
                          alt="Chase Card 2" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chaseSurging3} 
                          alt="Chase Card 3" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent leading-tight">
                        Booster Étincelles Déferlantes
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Écarlate et Violet</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-accent">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                        En stock
                      </span>
                    </div>
                  </div>
                  
                  {/* Badge "Hover pour voir" */}
                  <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    Survolez-moi ✨
                  </div>
                </div>
              </div>

              {/* Rivalités Destinées */}
              <div className="group relative flex-shrink-0 w-[350px]">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img 
                      src={boosterRivals} 
                      alt="Rivalités Destinées" 
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay chase cards au hover */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img 
                          src={chaseRivals1} 
                          alt="Chase Card 1" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chaseRivals2} 
                          alt="Chase Card 2" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chaseRivals3} 
                          alt="Chase Card 3" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                        Rivalités Destinées
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Écarlate et Violet</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                        En stock
                      </span>
                    </div>
                  </div>
                  
                  {/* Badge "Hover pour voir" */}
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    Survolez-moi ✨
                  </div>
                </div>
              </div>

              {/* Évolutions Prismatique */}
              <div className="group relative flex-shrink-0 w-[350px]">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/10">
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img 
                      src={boosterPrismatic} 
                      alt="Évolutions Prismatique" 
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay chase cards au hover */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img 
                          src={chasePrismatic1} 
                          alt="Chase Card 1" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chasePrismatic2} 
                          alt="Chase Card 2" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                        <img 
                          src={chasePrismatic3} 
                          alt="Chase Card 3" 
                          className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent leading-tight">
                        Évolutions Prismatique
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Écarlate et Violet</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-secondary">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                        En stock
                      </span>
                    </div>
                  </div>
                  
                  {/* Badge "Hover pour voir" */}
                  <div className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    Survolez-moi ✨
                  </div>
                </div>
              </div>

              {/* DUPLICATAS pour boucle infinie (copie exacte des 5 cartes ci-dessus) */}
              {/* Série 151 - Copie */}
              <div className="group relative flex-shrink-0 w-[350px]" aria-hidden="true">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img 
                      src={booster151} 
                      alt="Booster 151" 
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img src={chase151_1} alt="Chase Card 1" className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chase151_2} alt="Chase Card 2" className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chase151_3} alt="Chase Card 3" className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">Booster 151</h3>
                      <p className="text-sm text-muted-foreground mt-1">Collection complète Kanto</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">En stock</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">Survolez-moi ✨</div>
                </div>
              </div>

              {/* Booster Destinées de Paldea - Copie */}
              <div className="group relative flex-shrink-0 w-[350px]" aria-hidden="true">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/10">
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img src={boosterPaldean} alt="Booster Destinées de Paldea" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img src={chasePaldean1} alt="Chase Card 1" className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chasePaldean2} alt="Chase Card 2" className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chasePaldean3} alt="Chase Card 3" className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent leading-tight">Booster Destinées de Paldea</h3>
                      <p className="text-sm text-muted-foreground mt-1">Écarlate et Violet</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-secondary">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">En stock</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">Survolez-moi ✨</div>
                </div>
              </div>

              {/* Booster Étincelles Déferlantes - Copie */}
              <div className="group relative flex-shrink-0 w-[350px]" aria-hidden="true">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10">
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img src={boosterSurging} alt="Booster Étincelles Déferlantes" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img src={chaseSurging1} alt="Chase Card 1" className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chaseSurging2} alt="Chase Card 2" className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chaseSurging3} alt="Chase Card 3" className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent leading-tight">Booster Étincelles Déferlantes</h3>
                      <p className="text-sm text-muted-foreground mt-1">Écarlate et Violet</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-accent">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">En stock</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">Survolez-moi ✨</div>
                </div>
              </div>

              {/* Rivalités Destinées - Copie */}
              <div className="group relative flex-shrink-0 w-[350px]" aria-hidden="true">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img src={boosterRivals} alt="Rivalités Destinées" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img src={chaseRivals1} alt="Chase Card 1" className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chaseRivals2} alt="Chase Card 2" className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chaseRivals3} alt="Chase Card 3" className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">Rivalités Destinées</h3>
                      <p className="text-sm text-muted-foreground mt-1">Écarlate et Violet</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">En stock</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">Survolez-moi ✨</div>
                </div>
              </div>

              {/* Évolutions Prismatique - Copie */}
              <div className="group relative flex-shrink-0 w-[350px]" aria-hidden="true">
                <div className="relative min-h-[530px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/10">
                  <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                    <img src={boosterPrismatic} alt="Évolutions Prismatique" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 p-6 overflow-visible">
                      <div className="flex gap-3 items-center justify-center animate-fade-in overflow-visible">
                        <img src={chasePrismatic1} alt="Chase Card 1" className="w-24 h-32 object-cover rounded-sm shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chasePrismatic2} alt="Chase Card 2" className="w-24 h-32 object-cover rounded-sm shadow-xl transform hover:scale-125 transition-all duration-300 hover:z-10" />
                        <img src={chasePrismatic3} alt="Chase Card 3" className="w-24 h-32 object-cover rounded-sm shadow-xl transform rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-300 hover:z-10" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="min-h-[80px]">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent leading-tight">Évolutions Prismatique</h3>
                      <p className="text-sm text-muted-foreground mt-1">Écarlate et Violet</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-secondary">19,99€</span>
                      <span className="text-xs bg-green-500/20 text-green-600 font-semibold px-3 py-1.5 rounded-full border border-green-500/30">En stock</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">Survolez-moi ✨</div>
                </div>
              </div>

            </div>
          </div>
          </ScrollAnimateWrapper>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              * Les stocks sont mis à jour quotidiennement. Disponibilité sous réserve de stock dans chaque machine.
            </p>
          </div>
        </div>
      </section>

      {/* Section Avis Clients */}
      <section className="container mx-auto px-4 pt-16 pb-24">
        <ScrollAnimateWrapper>
          <div className="text-center mb-16">
            <h2 className="hero-halo font-outfit font-extrabold text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] tracking-tight mb-4 inline-flex items-center gap-3 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-0 after:bg-gradient-to-r after:from-primary after:via-secondary after:to-accent after:transition-all after:duration-500 hover:after:w-11/12 after:rounded-full after:[background-size:200%_100%] after:animate-marquee-slow">
              <Star className="h-8 w-8 md:h-10 md:w-10 text-accent" />
              Ils ont attrapé leurs cartes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce que nos clients pensent de l'expérience Catcht
            </p>
          </div>
        </ScrollAnimateWrapper>

        {/* Avis - centrés et plus larges */}
        <div className="flex justify-center w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[90vw] xl:max-w-[1200px] justify-items-center items-stretch">
          {/* Avis 1 */}
          <ScrollAnimateWrapper animationType="scale" delay={100}>
            <div className="group relative w-full">
            <Card className="h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8 flex flex-col h-full">
                {/* Étoiles */}
                <div className="flex gap-1 mb-4 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Citation */}
                <div className="relative mb-6 flex-grow">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-base leading-relaxed pl-6 text-foreground/90">
                    Une expérience incroyable ! J'ai trouvé un distributeur près de chez moi et j'ai pu ouvrir mes boosters immédiatement. L'interface tactile est super intuitive.
                  </p>
                </div>
                
                {/* Auteur */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Marie L.</p>
                    <p className="text-sm text-muted-foreground">Collectionneuse</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </ScrollAnimateWrapper>

          {/* Avis 2 */}
          <ScrollAnimateWrapper animationType="scale" delay={200}>
            <div className="group relative w-full">
            <Card className="h-full flex flex-col border-2 hover:border-secondary/50 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/10 hover:scale-105 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex gap-1 mb-4 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <div className="relative mb-6 flex-grow">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-secondary/20" />
                  <p className="text-base leading-relaxed pl-6 text-foreground/90">
                    Concept génial ! Disponible 24h/24, je peux passer après le travail. Les produits sont toujours en excellent état et 100% authentiques. Je suis trop content !
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/70 text-secondary-foreground font-bold text-lg">
                    J
                  </div>
                  <div>
                    <p className="font-semibold">Julien D.</p>
                    <p className="text-sm text-muted-foreground">Fan Pokémon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </ScrollAnimateWrapper>

        </div>
        </div>

        {/* Call to action */}
        <ScrollAnimateWrapper animationType="fade" delay={100}>
          <div className="mt-12 text-center">
          <Card className="inline-block border-2 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 flex-col md:flex-row">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg mb-1">Vous aussi, partagez votre expérience !</p>
                  <p className="text-sm text-muted-foreground">Contactez-nous pour nous faire part de votre avis</p>
                </div>
                <Button 
                  onClick={() => window.location.href = 'mailto:contact@catcht.fr'}
                  className="gap-2 px-6"
                >
                  <Mail className="h-4 w-4" />
                  Nous contacter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        </ScrollAnimateWrapper>
      </section>

      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-br from-card to-muted/30 mt-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <ScrollAnimateWrapper animationType="fade">
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
        </ScrollAnimateWrapper>
      </footer>
    </div>
  );
};

export default Index;
