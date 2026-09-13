import { Link } from 'react-router-dom';
import { 
  Car, 
  Factory, 
  Cpu, 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck, 
  Globe2
} from 'lucide-react';

const industryList = [
  {
    title: 'Automotive OEMs & Multi-Franchise Dealerships',
    category: 'Core Vertical',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
    description: 'Transform retail dealership operations from fragmented sales floors and disjointed service desks into a synchronised, real-time customer lifecycle engine.',
    href: '/industries/automotive',
    icon: Car,
    capabilities: [
      'Showroom walk-in digital check-in & desking',
      'OEM allocation & transport pipeline visibility',
      'Automated F&I deal structuring & lender routing',
      'Multi-rooftop inventory balancing'
    ],
    clients: 'Audi, Volkswagen, Ford, Hyundai dealer networks'
  },
  {
    title: 'Industrial Manufacturing & Commercial Fleet Supply',
    category: 'Supply Chain & Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: 'Deliver operational agility to Tier-1 automotive parts manufacturers, commercial vehicle body builders, and distributed component suppliers.',
    href: '/industries/automotive',
    icon: Factory,
    capabilities: [
      'Just-in-time distributor replenishment orders',
      'Dealer parts catalog lookup & warranty tracking',
      'Commercial fleet telematics & service scheduler',
      'ISO 9001 compliance audit trails'
    ],
    clients: 'Commercial chassis builders, Tier-1 brake & axle distributors'
  },
  {
    title: 'Enterprise Tech, SaaS & Channel Ecosystems',
    category: 'Software & Cloud Networks',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    description: 'Empower high-growth technology platforms with sophisticated multi-tier reseller commissions, partner credentialing, and co-selling portals.',
    href: '/industries/tech',
    icon: Cpu,
    capabilities: [
      'Channel partner deal registration & protection',
      'Automated revenue share & MRR rebate calculation',
      'Developer API sandbox & webhook dispatch',
      'SOC2 Type II data boundary segmentation'
    ],
    clients: 'Enterprise cloud providers, automotive telematics SaaS'
  },
];

export function IndustriesHub() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono uppercase tracking-widest text-blue-700 mb-6">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              Target Industry Verticals
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Bespoke Systems Engineered for Vertical Domain Realities.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Generic software fails when applied to specialized automotive workflows and industrial supply chains. Global SAM Solutions designs tailored architectures calibrated for each specific ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Grid with Photography */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-800 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full font-bold shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h2>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-blue-700 font-bold">
                          Key Capabilities:
                        </div>
                        {item.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      to={item.href}
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-mono shadow-sm"
                    >
                      <span>Explore Vertical Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Regulatory & Deployment Section with Balanced Contrast */}
      <section className="bg-slate-50 text-slate-900 py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="border border-slate-200 p-7 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-8 h-8 text-amber-500 mb-3 mx-auto md:mx-0" />
              <h4 className="text-base font-bold text-slate-900 mb-2">Automotive Compliance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Strict adherence to regional consumer credit acts, OEM confidentiality guidelines, and dealer franchise agreements.</p>
            </div>
            <div className="border border-slate-200 p-7 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Globe2 className="w-8 h-8 text-emerald-600 mb-3 mx-auto md:mx-0" />
              <h4 className="text-base font-bold text-slate-900 mb-2">Multi-Region Localization</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Support for multi-currency invoicing, regional tax jurisdictions, and multi-language dealer portal views.</p>
            </div>
            <div className="border border-slate-200 p-7 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="w-8 h-8 text-blue-600 mb-3 mx-auto md:mx-0" />
              <h4 className="text-base font-bold text-slate-900 mb-2">High-Throughput Telemetry</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Real-time telemetry and sub-second query speeds across millions of dealer lead and service transactions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
