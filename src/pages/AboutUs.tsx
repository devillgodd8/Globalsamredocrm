import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  MapPin, 
  ArrowRight, 
  Layers,
  Sparkles
} from 'lucide-react';

const milestones = [
  {
    year: '2012',
    title: 'Foundational Systems Advisory',
    description: 'Established in Sheridan, Wyoming as a specialist enterprise operational consultancy, advising Tier-1 automotive distributors on supply chain automation.'
  },
  {
    year: '2016',
    title: 'Dealership Workflow Engine v1.0',
    description: 'Engineered our proprietary automotive sales and service desking engine, replacing fragmented paper boards across 40 regional dealership franchises.'
  },
  {
    year: '2020',
    title: 'Automated Channel Incentive Ledger',
    description: 'Launched the algorithmic partner rebate engine, processing over $120M in automated dealer disbursements with zero reconciliation disputes.'
  },
  {
    year: '2024',
    title: 'Global SAM Platform v4.2 Release',
    description: 'Consolidated showroom operations, dealer loyalty engines, and enterprise event concierge workflows into a unified, high-availability cloud architecture.'
  },
];

const principles = [
  {
    tag: 'PRINCIPLE 01',
    title: 'Architectural Rigor Over Hype',
    description: 'We do not build flimsy marketing toys. Every module in the Global SAM suite is stress-tested against rigorous dealership floor workflows and high-volume DMS writeback requirements.'
  },
  {
    tag: 'PRINCIPLE 02',
    title: 'Data Sovereignty & Security',
    description: 'Dealership customer databases and OEM pricing models are sacred. We enforce strict tenant segmentation, zero-knowledge encryption, and full compliance with regional automotive consumer privacy acts.'
  },
  {
    tag: 'PRINCIPLE 03',
    title: 'Transparent Ledger Verification',
    description: 'Partner payouts, rebate thresholds, and sales commissions are calculated via verifiable algorithmic pipelines, eliminating friction between manufacturers and independent dealer principals.'
  },
  {
    tag: 'PRINCIPLE 04',
    title: 'Zero-Failure SLA Standards',
    description: 'Showrooms operate on tight Saturdays and quarter-end closes. Our multi-region failover infrastructure maintains a 99.98% production uptime guarantee.'
  },
];

const offices = [
  {
    city: 'Sheridan, Wyoming',
    country: 'United States',
    role: 'Corporate Headquarters & Legal Governance',
    address: '1309 Coffeen Avenue, STE 20455, Sheridan, WY 82801',
    contact: '+1 (361) 203-9170',
    status: 'Corporate Hub',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    city: 'Bengaluru / Technology Hub',
    country: 'India',
    role: 'Platform Systems Engineering & Enterprise Operations',
    address: 'Global SAM Tech Campus, Whitefield Corridor',
    contact: '+91 879 239 4870',
    status: '24/7 Production NOC',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
];

export function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. ARCHITECTURAL HERO */}
      <section className="bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-medium uppercase tracking-wider text-blue-700 mb-6">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                Corporate Dossier &amp; Architecture
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Engineering the Backbone of High-Velocity Automotive Commerce.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Global SAM Solutions builds enterprise-grade software infrastructure that coordinates manufacturers, dealer franchises, and enterprise partners into a synchronized, high-throughput operating network.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-700 pt-6 border-t border-slate-200">
                <div>
                  <span className="text-slate-900 font-bold block text-sm">Founded 2012</span>
                  <span className="text-slate-500">12+ Years Industry Focus</span>
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div>
                  <span className="text-slate-900 font-bold block text-sm">Sheridan, WY</span>
                  <span className="text-slate-500">US Corporate HQ</span>
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div>
                  <span className="text-emerald-600 font-bold block text-sm">99.98%</span>
                  <span className="text-slate-500">Production Uptime SLA</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Global SAM Engineering Team"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white flex items-center justify-between">
                  <span className="font-semibold">Automotive Systems Engineering</span>
                  <span className="text-amber-400 font-bold">Sheridan &bull; Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE NARRATIVE & PILLARS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Our Foundational Thesis
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                The Automotive Retailing Stack Was Built in the 1990s. We Are Rebuilding It for Velocity.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                For decades, automotive dealer groups have suffered under sluggish, green-screen legacy Dealer Management Systems (DMS) that trap customer data in proprietary silos. 
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Global SAM Solutions bridges this chasm by deploying an intelligent operating layer on top of existing enterprise systems — enabling instant digital desking, automated partner rebate calculations, and seamless service retention workflows without requiring an entire core system replacement.
              </p>
            </div>

            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3 font-mono uppercase tracking-wider flex items-center justify-between">
                <span>System Infrastructure Overview</span>
                <span className="text-blue-600 font-semibold text-xs">Enterprise Certified</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span>Bi-Directional Sync</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero latency data pipelines into CDK Global, Reynolds &amp; Reynolds, DealerSocket, and SAP enterprise backends.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span>Enterprise Security</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    End-to-end TLS 1.3 encryption, SOC2 Type II operational alignment, and dedicated tenant data partitions.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span>Modular Deployment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Implement individual modules (e.g. Channel Incentives or Showroom Desking) or deploy the unified enterprise suite.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <div className="p-1.5 rounded-lg bg-purple-100 text-purple-700">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span>Multi-Region Governance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed to support multi-national OEM distribution, complex dealer franchises, and cross-border currency settlement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERATING PRINCIPLES */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Code of Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Engineering Standards That Guide Our Deployments.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 mb-3">
                    {p.tag}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHRONOLOGICAL TIMELINE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Evolutionary Path
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Over a Decade of Continuous Systems Refinement.
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {milestones.map((m, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200 items-center hover:bg-blue-50/40 transition-colors"
              >
                <div className="sm:col-span-2 font-mono text-2xl font-extrabold text-blue-700 border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0">
                  {m.year}
                </div>
                <div className="sm:col-span-10 sm:pl-4 space-y-1">
                  <h4 className="text-base font-bold text-slate-900">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL OFFICES & DELIVERY CENTRES WITH IMAGES */}
      <section className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Global Presence
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Headquartered in the US. Operating Globally.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-800 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-md border border-slate-200 font-bold shadow-sm">
                      {office.status}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">
                      {office.city}
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-blue-700 font-semibold">
                    {office.role}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {office.address}
                  </p>

                  <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                    Direct Line: <a href={`tel:${office.contact}`} className="hover:text-blue-600 font-bold text-slate-900 transition-colors">{office.contact}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center pt-8 border-t border-slate-200">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
            >
              <span>Connect with Our Executive Team</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}