import {
  Brain,
  Cpu,
  Database,
  Github,
  Globe,
  LineChart,
  Network,
  Shield,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export interface Speaker {
  name: string;
  role: string;
  company: string;
  bio: string;
  photo: string;
  topic: string;
}

export const speakers: Speaker[] = [
  {
    name: 'Dr. Elena Vasquez',
    role: 'Director of AI Research',
    company: 'DeepMind Labs',
    bio: 'Pioneer in multimodal foundation models. Led the team behind several breakthrough language-vision architectures now used in production across Fortune 500 companies.',
    photo: 'https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    topic: 'The Next Frontier of Multimodal Reasoning',
  },
  {
    name: 'Marcus Chen',
    role: 'Chief Technology Officer',
    company: 'NVIDIA',
    bio: 'Architect of next-generation GPU clusters powering the largest training runs in history. 15 years scaling distributed systems from research to planet-scale.',
    photo: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    topic: 'Compute at the Edge of Possibility',
  },
  {
    name: 'Aisha Okonkwo',
    role: 'Head of Responsible AI',
    company: 'Anthropic',
    bio: 'Leading research on alignment, interpretability, and safety of frontier models. Former Stanford fellow focused on fairness in machine learning deployments.',
    photo: 'https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    topic: 'Building Trustworthy AI at Scale',
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'VP of Applied Research',
    company: 'OpenAI',
    bio: 'Drove the development of reasoning-enhanced models. Published 40+ papers on reinforcement learning and chain-of-thought architectures.',
    photo: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    topic: 'Reasoning Models: From Theory to Deployment',
  },
  {
    name: 'Sofia Lindqvist',
    role: 'Founder & CEO',
    company: 'Hugging Face',
    bio: 'Democratizing open-source AI. Built the largest platform for model sharing, now hosting over 500,000 models used by millions of developers worldwide.',
    photo: 'https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    topic: 'The Open Source AI Revolution',
  },
  {
    name: 'James Whitfield',
    role: 'Principal Research Scientist',
    company: 'Meta AI',
    bio: 'Specialist in large-scale recommendation systems and personalization. His work powers content discovery for over 3 billion users across Meta platforms.',
    photo: 'https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    topic: 'Personalization in the Age of Generative AI',
  },
];

export interface AgendaSession {
  time: string;
  title: string;
  speaker: string;
  type: 'keynote' | 'talk' | 'panel' | 'workshop' | 'break';
  day: number;
}

export const agenda: AgendaSession[] = [
  // Day 1
  { time: '09:00', title: 'Opening Keynote: The State of AI in 2026', speaker: 'Dr. Elena Vasquez', type: 'keynote', day: 1 },
  { time: '10:15', title: 'Compute at the Edge of Possibility', speaker: 'Marcus Chen', type: 'talk', day: 1 },
  { time: '11:00', title: 'Networking Break & Virtual Lounge', speaker: '', type: 'break', day: 1 },
  { time: '11:30', title: 'Reasoning Models: From Theory to Deployment', speaker: 'Dr. Rajesh Kumar', type: 'talk', day: 1 },
  { time: '12:30', title: 'Panel: The Open Source vs. Closed Source Debate', speaker: 'Sofia Lindqvist + Guests', type: 'panel', day: 1 },
  { time: '13:30', title: 'Lunch Break & Community Rooms', speaker: '', type: 'break', day: 1 },
  { time: '14:30', title: 'Workshop: Building RAG Pipelines with Open Models', speaker: 'Sofia Lindqvist', type: 'workshop', day: 1 },
  { time: '16:00', title: 'Building Trustworthy AI at Scale', speaker: 'Aisha Okonkwo', type: 'talk', day: 1 },
  // Day 2
  { time: '09:00', title: 'Keynote: Personalization in the Age of Generative AI', speaker: 'James Whitfield', type: 'keynote', day: 2 },
  { time: '10:15', title: 'The Next Frontier of Multimodal Reasoning', speaker: 'Dr. Elena Vasquez', type: 'talk', day: 2 },
  { time: '11:00', title: 'Networking Break & Virtual Lounge', speaker: '', type: 'break', day: 2 },
  { time: '11:30', title: 'Workshop: Fine-Tuning Models on Consumer GPUs', speaker: 'Marcus Chen', type: 'workshop', day: 2 },
  { time: '13:00', title: 'Lunch Break & Community Rooms', speaker: '', type: 'break', day: 2 },
  { time: '14:00', title: 'Panel: AI Safety and Regulation in 2026', speaker: 'Aisha Okonkwo + Guests', type: 'panel', day: 2 },
  { time: '15:30', title: 'Closing Keynote: The Road Ahead', speaker: 'Dr. Rajesh Kumar', type: 'keynote', day: 2 },
];

export interface PricingTier {
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  badge?: string;
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Early Bird',
    price: 49,
    originalPrice: 149,
    description: 'Limited first release — ends February 1.',
    features: [
      'Access to all live sessions',
      'On-demand recordings for 6 months',
      'Virtual networking lounge',
      'Digital swag pack',
    ],
    badge: 'Best Value',
    highlighted: false,
  },
  {
    name: 'Pro Pass',
    price: 129,
    originalPrice: 299,
    description: 'Full access with workshops and community.',
    features: [
      'Everything in Early Bird',
      'All hands-on workshops',
      '1:1 mentor matching',
      'Private Discord community',
      'Certificate of completion',
    ],
    badge: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Executive',
    price: 399,
    originalPrice: 799,
    description: 'For teams and leaders driving AI strategy.',
    features: [
      'Everything in Pro Pass',
      'Executive roundtable access',
      'Team license (up to 5 seats)',
      'Priority Q&A with speakers',
      'Custom AI strategy session',
    ],
    highlighted: false,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'When and where does the conference take place?',
    answer: 'AI Horizon 2026 is a fully virtual conference taking place across two days, March 18–19, 2026. All sessions are streamed live online and recorded for on-demand viewing, so you can attend from anywhere in the world.',
  },
  {
    question: 'Will sessions be recorded?',
    answer: 'Yes. Every session is recorded and made available to registered attendees through the on-demand library. Early Bird and Pro Pass holders get 6 months of access; Executive pass holders get lifetime access.',
  },
  {
    question: 'Do I need a technical background to attend?',
    answer: 'Not at all. The conference is designed for a wide audience — from executives exploring AI strategy to engineers building production systems. Sessions are labeled by experience level so you can choose what fits you best.',
  },
  {
    question: 'Can I get a refund if I cannot attend?',
    answer: 'Full refunds are available up to 30 days before the event (February 16, 2026). After that, your registration can be transferred to a colleague at no cost, or converted to on-demand access with the full recording library.',
  },
  {
    question: 'Is there a group discount available?',
    answer: 'Yes. Groups of 5 or more receive 20% off any pass tier. The Executive pass already includes 5 seats. Contact our team for larger group or enterprise arrangements.',
  },
  {
    question: 'How do the virtual workshops work?',
    answer: 'Workshops are interactive, instructor-led sessions with limited seating to keep them hands-on. You will receive a setup guide and any required materials one week before the event. Pro Pass and Executive registrations include workshop access.',
  },
];

export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { icon: Sparkles, label: 'Expert Speakers', value: '24+' },
  { icon: Globe, label: 'Countries Represented', value: '60+' },
  { icon: LineChart, label: 'Sessions & Workshops', value: '40+' },
  { icon: Network, label: 'Expected Attendees', value: '15K' },
];

export interface TopicTag {
  icon: LucideIcon;
  label: string;
}

export const topics: TopicTag[] = [
  { icon: Brain, label: 'Foundation Models' },
  { icon: Cpu, label: 'AI Infrastructure' },
  { icon: Shield, label: 'AI Safety & Alignment' },
  { icon: Database, label: 'RAG & Data Pipelines' },
  { icon: Network, label: 'Agent Architectures' },
  { icon: Github, label: 'Open Source AI' },
];

// Conference date: March 18, 2026, 09:00 AM UTC
export const CONFERENCE_DATE = new Date('2026-03-18T09:00:00Z').getTime();
