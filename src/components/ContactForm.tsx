import React, { useState, useEffect } from 'react';
import { AppRoute, EstimateState } from '../types';
import { Phone, Mail, MapPin, CheckCircle2, Calendar, Clock, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactFormProps {
  prefilledEstimate: EstimateState | null;
  onClearEstimate?: () => void;
}

export default function ContactForm({ prefilledEstimate, onClearEstimate }: ContactFormProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState<AppRoute | 'all'>('all');
  const [message, setMessage] = useState('');
  
  // Scheduler State
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isBookingCall, setIsBookingCall] = useState(false);

  // Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Synchronize prefilled estimates
  useEffect(() => {
    if (prefilledEstimate) {
      setInterest(prefilledEstimate.serviceId);
      
      const srvName = prefilledEstimate.serviceId === 'all' 
        ? 'Mixed Multichannel Growth' 
        : prefilledEstimate.serviceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

      const detailsMsg = `Hi Utipromo Team, I just configured my project using your interactive calculator:
- Selected Capability: ${srvName}
- Desired Tier: ${prefilledEstimate.tier.toUpperCase()}
- Velocity: ${prefilledEstimate.speed.toUpperCase()}
- Requested Add-Ons: ${prefilledEstimate.addons.length > 0 ? prefilledEstimate.addons.join(', ') : 'None'}

Please review these parameters and provide an official quotation!`;
      setMessage(detailsMsg);
    }
  }, [prefilledEstimate]);

  const dates = [
    { day: 'Mon', num: '29', full: '2026-06-29' },
    { day: 'Tue', num: '30', full: '2026-06-30' },
    { day: 'Wed', num: '01', full: '2026-07-01' },
    { day: 'Thu', num: '02', full: '2026-07-02' },
    { day: 'Fri', num: '03', full: '2026-07-03' },
  ];

  const timeSlots = [
    '09:30 AM EST',
    '11:00 AM EST',
    '02:00 PM EST',
    '03:30 PM EST',
    '04:30 PM EST'
  ];

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'A valid email is required';
    }
    if (isBookingCall) {
      if (!selectedDate) errors.date = 'Please select a date';
      if (!selectedTime) errors.time = 'Please select a slot';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // reset forms
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setInterest('all');
      setMessage('');
      setSelectedDate('');
      setSelectedTime('');
      setIsBookingCall(false);
      if (onClearEstimate) onClearEstimate();
    }, 1200);
  };

  return (
    <div id="contact-wrapper" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Contact Cards & Brooklyn Map SVG (5 Columns) */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider text-amber-500 bg-amber-500/5 rounded uppercase">
            BROOKLYN HQ
          </span>
          <h3 className="text-2xl font-sans font-bold text-white mt-2 leading-tight">Let's Ignite Your Brand</h3>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Drop us a line regarding your growth objectives, or secure a free 30-minute strategic consultation with our development team.
          </p>
        </div>

        {/* Contact info list cards */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/40 border border-slate-900">
            <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono text-slate-500 uppercase">Immediate Hotline</span>
              <a href="tel:9293283801" id="contact-phone-direct" className="text-sm font-semibold text-slate-100 hover:text-amber-400 transition-colors">
                +1 (929) 328-3801
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/40 border border-slate-900">
            <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono text-slate-500 uppercase">Client Support Inbox</span>
              <a href="mailto:info@utipromoinc.com" id="contact-email-direct" className="text-sm font-semibold text-slate-100 hover:text-amber-400 transition-colors">
                info@utipromoinc.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/40 border border-slate-900">
            <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono text-slate-500 uppercase">Physical Agency Address</span>
              <span className="text-sm font-semibold text-slate-200 block leading-tight mt-0.5">
                1344 Rockway Pkwy Apt 2<br />Brooklyn, NY 11236
              </span>
            </div>
          </div>
        </div>

        {/* Stylized custom SVG map representation of Brooklyn street grid around Rockway Pkwy */}
        <div id="vector-map-container" className="rounded-xl border border-slate-900 bg-slate-950 overflow-hidden relative shadow-inner">
          <div className="absolute top-2.5 left-2.5 px-2 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-850 rounded text-[9px] font-mono text-slate-400 z-10">
            GRID SCALE: 40.645° N, 73.905° W (BROOKLYN, NY)
          </div>
          
          <svg
            id="brooklyn-street-grid-svg"
            viewBox="0 0 400 200"
            className="w-full h-48 opacity-70 bg-slate-950"
            style={{ shapeRendering: 'geometricPrecision' }}
          >
            {/* Background grids and coordinate lines */}
            <defs>
              <pattern id="coord-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(245, 158, 11, 0.03)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coord-grid)" />

            {/* Stylized street lines */}
            {/* Rockaway Parkway diagonal line */}
            <line x1="10" y1="190" x2="390" y2="10" stroke="rgba(245, 158, 11, 0.25)" strokeWidth="4" />
            <text x="210" y="80" fill="rgba(245, 158, 11, 0.6)" fontSize="8" fontFamily="monospace" transform="rotate(-25, 210, 80)">
              ROCKAWAY PKWY
            </text>

            {/* Flatlands Ave */}
            <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="2.5" />
            <text x="30" y="115" fill="rgba(148, 163, 184, 0.4)" fontSize="7" fontFamily="monospace">
              FLATLANDS AVE
            </text>

            {/* Glenwood Rd */}
            <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="2" />
            <text x="280" y="55" fill="rgba(148, 163, 184, 0.4)" fontSize="7" fontFamily="monospace">
              GLENWOOD RD
            </text>

            {/* East 96th St */}
            <line x1="120" y1="0" x2="120" y2="200" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1.5" />
            {/* East 98th St */}
            <line x1="220" y1="0" x2="220" y2="200" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1.5" />
            {/* East 102nd St */}
            <line x1="320" y1="0" x2="320" y2="200" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1.5" />

            {/* Anchor Ring Pulsing Highlight */}
            <circle cx="200" cy="100" r="14" fill="rgba(245, 158, 11, 0.15)" className="animate-pulse" />
            <circle cx="200" cy="100" r="7" fill="rgba(245, 158, 11, 0.35)" />
            {/* Exact Location marker dot */}
            <circle cx="200" cy="100" r="3" fill="#f59e0b" />

            {/* Callout box directly embedded */}
            <rect x="180" y="115" width="130" height="24" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1" />
            <text x="186" y="129" fill="#ffffff" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">UTIPROMO INC HEADQUARTERS</text>
            <text x="186" y="136" fill="#94a3b8" fontSize="5.5" fontFamily="sans-serif">1344 Rockway Pkwy Apt 2</text>
          </svg>
        </div>

      </div>

      {/* Actual Form Panel (7 Columns) */}
      <div className="lg:col-span-7 bg-slate-900/45 border border-slate-850 rounded-2xl p-6 md:p-8 backdrop-blur-md">
        
        {isSuccess ? (
          <div id="contact-success-screen" className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-amber-500/15 rounded-full flex items-center justify-center mx-auto mb-2 text-amber-500">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-sans font-bold text-white">Message Logged Successfully</h4>
            <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              Thank you for connecting with Utipromo Inc. A senior strategist has received your parameters and is organizing your custom quote blueprint. We will contact you at your email or telephone within 24 business hours.
            </p>
            <button
              id="success-dismiss-btn"
              onClick={() => setIsSuccess(false)}
              className="mt-6 px-5 py-2.5 bg-slate-950 border border-slate-850 hover:bg-slate-900 rounded-lg text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold transition-all"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="border-b border-slate-850 pb-4 mb-4">
              <h4 className="text-sm font-mono uppercase tracking-widest text-slate-300">Inquiry Specifications</h4>
            </div>

            {/* Error notifications */}
            {Object.keys(formErrors).length > 0 && (
              <div id="form-validation-errors" className="p-3 bg-red-500/10 border border-red-500/20 text-xs text-red-400 rounded-lg flex items-center space-x-2">
                <span>Please complete the required highlighted inputs below.</span>
              </div>
            )}

            {/* Grid fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Your Full Name *</label>
                <input
                  id="form-input-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                  }}
                  className={`w-full bg-slate-950/80 border rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors ${
                    formErrors.name ? 'border-red-500/40' : 'border-slate-850'
                  }`}
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Corporate Email Address *</label>
                <input
                  id="form-input-email"
                  type="email"
                  required
                  placeholder="e.g. j.doe@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                  }}
                  className={`w-full bg-slate-950/80 border rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors ${
                    formErrors.email ? 'border-red-500/40' : 'border-slate-850'
                  }`}
                />
              </div>

              {/* Telephone */}
              <div className="space-y-1">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Telephone Number</label>
                <input
                  id="form-input-phone"
                  type="tel"
                  placeholder="e.g. 9293283801"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-850 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Company / Brand */}
              <div className="space-y-1">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Company Name</label>
                <input
                  id="form-input-company"
                  type="text"
                  placeholder="e.g. Acme Corp"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-850 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

            </div>

            {/* Service of Interest */}
            <div className="space-y-1">
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Discipline of Interest</label>
              <select
                id="form-input-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value as AppRoute | 'all')}
                className="w-full bg-slate-950/80 border border-slate-850 rounded-lg px-3.5 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="all">Multichannel Marketing & Dev Mix (Comprehensive Strategy)</option>
                <option value="web-development">Web Development</option>
                <option value="smm">Social Media Marketing (SMM)</option>
                <option value="seo">Search Engine Optimization (SEO)</option>
                <option value="email-marketing">Email Marketing Funnels</option>
                <option value="content-writing">SEO Content Writing</option>
                <option value="logo-design">Logo Design & Branding</option>
              </select>
            </div>

            {/* Custom pre-fill alert reminder */}
            {prefilledEstimate && (
              <div id="calculator-alert-notification" className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
                  <p className="text-[11px] text-amber-400">
                    Estimate values loaded from calculator specs.
                  </p>
                </div>
                <button
                  id="clear-prefill-btn"
                  type="button"
                  onClick={onClearEstimate}
                  className="text-[10px] text-slate-400 hover:text-white underline font-mono"
                >
                  Reset Calculator Values
                </button>
              </div>
            )}

            {/* Messaging text area */}
            <div className="space-y-1">
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Project Specifics / Requirements</label>
              <textarea
                id="form-input-message"
                rows={4}
                placeholder="Details of your goals, timeline, and requested deliverables..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-850 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Interactive consultation scheduler selector */}
            <div id="form-scheduler-module" className="space-y-4 pt-2 border-t border-slate-850">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">Book Free Strategy Session</span>
                </div>
                
                <button
                  id="toggle-booking-flow"
                  type="button"
                  onClick={() => setIsBookingCall(!isBookingCall)}
                  className={`text-[11px] px-3 py-1 rounded-md font-medium transition-all ${
                    isBookingCall ? 'bg-amber-500/10 text-amber-400' : 'bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  {isBookingCall ? 'Remove Call Booking' : 'Add Free 30-Min Call'}
                </button>
              </div>

              {isBookingCall && (
                <div id="booking-slots-panel" className="bg-slate-950/60 p-4 border border-slate-850 rounded-lg space-y-4">
                  {/* Select Date */}
                  <div className="space-y-2">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">Select Date Slot (Next Week)</span>
                    <div className="grid grid-cols-5 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.full}
                          id={`date-slot-${d.full}`}
                          type="button"
                          onClick={() => {
                            setSelectedDate(d.full);
                            if (formErrors.date) setFormErrors({ ...formErrors, date: '' });
                          }}
                          className={`p-2 rounded-lg text-center transition-all flex flex-col items-center justify-center border ${
                            selectedDate === d.full
                              ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold'
                              : 'bg-slate-900 border-slate-850 text-slate-300 hover:text-white'
                          }`}
                        >
                          <span className="text-[10px] leading-tight opacity-75">{d.day}</span>
                          <span className="text-xs leading-none font-bold font-mono mt-1">{d.num}</span>
                        </button>
                      ))}
                    </div>
                    {formErrors.date && <p className="text-[11px] text-red-400">{formErrors.date}</p>}
                  </div>

                  {/* Select Time */}
                  <div className="space-y-2">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">Available Standard Hours</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      {timeSlots.map((ts) => (
                        <button
                          key={ts}
                          id={`time-slot-${ts.replace(/\s+/g, '-')}`}
                          type="button"
                          onClick={() => {
                            setSelectedTime(ts);
                            if (formErrors.time) setFormErrors({ ...formErrors, time: '' });
                          }}
                          className={`p-1.5 rounded-md text-[10px] font-semibold font-mono text-center transition-all border ${
                            selectedTime === ts
                              ? 'bg-amber-500 text-slate-950 border-amber-500'
                              : 'bg-slate-900 border-slate-850 text-slate-300 hover:text-white'
                          }`}
                        >
                          {ts.split(' ')[0]} {ts.split(' ')[1]}
                        </button>
                      ))}
                    </div>
                    {formErrors.time && <p className="text-[11px] text-red-400">{formErrors.time}</p>}
                  </div>
                </div>
              )}
            </div>

            {/* Submission triggers */}
            <div className="pt-4 border-t border-slate-850">
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono uppercase tracking-wider font-extrabold rounded-lg transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting Inquiry Parameters...</span>
                ) : (
                  <>
                    <span>Submit Strategic Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
