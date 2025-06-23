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
import { ProfessionalTemplate } from '@/components/templates/ProfessionalTemplate';
import { CreativeBlueTemplate } from '@/components/templates/CreativeBlueTemplate';
import { TwoColumnTemplate } from '@/components/templates/TwoColumnTemplate';
import { BoldTemplate } from '@/components/templates/BoldTemplate';
import { TimelineTemplate } from '@/components/templates/TimelineTemplate';
import { VibrantTemplate } from '@/components/templates/VibrantTemplate';
import { NeonTemplate } from '@/components/templates/NeonTemplate';
import { RetroTemplate } from '@/components/templates/RetroTemplate';
import { GlassTemplate } from '@/components/templates/GlassTemplate';
import { PastelTemplate } from '@/components/templates/PastelTemplate';
import { DarkModeTemplate } from '@/components/templates/DarkModeTemplate';
import { WatercolorTemplate } from '@/components/templates/WatercolorTemplate';
import { GeometricTemplate } from '@/components/templates/GeometricTemplate';
import { ArtisticTemplate } from '@/components/templates/ArtisticTemplate';
import { MonochromeTemplate } from '@/components/templates/MonochromeTemplate';
import { GradientTemplate } from '@/components/templates/GradientTemplate';
import { MaterialTemplate } from '@/components/templates/MaterialTemplate';
import { NatureTemplate } from '@/components/templates/NatureTemplate';
import { NeonCityTemplate } from '@/components/templates/NeonCityTemplate';
import { OceanTemplate } from '@/components/templates/OceanTemplate';
import { GalacticTemplate } from '@/components/templates/GalacticTemplate';
import { VintageTemplate } from '@/components/templates/VintageTemplate';
import { CrystalTemplate } from '@/components/templates/CrystalTemplate';
import { InkTemplate } from '@/components/templates/InkTemplate';
import { LuxuryTemplate } from '@/components/templates/LuxuryTemplate';

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
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clean business layout with blue accents and structured sections',
    component: ProfessionalTemplate
  },
  {
    id: 'creative-blue',
    name: 'Creative Blue',
    description: 'Modern design with colorful icons and blue gradient header',
    component: CreativeBlueTemplate
  },
  {
    id: 'two-column',
    name: 'Two Column',
    description: 'Dark sidebar with contact info and skills, clean main content area',
    component: TwoColumnTemplate
  },
  {
    id: 'bold',
    name: 'Bold',
    description: 'High-contrast black design that makes a strong statement',
    component: BoldTemplate
  },
  {
    id: 'timeline',
    name: 'Timeline',
    description: 'Career timeline layout showing professional progression visually',
    component: TimelineTemplate
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    description: 'Eye-catching gradient background with colorful glass-morphism effects',
    component: VibrantTemplate
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Futuristic cyberpunk-inspired design with neon colors and terminal aesthetics',
    component: NeonTemplate
  },
  {
    id: 'retro',
    name: 'Retro',
    description: 'Vintage-inspired design with warm colors and playful typography',
    component: RetroTemplate
  },
  {
    id: 'glass',
    name: 'Glass',
    description: 'Modern glassmorphism effect with beautiful gradient backgrounds',
    component: GlassTemplate
  },
  {
    id: 'pastel',
    name: 'Pastel',
    description: 'Soft, dreamy design with gentle pastel colors and rounded elements',
    component: PastelTemplate
  },
  {
    id: 'dark-mode',
    name: 'Dark Mode',
    description: 'Sleek dark theme with colorful accents perfect for tech professionals',
    component: DarkModeTemplate
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    description: 'Artistic design with watercolor-inspired background elements',
    component: WatercolorTemplate
  },
  {
    id: 'geometric',
    name: 'Geometric',
    description: 'Bold design with geometric shapes and modern angular elements',
    component: GeometricTemplate
  },
  {
    id: 'artistic',
    name: 'Artistic',
    description: 'Creative template with artistic elements and vibrant gradient backgrounds',
    component: ArtisticTemplate
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    description: 'Bold black and white design with strong typography and high contrast',
    component: MonochromeTemplate
  },
  {
    id: 'gradient',
    name: 'Gradient',
    description: 'Modern gradient design with glassmorphism effects and colorful icons',
    component: GradientTemplate
  },
  {
    id: 'material',
    name: 'Material',
    description: 'Material Design inspired layout with clean cards and colorful accents',
    component: MaterialTemplate
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'Nature-inspired design with organic shapes and earth tones',
    component: NatureTemplate
  },
  {
    id: 'neon-city',
    name: 'Neon City',
    description: 'Cyberpunk cityscape with neon grids and futuristic terminal styling',
    component: NeonCityTemplate
  },
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Deep ocean theme with wave patterns and aquatic color palette',
    component: OceanTemplate
  },
  {
    id: 'galactic',
    name: 'Galactic',
    description: 'Space-themed design with cosmic gradients and stellar elements',
    component: GalacticTemplate
  },
  {
    id: 'vintage',
    name: 'Vintage',
    description: 'Classic vintage design with ornate borders and serif typography',
    component: VintageTemplate
  },
  {
    id: 'crystal',
    name: 'Crystal',
    description: 'Crystalline design with prismatic effects and clean aesthetics',
    component: CrystalTemplate
  },
  {
    id: 'ink',
    name: 'Ink',
    description: 'Bold ink-inspired design with strong contrast and artistic splatter effects',
    component: InkTemplate
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Premium luxury design with gold accents and elegant typography',
    component: LuxuryTemplate
  }
];
