export interface VocabItem {
  word: string;
  partOfSpeech: string;
  definitionEn: string;
  definitionTh: string;
  example?: string;
}

export interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  flagCode?: string;
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface LessonSection {
  title: string;
  subtitle?: string;
  content: string[];
  bullets?: string[];
  visualId?: string;
}

export interface UnitContent {
  id: number;
  title: string;
  thaiTitle: string;
  description: string;
  sections: LessonSection[];
}
