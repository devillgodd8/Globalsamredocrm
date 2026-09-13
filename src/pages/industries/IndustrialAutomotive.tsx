import { Link } from 'react-router-dom';
import { 
  Factory, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Wrench,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export function IndustrialAutomotive() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. ARCHITECTURAL HERO WITH IMAGERY */}
      <section className="bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/industries" className="hover:text-blue-700 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> All Industries
            </Link>
            <span>/</span>
            <span className="text-blue-700 font-semibold">Automotive &amp; Industrial Manufacturing</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono uppercase tracking-widest text-blue-700 mb-6">
                <Factory className="w-3.5 h-3.5 text-blue-600" />
                Heavy Industry &amp; OEM Systems
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Industrial Automotive &amp; OEM Supply Chain Platform.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Deliver operational agility across automotive manufacturing plants, Tier-1 component distributors, and regional dealer parts networks with automated replenishment and lot-level traceability.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
                >
                  <span>Request Industrial Architecture Briefing</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all font-mono shadow-sm"
                >
                  Download IATF Compliance Dossier
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                  alt="Industrial Automotive Manufacturing Plant"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white flex items-center justify-between">
                  <span>Tier-1 Assembly Telemetry</span>
                  <span className="text-emerald-400 font-bold">100% Traceability</span>
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
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Lot Traceability</div>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">-38%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Replenishment Lag</div>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">IATF 16949</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Audit Alignment</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">&lt; 300ms</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Query Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Vertical Engineering
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Mission-Critical Modules for Industrial Automotive.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Dealer Parts Replenishment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect assembly warehouses directly to dealer service repair orders. Automated algorithms order replacement parts before bay bottlenecks occur.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Real-time consumption tracking</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Expedited OEM freight triggers</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Warranty core return tracking</div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Component Warranty Ledger
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminate fraudulent and misattributed warranty claims between parts suppliers and franchised dealership service networks.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Serialized part authentication</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Automated supplier reimbursement</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Recall campaign broadcast engine</div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Industrial Quality Traceability
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Maintain complete historical component records from casting and batch numbers to final dealership VIN installation.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> IATF 16949 audit trail exports</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Sub-assembly genealogy tracking</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Multi-tier supplier access portals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-white text-slate-900 py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Deploy Industrial-Grade Automotive Infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Discuss plant integration, ERP connectors (SAP S/4HANA), and supplier portal deployments with our enterprise architects.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
          >
            <span>Schedule Industrial Systems Consultation</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}