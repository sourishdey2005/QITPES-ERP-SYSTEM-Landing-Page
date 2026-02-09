
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Database, 
  Cpu, 
  Layers, 
  ShoppingCart, 
  Warehouse, 
  Factory, 
  Truck, 
  Wallet, 
  UserPlus, 
  HardHat, 
  FileCheck, 
  LayoutDashboard, 
  Lock,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  TrendingUp,
  Activity,
  PieChart,
  Target,
  Rocket
} from 'lucide-react';

const ERP_URL = "https://qitpes-erp.streamlit.app/";
const PORTFOLIO_URL = "https://sourishdeyportfolio.vercel.app/";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-blue-900 flex items-center">
              QITPES <span className="text-blue-600 font-light ml-1">ERP</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm font-bold text-gray-700">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#modules" className="hover:text-blue-600 transition-colors">Modules</a>
            <a href="#roles" className="hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            <a 
              href={ERP_URL} 
              target="_self"
              className="bg-blue-600 text-white px-7 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Launch ERP
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-6 pt-4 pb-10 space-y-4 shadow-2xl">
            <a href="#features" className="block text-lg font-bold text-gray-800 py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#modules" className="block text-lg font-bold text-gray-800 py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Modules</a>
            <a href="#roles" className="block text-lg font-bold text-gray-800 py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Solutions</a>
            <a href={ERP_URL} target="_self" className="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-2xl font-black mt-6">Launch ERP</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-52 lg:pb-44 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-8 border border-blue-100 shadow-sm animate-fade-in">
            <Rocket className="mr-2" size={14} />
            Enterprise-Grade Cloud ERP
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-blue-950 tracking-tight leading-[1.05] mb-8">
            Precision Control for Your <span className="text-blue-600">Enterprise</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Unify Project Management, Finance, and Operations with <strong>QITPES ERP SYSTEM</strong>. Engineered for large organizations needing real-time clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a 
              href={ERP_URL} 
              target="_self"
              className="flex items-center justify-center bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 group"
            >
              Launch ERP System
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#features" 
              className="flex items-center justify-center bg-white text-gray-700 border border-gray-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all"
            >
              See Product Overview
            </a>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative z-10 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=1000" 
              alt="QITPES Dashboard Interface" 
              className="rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(30,58,138,0.25)] border-[10px] border-white w-full h-auto"
              loading="eager"
            />
            {/* Stats Overlays */}
            <div className="absolute -bottom-12 -left-12 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-52">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Activity size={24} /></div>
                <span className="text-green-500 font-black text-sm">+32%</span>
              </div>
              <div className="text-2xl font-black text-blue-950">1,248</div>
              <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Operational KPI</div>
            </div>
            
            <div className="absolute top-12 -right-12 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-52 animate-float-delayed">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg"><CheckCircle2 size={20} /></div>
                <span className="text-gray-900 font-bold text-xs uppercase">Compliance Met</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[94%] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100/40 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const TrustStrip = () => (
  <div className="bg-white border-y border-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-50">
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all group cursor-default">
          <Database className="text-blue-600" size={24} />
          <span className="font-black text-gray-800 text-xs tracking-widest uppercase">Cloud-Based</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all group cursor-default">
          <ShieldCheck className="text-blue-600" size={24} />
          <span className="font-black text-gray-800 text-xs tracking-widest uppercase">SECURE</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all group cursor-default">
          <Layers className="text-blue-600" size={24} />
          <span className="font-black text-gray-800 text-xs tracking-widest uppercase">Scalable</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all group cursor-default">
          <Users className="text-blue-600" size={24} />
          <span className="font-black text-gray-800 text-xs tracking-widest uppercase">ROLES</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all group cursor-default">
          <BarChart3 className="text-blue-600" size={24} />
          <span className="font-black text-gray-800 text-xs tracking-widest uppercase">Analytics</span>
        </div>
      </div>
    </div>
  </div>
);

const ProductOverview = () => (
  <section id="features" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-8 tracking-tight">Enterprise Visibility, Reimagined.</h2>
          <p className="text-gray-600 text-xl mb-12 leading-relaxed">
            QITPES ERP SYSTEM is built to eliminate operational silos. We provide a single, high-performance source of truth for your entire organization.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: "Organization Owners", desc: "Full organization overview and long-term value tracking.", icon: Target },
              { title: "Strategic Directors", desc: "Strategic dashboards and real-time operational KPI visibility.", icon: TrendingUp },
              { title: "Accounting Teams", desc: "Finance, audit trails, and automated fiscal compliance.", icon: Wallet },
              { title: "Operations Managers", desc: "Labor, machinery, and production cycle optimization.", icon: Factory }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <item.icon size={20} />
                </div>
                <h4 className="text-lg font-black text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative p-2 bg-gray-100 rounded-[3rem]">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" 
            alt="Business Analytics Illustration" 
            className="rounded-[2.8rem] shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 bg-blue-900 text-white p-8 rounded-3xl shadow-2xl max-w-xs">
            <p className="text-sm font-light opacity-80 mb-2">System Status</p>
            <p className="text-xl font-bold">Optimal Performance</p>
            <div className="flex space-x-1 mt-4">
               {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-4 bg-blue-500 rounded-full"></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Modules = () => {
  const modules = [
    { icon: Briefcase, name: "Project Management", desc: "Lifecycle tracking from initiation to delivery." },
    { icon: Layers, name: "Planning & Estimation", desc: "Precise budgeting and resource forecasting." },
    { icon: ShoppingCart, name: "Purchase Management", desc: "Automated procurement and vendor cycles." },
    { icon: Warehouse, name: "Store & Inventory", desc: "Real-time stock tracking and replenishment." },
    { icon: Factory, name: "Plant & Production", desc: "Optimized manufacturing floor oversight." },
    { icon: Truck, name: "Machinery & Vehicle", desc: "Fleet management and maintenance schedules." },
    { icon: Wallet, name: "Finance & Accounts", desc: "Double-entry accounting and ledger controls." },
    { icon: UserPlus, name: "HR & Payroll", desc: "Talent management and automated disbursement." },
    { icon: HardHat, name: "Labour Management", desc: "Workforce scheduling and attendance." },
    { icon: Users, name: "Contractor Management", desc: "Unified portal for external partners." },
    { icon: BarChart3, name: "MIS & BI Dashboards", desc: "Intelligent reports for strategic planning." },
    { icon: LayoutDashboard, name: "Admin Console", desc: "Global governance and security policies." },
    { icon: Cpu, name: "AI-Powered Insights", desc: "Predictive analytics and anomaly detection." }
  ];

  return (
    <section id="modules" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-blue-600 font-black text-sm uppercase tracking-widest mb-4">Enterprise Modules</div>
          <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-6">Built for Complexity</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Every facet of your large-scale operations integrated into a unified cloud architecture.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all group duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <m.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-blue-900 mb-3">{m.name}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueSection = () => (
  <section className="py-24 bg-blue-950 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-black mb-10 leading-tight">Why QITPES?</h2>
          <div className="space-y-10">
            {[
              { title: "Centralized Enterprise Control", desc: "Master your entire organization from a single command center. Eliminate data fragmentation." },
              { title: "Real-time Operational Visibility", desc: "Zero latency updates ensure you act on current facts, not outdated reports." },
              { title: "Cloud-Accessible Anywhere", desc: "Access critical functions via any browser. Built for the modern, mobile executive." },
              { title: "Secure Role-Based Access", desc: "Robust multi-tier governance ensures everyone has exactly the data they need, and nothing more." }
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">{item.title}</h4>
                  <p className="text-blue-200/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md">
            <div className="space-y-12">
               <div>
                  <div className="text-6xl font-black text-blue-400 mb-2">99.9%</div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Infrastructure Uptime</div>
               </div>
               <div>
                  <div className="text-6xl font-black text-blue-400 mb-2">Live</div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Global Synchronization</div>
               </div>
               <div>
                  <div className="text-6xl font-black text-blue-400 mb-2">AES-256</div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Security Standard</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DashboardPreview = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="bg-blue-600/5 absolute -inset-10 rounded-full blur-3xl -z-10 group-hover:bg-blue-600/10 transition-colors"></div>
          <div className="relative z-10 p-3 bg-white rounded-[3rem] shadow-2xl border border-gray-100 transform -rotate-1 group-hover:rotate-0 transition-transform duration-700">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
               alt="Advanced ERP Dashboard Visualization" 
               className="rounded-[2.5rem] w-full h-auto"
             />
             <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl z-20 animate-float">
            <BarChart3 size={40} />
          </div>
        </div>
        <div>
          <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-10 leading-tight">Actionable Intelligence</h2>
          <div className="space-y-8">
            <div className="flex space-x-5">
              <div className="flex-shrink-0 p-3 bg-blue-50 text-blue-600 rounded-2xl h-fit mt-1"><PieChart size={24} /></div>
              <div>
                <h4 className="text-xl font-black text-gray-900 mb-2">Dynamic Resource Tracking</h4>
                <p className="text-gray-500 leading-relaxed">Monitor labor allocation and machinery health across all project sites in real-time.</p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="flex-shrink-0 p-3 bg-green-50 text-green-600 rounded-2xl h-fit mt-1"><TrendingUp size={24} /></div>
              <div>
                <h4 className="text-xl font-black text-gray-900 mb-2">Fiscal Health Dashboards</h4>
                <p className="text-gray-500 leading-relaxed">Deep-dive into multi-departmental spending and automated audit preparation dashboards.</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <a href={ERP_URL} target="_self" className="text-blue-600 font-black flex items-center hover:translate-x-2 transition-transform">
              Explore Live Analytics <ChevronRight className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Security = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[3.5rem] p-12 lg:p-24 shadow-xl border border-gray-100 overflow-hidden relative">
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-8">Governance</div>
            <h2 className="text-4xl font-black text-blue-950 mb-8">Secure by Design</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              We understand that enterprise data is the foundation of your organization. Every interaction is encrypted, logged, and governed by strict approval workflows.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Lock, label: "Strict Auth", desc: "Multi-factor protocols." },
                { icon: FileCheck, label: "Audit Trails", desc: "Detailed activity logging." },
                { icon: Users, label: "Access Control", desc: "Granular permissions." },
                { icon: ShieldCheck, label: "Governance", desc: "Approval-based flows." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-blue-600 border border-gray-100">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-sm">{item.label}</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider font-bold">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute -inset-10 bg-blue-100/50 rounded-full blur-[100px] animate-pulse"></div>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 text-center z-10">
              <div className="w-24 h-24 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-200">
                <ShieldCheck size={48} />
              </div>
              <h4 className="text-2xl font-black text-blue-950 mb-4">SOC-2 Readiness</h4>
              <p className="text-gray-500 text-sm max-w-[240px] leading-relaxed">Meeting the highest standards of availability and data security for global corporations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TechStack = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-black text-blue-950">Platform Architecture</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Cpu, name: "Streamlit (Python)", desc: "Core Application Engine" },
          { icon: Database, name: "Cloud persistence", desc: "Highly available database" },
          { icon: Layers, name: "Secure APIs", desc: "Encrypted data exchange" },
          { icon: Activity, name: "AI/ML Integration", desc: "Predictive decision logic" }
        ].map((tech, idx) => (
          <div key={idx} className="text-center group p-8 rounded-3xl hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
              <tech.icon size={32} />
            </div>
            <h5 className="font-black text-gray-900 mb-2">{tech.name}</h5>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "Is QITPES ERP SYSTEM fully cloud-based?", a: "Yes, our system is designed as a cloud-native platform, ensuring you can access your enterprise data securely from any web browser without local server installations." },
    { q: "How is data security managed?", a: "We utilize AES-256 encryption at rest and in transit, combined with strict multi-factor authentication and role-based access control (RBAC) to protect your corporate assets." },
    { q: "Who is the platform built for?", a: "The platform is engineered for large organizations, providing specialized interfaces for Owners, Directors, Accountants, and Operations Managers to collaborate seamlessly." },
    { q: "Can we scale as our organization grows?", a: "Absolutely. Our modular cloud infrastructure automatically scales to accommodate increased operational volume, additional project sites, and growing workforce counts." }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-blue-950 text-center mb-20">Support & FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-black text-blue-900 mb-4">{faq.q}</h4>
              <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-600 rounded-[4rem] p-12 lg:p-28 text-center text-white relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(37,99,235,0.3)]">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[1.1]">Run Your Enterprise Smarter</h2>
          <p className="text-xl text-blue-100 mb-14 leading-relaxed max-w-2xl mx-auto font-light">
            Unified control. Real-time clarity. Secure growth. Experience the next generation of enterprise resource planning today.
          </p>
          <a 
            href={ERP_URL} 
            target="_self"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-12 py-6 rounded-2xl text-2xl font-black hover:bg-blue-50 transition-all shadow-2xl shadow-blue-950/20 group transform hover:scale-105 active:scale-95"
          >
            Launch QITPES ERP SYSTEM
            <ChevronRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full translate-x-1/3 -translate-y-1/3 blur-[140px]"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-400 rounded-full -translate-x-1/3 translate-y-1/3 blur-[140px]"></div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-50 pt-32 pb-16 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-2">
          <div className="text-4xl font-black text-blue-950 mb-8 tracking-tighter">
            QITPES <span className="text-blue-600 font-light">ERP</span>
          </div>
          <p className="text-gray-500 max-w-sm mb-10 text-lg leading-relaxed">
            The definitive enterprise resource planning ecosystem for high-performance organizations.
          </p>
          <div className="flex space-x-4">
             <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all cursor-pointer shadow-sm"><Database size={20} /></div>
             <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all cursor-pointer shadow-sm"><ShieldCheck size={20} /></div>
             <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all cursor-pointer shadow-sm"><BarChart3 size={20} /></div>
          </div>
        </div>
        <div>
          <h5 className="font-black text-blue-950 mb-8 uppercase tracking-[0.2em] text-xs">Solutions</h5>
          <ul className="space-y-4 text-gray-500 font-bold text-sm">
            <li><a href="#modules" className="hover:text-blue-600 transition-colors">ERP Modules</a></li>
            <li><a href="#roles" className="hover:text-blue-600 transition-colors">Role Management</a></li>
            <li><a href="#security" className="hover:text-blue-600 transition-colors">Data Security</a></li>
            <li><a href={ERP_URL} target="_self" className="hover:text-blue-600 transition-colors">Direct Launch</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-black text-blue-950 mb-8 uppercase tracking-[0.2em] text-xs">Support</h5>
          <ul className="space-y-4 text-gray-500 font-bold text-sm">
            <li><a href="#faq" className="hover:text-blue-600 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Compliance</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-16 flex flex-col lg:flex-row justify-between items-center text-gray-400 font-bold text-sm">
        <div className="mb-8 lg:mb-0">
          © {new Date().getFullYear()} **QITPES ERP SYSTEM**. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-12">
          <span className="text-gray-950">Developed by <strong className="font-black">Sourish Dey</strong></span>
          <a 
            href={PORTFOLIO_URL} 
            className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-blue-600 font-black hover:bg-blue-50 transition-all shadow-sm"
          >
            Visit Portfolio
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProductOverview />
      <Modules />
      <ValueSection />
      <DashboardPreview />
      <Security />
      <TechStack />
      <FAQ />
      <CTA />
      <Footer />
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        html {
          scroll-behavior: smooth;
        }
        h1, h2, h3, h4, h5, .font-black {
          letter-spacing: -0.02em;
        }
      `}</style>
    </div>
  );
};

export default App;
