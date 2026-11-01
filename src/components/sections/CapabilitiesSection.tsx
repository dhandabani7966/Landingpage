import React from 'react';
import { Cpu, Bot, BarChart3, Eye, Search, Cloud } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Predictive modeling, regression analysis, time-series anomaly detection, and deep neural architectures tailored to enterprise operations.",
      icon: Cpu,
      lead: "Cube AI Engineering",
    },
    {
      title: "Agentic AI & Orchestration",
      description:
        "Autonomous goal-directed agent workflows, iterative validation loops, and multi-agent synthesis for complex operational processes.",
      icon: Bot,
      lead: "AIMA Framework",
    },
    {
      title: "Data Analytics & Business Intelligence",
      description:
        "End-to-end data pipeline engineering, real-time telemetry processing, and executive-ready intelligence dashboards.",
      icon: BarChart3,
      lead: "Data Intelligence",
    },
    {
      title: "Computer Vision & Visual Inspection",
      description:
        "Edge-compatible visual inspection algorithms for automated manufacturing quality checks, anomaly classification, and dimensional tracking.",
      icon: Eye,
      lead: "Visual AI",
    },
    {
      title: "NLP & Intelligent Search",
      description:
        "Semantic search indexing, document parsing, natural language inquiry, and conversational voice interfaces across internal knowledge bases.",
      icon: Search,
      lead: "Language Models",
    },
    {
      title: "Enterprise Software & Cloud Delivery",
      description:
        "Robust enterprise software engineering, scalable cloud infrastructure integration, governance frameworks, and elite technology staffing.",
      icon: Cloud,
      lead: "Infosoft Delivery",
    },
  ];

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#0284C7] shadow-2xs font-mono">
            Technical Foundation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-display">
            Core Capability Pillars
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            The combined technological disciplines that underpin our joint enterprise AI solutions.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#1687D9]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-sky-50 text-[#1687D9] group-hover:bg-[#1687D9] group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                      {cap.lead}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#1687D9] transition-colors font-display">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1687D9]" />
                  <span>Enterprise Architecture Tested</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
