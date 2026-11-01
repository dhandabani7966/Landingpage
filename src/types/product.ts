export interface Product {
  id: string;
  number: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullOverview: string;
  category: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  businessValue: string[];
  operationalFocus: string;
  ctaLabel: string;
  ctaHref: string;
  detailsApproved: boolean;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  contactUrl: string;
  logoUrl: string;
  focusAreas: string[];
}

