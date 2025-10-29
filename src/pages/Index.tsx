import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Package, Mail, Phone } from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-primary">PokéDistrib</h1>
          <nav className="flex gap-6">
            <button onClick={() => scrollToSection("machines")} className="text-sm font-medium hover:text-primary transition-colors">
              Nos Machines
            </button>
            <button onClick={() => scrollToSection("disponibilites")} className="text-sm font-medium hover:text-primary transition-colors">
              Disponibilités
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-6 text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Distributeurs de Cartes Pokémon
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
          Découvrez nos distributeurs automatiques de cartes Pokémon. Des boosters surprise à portée de main !
        </p>
        <Button onClick={() => scrollToSection("machines")} size="lg" className="gap-2">
          Découvrir nos machines
        </Button>
      </section>

      {/* Section Nos Machines */}
      <section id="machines" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Machines</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Comment ça marche ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                <p className="text-muted-foreground">Choisissez votre série préférée sur l'écran tactile</p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                <p className="text-muted-foreground">Insérez votre paiement (carte bancaire ou espèces)</p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                <p className="text-muted-foreground">Récupérez votre booster et découvrez vos cartes !</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                Où nous trouver ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Centre Commercial Les Arcades</h4>
                  <p className="text-sm text-muted-foreground">123 Avenue du Commerce, 75001 Paris</p>
                  <p className="text-sm text-muted-foreground">Niveau 1, près de l'entrée principale</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Gare Centrale</h4>
                  <p className="text-sm text-muted-foreground">Place de la Gare, 69000 Lyon</p>
                  <p className="text-sm text-muted-foreground">Hall principal, zone commerciale</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Galerie du Port</h4>
                  <p className="text-sm text-muted-foreground">45 Quai du Vieux Port, 13001 Marseille</p>
                  <p className="text-sm text-muted-foreground">Rez-de-chaussée</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
          <CardHeader>
            <CardTitle>Caractéristiques de nos machines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Paiement sécurisé par carte bancaire et espèces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Interface tactile intuitive et colorée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Stock actualisé en temps réel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Disponible 24h/24, 7j/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Produits 100% officiels et authentiques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Maintenance régulière et contrôle qualité</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Section Disponibilités */}
      <section id="disponibilites" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Nos Disponibilités</h2>
          <p className="text-center text-muted-foreground mb-12">
            Découvrez les séries actuellement en stock dans nos distributeurs
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Écarlate et Violet</CardTitle>
                <CardDescription>Série en cours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Disponible dans toutes nos machines</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">5,99€</span>
                  <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">En stock</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Destinées à Paldea</CardTitle>
                <CardDescription>Extension récente</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Disponible dans toutes nos machines</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">5,99€</span>
                  <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">En stock</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Parade Paradoxe</CardTitle>
                <CardDescription>Extension populaire</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Paris et Lyon uniquement</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">5,99€</span>
                  <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">En stock</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Épée et Bouclier</CardTitle>
                <CardDescription>Collection classique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Quantités limitées</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">5,49€</span>
                  <span className="text-xs bg-orange-500/10 text-orange-600 px-2 py-1 rounded-full">Stock limité</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Collection Premium</CardTitle>
                <CardDescription>Éditions spéciales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Toutes nos machines</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">8,99€</span>
                  <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">En stock</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Boosters Mystère</CardTitle>
                <CardDescription>Surprise garantie</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Séries variées aléatoires</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">4,99€</span>
                  <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">En stock</span>
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
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Contactez-nous</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Par Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Pour toute question, suggestion ou partenariat
              </p>
              <a href="mailto:contact@pokedistrib.fr" className="text-primary hover:underline font-medium">
                contact@pokedistrib.fr
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Par Téléphone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Service client disponible du lundi au vendredi, 9h-18h
              </p>
              <a href="tel:+33123456789" className="text-primary hover:underline font-medium">
                01 23 45 67 89
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Un problème avec une machine ?</CardTitle>
            <CardDescription>
              Signalez-nous tout dysfonctionnement pour une intervention rapide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                En cas de problème technique, merci de nous indiquer :
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• Le lieu de la machine concernée</li>
                <li>• La nature du problème rencontré</li>
                <li>• La date et l'heure de l'incident</li>
              </ul>
              <Button className="w-full sm:w-auto">
                Signaler un problème
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">© 2024 PokéDistrib. Tous droits réservés.</p>
            <p>Pokémon et les noms de personnages Pokémon sont des marques déposées de Nintendo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
