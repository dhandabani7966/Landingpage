import { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-left flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-all focus:outline-none cursor-pointer"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Media with 16:9 crop */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 shrink-0">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-white bg-[#1687D9] px-2.5 py-0.5 rounded shadow-xs">
                SOLUTION {product.number}
              </span>
              <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/25">
                {product.category}
              </span>
            </div>
            <h2 id="modal-product-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Executive Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1687D9] font-mono">
              Executive Architectural Overview
            </h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              {product.fullOverview}
            </p>
          </div>

          {/* Operational Focus */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#1687D9] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Target Operational Context</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {product.operationalFocus}
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 font-mono">
              <Sparkles className="w-4 h-4 text-[#1687D9]" />
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Value */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Anticipated Business Value
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {product.businessValue.map((val, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1687D9]" />
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Joint portfolio by Cube AI Solutions & Infosoft USA
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onEnquire(product);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1687D9] hover:bg-[#0284C7] rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Contact Us About Solution</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
