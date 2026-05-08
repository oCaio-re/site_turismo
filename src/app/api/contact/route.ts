import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nome, E-mail e Mensagem são obrigatórios.' }, { status: 400 });
    }

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables');
      return NextResponse.json({ error: 'Chave da API do Resend não configurada.' }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const data = await resend.emails.send({
      from: 'Contato Nery Tour <onboarding@resend.dev>',
      to: 'mathesnerya99@gmail.com',
      subject: `Novo contato de ${name} pelo site`,
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || 'Não informado'}\nMensagem:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">Novo contato - Nery Tour</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
          <hr style="border-color: #e2e8f0; border-style: solid; margin: 20px 0;" />
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap; color: #334155;">${message}</p>
        </div>
      `
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Erro interno ao enviar e-mail.' }, { status: 500 });
  }
}
