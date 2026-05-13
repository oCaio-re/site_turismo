import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Map, MapPin, Clock, Camera } from 'lucide-react';
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

export default function PasseiosPage() {
  const passeios = [
    { 
      type: "Cultural & Histórico", 
      from: "Recife", 
      to: "Recife & Olinda",
      image: "/olinda.jpg",
      duration: "Dia Inteiro (~8h)",
      desc: "Mergulhe na rica história de Pernambuco. Visite o Marco Zero, Embaixada dos Bonecos Gigantes e as ladeiras coloridas de Olinda."
    },
    { 
      type: "Paraíso Natural", 
      from: "Recife", 
      to: "Praia dos Carneiros",
      image: "/praia-dos-carneiros.jpg",
      duration: "Dia Inteiro (~8h)",
      desc: "Águas cristalinas, piscinas naturais e a famosa Capela de São Benedito à beira-mar. Um verdadeiro cartão postal."
    },
    { 
      type: "Caribe Brasileiro", 
      from: "Recife", 
      to: "Maragogi (AL)",
      image: "/maragogi.jpg",
      duration: "Dia Inteiro (~10h)",
      desc: "Passeio inesquecível até Alagoas para conhecer as famosas Galés de Maragogi e suas águas azul-turquesa."
    },
    { 
      type: "História e Lazer", 
      from: "Recife", 
      to: "Ilha de Itamaracá",
      image: "/itamaraca.webp",
      duration: "Meio Dia ou Dia Inteiro",
      desc: "Conheça o Forte Orange, o Projeto Peixe-Boi e desfrute das águas tranquilas da ilha e da Coroa do Avião."
    },
    { 
      type: "Relax & Família", 
      from: "Recife", 
      to: "Muro Alto",
      image: "/muro-alto.jpg",
      duration: "Meio Dia (~5h)",
      desc: "Uma imensa piscina natural formada por arrecifes. Perfeita para relaxar, andar de caiaque e SUP com a família."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section para Passeios */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/praia-dos-carneiros.jpg" 
            alt="Praia dos Carneiros" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md mb-6">
              Experiências Inesquecíveis
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-lg">
              Descubra o <span className="text-emerald-400">Paraíso</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-zinc-100 font-medium leading-relaxed drop-shadow-md">
              Roteiros turísticos personalizados, praias paradisíacas e imersão cultural. Sua melhor viagem pelo Nordeste começa aqui.
            </p>
          </FadeIn>
        </div>
      </div>

      <main className="flex-grow py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
              Nossos Roteiros Exclusivos
            </h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto rounded-full mix-blend-multiply" />
            <p className="text-slate-600 text-lg mt-4">
              Passeios privativos com conforto, segurança e motoristas guias que conhecem os melhores segredos da região.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {passeios.map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all flex flex-col group">
                
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.to} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Camera className="h-3 w-3" />
                    {item.type}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-black text-white tracking-tight drop-shadow-lg">
                    {item.to}
                  </h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <MapPin className="h-4 w-4 mr-3 text-emerald-500" />
                      Saída de: {item.from}
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <Clock className="h-4 w-4 mr-3 text-emerald-500" />
                      Duração: {item.duration}
                    </div>
                  </div>

                  <a href={`https://wa.me/5581988763397?text=${encodeURIComponent(`Olá, gostaria de reservar o passeio para ${item.to}.`)}`} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-slate-900 hover:bg-emerald-500 text-white uppercase font-bold tracking-widest text-xs h-12 rounded-xl transition-colors">
                      Reservar Passeio
                    </Button>
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA Section */}
          <FadeIn delay={0.2} className="mt-32 max-w-7xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 z-0 opacity-20">
                <Image 
                  src="/praia-dos-carneiros.jpg" 
                  alt="Background" 
                  fill 
                  className="object-cover"
                />
            </div>
            <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center text-white">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-emerald-400 uppercase w-fit mb-6">
                Roteiros sob Medida
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight max-w-3xl">
                Crie seu Roteiro <span className="text-emerald-400">Personalizado</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl">
                Quer conhecer algum lugar que não está na lista? Nós organizamos passeios sob medida para você e sua família. Entre em contato e peça um orçamento personalizado.
              </p>
              <a href="https://wa.me/5581988763397?text=Olá, gostaria de um roteiro de passeio personalizado." target="_blank" rel="noopener noreferrer">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white uppercase font-bold tracking-widest text-sm h-14 px-10 rounded-xl transition-all hover:scale-105 shadow-xl shadow-emerald-500/20">
                  Solicitar Roteiro sob Medida
                </Button>
              </a>
            </div>
          </FadeIn>

        </div>
      </main>
      <Footer />
    </div>
  );
}
