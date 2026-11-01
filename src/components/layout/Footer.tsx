import { ArrowUp, ExternalLink } from 'lucide-react';
import { cubeAICompany, infosoftCompany } from '../../data/companies';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 py-16 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white border border-slate-200 p-2 rounded-lg shadow-2xs">
                <img
                  src={cubeAICompany.logoUrl}
                  alt="Cube AI Solutions"
                  className="h-7 w-auto object-contain max-h-7"
                  style={{ height: '28px', maxHeight: '28px', width: 'auto' }}
                />
              </div>
              <span className="text-slate-400 font-light text-base">×</span>
              <div className="bg-white border border-slate-200 p-2 rounded-lg shadow-2xs">
                <img
                  src={infosoftCompany.logoUrl}
                  alt="Infosoft USA"
                  className="h-7 w-auto object-contain max-h-7"
                  style={{ height: '28px', maxHeight: '28px', width: 'auto' }}
                />
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              A joint technology initiative presenting 10 specialized enterprise artificial intelligence
              solutions for modern business operations.
            </p>

            <div className="text-xs text-slate-400 font-mono">
              Target Official Launch: 2 November 2026
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Launch Portfolio
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#portfolio" className="hover:text-[#1687D9] transition-colors">
                  10 AI Solutions
                </a>
              </li>
              <li>
                <a href="#collaboration" className="hover:text-[#1687D9] transition-colors">
                  The Collaboration
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#1687D9] transition-colors">
                  Technical Capabilities
                </a>
              </li>
              <li>
                <a href="#why-collaboration" className="hover:text-[#1687D9] transition-colors">
                  Strategic Alignment
                </a>
              </li>
            </ul>
          </div>

          {/* Partner Portals */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Official Partner Websites
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={cubeAICompany.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1687D9] transition-colors"
              >
                <span>Cube AI Solutions Homepage</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href={infosoftCompany.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1687D9] transition-colors"
              >
                <span>Infosoft USA Homepage</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href={infosoftCompany.contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1687D9] transition-colors"
              >
                <span>Infosoft USA Contact Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Cube AI Solutions & Infosoft USA. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Frontend Launch Edition</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors py-1 px-2.5 rounded hover:bg-slate-200/60 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
