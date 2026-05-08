'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './button';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, children }: LegalModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[80vh] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 fade-in duration-300">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-white/10 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Body */}
        <div className="p-8 overflow-y-auto custom-scrollbar text-slate-300 font-light leading-relaxed space-y-6">
          {children}
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-slate-900/50 backdrop-blur-md flex justify-end">
          <Button 
            onClick={onClose}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-xl font-bold uppercase tracking-wider text-xs"
          >
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
}
