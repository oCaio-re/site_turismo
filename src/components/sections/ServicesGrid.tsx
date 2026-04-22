import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Traslados Privados",
    description: "Oferecemos serviços de qualidade, levando você de ou para o Aeroporto Internacional do Recife (REC) com total segurança. Garantimos um excelente começo para suas aventuras em Pernambuco! Reserve seu traslado de forma rápida e simples.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
    linkText: "RESERVAR AGORA"
  },
  {
    title: "Passeios Privados",
    description: "Descubra novos lugares em tours totalmente preparados, com experiências exclusivas incluídas. Viva cada viagem com a Nery Tour, seu parceiro em momentos inesquecíveis pelo litoral e interior de Pernambuco.",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070&auto=format&fit=crop",
    linkText: "RESERVAR AGORA"
  },
  {
    title: "Serviços de Mobilidade",
    description: "Oferecemos soluções de mobilidade para exclusivas e corporativas, garantindo pontualidade para suas reuniões ou treinos. Precisa de transporte rápido em Recife? A Nery Tour leva você.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2072&auto=format&fit=crop",
    linkText: "RESERVAR AGORA"
  }
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
            TODOS OS SERVIÇOS
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mix-blend-multiply" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed font-light text-sm mb-8 flex-grow">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/40 text-primary hover:bg-primary hover:text-white font-semibold transition-all h-12 uppercase tracking-widest text-xs rounded-none"
                >
                  {service.linkText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
