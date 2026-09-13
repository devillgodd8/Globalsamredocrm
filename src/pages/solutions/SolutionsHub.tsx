import { Link } from 'react-router-dom';
import { 
  Car, 
  Users, 
  Calendar, 
  Award, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  LineChart,
  Sparkles
} from 'lucide-react';

const allSolutions = [
  {
    id: 'automotive',
    title: 'Automotive Dealership OS',
    category: 'Flagship Platform',
    badge: 'Real-Time VIN Telemetry',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
    description: 'An end-to-end operational platform connecting showroom sales, service bays, customer follow-up, and multi-franchise inventory in a unified cockpit.',
    icon: Car,
    href: '/solutions/automotive',
    metrics: [
      { label: 'Dealer Lead Velocity', value: '+42%' },
      { label: 'Follow-up Completion', value: '98.4%' },
      { label: 'Inventory Turnover', value: '-14 Days' },
    ],
    features: [
      'Showroom desk & deal structuring module',
      'Instant VIN decode & valuation engine',
      'Automated service retention workflows',
      'Real-time DMS & CRM two-way sync'
    ]
  },
  {
    id: 'channel-partner',
    title: 'Channel Partner Engagement & Incentive Engine',
    category: 'Enterprise Operations',
    badge: 'Automated Payouts',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    description: 'Structure, monitor, and instantly settle high-performance dealer incentive programs, distributor rebates, and wholesale loyalty tiers.',
    icon: Users,
    href: '/solutions/channel-partner-engagement',
    metrics: [
      { label: 'Partner Participation', value: '91.2%' },
      { label: 'Dispute Reduction', value: '-84%' },
      { label: 'Payout Processing', value: '< 24 Hrs' },
    ],
    features: [
      'Multi-tier commission & rebate calculators',
      'Dealer principal gamification dashboards',
      'Instant milestone verification ledger',
      'Automated tax & audit compliance'
    ]
  },
  {
    id: 'business-events',
    title: 'Strategic Business Events & Automotive Summits',
    category: 'Experiential Tech',
    badge: 'Executive Conclaves',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    description: 'White-glove event infrastructure, dealer launch conclaves, and high-impact automotive symposiums equipped with bespoke digital registration and concierge workflows.',
    icon: Calendar,
    href: '/solutions/business-events',
    metrics: [
      { label: 'Attendee Engagement', value: '96%' },
      { label: 'VIP Onboarding Time', value: '< 45s' },
      { label: 'Event ROI Capture', value: '100%' },
    ],
    features: [
      'Bespoke mobile concierge & agenda builder',
      'Dynamic badge RFID / QR credentials',
      'Post-summit commercial lead routing',
      'Executive roundtable orchestration'
    ]
  },
  {
    id: 'loyalty-rewards',
    title: 'Enterprise Loyalty & Retention Engine',
    category: 'Customer Lifetime Value',
    badge: 'Algorithmic Redemption',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
    description: 'Turn vehicle purchases and service visits into lifelong brand advocacy with automated tiered rewards, digital wallets, and ecosystem merchant perks.',
    icon: Award,
    href: '/solutions/loyalty-rewards',
    metrics: [
      { label: 'Service Repurchase Rate', value: '+31%' },
      { label: 'Customer Churn Drop', value: '-22%' },
      { label: 'Reward Redemptions', value: '2.4M+' },
    ],
    features: [
      'Multi-brand points ledger architecture',
      'Automated birthday & service reminders',
      'Integrated digital gift card marketplace',
      'Predictive churn warning alerts'
    ]
  },
];

export function SolutionsHub() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header Banner */}
      <section className="bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono uppercase tracking-widest text-blue-700 mb-6">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              Comprehensive Modular Suite
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Integrated Platforms Built for Automotive &amp; Commercial Scale.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Each Global SAM platform module operates independently or harmoniously within your existing DMS, ERP, and CRM landscape to accelerate throughput and lock in customer retention.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Directory with Photography */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {allSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={solution.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left Core Summary */}
                    <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                            {solution.category}
                          </span>
                          <span className="text-xs font-mono font-semibold px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
                            {solution.badge}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h2 className="text-2xl font-bold text-slate-900">
                            {solution.title}
                          </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          {solution.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                          {solution.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                        <Link
                          to={solution.href}
                          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-sm font-mono"
                        >
                          <span>Explore Architecture</span>
                          <ArrowRight className="w-4 h-4 text-amber-300" />
                        </Link>
                        <Link
                          to="/contact"
                          className="text-xs font-bold text-slate-700 hover:text-blue-700 transition-colors"
                        >
                          Request Technical Demo &rarr;
                        </Link>
                      </div>
                    </div>

                    {/* Right Metrics Panel with Photography Header */}
                    <div className="lg:col-span-5 bg-slate-50 text-slate-900 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between overflow-hidden">
                      <div className="h-44 relative overflow-hidden">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-white flex items-center justify-between">
                          <span className="font-bold flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Live Telemetry
                          </span>
                          <span className="text-emerald-400 font-semibold">Production Ready</span>
                        </div>
                      </div>

                      <div className="p-8 space-y-5">
                        <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold flex items-center gap-2">
                          <LineChart className="w-4 h-4 text-blue-600" />
                          Verified Client Benchmarks
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-4 font-mono">
                          {solution.metrics.map((metric, mIdx) => (
                            <div key={mIdx}>
                              <div className="text-2xl font-extrabold text-slate-900 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-[11px] text-slate-600 leading-tight">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="px-8 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                        <span>Rest &amp; GraphQL APIs</span>
                        <span className="text-emerald-600 font-bold">99.98% SLA</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Consultation Strip */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Looking for Custom Multi-Franchise Architecture?
          </h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Our systems engineering team coordinates directly with OEM tech leads and dealer principals to architect tailored deployments.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md font-mono"
          >
            <span>Consult with Enterprise Engineering</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}
