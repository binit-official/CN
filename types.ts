import { ReactNode } from "react";

export interface SubTopic {
  id: string;
  title: string;
  content: ReactNode;
}

export interface Topic {
  id: string;
  title: string;
  icon?: ReactNode;
  subTopics: SubTopic[];
}

export interface InterviewQuestion {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'OSI/TCP' | 'IP/Addressing' | 'Security' | 'Protocols' | 'Hardware' | 'Routing' | 'Web';
}

export enum ViewMode {
  STUDY = 'STUDY',
  INTERVIEW = 'INTERVIEW'
}