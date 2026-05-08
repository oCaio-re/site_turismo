import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock } from 'lucide-react';
import Image from "next/image";

export default function TransladosPage() {


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
            alt="Aeroporto"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
            Transfers de Aeroporto
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 font-light max-w-2xl mx-auto">
            Recepção exclusiva, pontualidade e conforto desde o momento do seu desembarque.
          </p>
        </div>
      </div>

      <main className="flex-grow py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">

          {/* Executive Transfer Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200 text-xs font-bold tracking-widest text-slate-700 uppercase">
                  Padrão VIP
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  A Experiência do <span className="text-primary">Transfer Executivo</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Não se preocupe com filas de táxi ou aplicativos após um longo voo. Nosso serviço executivo garante que um motorista profissional estará aguardando por você no saguão de desembarque, segurando uma placa com seu nome.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">Monitoramento de voo em tempo real para garantir pontualidade, mesmo com atrasos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">Veículos novos, rigorosamente higienizados, com ar-condicionado e seguro total.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">Disponibilidade 24 horas por dia, 7 dias por semana.</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/transfer-executivo-van.png"
                  alt="Experiência de Transfer Executivo VIP"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>



          {/* Frota Premium Section */}
          <div className="mt-24 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
                Nossa Frota Premium
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mix-blend-multiply" />
              <p className="text-slate-600 text-lg">
                Veículos modernos, confortáveis e ecologicamente responsáveis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* BYD Car */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/byd-branco.png"
                    alt="BYD Branco Executivo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    100% Elétrico
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">BYD Dolphin</h3>
                  <p className="text-slate-600">
                    Conforto moderno e tecnologia de ponta em um veículo 100% elétrico. Ideal para translados urbanos ágeis, silenciosos e ecológicos.
                  </p>
                </div>
              </div>

              {/* Nissan Kicks */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/nissan-kicks.png"
                    alt="Nissan Kicks Executivo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Espaço & Conforto
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Nissan Kicks SUV</h3>
                  <p className="text-slate-600">
                    Amplo espaço interno e porta-malas generoso. A escolha ideal para casais ou pequenas famílias com bagagem.
                  </p>
                </div>
              </div>

              {/* Mercedes Sprinter */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/transfer-executivo-van.png"
                    alt="Van Sprinter Executiva"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Alta Capacidade
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Mercedes Sprinter 515</h3>
                  <p className="text-slate-600">
                    Van Sprinter branca 515 com capacidade para 20 lugares. Conforto e espaço para grupos maiores com toda a segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Solutions Section */}
          <div className="mt-32 max-w-7xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center text-white">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-emerald-400 uppercase w-fit mb-6">
                  Soluções B2B
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                  Transporte Corporativo <br />e Fretamento
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Oferecemos logística de transporte dedicada para empresas, eventos corporativos, congressos e transporte diário de executivos e funcionários.
                </p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-slate-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                    Faturamento mensal exclusivo para empresas parcerias.
                  </li>
                  <li className="flex items-center text-slate-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                    Frota padronizada de vans e micro-ônibus de luxo.
                  </li>
                  <li className="flex items-center text-slate-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                    Coordenação logística para grandes grupos e eventos.
                  </li>
                </ul>

                <a href="https://wa.me/5581988763397?text=Olá, gostaria de falar sobre soluções de transporte corporativo." target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white uppercase font-bold tracking-widest text-sm h-14 px-8 rounded-xl transition-colors">
                    Falar com um Consultor B2B
                  </Button>
                </a>
              </div>
              <div className="relative h-96 lg:h-auto min-h-[400px]">
                <Image
                  src="/corporate-transport.png"
                  alt="Transporte Corporativo e Fretamento"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent lg:w-1/3" />
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
