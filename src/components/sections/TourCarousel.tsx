import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, MapPin } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: "Experiência Completa em Porto de Galinhas",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070&auto=format&fit=crop",
    price: "A partir de R$ 450",
    duration: "8 Horas",
    group: "Até 6 pessoas",
    rating: "5.0 (150+ avaliações)",
    location: "Ipojuca"
  },
  {
    id: 2,
    title: "Tour Histórico Recife Antigo e Olinda",
    image: "https://images.unsplash.com/photo-IM0G4ubdtHo?q=80&w=2072&auto=format&fit=crop",
    price: "A partir de R$ 280",
    duration: "6 Horas",
    group: "Até 6 pessoas",
    rating: "4.9 (95+ avaliações)",
    location: "Recife & Olinda"
  },
  {
    id: 3,
    title: "Praia dos Carneiros & Passeio de Catamarã",
    image: "https://images.unsplash.com/photo-QK-WCKczaOg?q=80&w=2070&auto=format&fit=crop",
    price: "A partir de R$ 380",
    duration: "9 Horas",
    group: "Até 6 pessoas",
    rating: "5.0 (82+ avaliações)",
    location: "Tamandaré"
  },
  {
    id: 4,
    title: "Piscinas Naturais de Maragogi-AL",
    image: "https://images.unsplash.com/photo-rhV28yBkzcY?q=80&w=2070&auto=format&fit=crop",
    price: "A partir de R$ 550",
    duration: "10 Horas",
    group: "Até 6 pessoas",
    rating: "4.9 (110+ avaliações)",
    location: "Maragogi"
  }
];

export function TourCarousel() {
  return (
    <section id="tours" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              A a Z Tours
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              PASSEIOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">PRIVADOS</span>
            </h3>
            <p className="text-slate-600 max-w-xl text-lg font-light">
              Descubra a beleza e a cultura de Portugal com os nossos passeios personalizados em veículos de luxo.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex border-primary/20 text-primary hover:bg-primary hover:text-white transition-all font-bold px-8 h-12 rounded-full shadow-sm">
            Ver Todos os Passeios
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {tours.map((tour) => (
              <CarouselItem key={tour.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="overflow-hidden bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 group rounded-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={tour.image} 
                      alt={tour.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center border border-white/10">
                      <Star className="h-3 w-3 text-white mr-1.5" />
                      {tour.rating}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white text-slate-900 px-4 py-1.5 rounded-full text-sm font-black shadow-xl">
                      {tour.price}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center text-primary mb-3">
                       <MapPin className="h-3.5 w-3.5 mr-1.5" />
                       <span className="text-xs font-bold uppercase tracking-[0.15em]">{tour.location}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-6 line-clamp-2 leading-tight">{tour.title}</h4>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center text-sm text-slate-600 font-medium">
                        <Clock className="h-4 w-4 mr-2" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center text-sm text-slate-600 font-medium">
                        <Users className="h-4 w-4 mr-2" />
                        {tour.group}
                      </div>
                    </div>
                    <Button className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-12 rounded-xl uppercase tracking-widest text-xs">
                      RESERVE AGORA
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12 gap-4 md:hidden">
             <CarouselPrevious variant="outline" size="icon" className="static translate-y-0 rounded-full border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900" />
             <CarouselNext variant="outline" size="icon" className="static translate-y-0 rounded-full border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900" />
          </div>
          <CarouselPrevious className="hidden md:flex -left-6 border-slate-200 hover:bg-slate-100 hover:text-slate-900 bg-white text-slate-900 h-12 w-12 shadow-md" />
          <CarouselNext className="hidden md:flex -right-6 border-slate-200 hover:bg-slate-100 hover:text-slate-900 bg-white text-slate-900 h-12 w-12 shadow-md" />
        </Carousel>
      </div>
    </section>
  );
}
