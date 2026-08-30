export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  plantType: string;
  category: 'cement' | 'steel-dri' | 'pellet' | 'process';
  capacity: string;
  period: string;
  scopeSummary: string;
  deliverables: string[];
  image: string;
  isFeatured?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  capabilities: string[];
  executionHighlights: string[];
  image: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keyExecutionFocus: string[];
  typicalScope: string[];
  image: string;
}

export interface CapabilityItem {
  name: string;
  category: 'lifting' | 'testing' | 'fabrication' | 'cable' | 'site' | 'safety';
  categoryLabel: string;
  description: string;
  application: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: 'advisory' | 'independent' | 'leadership' | 'project-management' | 'site-in-charge' | 'supervisors' | 'legal';
  qualification?: string;
  experienceHighlight?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ELECTRICAL' | 'INSTRUMENTATION' | 'CABLE & TRAY' | 'PANEL ROOMS' | 'PLANT EXECUTION' | 'SAFETY';
  location?: string;
  description: string;
  image: string;
}

export interface EnquiryFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
