import { Link } from 'react-router-dom';
import { 
  Cpu, 
  ArrowLeft, 
  ArrowRight, 
  Lock, 
  Terminal, 
  Layers,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export function Tech() {
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
            <span className="text-blue-700 font-semibold">Enterprise Tech &amp; SaaS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono uppercase tracking-widest text-blue-700 mb-6">
                <Cpu className="w-3.5 h-3.5 text-blue-600" />
                API-First Cloud Ecosystems
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Enterprise Tech &amp; SaaS Partner Ecosystems.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Empower high-growth technology platforms with automated reseller commission structures, developer webhook dispatches, and multi-tenant security boundaries that scale seamlessly.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
                >
                  <span>Request API &amp; Ecosystem Briefing</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all font-mono shadow-sm"
                >
                  View Developer API Specs
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
                  alt="Enterprise Tech Cloud Systems"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white flex items-center justify-between">
                  <span>API Sandbox v4.2</span>
                  <span className="text-emerald-400 font-bold">&lt; 15ms Latency</span>
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
            <div className="border-l-4 border-blue-600 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">&lt; 15ms</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Endpoint Latency</div>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">99.98%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">SLA Uptime Standard</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">SOC2 Type II</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Certified Operations</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">REST &amp; Webhooks</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Bi-Directional Sync</div>
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
              Software Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Engineered for Cloud Platforms &amp; Channel Resellers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Multi-Tier Reseller Infrastructure
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automate deal registration, pipeline protection, and complex recurring revenue share allocations for VARs, MSPs, and global software distributors.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Conflict-free registration checks</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tiered MRR rebate calculation</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Co-sell collateral distribution</div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Developer API &amp; Webhooks Sandbox
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Build custom internal tooling or third-party integrations with clean, comprehensive RESTful APIs, typed SDKs, and event-driven webhook dispatches.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Sub-second webhook retries &amp; DLQ</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Granular API key scoping &amp; rate limits</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Interactive OpenAPI / Swagger sandbox</div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Data Boundary Isolation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict multi-tenant cryptographic isolation ensures that sensitive customer metrics and partner contract data are never shared across tenant boundaries.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Enterprise SSO / SAML 2.0</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Role-based access control (RBAC)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Immutable tamper-evident audit logs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-white text-slate-900 py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Scale Your Technology Partner Ecosystem
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Schedule an architectural review with our platform team to discuss API integration, webhook endpoints, and data segregation models.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
          >
            <span>Schedule Enterprise Tech Consultation</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}