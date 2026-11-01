import { ArrowRight, Activity } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <article
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#1687D9]/40 transition-all duration-300 flex flex-col justify-between group text-left cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div>
        {/* Authentic Industry Photography (16:9 Aspect Ratio) */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Solution Number Badge Top-Left */}
          <div className="absolute top-3.5 left-3.5 bg-slate-900/90 backdrop-blur-md text-sky-400 font-mono text-xs font-bold px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
            SOLUTION {product.number}
          </div>

          {/* Category Pill Top-Right */}
          <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
            {product.category}
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6 space-y-3.5">
          <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#1687D9] transition-colors font-display">
            {product.name}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
            {product.shortDescription}
          </p>

          {/* Operational Scope Tag */}
          <div className="pt-2">
            <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-start gap-2">
              <Activity className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Focus: </span>
                <span className="text-slate-600">{product.operationalFocus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Row */}
      <div className="px-6 pb-6 pt-2">
        <div className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-xs text-slate-700 bg-slate-50 group-hover:bg-[#1687D9] group-hover:text-white border border-slate-200 transition-all duration-200">
          <span>Explore Architecture & Capabilities</span>
          <ArrowRight className="w-4 h-4 text-[#1687D9] group-hover:text-white transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};
