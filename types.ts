export type QuestionType = 'single' | 'multi' | 'scale' | 'interstitial' | 'chart' | 'loading' | 'sales';

export interface Option {
  label: string;
  value: string | number;
}

export interface Step {
  id: string;
  type: QuestionType;
  title?: string; // HTML allowed
  subtitle?: string; // HTML allowed
  image?: string;
  options?: Option[];
  placeholder?: string; // For special instructions
  buttonText?: string;
}

export interface UserAnswers {
  [key: string]: string | string[] | number;
}
