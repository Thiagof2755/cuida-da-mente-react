export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
