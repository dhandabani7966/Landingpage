import React from 'react';
import { ArrowRight, Calendar, Cpu, Layers, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCollaborationClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onCollaborationClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Ambient Soft Blue Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-sky-100/60 blur-[140px] rounded-full" />
        <div className="absolute top-2/3 right-1/4 w-[500px] h-[500px] bg-blue-50/70 blur-[160px] rounded-full" />
        
        {/* Subtle Precision Grid Matrix */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.4) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Executive Storytelling & Confident Typography */}
          <div className="lg:col-span-7 text-left space-y-7">
            
            {/* Live Collaboration Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1687D9] shadow-[0_0_8px_#1687D9] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-800">
                Cube AI Solutions <span className="text-[#1687D9]">×</span> Infosoft USA
              </span>
              <span className="text-slate-300 text-xs">|</span>
              <span className="text-xs text-[#0284C7] font-medium flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                Launch 2 Nov 2026
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-display">
                Intelligence That Moves{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1687D9] via-[#0284C7] to-indigo-600">
                  Business Forward.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Introducing an exclusive portfolio of 10 AI-powered enterprise solutions engineered
              to transform complex operations, unlock predictive clarity, and accelerate enterprise
              execution.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-white bg-[#1687D9] hover:bg-[#0284C7] shadow-lg shadow-[#1687D9]/25 transition-all duration-200 text-base group cursor-pointer"
              >
                <span>Explore 10 Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onCollaborationClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-200 text-base cursor-pointer"
              >
                Meet the Collaboration
              </button>
            </div>

            {/* Realistic Enterprise Operational Telemetry Strip */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">10</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Enterprise Solution Tracks</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1687D9] tracking-tight font-display">2</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Industry Leaders</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">100%</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Production Architecture</div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Enterprise Showcase Composition (Light Card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl p-6 space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-500 ml-2">joint-portfolio.live</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-sky-50 text-[#0284C7] border border-sky-200 font-mono">
                    Production Launch
                  </span>
                </div>

                {/* Hero Feature Visual: Agentic AI & Autonomous Automation Showcase */}
                <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-200 group">
                  <img
                    src="/images/products/hero-industrial.jpg?v=3"
                    alt="Agentic AI and Autonomous Neural Automation Architecture"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-75" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold bg-slate-900/90 px-2.5 py-1 rounded backdrop-blur-md border border-white/20 text-white">
                      Agentic AI & Autonomous Automation
                    </span>
                    <span className="text-sky-300 font-mono font-medium">AIMA v1.0</span>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="p-2 rounded-lg bg-[#1687D9]/10 text-[#1687D9]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-slate-900">Cube AI Engineering</h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Machine learning, computer vision, Agentic AI, and data intelligence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="p-2 rounded-lg bg-sky-100 text-[#0284C7]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-slate-900">Infosoft Enterprise Delivery</h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Software architecture, industry consulting, systems integration, and global talent.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer status pill */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    10 Verified Solution Tracks
                  </span>
                  <span className="text-[#1687D9] font-medium font-mono">Target Launch: 2 Nov 2026</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
