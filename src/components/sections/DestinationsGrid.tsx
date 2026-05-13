import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, Clock } from 'lucide-react';
import { FadeIn } from "@/components/animations/FadeIn";

const destinations = [
  {
    title: "Aeroporto - Recife",
    image: "/marco-zero-de-recife.jpg", 
    duration: "25 min",
    rating: "5.0 (120+ avaliações)"
  },
  {
    title: "Aeroporto - Porto de Galinhas",
    image: "/porto-de-galinhas.webp", 
    duration: "1h 10min",
    rating: "5.0 (250+ avaliações)"
  },
  {
    title: "Aeroporto - Maragogi",
    image: "/maragogi.jpg", 
    duration: "2h 30min",
    rating: "4.9 (180+ avaliações)"
  },
  {
    title: "City tour Recife - Olinda",
    image: "/olinda.jpg", 
    duration: "45 min",
    rating: "4.9 (95+ avaliações)"
  },
  {
    title: "Recife - Praia dos Carneiros",
    image: "/praia-dos-carneiros.jpg", 
    duration: "1h 30min",
    rating: "5.0 (150+ avaliações)"
  },
  {
    title: "Recife - Alagoas",
    image: "/alagoas.webp", 
    duration: "3h",
    rating: "4.9 (130+ avaliações)"
  },
  {
    title: "Recife - Itamaracá",
    image: "/itamaraca.webp", 
    duration: "1h",
    rating: "4.8 (80+ avaliações)"
  },
  {
    title: "Recife - Muro Alto",
    image: "/muro-alto.jpg", 
    duration: "1h 5min",
    rating: "5.0 (140+ avaliações)"
  }
];

export function DestinationsGrid() {
  return (
    <section id="destinations" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn className="space-y-4">
            <h2 className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              Nery Tour
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Translados e <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Passeios</span>
            </h3>
            <p className="text-slate-600 max-w-xl text-lg font-light">
              Descubra as praias e a cultura de Pernambuco e arredores com os nossos trajetos e roteiros personalizados diretamente do Aeroporto.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div 
                className="group relative rounded-2xl overflow-hidden shadow-lg h-96 flex flex-col justify-end cursor-pointer"
              >
                <Image 
                  src={dest.image} 
                  alt={dest.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
                
                {/* Rating Pill */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center border border-white/10 z-20">
                  <Star className="h-3 w-3 text-emerald-400 mr-1.5 fill-emerald-400" />
                  {dest.rating}
                </div>

                {/* Content */}
                <div className="relative z-20 p-8 transform translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center text-sm font-semibold text-emerald-400 mb-2 opacity-90">
                    <Clock className="h-4 w-4 mr-2" />
                    {dest.duration}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 leading-tight">{dest.title}</h4>
                  <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a href={`https://wa.me/5581988763397?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o destino: ${dest.title}`)}`} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline" 
                        className="border-white/50 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black font-semibold transition-all uppercase tracking-widest text-xs h-10 px-6 rounded-full"
                      >
                        Reservar Agora
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
