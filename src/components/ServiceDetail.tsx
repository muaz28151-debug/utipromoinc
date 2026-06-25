import React from 'react';
import { AppRoute, ServiceItem } from '../types';
import { SERVICES } from '../data/servicesData';
import { ArrowLeft, CheckCircle2, ChevronRight, Zap, Award, Layers, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceDetailProps {
  serviceId: AppRoute;
  onNavigate: (route: AppRoute) => void;
  onConfigureEstimate: (serviceId: AppRoute) => void;
}

export default function ServiceDetail({ serviceId, onNavigate, onConfigureEstimate }: ServiceDetailProps) {
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h3 className="text-xl font-sans font-bold text-white">Service Offering Not Found</h3>
        <button
          id="notfound-back-btn"
          onClick={() => onNavigate('services')}
          className="mt-4 px-4 py-2 bg-amber-500 text-slate-950 rounded"
        >
          Return to All Services
        </button>
      </div>
    );
  }

  return (
    <div id={`service-detail-${service.id}`} className="space-y-12">
      
      {/* Back button */}
      <div>
        <button
          id="detail-back-to-catalog"
          onClick={() => onNavigate('services')}
          className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-amber-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Capabilities Catalog</span>
        </button>
      </div>

      {/* Main Hero & Description Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-500">
            <Zap className="w-3.5 h-3.5" />
            <span>EXPERT CAPABILITY ACTIVE</span>
          </div>
          <h1 className="text-3xl md:text-4.5xl font-sans font-extrabold tracking-tight text-white leading-none">
            {service.title}
          </h1>
          <p className="text-sm font-medium text-slate-400 leading-relaxed border-l-2 border-amber-500/40 pl-4 py-1">
            {service.shortDesc}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed pt-3">
            {service.description}
          </p>
        </div>

        {/* Highlight Growth Metric Banner (4 Columns) */}
        <div className="lg:col-span-4 bg-gradient-to-tr from-slate-900 to-slate-950 border border-amber-500/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 text-amber-500/10 font-bold font-mono text-7xl select-none leading-none pointer-events-none">
            %
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">BENCHMARKED TARGET</span>
            </div>
            
            <div className="space-y-1">
              <span className="block text-2xl font-bold font-mono text-white leading-tight">
                {service.growthOutcome.split(' & ')[0]}
              </span>
              {service.growthOutcome.split(' & ')[1] && (
                <span className="block text-xs font-medium text-amber-400 mt-1">
                  & {service.growthOutcome.split(' & ')[1]}
                </span>
              )}
            </div>
            
            <p className="text-[10px] text-slate-500 leading-normal">
              Averages compiled from live customer case reviews. Individual outcomes fluctuate based on starting domains and sector competitive depth.
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Process Workflow vs Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Process workflow (7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-widest text-slate-300">Methodology & Progressive Roadmap</h3>
          
          <div className="space-y-4">
            {service.process.map((p) => (
              <div
                key={p.step}
                id={`detail-step-${p.step}`}
                className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/40 border border-slate-900"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-mono font-bold text-amber-400 shrink-0">
                  {p.step}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">{p.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Technology Stack (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Deliverables Card */}
          <div className="bg-slate-900/60 border border-slate-850 rounded-xl p-5 space-y-4">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-amber-500" />
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">Contractual Deliverables</h4>
            </div>
            
            <ul className="space-y-3">
              {service.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="leading-tight">{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">Utilized Tech & Tool Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  id={`detail-tech-${tech.toLowerCase().replace(/\./g, '-')}`}
                  className="px-2.5 py-1 bg-slate-950 border border-slate-900 rounded-md text-[10px] font-mono text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* CTA Bottom Section */}
      <div className="p-8 bg-slate-900/60 border border-slate-850 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 relative overflow-hidden">
        
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="space-y-2">
          <h3 className="font-sans font-bold text-lg text-white">Ready to lock-in your custom parameters?</h3>
          <p className="text-xs text-slate-400 max-w-lg">
            Transfer this service into our interactive cost estimator tool to calculate custom tiers, speeds, and structural add-ons.
          </p>
        </div>

        <div>
          <button
            id="detail-estimate-cta"
            onClick={() => onConfigureEstimate(service.id)}
            className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono uppercase tracking-wider font-extrabold rounded-lg transition-all flex items-center space-x-2 hover:shadow-lg hover:shadow-amber-500/10 cursor-pointer"
          >
            <span>Launch Estimator</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
