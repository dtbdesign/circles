import React, { useState } from 'react';
import { formQuestions } from '../utils/formQuestions';
import { Check, ArrowRight, Mail } from 'lucide-react';
import Button from './Button';

interface ApplicationFormProps {
  visible: boolean;
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ visible, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!visible) return null;

  const handleOptionSelect = (option: string) => {
    if (currentStep < formQuestions.length) {
      setAnswers({
        ...answers,
        [formQuestions[currentStep].id]: option
      });

      if (currentStep < formQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(formQuestions.length);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qualified = isQualified();
    const disqualified = isDisqualified();
    setSubmitted(true);
    // Only send webhook if not qualified
    if (disqualified) {
      fetch('https://hook.us2.make.com/7d2qkiv5rz31o7xiu942hc7q609oons3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email,
          q: qualified,
          dq: disqualified
        })
      });
    }
  };

  const handleBackClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onClose();
    }
  };

  const getCurrentQuestion = () => {
    if (currentStep < formQuestions.length) {
      return formQuestions[currentStep];
    }
    return null;
  };

  const currentQuestion = getCurrentQuestion();

  // Helper to check if any answer is the third option for its question
  const isQualified = () => {
    return formQuestions.every((q) => answers[q.id] !== q.options[2]);
  };

  // Helper to check if any answer is the third option
  const isDisqualified = () => {
    return formQuestions.some((q) => answers[q.id] === q.options[2]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto animate-slide-up">
        <div className="p-4 sm:p-6 md:p-8">
          {!submitted ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <button 
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-600"
                >
                  &times;
                </button>
              </div>
              
              {currentStep < formQuestions.length ? (
                <>
                  <div className="mb-6">
                    <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / (formQuestions.length + 1)) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-500">Question {currentStep + 1} of {formQuestions.length}</p>
                  </div>
                  
                  <h3 className="text-xl font-medium text-slate-800 mb-6">{currentQuestion?.question}</h3>
                  
                  <div className="space-y-3 mb-6">
                    {currentQuestion?.options.map((option, index) => (
                      <button
                        key={index}
                        className={`w-full text-left p-4 rounded-lg border-2 ${
                          answers[currentQuestion.id] === option 
                            ? 'border-yellow-400 bg-yellow-50' 
                            : 'border-slate-200 hover:border-slate-300'
                        } transition-all duration-200`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                            answers[currentQuestion.id] === option 
                              ? 'bg-yellow-400' 
                              : 'border-2 border-slate-300'
                          }`}>
                            {answers[currentQuestion.id] === option && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <span>{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="flex-1 mt-4 sm:mt-0">
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <Button type="submit" className="w-full text-base md:text-lg py-3 md:py-4" onClick={() => {}}>
                    Submit Application <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
              
              {currentStep > 0 && currentStep <= formQuestions.length && (
                <button
                  onClick={handleBackClick}
                  className="mt-4 text-slate-600 hover:text-slate-900 font-medium"
                >
                  &larr; Back
                </button>
              )}
            </>
          ) : (
            <div className="text-center py-8 sm:py-12 px-2">
              {isDisqualified() ? (
                <>
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Not a match.</h2>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto text-base sm:text-lg">However, if you check your email I'm going to send something over that's perfect for your exact situation</p>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">You're Qualified</h2>
                  <div className="flex justify-center">
                    <Button onClick={() => window.open('https://calendly.com/joshtalbotbowe/strategy-call', '_blank')}>
                      Book a call with me
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;