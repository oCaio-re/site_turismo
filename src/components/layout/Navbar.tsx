'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'Traslados', href: '#transfers' },
  { name: 'Passeios', href: '#tours' },
  { name: 'Nossa Frota', href: '#fleet' },
  { name: 'Sobre Nós', href: '#about' },
  { name: 'Contato', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Promotion Bar */}
      <div className="hidden md:flex bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 justify-center items-center tracking-wide">
        Explore Pernambuco com 25% OFF em traslados e tours. Inscreva-se no Pop-Up e receba o código!
      </div>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4'
            : 'top-9 bg-slate-950/40 backdrop-blur-sm py-8'
        }`}
      >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-primary font-black text-xl italic">ZT</span>
          </div>
          <span className="text-xl font-bold tracking-[0.2em] text-white">
            MOBILITY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-zinc-300 transition-colors hover:text-primary uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Header Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-white h-9 w-9 text-zinc-300`}>
              <Globe className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-950 border-white/10 text-zinc-300">
              <DropdownMenuItem className="focus:bg-zinc-900 focus:text-white">Português (BR)</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-zinc-900 focus:text-white">English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="border-primary/20 text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all gap-2 rounded-full px-6 font-bold">
            <Phone className="h-4 w-4" />
            +55 (81) 98765-4321
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-medium py-3 border-b border-white/5 text-zinc-300 hover:text-white last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 pt-6">
              <Button className="w-full bg-white text-black hover:bg-zinc-200 h-12 text-base">Reserve Agora</Button>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 gap-2 h-12 text-base">
                <Globe className="h-4 w-4" /> Idioma
              </Button>
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
