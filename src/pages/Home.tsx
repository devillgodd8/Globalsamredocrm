import { Link } from 'react-router-dom';
import { 
  Car, 
  Users, 
  Calendar, 
  Award, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';

const coreSolutions = [
  {
    title: 'Automotive Dealership OS',
    category: 'Showroom Retail',
    description: 'Accelerate deal structuring, streamline barcode trade appraisals, and eliminate double-entry with instant two-way DMS writebacks.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
    href: '/solutions/automotive',
    icon: Car,
    highlight: 'DMS Certified'
  },
  {
    title: 'Channel Partner Engagement',
    category: 'Distribution & Rebates',
    description: 'Automate quarterly dealer incentive calculations, provide live quota visibility, and settle partner rebates in under 24 hours.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    href: '/solutions/channel-partner-engagement',
    icon: Users,
    highlight: 'Zero-Dispute Ledger'
  },
  {
    title: 'Strategic Business Events',
    category: 'Executive Conclaves',
    description: 'Coordinate high-touch dealer launch conventions, OEM franchise reveals, and executive roundtables with contactless digital concierge tech.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    href: '/solutions/business-events',
    icon: Calendar,
    highlight: 'White-Glove Tech'
  },
  {
    title: 'Loyalty & Retention Engine',
    category: 'Customer Lifetime Value',
    description: 'Keep vehicle buyers returning to your service bays with predictive maintenance reminders and native Apple Wallet & Google Pay loyalty passes.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
    href: '/solutions/loyalty-rewards',
    icon: Award,
    highlight: '+31% Service Retention'
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* 1. CLEAN, LUMINOUS WHITE HERO SECTION */}
      <section className="relative bg-white text-slate-900 border-b border-slate-200 py-16 sm:py-20 lg:py-28 overflow-hidden bg-grid-pattern">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-700 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Automotive Operating Systems &amp; Partner Networks
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                The Operating System for Modern Automotive Retail.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                Unify multi-franchise dealership showrooms, automate channel partner incentives, and elevate customer retention on a single resilient software platform.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-all shadow-md font-mono"
                >
                  <span>Schedule Executive Briefing</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 border border-slate-300 rounded-lg transition-all font-mono shadow-sm"
                >
                  <span>Explore Solutions</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Trust Points */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-mono font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Two-Way DMS Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>SOC2 &bull; ISO 27001 Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>99.98% SLA Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Automotive Retail Showroom"
                  className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-xs font-mono text-white flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-sm">Automotive OS v4.2</div>
                    <div className="text-slate-200 text-[11px]">850+ Connected Dealerships</div>
                  </div>
                  <span className="px-3 py-1 bg-blue-600 rounded-full font-semibold text-xs text-white shadow-sm">
                    Live Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED METRICS BAR */}
      <section className="bg-slate-50 text-slate-900 border-b border-slate-200 py-12 font-mono">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">850+</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold mt-1">Connected Dealerships</div>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">1.4M+</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold mt-1">Leads Processed</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">$420M+</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold mt-1">Incentives Distributed</div>
            </div>
            <div className="border-l-4 border-emerald-600 pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">99.98%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold mt-1">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STREAMLINED 4-CARD SOLUTIONS GRID */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Modular Solutions Built for Growth.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Deploy individual platform modules or activate the unified enterprise suite across your entire dealer footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreSolutions.map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-44 relative overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-900 bg-white/95 px-2.5 py-1 rounded-full font-bold shadow-sm">
                          {solution.highlight}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="text-xs font-mono uppercase text-blue-700 font-bold tracking-wider">
                        {solution.category}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {solution.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={solution.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors pt-3 border-t border-slate-100 w-full"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INTEGRATIONS STRIP */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-1">
              Seamless Interoperability
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Integrates with Your Core Automotive Technologies
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'CDK Global',
              'Reynolds & Reynolds',
              'DealerSocket',
              'Salesforce Auto',
              'SAP S/4HANA',
              'DocuSign Enterprise'
            ].map((name, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-center font-mono font-bold text-xs text-slate-800 shadow-sm hover:border-blue-300 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE CALLOUT CARD ON WHITE CANVAS */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-blue-50/60 via-white to-white border-2 border-blue-100 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl shadow-blue-500/5 relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-mono text-blue-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Direct Consultation
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to Upgrade Your Dealership Operations?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Schedule a technical consultation with our automotive systems team to discuss multi-franchise connectivity and migration timelines.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                Schedule Executive Briefing &rarr;
              </Link>
              <a
                href="tel:+918792394870"
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                Direct: +91 879 239 4870
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}