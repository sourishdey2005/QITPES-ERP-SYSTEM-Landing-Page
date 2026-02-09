
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
  Target
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold tracking-tight text-blue-900">
              QITPES <span className="text-blue-600 font-light">ERP</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm font-semibold text-gray-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#modules" className="hover:text-blue-600 transition-colors">Modules</a>
            <a href="#roles" className="hover:text-blue-600 transition-colors">Role-Based</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            <a 
              href={ERP_URL} 
              target="_self"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Launch ERP
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <a href="#features" className="block text-lg font-medium text-gray-700 border-b border-gray-50 py-2" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#modules" className="block text-lg font-medium text-gray-700 border-b border-gray-50 py-2" onClick={() => setIsOpen(false)}>Modules</a>
            <a href="#roles" className="block text-lg font-medium text-gray-700 border-b border-gray-50 py-2" onClick={() => setIsOpen(false)}>Role-Based</a>
            <a href={ERP_URL} target="_self" className="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-blue-200">Launch ERP</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-sm border border-blue-100">
            <TrendingUp className="mr-2" size={14} />
            Unified Enterprise Management
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-blue-950 tracking-tight leading-[1.1] mb-8">
            The Definitive <span className="text-blue-600">ERP Solution</span> for Modern Growth
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            Empower your organization with QITPES ERP SYSTEM. A cloud-native, secure platform built for directors, owners, and specialized teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={ERP_URL} 
              target="_self"
              className="flex items-center justify-center bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 group"
            >
              Launch ERP System
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#modules" 
              className="flex items-center justify-center bg-white text-gray-700 border border-gray-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all"
            >
              Explore Modules
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 text-gray-400">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">Trusted by leading organizations across the globe</p>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative z-10 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=1000" 
              alt="QITPES ERP Dashboard" 
              className="rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(30,58,138,0.2)] border-8 border-white w-full h-auto"
              loading="eager"
            />
            {/* Overlay stats card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[220px]">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                  <Activity size={24} />
                </div>
                <span className="text-green-500 font-bold text-sm">+24%</span>
              </div>
              <div className="text-2xl font-bold text-blue-950">98.2k</div>
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">Active Assets</div>
            </div>
            
            {/* Overlay floating card */}
            <div className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[220px] animate-float-delayed">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Target size={20} />
                </div>
                <span className="text-gray-900 font-bold text-sm">Target Met</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const TrustStrip = () => (
  <div className="bg-white border-y border-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center opacity-60">
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default group">
          <Database className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
          <span className="font-bold text-gray-800 text-sm tracking-wide uppercase">Cloud-Based</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default group">
          <ShieldCheck className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
          <span className="font-bold text-gray-800 text-sm tracking-wide uppercase">Secure</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default group">
          <Layers className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
          <span className="font-bold text-gray-800 text-sm tracking-wide uppercase">Scalable</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default group">
          <Users className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
          <span className="font-bold text-gray-800 text-sm tracking-wide uppercase">Role-Driven</span>
        </div>
        <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default group">
          <BarChart3 className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
          <span className="font-bold text-gray-800 text-sm tracking-wide uppercase">Analytics</span>
        </div>
      </div>
    </div>
  </div>
);

const RolesSection = () => {
  const roles = [
    {
      title: "Organization Owners",
      benefit: "Holistic Enterprise Oversight",
      desc: "Full transparency across all business units. Track organization-wide ROI, long-term asset health, and workforce productivity from a single vantage point.",
      icon: Target
    },
    {
      title: "Directors & Strategists",
      benefit: "Data-Driven Strategy",
      desc: "Access specialized dashboards for high-level decision-making. Monitor KPIs in real-time and model potential operational shifts with integrated BI tools.",
      icon: TrendingUp
    },
    {
      title: "Accounting & Finance",
      benefit: "Financial Integrity & Compliance",
      desc: "Rigorous fiscal controls, automated tax compliance, and seamless multi-ledger management. Eliminate reconciliation errors with unified data flows.",
      icon: Wallet
    }
  ];

  return (
    <section id="roles" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-blue-950 mb-6 tracking-tight">Purpose-Built for Every Role</h2>
          <p className="text-gray-600 text-lg">QITPES ERP SYSTEM isn't just one application; it's a collection of tailored experiences for key stakeholders.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-xl shadow-blue-100/20 border border-gray-100 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <role.icon size={32} />
              </div>
              <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">{role.benefit}</div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">{role.title}</h3>
              <p className="text-gray-500 leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DashboardPreview = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Enhanced visual container for Dashboard */}
          <div className="bg-blue-600/5 absolute -inset-10 rounded-full blur-3xl -z-10"></div>
          <div className="relative z-10 p-2 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=1000" 
               alt="Enterprise Dashboard Visualization" 
               className="rounded-[2rem] w-full h-auto"
               loading="lazy"
             />
             {/* Dynamic annotation */}
             <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded-full shadow-lg">
                Live Data
             </div>
          </div>
          {/* Floating support element */}
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-5 rounded-3xl shadow-xl z-20 flex items-center justify-center animate-bounce">
            <BarChart3 size={32} />
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-950 mb-8 leading-tight">Insight-First Interface</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-5">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
                <PieChart size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Real-Time KPI Tracking</h4>
                <p className="text-gray-500 leading-relaxed">Instant visualization of operational health. Know exactly where your project stands with live milestone tracking.</p>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <div className="p-3 bg-green-50 text-green-600 rounded-xl mt-1">
                <BarChart3 size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Predictive Forecasting</h4>
                <p className="text-gray-500 leading-relaxed">Our AI module analyzes historical trends to predict store depletion and project delivery dates.</p>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mt-1">
                <Activity size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Dynamic Resource Allocation</h4>
                <p className="text-gray-500 leading-relaxed">Instantly see where machinery and labor are deployed to optimize utilization across multiple sites.</p>
              </div>
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
    { icon: LayoutDashboard, name: "Admin & Governance", desc: "Global security and policy management." },
    { icon: Cpu, name: "AI-Powered Insights", desc: "Predictive analytics and anomaly detection." }
  ];

  return (
    <section id="modules" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Comprehensive Coverage</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6">Core ERP Modules</h2>
          <p className="text-gray-600 text-lg">Every facet of your enterprise, integrated into a single high-performance dashboard.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all group duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                <m.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{m.name}</h3>
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
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight">Why Choose QITPES ERP SYSTEM?</h2>
          <div className="space-y-10">
            {[
              { title: "Centralized Enterprise Control", desc: "Master your entire organization from a single, unified command center. No more disconnected spreadsheets." },
              { title: "Real-time Operational Visibility", desc: "Zero latency data updates ensure you are always acting on current facts, not last week's reports." },
              { title: "Cloud-Accessible Anywhere", desc: "Designed for the modern mobile executive. Access critical functions from your browser on any device." },
              { title: "Decision-Ready Analytics", desc: "Transform raw data into strategic assets with high-fidelity BI dashboards that tell the real story." }
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 transition-colors">
                  <CheckCircle2 className="text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-50">{item.title}</h4>
                  <p className="text-blue-200/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-12 rounded-[3rem] border border-blue-800 shadow-3xl">
            <div className="space-y-8">
               <div className="pb-8 border-b border-blue-800">
                  <div className="text-6xl font-black mb-2 tracking-tighter">99.9%</div>
                  <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Uptime Reliability</div>
               </div>
               <div className="pb-8 border-b border-blue-800">
                  <div className="text-6xl font-black mb-2 tracking-tighter">100%</div>
                  <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Cloud Native</div>
               </div>
               <div>
                  <div className="text-6xl font-black mb-2 tracking-tighter">Live</div>
                  <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Data Synchronization</div>
               </div>
            </div>
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  </section>
);

const Security = () => (
  <section className="py-24 bg-white" id="security">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-50 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border border-gray-100">
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8">
              Governance & Safety
            </div>
            <h2 className="text-4xl font-bold text-blue-950 mb-8 tracking-tight">Enterprise Governance at the Core</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Security is not an afterthought. Every module in QITPES is designed with strict access control policies and comprehensive audit logging.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Lock, label: "Secure Authentication", desc: "Industry standard protocols." },
                { icon: FileCheck, label: "Detailed Audit Trails", desc: "Every action is logged." },
                { icon: Users, label: "Access Control", desc: "Granular role-based permissions." },
                { icon: ShieldCheck, label: "Approval Workflows", desc: "Built-in governance rules." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-blue-600 border border-gray-50">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-10 bg-blue-200/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 text-center max-w-[340px]">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-blue-600 text-white mb-8 shadow-xl shadow-blue-200">
                <ShieldCheck size={48} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">SOC-2 Standards</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Engineered to meet the most demanding compliance requirements of large-scale organizations.</p>
              <div className="mt-8 flex justify-center space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-blue-100"></div>)}
              </div>
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
        <h2 className="text-3xl font-bold text-blue-950 tracking-tight">Built on a Modern Tech Stack</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Cpu, name: "Streamlit (Python)", desc: "Lightning fast interface" },
          { icon: Database, name: "Cloud Infrastructure", desc: "Enterprise persistence" },
          { icon: Layers, name: "Scalable APIs", desc: "Modular architecture" },
          { icon: TrendingUp, name: "AI/ML Integration", desc: "Intelligent automation" }
        ].map((tech, idx) => (
          <div key={idx} className="group p-8 text-center rounded-3xl border border-gray-50 hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm mx-auto mb-6 group-hover:scale-110 transition-transform">
              <tech.icon size={32} />
            </div>
            <h5 className="font-bold text-gray-900 mb-2">{tech.name}</h5>
            <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "Is QITPES ERP SYSTEM cloud-based?", a: "Yes, it is a fully cloud-native platform, allowing you to access your enterprise data from any device, anywhere in the world, without local server maintenance." },
    { q: "Is it secure for sensitive financial data?", a: "Absolutely. We utilize industry-standard 256-bit encryption, multi-factor authentication, and granular role-based access controls to ensure your data is accessible only by authorized personnel." },
    { q: "Who can access the system?", a: "Access is governed by specific role policies. Owners, Directors, Accountants, and Managers are assigned tiered permissions based on their departmental needs." },
    { q: "Can it scale with business growth?", a: "QITPES is designed for scalability. Our cloud architecture automatically scales to handle increased transaction volumes and additional users as your organization expands." }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-950 text-center mb-20">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-blue-900 mb-4">{faq.q}</h4>
              <p className="text-gray-600 leading-relaxed text-lg">{faq.a}</p>
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
      <div className="bg-blue-600 rounded-[4rem] p-12 lg:p-32 text-center text-white relative overflow-hidden shadow-3xl shadow-blue-200">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-extrabold mb-10 leading-[1.1] tracking-tight">Ready to Run Your Enterprise Smarter?</h2>
          <p className="text-xl text-blue-100 mb-14 leading-relaxed max-w-2xl mx-auto">
            Experience the power of a unified ERP. Secure, scalable, and built for modern leadership.
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
        
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400 rounded-full -translate-x-1/2 translate-y-1/2 blur-[120px]"></div>
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
            The next generation of enterprise resource planning. Engineering business intelligence into every operation.
          </p>
          <div className="flex space-x-4">
             <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all cursor-pointer"><Database size={20} /></div>
             <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all cursor-pointer"><ShieldCheck size={20} /></div>
             <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all cursor-pointer"><BarChart3 size={20} /></div>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-blue-950 mb-8 uppercase tracking-widest text-sm">Solutions</h5>
          <ul className="space-y-5 text-gray-500 font-medium">
            <li><a href="#modules" className="hover:text-blue-600 transition-colors">ERP Modules</a></li>
            <li><a href="#roles" className="hover:text-blue-600 transition-colors">Role Management</a></li>
            <li><a href="#security" className="hover:text-blue-600 transition-colors">Data Security</a></li>
            <li><a href={ERP_URL} target="_self" className="hover:text-blue-600 transition-colors">Direct Launch</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-blue-950 mb-8 uppercase tracking-widest text-sm">Platform</h5>
          <ul className="space-y-5 text-gray-500 font-medium">
            <li><a href="#faq" className="hover:text-blue-600 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Compliance</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-16 flex flex-col lg:flex-row justify-between items-center text-gray-400 font-medium">
        <div className="mb-8 lg:mb-0">
          © {new Date().getFullYear()} **QITPES ERP SYSTEM**. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-12">
          <span className="text-gray-900">Made by <strong className="font-black">Sourish Dey</strong></span>
          <a 
            href={PORTFOLIO_URL} 
            className="px-6 py-2 bg-white border border-gray-200 rounded-xl text-blue-600 font-bold hover:bg-blue-50 hover:border-blue-100 transition-all"
          >
            Explore Portfolio
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
      <RolesSection />
      <DashboardPreview />
      <Modules />
      <ValueSection />
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
      `}</style>
    </div>
  );
};

export default App;
