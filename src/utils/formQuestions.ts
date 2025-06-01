export interface FormQuestion {
  id: string;
  question: string;
  options: string[];
}

export const formQuestions: FormQuestion[] = [
  {
    id: 'timeline',
    question: 'How soon are you looking to launch or scale your paid community?',
    options: [
      'Right Now',
      'Very Soon',
      'Just exploring — not ready to start'
    ]
  },
  {
    id: 'investment',
    question: 'Are you willing and able to invest in expert support to build this into a real business?',
    options: [
      "Yes, I'm ready to invest in myself",
      "I'm open if it's the right fit",
      "No — I'm not in a place to invest right now"
    ]
  },
  {
    id: 'skill',
    question: 'Which best describes your skill level with content and tech?',
    options: [
      "I'm confident using social media and basic tools",
      "I can follow steps and figure things out with guidance",
      "I get overwhelmed easily and struggle using basic platforms"
    ]
  }
];