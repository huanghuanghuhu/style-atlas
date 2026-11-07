export type StyleCategory =
  | 'all'
  | 'modern-minimal'
  | 'expressive-avant'
  | 'tactile-retro'
  | 'data-domain';

export interface ColorToken {
  name: string;
  role: string;
  hex: string;
  tailwindClass: string;
  textContrastClass: string;
}

export interface TailwindRecipe {
  component: string;
  description: string;
  classes: string;
  previewText?: string;
}

export interface PageExampleMeta {
  id: 'landing' | 'dashboard' | 'interactive';
  title: string;
  archetype: string;
  scenario: string;
  keyTechniques: string[];
  jsxCode: string;
}

export interface DesignStyle {
  id: string;
  name: string;
  enName: string;
  category: Exclude<StyleCategory, 'all'>;
  categoryLabel: string;
  tagline: string;
  summary: string;
  representativeBrands: string[];
  bestFor: string[];
  notRecommendedFor: string[];
  coreCharacteristics: {
    title: string;
    detail: string;
    tailwindHint: string;
  }[];
  typography: {
    headingFont: string;
    bodyFont: string;
    monoFont: string;
    headingClasses: string;
    bodyClasses: string;
    scaleNotes: string;
  };
  geometryAndDepth: {
    borderRadius: string;
    borderStyle: string;
    shadowStyle: string;
    spacingRhythm: string;
  };
  colors: ColorToken[];
  recipes: TailwindRecipe[];
  dos: string[];
  donts: string[];
  aiPromptSnippet: string;
  examples: [PageExampleMeta, PageExampleMeta, PageExampleMeta];
}
