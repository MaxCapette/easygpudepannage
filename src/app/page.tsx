/* eslint-disable @next/next/no-img-element */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Cpu, HardDrive, Monitor, Shield, Star, Wrench } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://easygpu.fr',
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-zinc-800 mx-auto">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 id="hero-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Votre expert en dépannage informatique
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Solutions rapides et professionnelles pour tous vos problèmes informatiques. Intervention à domicile à Derval et ses alentours ou à distance.
                </p>
              
              </div>
             
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Dépannage informatique à Derval"
                className="aspect-video overflow-hidden rounded-xl object-cover transition-transform hover:scale-105"
                src="/tech.png?height=400&width=600"
                width={600}
                height={400}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" aria-labelledby="services-heading" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 id="services-heading" className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Nos Services
              </h2>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Une gamme complète de services pour répondre à tous vos besoins informatiques
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl items-start gap-6 py-12 lg:grid-cols-5"> {/* Updated div */}
            <Card className="h-full transition-all hover:scale-105 hover:shadow-lg bg-zinc-800 border-zinc-700"> {/* Updated Card */}
              <CardHeader>
                <Cpu className="w-12 h-12 mb-4 transition-transform hover:scale-110 text-orange-500" />
                <CardTitle className="text-white">Dépannage Matériel</CardTitle>
                <CardDescription className="text-zinc-400">Réparation et maintenance de vos équipements informatiques</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Diagnostic complet
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Réparation sur site
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Remplacement de composants
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full transition-all hover:scale-105 hover:shadow-lg bg-zinc-800 border-zinc-700"> {/* Updated Card */}
              <CardHeader>
                <HardDrive className="w-12 h-12 mb-4 transition-transform hover:scale-110 text-orange-500" />
                <CardTitle className="text-white">Maintenance Préventive</CardTitle>
                <CardDescription className="text-zinc-400">Optimisation et protection de vos systèmes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Nettoyage système
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Mise à jour logiciels
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Sauvegarde données
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full transition-all hover:scale-105 hover:shadow-lg bg-zinc-800 border-zinc-700"> {/* Updated Card */}
              <CardHeader>
                <Monitor className="w-12 h-12 mb-4 transition-transform hover:scale-110 text-orange-500" />
                <CardTitle className="text-white">Assistance à Distance</CardTitle>
                <CardDescription className="text-zinc-400">Support technique rapide et efficace</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Dépannage à distance
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Configuration système
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Formation utilisateur
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full transition-all hover:scale-105 hover:shadow-lg bg-zinc-800 border-zinc-700"> {/* Updated Card */}
              <CardHeader>
                <HardDrive className="w-12 h-12 mb-4 transition-transform hover:scale-110 text-orange-500" />
                <CardTitle className="text-white">Location Professionnelle</CardTitle>
                <CardDescription className="text-zinc-400">Matériel informatique haut de gamme pour les professionnels</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Stations de travail
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Serveurs
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Solutions sur mesure
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Imprimantes
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full transition-all hover:scale-105 hover:shadow-lg bg-zinc-800 border-zinc-700">
              <CardHeader>
                <Monitor className="w-12 h-12 mb-4 transition-transform hover:scale-110 text-orange-500" />
                <CardTitle className="text-white">Montage PC Gamer</CardTitle>
                <CardDescription className="text-zinc-400">Assemblage sur mesure de votre configuration gaming</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Conseil personnalisé
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Montage professionnel
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Tests et optimisation
                  </li>
                  <li className="flex items-center gap-2 transition-colors hover:text-orange-500 text-zinc-300">
                    <Check className="w-4 h-4" /> Cours de montage de PC
                  </li>
                </ul>
              </CardContent>
            </Card>
            
          </div>
          {/* Website Creation Section */}
      <section id="websites" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Création de Sites Internet
              </h2>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Des solutions web sur mesure pour votre entreprise
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <div className="flex flex-col items-center space-y-4 p-6 bg-zinc-900 rounded-lg border border-zinc-700 transition-all hover:scale-105 hover:shadow-lg">
              <div className="p-3 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Site Vitrine</h3>
              <ul className="text-center space-y-2 text-zinc-400">
                <li>Design personnalisé</li>
                <li>Responsive mobile</li>
                <li>Optimisé SEO</li>
                <li>Hébergement inclus</li>
              </ul>
             
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-zinc-900 rounded-lg border border-zinc-700 transition-all hover:scale-105 hover:shadow-lg">
              <div className="p-3 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 004 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">E-commerce</h3>
              <ul className="text-center space-y-2 text-zinc-400">
                <li>Catalogue produits</li>
                <li>Paiement sécurisé</li>
                <li>Tuto gestion des stocks</li>
                <li>Dashboard admin</li>
              </ul>
              
            </div>

       
          </div>

          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center max-w-4xl">
              <div className="p-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-zinc-400 mt-2">Sites livrés</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-zinc-400 mt-2">Support technique</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-zinc-400 mt-2">Uptime garanti</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  48h
                </div>
                <div className="text-zinc-400 mt-2">Délai de réponse</div>
              </div>
            </div>
          </div>
        </div>
      </section>
          <div className="mt-8 w-full h-[400px] rounded-lg overflow-hidden mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43000.55142519268!2d-1.7143689705282616!3d47.6546127416618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480f69e0c1872fc5%3A0x40d37521e0df0d0!2s44590%20Derval!5e0!3m2!1sfr!2sfr!4v1735910228331!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale hover:grayscale-0 transition-all duration-300"
            title="Google Maps - Localisation Easy-gpu à Derval"
          />
        </div>
      
        </div>
        
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Pourquoi Nous Choisir
              </h2>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Des experts passionnés à votre service
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center transition-all hover:scale-105">
              <Shield className="w-12 h-12 transition-transform hover:scale-110 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Expertise Garantie</h3>
              <p className="text-zinc-400">
                Plus de 10 ans d&apos;expérience dans le dépannage informatique
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center transition-all hover:scale-105">
              <Wrench className="w-12 h-12 transition-transform hover:scale-110 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Service Rapide</h3>
              <p className="text-zinc-400">
                Intervention sous 24h et dépannage express disponible
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center transition-all hover:scale-105">
              <Star className="w-12 h-12 transition-transform hover:scale-110 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Satisfaction Client</h3>
              <p className="text-zinc-400">
                98% de nos clients nous recommandent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Ce que disent nos clients
              </h2>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez les témoignages de nos clients satisfaits
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <Card className="transition-all hover:scale-105 hover:shadow-lg bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">            
                  <div className="space-y-2">
                    <h3 className="font-bold text-white">Sophie Martin</h3>
                    <p className="text-sm text-zinc-400">
                      &quot;Service rapide et professionnel. Mon ordinateur fonctionne comme neuf maintenant !&quot;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all hover:scale-105 hover:shadow-lg bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-white">Thomas Dubois</h3>
                    <p className="text-sm text-zinc-400">
                      &quot;Excellent service client et expertise technique. Je recommande vivement !&quot;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
    </div>
  )
}

