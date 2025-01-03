import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone,  } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-zinc-800 bg-zinc-900">
      <div className="container px-4 md:px-6 py-12 mx-auto" >
        <div className="grid gap-8 lg:grid-cols-2 ">
          <div className="space-y-4 ">
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Easy-gpu
            </h3>
            <p className="text-sm text-zinc-400">
              Expert en dépannage et maintenance informatique. Service rapide et professionnel.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/EasyGPU/">
              <Button 
                variant="ghost" 
                size="icon"
                className="transition-transform hover:scale-110 hover:text-orange-500"
              >
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              </Link>
              <Link href="https://www.tiktok.com/@easygpu.fr">
              <Button 
                variant="ghost" 
                size="icon"
                className="transition-transform hover:scale-110 hover:text-orange-500"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="sr-only">TikTok</span>
              </Button>
              </Link>
              <Link href="https://www.instagram.com/easygpu.fr/">
              <Button 
                variant="ghost" 
                size="icon"
                className="transition-transform hover:scale-110 hover:text-orange-500"
              >
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="grid gap-2 text-sm text-zinc-400">
              <div className="flex items-center gap-2 transition-colors hover:text-orange-500">
                <Phone className="w-4 h-4" />
                <span>07 86 10 94 59</span>
              </div>
              <div className="flex items-center gap-2 transition-colors hover:text-orange-500">
                <Mail className="w-4 h-4" />
                <span>contact@easygpu.fr</span>
              </div>
              <div className="flex items-center gap-2 transition-colors hover:text-orange-500">
                <MapPin className="w-4 h-4" />
                <span>Le Domaine 44590 derval, 44590 Derval, France</span>
              </div>
            </div>
          </div>
        
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
          <p className="transition-colors hover:text-orange-500">© 2024 Easy-gpu. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

