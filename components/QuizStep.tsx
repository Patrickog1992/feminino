import React, { useEffect } from 'react';
import { Step } from '../types';
import { ChevronRight } from 'lucide-react';

interface QuizStepProps {
  step: Step;
  onNext: (value: any) => void; // Updates state
  currentAnswer?: any;
}

const QuizStep: React.FC<QuizStepProps> = ({ step, onNext, currentAnswer }) => {
  
  // Ensure scroll to top on every step change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step.id]);

  // Local handler for when the user clicks an OPTION
  const handleOptionClick = (value: string | number) => {
    if (step.type === 'single' || step.type === 'scale') {
      onNext(value);
    } else if (step.type === 'multi') {
      const current = (currentAnswer as string[]) || [];
      const isSelected = current.includes(value as string);
      let newAnswer;
      
      if (value === 'nenhuma') {
          newAnswer = ['nenhuma'];
      } else {
          const filtered = current.filter(v => v !== 'nenhuma');
          if (isSelected) {
            newAnswer = filtered.filter((v) => v !== value);
          } else {
            newAnswer = [...filtered, value];
          }
      }
      onNext(newAnswer);
    }
  };

  // Helper to check selection
  const isSelected = (value: string | number) => {
    if (Array.isArray(currentAnswer)) {
      return currentAnswer.includes(value);
    }
    return currentAnswer === value;
  };

  // Determine image class based on step
  // The user requested "Você sabia?" (kegel_fact) to be full/uncut ("sem cortar")
  const isKegelFact = step.id === 'kegel_fact';

  return (
    <div className="flex flex-col min-h-screen bg-brand-50 animate-fade-in font-poppins text-gray-800">
      <div className="flex-1 flex flex-col items-center justify-start pt-4 pb-8 px-6 max-w-lg mx-auto w-full">
        
        {/* LOGO */}
        <div className="mb-4">
          <img 
            src="https://i.imgur.com/pe5kv4r.png" 
            alt="Protocolo PRAZER FEMININO Logo" 
            className="w-[100px] h-[100px] object-contain"
            // @ts-ignore
            fetchPriority="high"
            loading="eager"
          />
        </div>

        {step.image && (
          <div className={`mb-6 rounded-2xl overflow-hidden shadow-lg w-full bg-white border-4 border-white ${isKegelFact ? '' : 'max-h-80'}`}>
            <img 
              src={step.image} 
              alt="Illustration" 
              className={`w-full ${isKegelFact ? 'h-auto' : 'h-full max-h-80'} object-contain mx-auto`} 
            />
          </div>
        )}

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center leading-snug">
          {step.title}
        </h2>

        {step.subtitle && (
          <p className="text-gray-600 text-center mb-6 text-sm md:text-base leading-relaxed">
            {step.subtitle}
          </p>
        )}

        {/* Options */}
        {step.options && (
           <div className={`w-full grid gap-3 ${step.type === 'scale' ? 'grid-cols-5' : 'grid-cols-1'}`}>
            {step.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`
                  relative py-4 px-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-center text-center outline-none focus:ring-2 ring-brand-200
                  ${isSelected(option.value) 
                    ? 'border-brand-500 bg-brand-100 text-brand-800 font-bold shadow-md transform scale-[1.02]' 
                    : 'border-white bg-white text-gray-700 hover:border-brand-200 hover:bg-brand-50 shadow-sm'}
                  ${step.type === 'scale' ? 'aspect-square flex-col text-lg font-bold' : 'w-full'}
                `}
              >
                {option.label}
              </button>
            ))}
           </div>
        )}

        {/* Interstitial Button */}
        {step.type === 'interstitial' && (
          <button
            onClick={() => onNext(true)}
            className="w-full mt-8 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105 duration-200 text-lg uppercase tracking-wider flex items-center justify-center"
          >
            {step.buttonText || 'Continuar'} <ChevronRight className="ml-2" />
          </button>
        )}

        {/* Multi-Select Submit Button */}
        {step.type === 'multi' && (
           <button
           onClick={() => window.dispatchEvent(new CustomEvent('quiz-next'))}
           className="w-full mt-8 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105 duration-200 text-lg uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
           disabled={!currentAnswer || currentAnswer.length === 0}
         >
           {step.buttonText || 'Continuar'}
         </button>
        )}
      </div>
    </div>
  );
};

export default QuizStep;