import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Car, Building2 } from 'lucide-react';

export default function MobilidadePage() {
  const servicos = [
    {
      title: "Serviço de Mobilidade",
      description: "Nossa especialidade é oferecer soluções de transporte confortáveis e eficientes, garantindo que você chegue ao seu destino no Nordeste sempre com pontualidade.",
      Icon: Car
    },
    {
      title: "Mobilidade Exclusiva",
      description: "Serviços dedicados com frota premium para atender com discrição e extremo conforto clientes que exigem o que há de melhor em transporte privado.",
      Icon: Briefcase
    },
    {
      title: "Mobilidade Empresarial",
      description: "Transporte corporativo sob medida. Garantimos a logística da sua equipe para reuniões, eventos e translados do dia a dia com máxima eficiência e segurança.",
      Icon: Building2
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Soluções de Mobilidade
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mix-blend-multiply" />
            <p className="text-slate-600 text-lg md:text-xl font-light mt-6">
              Experiência, pontualidade e a nossa frota dedicada a atender de forma personalizada suas necessidades de locomoção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicos.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group text-center">
                <div className="mx-auto bg-primary/10 p-5 rounded-full mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.Icon className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light mb-8 flex-grow">
                  {item.description}
                </p>
                <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-widest text-xs h-14 rounded-xl">
                  Quero Contratar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
