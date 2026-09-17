export type TabType = 'about' | 'experience' | 'education' | 'projects' | 'contact' | 'highlights';

export interface Accolade {
  id: string;
  category: string;
  date: string;
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  category: string;
  icon: string;
  highlights: string[];
  tags: string[];
  featuredTag?: string;
}

export interface DegreeItem {
  id: string;
  status: string;
  statusType: 'in-progress' | 'conferred' | 'completing';
  degreeType: string;
  cohortOrDate: string;
  title: string;
  institution: string;
  gpa: string;
  details: {
    primaryLabel: string;
    primaryTitle: string;
    primaryDesc: string;
    primaryIcon: string;
    secondaryLabel: string;
    secondaryTitle: string;
    secondaryDesc: string;
    secondaryIcon: string;
  };
}

export interface AcademicDomain {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  filterCategory: 'Databases' | 'C# & Architecture' | 'Analytics & ERP' | 'Python Logic';
  title: string;
  description: string;
  image?: string;
  previewFooter?: {
    left: string;
    right: string;
    icon?: string;
  };
  callout?: {
    label1: string;
    text1: string;
    label2?: string;
    text2?: string;
  };
  tags: string[];
  details?: {
    overview: string;
    keyAchievements: string[];
    technicalStack: string[];
    architectureNotes: string;
  };
}
