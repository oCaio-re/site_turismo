'use client';

import { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContatoPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full mt-20 flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-emerald-400 uppercase backdrop-blur-md mb-6">
            Atendimento
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 drop-shadow-lg leading-tight">
            Fale <span className="text-emerald-400">Conosco</span>
          </h1>
          <p className="text-lg text-zinc-300 font-light max-w-2xl mx-auto">
            Estamos prontos para atender você e planejar sua próxima viagem com excelência.
          </p>
        </div>
      </div>

      <main className="flex-grow py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-6">
                  Nossos Contatos
                </h2>
                <div className="w-16 h-1 bg-emerald-400 rounded-full mix-blend-multiply mb-8" />
                <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
                  Entre em contato através dos nossos canais de atendimento ou preencha o formulário ao lado. Responderemos o mais breve possível.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 group-hover:bg-emerald-50 transition-colors">
                    <MapPin className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Endereço</h4>
                    <p className="text-slate-600 font-light">Av. Boa Viagem, 123<br/>51020-000 Recife, Pernambuco, Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 group-hover:bg-emerald-50 transition-colors">
                    <Phone className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Telefone / WhatsApp</h4>
                    <p className="text-slate-600 font-light">+55 81 98876-3397</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 group-hover:bg-emerald-50 transition-colors">
                    <Mail className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">E-mail</h4>
                    <p className="text-slate-600 font-light">mathesnerya99@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Box */}
              <div className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl shadow-emerald-600/20 mt-12 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Atendimento Rápido</h3>
                    <p className="text-emerald-100 font-light">Fale diretamente com um consultor via WhatsApp.</p>
                  </div>
                  <a href="https://wa.me/5581988763397?text=Olá, gostaria de falar com a equipe Nery Tour." target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                    <Button className="w-full md:w-auto bg-white text-emerald-700 hover:bg-slate-100 uppercase font-bold tracking-widest text-sm h-14 px-8 rounded-xl shadow-lg">
                      <MessageSquare className="mr-2 h-4 w-4" /> Iniciar Conversa
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative">
              <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase mb-8">
                Envie uma Mensagem
              </h3>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl flex items-start gap-3 animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Mensagem enviada!</h4>
                    <p className="text-sm font-light mt-1">Obrigado por entrar em contato. Retornaremos em breve.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-start gap-3 animate-in fade-in zoom-in duration-300">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Erro ao enviar</h4>
                    <p className="text-sm font-light mt-1">Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou use o WhatsApp.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full h-14 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none text-slate-700 placeholder:text-slate-400 font-light"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full h-14 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none text-slate-700 placeholder:text-slate-400 font-light"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="w-full h-14 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none text-slate-700 placeholder:text-slate-400 font-light"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={5}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none text-slate-700 placeholder:text-slate-400 font-light resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white uppercase font-bold tracking-widest text-sm h-14 rounded-xl transition-colors mt-4 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
