import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Leaf } from 'lucide-react';
import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full mt-20 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2069&auto=format&fit=crop" 
            alt="Nery Tour Background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-emerald-400 uppercase backdrop-blur-md mb-6">
            Nossa Essência
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-lg leading-tight">
            Conheça a <span className="text-emerald-400">Nery Tour</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed drop-shadow-md">
            Sua parceira de confiança em mobilidade e turismo no Nordeste. Tradição, conforto e inovação em cada quilômetro rodado.
          </p>
        </div>
      </div>

      <main className="flex-grow py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Nossa História */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-32">
            <div className="relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/sobre-historia.png"
                  alt="Nery Tour — Uma Década de Compromisso"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-emerald-500 p-8 rounded-3xl shadow-2xl hidden md:block border border-emerald-400 z-20">
                <div className="text-center">
                  <div className="text-sm font-bold text-emerald-100 uppercase tracking-widest mb-1">Desde</div>
                  <div className="text-5xl font-black text-white">2015</div>
                </div>
              </div>
            </div>

            <div className="space-y-8 bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase">
                  Trajetória
                </div>
                <h3 className="text-3xl font-black tracking-tighter text-slate-900">
                  Uma Década de Compromisso
                </h3>
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>
                  A Nery Tour nasceu em 2015 com o propósito de oferecer transporte seguro, confortável e confiável. Começando de forma simples, a empresa cresceu conquistando a confiança dos clientes por meio da pontualidade e qualidade no atendimento.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm italic text-slate-800 font-medium">
                  "Hoje, a Nery Tour se destaca por oferecer soluções de transporte para diferentes necessidades, sempre priorizando a segurança e a satisfação de cada passageiro."
                </div>
                <p className="font-bold text-2xl tracking-tighter text-slate-900 pt-4">
                  Nery Tour — seu destino com conforto e confiança.
                </p>
              </div>
            </div>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="max-w-6xl mx-auto mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
                Nossos Pilares
              </h2>
              <div className="w-16 h-1 bg-emerald-400 mx-auto rounded-full mix-blend-multiply" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 group">
                <div className="mx-auto bg-slate-50 p-5 rounded-full mb-6 w-fit group-hover:bg-emerald-50 transition-colors duration-300">
                  <Target className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Missão</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Oferecer transporte seguro, confortável e confiável, superando as expectativas de nossos clientes em cada trajeto e garantindo experiências memoráveis.
                </p>
              </div>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 group">
                <div className="mx-auto bg-slate-50 p-5 rounded-full mb-6 w-fit group-hover:bg-emerald-50 transition-colors duration-300">
                  <Eye className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Visão</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Ser a empresa de mobilidade e turismo de referência no Nordeste, reconhecida nacionalmente pela excelência, pontualidade e inovação constante.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 group">
                <div className="mx-auto bg-slate-50 p-5 rounded-full mb-6 w-fit group-hover:bg-emerald-50 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Valores</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Segurança em primeiro lugar, pontualidade britânica, respeito irrestrito ao cliente, ética profissional e compromisso com a sustentabilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Sustentabilidade */}
          <div className="max-w-6xl mx-auto mb-32 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-12 md:p-16 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold tracking-widest text-emerald-400 uppercase w-fit mb-6">
                  <Leaf className="h-4 w-4" /> Inovação Verde
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 leading-tight">
                  Compromisso com o <span className="text-emerald-400">Futuro</span>
                </h2>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed font-light">
                  Acreditamos que a mobilidade de luxo pode e deve andar de mãos dadas com a responsabilidade ambiental.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  Em 2024, a empresa deu mais um passo importante em sua evolução ao adquirir um veículo 100% elétrico (BYD Dolphin), reforçando seu compromisso com a inovação, a redução da pegada de carbono e a sustentabilidade no setor de transporte.
                </p>
              </div>
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <Image 
                  src="/byd-branco.png" 
                  alt="Veículo Elétrico BYD" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent lg:w-1/2" />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-5xl mx-auto bg-emerald-600 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 z-0 opacity-20">
              <Image 
                src="/praia-dos-carneiros.jpg" 
                alt="Praia dos Carneiros - Nordeste Brasileiro" 
                fill 
                className="object-cover grayscale opacity-40"
              />
            </div>
            <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center text-white">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                Pronto para viajar com a <span className="text-slate-900">Nery Tour?</span>
              </h2>
              <p className="text-emerald-50 text-lg mb-10 leading-relaxed max-w-2xl">
                Seja para um transfer do aeroporto, um passeio inesquecível pelas praias do Nordeste ou mobilidade corporativa, nós estamos prontos para lhe atender.
              </p>
              <a href="https://wa.me/5581988763397?text=Olá, gostaria de saber mais sobre os serviços da Nery Tour." target="_blank" rel="noopener noreferrer">
                <Button className="bg-slate-900 hover:bg-black text-white uppercase font-bold tracking-widest text-sm h-14 px-10 rounded-xl transition-all hover:scale-105 shadow-xl shadow-slate-900/20">
                  Fale com Nossa Equipe
                </Button>
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
