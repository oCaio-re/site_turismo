import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-white relative overflow-hidden">
        {/* Decorative Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Nossa História
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mix-blend-multiply" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
                  alt="Chauffeur Service History"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl shadow-2xl hidden md:block border border-primary/20">
                <div className="text-center">
                  <div className="text-sm font-bold text-primary-foreground/80 uppercase tracking-widest mb-1">Desde</div>
                  <div className="text-5xl font-black text-white">2015</div>
                </div>
              </div>
            </div>

            <div className="space-y-8 bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  Trajetória
                </div>
                <h3 className="text-3xl font-black tracking-tighter text-slate-900">
                  Compromisso desde 2015
                </h3>
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>
                  A Nery Tour nasceu em 2015 com o propósito de oferecer transporte seguro, confortável e confiável. Começando de forma simples, a empresa cresceu conquistando a confiança dos clientes por meio da pontualidade e qualidade no atendimento.
                </p>
                <p>
                  Em 2024, a empresa deu mais um passo importante em sua evolução ao adquirir um veículo elétrico, reforçando seu compromisso com a inovação e a sustentabilidade no setor de transporte.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm italic text-slate-800 font-medium">
                  "Hoje, a Nery Tour se destaca por oferecer soluções de transporte para diferentes necessidades, sempre priorizando a segurança e a satisfação de cada passageiro."
                </div>
                <p className="font-bold text-2xl tracking-tighter text-slate-900 pt-4">
                  Nery Tour — seu destino com conforto e confiança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
