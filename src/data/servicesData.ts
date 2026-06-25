import { ServiceItem, TestimonialItem, FAQItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'Bespoke, blazingly fast full-stack applications & websites engineered with React, Node, and Tailwind CSS.',
    description: 'We construct modern digital architectures built for speed, performance, and unmatched visual fidelity. By replacing heavy legacy templates with hyper-optimized headless setups and static-generation frameworks, we ensure your site scores 100% on Core Web Vitals and drives real business conversions.',
    iconName: 'Code',
    startingPrice: 1999,
    features: [
      'Complete custom React/Vite/NextJS architectures',
      'Fully responsive, mobile-first fluid layouts',
      'Serverless APIs & secure backend endpoint proxying',
      'Optimized global CDN delivery & SEO-ready metadata structure',
      'Integrated web analytics & lead conversion pipelines'
    ],
    deliverables: [
      'Production-Ready Source Code via Private Repository',
      'Figma-to-Code Responsive Design Matching',
      'Tailwind CSS Global Design System & Component Library',
      'Semantic HTML5 Architecture with full ARIA Web Accessibility',
      'Automated Performance Optimization Report (Lighthouse > 95)'
    ],
    process: [
      { step: 1, name: 'Technical Blueprinting', desc: 'Analyzing load patterns, data flows, and structural user journeys.' },
      { step: 2, name: 'Sleek UI/UX Designing', desc: 'Crafting responsive high-fidelity blueprints with generous negative space.' },
      { step: 3, name: 'Modern React Coding', desc: 'Writing clean, type-safe TypeScript code structured into component libraries.' },
      { step: 4, name: 'Core Vitals Optimization', desc: 'Compressing static assets, lazy-loading scripts, and fine-tuning server configurations.' }
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Vercel'],
    growthOutcome: '+240% Average Page Speed Improvement & 45% Bounce Rate Reduction'
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    shortDesc: 'Data-driven campaigns, high-impact creatives, and brand engagement that turns followers into customers.',
    description: 'Stop counting vanity metrics and start measuring revenue. Our team structures high-performance paid ad campaigns, organic content matrices, and highly engaging design templates across Meta, LinkedIn, and TikTok to attract high-intent clients to your brand.',
    iconName: 'Share2',
    startingPrice: 799,
    features: [
      'Bespoke visual content matrices (12+ Custom Posts/month)',
      'Highly targeted Meta/LinkedIn ads configuration & management',
      'Professional copywriting tailored to specific audience personas',
      'Monthly conversion tracking, pixel diagnostics, & ROI metrics',
      'Organic community interactions & brand voice development'
    ],
    deliverables: [
      'Comprehensive Social Media Platform Audit & Competitor Map',
      'Monthly Creative Assets (Custom Graphics & short-form video layouts)',
      'A/B Campaign Performance Analysis & Ad Copy Library',
      'Optimized Audience Personas & Pixel Tracking Blueprint',
      'Comprehensive Monthly Business Growth & ROI Report'
    ],
    process: [
      { step: 1, name: 'Audience Diagnostics', desc: 'Mapping demographic interests, competitors, and historical channel performance.' },
      { step: 2, name: 'Creative Sprints', desc: 'Designing premium social layouts, writeups, and video templates.' },
      { step: 3, name: 'Hyper-Targeted Launch', desc: 'Deploying custom pixel audiences, setting budget boundaries, and launching A/B variants.' },
      { step: 4, name: 'Conversion Scaling', desc: 'Double-down on winning creatives and scaling the overall campaign budget.' }
    ],
    techStack: ['Meta Business Suite', 'LinkedIn Campaign Manager', 'TikTok Ads Manager', 'Figma', 'Hootsuite', 'Google Analytics 4'],
    growthOutcome: 'Average 4.1x Ad Spend Return (ROAS) and +150% Brand Mentions'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    shortDesc: 'Aggressive keyword ranking, high-authority backlink outreach, and technical site indexing architecture.',
    description: 'If you are not on the first page of Google, you do not exist to 90% of searchers. We perform intensive technical crawls, align on-page semantic structures with actual searcher intent, and run white-hat outreach campaigns to rank you for competitive, high-revenue keywords.',
    iconName: 'Search',
    startingPrice: 999,
    features: [
      'In-depth technical SEO crawls & schema markup integration',
      'High-revenue keyword mapping & commercial intent discovery',
      'Content optimization (headings, meta-tags, image alt values)',
      'Authority-building outreach and clean backlink profiling',
      'Local SEO alignment with Google Map pack integration'
    ],
    deliverables: [
      'Screaming Frog Site Technical Audit & Fix Blueprint',
      'Comprehensive Keyword Research Spreadsheet (Volume, KD%, Intent)',
      'Optimized Page Metadata & Custom Structured Schema Markup',
      'Local Citations Check & Google Business Profile Strategy Sheet',
      'Monthly Page Rank Progress & Organic Traffic Diagnostics Dashboard'
    ],
    process: [
      { step: 1, name: 'Indexation Crawling', desc: 'Running exhaustive crawler analysis to locate rendering traps, broken links, or redirect chains.' },
      { step: 2, name: 'Semantic Structuring', desc: 'Aligning page H1-H4 layouts and body texts with competitive keyword intent.' },
      { step: 3, name: 'Authority Expansion', desc: 'Reaching out to top-tier publications to build high-grade domain authority.' },
      { step: 4, name: 'Performance Audits', desc: 'Reviewing rankings daily and updating schema structures to stay ahead of search updates.' }
    ],
    techStack: ['Ahrefs', 'SEMrush', 'Screaming Frog SEO Spider', 'Google Search Console', 'Schema.org', 'SurferSEO'],
    growthOutcome: 'Average 3.5x Organic Inbound Growth & First-Page Keyword Dominance'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    shortDesc: 'Automated lifecycle email funnels, newsletter editorial design, and delivery rate optimization.',
    description: 'Email remains the highest-converting digital channel. We construct automated marketing flows — including customer welcome paths, cart-abandonment recoveries, and VIP retention plans — that run autonomously in the background to drive continuous repeat purchases.',
    iconName: 'Mail',
    startingPrice: 599,
    features: [
      'Automated customer onboarding & cart abandonment setups',
      'Premium, high-contrast custom-coded email layouts',
      'Highly granular subscriber database segmentation',
      'A/B subject line and timing optimization campaigns',
      'Reputable email domain deliverability auditing'
    ],
    deliverables: [
      'Complete Automated Flows Blueprint & Logic Mapping',
      'Fully Responsive Email Templates (Editable inside your ESP)',
      'Compelling Campaign Copy Library (Subject lines, CTAs, Body copy)',
      'Subscriber Signup Popups & Lead Capture Forms',
      'Bi-weekly Analytics on Open Rates, Click-Throughs, and Generated Revenue'
    ],
    process: [
      { step: 1, name: 'Flow Mapping', desc: 'Structuring trigger logic based on specific web-visitor behavioral actions.' },
      { step: 2, name: 'Responsive Layout Coding', desc: 'Coding highly clean HTML templates tested across all modern mail clients.' },
      { step: 3, name: 'Copywriting Sprints', desc: 'Writing persuasive, personalized copy with strong, clear call-to-actions.' },
      { step: 4, name: 'Deliverability Adjustments', desc: 'Configuring SPF, DKIM, and DMARC settings to bypass spam filters.' }
    ],
    techStack: ['Klaviyo', 'Mailchimp', 'ActiveCampaign', 'HubSpot', 'MJML Code', 'Litmus Email Testing'],
    growthOutcome: '32% Average Increase in Customer Lifetime Value (LTV) & +28% Email Revenue'
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    shortDesc: 'Authoritative blog articles, research-backed whitepapers, and high-converting marketing copy.',
    description: 'Content is the vehicle that delivers trust. We write deeply researched, structurally optimized, and highly authoritative articles that capture attention, satisfy search engine ranking factors, and establish your brand as a leading voice in your industry.',
    iconName: 'PenTool',
    startingPrice: 399,
    features: [
      'Deeply researched, structurally engaging, 100% human-written blogs',
      'Authoritative industry guides, case studies, & lead magnets',
      'Complete keyword optimization (NLP semantic term integrations)',
      'Thorough internal link maps to boost site authority structure',
      'Custom graphics planning & copyright-compliant layout formatting'
    ],
    deliverables: [
      '4 SEO-optimized Articles (1,500+ words each) with clear H2-H3 structural logic',
      'Primary Research Summaries & External Source Citations',
      'SEO Keyword Density Blueprint (SurferSEO score > 80)',
      'Catchy, High-CTR Headline Variants & Subhead Sets',
      'Plagiarism-free & AI-free Certification Reports'
    ],
    process: [
      { step: 1, name: 'Niche Exploration', desc: 'Analyzing existing competitor publications and cataloging search intent gaps.' },
      { step: 2, name: 'Outline Engineering', desc: 'Establishing clean, structured outlines prioritizing reader values and SEO rules.' },
      { step: 3, name: 'Creative Writing', desc: 'Crafting highly technical, engaging prose supported by concrete data highlights.' },
      { step: 4, name: 'SEO Optimization', desc: 'Weaving in natural semantic keywords and setting up logical internal linking blocks.' }
    ],
    techStack: ['SurferSEO', 'Clearscope', 'Grammarly Pro', 'Google Workspace', 'Notion', 'Copyscape'],
    growthOutcome: '+180% Reader Retention Rates & 3.2x Domain Topic Authority Boost'
  },
  {
    id: 'logo-design',
    title: 'Logo Design & Branding',
    shortDesc: 'Timeless vector visual identity design systems, layout palettes, and complete modern brand kits.',
    description: 'A brand is not just a logo; it is the visual distillation of your business philosophy. We design memorable, modern, and mathematically balanced vector identity systems, curated color palettes, and typographic patterns that demand prestige across all print and web mediums.',
    iconName: 'Layers',
    startingPrice: 499,
    features: [
      'Bespoke, hand-crafted minimalist logo concepts (3 Initial Options)',
      'Fully scalable, high-fidelity responsive vector formats',
      'Curated brand color schemes & premium typographic pairings',
      'Professional brand book specifying correct usage & layout rules',
      'Full social media asset templates & business card design'
    ],
    deliverables: [
      'Final Vector SVG, EPS, PDF, and high-res PNG Master Logo Files',
      'Horizontal, Vertical, and Icon-only Responsive Logo Variants',
      'Comprehensive Brand Guidelines Booklet (PDF, 20+ Pages)',
      'Digital Font Pairings & Type Scale Cheat Sheets',
      'Ready-to-Print Stationery Layouts & Social Media Profile Assets'
    ],
    process: [
      { step: 1, name: 'Brand brief discovery', desc: 'Identifying brand personality traits, market positioning, and target audiences.' },
      { step: 2, name: 'Vector Sketching', desc: 'Constructing various hand-drawn shapes and aligning geometric proportions.' },
      { step: 3, name: 'Palettes & Fonts', desc: 'Testing color emotional tones and pairing high-end typography structures.' },
      { step: 4, name: 'Asset Kit Bundling', desc: 'Compiling all responsive layouts into production-ready vector directories.' }
    ],
    techStack: ['Adobe Illustrator', 'Figma', 'Adobe InDesign', 'Vector SVGs', 'Pantone Color Bridge'],
    growthOutcome: '100% Unique Trademark-Ready Designs & High Brand Premium Perception'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Head of Growth',
    company: 'Fintech Nexus Solutions',
    avatarSeed: 'sarah',
    text: 'Utipromo Inc completely rebuilt our client acquisition funnel. Their React engineering combined with targeted technical SEO increased our inbound organic leads by 210% in under four months. Their attention to negative space and load times is pristine.',
    rating: 5,
    metric: '+210% Inbound Leads'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Founder & CEO',
    company: 'Sonder Apparel Brooklyn',
    avatarSeed: 'marcus',
    text: 'Our previous agency focused purely on vanity clicks. Utipromo took over our SMM campaigns and restructured our Klaviyo flows. We registered an immediate 4.5x Return on Ad Spend (ROAS) and recovered over $45k in cart abandonment within 90 days.',
    rating: 5,
    metric: '4.5x Campaign ROAS'
  },
  {
    id: 3,
    name: 'Amara Diop',
    role: 'Operations Director',
    company: 'Apex Logistics Global',
    avatarSeed: 'amara',
    text: 'Utipromo Inc created a stunning, lightning-fast platform that our clients absolutely love. The custom interactive calculators they added has cut our quotation friction by half. Fast, responsive, and incredibly easy to work with.',
    rating: 5,
    metric: '50% Faster Quotes'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'How does the interactive project estimator translate to an official project quotation?',
    answer: 'Our project estimator provides an instant, algorithmic approximation of scope and pricing based on current industry standards. When you select "Proceed to Quote," your custom inputs (services, tier, speed, and selected add-ons) are compiled and automatically attached to our booking system. A senior development strategist will review your custom plan and send a final scope proposal within 24 hours.',
    category: 'process'
  },
  {
    id: 2,
    question: 'Do you work with pre-made templates or build entirely custom digital solutions?',
    answer: 'We build 100% custom digital solutions. We strictly do not use heavy, pre-made WordPress themes or drag-and-drop builders that bloat your source code. Every website we deliver is hand-coded using modern React/Vite/Next.js architectures and styled with fluid, utility-first Tailwind CSS. This guarantees high performance, security, and an interface that scales elegantly.',
    category: 'services'
  },
  {
    id: 3,
    question: 'Where is Utipromo Inc physically located, and do you support remote global clients?',
    answer: 'Our physical headquarters is in Brooklyn, New York (located at 1344 Rockway Pkwy Apt 2 Brooklyn, NY 11236). While we love hosting local clients from the tri-state area, we operate as a modern, globally connected agency. We utilize asynchronous project dashboards and structured Slack/Meet updates to coordinate seamlessly with clients worldwide.',
    category: 'general'
  },
  {
    id: 4,
    question: 'What is your refund policy if the project scope changes midway through execution?',
    answer: 'We maintain a highly clear, client-friendly Refund Policy. We work in distinct milestones with clear design approval phases. If you choose to terminate a project before design sign-off, you are eligible for a complete refund of all unstarted milestones, minus the initial discovery deposit. Please review our complete Refund Policy page (#/refund) for full details.',
    category: 'billing'
  },
  {
    id: 5,
    question: 'How do you handle ongoing search engine ranking adjustments (SEO)?',
    answer: 'Search algorithms shift constantly. Our SEO retainers include continuous indexation health checks, technical site crawl monitoring, search intent keyword updates, and content expansions. We provide transparent monthly dashboards mapping organic click changes, search engine impressions, and domain rank progress.',
    category: 'services'
  }
];
