import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartScreenProps {
  onNext: () => void;
}

const ChartScreen: React.FC<ChartScreenProps> = ({ onNext }) => {
  const today = new Date();
  const oneMonthLater = new Date(today);
  oneMonthLater.setDate(today.getDate() + 30);
  
  const dateString = oneMonthLater.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

  const data = [
    { name: 'Hoje', score: 30 },
    { name: 'Sem 1', score: 45 },
    { name: 'Sem 2', score: 65 },
    { name: 'Sem 3', score: 85 },
    { name: '1 Mês', score: 100 },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-6 pt-12 pb-8 bg-white max-w-lg mx-auto w-full animate-fade-in">
      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
        O último plano que você precisará para melhorar sua vida sexual
      </h2>
      
      <p className="text-gray-600 text-center mb-4">
        Com base nas suas respostas, estimamos que você pode alcançar seu desempenho máximo até: <br/>
        <span className="font-bold text-brand-600 text-lg">{dateString}</span>
      </p>

      <div className="bg-brand-50 p-4 rounded-lg w-full mb-8 shadow-sm border border-brand-100">
        <h3 className="text-center font-bold text-brand-700 mb-4 uppercase text-sm tracking-wide">
          VOCÊ VAI MELHORAR SEU DESEMPENHO EM APENAS 1 MÊS
        </h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#fce7f3" />
              <XAxis dataKey="name" tick={{fontSize: 10, fill: '#831843'}} axisLine={false} tickLine={false} />
              <YAxis hide domain={[0, 110]} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                cursor={{ stroke: '#db2777', strokeWidth: 1 }}
              />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="#db2777" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorScore)" 
                animationDuration={2000}
                label={{ position: 'top', value: 'LIBIDO', fill: '#db2777', fontSize: 12, fontWeight: 'bold', content: (props: any) => {
                    const { x, y, index, value } = props;
                    return index === 4 ? <text x={x} y={y - 10} fill="#db2777" textAnchor="middle" fontWeight="bold">LIBIDO MÁXIMA</text> : null;
                }}}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105 duration-200 text-lg uppercase tracking-wider"
      >
        Continuar
      </button>
    </div>
  );
};

export default ChartScreen;