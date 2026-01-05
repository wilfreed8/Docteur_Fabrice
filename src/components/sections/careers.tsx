import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * CareersSection - A pixel-perfect clone of the "A Culture of Innovation and Dedication" section.
 * This section features an employee quote, descriptive text, and a prominent CTA button.
 * 
 * Theme: Light
 * Primary Sources: Design instructions, High-level design, Screenshots.
 */
const CareersSection: React.FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Label */}
        <div className="mb-6">
          <span className="text-muted-foreground font-label tracking-[0.05em] uppercase text-[12px] font-semibold">
            Careers
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-navy-dark text-[32px] md:text-[42px] font-semibold leading-[1.2] tracking-tight">
            A Culture of Innovation and Dedication
          </h2>
        </div>

        {/* Description and Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-text-neutral text-[18px] leading-[1.6] max-w-xl">
              We believe great work starts with great people. At Hamilton, you&apos;ll find a supportive environment, meaningful challenges, and the opportunity to make a real difference.
            </p>
          </div>

          <div className="relative pl-0 lg:pl-12">
            {/* Quote Block */}
            <div className="relative">
              <span className="absolute -left-6 top-0 text-accent text-3xl font-serif">&ldquo;</span>
              <blockquote className="text-navy-primary text-[18px] font-medium leading-[1.6] italic mb-4">
                I&apos;m proud to work here for over 46 years, and I know my work contributes to the goal of Hamilton as a whole.
              </blockquote>
              <div className="mt-4">
                <cite className="not-italic">
                  <span className="block text-navy-dark text-[16px] font-semibold">
                    Cristina Herico
                  </span>
                  <span className="block text-text-neutral text-[14px]">
                    Senior Production Operator, Manufacturing - Syringe Production
                  </span>
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="/careers"
            className="btn-pill bg-accent text-navy-dark hover:bg-opacity-90 flex items-center gap-2 group"
          >
            Explore Opportunities
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Visual Background Decoration (Optional/Subtle as per Hamilton style) */}
      {/* 
        Note: Based on the "High Level Design", sections often have significant breathing room.
        The atmospheric wide image mentioned in "site_sections" item 11 is represented
        via the layout composition here, focusing on the content and CTA.
      */}
    </section>
  );
};

export default CareersSection;