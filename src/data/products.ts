import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: "01",
    number: "01",
    name: "AI Energy Management & Optimisation",
    slug: "ai-energy-management-optimisation",
    shortDescription:
      "Turn energy and operational data into clearer visibility for monitoring, analysis, and better-informed optimisation decisions.",
    fullOverview:
      "A comprehensive operational intelligence solution designed to ingest telemetry across power infrastructure, generation assets, and facility utilities to provide engineering teams with transparent visibility into consumption profiles and optimization opportunities.",
    category: "Energy & Infrastructure",
    image: "/images/products/energy-management.jpg",
    imageAlt: "Authentic power infrastructure, renewable turbines, and high-voltage energy control assets",
    operationalFocus: "Real-time consumption telemetry, asset monitoring, and load balancing visibility.",
    capabilities: [
      "Telemetry aggregation across distributed power infrastructure",
      "Consumption pattern profiling and baseline anomaly detection",
      "Unified operational dashboards for facility and utility engineers",
      "Scenario simulation for peak load management"
    ],
    businessValue: [
      "Clearer enterprise-wide energy utilization visibility",
      "Data-backed inputs for long-term sustainability initiatives",
      "Operational transparency across industrial utilities"
    ],
    ctaLabel: "Enquire About Energy Solution",
    ctaHref: "https://infosoftusa.com/contact?subject=AI%20Energy%20Management%20Solution",
    detailsApproved: true
  },
  {
    id: "02",
    number: "02",
    name: "AI Manufacturing Intelligence",
    slug: "ai-manufacturing-intelligence",
    shortDescription:
      "Help manufacturing teams interpret production data and identify opportunities to improve visibility, quality, and operational performance.",
    fullOverview:
      "Designed for modern industrial environments, this solution connects floor-level automation data, line telemetry, and maintenance records to give plant managers and engineers holistic visibility into operational continuity.",
    category: "Industrial & Manufacturing",
    image: "/images/products/manufacturing-intelligence.jpg",
    imageAlt: "Heavy robotic automation arms and high-precision industrial production assembly line",
    operationalFocus: "Plant floor telemetry, bottleneck discovery, and equipment condition tracking.",
    capabilities: [
      "Multi-stream industrial sensor and PLC data aggregation",
      "Production throughput and cycle time variation analysis",
      "Early anomaly indicators for proactive maintenance scheduling",
      "Integrated line-performance monitoring across shifts"
    ],
    businessValue: [
      "Enhanced transparency across production floor operations",
      "Faster root-cause identification for line interruptions",
      "Structured data foundation for continuous process improvement"
    ],
    ctaLabel: "Enquire About Manufacturing Intelligence",
    ctaHref: "https://infosoftusa.com/contact?subject=AI%20Manufacturing%20Intelligence",
    detailsApproved: true
  },
  {
    id: "03",
    number: "03",
    name: "AI Data Centre Operations & Intelligence",
    slug: "ai-data-centre-operations-intelligence",
    shortDescription:
      "Bring operational information together to support infrastructure visibility, monitoring, and data-informed operations.",
    fullOverview:
      "Provides mission-critical facility teams with unified intelligence spanning thermal loads, power distribution units, rack telemetry, and environmental sensors across distributed data centre footprints.",
    category: "Cloud & Infrastructure",
    image: "/images/products/data-centre-operations.jpg",
    imageAlt: "Illuminated enterprise server rack aisles and high-density computing infrastructure",
    operationalFocus: "Thermal dynamics, PDU power metrics, and environmental monitoring.",
    capabilities: [
      "Centralized thermal and power telemetry correlation",
      "Hot-spot detection and airflow efficiency tracking",
      "Environmental sensor health and redundancy verification",
      "Capacity planning analytics for compute expansion"
    ],
    businessValue: [
      "Holistic visibility into facility health and thermal balance",
      "Reduced operational blindspots in mission-critical facilities",
      "Proactive alerts for infrastructure maintenance teams"
    ],
    ctaLabel: "Enquire About Data Centre Operations",
    ctaHref: "https://infosoftusa.com/contact?subject=AI%20Data%20Centre%20Operations",
    detailsApproved: true
  },
  {
    id: "04",
    number: "04",
    name: "Enterprise Search & Knowledge Intelligence",
    slug: "enterprise-search-knowledge-intelligence",
    shortDescription:
      "Help teams discover and work with business knowledge across organisational information sources.",
    fullOverview:
      "Bridges siloed enterprise repositories—including documentation portals, shared filesystems, and knowledge bases—to enable precise, context-aware information discovery for knowledge workers.",
    category: "Knowledge & Workplace",
    image: "/images/products/enterprise-search.jpg",
    imageAlt: "High-resolution multi-monitor developer workstation and enterprise knowledge indexing interface",
    operationalFocus: "Multi-repository indexing, semantic retrieval, and contextual document navigation.",
    capabilities: [
      "Multi-source semantic indexing across document repositories",
      "Natural language inquiry with exact source attribution",
      "Role-aligned access control and permission preservation",
      "Knowledge gap identification across organizational docs"
    ],
    businessValue: [
      "Accelerated onboarding and information discovery for teams",
      "Reduced time spent locating critical procedural documentation",
      "Unified access across distributed internal information stores"
    ],
    ctaLabel: "Enquire About Enterprise Search",
    ctaHref: "https://infosoftusa.com/contact?subject=Enterprise%20Search%20Solution",
    detailsApproved: true
  },
  {
    id: "05",
    number: "05",
    name: "AI Supply Chain & Procurement Intelligence",
    slug: "ai-supply-chain-procurement-intelligence",
    shortDescription:
      "Support supply chain and procurement teams with better visibility into information, processes, and operational decisions.",
    fullOverview:
      "Consolidates vendor records, purchase orders, logistics manifests, and inventory movement data to provide procurement and operations leaders with actionable visibility across global distribution networks.",
    category: "Logistics & Supply Chain",
    image: "/images/products/supply-chain-procurement.jpg",
    imageAlt: "Automated logistics distribution facility and high-bay warehouse inventory racking",
    operationalFocus: "Inventory flow, procurement cycles, and multi-tier supplier visibility.",
    capabilities: [
      "End-to-end shipment status and delivery milestone tracking",
      "Procurement contract data extraction and compliance checks",
      "Multi-echelon inventory buffer monitoring",
      "Supplier fulfillment performance tracking"
    ],
    businessValue: [
      "Transparent supply network status and risk signals",
      "Enhanced procurement negotiation data preparation",
      "Reduced coordination friction across logistics partners"
    ],
    ctaLabel: "Enquire About Supply Chain Solution",
    ctaHref: "https://infosoftusa.com/contact?subject=AI%20Supply%20Chain%20Solution",
    detailsApproved: true
  },
  {
    id: "06",
    number: "06",
    name: "Agentic AI for Pharma & Life Sciences",
    slug: "agentic-ai-pharma-life-sciences",
    shortDescription:
      "Explore agent-based AI workflows for information-intensive pharmaceutical and life-sciences environments.",
    fullOverview:
      "Applies autonomous agentic orchestration patterns to complex research literature synthesis, clinical study documentation, and biochemical data synthesis in life-sciences research settings.",
    category: "Life Sciences & Pharma",
    image: "/images/products/pharma-life-sciences.jpg",
    imageAlt: "Precision biochemical laboratory instrumentation and automated assay testing hardware",
    operationalFocus: "Agentic research assistants, multi-step literature review, and assay protocol support.",
    capabilities: [
      "Multi-agent literature synthesis across biomedical indices",
      "Protocol verification and experimental variable cross-referencing",
      "Automated extraction of compound annotations and assays",
      "Structured reporting for preclinical investigation teams"
    ],
    businessValue: [
      "Accelerated synthesis of massive biomedical publication corpora",
      "Structured documentation for preclinical study design",
      "Collaborative tools tailored for life-sciences researchers"
    ],
    ctaLabel: "Enquire About Life Sciences AI",
    ctaHref: "https://infosoftusa.com/contact?subject=Agentic%20AI%20Pharma",
    detailsApproved: true
  },
  {
    id: "07",
    number: "07",
    name: "AI Healthcare Documentation & Voice Intelligence",
    slug: "ai-healthcare-documentation-voice-intelligence",
    shortDescription:
      "Support healthcare documentation workflows through voice-enabled interaction and structured information capture.",
    fullOverview:
      "Designed to assist clinicians and care teams by converting clinical dictation and patient encounters into structured, EHR-ready clinical documentation summaries without disrupting clinician-patient connection.",
    category: "Healthcare & Clinical",
    image: "/images/products/healthcare-documentation.jpg",
    imageAlt: "Sterile clinical diagnostic monitor and hospital patient telemetry equipment",
    operationalFocus: "Ambient voice dictation, clinical note generation, and workflow reduction.",
    capabilities: [
      "Specialty-adapted medical vocabulary recognition",
      "Ambient dialogue structuring into SOAP notes and summaries",
      "Clinician-in-the-loop review and verification interface",
      "Seamless export formats for standard EHR integration"
    ],
    businessValue: [
      "Significant reduction in after-hours administrative documentation",
      "More attentive face-to-face clinician-patient interactions",
      "Consistent and structured clinical encounter record keeping"
    ],
    ctaLabel: "Enquire About Healthcare Documentation",
    ctaHref: "https://infosoftusa.com/contact?subject=Healthcare%20Documentation%20AI",
    detailsApproved: true
  },
  {
    id: "08",
    number: "08",
    name: "AI Computer Vision & Industrial Inspection",
    slug: "ai-computer-vision-industrial-inspection",
    shortDescription:
      "Apply visual intelligence concepts to industrial inspection and quality-focused workflows.",
    fullOverview:
      "Combines edge-compatible computer vision algorithms with industrial imaging hardware to inspect manufactured components, detect surface flaws, and maintain rigorous quality verification standards.",
    category: "Industrial & Manufacturing",
    image: "/images/products/computer-vision-inspection.jpg",
    imageAlt: "Macro optical magnification of microelectronics printed circuit board assembly",
    operationalFocus: "High-speed optical inspection, surface flaw classification, and dimensional checks.",
    capabilities: [
      "Edge-deployed vision pipelines for high-velocity production lines",
      "Automated surface defect, crack, and alignment inspection",
      "Statistical quality control logs and heatmaps",
      "Flexible calibration for diverse optical and lighting setups"
    ],
    businessValue: [
      "Consistent quality verification on high-speed lines",
      "Immediate alert triggers on recurring component deviations",
      "Auditable digital visual records for batch traceability"
    ],
    ctaLabel: "Enquire About Computer Vision Solution",
    ctaHref: "https://infosoftusa.com/contact?subject=AI%20Computer%20Vision%20Inspection",
    detailsApproved: true
  },
  {
    id: "09",
    number: "09",
    name: "AI Voice & Customer Experience Agents",
    slug: "ai-voice-customer-experience-agents",
    shortDescription:
      "Present voice-enabled AI experiences designed to support customer interactions and service workflows.",
    fullOverview:
      "Empowers customer operations and service desks with intelligent conversational agents capable of resolving tier-1 inquiries, managing appointment scheduling, and intelligently routing complex escalations to human specialists.",
    category: "Customer Experience & Service",
    image: "/images/products/voice-customer-experience.jpg",
    imageAlt: "High-end digital broadcast communication console and audio telemetry interface",
    operationalFocus: "Conversational voice agents, intent classification, and warm agent handoff.",
    capabilities: [
      "Low-latency natural speech recognition and voice synthesis",
      "Dynamic intent classification and multi-turn dialog management",
      "Context-preserving handoff to human representatives",
      "Call transcription and sentiment telemetry extraction"
    ],
    businessValue: [
      "24/7 availability for standard routine customer requests",
      "Shorter queue wait times and improved customer satisfaction",
      "Enables human support agents to focus on high-touch cases"
    ],
    ctaLabel: "Enquire About Voice CX Solution",
    ctaHref: "https://infosoftusa.com/contact?subject=AI%20Voice%20Customer%20Experience",
    detailsApproved: true
  },
  {
    id: "10",
    number: "10",
    name: "AI Financial & Business Intelligence",
    slug: "ai-financial-business-intelligence",
    shortDescription:
      "Help business teams explore performance information and communicate insights for decision support.",
    fullOverview:
      "Integrates enterprise ERP, general ledger, and operational metrics into an interactive financial intelligence workspace where finance leaders can interrogate variances, model scenarios, and generate executive summaries.",
    category: "Finance & Operations",
    image: "/images/products/financial-business-intelligence.jpg",
    imageAlt: "Financial market analytics terminal displaying real-time candlestick charts and quantitative indicators",
    operationalFocus: "Financial variance analysis, executive synthesis, and cashflow modeling.",
    capabilities: [
      "Automated financial statement variance commentary",
      "Natural language financial query and drill-down exploration",
      "Scenario sensitivity and rolling forecast modeling",
      "Automated draft generation for board and leadership decks"
    ],
    businessValue: [
      "Faster turnaround for month-end financial reviews",
      "Democratized access to operational financial insights",
      "Enhanced decision support for strategic resource allocation"
    ],
    ctaLabel: "Enquire About Financial BI Solution",
    ctaHref: "https://infosoftusa.com/contact?subject=AI%20Financial%20Intelligence",
    detailsApproved: true
  }
];

export const productCategories = [
  "All Solutions",
  "Industrial & Manufacturing",
  "Energy & Infrastructure",
  "Cloud & Infrastructure",
  "Knowledge & Workplace",
  "Logistics & Supply Chain",
  "Life Sciences & Pharma",
  "Healthcare & Clinical",
  "Customer Experience & Service",
  "Finance & Operations"
];
