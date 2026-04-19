import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Share2, MessageSquare, Globe, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-primary font-black text-xl italic">ZT</span>
              </div>
              <span className="text-xl font-bold tracking-[0.2em] text-white">
                MOBILITY
              </span>
            </Link>
            <p className="text-zinc-400 leading-relaxed font-light">
              Elevamos o transporte privado a um novo patamar de excelência em Pernambuco. Conforto, segurança e exclusividade em cada viagem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-slate-900 rounded-full border border-slate-800 text-slate-300 hover:bg-primary hover:text-white transition-all">
                <Share2 className="h-4 w-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 rounded-full border border-slate-800 text-slate-300 hover:bg-primary hover:text-white transition-all">
                <MessageSquare className="h-4 w-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 rounded-full border border-slate-800 text-slate-300 hover:bg-primary hover:text-white transition-all">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              {['Home', 'Transfers', 'Passeios', 'Nossa Frota', 'Sobre Nós'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-primary transition-colors inline-flex items-center group font-light">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 h-px bg-primary mr-0 group-hover:mr-3"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4 text-zinc-400">
                <MapPin className="h-5 w-5 text-zinc-100 shrink-0 mt-0.5" />
                <span className="font-light">Av. Boa Viagem, 123, 51020-000 Recife, Pernambuco, Brasil</span>
              </li>
              <li className="flex items-center space-x-4 text-zinc-400">
                <Phone className="h-5 w-5 text-zinc-100 shrink-0" />
                <span className="font-light">+55 (81) 98765-4321</span>
              </li>
              <li className="flex items-center space-x-4 text-zinc-400">
                <Mail className="h-5 w-5 text-zinc-100 shrink-0" />
                <span className="font-light">info@ztmobility.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Atendimento</h4>
            <p className="text-zinc-500 italic font-light">
              &quot;Disponíveis 24/7 para garantir que a sua viagem seja perfeita.&quot;
            </p>
            <div className="pt-4">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center text-xs font-bold text-zinc-600 tracking-wider">
                  CADASTUR: 12.345678.10.0001-2
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-light">
          <p>© 2026 ZT Mobility. Todos os direitos reservados.</p>
          <div className="flex space-x-8 pb-4 md:pb-0">
            <a href="#" className="hover:text-primary transition-colors">Termos e Condições</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
