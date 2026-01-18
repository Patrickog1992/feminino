import React, { useState, useEffect } from 'react';
import { STEPS } from './constants';
import { UserAnswers } from './types';
import QuizStep from './components/QuizStep';
import ChartScreen from './components/ChartScreen';
import LoadingScreen from './components/LoadingScreen';
import SalesPage from './components/SalesPage';

// Helper to preload images
const preloadImage = (src: string) => {
    const img = new Image();
    img.src = src;
};

const App: React.FC = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [answers, setAnswers] = useState<UserAnswers>({});
  
    const currentStep = STEPS[currentStepIndex];

    const goNext = () => {
        window.scrollTo(0,0);
        setCurrentStepIndex(prev => prev + 1);
    };

    const updateAnswer = (val: any) => {
        setAnswers(prev => ({ ...prev, [currentStep.id]: val }));
    };

    // Preload images for the next few steps
    useEffect(() => {
        // Preload next 3 steps to ensure smooth transitions
        const nextSteps = STEPS.slice(currentStepIndex + 1, currentStepIndex + 4);
        nextSteps.forEach(step => {
            if (step.image) {
                preloadImage(step.image);
            }
        });
    }, [currentStepIndex]);

    // Listen for the custom "quiz-next" event from Multi-select steps
    useEffect(() => {
        const handleQuizNext = () => {
            goNext();
        };
        window.addEventListener('quiz-next', handleQuizNext);
        return () => window.removeEventListener('quiz-next', handleQuizNext);
    }, [currentStepIndex]);

    if (currentStep.type === 'chart') {
        return <ChartScreen onNext={goNext} />;
    }
    
    if (currentStep.type === 'loading') {
        return <LoadingScreen onComplete={goNext} />;
    }
    
    if (currentStep.type === 'sales') {
        return <SalesPage answers={answers} />;
    }

    return (
        <QuizStep 
            step={currentStep}
            currentAnswer={answers[currentStep.id]}
            onNext={(val) => {
                if (currentStep.type === 'interstitial') {
                    goNext();
                } else if (currentStep.type === 'multi') {
                    // Just update state, navigation handled by event listener on button click
                    updateAnswer(val);
                } else {
                    // Single/Scale
                    updateAnswer(val);
                    setTimeout(goNext, 150);
                }
            }}
        />
    );
};

export default App;