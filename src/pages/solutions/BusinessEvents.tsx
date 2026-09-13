import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  Users, 
  BarChart3,
  QrCode,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export function BusinessEvents() {
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
            <span className="text-blue-700 font-semibold">Strategic Business Events</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono uppercase tracking-widest text-blue-700 mb-6">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                Executive Experiential Tech
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Strategic Business Events &amp; Automotive Summits.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Orchestrate high-stakes dealer launch conventions, OEM franchise roundtables, and VIP conclaves with bespoke digital concierge software, RFID attendee telemetry, and commercial lead tracking.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-mono shadow-md"
                >
                  <span>Plan Executive Conclave</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all font-mono shadow-sm"
                >
                  View Conclave Case Studies
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000"
                  alt="Automotive Leadership Summit Stage"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white flex items-center justify-between">
                  <span>Executive Conclave Tech</span>
                  <span className="text-emerald-400 font-bold">500+ Summits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR WITH VIBRANT HIGHLIGHTS */}
      <section className="bg-slate-50 text-slate-900 border-b border-slate-200 py-10 font-mono">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-4 border-amber-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">500+</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Automotive Summits</div>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">&lt; 45s</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">VIP Onboarding Flow</div>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">98%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Check-In Rate</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 bg-white p-4 rounded-r-xl border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1 font-semibold">Attribution Capture</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVENT WORKFLOW */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Operational Precision
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              The Four Stages of Conclave Orchestration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'VIP Digital Concierge',
                desc: 'Encrypted registration links, travel manifest sync, dietary profiling, and personalized mobile agenda dispatch.'
              },
              {
                step: '02',
                title: 'RFID & Fast Check-In',
                desc: 'Touchless physical badge issuance in under 45 seconds with instant SMS welcome alerts and pavilion mapping.'
              },
              {
                step: '03',
                title: 'Real-Time Session Telemetry',
                desc: 'Track dealer principal attendance across technical keynotes, vehicle reveal staging, and breakout rooms.'
              },
              {
                step: '04',
                title: 'Commercial Deal Attribution',
                desc: 'Directly attribute vehicle wholesale orders and franchise commitments generated during executive roundtables.'
              },
            ].map((s, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="text-3xl font-extrabold font-mono text-blue-600 mb-3">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EVENT CAPABILITY MODULES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Event Technologies
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              White-Glove Tech for High-Stakes Summits.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Contactless Credentialing &amp; RFID
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provide custom encrypted badges that allow seamless entry into high-security OEM design reveals and dealer principal private dinners.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Instant on-demand badge printing</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Security zone clearance gates</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Real-time crowd density heatmaps</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Meeting Orchestrator &amp; Concierge
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coordinate hundreds of 1-on-1 executive meetings between factory leadership and franchise owners with automated room scheduling.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Automated calendar matchmaking</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> SMS concierge meeting reminders</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Private suite access control</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Commercial ROI &amp; Lead Attribution
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prove the bottom-line ROI of your corporate summit by tracking wholesale order volume and franchise contracts signed during the conclave.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Live order commitment tally</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Executive briefing post-event reports</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> CRM lead export pipelines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Plan Your Next Automotive Conclave
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            From single-region dealer conferences to 5,000-attendee global product reveals, our event engineering team delivers absolute operational certainty.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all font-mono shadow-md"
          >
            <span>Consult with Event Tech Specialists</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}