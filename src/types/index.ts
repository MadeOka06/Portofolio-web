export interface ProfileData {
  name: string;
  shortname: string;
  role: string;
  roles: string[];
  education: string;
  campus: string;
  status?: string;
  bio: string;
  avatarUrl: string;
  resumeUrl: string;
  metrics: {
    semester: string;
    projectsCount: string;
    organization: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: 'code' | 'smartphone' | 'database' | 'wrench';
  skills: string[];
  colSpan: string;
  bgBadge: string;
}

export interface SoftSkillItem {
  id: string;
  title: string;
  description: string;
  iconName?: 'users' | 'lightbulb' | 'clock' | 'target' | 'chat' | 'puzzle';
}

export interface ExperienceItem {
  id: number;
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: 'Web App' | 'Mobile App' | 'Sistem Informasi';
  summary: string;
  fullDescription: string;
  features: string[];
  tags: string[];
  gradient: string;
  accentColor: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  idCredential?: string;
  skills: string[];
  status?: string;
  description: string;
  verifyUrl: string;
  image? : string;
}

export interface ContactInfo {
  email: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  githubUrl: string;
  linkedinUrl: string;
}

