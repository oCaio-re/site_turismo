'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Clock, Award } from 'lucide-react';

export function Hero() {
  const slogans = [
    {
      badge: "Serviço de Mobilidade Premium",
      title: <>Viva o <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">NORDESTE</span></>,
      description: "Transporte privado de luxo em Recife, Porto de Galinhas, Olinda e Carneiros. Descubra a excelência com a Nery Tour."
    },
    {
      badge: "Logística Corporativa Elite",
      title: <>Transfers <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">EXECUTIVOS</span></>,
      description: "Logística premium para empresas e eventos. Pontualidade, segurança e discrição em cada trajeto executivo."
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slogans.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/video-hero-neryTour2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Subtle Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-10" />

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-3xl space-y-10">
          <div className="relative h-[300px] md:h-[400px]">
            {slogans.map((slogan, index) => (
              <div
                key={index}
                className={`absolute inset-0 space-y-6 transition-all duration-1000 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }`}
              >
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold tracking-[0.2em] text-primary uppercase backdrop-blur-sm">
                  {slogan.badge}
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter uppercase">
                  {slogan.title}
                </h1>
                <p className="text-lg md:text-xl text-zinc-300 max-w-xl font-medium leading-relaxed">
                  {slogan.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/translados">
              <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold h-14 px-8 rounded-full group transition-all duration-300 uppercase tracking-widest shadow-lg shadow-primary/20 w-full sm:w-auto">
                Transfers Privados
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/passeios">
              <Button size="xl" variant="outline" className="text-white border-white/30 bg-black/30 hover:bg-white hover:text-black backdrop-blur-md text-lg font-medium h-14 px-8 rounded-full transition-all duration-300 w-full sm:w-auto">
                Passeios e Tours
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-white/10">
            <div className="flex items-center space-x-4 opacity-80 hover:opacity-100 transition-opacity">
              <Shield className="h-6 w-6 text-white" />
              <span className="text-sm font-medium tracking-wide text-zinc-300">Segurança Certificada</span>
            </div>
            <div className="flex items-center space-x-4 opacity-80 hover:opacity-100 transition-opacity">
              <Clock className="h-6 w-6 text-white" />
              <span className="text-sm font-medium tracking-wide text-zinc-300">Pontualidade 24/7</span>
            </div>
            <div className="flex items-center space-x-4 opacity-80 hover:opacity-100 transition-opacity">
              <Award className="h-6 w-6 text-white" />
              <span className="text-sm font-medium tracking-wide text-zinc-300">Nossa Frota de Luxo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <div className="w-1 h-2 bg-white rounded-full mt-1 opacity-80" />
        </div>
      </div>
    </section>
  );
}

