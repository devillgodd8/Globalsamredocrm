import { Link } from 'react-router-dom';
import { 
  Award, 
  ArrowLeft, 
  ArrowRight, 
  BarChart3, 
  Smartphone, 
  Gift,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export function LoyaltyRewards() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. ARCHITECTURAL HERO WITH IMAGERY */}
      <section className="bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/solutions" className="hover:text-blue-700 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> All Solutions
            </Link>
            <span>/</span>
            <span className="text-blue-700 font-semibold">Loyalty &amp; Retention Engines</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono uppercase tracking-widest text-blue-700 mb-6">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                Customer Lifetime Value Engine
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Enterprise Loyalty &amp; Service Retention Engine.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Transform one-time vehicle buyers into lifelong service lane patrons with algorithmic point accruals, automated maintenance reminder triggers, and seamless digital wallet pass integration.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
                >
                  <span>Request Loyalty Architecture Demo</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all font-mono shadow-sm"
                >
                  Download Retention Whitepaper
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=1000"
                  alt="Customer Vehicle Delivery & Loyalty"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white flex items-center justify-between">
                  <span>Digital Pass Synchronization</span>
                  <span className="text-emerald-400 font-bold">+31% Repurchase Lift</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR WITH VIBRANT NUMBERS */}
      <section className="bg-slate-50 text-slate-900 border-b border-slate-200 py-10 font-mono">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-4 border-amber-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">+31%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Service Repurchase Lift</div>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">-22%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Customer Churn Drop</div>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">2.4M+</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Rewards Dispatched</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">4.8 / 5</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Wallet Pass Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RETENTION PIPELINE */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              The Retention Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Automated Retention Triggers from Day 1
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Vehicle Delivery Pass Issue',
                desc: 'Buyer receives an Apple Wallet / Google Pay digital loyalty pass instantly upon contract execution on the sales floor.'
              },
              {
                step: '02',
                title: 'Predictive Service Milestones',
                desc: 'Algorithmic mileage estimations trigger timely service reminders before customers look to independent repair shops.'
              },
              {
                step: '03',
                title: 'Frictionless Point Redemption',
                desc: 'Customer presents digital pass at the service cashier to redeem accrued points for oil changes, tires, or accessories.'
              },
              {
                step: '04',
                title: 'Trade-Up Equity Notification',
                desc: 'When positive equity is reached, the system alerts both customer and sales desk with tailored replacement incentives.'
              },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="text-3xl font-extrabold font-mono text-blue-600 mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PLATFORM CAPABILITIES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              System Modules
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Engineered to Drive Repeat Dealership Revenue.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Native Digital Wallet Passes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No slow apps for customers to download. Push live lock-screen updates directly to Apple Wallet and Google Pay when points or service dates approach.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Geofenced showroom welcome alerts</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Real-time points balance counter</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 1-click appointment booking link</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Co-Op OEM Rewards Marketplace
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Allow customers to redeem points for authentic OEM accessories, premium detailing packages, or digital ecosystem partner rewards.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Automatic OEM co-op reimbursement</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tiered VIP service perks (loaner cars)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Frictionless cashier scan-to-redeem</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Predictive Churn Detection
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Machine learning models identify vehicle owners whose service intervals have lagged, automatically launching personalized recovery incentives.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Automated lapsed customer campaigns</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Repair Order dollar lift tracking</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dealership service director reports</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Boost Dealership Customer Lifetime Value
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Protect your dealership group from customer attrition with automated retention workflows.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all font-mono shadow-md"
          >
            <span>Consult with Loyalty Architects</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}