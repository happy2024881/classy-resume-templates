
import { Template } from '@/types/resume';
import { ClassicTemplate } from '@/components/templates/ClassicTemplate';
import { ModernTemplate } from '@/components/templates/ModernTemplate';
import { MinimalTemplate } from '@/components/templates/MinimalTemplate';
import { CreativeTemplate } from '@/components/templates/CreativeTemplate';
import { ExecutiveTemplate } from '@/components/templates/ExecutiveTemplate';
import { TechTemplate } from '@/components/templates/TechTemplate';
import { ElegantTemplate } from '@/components/templates/ElegantTemplate';
import { CompactTemplate } from '@/components/templates/CompactTemplate';
import { InfographicTemplate } from '@/components/templates/InfographicTemplate';
import { AcademicTemplate } from '@/components/templates/AcademicTemplate';

export const templates: Template[] = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional, professional layout perfect for conservative industries',
    component: ClassicTemplate
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean, contemporary design with blue accents and progress bars',
    component: ModernTemplate
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Ultra-clean, typography-focused design for a sophisticated look',
    component: MinimalTemplate
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Colorful sidebar layout ideal for creative professionals',
    component: CreativeTemplate
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Bold, authoritative design for senior-level positions',
    component: ExecutiveTemplate
  },
  {
    id: 'tech',
    name: 'Tech',
    description: 'Terminal-inspired design perfect for developers and tech roles',
    component: TechTemplate
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Sophisticated design with serif fonts and gradient accents',
    component: ElegantTemplate
  },
  {
    id: 'compact',
    name: 'Compact',
    description: 'Space-efficient layout that fits more content on one page',
    component: CompactTemplate
  },
  {
    id: 'infographic',
    name: 'Infographic',
    description: 'Visual-heavy design with icons, colors, and engaging elements',
    component: InfographicTemplate
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Traditional format ideal for academic and research positions',
    component: AcademicTemplate
  }
];
