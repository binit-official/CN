import React, { useState } from 'react';
import { InterviewQuestion } from '../types';
import { ChevronDown, ChevronUp, Search, Tag } from 'lucide-react';

interface QuizSectionProps {
  questions: InterviewQuestion[];
}

const QuizSection: React.FC<QuizSectionProps> = ({ questions }) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(questions.map(q => q.category)))];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || q.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Interview Preparation</h2>
        <p className="text-slate-600">50 Frequently Asked Computer Network Questions</p>
      </div>

      <div className="sticky top-0 bg-gray-50 pt-2 pb-4 z-10 space-y-4 mb-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search questions..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
             <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors border ${
                    categoryFilter === cat 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
             >
                {cat}
             </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredQuestions.map((q) => (
          <div 
            key={q.id} 
            className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => toggle(q.id)}
          >
            <div className="flex items-start justify-between p-4 md:p-5">
               <div className="flex-1">
                 <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">#{q.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded border ${
                        q.category === 'General' ? 'text-green-600 border-green-200 bg-green-50' :
                        q.category === 'Security' ? 'text-red-600 border-red-200 bg-red-50' :
                        q.category === 'Protocols' ? 'text-purple-600 border-purple-200 bg-purple-50' :
                        'text-blue-600 border-blue-200 bg-blue-50'
                    }`}>
                        {q.category}
                    </span>
                 </div>
                 <h3 className="font-semibold text-slate-800 text-lg pr-4">{q.question}</h3>
               </div>
               <button className="text-slate-400">
                   {openId === q.id ? <ChevronUp /> : <ChevronDown />}
               </button>
            </div>
            
            {openId === q.id && (
                <div className="px-5 pb-5 pt-0 text-slate-600 border-t border-slate-100 bg-slate-50/50">
                    <div className="mt-4 prose prose-blue">
                        <p>{q.answer}</p>
                    </div>
                </div>
            )}
          </div>
        ))}
        
        {filteredQuestions.length === 0 && (
            <div className="text-center py-12 text-slate-500">
                No questions found matching your search.
            </div>
        )}
      </div>
    </div>
  );
};

export default QuizSection;
