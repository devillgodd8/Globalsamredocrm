import { Link } from 'react-router-dom';
import { 
  Users, 
  ArrowLeft, 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  FileCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export function ChannelPartnerEngagement() {
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
            <span className="text-blue-700 font-semibold">Channel Partner Engagement</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono uppercase tracking-widest text-blue-700 mb-6">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                Enterprise Partner Infrastructure
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Channel Partner Engagement &amp; Incentive Ledger.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Replace sluggish quarterly spreadsheet audits with an automated algorithmic incentive engine that delivers transparent rebate calculations, live quota leaderboards, and instant settlement.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
                >
                  <span>Request Incentive Platform Demo</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all font-mono shadow-sm"
                >
                  Download Partner Ledger Spec
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="Executive Channel Partner Collaboration"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white flex items-center justify-between">
                  <span>Rebate Verification Engine</span>
                  <span className="text-emerald-400 font-bold">&lt; 24h Settlement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS TICKER WITH VIBRANT NUMBERS */}
      <section className="bg-slate-50 text-slate-900 border-b border-slate-200 py-10 font-mono">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-4 border-amber-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">$420M+</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Incentives Disbursed</div>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">&lt; 24 Hrs</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Rebate Settlement</div>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">-84%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Dispute Reduction</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">99.4%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Partner Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SETTLEMENT ENGINE WORKFLOW */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Algorithmic Accuracy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Automated Four-Phase Rebate Settlement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Data Ingestion & Verification',
                desc: 'Sales reports and delivery certificates stream automatically from dealer DMS feeds into the validation queue.'
              },
              {
                step: '02',
                title: 'Dynamic Quota Matching',
                desc: 'Real-time calculation engine maps sales against regional tiers, model-specific incentives, and early-bird bonuses.'
              },
              {
                step: '03',
                title: 'Audit & Compliance Guardrails',
                desc: 'Automated fraud detection flags duplicate VINs or out-of-territory registrations before payout approval.'
              },
              {
                step: '04',
                title: 'Instant Electronic Payout',
                desc: 'Settled funds route directly via ACH or corporate credits with full accounting ledger writebacks.'
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

      {/* 4. CORE PLATFORM PILLARS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Architected for Manufacturer-to-Dealer Transparency.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Dealer Principal Portal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Give franchise owners instant visibility into their live quarterly attainment, projected rebate tiers, and pending vehicle deliveries.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Real-time tier advancement alerts</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Mobile leadership dashboard</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Historical payout archive &amp; export</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Dispute Elimination Console
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every calculation includes line-item audit trails. If a dealer questions a rebate, the system provides transparent rule references instantly.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Transparent formula breakdown</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Self-service claim submission</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 4-hour median dispute resolution</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Enterprise Tax &amp; Audit Engine
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated 1099, GST, and corporate rebate tax compliance reporting tailored to regional jurisdictions and franchise regulations.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> SOC2 Type II audit logging</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Multi-currency conversion rates</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> ERP writeback (SAP / Oracle)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Streamline Your Partner Incentive Operations
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Eliminate operational drag and empower your distributor network with automated calculation infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all font-mono shadow-md"
          >
            <span>Schedule Briefing with Incentive Engineers</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}