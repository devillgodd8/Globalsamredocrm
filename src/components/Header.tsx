import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Car,
  Users,
  Calendar,
  Award,
  Cpu,
  Factory,
  ChevronDown,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

const solutions = [
  {
    title: 'Automotive Dealership OS',
    href: '/solutions/automotive',
    desc: 'Integrated showroom workflows, VIN tracking & inventory CRM',
    icon: Car,
    tag: 'Core Platform'
  },
  {
    title: 'Channel Partner Engagement',
    href: '/solutions/channel-partner-engagement',
    desc: 'Tier incentives, dealer network portals & payout automation',
    icon: Users,
    tag: 'Enterprise'
  },
  {
    title: 'Business Events & Summits',
    href: '/solutions/business-events',
    desc: 'High-touch executive conclaves & dealer launch conferences',
    icon: Calendar,
    tag: 'Experiential'
  },
  {
    title: 'Loyalty & Retention Rewards',
    href: '/solutions/loyalty-rewards',
    desc: 'Algorithmic reward engines for customers & dealer personnel',
    icon: Award,
    tag: 'Growth'
  },
];

const industries = [
  {
    title: 'Automotive OEMs & Retailers',
    href: '/industries/automotive',
    desc: 'Multi-franchise dealer networks and global automotive brands',
    icon: Car
  },
  {
    title: 'Industrial & Manufacturing',
    href: '/industries/automotive',
    desc: 'Tier-1 suppliers, assembly logistics, and fleet operations',
    icon: Factory
  },
  {
    title: 'Enterprise Tech & SaaS',
    href: '/industries/tech',
    desc: 'High-growth technology platforms and channel ecosystems',
    icon: Cpu
  },
];

export function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setSolutionsOpen(false);
    setIndustriesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
      : 'bg-white border-b border-slate-200/60 py-3.5'
      }`}>
      {/* Top Technical Utility Strip */}
      {/* <div className="hidden lg:block border-b border-slate-100 pb-1.5 mb-1.5 text-[11px] text-slate-500 font-mono">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1.5 animate-pulse"></span>
              Global SAM Platform v4.2 &bull; Active Operations
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-slate-500">
              <ShieldCheck className="w-3 h-3 text-slate-400" />
              ISO 27001 &bull; SOC2 Ready
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a href="tel:+13612039170" className="hover:text-slate-900 transition-colors flex items-center gap-1">
              <PhoneCall className="w-3 h-3" />
              Direct: +91 879 239 4870
            </a>
            <span className="text-slate-300">|</span>
            <a href="mailto:info@globalsamsolutions.com" className="hover:text-slate-900 transition-colors">
              info@globalsamsolutions.com
            </a>
          </div>
        </div>
      </div> */}

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center space-x-3 group py-1">
            <img
              src="/LOGO.png"
              alt="Global SAM Solutions"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === '/'
                ? 'text-amber-700 bg-amber-50/60'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              Overview
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname.startsWith('/solutions')
                  ? 'text-amber-700 bg-amber-50/60'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 w-[580px] bg-white border border-slate-200/90 rounded-xl shadow-xl p-4 grid grid-cols-2 gap-2 mt-1 z-50 animate-in fade-in-50 slide-in-from-top-1 duration-150">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Enterprise Modules
                    </span>
                    <Link to="/solutions" className="text-[11px] font-medium text-amber-700 hover:text-amber-800 flex items-center gap-0.5">
                      View all solutions <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                  {solutions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-700 group-hover:bg-amber-50 group-hover:text-amber-700 group-hover:border-amber-200 transition-colors shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-amber-800 flex items-center gap-1.5">
                            {item.title}
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname.startsWith('/industries')
                  ? 'text-amber-700 bg-amber-50/60'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                Industries
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-0 w-[420px] bg-white border border-slate-200/90 rounded-xl shadow-xl p-3.5 space-y-1 mt-1 z-50 animate-in fade-in-50 slide-in-from-top-1 duration-150">
                  <div className="pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Target Verticals
                    </span>
                    <Link to="/industries" className="text-[11px] font-medium text-amber-700 hover:text-amber-800 flex items-center gap-0.5">
                      Explore directory <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                  {industries.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-700 group-hover:bg-amber-50 group-hover:text-amber-700 group-hover:border-amber-200 transition-colors shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-amber-800">
                            {item.title}
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/about-us"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === '/about-us'
                ? 'text-amber-700 bg-amber-50/60'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === '/contact'
                ? 'text-amber-700 bg-amber-50/60'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact?type=portal"
              className="px-3 py-1.5 text-xs font-mono font-medium text-slate-700 hover:text-slate-900 rounded border border-slate-200 hover:border-slate-300 transition-colors"
            >
              Partner Portal
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md shadow-sm transition-all"
            >
              <span>Schedule Briefing</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-semibold uppercase text-white bg-blue-600 hover:bg-blue-700 rounded shadow-sm"
            >
              Briefing
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Platform Overview
            </Link>
            <Link
              to="/solutions"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              All Solutions
            </Link>
            <div className="pl-3 py-1 space-y-1 border-l-2 border-amber-500/40 ml-2">
              {solutions.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900"
                >
                  &bull; {item.title}
                </Link>
              ))}
            </div>

            <Link
              to="/industries"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Industries
            </Link>
            <div className="pl-3 py-1 space-y-1 border-l-2 border-slate-300 ml-2">
              {industries.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900"
                >
                  &bull; {item.title}
                </Link>
              ))}
            </div>

            <Link
              to="/about-us"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              About Global SAM
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Contact & Briefing
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm"
            >
              Schedule Executive Briefing
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </Link>
            <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono space-y-1">
              <div>Phone: +91 879 239 4870</div>
              <div>Email: info@globalsamsolutions.com</div>
              <div className="text-emerald-700 flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                SOC2 Ready &bull; ISO 27001
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}