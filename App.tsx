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
  Gem
} from 'lucide-react';

const ERP_URL = "https://qitpes-erp-system.vercel.app/";
const PORTFOLIO_URL = "https://sourishdeyportfolio.vercel.app/";

const SLIDESHOW_IMAGES = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517089534702-8a930fd0866a?q=80&w=1200&auto=format&fit=crop"
];

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
          <div className="hidden md:flex space-x-8 items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
            <a href="#modules" className="hover:text-blue-600 transition-colors">Modules</a>
            <a href="#industries" className="hover:text-blue-600 transition-colors">Industries</a>
            <a href="#implementation" className="hover:text-blue-600 transition-colors">Implementation</a>
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-950 p-2" aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-2xl border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-4">
            <a href="#modules" className="block text-lg font-bold text-gray-800" onClick={() => setIsOpen(false)}>Modules</a>
            <a href="#industries" className="block text-lg font-bold text-gray-800" onClick={() => setIsOpen(false)}>Industries</a>
            <a href="#implementation" className="block text-lg font-bold text-gray-800" onClick={() => setIsOpen(false)}>Implementation</a>
            <a href={ERP_URL} target="_self" className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-black">Launch ERP System</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 lg:pt-56 lg:pb-48 bg-[radial-gradient(circle_at_top_right,_#f8fafc,_#ffffff)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-10 border border-blue-100 animate-fade-in">
              <Rocket className="mr-2" size={14} />
              The Ultimate Infrastructure ERP Solution
            </div>
            <h1 className="text-5xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
              Build Every <br/><span className="text-blue-600">Block</span> <br/>With Precision.
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Turn stumbling blocks into stepping stones. <strong>QITPES ERP</strong> empowers builders to nurture every project milestone at their fingertips.
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
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float p-4 bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden h-[500px] w-full">
              {SLIDESHOW_IMAGES.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img 
                    src={img} 
                    alt={`Construction Project ${idx + 1}`} 
                    className="w-full h-full object-cover grayscale-[0.1]"
                  />
                  {/* Small Branding Overlay in Top-Left Corner */}
                  <div className="absolute inset-0 bg-black/20">
                    <div className="absolute top-8 left-8 backdrop-blur-md bg-white/10 px-5 py-3 rounded-2xl border border-white/20 shadow-xl">
                      <div className="text-white text-xl font-black tracking-tighter drop-shadow-md">
                        QITPES <span className="text-blue-400">ERP</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots navigation */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
              {SLIDESHOW_IMAGES.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-10 bg-blue-600' : 'w-2.5 bg-blue-200'}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-blue-100/40 rounded-full blur-[120px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsStrip = () => (
  <div className="bg-white border-y border-slate-100 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        <div>
          <div className="text-5xl font-black text-blue-600 tracking-tighter mb-2">250+</div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Global Clients</div>
        </div>
        <div>
          <div className="text-5xl font-black text-blue-600 tracking-tighter mb-2">16+</div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Years of Growth</div>
        </div>
        <div>
          <div className="text-5xl font-black text-blue-600 tracking-tighter mb-2">480+</div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Cities Present</div>
        </div>
        <div>
          <div className="text-5xl font-black text-blue-600 tracking-tighter mb-2">1000+</div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Implementations</div>
        </div>
      </div>
    </div>
  </div>
);

const Solutions = () => {
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
    { icon: Users, name: "Contractor Management Software", desc: "Centralized portal for managing external vendor contracts and trails." },
    { icon: BarChart3, name: "Management Info. System", desc: "Predictive BI dashboards for high-level organizational decision making." }
  ];

  return (
    <section id="modules" className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-6">The QITPES Advantage</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-950 mb-8 tracking-tighter leading-none">CORE ERP MODULES</h2>
          <p className="text-slate-500 text-xl font-medium">Powering enterprise success with a unified database for all construction and infrastructure operations.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {modules.map((m, idx) => (
            <div key={idx} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-blue-900/5 hover:shadow-blue-200/50 hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <m.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{m.name}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">{m.desc}</p>
            </div>
          ))}
          <div className="p-10 bg-blue-600 rounded-[2.5rem] shadow-2xl flex flex-col justify-between group hover:scale-[1.02] transition-transform overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">Ready for more?</h3>
              <p className="text-blue-100/80 leading-relaxed font-medium text-sm">Explore our fully customized ERP features for your business growth.</p>
            </div>
            <a href={ERP_URL} target="_self" className="relative z-10 inline-flex items-center text-white font-black group mt-8">
              Launch System Now <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => (
  <section id="industries" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-950 mb-10 tracking-tighter leading-none">Industries <br/><span className="text-blue-600">We Empower.</span></h2>
          <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
            QITPES ERP is flexible for companies ranging from small to large-sized enterprises in diverse infrastructure fields.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Road Construction", "General Construction", "Infrastructure ERP", 
              "Ready Mix Concrete", "Stone Crusher", "Mines & Quarries", 
              "Pipeline Projects", "Railway Infrastructure", "Real Estate", 
              "Mall Management"
            ].map((industry, idx) => (
              <div key={idx} className="flex items-center space-x-4 border-b border-slate-50 py-4 group">
                <CheckCircle2 className="text-blue-500 flex-shrink-0" size={20} />
                <span className="text-lg font-black text-slate-700 group-hover:text-blue-600 transition-colors">{industry}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop" 
            alt="Infrastructure Projects" 
            className="rounded-[4rem] shadow-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -top-10 -right-10 bg-blue-600 text-white p-12 rounded-[3rem] shadow-2xl hidden md:block border-8 border-white">
            <Gem size={48} className="mb-4" />
            <div className="text-sm font-black uppercase tracking-widest">Premium Sector Focus</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Implementation = () => (
  <section id="implementation" className="py-32 bg-blue-950 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-8">Process Excellence</div>
      <h2 className="text-5xl lg:text-8xl font-black mb-24 tracking-tighter leading-none">Hassle-free <br/>Implementation</h2>
      
      <div className="grid md:grid-cols-3 gap-16">
        <div className="relative p-12 bg-white/5 border border-white/10 rounded-[3.5rem] hover:bg-white/10 transition-all group text-left">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-10 shadow-xl group-hover:scale-110 transition-transform">1</div>
          <h4 className="text-3xl font-black mb-6 tracking-tight">Discover</h4>
          <p className="text-blue-100/60 leading-relaxed font-medium">Exploring and gathering the requirements as per your unique business process and pain points.</p>
        </div>
        
        <div className="relative p-12 bg-white/5 border border-white/10 rounded-[3.5rem] hover:bg-white/10 transition-all group text-left">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-10 shadow-xl group-hover:scale-110 transition-transform">2</div>
          <h4 className="text-3xl font-black mb-6 tracking-tight">Training</h4>
          <p className="text-blue-100/60 leading-relaxed font-medium">Train, test, and migrate. Trying different solutions options to support your business process nuances.</p>
        </div>
        
        <div className="relative p-12 bg-white/5 border border-white/10 rounded-[3.5rem] hover:bg-white/10 transition-all group text-left">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-10 shadow-xl group-hover:scale-110 transition-transform">3</div>
          <h4 className="text-3xl font-black mb-6 tracking-tight">Take Off</h4>
          <p className="text-blue-100/60 leading-relaxed font-medium">Validation of agreed solutions, finalizing requirements, and go-live launch with full support.</p>
        </div>
      </div>
      
      <div className="mt-24 p-10 bg-white/5 border border-white/10 rounded-[3rem] max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="p-4 bg-blue-500 rounded-full"><Clock size={32} /></div>
            <div className="text-left">
              <div className="text-2xl font-black">200+ Experts</div>
              <div className="text-blue-100/40 text-sm font-bold uppercase tracking-widest">Implementation Support</div>
            </div>
          </div>
          <a href={ERP_URL} target="_self" className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all">Start Your Discovery</a>
        </div>
      </div>
    </div>
  </section>
);

const SecurityAndGST = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-50 rounded-[5rem] p-16 lg:p-28 grid lg:grid-cols-2 gap-24 items-center border border-slate-100">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-10">Smart Taxation</div>
          <h2 className="text-5xl font-black text-slate-950 mb-10 tracking-tighter leading-tight">GST Compliance Ready.</h2>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
            Many businesses struggle with GST changes. QITPES enables the owner to understand new tax changes and ease out transactions automatically.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center"><CheckCircle2 size={20} /></div>
              <span className="text-lg font-black text-slate-800">Automated GST Computation</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center"><CheckCircle2 size={20} /></div>
              <span className="text-lg font-black text-slate-800">GST Enabled Accounts & Finance</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="p-12 bg-white shadow-2xl rounded-[4rem] text-center border border-slate-100">
            <div className="w-24 h-24 bg-blue-600 text-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-200">
              <ShieldCheck size={48} />
            </div>
            <h4 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Trusted Team</h4>
            <p className="text-slate-500 font-medium">Specialized experts having 16+ years of experience in ERP implementation.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "Is QITPES ERP SYSTEM fully cloud-based?", a: "Yes, our platform is natively designed for the cloud, providing high availability and global access via any secure modern web browser." },
    { q: "Who can access the system?", a: "Access is strictly governed by a role-based permission engine. Only authorized users like Owners, Directors, and Accountants can interact with their assigned modules." },
    { q: "Is it secure for sensitive financial assets?", a: "Absolutely. We utilize state-of-the-art AES-256 encryption, multi-factor authentication, and strict audit trails to ensure absolute fiscal data integrity." },
    { q: "Can we scale as our business grow?", a: "Yes, our architecture is modular and scalable. You can add new project sites, departments, and workforce counts seamlessly as you expand." }
  ];

  return (
    <section id="faq" className="py-32 bg-slate-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-slate-950 text-center mb-24 tracking-tighter">Find Answers</h2>
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
          <h2 className="text-6xl lg:text-8xl font-black mb-12 tracking-tighter leading-[0.95]">Ready To <br/><span className="text-blue-200">Start Building?</span></h2>
          <p className="text-2xl text-blue-100 mb-16 leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Unified control. Real-time clarity. Secure growth. Experience the next generation of infrastructure ERP today.
          </p>
          <a 
            href={ERP_URL} 
            target="_self"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-16 py-8 rounded-3xl text-3xl font-black hover:bg-blue-50 transition-all shadow-2xl shadow-blue-950/20 transform hover:scale-105 active:scale-95 group"
          >
            Launch QITPES ERP
            <ChevronRight className="ml-4 group-hover:translate-x-2 transition-transform" />
          </a>
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
            Next-gen construction and infrastructure management for organizations that demand precision.
          </p>
        </div>
        <div>
          <h5 className="font-black text-slate-950 mb-10 uppercase tracking-[0.3em] text-xs">Navigation</h5>
          <ul className="space-y-6 text-slate-500 font-bold text-lg">
            <li><a href="#modules" className="hover:text-blue-600 transition-colors">Modules</a></li>
            <li><a href="#industries" className="hover:text-blue-600 transition-colors">Industries</a></li>
            <li><a href="#implementation" className="hover:text-blue-600 transition-colors">Implementation</a></li>
            <li><a href={ERP_URL} target="_self" className="hover:text-blue-600 transition-colors">Launch System</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-black text-slate-950 mb-10 uppercase tracking-[0.3em] text-xs">Resources</h5>
          <ul className="space-y-6 text-slate-500 font-bold text-lg">
            <li><a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition-colors">Contact Maker</a></li>
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
      <StatsStrip />
      <Solutions />
      <Industries />
      <Implementation />
      <SecurityAndGST />
      <FAQ />
      <CTA />
      <Footer />
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
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