import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { CollaborationSection } from './components/sections/CollaborationSection';
import { ProductPortfolio } from './components/sections/ProductPortfolio';
import { CapabilitiesSection } from './components/sections/CapabilitiesSection';
import { PartnershipSection } from './components/sections/PartnershipSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ProductModal } from './components/products/ProductModal';
import type { Product } from './types/product';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [contactSubject, setContactSubject] = useState<string>("Enterprise AI Portfolio Inquiry");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireProduct = (product: Product) => {
    setContactSubject(`Enterprise Inquiry: ${product.name}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Sticky Joint Navbar */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('portfolio')}
          onCollaborationClick={() => scrollToSection('collaboration')}
        />

        {/* Strategic Collaboration Section */}
        <CollaborationSection />

        {/* 10 Enterprise AI Products Grid */}
        <ProductPortfolio onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* Technical Capability Pillars */}
        <CapabilitiesSection />

        {/* Why the Collaboration (Complementary Strengths) */}
        <PartnershipSection />

        {/* Contact CTA Section */}
        <ContactSection initialSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Product Details Drawer/Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquireProduct}
      />
    </div>
  );
};

export default App;
