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
import { SunsetTemplate } from '@/components/templates/SunsetTemplate';
import { StarlightTemplate } from '@/components/templates/StarlightTemplate';
import { ForestTemplate } from '@/components/templates/ForestTemplate';
import { NeonPunkTemplate } from '@/components/templates/NeonPunkTemplate';
import { AutumnTemplate } from '@/components/templates/AutumnTemplate';
import { MidnightTemplate } from '@/components/templates/MidnightTemplate';
import { CorporateTemplate } from '@/components/templates/CorporateTemplate';
import { SakuraTemplate } from '@/components/templates/SakuraTemplate';
import { UrbanTemplate } from '@/components/templates/UrbanTemplate';
import { ArcticTemplate } from '@/components/templates/ArcticTemplate';
import { ContrastBWTemplate } from '@/components/templates/ContrastBWTemplate';
import { ClassicBWTemplate } from '@/components/templates/ClassicBWTemplate';
import { ExecutiveBWTemplate } from '@/components/templates/ExecutiveBWTemplate';
import { ModernBWTemplate } from '@/components/templates/ModernBWTemplate';
import { CleanBWTemplate } from '@/components/templates/CleanBWTemplate';
import { StructuredBWTemplate } from '@/components/templates/StructuredBWTemplate';
import { TimelineBWTemplate } from '@/components/templates/TimelineBWTemplate';
import { GridBWTemplate } from '@/components/templates/GridBWTemplate';
import { SimpleBWTemplate } from '@/components/templates/SimpleBWTemplate';
import { TypewriterBWTemplate } from '@/components/templates/TypewriterBWTemplate';

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
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Warm sunset gradient with golden hour vibes and beautiful color transitions',
    component: SunsetTemplate
  },
  {
    id: 'starlight',
    name: 'Starlight',
    description: 'Cosmic starry night theme with twinkling effects and deep space colors',
    component: StarlightTemplate
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Deep forest theme with rich greens and natural woodland atmosphere',
    component: ForestTemplate
  },
  {
    id: 'neon-punk',
    name: 'Neon Punk',
    description: 'Cyberpunk aesthetic with neon grids, terminal styling, and retro-futuristic design',
    component: NeonPunkTemplate
  },
  {
    id: 'autumn',
    name: 'Autumn',
    description: 'Warm autumn colors with fall-inspired palette and cozy seasonal vibes',
    component: AutumnTemplate
  },
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Deep midnight blue theme with elegant dark tones and subtle star effects',
    component: MidnightTemplate
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional corporate design with clean lines and business-focused layout',
    component: CorporateTemplate
  },
  {
    id: 'sakura',
    name: 'Sakura',
    description: 'Japanese cherry blossom theme with delicate pink tones and floral elements',
    component: SakuraTemplate
  },
  {
    id: 'urban',
    name: 'Urban',
    description: 'Modern city-inspired design with industrial colors and metropolitan styling',
    component: UrbanTemplate
  },
  {
    id: 'arctic',
    name: 'Arctic',
    description: 'Cool arctic theme with ice-blue tones and crisp winter atmosphere',
    component: ArcticTemplate
  },
  {
    id: 'classic-bw',
    name: 'Classic B&W',
    description: 'Traditional black and white resume with clean typography and professional layout',
    component: ClassicBWTemplate
  },
  {
    id: 'executive-bw',
    name: 'Executive B&W',
    description: 'Bold executive-style black and white template with strong visual hierarchy',
    component: ExecutiveBWTemplate
  },
  {
    id: 'modern-bw',
    name: 'Modern B&W',
    description: 'Contemporary black and white design with clean lines and structured sections',
    component: ModernBWTemplate
  },
  {
    id: 'clean-bw',
    name: 'Clean B&W',
    description: 'Ultra-minimal black and white template with centered layout and light typography',
    component: CleanBWTemplate
  },
  {
    id: 'structured-bw',
    name: 'Structured B&W',
    description: 'Highly organized black and white template with bordered sections and grid layout',
    component: StructuredBWTemplate
  },
  {
    id: 'timeline-bw',
    name: 'Timeline B&W',
    description: 'Timeline-style black and white template showing career progression visually',
    component: TimelineBWTemplate
  },
  {
    id: 'grid-bw',
    name: 'Grid B&W',
    description: 'Grid-based black and white template with modular design and clean structure',
    component: GridBWTemplate
  },
  {
    id: 'simple-bw',
    name: 'Simple B&W',
    description: 'Elegant simple black and white template with light typography and emoji accents',
    component: SimpleBWTemplate
  },
  {
    id: 'typewriter-bw',
    name: 'Typewriter B&W',
    description: 'Vintage typewriter-inspired black and white template with monospace font',
    component: TypewriterBWTemplate
  },
  {
    id: 'contrast-bw',
    name: 'Contrast B&W',
    description: 'High-contrast black and white template with bold header and structured layout',
    component: ContrastBWTemplate
  }
];
