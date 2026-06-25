import React, { useState, useEffect } from 'react';
import { AppRoute, EstimateState } from '../types';
import { SERVICES } from '../data/servicesData';
import { Calculator, Clock, Check, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface EstimateCalculatorProps {
  onProceedToQuote: (estimate: EstimateState) => void;
  initialServiceId?: AppRoute | 'all';
}

export default function EstimateCalculator({ onProceedToQuote, initialServiceId = 'all' }: EstimateCalculatorProps) {
  const [serviceId, setServiceId] = useState<AppRoute | 'all'>(initialServiceId);
  const [tier, setTier] = useState<EstimateState['tier']>('professional');
  const [speed, setSpeed] = useState<EstimateState['speed']>('standard');
  const [addons, setAddons] = useState<string[]>([]);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [calculatedTimeline, setCalculatedTimeline] = useState('');

  // Handle prop changes
  useEffect(() => {
    if (initialServiceId) {
      setServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Pricing constants
  const tierMultipliers = {
    starter: 1.0,
    professional: 1.8,
    enterprise: 3.2,
  };

  const speedMultipliers = {
    standard: 1.0,
    express: 1.25,
    rush: 1.5,
  };

  const addonPrices: { [key: string]: number } = {
    blueprint: 450,
    analytics: 250,
    priority: 350,
    seo_audit: 200,
  };

  const addonNames: { [key: string]: string } = {
    blueprint: 'High-Fidelity UI Design Blueprint (+$450)',
    analytics: 'Advanced Google Analytics & Event Pixel Setup (+$250)',
    priority: '24/7 Dedicated Slack Channel Support (+$350)',
    seo_audit: 'Deep Competitor Keyword Audit & Map (+$200)',
  };

  useEffect(() => {
    // Determine baseline price
    let basePrice = 1200; // default for 'all' / mixed scope
    if (serviceId !== 'all') {
      const selectedSrv = SERVICES.find(s => s.id === serviceId);
      if (selectedSrv) {
        basePrice = selectedSrv.startingPrice;
      }
    }

    // Apply tier multiplier
    let finalPrice = basePrice * tierMultipliers[tier];

    // Apply speed multiplier
    finalPrice = finalPrice * speedMultipliers[speed];

    // Add add-ons
    addons.forEach(addon => {
      finalPrice += addonPrices[addon] || 0;
    });

    setCalculatedPrice(Math.round(finalPrice));

    // Calculate dynamic timelines
    let baseDays = 20;
    if (serviceId !== 'all') {
      if (serviceId === 'web-development') baseDays = 25;
      else if (serviceId === 'logo-design') baseDays = 12;
      else baseDays = 14;
    }

    // Scale by tier
    if (tier === 'starter') baseDays = Math.round(baseDays * 0.85);
    else if (tier === 'enterprise') baseDays = Math.round(baseDays * 1.5);

    // Scale by speed
    if (speed === 'express') baseDays = Math.round(baseDays * 0.7);
    else if (speed === 'rush') baseDays = Math.round(baseDays * 0.45);

    // Ensure at least a realistic threshold
    const finalDays = Math.max(baseDays, 3);
    setCalculatedTimeline(`${finalDays} Business Days`);
  }, [serviceId, tier, speed, addons]);

  const toggleAddon = (addon: string) => {
    if (addons.includes(addon)) {
      setAddons(addons.filter(a => a !== addon));
    } else {
      setAddons([...addons, addon]);
    }
  };

  const handleSubmit = () => {
    onProceedToQuote({
      serviceId,
      tier,
      speed,
      addons
    });
  };

  return (
    <div
      id="calculator-widget"
      className="bg-slate-900/60 border border-slate-850 rounded-2xl p-6 lg:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl"
    >
      {/* Absolute glow background decorative ornament */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-sans font-bold text-lg text-white">Interactive Project Estimator</h3>
          <p className="text-xs text-slate-400">Configure your parameters to calculate a real-time dynamic estimate.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Parameters Controls (8 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Service Selector */}
          <div id="calc-group-service" className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">1. Core Capability</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                id="calc-service-all"
                onClick={() => setServiceId('all')}
                className={`py-2 px-3 text-xs font-medium rounded-lg text-center transition-all border ${
                  serviceId === 'all'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30 font-semibold'
                    : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-white hover:bg-slate-900'
                }`}
              >
                Comprehensive Mix
              </button>
              {SERVICES.map(srv => (
                <button
                  key={srv.id}
                  id={`calc-service-${srv.id}`}
                  onClick={() => setServiceId(srv.id)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg text-left truncate transition-all border ${
                    serviceId === srv.id
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30 font-semibold'
                      : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {srv.title}
                </button>
              ))}
            </div>
          </div>

          {/* Project Tier */}
          <div id="calc-group-tier" className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">2. Service & Tier Depth</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                id="calc-tier-starter"
                onClick={() => setTier('starter')}
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  tier === 'starter'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-white'
                }`}
              >
                <span className="block text-xs font-bold leading-none">Starter</span>
                <span className="block text-[9px] text-slate-500 leading-none mt-1">1.0x Baseline</span>
              </button>
              <button
                id="calc-tier-pro"
                onClick={() => setTier('professional')}
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  tier === 'professional'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-white'
                }`}
              >
                <span className="block text-xs font-bold leading-none">Professional</span>
                <span className="block text-[9px] text-slate-500 leading-none mt-1">1.8x Advanced</span>
              </button>
              <button
                id="calc-tier-enterprise"
                onClick={() => setTier('enterprise')}
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  tier === 'enterprise'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-white'
                }`}
              >
                <span className="block text-xs font-bold leading-none">Enterprise</span>
                <span className="block text-[9px] text-slate-500 leading-none mt-1">3.2x Complete</span>
              </button>
            </div>
          </div>

          {/* Delivery Velocity */}
          <div id="calc-group-speed" className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">3. Delivery Velocity</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                id="calc-speed-standard"
                onClick={() => setSpeed('standard')}
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  speed === 'standard'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-white'
                }`}
              >
                <span className="block text-xs font-bold leading-none">Standard</span>
                <span className="block text-[9px] text-slate-500 leading-none mt-1">Default pace</span>
              </button>
              <button
                id="calc-speed-express"
                onClick={() => setSpeed('express')}
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  speed === 'express'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-white'
                }`}
              >
                <span className="block text-xs font-bold leading-none">Express</span>
                <span className="block text-[9px] text-slate-500 leading-none mt-1">+25% cost / fast</span>
              </button>
              <button
                id="calc-speed-rush"
                onClick={() => setSpeed('rush')}
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  speed === 'rush'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-white'
                }`}
              >
                <span className="block text-xs font-bold leading-none">Rush Queue</span>
                <span className="block text-[9px] text-slate-500 leading-none mt-1">+50% cost / urgent</span>
              </button>
            </div>
          </div>

          {/* Add-ons Checklist */}
          <div id="calc-group-addons" className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">4. Tailored Add-Ons</label>
            <div className="space-y-2">
              {Object.keys(addonPrices).map(key => (
                <label
                  key={key}
                  id={`calc-addon-label-${key}`}
                  className="flex items-center space-x-3 p-2 rounded-lg bg-slate-950/80 border border-slate-900/60 hover:bg-slate-900 transition-colors cursor-pointer text-xs text-slate-300"
                >
                  <input
                    id={`calc-addon-check-${key}`}
                    type="checkbox"
                    checked={addons.includes(key)}
                    onChange={() => toggleAddon(key)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500/20 focus:ring-offset-slate-950 bg-slate-900 border-slate-800"
                  />
                  <span>{addonNames[key]}</span>
                </label>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Estimates Breakdown Sidecard (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950 border border-slate-900 rounded-xl p-6 relative">
          
          <div className="space-y-5">
            <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider text-amber-500 bg-amber-500/5 rounded uppercase">
              Current Calculation
            </span>

            {/* Dyn Cost output in beautiful large typography */}
            <div className="space-y-1">
              <span className="block text-xs text-slate-500 font-mono">ESTIMATED PRICE RANGE</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-3xl font-mono font-bold text-white tracking-tight">
                  ${calculatedPrice.toLocaleString()}
                </span>
                <span className="text-slate-400 font-medium text-xs">USD</span>
              </div>
            </div>

            {/* Dynamic Timeline */}
            <div className="flex items-center space-x-3 py-2 border-y border-slate-900">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="block text-[10px] text-slate-500 uppercase font-mono leading-none">Timeline Projection</span>
                <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                  {calculatedTimeline}
                </span>
              </div>
            </div>

            {/* Service Specific Features List */}
            <div className="space-y-2.5">
              <span className="block text-[10px] text-slate-500 uppercase font-mono tracking-wider">Project Inclusions</span>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <span>Custom scope based on <strong>{serviceId === 'all' ? 'mixed multichannel growth' : SERVICES.find(s=>s.id === serviceId)?.title}</strong> requirements.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <span>Designed using high-contrast <strong>Nordic Slate & Warm Amber</strong> color schemes.</span>
                </div>
                {tier === 'starter' && (
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span>Essential components & responsive frameworks perfect for prototypes.</span>
                  </div>
                )}
                {tier === 'professional' && (
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span>Comprehensive A/B analysis, advanced schemas, & custom layouts.</span>
                  </div>
                )}
                {tier === 'enterprise' && (
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span>Priority 24/7 dedicated support, serverless scaling, & dedicated account manager.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-900 space-y-3">
            <button
              id="calc-proceed-cta"
              onClick={handleSubmit}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono uppercase tracking-wider font-bold rounded-lg transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-amber-500/5"
            >
              <span>Proceed to Official Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-start space-x-2">
              <AlertCircle className="w-3.5 h-3.5 text-slate-500 mt-0.5 shrink-0" />
              <p className="text-[10px] text-slate-500 leading-normal">
                Estimates are calculated algorithmically and represent standard industry scales. Final scope and contracts will confirm exact legal fee structures.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
