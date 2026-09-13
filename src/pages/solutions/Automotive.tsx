import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Zap,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export function Automotive() {
  const [monthlyUnits, setMonthlyUnits] = useState(120);

  // ROI estimation calculations
  const hoursSavedPerUnit = 2.4;
  const totalHoursSavedMonthly = Math.round(monthlyUnits * hoursSavedPerUnit);
  const estimatedGrossIncrease = Math.round(monthlyUnits * 320); // $320 higher back-end PVR from faster desking

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. HERO & ARCHITECTURE BANNER WITH IMAGERY */}
      <section className="bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/solutions" className="hover:text-blue-700 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> All Solutions
            </Link>
            <span>/</span>
            <span className="text-blue-700 font-semibold">Automotive Dealership OS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono uppercase tracking-widest text-blue-700 mb-6">
                <Car className="w-3.5 h-3.5 text-blue-600" />
                Flagship Retail Operating System
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Automotive Dealership OS &amp; Showroom Cockpit.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                A unified operating layer deployed over your existing DMS to accelerate showroom deal velocity, eliminate double-entry, and syndicate real-time VIN telemetry across your entire rooftop network.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
                >
                  <span>Request Dealership Demo</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </Link>
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all font-mono shadow-sm"
                >
                  Calculate Dealership ROI
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Dealership Showroom"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white flex items-center justify-between">
                  <span>Showroom Cockpit v4.2</span>
                  <span className="text-emerald-400 font-bold">Live DMS Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL WORKFLOW PIPELINE */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              End-to-End Deal Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              How Global SAM Accelerates the Showroom Floor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Inbound & Barcode VIN Intake',
                desc: 'Instant barcode scan decodes options, vehicle history, and generates live appraisal comps within 45 seconds.'
              },
              {
                step: '02',
                title: 'Multi-Option Desking Matrix',
                desc: 'Sales managers structure lease, finance, and cash menus side-by-side on an interactive tablet cockpit.'
              },
              {
                step: '03',
                title: 'Automated F&I Submissions',
                desc: 'Direct API routing pushes credit applications to RouteOne and Dealertrack with zero manual retyping.'
              },
              {
                step: '04',
                title: 'Two-Way DMS Writeback',
                desc: 'Deal terms, customer profile, and stock inventory automatically write back into CDK or Reynolds instantly.'
              },
            ].map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="text-3xl font-extrabold font-mono text-blue-600 mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE MODULE MATRIX WITH VISUAL ACCENTS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Platform Modules
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Precision Capabilities for High-Volume Dealerships.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Showroom Desking Cockpit
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empower your sales managers to present clear payment matrices, adjust money factors, and handle trade equity transparently in front of the buyer.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Multi-tier lease calculations</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Rate mark-up guardrails</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Electronic customer sign-off</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Real-Time VIN Inventory Engine
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Track every unit from factory transport to lot arrival, reconditioning inspection, and photo staging with automated aging countdown alerts.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Recon stage tracker &amp; work orders</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Floor-plan interest alerts</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Multi-rooftop inventory trades</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Automated Service Bay Retention
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automatically convert vehicle deliveries into scheduled 5,000-mile maintenance appointments and deliver automated SMS service reminders.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp &amp; SMS service prompts</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> RO status real-time tracker</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Declined service recovery campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE ROI CALCULATOR WITH VIBRANT DESIGN */}
      <section id="calculator" className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-blue-50/50 via-white to-white text-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-blue-100 shadow-xl shadow-blue-500/5">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
                Interactive Financial Impact
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Estimate Your Dealership Time &amp; Revenue Gains
              </h3>
            </div>

            <div className="space-y-6 max-w-xl mx-auto">
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2 font-bold">
                  <span className="text-slate-700">Monthly Retail Deliveries:</span>
                  <span className="text-blue-700 text-base">{monthlyUnits} Units / Mo</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="500"
                  step="10"
                  value={monthlyUnits}
                  onChange={(e) => setMonthlyUnits(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2.5 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs font-mono text-slate-500 mt-1">
                  <span>30 Units</span>
                  <span>250 Units</span>
                  <span>500+ Units</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 font-mono text-center">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">
                    {totalHoursSavedMonthly} hrs
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Staff Hours Saved Monthly
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-1">
                    +${estimatedGrossIncrease.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Est. Monthly Gross Lift
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
                >
                  <span>Book Custom Operational Audit</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DMS INTEGRATION SUPPORT */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
            Zero Disruption Deployment
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Certified Two-Way Integrations
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            Global SAM operates without tearing out your core IT. We integrate directly into CDK Drive, Reynolds &amp; Reynolds ERA-IGNITE, DealerSocket, and Dealertrack.
          </p>
          <Link
            to="/contact"
            className="text-xs font-mono font-bold text-blue-700 hover:text-blue-900 uppercase tracking-wider"
          >
            Review Technical Integration Specs &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}