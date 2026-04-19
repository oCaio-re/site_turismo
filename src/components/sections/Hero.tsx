import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Clock, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full opacity-60 overflow-hidden pointer-events-none">
        <iframe 
          src="https://www.youtube.com/embed/1u4j1nO46l8?autoplay=1&mute=1&controls=0&loop=1&playlist=1u4j1nO46l8&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></iframe>
      </div>

      {/* Deep Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-3xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold tracking-[0.2em] text-primary uppercase backdrop-blur-sm">
              Serviço de Mobilidade Premium
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter uppercase">
              Viva o <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">NORDESTE</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-xl font-medium leading-relaxed">
              Transporte privado de luxo em Recife, Porto de Galinhas, Olinda e Carneiros. Descubra a excelência com a ZT Mobility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold h-14 px-8 rounded-full group transition-all duration-300 uppercase tracking-widest shadow-lg shadow-primary/20">
              Transfers Privados
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="xl" variant="outline" className="text-white border-white/30 bg-black/30 hover:bg-white hover:text-black backdrop-blur-md text-lg font-medium h-14 px-8 rounded-full transition-all duration-300">
              Passeios e Tours
            </Button>
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

