import { useState, useMemo } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import type { Product } from '../../types/product';

interface ProductPortfolioProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductPortfolio: React.FC<ProductPortfolioProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Solutions");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All Solutions",
    "Industrial & Manufacturing",
    "Energy & Infrastructure",
    "Cloud & Infrastructure",
    "Knowledge & Workplace",
    "Life Sciences & Pharma",
    "Healthcare & Clinical",
    "Finance & Operations",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Solutions" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.operationalFocus.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#0284C7] font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Joint Commercial Portfolio
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            10 Enterprise AI Solutions
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Specialized solution categories combining predictive models, computer vision, agentic
            intelligence, and mission-critical enterprise engineering.
          </p>
        </div>

        {/* Filter & Search Bar with Clean Light Styling */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 shrink-0 pl-2 font-mono">
              <Filter className="w-3.5 h-3.5 text-[#1687D9]" />
              Sector:
            </span>
            <div className="flex gap-1.5 shrink-0">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#1687D9] text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1687D9]"
            />
          </div>
        </div>

        {/* Live Filter Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-2 font-mono">
          <span>Showing {filteredProducts.length} of {products.length} Solutions</span>
          {selectedCategory !== "All Solutions" && (
            <button
              onClick={() => setSelectedCategory("All Solutions")}
              className="text-[#1687D9] hover:underline"
            >
              Clear filter ({selectedCategory})
            </button>
          )}
        </div>

        {/* 10 Products Responsive Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200 mt-8 space-y-3">
            <p className="text-base text-slate-500">No solutions match your keyword.</p>
            <button
              onClick={() => {
                setSelectedCategory("All Solutions");
                setSearchQuery("");
              }}
              className="text-sm text-[#1687D9] font-semibold hover:underline"
            >
              Reset view
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
