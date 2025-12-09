import React from 'react';
import { Topic, ViewMode } from '../types';
import { BookOpen, HelpCircle, X, GraduationCap } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  topics: Topic[];
  activeTopicId: string;
  activeSubTopicId: string;
  onSelectTopic: (topicId: string, subTopicId: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  setIsOpen, 
  topics, 
  activeTopicId, 
  activeSubTopicId,
  onSelectTopic,
  viewMode,
  setViewMode
}) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={`fixed md:sticky top-0 left-0 h-full w-72 bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 ease-in-out md:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
             <GraduationCap />
             <span>NetPrep Pro</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1 text-slate-500 hover:bg-slate-100 rounded"
          >
            <X size={24} />
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="p-4">
            <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                    onClick={() => {
                        setViewMode(ViewMode.STUDY);
                        setIsOpen(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-colors ${
                        viewMode === ViewMode.STUDY ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    <BookOpen size={16} /> Study
                </button>
                <button
                    onClick={() => {
                        setViewMode(ViewMode.INTERVIEW);
                        setIsOpen(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-colors ${
                        viewMode === ViewMode.INTERVIEW ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    <HelpCircle size={16} /> Prep (50Q)
                </button>
            </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-140px)] p-4 space-y-6">
            {viewMode === ViewMode.STUDY && topics.map(topic => (
                <div key={topic.id}>
                    <div className="flex items-center gap-2 text-slate-800 font-semibold mb-2">
                        {topic.icon}
                        <span>{topic.title}</span>
                    </div>
                    <ul className="space-y-1 ml-2 border-l-2 border-slate-100 pl-2">
                        {topic.subTopics.map(sub => (
                            <li key={sub.id}>
                                <button
                                    onClick={() => {
                                        onSelectTopic(topic.id, sub.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors ${
                                        activeSubTopicId === sub.id && activeTopicId === topic.id
                                            ? 'bg-blue-50 text-blue-700 font-medium'
                                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                                >
                                    {sub.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {viewMode === ViewMode.INTERVIEW && (
                <div className="text-sm text-slate-500 italic p-2 bg-yellow-50 text-yellow-800 rounded">
                    Switching to Interview mode will show a consolidated list of 50 frequently asked questions.
                </div>
            )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
