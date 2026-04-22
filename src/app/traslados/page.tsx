import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Plane } from 'lucide-react';

export default function TrasladosPage() {
  const traslados = [
    { from: "Aeroporto", to: "Recife" },
    { from: "Aeroporto", to: "Porto de Galinhas" },
    { from: "Aeroporto", to: "Maragogi" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Transferes Privados
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mix-blend-multiply" />
            <p className="text-slate-600 text-lg md:text-xl font-light mt-6">
              Inicie e termine sua viagem com conforto e tranquilidade. Nossa equipe o aguarda no aeroporto para levá-lo ao seu destino com total segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {traslados.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 hover:-translate-y-1 hover:shadow-2xl transition-all flex flex-col items-center text-center group">
                <div className="bg-primary/10 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <Plane className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.from}</h3>
                <div className="w-1 h-8 border-l-2 border-dashed border-slate-300 my-2"></div>
                <div className="bg-slate-100 p-3 rounded-full mb-4">
                  <MapPin className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6">{item.to}</h3>
                <Button className="w-full uppercase font-bold tracking-widest text-xs h-12 rounded-xl">
                  Consultar Valor
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
