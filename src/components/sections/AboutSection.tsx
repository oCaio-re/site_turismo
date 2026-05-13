import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from "@/components/animations/FadeIn";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-slate-50 text-slate-900 overflow-hidden relative">
      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="relative animate-in slide-in-from-left-12 duration-1000">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 opacity-90 hover:opacity-100 transition-opacity duration-500">
              <Image
                src="/van-road-along-coastal-cliff.jpg"
                alt="Chauffeur Service"
                width={800}
                height={600}
                className="w-full h-[40rem] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="z-100 absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl shadow-2xl hidden md:block border border-primary/20">
              <div className="text-5xl font-black text-white mb-1">+10</div>
              <div className="text-sm font-bold text-primary-foreground/80 uppercase tracking-[0.2em]">Anos de<br />Experiência</div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="space-y-10 animate-in slide-in-from-right-12 duration-1000">
            <div className="space-y-6">
              <h2 className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                Quem Somos
              </h2>
              <h3 className="text-4xl z-100 md:text-5xl font-black tracking-tighter leading-[1.1] text-slate-900">
                COMPROMETIDOS COM A <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">EXCELÊNCIA</span>
              </h3>
              <p className="text-slate-600 text-base leading-relaxed font-light mb-4">
                A Nery Tour nasceu em 2015 com o propósito de oferecer transporte seguro, confortável e confiável. Começando de forma simples, a empresa cresceu conquistando a confiança dos clientes por meio da pontualidade e qualidade no atendimento.
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-light mb-4">
                Em 2024, a empresa deu mais um passo importante em sua evolução ao adquirir um veículo elétrico, reforçando seu compromisso com a inovação e a sustentabilidade.
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-light font-medium italic">
                Hoje, a Nery Tour se destaca por oferecer soluções de transporte para diferentes necessidades, sempre priorizando a segurança e a satisfação de cada passageiro.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 p-2 rounded-full border border-primary/20 shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 tracking-tight text-slate-900">Motoristas Certificados</h4>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">Nossa equipe é altamente profissional, bilíngue e possui vasta experiência nas rodovias e destinos do Nordeste.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 p-2 rounded-full border border-primary/20 shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 tracking-tight text-slate-900">Inovação e Sustentabilidade</h4>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">Em 2024 iniciamos nossa frota elétrica reforçando nosso compromisso sustentável e mantendo a pontualidade e qualidade.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/sobre">
                <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 h-14 rounded-full transition-all tracking-widest uppercase text-xs shadow-lg shadow-primary/20">
                  CONHEÇA NOSSA HISTÓRIA
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
