import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-800 border-t border-slate-200">
      {/* Main 5-Column Enterprise Directory */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-5 pr-0 lg:pr-8">
            <Link to="/" className="inline-block group">
              <div className="p-2 bg-white rounded-xl inline-block shadow-sm border border-slate-200 transition-transform group-hover:scale-102">
                <img
                  src="/LOGO.png"
                  alt="Global SAM Solutions"
                  className="h-14 sm:h-18 md:h-22 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              Global SAM Solutions builds mission-critical operating software and engagement infrastructure for automotive manufacturers, multi-franchise dealer groups, and global commercial enterprises.
            </p>

            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Enterprise Certifications
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> SOC2 Compliant
                </span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> ISO 27001
                </span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> GDPR Aligned
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold border-b border-slate-200 pb-2.5">
              Platform Solutions
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solutions/automotive" className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center justify-between group">
                  <span>Automotive Dealership OS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/solutions/channel-partner-engagement" className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center justify-between group">
                  <span>Channel Partner Incentives</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/solutions/business-events" className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center justify-between group">
                  <span>Business Events &amp; Conclaves</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/solutions/loyalty-rewards" className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center justify-between group">
                  <span>Loyalty &amp; Retention Engines</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity" />
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <Link to="/solutions" className="text-blue-600 hover:text-blue-800 font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-1">
                  View All Solutions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries & Company */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold border-b border-slate-200 pb-2.5">
              Industries &amp; Firm
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/industries/automotive" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Automotive OEMs &amp; Retailers
                </Link>
              </li>
              <li>
                <Link to="/industries/automotive" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Industrial Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/industries/tech" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Enterprise Tech &amp; SaaS
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <Link to="/about-us" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  About Global SAM Solutions
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Founder &amp; CEO (Syed Abdul Matheen)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Security Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Headquarters & Operations */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold border-b border-slate-200 pb-2.5">
              Global Delivery
            </div>
            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <div className="text-slate-900 font-bold text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  Corporate Headquarters
                </div>
                <p className="pl-5 text-slate-600 leading-relaxed text-xs">
                  1309 Coffeen Avenue, STE 20455<br />
                  Sheridan, Wyoming 82801, USA
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-slate-900 font-bold text-sm flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-blue-600" />
                  +91 879 239 4870
                </div>
                <p className="pl-5 font-mono text-slate-800 font-semibold text-xs">
                  <a href="tel:+918792394870" className="hover:text-blue-600 transition-colors">

                  </a>
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-slate-900 font-bold text-sm flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-600" />
                  Inquiries &amp; Briefings
                </div>
                <p className="pl-5 font-mono text-slate-800 font-semibold text-xs">
                  <a href="mailto:info@globalsamsolutions.com" className="hover:text-blue-600 transition-colors">
                    info@globalsamsolutions.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} Global SAM Solutions, Inc. All enterprise rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-500">
            <Link to="/contact" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">
              Security Whitepaper
            </Link>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">
              Responsible Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
