"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element?.getBoundingClientRect().top ?? 0
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <div className="mr-8 flex items-center space-x-2">
          <Link 
            href="/" 
            className="flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="Easy GPU Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Easy-gpu
            </span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="relative transition-colors hover:text-orange-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="relative transition-colors hover:text-orange-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="relative transition-colors hover:text-orange-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative transition-colors hover:text-orange-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              Contact
            </button>
          </div>
          <div className="flex items-center space-x-4">
           
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-zinc-900 border-zinc-800">
                <div className="flex flex-col space-y-4 mt-8">
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="flex items-center py-2 text-lg font-semibold transition-colors hover:text-orange-500"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="flex items-center py-2 text-lg font-semibold transition-colors hover:text-orange-500"
                  >
                    À propos
                  </button>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="flex items-center py-2 text-lg font-semibold transition-colors hover:text-orange-500"
                  >
                    Témoignages
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center py-2 text-lg font-semibold transition-colors hover:text-orange-500"
                  >
                    Contact
                  </button>
              
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}

