/* eslint-disable @next/next/no-img-element */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Cpu, HardDrive, Monitor, Shield, Star, Wrench } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-zinc-800 mx-auto">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Votre expert en dépannage informatique
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Solutions rapides et professionnelles pour tous vos problèmes informatiques. Intervention à domicile ou à distance.
                </p>
              </div>
             
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Hero"
                className="aspect-video overflow-hidden rounded-xl object-cover transition-transform hover:scale-105"
                src="/tech.png?height=400&width=600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
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
                </ul>
              </CardContent>
            </Card>
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

