import React from 'react';
import { ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { cubeAICompany, infosoftCompany, collaborationSummary } from '../../data/companies';

export const CollaborationSection: React.FC = () => {
  return (
    <section id="collaboration" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#0284C7] shadow-2xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Joint Strategic Initiative
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-display">
            {collaborationSummary.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {collaborationSummary.supportingCopy}
          </p>
        </div>

        {/* Dual Partner Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Cube AI Solutions */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#1687D9]/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              {/* Logo & Header */}
              <div className="flex items-start justify-between">
                <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl shadow-2xs inline-block max-w-[220px]">
                  <img
                    src={cubeAICompany.logoUrl}
                    alt="Cube AI Solutions Logo"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200 font-mono">
                  AI Engineering
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-display">
                  {cubeAICompany.name}
                </h3>
                <p className="text-sm font-medium text-[#1687D9] mt-0.5">
                  {cubeAICompany.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {cubeAICompany.description}
              </p>

              {/* Core Capabilities List */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Key AI Strengths
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {cubeAICompany.focusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1687D9] shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Official Link */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={cubeAICompany.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1687D9] hover:text-[#0284C7] transition-colors group/link"
              >
                Visit Cube AI Solutions Official Site
                <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Infosoft USA */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#1687D9]/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              {/* Logo & Header */}
              <div className="flex items-start justify-between">
                <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl shadow-2xs inline-block max-w-[220px]">
                  <img
                    src={infosoftCompany.logoUrl}
                    alt="Infosoft USA Logo"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200 font-mono">
                  Enterprise Delivery
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-display">
                  {infosoftCompany.name}
                </h3>
                <p className="text-sm font-medium text-[#1687D9] mt-0.5">
                  {infosoftCompany.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {infosoftCompany.description}
              </p>

              {/* Core Capabilities List */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Enterprise Foundations
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {infosoftCompany.focusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1687D9] shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Official Link */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={infosoftCompany.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1687D9] hover:text-[#0284C7] transition-colors group/link"
              >
                Visit Infosoft USA Official Site
                <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            Cube AI Solutions and Infosoft USA are collaborating on this joint commercial portfolio
            to deliver advanced AI capabilities backed by robust enterprise software engineering.
          </p>
        </div>

      </div>
    </section>
  );
};
