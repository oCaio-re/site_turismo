'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { LegalModal } from '@/components/ui/LegalModal';

export function Footer() {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image src="/logo_circle.svg" alt="Nery Tour" width={40} height={40} />
              <span className="text-xl font-bold tracking-[0.2em] text-white uppercase">
                Nery Tour
              </span>
            </Link>
            <p className="text-zinc-400 leading-relaxed font-light">
              Desde 2015 o seu destino com conforto e confiança. Transporte seguro e confortável adaptado às suas necessidades.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nery.tour/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 rounded-full border border-slate-800 text-slate-300 hover:bg-primary hover:text-white transition-all">
                <Camera className="h-4 w-4" />              </a>
              <a href="https://wa.me/5581988763397?text=Olá, gostaria de saber mais sobre os serviços da Nery Tour." target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 rounded-full border border-slate-800 text-slate-300 hover:bg-primary hover:text-white transition-all">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-400 hover:text-primary transition-colors inline-flex items-center group font-light">
                  <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 h-px bg-primary mr-0 group-hover:mr-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/translados" className="text-slate-400 hover:text-primary transition-colors inline-flex items-center group font-light">
                  <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 h-px bg-primary mr-0 group-hover:mr-3"></span>
                  Translados
                </Link>
              </li>
              <li>
                <Link href="/passeios" className="text-slate-400 hover:text-primary transition-colors inline-flex items-center group font-light">
                  <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 h-px bg-primary mr-0 group-hover:mr-3"></span>
                  Passeios
                </Link>
              </li>
              <li>
                <Link href="/mobilidade" className="text-slate-400 hover:text-primary transition-colors inline-flex items-center group font-light">
                  <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 h-px bg-primary mr-0 group-hover:mr-3"></span>
                  Mobilidade
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-slate-400 hover:text-primary transition-colors inline-flex items-center group font-light">
                  <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 h-px bg-primary mr-0 group-hover:mr-3"></span>
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-5">
              <li className="flex items-center space-x-4 text-zinc-400">
                <Phone className="h-5 w-5 text-zinc-100 shrink-0" />
                <span className="font-light">+55 81 98876-3397</span>
              </li>
              <li className="flex items-center space-x-4 text-zinc-400">
                <Mail className="h-5 w-5 text-zinc-100 shrink-0" />
                <span className="font-light">nerytour.empresa@gmail.com</span>
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
                <div className="flex items-center text-xs font-bold text-zinc-600 tracking-wider uppercase">
                  CADASTUR: 22.109.459/0001-60
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-light">
          <p>© 2026 Nery Tour. Todos os direitos reservados.</p>
          <div className="flex space-x-8 pb-4 md:pb-0">
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Termos e Condições
            </button>
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      <LegalModal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
        title="Termos e Condições"
      >
        <div className="space-y-4">
          <h4 className="text-white font-bold">1. Introdução</h4>
          <p>Ao utilizar os serviços da Nery Tour, você concorda com os termos aqui estabelecidos. Nossos serviços incluem transporte executivo, translados e roteiros turísticos.</p>

          <h4 className="text-white font-bold">2. Reservas e Pagamentos</h4>
          <p>As reservas devem ser feitas com antecedência mínima de 24 horas. O pagamento pode ser realizado via PIX, cartão de crédito ou faturamento (exclusivo para empresas).</p>

          <h4 className="text-white font-bold">3. Cancelamentos</h4>
          <p>Cancelamentos realizados com mais de 12 horas de antecedência não sofrerão taxas. Para cancelamentos com menos de 12 horas, poderá ser retida uma taxa de 30% do valor total.</p>

          <h4 className="text-white font-bold">4. Responsabilidades</h4>
          <p>A Nery Tour compromete-se com a segurança e pontualidade, mas não se responsabiliza por atrasos causados por fatores externos imprevistos (trânsito excessivo, acidentes de terceiros ou condições climáticas extremas).</p>

          <h4 className="text-white font-bold">5. Conduta do Passageiro</h4>
          <p>É obrigatório o uso de cinto de segurança. Não é permitido fumar ou consumir bebidas alcoólicas no interior dos veículos.</p>
        </div>
      </LegalModal>

      {/* Privacy Policy Modal */}
      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title="Política de Privacidade"
      >
        <div className="space-y-4">
          <h4 className="text-white font-bold">1. Coleta de Informações</h4>
          <p>Coletamos apenas os dados necessários para a prestação de nossos serviços, como nome, e-mail e telefone fornecidos via formulário de contato ou WhatsApp.</p>

          <h4 className="text-white font-bold">2. Uso dos Dados</h4>
          <p>Seus dados são utilizados exclusivamente para processar suas reservas, responder a consultas e melhorar a sua experiência com a Nery Tour.</p>

          <h4 className="text-white font-bold">3. Proteção e Segurança</h4>
          <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado ou uso indevido. Não compartilhamos seus dados com terceiros para fins publicitários.</p>

          <h4 className="text-white font-bold">4. Cookies</h4>
          <p>Nosso site utiliza cookies básicos para melhorar a navegação e entender como os usuários interagem com nosso conteúdo.</p>

          <h4 className="text-white font-bold">5. Seus Direitos</h4>
          <p>Você pode solicitar a qualquer momento a exclusão ou atualização de seus dados pessoais de nossa base de contatos.</p>
        </div>
      </LegalModal>
    </footer>
  );
}
