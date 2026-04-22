import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Map, MapPin } from 'lucide-react';

export default function PasseiosPage() {
  const passeios = [
    { type: "City Tour", from: "Recife", to: "Olinda" },
    { type: "Passeio Privado", from: "Recife", to: "Praia dos Carneiros" },
    { type: "Passeio Privado", from: "Recife", to: "Alagoas" },
    { type: "Passeio Privado", from: "Recife", to: "Itamaracá" },
    { type: "Passeio Privado", from: "Recife", to: "Muro Alto" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Passeios & City Tour
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mix-blend-multiply" />
            <p className="text-slate-600 text-lg md:text-xl font-light mt-6">
              Descubra as maravilhas do Nordeste com nossos tours privados elaborados para proporcionar as melhores experiências nas praias e rotas históricas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {passeios.map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/20 p-2.5 rounded-full">
                    <Map className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-primary uppercase">{item.type}</span>
                </div>
                
                <div className="flex flex-col space-y-4 mb-8 flex-grow">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <MapPin className="h-5 w-5 opacity-70" />
                    <span className="font-medium text-lg">Saída de {item.from}</span>
                  </div>
                  <div className="flex items-center text-slate-400 pl-2">
                    <div className="w-0.5 h-6 bg-slate-300"></div>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-900">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-black text-2xl tracking-tight">{item.to}</span>
                  </div>
                </div>

                <Button className="w-full uppercase font-bold tracking-widest text-xs h-12 rounded-xl">
                  Reservar Agora
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
