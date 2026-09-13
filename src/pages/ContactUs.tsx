import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lock,
  Calendar,
  Sparkles,
  Headphones
} from 'lucide-react';

export function ContactUs() {
  const [department, setDepartment] = useState<'sales' | 'onboarding' | 'support' | 'partners'>('sales');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    phone: '',
    organizationType: 'Dealer Group (Multi-Rooftop)',
    rooftops: '5 - 20 Rooftops',
    primaryInterest: 'Automotive Dealership OS',
    timeline: 'Immediate (Next 30 Days)',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. HERO SECTION WITH CURATED ARCHITECTURAL IMAGERY */}
      <section className="bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-medium uppercase tracking-wider text-blue-700 mb-6">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                Executive Consultation &amp; Briefing Desk
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Connect with Our Automotive Systems Engineers.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Whether structuring multi-franchise showroom workflows, automating channel partner rebates, or planning an executive automotive conclave, our senior solutions team is ready to assist.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-md border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Mutual NDA Standard</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-md border border-slate-200">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Sub-4 Hour Response Window</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-md border border-slate-200">
                  <Headphones className="w-4 h-4 text-blue-600" />
                  <span>Direct Partner Desk</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Imagery Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                  alt="Global SAM Executive Facilities"
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white font-mono flex items-center justify-between">
                  <span>Global Operations Centre</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                    Desk Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONSULTATION FORM & OFFICE DIRECTORY */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Enterprise Qualification Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-lg">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Briefing Request Registered
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    A Senior Systems Architect from Global SAM Solutions has been assigned to your inquiry. You will receive an encrypted meeting invitation and technical agenda within 4 business hours.
                  </p>
                  <div className="pt-4 font-mono text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200 max-w-sm mx-auto">
                    Tracking ID: <span className="font-semibold text-blue-700">GSAM-REQ-2026-09</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      Select Department Routing:
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: 'sales', label: 'Enterprise Sales' },
                        { id: 'onboarding', label: 'Dealer Onboarding' },
                        { id: 'partners', label: 'Partner Incentives' },
                        { id: 'support', label: 'Client NOC' },
                      ].map((dept) => (
                        <button
                          key={dept.id}
                          type="button"
                          onClick={() => setDepartment(dept.id as 'sales' | 'onboarding' | 'support' | 'partners')}
                          className={`py-2.5 px-3 text-xs font-mono font-semibold rounded-lg border transition-all ${
                            department === dept.id
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {dept.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Executive Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Johnathan Hayes"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Corporate Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="j.hayes@premierauto.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Company / Dealership Group *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Premier Automotive Enterprises"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Direct Telephone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Organization Type
                      </label>
                      <select
                        value={formData.organizationType}
                        onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                      >
                        <option>Dealer Group (Multi-Rooftop)</option>
                        <option>Single Franchise Dealership</option>
                        <option>Automotive OEM / Manufacturer</option>
                        <option>Tier-1 Parts &amp; Fleet Supplier</option>
                        <option>Enterprise Tech &amp; SaaS</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Scope / Rooftops
                      </label>
                      <select
                        value={formData.rooftops}
                        onChange={(e) => setFormData({ ...formData, rooftops: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                      >
                        <option>1 - 4 Rooftops</option>
                        <option>5 - 20 Rooftops</option>
                        <option>21 - 50 Rooftops</option>
                        <option>50+ Enterprise Rooftops</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                      >
                        <option>Immediate (Next 30 Days)</option>
                        <option>Quarter 4 Planning</option>
                        <option>FY2027 Strategic RFP</option>
                        <option>Exploratory Research</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                      Architectural Scope &amp; Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify your current DMS/CRM (e.g. CDK, Reynolds), volume requirements, or incentive audit scope..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-all shadow-md font-mono"
                    >
                      <span>Dispatch Briefing Request</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-slate-500">
                      <Lock className="w-3.5 h-3.5 text-blue-600" />
                      TLS 1.3 Encrypted Transmission
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Direct Desk & Global Facilities with Visuals */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Executive Desk Card */}
              <div className="bg-white text-slate-900 rounded-2xl border-2 border-blue-600 p-8 shadow-xl shadow-blue-500/5 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
                    Direct Executive Desk
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-mono uppercase">Direct Phone Line</div>
                      <a href="tel:+918792394870" className="text-base font-mono font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        +91 879 239 4870
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-mono uppercase">Direct Briefing Email</div>
                      <a href="mailto:info@globalsamsol.com" className="text-base font-mono font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        info@globalsamsol.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-mono uppercase">Executive Response SLA</div>
                      <div className="text-xs text-slate-800 font-medium">
                        Within 4 business hours &bull; Mon - Sat
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-600 space-y-1">
                  <div className="text-slate-900 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Enterprise Confidentiality
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    All architectural inquiries and dealer count metrics are safeguarded under enterprise non-disclosure terms.
                  </p>
                </div>
              </div>

              {/* Office Locations with Visual Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold border-b border-slate-100 pb-3 flex items-center justify-between">
                  <span>Registered Facilities</span>
                  <span className="text-blue-600 text-[11px] font-semibold">2 Global Hubs</span>
                </div>

                <div className="space-y-5 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        Wyoming Corporate Headquarters
                      </div>
                      <p className="text-slate-600 mt-1 leading-snug">
                        1309 Coffeen Avenue, STE 20455<br />
                        Sheridan, Wyoming 82801, USA
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        Technology Delivery &amp; NOC Hub
                      </div>
                      <p className="text-slate-600 mt-1 leading-snug">
                        Global SAM Tech Campus, Whitefield Corridor<br />
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                      alt="Global SAM Headquarters Facility" 
                      className="w-full h-32 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}