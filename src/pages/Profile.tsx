import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Building2,
  Target,
  Cpu,
  Globe,
  Quote,
  Calendar,
  Send,
  UserCheck,
  TrendingUp,
  Briefcase
} from 'lucide-react';

const stats = [
  {
    label: 'Industry Leadership',
    value: '8+ Years',
    sub: 'Enterprise Software & Automotive Systems'
  },
  {
    label: 'Ledger Volume Directed',
    value: '$120M+',
    sub: 'Automated Partner & Dealer Rebates'
  },
  {
    label: 'Franchise Networks',
    value: '40+',
    sub: 'Tier-1 Dealership Groups Modernized'
  },
  {
    label: 'Global Operating Footprint',
    value: 'Dual-Hub',
    sub: 'Sheridan, USA & Bengaluru, India'
  }
];

const leadershipPillars = [
  {
    icon: Cpu,
    title: 'Automotive Retailing Systems Architecture',
    subtitle: 'Mission-Critical Dealership Floor Platforms',
    description:
      'Pioneered zero-latency desking and synchronized DMS middleware that bridges archaic dealership mainframe databases with modern, high-conversion digital showrooms.'
  },
  {
    icon: TrendingUp,
    title: 'Algorithmic Incentive & Rebate Engines',
    subtitle: 'Dispute-Free Financial Settlements',
    description:
      'Architected algorithmic partner ledger engines processing hundreds of millions in dealer incentive payouts with audited precision, strengthening trust between OEMs and dealer principals.'
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Knowledge Security & Multi-Tenant Isolation',
    subtitle: 'Enterprise-Grade Automotive Data Sovereignty',
    description:
      'Instituted enterprise protocols conforming to SOC2 Type II and ISO 27001 standards, ensuring proprietary dealer pricing models and consumer credit information remain airtight.'
  },
  {
    icon: Globe,
    title: 'Global Delivery & Enterprise Governance',
    subtitle: 'Cross-Continental Operational Resilience',
    description:
      'Established a dual-continent operating model bridging US corporate legal compliance in Sheridan, Wyoming with a 24/7 platform engineering campus in Bengaluru, India.'
  }
];

/* const careerMilestones = [
  {
    year: '2012',
    role: 'Founding Chief Executive & Solutions Architect',
    organization: 'Global SAM Solutions (Sheridan, WY)',
    description:
      'Incorporated Global SAM Solutions as an enterprise operational consultancy advising multi-rooftop automotive retail groups on digital desking, inventory velocity, and dealer margin optimization.'
  },
  {
    year: '2016',
    role: 'Pioneered Dealership Operating System v1.0',
    organization: 'Global SAM Platform Division',
    description:
      'Led the architectural design of a proprietary desking engine that replaced fragmented paperwork and isolated spreadsheets across 40 regional dealership franchises.'
  },
  {
    year: '2020',
    role: 'Led Automated Channel Incentive Engine Rollout',
    organization: 'Enterprise Fintech & Automotive Distribution',
    description:
      'Architected and deployed the automated partner ledger, surpassing $120M in dispute-free dealer rebate transactions and establishing long-term OEM relationships.'
  },
  {
    year: '2024 & Beyond',
    role: 'Unification into Global SAM Suite v4.2 & Global Expansion',
    organization: 'Global SAM Solutions International Hubs',
    description:
      'Consolidated digital desking, partner loyalty networks, and high-touch automotive conclaves into an integrated cloud suite with 99.98% production uptime.'
  }
]; */

export function Profile() {
  const [inquiryType, setInquiryType] = useState('executive_briefing');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. EXECUTIVE HERO DOSSIER */}
      <section className="bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden py-14 lg:py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/about-us" className="hover:text-blue-600 transition-colors">
              Firm
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Executive Leadership</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Portrait & Credentials Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative border backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-amber-500 rounded-3xl opacity-20 blur-md" />

                <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                  <div className="h-96 sm:h-[420px] w-full relative overflow-hidden bg-slate-100">
                    <img
                      src="/Abdul_Profile.png"
                      alt="Syed Abdul Matheen - Founder & CEO"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Active Status Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[11px] font-mono font-medium text-white shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Executive Office &bull; Active
                      </div>
                    </div>

                    {/* Name & Role overlay on portrait bottom */}
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                        Founder &amp; Chief Executive Officer
                      </div>
                      <div className="text-2xl font-bold tracking-tight mt-0.5">
                        Syed Abdul Matheen
                      </div>
                      <div className="text-xs text-slate-300 font-mono mt-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-blue-400" />
                        Global SAM Solutions, Inc.
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact / Key Metadata Footer */}
                  <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        Executive Residence
                      </span>
                      <span className="text-slate-900 font-bold">Sheridan, WY &bull; BLR</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Phone className="w-3.5 h-3.5 text-blue-600" />
                        Executive Direct
                      </span>
                      <a
                        href="tel:+918792394870"
                        className="font-bold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        +91 879 239 4870
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Mail className="w-3.5 h-3.5 text-blue-600" />
                        Direct Inquiries
                      </span>
                      <a
                        href="mailto:info@globalsamsolutions.com"
                        className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        info@globalsamsolutions.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Header, Title & Key Statements */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-medium uppercase tracking-wider text-blue-700">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Executive Leadership Dossier
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Syed Abdul Matheen
                </h1>
                <p className="text-lg sm:text-xl font-medium text-blue-800 mt-2">
                  Founder, Chief Executive Officer &amp; Principal Systems Architect
                </p>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Syed Abdul Matheen is the Founder and Chief Executive Officer of Global SAM Solutions. Over a career spanning more than 8+ years at the intersection of automotive commerce, enterprise CRM architecture, and distributed ledger systems, he has championed the technological modernization of tier-1 automotive dealer networks and global enterprise ecosystems.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Under his leadership, Global SAM Solutions evolved from an automotive systems advisory group in Sheridan, Wyoming into an international enterprise software provider managing mission-critical digital desking, automated incentive disbursements, and executive industry conclaves across multiple continents.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-desk"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all font-mono"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Request Executive Briefing</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-all font-mono"
                >
                  <Building2 className="w-4 h-4 text-slate-500" />
                  <span>Contact Corporate Office</span>
                </Link>
              </div>

              {/* Verification Badges */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span>Corporate Governance Officer</span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Enterprise Architecture Lead</span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Founder (2012)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY LEADERSHIP METRICS BAR */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1 text-center md:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUNDER'S VISION & PHILOSOPHY */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Founding Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                "Velocity in Automotive Commerce Requires Zero Friction Between Systems and Showroom Floors."
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                When Syed Abdul Matheen established Global SAM Solutions, traditional automotive retail was hampered by fractured paper trails, sluggish green-screen DMS terminals, and endless reconciliation conflicts between manufacturers and independent dealer principals.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                His foundational thesis remains uncompromised: replace manual friction with deterministic code, guarantee verifiable ledger accuracy in partner disbursements, and deliver bulletproof uptime when deals are being inked on Saturday afternoons.
              </p>
            </div>

            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 relative">
              <Quote className="w-12 h-12 text-blue-100 absolute top-6 right-6 -z-0" />
              <div className="relative z-10 space-y-6">
                <blockquote className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic">
                  "We did not set out to build superficial CRM add-ons or gimmicky dashboards. Our mandate has always been deep architectural engineering: synchronizing multi-million-dollar vehicle inventory, executing automated partner rebates without human intervention, and treating dealership customer databases with sovereign-grade security."
                </blockquote>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm shrink-0">
                    <img
                      src="/Abdul_Profile.png"
                      alt="Syed Abdul Matheen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">
                      Syed Abdul Matheen
                    </div>
                    <div className="text-xs font-mono text-slate-500">
                      Founder &amp; Chief Executive Officer &bull; Global SAM Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE PILLARS OF ARCHITECTURAL EXPERTISE */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Core Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Strategic &amp; Technical Competencies.
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Key domains where Syed Abdul Matheen directs architecture, strategy, and enterprise execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="text-xs font-mono text-blue-700 font-semibold uppercase tracking-wider mb-1">
                        {pillar.subtitle}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-mono text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Executive Oversight &amp; Implementation Directorship</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CAREER TIMELINE & LEADERSHIP CHRONOLOGY */}
      {/* <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Leadership Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Chronology of Strategic Impact.
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Milestones steering Global SAM Solutions from a regional consultancy into a multi-national platform provider.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl">
            {careerMilestones.map((m, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-5 p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors"
              >
                <div className="sm:col-span-3 font-mono text-2xl font-extrabold text-blue-700 border-b sm:border-b-0 sm:border-r border-slate-200 pb-3 sm:pb-0 sm:pr-4 flex sm:flex-col sm:justify-center">
                  <span>{m.year}</span>
                </div>
                <div className="sm:col-span-9 sm:pl-2 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold">
                    {m.organization}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {m.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 6. EXECUTIVE ENGAGEMENT DESK / CONTACT FORM */}
      <section id="contact-desk" className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Direct Office Overview */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                Executive Office Liaison
              </span>

              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                Engage Directly with Syed Abdul Matheen’s Office.
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                For confidential board consultations, OEM strategic partnerships, high-value enterprise desking architecture, or keynote summits, inquiries are routed directly through the executive governance desk.
              </p>

              <div className="space-y-4 pt-4 text-xs font-mono text-slate-700">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">US Corporate Headquarters</div>
                    <div className="text-slate-500 mt-1">1309 Coffeen Avenue, STE 20455, Sheridan, WY 82801</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Executive Office Direct</div>
                    <div className="text-slate-500 mt-1">+91 879 239 4870</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Executive Correspondence</div>
                    <div className="text-blue-600 font-semibold mt-1">info@globalsamsolutions.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Request Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-lg">
              <div className="border-b border-slate-200 pb-5 mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Request an Executive Briefing
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Confidential communication channel to the office of the Chief Executive Officer.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">Briefing Request Received</h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you. Your inquiry has been forwarded to Syed Abdul Matheen’s executive correspondence desk. An executive assistant will confirm scheduling within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'executive_briefing', label: 'Executive Briefing' },
                        { id: 'oem_partnership', label: 'OEM Partnership' },
                        { id: 'advisory', label: 'Strategic Advisory' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setInquiryType(item.id)}
                          className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all ${inquiryType === item.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Executive / Corporate Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. m.vance@dealergroup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Organization / Dealer Network / Enterprise
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Automotive Franchises (24 Rooftops)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Briefing Objectives / Confidential Scope
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Outline discussion points, dealer group size, or strategic goals for the briefing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-md transition-all font-mono"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Transmit Executive Inquiry</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Protected under strict mutual corporate non-disclosure policy</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
