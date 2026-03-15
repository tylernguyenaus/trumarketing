import React from 'react';
import { Hero } from './Hero';
import { ValueDetails } from './ValueDetails';
import { Proof } from './Proof';
import { CTA } from './CTA';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pb-16 md:pb-24 relative z-10">
      <Hero />
      <ValueDetails />
      <Proof />
      <CTA />
    </div>
  );
};
