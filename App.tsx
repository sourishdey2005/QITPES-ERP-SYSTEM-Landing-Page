import React, { useState, useEffect, useRef } from 'react';
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
  Activity,
  PieChart,
  Target,
  Rocket,
  Globe,
  ArrowRight,
  Map,
  Construction,
  Zap,
  Clock,
  Gem,
  Brain,
  ExternalLink,
  Smartphone,
  Server,
  Code2,
  Scale,
  Settings,
  ShieldAlert,
  BarChart,
  MapPin
} from 'lucide-react';

const ERP_URL = "https://qitpes-erp-system.vercel.app/";
const PORTFOLIO_URL = "https://sourishdeyportfolio.vercel.app/";

const SLIDESHOW_IMAGES = [
  "https://res.cloudinary.com/dodhvvewu/image/upload/v1770922899/construction-site-blue-12728140_wacsbw.webp",
  "https://res.cloudinary.com/dodhvvewu/image/upload/v1770922897/quantity-surveyor-construction-site_d4bylm.webp",
  "https://res.cloudinary.com/dodhvvewu/image/upload/v1770923066/acumatica-construction-edition-development-related_1_bx9ctw.webp",
  "https://res.cloudinary.com/dodhvvewu/image/upload/v1770922546/benefits-of-erp-in-construction-industry1_m5t9hs.webp",
  "https://res.cloudinary.com/dodhvvewu/image/upload/v1770922543/Importance-of-Construction-ERP-Software_ythf20.webp"
];

const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return { isVisible, domRef };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <span className="text-2xl font-black tracking-tighter text-blue-950 flex items-center transition-transform group-hover:scale-105">
              QITPES <span className="text-blue-600 font-light ml-1">ERP</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-6 items-center text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">
            <a href="#modules" className="hover:text-blue-600 transition-all">Modules</a>
            <a href="#roles" className="hover:text-blue-600 transition-all">Roles</a>
            <a href="#integrations" className="hover:text-blue-600 transition-all">Connectivity</a>
            <a href="#calculator" className="hover:text-blue-600 transition-all">ROI</a>
            <a href="#implementation" className="hover:text-blue-600 transition-all">Process</a>
            <a 
              href={ERP_URL} 
              target="_self"
              className="relative overflow-hidden group bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              <span className="relative z-10">Launch ERP</span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-950 p-2" aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl absolute top-full left-0 w-full shadow-2xl border-b border-gray-100 animate-in slide-in-from-top duration-500">
          <div className="px-6 py-8 space-y-4">
            <a href="#modules" className="block text-lg font-black text-gray-800" onClick={() => setIsOpen(false)}>Modules</a>
            <a href="#roles" className="block text-lg font-black text-gray-800" onClick={() => setIsOpen(false)}>Role Experience</a>
            <a href="#calculator" className="block text-lg font-black text-gray-800" onClick={() => setIsOpen(false)}>ROI Calculator</a>
            <a href={ERP_URL} target="_self" className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-black shadow-xl">Launch ERP System</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isVisible, domRef } = useScrollReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={domRef} className="pt-32 pb-20 lg:pt-56 lg:pb-48 bg-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-40 animate-gradient-slow bg-[linear-gradient(-45deg,#f0f9ff,#e0f2fe,#dbeafe,#f8fafc)] bg-[length:400%_400%]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`max-w-2xl text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-10 border border-blue-100 animate-bounce-subtle">
              <Rocket className="mr-2" size={14} />
              Future-Proof Infrastructure
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              Scale Your <br/>
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-text-shimmer">
                Vision
              </span> <br/>
              Intelligently.
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Eliminate fragmentation. <strong>QITPES ERP</strong> harmonizes complex construction lifecycles into one fluid, automated command center.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href={ERP_URL} 
                target="_self"
                className="relative overflow-hidden group flex items-center justify-center bg-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-25 group-hover:animate-shine" />
              </a>
            </div>
          </div>
          
          <div className={`relative hidden lg:block transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'}`}>
            <div className="relative z-10 p-4 bg-white/50 backdrop-blur-md rounded-[4rem] shadow-2xl border border-white overflow-hidden h-[550px] w-full group">
              {SLIDESHOW_IMAGES.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-4 rounded-[3.5rem] overflow-hidden transition-all duration-[1500ms] ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-4'}`}
                >
                  <img 
                    src={img} 
                    alt={`Construction Project ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent"></div>
                  <div className="absolute top-10 left-10 backdrop-blur-md bg-white/10 px-6 py-4 rounded-3xl border border-white/20 shadow-2xl transition-transform duration-700 hover:scale-105">
                    <div className="text-white text-2xl font-black tracking-tighter">
                      QITPES <span className="text-blue-400">ERP</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-blue-100/50 to-indigo-50/50 rounded-full blur-[140px] -z-10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RoleExperience = () => {
  const [activeRole, setActiveRole] = useState(0);
  const { isVisible, domRef } = useScrollReveal();
  
  const roles = [
    {
      title: "Business Owner",
      subtitle: "Strategic Command",
      desc: "Real-time visibility into ROI, fund utilization, and multi-site project health. One-tap reporting for decision makers.",
      icon: LayoutDashboard,
      features: ["Fund Flow Dashboards", "Project P&L Monitoring", "Automated Compliance Alerts"]
    },
    {
      title: "Project Manager",
      subtitle: "Operational Excellence",
      desc: "Track inventory, labor shifts, and site progress in real-time. Coordinate vendors and machinery seamlessly.",
      icon: Briefcase,
      features: ["Resource Scheduling", "Inventory Tracking", "Delay Prediction Engine"]
    },
    {
      title: "Chief Accountant",
      subtitle: "Financial Integrity",
      desc: "Zero-error GST computation, audit trails, and bank reconciliations integrated with project expenses.",
      icon: Wallet,
      features: ["GST Automation", "Audit Logs", "Vendor Billing Workflows"]
    }
  ];

  return (
    <section id="roles" ref={domRef} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4">Role-Based Intelligence</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter">Experience Precision</h2>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            {roles.map((role, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveRole(idx)}
                className={`w-full text-left p-8 rounded-[2.5rem] transition-all duration-500 border ${activeRole === idx ? 'bg-blue-600 text-white border-blue-600 shadow-2xl scale-105' : 'bg-slate-50 text-slate-900 border-slate-100 hover:bg-slate-100'}`}
              >
                <div className="flex items-center space-x-6">
                  <div className={`p-4 rounded-2xl ${activeRole === idx ? 'bg-white/20' : 'bg-blue-600/10 text-blue-600'}`}>
                    <role.icon size={28} />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">{role.subtitle}</div>
                    <div className="text-2xl font-black tracking-tight">{role.title}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-7">
            <div className="p-12 bg-white rounded-[4rem] border border-slate-100 shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10 animate-fade-in" key={activeRole}>
                <h3 className="text-4xl font-black text-slate-950 mb-6 tracking-tight">{roles[activeRole].title} Module</h3>
                <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium">{roles[activeRole].desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {roles[activeRole].features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="font-bold text-slate-800">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-blue-50/50 opacity-40 group-hover:animate-shine" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EcosystemHub = () => {
  const { isVisible, domRef } = useScrollReveal();
  const integrations = [
    { name: "Tally ERP", icon: Database, color: "text-green-600" },
    { name: "SAP Bridge", icon: Server, color: "text-blue-600" },
    { name: "IoT Devices", icon: Cpu, color: "text-orange-600" },
    { name: "Biometric AI", icon: Smartphone, color: "text-purple-600" },
    { name: "API Webhooks", icon: Code2, color: "text-indigo-600" },
    { name: "Cloud Vault", icon: Lock, color: "text-red-600" }
  ];

  return (
    <section id="integrations" ref={domRef} className="py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h2 className="text-6xl font-black mb-10 tracking-tighter leading-none">The Unified <br/><span className="text-blue-500">Nervous System.</span></h2>
            <p className="text-xl text-blue-100/60 leading-relaxed mb-12 font-medium">
              QITPES doesn't work in isolation. Our platform is a central hub that connects your existing financial, hardware, and biometric infrastructure into one single source of truth.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {integrations.map((item, idx) => (
                <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group text-center cursor-default">
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon size={28} />
                  </div>
                  <div className="font-black text-sm uppercase tracking-widest">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             {/* Abstract Connectivity Visualization */}
             <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-16 border border-blue-500/30 rounded-full"></div>
                <div className="w-48 h-48 bg-blue-600 rounded-[3rem] shadow-[0_0_100px_rgba(37,99,235,0.5)] flex flex-col items-center justify-center relative z-10 animate-pulse">
                  <Globe size={64} className="text-white mb-2" />
                  <span className="text-xl font-black tracking-tighter">QITPES</span>
                </div>
                {/* Floating "Node" points */}
                {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
                  <div key={idx} className="absolute w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center" style={{ transform: `rotate(${deg}deg) translate(220px) rotate(-${deg}deg)` }}>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.1)_0%,_transparent_60%)]"></div>
    </section>
  );
};

const ROICalculator = () => {
  const [projectValue, setProjectValue] = useState(50);
  const { isVisible, domRef } = useScrollReveal();
  
  const savings = Math.round(projectValue * 0.12 * 10) / 10;
  const timeGained = Math.round(projectValue * 0.4);

  return (
    <section id="calculator" ref={domRef} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-blue-50 rounded-[5rem] p-16 lg:p-28 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4">Value Proposition</div>
              <h2 className="text-5xl font-black text-slate-950 mb-8 tracking-tighter leading-tight">Calculate Your <br/><span className="text-blue-600">Efficiency Gains.</span></h2>
              <p className="text-xl text-slate-500 mb-12 font-medium">Estimate how much project value is leaked due to manual processing and how QITPES recovers it.</p>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between font-black text-slate-900 uppercase tracking-widest text-xs">
                    <span>Project Size (Million USD)</span>
                    <span className="text-blue-600">${projectValue}M</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="500" 
                    value={projectValue} 
                    onChange={(e) => setProjectValue(parseInt(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-white rounded-3xl shadow-xl border border-blue-100">
                    <div className="text-blue-600 font-black text-4xl mb-2">${savings}M</div>
                    <div className="text-[10px] uppercase tracking-widest font-black text-slate-400">Projected Leakage Recovery</div>
                  </div>
                  <div className="p-8 bg-white rounded-3xl shadow-xl border border-blue-100">
                    <div className="text-blue-600 font-black text-4xl mb-2">{timeGained} Days</div>
                    <div className="text-[10px] uppercase tracking-widest font-black text-slate-400">Operational Time Gained</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-[4rem] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-12 rounded-[4rem] border border-blue-100 shadow-3xl text-center overflow-hidden">
                <Target size={64} className="text-blue-600 mx-auto mb-8 animate-bounce-subtle" />
                <h4 className="text-3xl font-black text-slate-950 mb-6">Optimized Performance</h4>
                <p className="text-slate-500 font-medium leading-relaxed mb-10">
                  Companies using QITPES report a 22% average reduction in site-to-office communication lag and 15% lower material wastage.
                </p>
                <a href={ERP_URL} className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">Get Detailed Report</a>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-blue-50/50 opacity-40 group-hover:animate-shine" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ComplianceVault = () => {
  const { isVisible, domRef } = useScrollReveal();
  const compliance = [
    { title: "RERA Automated", desc: "Real estate regulatory compliance logs generated per milestone.", icon: Scale },
    { title: "ISO 9001/14001", desc: "Quality and environmental safety checklists integrated.", icon: ShieldAlert },
    { title: "Audit Persistence", desc: "Unbreakable audit trails for every material and labor entry.", icon: FileCheck },
    { title: "Safety (HSE)", desc: "Site incident reporting and safety drill management.", icon: HardHat }
  ];

  return (
    <section ref={domRef} className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter mb-6">Built for Governance.</h2>
          <p className="text-xl text-slate-500 font-medium">Compliance shouldn't be a headache. We've automated the entire paper trail.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {compliance.map((item, idx) => (
            <div key={idx} className={`p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-3xl transition-all duration-500 group transition-all duration-1000 delay-${idx * 150} ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-xl">
                <item.icon size={32} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GlobalCommandCenter = () => {
  const { isVisible, domRef } = useScrollReveal();
  
  return (
    <section ref={domRef} className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-blue-800">Distributed Power</div>
            <h2 className="text-6xl font-black mb-10 tracking-tighter leading-[0.85]">Global Project <br/><span className="text-blue-500">Command Hub.</span></h2>
            <p className="text-2xl text-slate-400 font-medium leading-relaxed mb-12">
              Scale across 480+ cities with our edge-native synchronization. Manage remote sites with limited connectivity using our offline-first core.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-5xl font-black text-white mb-2">480+</div>
                <div className="text-[10px] uppercase tracking-widest font-black text-blue-500">Active Cities</div>
              </div>
              <div className="text-center border-l border-white/10 pl-8">
                <div className="text-5xl font-black text-white mb-2">99.9%</div>
                <div className="text-[10px] uppercase tracking-widest font-black text-blue-500">Uptime Reliability</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <div className="relative bg-white/5 backdrop-blur-3xl rounded-[5rem] p-12 border border-white/10 shadow-3xl group overflow-hidden">
                <MapPin className="text-blue-500 mb-8 animate-bounce" size={48} />
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="text-sm font-black text-blue-400 uppercase tracking-widest mb-2">Real-time Node Status</div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-bold text-white">Active Global Synchronization</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                      <div className="text-2xl font-black text-white">12ms</div>
                      <div className="text-[9px] uppercase font-black text-slate-500">Latency Core</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                      <div className="text-2xl font-black text-white">AES-256</div>
                      <div className="text-[9px] uppercase font-black text-slate-500">End-to-End</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
    </section>
  );
};

const StatsStrip = () => {
  const { isVisible, domRef } = useScrollReveal();
  const stats = [
    { value: "250+", label: "Global Clients" },
    { value: "16+", label: "Years of Growth" },
    { value: "480+", label: "Cities Present" },
    { value: "1000+", label: "Implementations" }
  ];

  return (
    <div ref={domRef} className="bg-white border-y border-slate-100 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`transition-all duration-1000 delay-${idx * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="text-6xl font-black text-blue-600 tracking-tighter mb-2">{stat.value}</div>
              <div className="text-[11px] uppercase tracking-[0.4em] font-black text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const { isVisible, domRef } = useScrollReveal();
  const modules = [
    { icon: Briefcase, name: "Project Management", desc: "Full lifecycle tracking from RFP to final delivery and site closure." },
    { icon: Layers, name: "Planning & Estimation", desc: "Advanced resource requirement scheduling for raw materials and labor." },
    { icon: ShoppingCart, name: "Purchase Management", desc: "Streamlined procurement, vendor relations, and digital purchase orders." },
    { icon: Warehouse, name: "Store & Inventory", desc: "Dynamic stock monitoring with automated reorder levels and tracking." },
    { icon: Factory, name: "Plant & Production", desc: "Real-time production monitoring and equipment efficiency oversight." },
    { icon: Truck, name: "Machinery & Vehicle Management", desc: "Fleet maintenance, fuel management, and asset utilization tracking." },
    { icon: Wallet, name: "Finance & Accounts", desc: "Integrated fiscal controls with automated GST compliance and reporting." },
    { icon: UserPlus, name: "HR & Payroll", desc: "Unified talent management, benefits, and payroll disbursement cycles." },
    { icon: HardHat, name: "Labour Management", desc: "Workforce scheduling, digital attendance, and compliance logs." },
    { icon: Users, name: "Contractor Management", desc: "Centralized portal for managing external vendor contracts and trails." },
    { icon: BarChart3, name: "Management Information", desc: "Predictive BI dashboards for high-level organizational decision making." },
    { icon: Brain, name: "AI-Powered Insights", desc: "Leverage generative AI for automated risk assessment, predictive delay mitigation, and smart documentation." }
  ];

  return (
    <section id="modules" ref={domRef} className="py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-24 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Omni-Channel Operations</div>
          <h2 className="text-5xl lg:text-8xl font-black text-slate-950 mb-8 tracking-tighter leading-none">THE CORE ENGINE</h2>
          <p className="text-slate-500 text-xl font-medium">Precision engineering for the world's most demanding physical industries.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {modules.map((m, idx) => (
            <div 
              key={idx} 
              className={`p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl shadow-blue-900/5 hover:shadow-blue-200/50 hover:-translate-y-4 transition-all duration-500 group relative overflow-hidden transition-all duration-1000 delay-${idx % 4 * 150} ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-indigo-400/0 to-violet-400/0 group-hover:from-blue-400/10 group-hover:via-indigo-400/5 group-hover:to-violet-400/10 transition-all duration-1000"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                <m.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight relative z-10 group-hover:text-blue-600 transition-colors">{m.name}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm relative z-10">{m.desc}</p>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            </div>
          ))}
          <div className={`p-10 bg-blue-600 rounded-[3rem] shadow-2xl flex flex-col justify-between group hover:scale-[1.05] transition-all duration-500 overflow-hidden relative transition-all duration-1000 delay-400 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 bg-[length:200%_200%] animate-gradient-slow opacity-90"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight leading-tight">Infinite Scalability</h3>
              <p className="text-blue-100/80 leading-relaxed font-medium text-base">Custom built features for the modern builder. Your roadmap, our tech.</p>
            </div>
            <a href={ERP_URL} target="_self" className="relative z-10 inline-flex items-center text-white font-black group mt-8 text-lg">
              Launch System <ArrowRight size={20} className="ml-2 group-hover:translate-x-3 transition-transform duration-500" />
            </a>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl animate-pulse"></div>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const { isVisible, domRef } = useScrollReveal();
  const industries = [
    "Road Construction", "General Construction", "Infrastructure ERP", 
    "Ready Mix Concrete", "Stone Crusher", "Mines & Quarries", 
    "Pipeline Projects", "Railway Infrastructure", "Real Estate", 
    "Mall Management"
  ];

  return (
    <section id="industries" ref={domRef} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h2 className="text-6xl lg:text-9xl font-black text-slate-950 mb-10 tracking-tighter leading-[0.85]">Vertical <br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-700">Focus.</span></h2>
            <p className="text-2xl text-slate-500 mb-12 font-medium leading-relaxed max-w-xl">
              From heavy civils to smart real estate, QITPES adapts to your industry's DNA.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
              {industries.map((industry, idx) => (
                <div key={idx} className="flex items-center space-x-4 border-b border-slate-50 py-5 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{industry}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative group transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,58,138,0.3)] transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop" 
                alt="Infrastructure Projects" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:grayscale-0 grayscale-[0.2]"
              />
            </div>
            <div className="absolute -top-12 -right-12 bg-white/80 backdrop-blur-xl p-12 rounded-[4rem] shadow-2xl border border-white/50 hidden md:flex flex-col items-center animate-float">
              <Gem size={56} className="text-blue-600 mb-4 animate-pulse" />
              <div className="text-xs font-black uppercase tracking-[0.4em] text-slate-900">Elite Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Implementation = () => {
  const { isVisible, domRef } = useScrollReveal();
  const steps = [
    { title: "Discover", desc: "Gathering deep business insights to map your unique process nuances." },
    { title: "Training", desc: "Rigorous testing and user migration to ensure zero friction on day one." },
    { title: "Take Off", desc: "Agile validation and full production support for a seamless launch." }
  ];

  return (
    <section id="implementation" ref={domRef} className="py-40 bg-blue-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className={`text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Excellence Defined</div>
        <h2 className={`text-6xl lg:text-9xl font-black mb-24 tracking-tighter leading-none transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>RAPID <br/>DEPLOYMENT</h2>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`relative p-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[4rem] hover:bg-white/10 transition-all duration-700 group text-left transition-all duration-1000 delay-${idx * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-4xl font-black mb-12 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {idx + 1}
              </div>
              <h4 className="text-4xl font-black mb-8 tracking-tighter">{step.title}</h4>
              <p className="text-blue-100/60 leading-relaxed font-medium text-lg">{step.desc}</p>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-900/20 rounded-full blur-[180px] -z-0"></div>
    </section>
  );
};

const FAQ = () => {
  const { isVisible, domRef } = useScrollReveal();
  const faqs = [
    { q: "Is QITPES ERP SYSTEM fully cloud-based?", a: "Yes, our platform is natively designed for the cloud, providing high availability and global access via any secure modern web browser." },
    { q: "Who can access the system?", a: "Access is strictly governed by a role-based permission engine. Only authorized users like Owners, Directors, and Accountants can interact with their assigned modules." },
    { q: "Is it secure for sensitive financial assets?", a: "Absolutely. We utilize state-of-the-art AES-256 encryption, multi-factor authentication, and strict audit trails to ensure absolute fiscal data integrity." },
    { q: "Can we scale as our business grows?", a: "Yes, our architecture is modular and scalable. You can add new project sites, departments, and workforce counts seamlessly as you expand." }
  ];

  return (
    <section id="faq" ref={domRef} className="py-40 bg-slate-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-6xl lg:text-8xl font-black text-slate-950 text-center mb-24 tracking-tighter transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>QUESTIONS?</h2>
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-12 rounded-[4rem] border border-slate-100 shadow-2xl shadow-blue-900/5 hover:shadow-blue-200/50 transition-all duration-700 group transition-all duration-1000 delay-${idx * 150} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <h4 className="text-2xl font-black text-blue-950 mb-6 flex items-start leading-tight">
                <span className="w-12 h-12 rounded-[1.25rem] bg-blue-50 text-blue-600 flex items-center justify-center text-lg mr-6 mt-1 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 font-black">?</span>
                {faq.q}
              </h4>
              <p className="text-slate-600 text-xl font-medium leading-relaxed pl-18">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { isVisible, domRef } = useScrollReveal();
  
  return (
    <section ref={domRef} className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-blue-600 rounded-[6rem] p-16 lg:p-40 text-center text-white relative overflow-hidden shadow-[0_60px_120px_-20px_rgba(30,58,138,0.4)] transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-[length:200%_200%] animate-gradient-slow opacity-95"></div>
            <h2 className="relative z-10 text-7xl lg:text-[10rem] font-black mb-12 tracking-tighter leading-[0.8]">COMMAND <br/><span className="text-blue-200">CENTRAL.</span></h2>
            <p className="relative z-10 text-3xl text-blue-100 mb-16 leading-relaxed max-w-2xl mx-auto font-medium opacity-90">One dashboard. Zero silos. Unified growth.</p>
            <a 
              href={ERP_URL} 
              target="_self"
              className="relative overflow-hidden group inline-flex items-center justify-center bg-white text-blue-600 px-20 py-10 rounded-[2.5rem] text-4xl font-black hover:bg-blue-50 transition-all shadow-3xl shadow-blue-950/20 transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Launch System
                <ChevronRight size={40} className="ml-4 group-hover:translate-x-4 transition-transform duration-500" />
              </span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-blue-200/50 opacity-40 group-hover:animate-shine" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white pt-56 pb-20 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-20 mb-32">
        <div className="col-span-2">
          <div className="text-6xl font-black text-slate-950 mb-10 tracking-tighter">
            QITPES <span className="text-blue-600 font-light">ERP</span>
          </div>
          <p className="text-slate-400 max-w-md mb-12 text-2xl leading-relaxed font-medium">
            Building the digital foundation for the physical world.
          </p>
        </div>
        <div>
          <h5 className="font-black text-slate-950 mb-10 uppercase tracking-[0.4em] text-xs">Explore</h5>
          <ul className="space-y-6 text-slate-500 font-bold text-xl">
            <li><a href="#modules" className="hover:text-blue-600 transition-colors">System Core</a></li>
            <li><a href="#roles" className="hover:text-blue-600 transition-colors">Role Sync</a></li>
            <li><a href="#integrations" className="hover:text-blue-600 transition-colors">Ecosystem</a></li>
            <li><a href={ERP_URL} target="_self" className="hover:text-blue-600 transition-colors">Live Portal</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-black text-slate-950 mb-10 uppercase tracking-[0.4em] text-xs">Connect</h5>
          <ul className="space-y-6 text-slate-500 font-bold text-xl">
            <li><a href="#faq" className="hover:text-blue-600 transition-colors">Help Center</a></li>
            <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition-colors">Founder Office</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-100 pt-20 flex flex-col lg:flex-row justify-between items-center text-slate-400 font-bold text-xs tracking-[0.4em] uppercase">
        <div className="mb-8 lg:mb-0">© {new Date().getFullYear()} QITPES ERP SYSTEM. ALL RIGHTS RESERVED.</div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner group overflow-hidden relative transition-all duration-700 hover:border-blue-200">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-indigo-50/50 to-blue-50/0 bg-[length:200%_auto] animate-gradient-slow group-hover:opacity-100 opacity-50 transition-opacity"></div>
          <div className="flex flex-col items-center sm:items-end relative z-10">
            <span className="text-[9px] text-slate-400 mb-0.5 font-black">ARCHITECTED BY</span>
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-[length:200%_auto] animate-text-shimmer tracking-tighter">SOURISH DEY</span>
          </div>
          <a 
            href={PORTFOLIO_URL} 
            target="_blank"
            className="relative overflow-hidden flex items-center space-x-2.5 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-black text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-300 transform hover:-translate-y-1 group/btn"
          >
            <span className="relative z-10 flex items-center">
              PORTFOLIO
              <ExternalLink size={14} className="ml-2 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover/btn:animate-shine" />
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
      <StatsStrip />
      <Solutions />
      <RoleExperience />
      <EcosystemHub />
      <Industries />
      <ROICalculator />
      <Implementation />
      <ComplianceVault />
      <GlobalCommandCenter />
      <FAQ />
      <CTA />
      <Footer />
      
      <style>{`
        @keyframes shine { 100% { left: 125%; } }
        .animate-shine { animation: shine 0.8s forwards; }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle { animation: bounce-subtle 4s ease-in-out infinite; }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow { animation: gradient-slow 15s ease infinite; }
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-text-shimmer { animation: text-shimmer 4s linear infinite; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 60s linear infinite; }
        html { scroll-behavior: smooth; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        ::selection { background: #2563eb; color: white; }
      `}</style>
    </div>
  );
};

export default App;