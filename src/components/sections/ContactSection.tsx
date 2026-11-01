import React, { useState } from 'react';
import { Mail, ExternalLink, Send, Sparkles } from 'lucide-react';
import { cubeAICompany, infosoftCompany } from '../../data/companies';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = "" }) => {
  const [subject, setSubject] = useState(initialSubject || "Enterprise AI Portfolio Inquiry");
  const [targetCompany, setTargetCompany] = useState<"both" | "cube" | "infosoft">("both");
  const [enquirerEmail, setEnquirerEmail] = useState("");
  const [enquirerNotes, setEnquirerNotes] = useState("");

  const handleLaunchEmailClient = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = targetCompany === "cube" ? "contact@cubeaisolutions.com" : "hr@infosoftusa.com";
    const body = `Hello ${targetCompany === "cube" ? "Cube AI Solutions" : targetCompany === "infosoft" ? "Infosoft USA" : "Cube AI & Infosoft Teams"},\n\nI am contacting you regarding the joint Enterprise AI Solutions launch.\n\nInterest: ${subject}\nEnquirer: ${enquirerEmail || "Not specified"}\n\nNotes/Context:\n${enquirerNotes || "We would like to schedule a technical discovery conversation."}\n\nBest regards,`;
    
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#0284C7] shadow-2xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Engage the Teams
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-display">
            Let's Build What's Next.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Connect with the teams to explore how these solutions can support your organisation.
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Direct Portals Card */}
          <div className="md:col-span-5 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Official Channels
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Direct Contact Portals
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect directly through either partner's verified company portal or schedule a joint consultation.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={cubeAICompany.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
                >
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-[#1687D9] transition-colors">
                      Cube AI Solutions
                    </div>
                    <div className="text-[11px] text-slate-500">AI Engineering & Inquiries</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#1687D9]" />
                </a>

                <a
                  href={infosoftCompany.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
                >
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-[#1687D9] transition-colors">
                      Infosoft USA Contact Page
                    </div>
                    <div className="text-[11px] text-slate-500">Enterprise Delivery & Staffing</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#1687D9]" />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1 font-mono">
              <div>Target Launch: November 2, 2026</div>
              <div>Direct Email: hr@infosoftusa.com</div>
            </div>
          </div>

          {/* Frontend-only Direct Email Form */}
          <div className="md:col-span-7 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
            <form onSubmit={handleLaunchEmailClient} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1687D9] flex items-center gap-1.5 font-mono">
                  <Mail className="w-4 h-4" />
                  Compose Direct Solution Inquiry
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Opens your mail client</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Recipient Team
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "both", label: "Joint Inquiry" },
                    { id: "cube", label: "Cube AI" },
                    { id: "infosoft", label: "Infosoft" }
                  ].map((target) => (
                    <button
                      key={target.id}
                      type="button"
                      onClick={() => setTargetCompany(target.id as any)}
                      className={`text-xs py-2 px-3 rounded-lg font-medium transition-all cursor-pointer ${
                        targetCompany === target.id
                          ? "bg-[#1687D9] text-white shadow-xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {target.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Area of Interest / Solution
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1687D9]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Your Corporate Email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={enquirerEmail}
                  onChange={(e) => setEnquirerEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1687D9]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Operational Needs / Timeline
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline your enterprise operational context or schedule requirements..."
                  value={enquirerNotes}
                  onChange={(e) => setEnquirerNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1687D9]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-[#1687D9] hover:bg-[#0284C7] shadow-sm shadow-[#1687D9]/25 transition-all text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email Client with Message</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  No form data is retained on servers; launches your default mail handler.
                </p>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
