export type AppRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'web-development'
  | 'smm'
  | 'seo'
  | 'email-marketing'
  | 'content-writing'
  | 'logo-design'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'refund';

export interface ServiceItem {
  id: AppRoute;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  startingPrice: number;
  features: string[];
  deliverables: string[];
  process: { step: number; name: string; desc: string }[];
  techStack: string[];
  growthOutcome: string;
}

export interface EstimateState {
  serviceId: AppRoute | 'all';
  tier: 'starter' | 'professional' | 'enterprise';
  speed: 'standard' | 'express' | 'rush';
  addons: string[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  avatarSeed: string;
  text: string;
  rating: number;
  metric: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'process' | 'billing';
}
