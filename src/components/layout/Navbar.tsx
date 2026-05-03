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
  { name: 'Traslados', href: '/traslados' },
  { name: 'Passeios', href: '/passeios' },
  { name: 'Mobilidade', href: '/mobilidade' },
  { name: 'Sobre Nós', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4'
            : 'top-0 bg-slate-950/40 backdrop-blur-sm py-4 md:py-8'
        }`}
      >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-primary font-black text-xl italic">NT</span>
          </div>
          <span className="text-xl font-bold tracking-[0.2em] text-white uppercase">
            Nery Tour
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
          <a href="https://wa.me/5581988763397?text=Olá, gostaria de fazer uma reserva." target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary/20 text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all gap-2 rounded-full px-6 font-bold">
              <Phone className="h-4 w-4" />
              +55 81 98876-3397
            </Button>
          </a>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-semibold py-4 px-4 rounded-xl text-zinc-300 hover:text-primary hover:bg-primary/10 transition-all uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 pb-2 px-2">
              <a href="https://wa.me/5581988763397?text=Olá, gostaria de fazer uma reserva." target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 transition-all">
                  Reserve Agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
