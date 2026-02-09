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
  Rocket,
  Globe,
  Settings,
  ArrowRight
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-blue-950 flex items-center">
              QITPES <span className="text-blue-600 font-light ml-1">ERP</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm font-bold text-gray-700 uppercase tracking-wider">
            <a href="#overview" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#modules" className="hover:text-blue-600 transition-colors">Modules</a>
            <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            <a 
              href={ERP_URL} 
              target="_self"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Launch ERP
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-950 p-2" aria-label="Toggle Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full animate-in slide-in-from-top duration-300 border-b border-gray-100 shadow-2xl">
          <div className="px-6 pt-4 pb-12 space-y-4">
            <a href="#overview" className="block text-lg font-bold text-gray-800 py-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Overview</a>
            <a href="#modules" className="block text-lg font-bold text-gray-800 py-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Modules</a>
            <a href="#solutions" className="block text-lg font-bold text-gray-800 py-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Solutions</a>
            <a href={ERP_URL} target="_self" className="block w-full text-center bg-blue-600 text-white px-6 py-5 rounded-2xl font-black mt-8">Launch ERP System</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-56 lg:pb-48 bg-[radial-gradient(circle_at_top_right,_#f8fafc,_#ffffff)] overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-10 border border-blue-100 shadow-sm animate-fade-in">
            <Rocket className="mr-2" size={14} />
            Unified Enterprise Visibility
          </div>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
            Manage <br/><span className="text-blue-600">Complex</span> <br/>Operations.
          </h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            <strong>QITPES ERP SYSTEM</strong> provides unified control over your organization's projects, inventory, finance, and workforce in a single high-performance cloud ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a 
              href={ERP_URL} 
              target="_self"
              className="flex items-center justify-center bg-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 group"
            >
              Launch ERP System
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#overview" 
              className="flex items-center justify-center bg-white text-slate-700 border border-slate-200 px-12 py-6 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all"
            >
              Explore Features
            </a>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative z-10 animate-float p-4 bg-white rounded-[3.5rem] shadow-2xl border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200&auto=format&fit=crop" 
              alt="QITPES ERP Dashboard Visualization" 
              className="rounded-[2.8rem] w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              loading="eager"
            />
            
            {/* Floating UI Elements */}
            <div className="absolute -bottom-10 -left-10 bg-white p-7 rounded-[2rem] shadow-2xl border border-slate-50 w-64">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200"><Activity size={24} /></div>
                <div className="flex flex-col items-end">
                  <span className="text-green-600 font-black text-xs uppercase tracking-tighter">Live Syncing</span>
                  <span className="text-slate-400 text-[10px]">Active Node: Cloud-01</span>
                </div>
              </div>
              <div className="text-3xl font-black text-slate-900 tracking-tight">Enterprise</div>
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Operational Mode</div>
            </div>
            
            <div className="absolute top-10 -right-10 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-50 w-56 animate-float-delayed">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg"><CheckCircle2 size={20} /></div>
                <span className="text-slate-900 font-black text-xs uppercase">Security Active</span>
              </div>
              <div className="space-y-3">
                 <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600 w-4/5"></div></div>
                 <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600 w-full"></div></div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-blue-100/40 rounded-full blur-[120px] -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const TrustStrip = () => (
  <div className="bg-white border-y border-slate-100 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-40">
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
          <Database className="text-blue-600" size={24} />
          <span className="font-black text-slate-900 text-[10px] tracking-[0.2em] uppercase">Cloud Infrastructure</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
          <ShieldCheck className="text-blue-600" size={24} />
          <span className="font-black text-slate-900 text-[10px] tracking-[0.2em] uppercase">AES-256 Security</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
          <Globe className="text-blue-600" size={24} />
          <span className="font-black text-slate-900 text-[10px] tracking-[0.2em] uppercase">Global Access</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
          <Users className="text-blue-600" size={24} />
          <span className="font-black text-slate-900 text-[10px] tracking-[0.2em] uppercase">Role Provisioning</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
          <PieChart className="text-blue-600" size={24} />
          <span className="font-black text-slate-900 text-[10px] tracking-[0.2em] uppercase">Real-time BI</span>
        </div>
      </div>
    </div>
  </div>
);

const Overview = () => (
  <section id="overview" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 relative group">
          <div className="absolute -inset-6 bg-slate-100 rounded-[4rem] -z-10 transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
            alt="Business Analytics Oversight" 
            className="rounded-[3rem] shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -top-10 -right-10 bg-blue-600 text-white p-10 rounded-[3rem] shadow-2xl hidden md:block border-8 border-white">
            <h5 className="text-4xl font-black mb-1">100%</h5>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Sync Integrity</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-950 mb-10 tracking-tighter leading-none">Built for <br/><span className="text-blue-600 italic underline decoration-blue-100 underline-offset-8">Enterprise Success.</span></h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            From top-level directors to site operations teams, <strong>QITPES ERP SYSTEM</strong> is engineered to meet the demands of large-scale organizations with specialized module clusters.
          </p>
          <div className="space-y-8">
            {[
              { role: "Executive Leadership", benefit: "Consolidated strategic dashboards and organizational ROI visibility.", icon: Target },
              { role: "Financial Controllers", benefit: "Automated fiscal compliance and multi-layered ledger precision.", icon: Wallet },
              { role: "Operational Heads", desc: "Granular inventory, production lifecycle, and resource tracking.", icon: Factory }
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-6 group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">{item.role}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.benefit || item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Modules = () => {
  const modules = [
    { icon: Briefcase, name: "Project Management", desc: "Full lifecycle tracking from RFP to final site delivery." },
    { icon: Layers, name: "Planning & Estimation", desc: "Advanced budgeting and multi-resource forecasting tools." },
    { icon: ShoppingCart, name: "Purchase Management", desc: "End-to-end procurement and vendor lifecycle management." },
    { icon: Warehouse, name: "Store & Inventory", desc: "Real-time stock monitoring and automated reordering logs." },
    { icon: Factory, name: "Plant & Production", desc: "Floor oversight, machine health, and efficiency analytics." },
    { icon: Truck, name: "Machinery & Vehicle", desc: "Fleet maintenance, fuel logs, and asset tracking." },
    { icon: Wallet, name: "Finance & Accounts", desc: "Precision fiscal controls and automated audit reporting." },
    { icon: UserPlus, name: "HR & Payroll", desc: "Talent acquisition and unified payroll disbursement cycles." },
    { icon: HardHat, name: "Labour Management", desc: "Workforce scheduling and digital attendance verification." },
    { icon: Users, name: "Contractor Management", desc: "Portal for external vendor contracts and payment trails." },
    { icon: BarChart3, name: "MIS & BI Dashboards", desc: "Predictive reporting for long-term strategic growth." },
    { icon: LayoutDashboard, name: "Admin Console", desc: "Global policy management and audit-grade security." },
    { icon: Cpu, name: "AI-Powered Insights", desc: "Anomaly detection and trend-based operational logic." }
  ];

  return (
    <section id="modules" className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-6">System Ecosystem</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-950 mb-8 tracking-tighter">Unified Modules</h2>
          <p className="text-slate-500 text-xl font-medium">Modular flexibility designed to adapt to your specific organizational workflows.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {modules.map((m, idx) => (
            <div key={idx} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-blue-900/5 hover:shadow-blue-200/50 hover:-translate-y-3 transition-all duration-500 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <m.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-none">{m.name}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => (
  <section className="py-32 bg-white overflow-hidden border-y border-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-4xl font-black text-slate-950 mb-6 tracking-tighter leading-tight">High-Performance <br/><span className="text-blue-600">Cloud Stack.</span></h3>
          <p className="text-slate-500 font-medium leading-relaxed text-lg">
            Built on a distributed cloud architecture for ultra-low latency and massive horizontal scalability.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full lg:w-auto">
          {[
            { label: "Streamlit Core", sub: "Python Logic", icon: Cpu },
            { label: "Cloud Persist", sub: "Redundant Hub", icon: Database },
            { label: "Zero Trust", sub: "Secure Auth", icon: ShieldCheck },
            { label: "Edge Sync", sub: "Global Nodes", icon: Globe },
            { label: "Predictive BI", sub: "Trend AI", icon: Activity },
            { label: "Modular Arch", sub: "ES6 Core", icon: Layers }
          ].map((tech, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <tech.icon size={28} />
              </div>
              <div className="text-sm font-black text-slate-900 tracking-tight">{tech.label}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">{tech.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SecuritySection = () => (
  <section id="solutions" className="py-32 bg-slate-950 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-10 border border-white/10">Enterprise Governance</div>
          <h2 className="text-5xl lg:text-7xl font-black mb-12 tracking-tighter leading-[0.9]">Protected <br/><span className="text-blue-400">Assets.</span></h2>
          <p className="text-xl text-blue-100/60 mb-12 leading-relaxed font-medium">
            Security is not a module—it is the foundation. QITPES employs rigorous encryption and access protocols across every operational layer.
          </p>
          <div className="grid sm:grid-cols-2 gap-10">
            {[
              { icon: Lock, title: "RBAC Controls", desc: "Granular user permissions." },
              { icon: FileCheck, title: "Audit Logging", desc: "Full traceability on actions." },
              { icon: ShieldCheck, title: "SOC-2 Standard", desc: "Global compliance ready." },
              { icon: Database, title: "AES Encryption", desc: "Protected data at rest." }
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-5">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 flex-shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black mb-1">{item.title}</h4>
                  <p className="text-blue-100/40 text-xs font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-white p-16 rounded-[4rem] shadow-2xl text-slate-900 border border-white/20">
             <div className="space-y-12">
                <div>
                  <div className="text-7xl font-black text-blue-600 tracking-tighter mb-2">99.9%</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Availability Guarantee</div>
                </div>
                <div>
                  <div className="text-7xl font-black text-blue-600 tracking-tighter mb-2">LIVE</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Operational Pulse</div>
                </div>
                <a href={ERP_URL} target="_self" className="block w-full text-center bg-blue-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  Join The Hub
                </a>
             </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/10 rounded-full blur-[140px] -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "Is QITPES ERP SYSTEM fully cloud-based?", a: "Yes, our platform is natively designed for the cloud, providing high availability and global access via any secure modern web browser." },
    { q: "Is it secure for sensitive financial assets?", a: "Absolutely. We utilize state-of-the-art AES-256 encryption, multi-factor authentication, and strict audit trails to ensure absolute data integrity." },
    { q: "Who can access the system?", a: "Access is strictly governed by a role-based permission engine. Only authorized users (Owners, Directors, Accountants) can interact with their assigned modules." },
    { q: "Can we scale as our organization grows?", a: "QITPES is built for scalability. Our modular cloud infrastructure automatically scales to accommodate increased operational volume and workforce counts." }
  ];

  return (
    <section id="faq" className="py-32 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-slate-950 text-center mb-24 tracking-tighter">Support & FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-blue-200/50 transition-all duration-500 group">
              <h4 className="text-2xl font-black text-blue-950 mb-6 flex items-start leading-tight">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm mr-5 mt-1 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 font-black">?</span>
                {faq.q}
              </h4>
              <p className="text-slate-600 text-lg font-medium leading-relaxed pl-14">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-600 rounded-[5rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,58,138,0.3)]">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-6xl lg:text-8xl font-black mb-12 tracking-tighter leading-[0.95]">Run Smarter. <br/><span className="text-blue-200 underline decoration-white/20 underline-offset-8">Lead Better.</span></h2>
          <p className="text-2xl text-blue-100 mb-16 leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Unified control. Real-time clarity. Secure growth. Experience the next generation of enterprise planning today.
          </p>
          <a 
            href={ERP_URL} 
            target="_self"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-16 py-8 rounded-3xl text-3xl font-black hover:bg-blue-50 transition-all shadow-2xl shadow-blue-950/20 group transform hover:scale-105 active:scale-95"
          >
            Launch QITPES ERP SYSTEM
            <ChevronRight className="ml-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-white rounded-full translate-x-1/2 -translate-y-1/2 blur-[180px]"></div>
          <div className="absolute bottom-0 left-0 w-[1200px] h-[1200px] bg-blue-400 rounded-full -translate-x-1/2 translate-y-1/2 blur-[180px]"></div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-40 pb-20 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-20 mb-32">
        <div className="col-span-2">
          <div className="text-5xl font-black text-slate-950 mb-10 tracking-tighter">
            QITPES <span className="text-blue-600 font-light">ERP</span>
          </div>
          <p className="text-slate-400 max-w-md mb-12 text-xl leading-relaxed font-medium">
            The definitive enterprise resource planning ecosystem for organizations that demand precision and real-time clarity.
          </p>
          <div className="flex space-x-6">
             <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all cursor-pointer border border-transparent hover:border-blue-100 shadow-sm"><Database size={24} /></div>
             <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all cursor-pointer border border-transparent hover:border-blue-100 shadow-sm"><ShieldCheck size={24} /></div>
             <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all cursor-pointer border border-transparent hover:border-blue-100 shadow-sm"><BarChart3 size={24} /></div>
          </div>
        </div>
        <div>
          <h5 className="font-black text-slate-950 mb-10 uppercase tracking-[0.3em] text-xs">Solutions</h5>
          <ul className="space-y-6 text-slate-500 font-bold text-lg">
            <li><a href="#modules" className="hover:text-blue-600 transition-colors">ERP Modules</a></li>
            <li><a href="#overview" className="hover:text-blue-600 transition-colors">Platform Hub</a></li>
            <li><a href="#solutions" className="hover:text-blue-600 transition-colors">Security Core</a></li>
            <li><a href={ERP_URL} target="_self" className="hover:text-blue-600 transition-colors">Direct Launch</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-black text-slate-950 mb-10 uppercase tracking-[0.3em] text-xs">Platform</h5>
          <ul className="space-y-6 text-slate-500 font-bold text-lg">
            <li><a href="#faq" className="hover:text-blue-600 transition-colors">Support Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Compliance</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Status</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-100 pt-20 flex flex-col lg:flex-row justify-between items-center text-slate-400 font-bold text-sm tracking-widest uppercase">
        <div className="mb-8 lg:mb-0">
          © {new Date().getFullYear()} QITPES ERP SYSTEM. ALL RIGHTS RESERVED.
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12">
          <span className="text-slate-950">MADE BY <strong className="font-black">SOURISH DEY</strong></span>
          <a 
            href={PORTFOLIO_URL} 
            className="px-8 py-3 bg-blue-50 text-blue-600 rounded-xl font-black border border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-lg shadow-blue-900/5"
          >
            VISIT PORTFOLIO
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Overview />
      <Modules />
      <TechStack />
      
      {/* Featured Dashboard Insights */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-[120px] group-hover:bg-blue-600/10 transition-colors duration-700"></div>
              <div className="relative z-10 p-5 bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 transform -rotate-1 group-hover:rotate-0 transition-transform duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Enterprise Dashboard System Insight" 
                  className="rounded-[3rem] w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-2xl z-20 animate-float hidden lg:flex items-center justify-center border-8 border-white">
                <BarChart3 size={56} />
              </div>
            </div>
            <div>
              <div className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-8">Data-First Logic</div>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-950 mb-10 tracking-tighter leading-none">High-Fidelity <br/><span className="text-blue-600 italic">Visualizations.</span></h2>
              <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-12">
                Transform raw multi-departmental data into clear strategic assets. Monitor labor burn rates, machinery utilization, and fiscal milestones in real-time.
              </p>
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-5">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black text-lg">01</div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">KPI Command</h4>
                  <p className="text-slate-400 font-bold text-xs leading-relaxed uppercase tracking-widest">Instant oversight of organizational milestones and financial velocity.</p>
                </div>
                <div className="space-y-5">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black text-lg">02</div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">Predictive BI</h4>
                  <p className="text-slate-400 font-bold text-xs leading-relaxed uppercase tracking-widest">Model future requirements based on live inventory and workforce data.</p>
                </div>
              </div>
              <div className="mt-16 pt-10 border-t border-slate-100">
                <a href={ERP_URL} target="_self" className="inline-flex items-center text-blue-600 font-black text-lg group">
                  See Real-time Analytics Engine
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SecuritySection />
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
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;