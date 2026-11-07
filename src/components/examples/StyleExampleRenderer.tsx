import React from 'react';
import {
  SwissGridExamples,
  LinearDarkExamples,
  BentoModularExamples,
  ShadcnZincExamples,
  FluentAcrylicExamples,
} from './ModernMinimalExamples';
import {
  NeoBrutalismExamples,
  EditorialSerifExamples,
  SpatialGlassExamples,
} from './ExpressiveExamples';
import {
  IndustrialHardwareExamples,
  RetroTerminalExamples,
  Win95RetroExamples,
  CyberpunkHudExamples,
} from './TactileRetroExamples';
import {
  FlatDesignExamples,
  MaterialDesignExamples,
  NeumorphismExamples,
  ClaymorphismExamples,
} from './DataDomainExamples';

interface StyleExampleRendererProps {
  styleId: string;
  exampleId: 'landing' | 'dashboard' | 'interactive';
}

export const StyleExampleRenderer: React.FC<StyleExampleRendererProps> = ({
  styleId,
  exampleId,
}) => {
  switch (styleId) {
    case 'flat-design':
      return <FlatDesignExamples exampleId={exampleId} />;
    case 'shadcn-zinc':
      return <ShadcnZincExamples exampleId={exampleId} />;
    case 'material-design':
      return <MaterialDesignExamples exampleId={exampleId} />;
    case 'fluent-acrylic':
      return <FluentAcrylicExamples exampleId={exampleId} />;
    case 'bento-modular':
      return <BentoModularExamples exampleId={exampleId} />;
    case 'neumorphism':
      return <NeumorphismExamples exampleId={exampleId} />;
    case 'spatial-glass':
      return <SpatialGlassExamples exampleId={exampleId} />;
    case 'claymorphism':
      return <ClaymorphismExamples exampleId={exampleId} />;
    case 'industrial-hardware':
      return <IndustrialHardwareExamples exampleId={exampleId} />;
    case 'neo-brutalism':
      return <NeoBrutalismExamples exampleId={exampleId} />;
    case 'linear-dark':
      return <LinearDarkExamples exampleId={exampleId} />;
    case 'retro-terminal':
      return <RetroTerminalExamples exampleId={exampleId} />;
    case 'win95-retro':
      return <Win95RetroExamples exampleId={exampleId} />;
    case 'cyberpunk-hud':
      return <CyberpunkHudExamples exampleId={exampleId} />;
    case 'swiss-grid':
      return <SwissGridExamples exampleId={exampleId} />;
    case 'editorial-serif':
      return <EditorialSerifExamples exampleId={exampleId} />;
    default:
      return <FlatDesignExamples exampleId={exampleId} />;
  }
};
