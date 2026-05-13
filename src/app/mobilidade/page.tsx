import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Car, Building2, Shield, Clock, Star } from 'lucide-react';
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

export default function MobilidadePage() {
  const servicos = [
    {
      title: "Mobilidade Pessoal",
      description: "Soluções de transporte ágeis e confortáveis para o seu dia a dia, garantindo pontualidade e segurança em todos os seus compromissos no Nordeste.",
      Icon: Car
    },
    {
      title: "Serviço Executivo",
      description: "Transporte dedicado com frota premium, ideal para clientes que exigem discrição, conforto superior e um padrão de atendimento irretocável.",
      Icon: Star
    },
    {
      title: "Logística Corporativa",
      description: "Planejamento e execução de transporte para empresas. Garantimos a locomoção eficiente da sua equipe para reuniões, congressos e eventos corporativos.",
      Icon: Building2
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/corporate-transport.png" 
            alt="Mobilidade Corporativa" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-emerald-400 uppercase backdrop-blur-md mb-6">
              Alto Padrão
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-lg leading-tight">
              Mobilidade <span className="text-emerald-400">Inteligente</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed drop-shadow-md">
              Excelência, discrição e conforto absoluto para seus deslocamentos corporativos e pessoais.
            </p>
          </FadeIn>
        </div>
      </div>

      <main className="flex-grow py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Services Section */}
          <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
              Nossas Soluções
            </h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto rounded-full mix-blend-multiply" />
            <p className="text-slate-600 text-lg mt-4">
              Adaptamos nossos serviços para atender perfeitamente à sua necessidade, seja para uma viagem rápida ou um planejamento logístico complexo.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            {servicos.map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col group text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-emerald-400 transition-colors duration-500" />
                <div className="mx-auto bg-slate-50 p-5 rounded-full mb-8 group-hover:bg-emerald-50 transition-colors duration-300">
                  <item.Icon className="h-10 w-10 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light mb-8 flex-grow">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Diferenciais Section */}
          <FadeIn className="max-w-6xl mx-auto mb-24">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[400px]">
                  <Image 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Direção profissional Nery Tour" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/10" />
                </div>
                <div className="p-12 md:p-16 flex flex-col justify-center">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-6">
                    O Padrão <span className="text-emerald-500">Nery Tour</span>
                  </h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Não somos apenas uma empresa de transporte. Somos parceiros estratégicos para a sua mobilidade, garantindo que cada trajeto seja uma extensão do seu escritório ou do seu momento de descanso.
                  </p>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                        <Shield className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Segurança e Discrição</h4>
                        <p className="text-slate-600 text-sm">Motoristas altamente treinados, frotas rastreadas e sigilo absoluto sobre suas rotas e passageiros.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                        <Star className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Frota Premium</h4>
                        <p className="text-slate-600 text-sm">Veículos modernos, rigorosamente higienizados, com Wi-Fi, água e ar-condicionado de alto desempenho.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                        <Clock className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Disponibilidade 24/7</h4>
                        <p className="text-slate-600 text-sm">Prontidão para atender demandas urgentes ou programadas a qualquer hora do dia ou da noite.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={0.2} className="max-w-5xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
            </div>
            <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center text-white">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-emerald-400 uppercase w-fit mb-6">
                Atendimento Personalizado
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                Pronto para otimizar sua <span className="text-emerald-400">Mobilidade?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl">
                Fale com nossa equipe e receba uma proposta customizada para as suas necessidades pessoais ou empresariais. Estamos prontos para superar suas expectativas.
              </p>
              <a href="https://wa.me/5581988763397?text=Olá, gostaria de falar com um consultor sobre soluções de mobilidade." target="_blank" rel="noopener noreferrer">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white uppercase font-bold tracking-widest text-sm h-14 px-10 rounded-xl transition-all hover:scale-105 shadow-xl shadow-emerald-500/20">
                  Falar com um Consultor
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
