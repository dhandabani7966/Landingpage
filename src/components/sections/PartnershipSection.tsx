import React from 'react';
import { Check, Building, Code2 } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  return (
    <section id="why-collaboration" className="py-24 lg:py-32 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#0284C7] font-mono">
            Strategic Alignment
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-display">
            Why Cube AI Solutions × Infosoft USA
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Bridging cutting-edge artificial intelligence research with decades of reliable enterprise
            software development and large-scale delivery expertise.
          </p>
        </div>

        {/* Two-Column Complementary Comparison */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: AI & Data Intelligence Perspective */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#1687D9]/10 text-[#1687D9]">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7] font-mono">
                  Innovation Lead
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  AI & Data Intelligence Perspective
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Enterprise AI cannot succeed as a surface layer on fragmented legacy systems.
              Cube AI Solutions provides deep algorithmic engineering across machine learning,
              computer vision, and autonomous agent orchestration to formulate real-world
              decision models.
            </p>

            <ul className="space-y-3 pt-4 border-t border-slate-200 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5" />
                <span>Proprietary data pipelines and real-time inference optimization</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5" />
                <span>Specialized vision models for industrial automation and telemetry</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5" />
                <span>Agentic AI architectures designed for high-context workflows</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Enterprise Software & Delivery Perspective */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-100 text-[#0284C7]">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7] font-mono">
                  Delivery Lead
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Enterprise Software & Consulting Perspective
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Powerful models only deliver value when seamlessly embedded into secure, scalable,
              and compliant corporate software architectures. Infosoft USA provides the enterprise
              rigor, systems integration, and talent networks required to execute flawlessly.
            </p>

            <ul className="space-y-3 pt-4 border-t border-slate-200 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5" />
                <span>Enterprise governance, cloud security, and system integration</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5" />
                <span>Established track record across healthcare, finance, and manufacturing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5" />
                <span>Global technology talent and managed delivery frameworks</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
