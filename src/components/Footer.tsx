import React, { useState } from 'react';
import { AppRoute } from '../types';
import { Phone, Mail, MapPin, Sparkles, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div id="footer-col-brand" className="space-y-4">
            <div
              id="footer-brand-logo"
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Sparkles className="w-5 h-5 text-slate-950 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  Utipromo<span className="text-amber-500">.</span>
                </span>
                <span className="block text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">
                  Digital Growth Inc
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We engineer bespoke digital platforms, custom marketing automations, and authoritative SEO keyword positions designed to capture attention and scale business revenue.
            </p>
            <div className="pt-2 font-mono text-[10px] text-slate-500">
              OPERATING HOURS: MON-FRI 9AM-6PM EST
            </div>
          </div>

          {/* Quick Links Col */}
          <div id="footer-col-links" className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">Corporate Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Home Main
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => onNavigate('services')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Our Services Catalog
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Contact Us / Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links Col */}
          <div id="footer-col-services" className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">Growth Offerings</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-webdev"
                  onClick={() => onNavigate('web-development')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  id="footer-link-smm"
                  onClick={() => onNavigate('smm')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Social Media Marketing (SMM)
                </button>
              </li>
              <li>
                <button
                  id="footer-link-seo"
                  onClick={() => onNavigate('seo')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Search Engine Optimization (SEO)
                </button>
              </li>
              <li>
                <button
                  id="footer-link-email"
                  onClick={() => onNavigate('email-marketing')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Email Marketing Funnels
                </button>
              </li>
              <li>
                <button
                  id="footer-link-content"
                  onClick={() => onNavigate('content-writing')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  SEO Content Writing
                </button>
              </li>
              <li>
                <button
                  id="footer-link-logo"
                  onClick={() => onNavigate('logo-design')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Logo Design & Branding
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts and Newsletter Col */}
          <div id="footer-col-contact" className="space-y-5">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">Direct Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-3 text-slate-400">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href="tel:9293283801" id="footer-phone-anchor" className="hover:text-amber-400 transition-colors">
                    +1 (929) 328-3801
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-slate-400">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href="mailto:info@utipromoinc.com" id="footer-email-anchor" className="hover:text-amber-400 transition-colors">
                    info@utipromoinc.com
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="leading-tight">
                    1344 Rockway Pkwy Apt 2<br />Brooklyn, NY 11236
                  </span>
                </li>
              </ul>
            </div>

            {/* Stay Connected Signup */}
            <div className="space-y-2 pt-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400">Newsletter Dispatch</h5>
              {submitted ? (
                <div id="footer-news-success" className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs text-amber-400 font-medium">Subscribed to growth alerts!</span>
                </div>
              ) : (
                <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="space-y-1.5">
                  <div className="relative">
                    <input
                      id="footer-news-email"
                      type="email"
                      placeholder="Enter company email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      className="w-full bg-slate-900 border border-slate-850 rounded-lg pl-3 pr-10 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                    <button
                      id="footer-news-submit"
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 px-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-md transition-colors flex items-center justify-center"
                      aria-label="Subscribe"
                    >
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                  {error && (
                    <span id="footer-news-error" className="block text-[11px] text-red-400">
                      {error}
                    </span>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-slate-900 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Utipromo Inc. All rights reserved. Registered Office: Brooklyn, New York.
          </div>
          
          {/* Legal Navigation */}
          <div id="footer-legal-links" className="flex flex-wrap gap-x-6 gap-y-2">
            <button
              id="footer-link-privacy"
              onClick={() => onNavigate('privacy')}
              className="hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              id="footer-link-terms"
              onClick={() => onNavigate('terms')}
              className="hover:text-amber-400 transition-colors"
            >
              Terms & Condition
            </button>
            <button
              id="footer-link-refund"
              onClick={() => onNavigate('refund')}
              className="hover:text-amber-400 transition-colors"
            >
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
