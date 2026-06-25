import React, { useState, useEffect } from 'react';
import { AppRoute, EstimateState } from './types';
import { SERVICES, TESTIMONIALS, FAQS } from './data/servicesData';
import Header from './components/Header';
import Footer from './components/Footer';
import EstimateCalculator from './components/EstimateCalculator';
import ContactForm from './components/ContactForm';
import ServiceDetail from './components/ServiceDetail';
import {
  Code, Share2, Search, Mail, PenTool, Layers,
  Phone, MapPin, Sparkles, Star, ChevronDown, Check,
  ArrowRight, Award, Target, Shield, CheckCircle2,
  Clock, Landmark, HelpCircle, Users, ExternalLink, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function parseHash(hash: string): AppRoute {
  const path = hash.replace(/^#\/?/, '');
  if (!path) return 'home';
  
  const allowedRoutes: AppRoute[] = [
    'home', 'about', 'services', 'web-development', 'smm', 'seo',
    'email-marketing', 'content-writing', 'logo-design', 'contact',
    'privacy', 'terms', 'refund'
  ];
  
  if (allowedRoutes.includes(path as AppRoute)) {
    return path as AppRoute;
  }
  return 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('home');
  const [prefilledEstimate, setPrefilledEstimate] = useState<EstimateState | null>(null);
  const [calculatorPreset, setCalculatorPreset] = useState<AppRoute | 'all'>('all');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState<'all' | 'general' | 'services' | 'process' | 'billing'>('all');

  // Router listener
  useEffect(() => {
    const handleHashChange = () => {
      const route = parseHash(window.location.hash);
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial routing check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: AppRoute) => {
    window.location.hash = `#/${route}`;
  };

  const handleProceedToQuote = (estimate: EstimateState) => {
    setPrefilledEstimate(estimate);
    navigateTo('contact');
  };

  const handleConfigureEstimate = (serviceId: AppRoute) => {
    setCalculatorPreset(serviceId);
    navigateTo('home');
    setTimeout(() => {
      document.getElementById('estimator-anchor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Map service icons
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'Share2': return Share2;
      case 'Search': return Search;
      case 'Mail': return Mail;
      case 'PenTool': return PenTool;
      case 'Layers': return Layers;
      default: return Sparkles;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-white">
      
      {/* Navigation Header */}
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-grow pt-24 pb-16">
        
        <AnimatePresence mode="wait">
          {currentRoute === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-24"
            >
              {/* Hero Section */}
              <section id="hero-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 relative">
                {/* Decorative Amber Blur Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -top-12 right-10 w-80 h-80 bg-slate-800/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column Text details */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    
                    {/* Floating Status Badge */}
                    <div id="hero-badge" className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/5 border border-amber-500/25 rounded-full">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                      <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase">
                        Bespoke Software & Marketing Engineering
                      </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-[1.05]">
                      We scale business revenue with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">obsessive execution.</span>
                    </h1>
                    
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
                      At Utipromo Inc, we bypass slow drag-and-drop builders. We hand-code lightning-fast React architectures and optimize technical SEO, social systems, and automated email funnels to secure high-intent acquisitions.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        id="hero-estimate-cta"
                        onClick={() => {
                          document.getElementById('estimator-anchor')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono uppercase tracking-wider font-extrabold rounded-lg transition-all shadow-lg shadow-amber-500/10 flex items-center space-x-2"
                      >
                        <span>Calculate Cost Estimate</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <button
                        id="hero-capabilities-cta"
                        onClick={() => navigateTo('services')}
                        className="px-6 py-3.5 bg-slate-900 hover:bg-slate-850 text-slate-200 text-xs font-mono uppercase tracking-wider font-extrabold rounded-lg border border-slate-800 transition-all"
                      >
                        Explore Capabilities
                      </button>
                    </div>

                    {/* Mini Trust Badges */}
                    <div className="pt-6 border-t border-slate-900/60 flex flex-wrap gap-x-8 gap-y-3 text-slate-500 text-xs font-mono">
                      <div className="flex items-center space-x-1.5">
                        <Check className="w-4 h-4 text-amber-500" />
                        <span>100% Custom Source Code</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Check className="w-4 h-4 text-amber-500" />
                        <span>Brooklyn-Based HQ</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Check className="w-4 h-4 text-amber-500" />
                        <span>Zero Outsourcing Retainers</span>
                      </div>
                    </div>

                  </div>

                  {/* Right Column Abstract Web Dashboard illustration */}
                  <div className="lg:col-span-5 relative">
                    <div className="w-full bg-slate-900/40 border border-slate-850 rounded-2xl p-4 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                      <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-4">
                        <div className="flex space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50"></span>
                        </div>
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">utipromo-dashboard.app</span>
                        <span className="w-4"></span>
                      </div>

                      {/* Geometric UI representation */}
                      <div className="space-y-4">
                        <div className="h-24 bg-slate-950/80 rounded-xl p-4 border border-slate-900 flex flex-col justify-between">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono text-slate-400 uppercase">MONTHLY REVENUE CAPTURE</span>
                            <span className="text-[9px] text-green-400 font-mono">+12.4% MoM</span>
                          </div>
                          <div className="flex items-baseline space-x-2">
                            <span className="text-3xl font-bold font-mono text-white">$45,820</span>
                            <span className="text-[10px] text-slate-500 font-mono">USD</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-16 bg-slate-950/80 rounded-lg p-3 border border-slate-900 flex flex-col justify-between">
                            <span className="text-[9px] font-mono text-slate-500 uppercase">CORE WEB VITALS</span>
                            <span className="text-sm font-bold font-mono text-amber-500">99 / 100</span>
                          </div>
                          <div className="h-16 bg-slate-950/80 rounded-lg p-3 border border-slate-900 flex flex-col justify-between">
                            <span className="text-[9px] font-mono text-slate-500 uppercase">SEARCH IMPRESSIONS</span>
                            <span className="text-sm font-bold font-mono text-white">412.5k</span>
                          </div>
                        </div>

                        {/* Custom drawing showing a line graph (SVG) */}
                        <div className="h-28 bg-slate-950/80 rounded-xl p-3 border border-slate-900 relative flex items-end">
                          <div className="absolute top-2.5 left-3 text-[9px] font-mono text-slate-500 uppercase">CONVERSION VELOCITY TREND</div>
                          
                          <svg className="w-full h-16 opacity-85" viewBox="0 0 300 80">
                            <defs>
                              <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
                                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
                              </linearGradient>
                            </defs>
                            {/* Area fill */}
                            <path d="M 0 70 Q 50 60, 90 40 T 180 25 T 300 10 L 300 80 L 0 80 Z" fill="url(#chart-glow)" />
                            {/* Line path */}
                            <path d="M 0 70 Q 50 60, 90 40 T 180 25 T 300 10" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                            {/* Interactive pulse dots */}
                            <circle cx="90" cy="40" r="3" fill="#f59e0b" />
                            <circle cx="180" cy="25" r="3" fill="#f59e0b" />
                            <circle cx="300" cy="10" r="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Strategic Statistics Band */}
              <section id="statistics-band" className="bg-slate-950 py-12 border-y border-slate-900/60 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div id="stat-1" className="space-y-1">
                      <span className="block text-4xl font-mono font-extrabold text-white">99.2%</span>
                      <span className="block text-xs font-mono uppercase tracking-widest text-slate-500">Core Web Vital Score</span>
                      <p className="text-xs text-slate-400 leading-normal max-w-xs pt-1">
                        Our sites load almost instantly, preventing immediate client drop-off.
                      </p>
                    </div>
                    <div id="stat-2" className="space-y-1 md:border-l md:border-slate-900 md:pl-10">
                      <span className="block text-4xl font-mono font-extrabold text-white">150+</span>
                      <span className="block text-xs font-mono uppercase tracking-widest text-slate-500">Brands Scaled Up</span>
                      <p className="text-xs text-slate-400 leading-normal max-w-xs pt-1">
                        Guiding small start-ups & corporate enterprises to complete market dominance.
                      </p>
                    </div>
                    <div id="stat-3" className="space-y-1 md:border-l md:border-slate-900 md:pl-10">
                      <span className="block text-4xl font-mono font-extrabold text-white">15M+</span>
                      <span className="block text-xs font-mono uppercase tracking-widest text-slate-500">Monthly Impressions</span>
                      <p className="text-xs text-slate-400 leading-normal max-w-xs pt-1">
                        High-intent search positions & organic viral social matrices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Six Core Services Teasers */}
              <section id="services-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-500 bg-amber-500/5 px-2 py-1 rounded">
                    COMPLETE GROWTH CATALOG
                  </span>
                  <h2 className="text-3xl md:text-4.5xl font-sans font-black tracking-tight text-white leading-none">
                    Tailored service lines engineered for high conversions.
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We cover the entire client-acquisition cycle. Review our expert services below and click to analyze deliverables, roadmaps, and tech stacks.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES.map((srv) => {
                    const IconComponent = getServiceIcon(srv.iconName);
                    return (
                      <div
                        key={srv.id}
                        id={`home-srv-card-${srv.id}`}
                        className="bg-slate-900/30 border border-slate-900/80 rounded-2xl p-6 hover:border-slate-800 hover:bg-slate-900/50 transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform duration-300">
                            <IconComponent className="w-5.5 h-5.5 stroke-[2]" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-sans font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                                {srv.title}
                              </h3>
                              <span className="text-[10px] font-mono text-slate-500">STARTING PRICE</span>
                            </div>
                            
                            <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                              {srv.shortDesc}
                            </p>
                          </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-slate-950 flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="block text-[9px] font-mono text-slate-500 leading-none">ESTIMATE BASE</span>
                            <span className="text-sm font-mono font-bold text-white">${srv.startingPrice.toLocaleString()}+</span>
                          </div>

                          <button
                            id={`srv-learn-${srv.id}`}
                            onClick={() => navigateTo(srv.id)}
                            className="text-xs font-mono uppercase tracking-wider text-amber-500 hover:text-amber-400 font-bold flex items-center space-x-1"
                          >
                            <span>Analyze</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Cost Estimator Container */}
              <section id="estimator-anchor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
                    TRANSPARENT VALUE ENGINE
                  </span>
                  <h2 className="text-2xl md:text-3.5xl font-sans font-extrabold tracking-tight text-white leading-none">
                    No opaque agency pricing. Compute your exact parameters.
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Select your core discipline, required service tier, and timeline velocity to inspect your baseline contract values.
                  </p>
                </div>

                <EstimateCalculator
                  initialServiceId={calculatorPreset}
                  onProceedToQuote={handleProceedToQuote}
                />
              </section>

              {/* Testimonials */}
              <section id="endorsements-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-500 bg-amber-500/5 px-2 py-1 rounded">
                    CLIENT VOUCHERS
                  </span>
                  <h2 className="text-2xl md:text-3.5xl font-sans font-extrabold tracking-tight text-white leading-none">
                    Strategic accomplishments from real-world campaigns.
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((test) => (
                    <div
                      key={test.id}
                      id={`testimonial-card-${test.id}`}
                      className="bg-slate-900/35 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(test.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 stroke-none" />
                          ))}
                        </div>

                        <p className="text-slate-300 text-xs leading-relaxed italic">
                          "{test.text}"
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-950 flex items-center justify-between">
                        <div>
                          <span className="block text-xs font-bold text-slate-100">{test.name}</span>
                          <span className="block text-[10px] text-slate-500 font-medium">{test.role}, {test.company}</span>
                        </div>
                        
                        <div className="text-right">
                          <span className="block text-[8px] font-mono text-slate-500 uppercase leading-none">GROWTH RECORD</span>
                          <span className="text-xs font-mono font-bold text-amber-400 leading-none block mt-1">{test.metric}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Accordion FAQ Widget */}
              <section id="faqs-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-3.5xl font-sans font-extrabold tracking-tight text-white">
                    Frequently Answered Queries
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Review transparent responses regarding our custom React code, legal agreements, and physical Brooklyn operating hours.
                  </p>
                </div>

                {/* Filter categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 text-xs font-mono">
                  {['all', 'general', 'services', 'process', 'billing'].map((cat) => (
                    <button
                      key={cat}
                      id={`faq-filter-${cat}`}
                      onClick={() => {
                        setFaqCategory(cat as any);
                        setActiveFAQ(null);
                      }}
                      className={`px-3 py-1.5 rounded-lg border uppercase tracking-wider transition-colors ${
                        faqCategory === cat
                          ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold'
                          : 'bg-slate-900 border-slate-850 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="space-y-3">
                  {FAQS.filter(f => faqCategory === 'all' || f.category === faqCategory).map((faq) => {
                    const isOpen = activeFAQ === faq.id;
                    return (
                      <div
                        key={faq.id}
                        id={`faq-card-${faq.id}`}
                        className="bg-slate-900/40 border border-slate-900 rounded-xl overflow-hidden transition-all duration-200"
                      >
                        <button
                          id={`faq-trigger-${faq.id}`}
                          onClick={() => setActiveFAQ(isOpen ? null : faq.id)}
                          className="w-full text-left p-5 flex items-center justify-between text-slate-200 hover:text-white focus:outline-none"
                        >
                          <span className="font-semibold text-sm leading-snug pr-4">{faq.question}</span>
                          <span className="p-1 rounded-lg bg-slate-950 border border-slate-850 shrink-0 text-amber-500">
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                          </span>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              id={`faq-body-${faq.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-5 pb-5 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-900/40">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>

            </motion.div>
          )}

          {currentRoute === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16"
            >
              {/* Profile Intro Header */}
              <div className="text-left space-y-4 max-w-4xl">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
                  OUR CORPORATE IDENTITY
                </span>
                <h1 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-none">
                  Uniting software engineering with client conversions.
                </h1>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed pt-2">
                  At Utipromo Inc, we believe that beautiful layouts are useless if they don't load instantly and scale organic leads. Founded and anchored in Brooklyn, NY, we act as a hybrid product engineering and brand-positioning studio. We build custom applications using scalable React/Vite frameworks and structure white-hat marketing channels to achieve exponential client returns.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="space-y-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-slate-900 pb-2">
                  Our Structural Pillars
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-900/35 border border-slate-900 rounded-xl space-y-3">
                    <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h4 className="font-sans font-bold text-white text-base">Obsessive Engineering Precision</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      We strictly hand-code every script, schema, and layout module. By avoiding the code bloat of standard generic page builders, we ensure pristine performance benchmarks on all networks.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-900/35 border border-slate-900 rounded-xl space-y-3">
                    <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="font-sans font-bold text-white text-base">Conversion-Focused Marketing</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Creative aesthetics are backed by hardcore metrics. Whether compiling Meta ad splits, performing Technical SEO Crawls, or optimizing email open rates, we keep your ROI as our absolute north star.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-900/35 border border-slate-900 rounded-xl space-y-3">
                    <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <h4 className="font-sans font-bold text-white text-base">Complete Operational Integrity</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      No opaque quotes or hidden fees. We work in highly clear milestone stages with explicit client sign-off gates. You own 100% of the developed source files and vector assets upon final completion.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-900/35 border border-slate-900 rounded-xl space-y-3">
                    <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <h4 className="font-sans font-bold text-white text-base">Asynchronous Collaboration Models</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      We provide high-frequency updates via structured Slack boards, Notion timelines, and bi-weekly growth diagnostics, keeping you completely informed without blocking your daily operating schedules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Workflow Diagrams Horizontal */}
              <div className="space-y-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-slate-900 pb-2">
                  Standard Engagement Lifecycle
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-slate-950 p-4 border border-slate-900 rounded-xl relative">
                    <span className="absolute top-2.5 right-3 text-xs font-mono text-slate-600">STAGE 01</span>
                    <h5 className="font-bold text-sm text-slate-100 pr-8">Discovery & Diagnostics</h5>
                    <p className="text-slate-400 text-[11px] leading-relaxed mt-2">
                      Deep auditing of your current index scores, competitor social campaigns, and key structural conversion bottlenecks.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-4 border border-slate-900 rounded-xl relative">
                    <span className="absolute top-2.5 right-3 text-xs font-mono text-slate-600">STAGE 02</span>
                    <h5 className="font-bold text-sm text-slate-100 pr-8">High-Fi Blueprints</h5>
                    <p className="text-slate-400 text-[11px] leading-relaxed mt-2">
                      We sketch comprehensive responsive layouts, vector identities, and flow pathways for explicit review.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-4 border border-slate-900 rounded-xl relative">
                    <span className="absolute top-2.5 right-3 text-xs font-mono text-slate-600">STAGE 03</span>
                    <h5 className="font-bold text-sm text-slate-100 pr-8">Type-Safe Coding</h5>
                    <p className="text-slate-400 text-[11px] leading-relaxed mt-2">
                      Engineering interactive modules, styling with Tailwind, compiling email HTML, and launching campaign parameters.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-4 border border-slate-900 rounded-xl relative">
                    <span className="absolute top-2.5 right-3 text-xs font-mono text-slate-600">STAGE 04</span>
                    <h5 className="font-bold text-sm text-slate-100 pr-8">Continuous ROI Scaling</h5>
                    <p className="text-slate-400 text-[11px] leading-relaxed mt-2">
                      A/B testing creative assets, adjusting crawl parameters, review analytics tracking, and scaling campaign budgets.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {currentRoute === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16"
            >
              {/* Services catalog introduction header */}
              <div className="text-left space-y-4 max-w-3xl">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
                  COMPLETE CAPABILITIES REGISTRY
                </span>
                <h1 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-none">
                  Expert services engineered to capture market demand.
                </h1>
                <p className="text-slate-300 text-sm leading-relaxed pt-1">
                  We maintain in-house expertise across the entire growth cycle. From initial scalable React development to long-term SEO positioning, our outputs are pristine. Select any discipline below to access detailed overviews.
                </p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((srv) => {
                  const Icon = getServiceIcon(srv.iconName);
                  return (
                    <div
                      key={srv.id}
                      id={`srv-catalog-card-${srv.id}`}
                      className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 hover:border-slate-850 hover:bg-slate-900/50 transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center text-amber-500">
                          <Icon className="w-5.5 h-5.5" />
                        </div>

                        <div className="space-y-1.5">
                          <h3 className="font-sans font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                            {srv.title}
                          </h3>
                          <p className="text-slate-400 text-xs leading-relaxed line-clamp-4">
                            {srv.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-6 mt-8 border-t border-slate-950 flex items-center justify-between">
                        <div className="space-y-0.5">
                          <span className="block text-[8px] font-mono text-slate-500">BASELINE CONTRACT</span>
                          <span className="text-sm font-mono font-bold text-white">${srv.startingPrice.toLocaleString()}+</span>
                        </div>

                        <button
                          id={`catalog-srv-btn-${srv.id}`}
                          onClick={() => navigateTo(srv.id)}
                          className="px-4 py-2 bg-slate-950 hover:bg-slate-900 rounded-lg text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold border border-slate-850 hover:border-slate-800 transition-all"
                        >
                          Deep-Dive
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* General CTA block to redirect back to home estimator */}
              <div className="p-8 bg-slate-900/50 border border-slate-900 rounded-2xl flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg text-white">Need an immediate itemized cost overview?</h3>
                  <p className="text-xs text-slate-400 max-w-xl">
                    Our dynamic estimator combines base prices with desired support tiers and speeds to calculate an exact customized project estimate instantly.
                  </p>
                </div>

                <div>
                  <button
                    id="catalog-estimator-btn"
                    onClick={() => {
                      setCalculatorPreset('all');
                      navigateTo('home');
                      setTimeout(() => {
                        document.getElementById('estimator-anchor')?.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono uppercase tracking-wider font-extrabold rounded-lg transition-all flex items-center space-x-2"
                  >
                    <span>Launch Estimation Tool</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          )}

          {/* Service sub-details (web-dev, SMM, SEO, etc.) */}
          {['web-development', 'smm', 'seo', 'email-marketing', 'content-writing', 'logo-design'].includes(currentRoute) && (
            <motion.div
              key={currentRoute}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
              <ServiceDetail
                serviceId={currentRoute}
                onNavigate={navigateTo}
                onConfigureEstimate={handleConfigureEstimate}
              />
            </motion.div>
          )}

          {currentRoute === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
              <ContactForm
                prefilledEstimate={prefilledEstimate}
                onClearEstimate={() => setPrefilledEstimate(null)}
              />
            </motion.div>
          )}

          {currentRoute === 'privacy' && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-slate-300"
            >
              <h1 className="text-3xl font-sans font-black tracking-tight text-white mb-2">Privacy Policy</h1>
              <p className="text-xs font-mono text-slate-500 uppercase">Effective Date: June 25, 2026</p>
              
              <p className="text-sm leading-relaxed">
                At Utipromo Inc (referred to as "Utipromo," "we," "us," or "our"), safeguarding your privacy is a paramount commitment. This Privacy Policy describes how we collect, process, utilize, and protect your company information when you interact with our online static platform (https://utipromoinc.com) or submit detailed digital inquiries.
              </p>

              <h3 className="text-lg font-bold text-white pt-4">1. Information We Collect</h3>
              <p className="text-sm leading-relaxed">
                When you interact with our contact forms, newsletter signup portals, or dynamic project estimators, we collect details including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs text-slate-400 pl-4">
                <li>Your name and job title.</li>
                <li>Corporate contact data including email addresses and phone numbers.</li>
                <li>Your business name and general project requirements.</li>
                <li>Custom parameters input into our interactive quotation tools.</li>
                <li>Analytics data including browser types, time duration, and navigation routes.</li>
              </ul>

              <h3 className="text-lg font-bold text-white pt-4">2. How We Utilize Collected Information</h3>
              <p className="text-sm leading-relaxed">
                We utilize your compiled parameters solely to fulfill your requests, specifically:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs text-slate-400 pl-4">
                <li>Creating comprehensive custom pricing proposals and project blueprints.</li>
                <li>Managing discovery call dates and coordinating telephone consultations.</li>
                <li>Distributing technical growth newsletters (which you can opt-out of instantly).</li>
                <li>Reviewing site usage analytics to optimize our platform’s responsive design.</li>
              </ul>

              <h3 className="text-lg font-bold text-white pt-4">3. Security Measures</h3>
              <p className="text-sm leading-relaxed">
                We implement robust security frameworks to prevent unauthorized access or disclosure of your inquiries. Because we bypass heavy third-party plug-ins and databases, your submitted communications are processed directly through secure, isolated serverless endpoints.
              </p>

              <h3 className="text-lg font-bold text-white pt-4">4. Cookie & Pixel Configurations</h3>
              <p className="text-sm leading-relaxed">
                We may utilize minor cookies or analytics trackers (e.g. Google Analytics) to measure page flow speeds and compile campaign conversion records. You can disable cookies directly inside your browser settings without experiencing any layout blockages.
              </p>

              <h3 className="text-lg font-bold text-white pt-4">5. Direct Inquiries & Data Queries</h3>
              <p className="text-sm leading-relaxed">
                If you have questions regarding this policy, or wish to query, modify, or completely delete your contact records from our lists, please reach out directly:
              </p>
              <p className="text-sm font-mono text-amber-500">
                Email: info@utipromoinc.com<br />
                Address: 1344 Rockway Pkwy Apt 2 Brooklyn, NY 11236
              </p>
            </motion.div>
          )}

          {currentRoute === 'terms' && (
            <motion.div
              key="terms"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-slate-300"
            >
              <h1 className="text-3xl font-sans font-black tracking-tight text-white mb-2">Terms & Conditions</h1>
              <p className="text-xs font-mono text-slate-500 uppercase">Last Updated: June 25, 2026</p>
              
              <p className="text-sm leading-relaxed">
                Welcome to Utipromo Inc. By accessing this platform (https://utipromoinc.com), utilizing our dynamic cost estimators, or scheduling free growth strategy consultation calls, you agree to comply with and be bound by the following terms and conditions.
              </p>

              <h3 className="text-lg font-bold text-white pt-4">1. Estimations & Algorithmic Proposals</h3>
              <p className="text-sm leading-relaxed">
                Prices and timelines calculated using our online interactive project estimator are for illustrative purposes and represent baseline starting points. They do not constitute a formal binding legal contract. A formal Statement of Work (SOW) detailing exact project milestones, deliverables, and fees will be executed in writing before any design or development sprints begin.
              </p>

              <h3 className="text-lg font-bold text-white pt-4">2. Intellectual Property Rights</h3>
              <p className="text-sm leading-relaxed">
                Unless otherwise explicitly agreed in writing within an active Statement of Work (SOW):
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs text-slate-400 pl-4">
                <li>Upon complete clearance of all contract milestone fees, Utipromo Inc transfers full intellectual property ownership, source codes, and vector layouts to the client.</li>
                <li>Prior to final payment, all intermediate blueprints, sketches, draft scripts, and design structures remain the sole intellectual property of Utipromo Inc.</li>
              </ul>

              <h3 className="text-lg font-bold text-white pt-4">3. Operating Limitations & Code Audits</h3>
              <p className="text-sm leading-relaxed">
                While we build high-performance custom React, HTML5, and technical configurations tested against modern browsers, we cannot be held legally liable for third-party hosting server downs, API changes made by external networks (e.g. Meta, Klaviyo, Google Search updates), or custom adjustments made to the source codes by the client after final handoff.
              </p>

              <h3 className="text-lg font-bold text-white pt-4">4. Governed Jurisdiction</h3>
              <p className="text-sm leading-relaxed">
                These terms are governed and construed in accordance with the laws of the State of New York, United States. Any formal disputes arising out of these terms shall be subject to exclusive jurisdiction in tribunals situated in Kings County (Brooklyn), New York.
              </p>
            </motion.div>
          )}

          {currentRoute === 'refund' && (
            <motion.div
              key="refund"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-slate-300"
            >
              <h1 className="text-3xl font-sans font-black tracking-tight text-white mb-2">Refund Policy</h1>
              <p className="text-xs font-mono text-slate-500 uppercase">Effective Date: June 25, 2026</p>
              
              <p className="text-sm leading-relaxed">
                At Utipromo Inc, client satisfaction and transparent operations are central to our business values. Because our services — including React development, SEO technical audits, content curation, and brand strategy — are bespoke and involve dedicated developer resources, we operate under a highly structured Milestone Refund Policy.
              </p>

              <h3 className="text-lg font-bold text-white pt-4">1. Non-Refundable Discovery Deposits</h3>
              <p className="text-sm leading-relaxed">
                The initial onboarding and diagnostic discovery fee (typically 20% of the calculated project value) is completely non-refundable once technical blueprinting, domain crawls, and research sprints have initiated.
              </p>

              <h3 className="text-lg font-bold text-white pt-4">2. Milestone-Based Refunds</h3>
              <p className="text-sm leading-relaxed">
                Projects are billed in distinct chronological milestones. If a client chooses to terminate an active contract midway:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs text-slate-400 pl-4">
                <li>Completed milestones that have been reviewed and approved by the client are non-refundable.</li>
                <li>Active milestones where design or development work has already commenced are eligible for a partial, pro-rated refund based on accumulated developer hours.</li>
                <li>Future milestones where no research, assets, or software coding has started are completely 100% refundable.</li>
              </ul>

              <h3 className="text-lg font-bold text-white pt-4">3. Social & Organic Marketing Retainers</h3>
              <p className="text-sm leading-relaxed">
                Monthly retainers for Social Media Marketing (SMM), Search Engine Optimization (SEO), and ongoing support are billed in advance of each 30-day block. Retainers can be canceled anytime with a 15-day notice, but active 30-day blocks where creative development and keyword auditing have begun are non-refundable.
              </p>

              <h3 className="text-lg font-bold text-white pt-4">4. Resolution & Submission Procedures</h3>
              <p className="text-sm leading-relaxed">
                To request a milestone adjustment or submit a refund claim, please notify us in writing containing your project reference, active SOW document, and reason for the request:
              </p>
              <p className="text-sm font-mono text-amber-500">
                Email: info@utipromoinc.com<br />
                Address: Utipromo Inc, Attn: Client Accounts, 1344 Rockway Pkwy Apt 2 Brooklyn, NY 11236
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Footer Navigation Component */}
      <Footer onNavigate={navigateTo} />

    </div>
  );
}
