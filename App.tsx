import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import QuizSection from './components/QuizSection';
import { TOPICS, INTERVIEW_QUESTIONS } from './constants';
import { ViewMode } from './types';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.STUDY);
  
  // Navigation State
  const [activeTopicId, setActiveTopicId] = useState(TOPICS[0].id);
  const [activeSubTopicId, setActiveSubTopicId] = useState(TOPICS[0].subTopics[0].id);

  const handleTopicSelect = (tId: string, sId: string) => {
      setActiveTopicId(tId);
      setActiveSubTopicId(sId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentContent = useMemo(() => {
      const topic = TOPICS.find(t => t.id === activeTopicId);
      const sub = topic?.subTopics.find(s => s.id === activeSubTopicId);
      return { topic, sub };
  }, [activeTopicId, activeSubTopicId]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        topics={TOPICS}
        activeTopicId={activeTopicId}
        activeSubTopicId={activeSubTopicId}
        onSelectTopic={handleTopicSelect}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center p-4 bg-white border-b border-slate-200">
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-md"
            >
                <Menu />
            </button>
            <span className="ml-3 font-semibold text-lg text-slate-800">
                {viewMode === ViewMode.STUDY ? currentContent.topic?.title : 'Interview Prep'}
            </span>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto scroll-smooth">
            {viewMode === ViewMode.INTERVIEW ? (
                <QuizSection questions={INTERVIEW_QUESTIONS} />
            ) : (
                <div className="max-w-4xl mx-auto p-4 md:p-12 lg:p-16">
                    <div className="mb-2 text-sm font-bold tracking-wider text-blue-600 uppercase">
                        {currentContent.topic?.title}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                        {currentContent.sub?.title}
                    </h1>
                    
                    <div className="prose prose-lg prose-slate max-w-none">
                        {currentContent.sub?.content}
                    </div>

                    {/* Navigation Footer */}
                    <div className="mt-16 flex justify-between border-t border-slate-200 pt-8">
                         {/* Logic to find prev/next could go here for better UX, simplified for now */}
                         <div className="text-sm text-slate-400">
                            Explore more topics in the sidebar
                         </div>
                    </div>
                </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default App;
