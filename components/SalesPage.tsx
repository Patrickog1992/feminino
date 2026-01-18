import React, { useState, useEffect, useRef } from 'react';
import { Check, Star, Gift, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { UserAnswers } from '../types';
import { MOCKUP_IMAGES, TESTIMONIALS, FAQS } from '../constants';

interface SalesPageProps {
  answers: UserAnswers;
}

const SalesPage: React.FC<SalesPageProps> = ({ answers }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const testimonialRef = useRef<HTMLDivElement>(null);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Testimonial Auto Scroll logic
  useEffect(() => {
    const scrollContainer = testimonialRef.current;
    if (!scrollContainer) return;

    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const scrollAmount = 280; // Scroll roughly one card width
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 4000); 

    return () => clearInterval(scrollInterval);
  }, []);

  // Helper to generate personalized text based on answers
  const getPersonalizedInsights = () => {
    const insights = [];
    
    // 1. Age
    if (answers['age']) {
      insights.push({
        answer: `Sua idade: ${answers['age']}`,
        text: "Nessa fase, o fortalecimento pélvico é essencial para manter a vitalidade e prevenir a flacidez natural."
      });
    }

    // 2. Goals
    const goals = answers['goals'] as string[] || [];
    if (goals.length > 0) {
      const goalMap: {[key:string]: string} = {
        'orgasmos_intensos': 'Ter orgasmos mais intensos',
        'sensibilidade': 'Melhorar a sensibilidade',
        'tonificar': 'Tonificar músculos',
        'desejo': 'Aumentar o desejo'
      };
      const mainGoal = goalMap[goals[0]] || 'Melhorar a vida sexual';
      insights.push({
        answer: `Seu objetivo: ${mainGoal}`,
        text: "Nosso plano foca em técnicas de neuroplasticidade para reacender os receptores de prazer."
      });
    }

    // 3. Confidence
    if (answers['confidence']) {
       insights.push({
        answer: "Confiança física",
        text: "Trabalharemos sua autoimagem para que você se sinta uma deusa, independentemente de qualquer padrão."
      });
    }

    // 4. Orgasm
    if (answers['orgasm_ability']) {
      insights.push({
        answer: "Frequência de orgasmos",
        text: "Identificamos os bloqueios físicos que impedem o clímax e vamos desbloqueá-los na semana 2."
      });
    }

    // 5. Stress
    if (answers['stress']) {
      insights.push({
        answer: `Nível de estresse: ${answers['stress']}/5`,
        text: Number(answers['stress']) > 3 ? "O cortisol alto está matando sua libido. Temos um módulo antiestresse específico para você." : "Manter o estresse baixo é chave para a lubrificação natural."
      });
    }

    // 6. Energy
    if (answers['recent_feeling']) {
      insights.push({
        answer: "Nível de energia",
        text: "Nossos exercícios de respiração vão devolver a vitalidade que a rotina roubou de você."
      });
    }

    return insights.slice(0, 6); 
  };

  const insights = getPersonalizedInsights();

  // Mockup carousel
  const [mockupIndex, setMockupIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setMockupIndex((prev) => (prev + 1) % MOCKUP_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen font-poppins text-gray-800 pb-20 animate-fade-in pt-0">
      
      {/* COUNTDOWN HEADER - Changed to relative (static in flow) so it scrolls away */}
      <div className="bg-red-600 text-white text-center py-3 px-4 relative z-50 shadow-md">
        <p className="font-bold text-sm md:text-base">
          Você acabou de ganhar 70% de desconto que expira em : <span className="text-yellow-300 font-mono text-lg">{formatTime(timeLeft)}</span>
        </p>
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          Aqui está o seu PLANO PESSOAL para melhorar o seu desempenho sexual
        </h1>
        <div className="h-1.5 w-24 bg-brand-500 mx-auto my-4 rounded-full"></div>
        <p className="text-brand-600 font-semibold bg-brand-50 p-3 rounded-lg inline-block text-sm md:text-base border border-brand-100 shadow-sm">
          94% das mulheres com perfis semelhantes ao seu percebem melhora em apenas 2 semanas
        </p>
      </div>

      {/* HEADER IMAGE */}
      <div className="w-full max-w-4xl mx-auto px-0 md:px-6 mb-8">
        <img 
          src="https://i.imgur.com/3U7Zc6a.jpeg" 
          alt="Couple intimate" 
          className="w-full h-auto shadow-md md:rounded-2xl" 
        />
      </div>

      {/* CONTENT START */}
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        
        <div className="prose prose-brand text-gray-700 mb-8">
          <p className="mb-6 text-lg text-center leading-relaxed">
            Nosso algoritmo inteligente criou um plano personalizado com base nos seus objetivos, rotina e necessidades do seu corpo.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Sua Análise Personalizada:</h3>
            {insights.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="min-w-[24px] mt-1 mr-3 text-brand-500">
                  <Check size={20} />
                </div>
                <div>
                  <span className="block font-bold text-gray-800 text-sm">{item.answer}</span>
                  <p className="text-sm text-gray-600 leading-snug">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">O que você vai receber?</h2>
          <ul className="space-y-4">
            {[
              "Um programa avançado de exercícios de Kegel e fortalecimento do assoalho pélvico, com sessões simples e rápidas.",
              "Técnicas para aumentar a sensibilidade, o prazer e facilitar o orgasmo naturalmente.",
              "Exercícios de respiração e consciência corporal para reduzir tensões e aumentar o fluxo de prazer.",
              "Práticas emocionais para fortalecer sua autoestima, confiança e relação com o próprio corpo.",
              "Orientações práticas para melhorar sua intimidade, comunicação e qualidade da sua vida sexual."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start bg-brand-50 p-4 rounded-lg">
                <Check className="text-brand-600 min-w-[24px] mr-3 mt-0.5" />
                <span className="text-sm md:text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup Carousel */}
        <div className="mb-12 relative mx-auto w-full max-w-[280px]">
          <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl z-0 transform scale-105"></div>
          <div className="relative z-10 bg-gray-900 rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-inner aspect-[9/19]">
             <img 
              src={MOCKUP_IMAGES[mockupIndex].src} 
              alt="App Screen" 
              className="w-full h-full object-contain bg-black animate-fade-in transition-opacity duration-500"
              key={mockupIndex}
             />
             <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
                <p className="text-white font-bold text-sm shadow-black drop-shadow-md">{MOCKUP_IMAGES[mockupIndex].alt}</p>
             </div>
          </div>
        </div>

        {/* Testimonials Carousel - Fix: Narrower (260px) and Taller (Vertical flow) */}
        <div className="mb-12">
           <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">O que dizem as NOSSAS ALUNAS</h2>
           
           <div 
            ref={testimonialRef}
            className="flex overflow-x-auto space-x-4 pb-6 scrollbar-hide snap-x scroll-smooth px-4"
           >
             {TESTIMONIALS.map((t, idx) => (
               // Used fixed width w-[260px] to make it narrower than screen, and flex-col to be tall
               <div key={idx} className="min-w-[260px] max-w-[260px] bg-white border border-gray-200 p-6 rounded-xl shadow-md snap-center flex flex-col shrink-0 h-auto min-h-[300px]">
                 <div className="flex flex-col items-center text-center mb-4">
                   <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-3 object-cover" />
                   <div>
                     <p className="font-bold text-base mb-1">{t.name}</p>
                     <div className="flex justify-center text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                     </div>
                   </div>
                 </div>
                 <p className="text-sm text-gray-600 italic mb-4 leading-relaxed flex-grow text-center">"{t.text}"</p>
                 <div className="mt-auto flex items-center justify-center text-xs text-brand-500 font-bold border-t border-gray-100 pt-3 w-full">
                   <ShieldCheck size={14} className="mr-1" /> Compra Verificada
                 </div>
               </div>
             ))}
           </div>
           <p className="text-center text-gray-500 text-sm mt-2">Aprovado por mais de 15 mil alunas</p>
        </div>

        {/* Price Anchor */}
        <div className="bg-brand-900 text-white p-8 rounded-2xl text-center mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-700 rounded-full opacity-50 blur-xl"></div>
          <h2 className="text-2xl font-bold mb-4">E O MELHOR?</h2>
          <p className="text-lg mb-4">Tudo isso custa menos que uma PIZZA.</p>
          <p className="font-light">Invista em você e conquiste o prazer, a confiança e a conexão com o seu corpo que você realmente merece.</p>
        </div>

        {/* Transformation Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🚀 Sua Jornada de Transformação</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-300 before:to-transparent">
            {/* ... Timeline steps ... */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-100 group-[.is-active]:bg-brand-500 text-brand-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">7D</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-brand-50">
                <h3 className="font-bold text-brand-600 mb-2">🌸 7 Dias — Primeira Semana</h3>
                <p className="text-sm text-gray-600">Você começa a sentir mais consciência corporal e mais controle da musculatura íntima.</p>
              </div>
            </div>
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-100 group-[.is-active]:bg-brand-500 text-brand-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">14D</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-brand-50">
                <h3 className="font-bold text-brand-600 mb-2">💖 14 Dias — Segunda Semana</h3>
                <p className="text-sm text-gray-600">Sua postura muda, sua energia aumenta e sua presença fica mais confiante.</p>
              </div>
            </div>
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-100 group-[.is-active]:bg-brand-500 text-brand-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">21D</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-brand-50">
                <h3 className="font-bold text-brand-600 mb-2">🔥 21 Dias — Terceira Semana</h3>
                <p className="text-sm text-gray-600">Os resultados ficam evidentes: mais sensibilidade, mais prazer, mais controle.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bonuses */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6 text-red-500 font-bold animate-pulse">
            <Gift size={24} />
            <span>🎁 Ganhe 5 BÔNUS EXCLUSIVOS</span>
          </div>
          <p className="text-center text-sm font-bold bg-red-100 text-red-600 py-2 rounded mb-6">⏰ ÚLTIMAS 4 VAGAS DISPONÍVEIS</p>

          <div className="space-y-4">
            {[
              { title: "🎀 BÔNUS 1", name: "Plano de Fortalecimento Íntimo em 30 Dias", desc: "Protocolo estratégico para acelerar seus resultados.", val: "97" },
              { title: "🧠 BÔNUS 2", name: "Treinamento Diário de Confiança Feminina", desc: "Fortaleça sua autoestima, presença e segurança emocional.", val: "67" },
              { title: "🌿 BÔNUS 3", name: "Método Antiestresse e Relaxamento Corporal", desc: "Reduza tensões físicas e emocionais.", val: "87" },
              { title: "💎 BÔNUS 4", name: "Aula Especial: Despertar do Prazer Feminino", desc: "Identifique bloqueios emocionais.", val: "127" },
              { title: "🤍 BÔNUS 5", name: "Comunidade Fechada Protocolo Prazer Feminino", desc: "Acesso exclusivo para apoio.", val: "97" },
            ].map((bonus, idx) => (
              <div key={idx} className="bg-white border-l-4 border-brand-400 p-4 rounded shadow-sm">
                <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">{bonus.title}</span>
                <h4 className="font-bold text-gray-900 mt-1">{bonus.name}</h4>
                <p className="text-sm text-gray-600 my-2">{bonus.desc}</p>
                <p className="text-sm font-bold text-gray-400 line-through">Valor: R$ {bonus.val}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-gray-500 line-through">🎯 Valor total dos bônus: R$ 475</p>
            <p className="text-3xl font-extrabold text-green-500 mt-2">🎉 HOJE: GRÁTIS</p>
          </div>
        </div>

        {/* Offer Box - GREEN THEME */}
        <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-500 rounded-3xl p-8 text-center shadow-2xl mb-12 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-brand-700 uppercase tracking-wide mb-4">💖 Oferta Especial</h3>
          <p className="text-gray-500 line-through text-lg">De R$ 497,00</p>
          <p className="text-gray-700 mt-2">Por apenas:</p>
          <div className="flex items-center justify-center text-green-600 font-extrabold my-4">
             <span className="text-2xl mr-1">R$</span>
             <span className="text-6xl">47</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">Pagamento único • Acesso vitalício</p>
          
          {/* GREEN PULSING BUTTON */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full shadow-lg text-xl uppercase tracking-wider animate-pulse">
            QUERO O PROTOCOLO AGORA !
          </button>
        </div>

        {/* Guarantee - FULL TEXT RESTORED */}
        <div className="flex flex-col md:flex-row items-start bg-gray-50 p-6 rounded-xl border border-gray-200 mb-12">
          <div className="mb-4 md:mb-0 md:mr-6 text-brand-600 shrink-0">
            <ShieldCheck size={64} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">🛡️ GARANTIA TOTAL — RISCO ZERO</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Você tem 30 dias completos para colocar o Protocolo Prazer Feminino em prática. Se, por qualquer motivo, você não sentir mais conexão com seu corpo, mais confiança, mais prazer e evolução na sua vida íntima, basta enviar um e-mail ou mensagem — e devolvemos 100% do seu dinheiro.
            </p>
            <p className="text-sm font-bold text-gray-800 mb-2">Sem perguntas. Sem burocracia.</p>
            <p className="text-sm text-gray-600">Seu risco é zero. O seu ganho pode ser transformador.</p>
          </div>
        </div>

        {/* Comparison Table - FULL TEXT RESTORED */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">💰 Compare os Custos Para Melhorar Sua Vida Íntima</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-red-50 p-6 rounded-xl border border-red-100">
               <div className="text-3xl mb-2">💊</div>
               <h4 className="font-bold text-red-800">Remédios e estimulantes (1 mês)</h4>
               <p className="font-bold text-red-600 my-1">R$300 a R$1.500</p>
               <p className="text-xs text-gray-600">Efeito temporário, possíveis efeitos colaterais e nenhuma solução definitiva.</p>
             </div>
             <div className="bg-red-50 p-6 rounded-xl border border-red-100">
               <div className="text-3xl mb-2">👩‍⚕️</div>
               <h4 className="font-bold text-red-800">Consultas e terapias particulares</h4>
               <p className="font-bold text-red-600 my-1">R$400 a R$800 por sessão</p>
               <p className="text-xs text-gray-600">Alto investimento, resultados lentos e acompanhamento limitado.</p>
             </div>
             <div className="bg-red-50 p-6 rounded-xl border border-red-100">
               <div className="text-3xl mb-2">🏋️‍♀️</div>
               <h4 className="font-bold text-red-800">Academia, estúdios e personal</h4>
               <p className="font-bold text-red-600 my-1">R$500 a R$1.200 por mês</p>
               <p className="text-xs text-gray-600">Alto custo, demanda de tempo e foco nem sempre direcionado ao bem-estar íntimo.</p>
             </div>
             <div className="bg-red-50 p-6 rounded-xl border border-red-100">
               <div className="text-3xl mb-2">💉</div>
               <h4 className="font-bold text-red-800">Tratamentos clínicos avançados</h4>
               <p className="font-bold text-red-600 my-1">R$5.000 a R$20.000</p>
               <p className="text-xs text-gray-600">Custos elevados, riscos e resultados imprevisíveis.</p>
             </div>
          </div>
          
          {/* GREEN FLOATING CARD */}
          <div className="mt-6 bg-green-600 text-white p-6 rounded-xl shadow-xl transform scale-105 border-4 border-white">
            <h4 className="text-xl font-bold mb-2">💖 Protocolo Prazer Feminino</h4>
            <p className="text-3xl font-extrabold mb-1">Apenas R$ 47,00</p>
            <p className="text-sm opacity-90">Pagamento único • Sem mensalidades • Acesso vitalício</p>
          </div>
        </div>

        {/* Final Choice - FULL TEXT RESTORED */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Agora você tem 2 escolhas…</h2>
          
          <div className="bg-gray-100 p-6 rounded-xl mb-4 opacity-75">
             <h3 className="font-bold text-gray-800 flex items-center mb-2"><span className="mr-2 text-xl">❌</span> 1. Continuar deixando o tempo passar</h3>
             <p className="text-sm text-gray-600 leading-relaxed">Ignorando seus desejos, sua autoestima e sua conexão com o próprio corpo — esperando que algo mude sozinho.</p>
          </div>

          <div className="bg-brand-50 p-6 rounded-xl border-2 border-brand-500 shadow-lg">
             <h3 className="font-bold text-brand-800 flex items-center mb-2"><span className="mr-2 text-xl">✅</span> 2. Começar hoje com o Protocolo Prazer Feminino</h3>
             <p className="text-sm text-gray-700 leading-relaxed">Usando um método simples, acessível e natural para despertar seu prazer, fortalecer sua confiança e viver sua feminilidade com mais plenitude.</p>
          </div>

          {/* GREEN PULSING BUTTON */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full shadow-lg text-xl uppercase tracking-wider mt-8 animate-pulse">
            QUERO COMEÇAR AGORA
          </button>
        </div>

        {/* FAQ */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full text-left p-4 flex justify-between items-center font-bold text-gray-800 bg-gray-50 hover:bg-gray-100"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.question}
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 text-sm text-gray-600 bg-white leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SalesPage;