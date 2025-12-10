import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Bot, LayoutTemplate, Share2, 
  PieChart, Activity, Zap, CheckCircle, 
  MessageSquare, Calendar, ChevronRight, BarChart3, Users 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area 
} from 'recharts';

// --- Types ---
type NavItem = {
  label: string;
  href: string;
};

// --- Mock Data for Charts ---
const funnelData = [
  { name: 'Leads', value: 4000 },
  { name: 'Qualificados', value: 3000 },
  { name: 'Proposta', value: 2000 },
  { name: 'Negociação', value: 1500 },
  { name: 'Fechados', value: 1000 },
];

const activityData = [
  { name: 'Seg', leads: 40, vendas: 24 },
  { name: 'Ter', leads: 30, vendas: 13 },
  { name: 'Qua', leads: 20, vendas: 58 },
  { name: 'Qui', leads: 27, vendas: 39 },
  { name: 'Sex', leads: 18, vendas: 48 },
  { name: 'Sab', leads: 23, vendas: 38 },
  { name: 'Dom', leads: 34, vendas: 43 },
];

// --- Components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Soluções', href: '#features' },
    { label: 'Como Funciona', href: '#demo-chat' },
    { label: 'Resultados', href: '#dashboard' },
    { label: 'Planos', href: '#cta' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-purple to-brand-purpleDark flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-white">
            Avexor<span className="text-brand-purple">IA</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#cta"
            className="bg-brand-orange hover:bg-brand-orangeDark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transform hover:-translate-y-0.5"
          >
            Agendar Demonstração
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-gray-300 hover:text-white text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#cta"
            className="bg-brand-orange text-center text-white px-5 py-3 rounded-lg font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Agendar Demonstração
          </a>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-xs font-semibold text-brand-purple tracking-wide uppercase">Nova Tecnologia V3.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Sua empresa no <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-purple-400 to-white text-glow">
              piloto automático
            </span> <br />
            com Inteligência Artificial.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Agentes de IA que atendem 24/7 e CRM estruturado que transforma dados em receita. Tudo em uma única plataforma futurista.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="#cta"
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orangeDark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,165,0,0.4)] hover:shadow-[0_0_30px_rgba(255,165,0,0.6)] flex items-center justify-center gap-2 group"
            >
              Quero uma Demo Grátis
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#features"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center"
            >
              Conheça as Soluções
            </a>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="relative z-10 animate-float lg:block hidden">
            <div className="glass-panel rounded-2xl p-4 transform rotate-y-12 rotate-x-6 shadow-2xl border-t border-l border-white/20">
                {/* Simulated Header */}
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">dashboard_v1.tsx</div>
                </div>
                {/* Simulated Widgets */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/40 rounded-lg p-4 border border-white/5">
                        <div className="text-gray-400 text-xs mb-1">Receita Mensal</div>
                        <div className="text-2xl font-bold text-white">R$ 142.302</div>
                        <div className="text-green-500 text-xs mt-1">+12.5% vs mês anterior</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 border border-white/5">
                        <div className="text-gray-400 text-xs mb-1">Leads Ativos</div>
                        <div className="text-2xl font-bold text-white">1,204</div>
                        <div className="text-brand-purple text-xs mt-1">85% via WhatsApp</div>
                    </div>
                    <div className="col-span-2 bg-black/40 rounded-lg p-4 h-32 flex items-end justify-between gap-1 border border-white/5">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
                            <div key={i} className="w-full bg-gradient-to-t from-brand-purple/20 to-brand-purple rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 glass-card p-4 rounded-xl flex items-center gap-3 animate-pulse">
                <div className="bg-green-500/20 p-2 rounded-full">
                    <Bot className="text-green-500 w-6 h-6" />
                </div>
                <div>
                    <div className="text-xs text-gray-400">Status do Agente</div>
                    <div className="text-sm font-bold text-white">Qualificando Lead...</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  const features = [
    { icon: <Bot size={32} />, title: "Agentes de IA 24/7", desc: "Atendimento ininterrupto que nunca dorme, respondendo instantaneamente em qualquer canal." },
    { icon: <LayoutTemplate size={32} />, title: "CRM Visual", desc: "Pipeline Kanban intuitivo para gestão total do funil de vendas." },
    { icon: <Share2 size={32} />, title: "Omnichannel", desc: "Integração nativa com WhatsApp, Instagram Direct, Facebook e Site." },
    { icon: <PieChart size={32} />, title: "BI Avançado", desc: "Dashboards em tempo real para tomada de decisão baseada em dados." },
    { icon: <Zap size={32} />, title: "Automação", desc: "Workflows automáticos que eliminam tarefas repetitivas da equipe." },
  ];

  return (
    <section id="features" className="py-20 bg-neutral-950/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feat, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DemoChat: React.FC = () => {
  return (
    <section id="demo-chat" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-2 block">Atendimento Inteligente</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Um agente que <span className="text-brand-purple">entende</span>, qualifica e converte.
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Imagine um lead chegando às 23h de um domingo. Nossa IA responde instantaneamente, qualifica o interesse, tira dúvidas técnicas e agenda uma reunião direto no calendário do seu vendedor.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Qualificação automática de leads frios e quentes.",
              "Agendamento direto na Google Agenda/Outlook.",
              "Atendimento em 30+ idiomas.",
              "Personalidade ajustável ao tom da sua marca."
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="text-brand-purple w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <a href="#cta" className="inline-flex items-center justify-center px-8 py-4 bg-brand-purple hover:bg-brand-purpleDark text-white font-bold rounded-lg transition-colors">
            Ativar meu Agente IA
          </a>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-[320px] h-[650px] bg-black border-8 border-neutral-800 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl z-20"></div>
            
            {/* Screen Content */}
            <div className="bg-neutral-900 w-full h-full pt-12 pb-4 px-4 flex flex-col relative">
                {/* Header Chat */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/5 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center">
                        <Bot className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm">Agente Avexor</div>
                        <div className="text-green-500 text-xs">Online agora</div>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar">
                    {/* Customer */}
                    <div className="flex justify-end">
                        <div className="bg-brand-orange/20 text-brand-orange border border-brand-orange/20 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                            Olá, gostaria de saber o preço da implementação de CRM.
                        </div>
                    </div>
                    <div className="text-[10px] text-gray-600 text-right mt-1">23:04</div>

                    {/* Bot */}
                    <div className="flex justify-start">
                         <div className="bg-neutral-800 text-gray-200 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm">
                            Olá! Sou a IA da Avexor. 👋 Para te passar um orçamento preciso, preciso entender o tamanho da sua equipe. São quantos vendedores?
                        </div>
                    </div>

                    {/* Customer */}
                    <div className="flex justify-end">
                        <div className="bg-brand-orange/20 text-brand-orange border border-brand-orange/20 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                            Atualmente temos 15 vendedores.
                        </div>
                    </div>
                    
                    {/* Bot */}
                    <div className="flex justify-start">
                         <div className="bg-neutral-800 text-gray-200 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm">
                            Perfeito! Para 15 usuários, temos o plano Scale. Posso agendar uma demo rápida de 15min para mostrar como funciona?
                        </div>
                    </div>
                    
                    {/* Button Sim */}
                     <div className="flex justify-start">
                         <button className="bg-brand-purple text-white px-4 py-2 rounded-lg text-sm w-full hover:bg-brand-purpleDark transition-colors">
                            Sim, agendar demonstração
                        </button>
                    </div>

                </div>
                
                {/* Input Area */}
                <div className="mt-4 pt-3 border-t border-white/5 flex gap-2">
                    <div className="h-10 bg-neutral-800 rounded-full flex-1"></div>
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                         <MessageSquare size={16} className="text-white" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DemoKanban: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-purple font-bold tracking-wider text-sm uppercase mb-2 block">Gestão Visual Completa</span>
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Seu pipeline organizado em uma <span className="text-brand-orange">única tela</span>.
          </h2>
          <p className="text-gray-400">
            Centralize leads de todos os canais em um pipeline Kanban. Acompanhe cada etapa em tempo real.
          </p>
        </div>

        {/* Kanban Board Mockup */}
        <div className="overflow-x-auto pb-8">
            <div className="min-w-[1000px] grid grid-cols-4 gap-6">
                {/* Column 1 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 h-[500px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-300 font-bold">Novos Leads</span>
                        <span className="bg-white/10 text-xs px-2 py-1 rounded-full text-white">12</span>
                    </div>
                    <div className="space-y-3">
                        <div className="glass-card p-3 rounded-lg border-l-4 border-l-blue-500 cursor-pointer">
                            <div className="text-sm font-bold text-white mb-1">Construtora Elite</div>
                            <div className="text-xs text-gray-400 mb-2">Interesse: Plano Enterprise</div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Linkedin</span>
                                <span className="text-xs text-gray-500">2h atrás</span>
                            </div>
                        </div>
                        <div className="glass-card p-3 rounded-lg border-l-4 border-l-green-500 cursor-pointer">
                            <div className="text-sm font-bold text-white mb-1">Tech Solutions</div>
                            <div className="text-xs text-gray-400 mb-2">Interesse: Chatbot</div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">WhatsApp</span>
                                <span className="text-xs text-gray-500">5h atrás</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 h-[500px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-300 font-bold">Qualificados IA</span>
                        <span className="bg-brand-purple/20 text-xs px-2 py-1 rounded-full text-brand-purple">5</span>
                    </div>
                    <div className="space-y-3">
                        <div className="glass-card p-3 rounded-lg border-l-4 border-l-brand-purple cursor-pointer shadow-[0_0_15px_rgba(138,43,226,0.15)]">
                            <div className="text-sm font-bold text-white mb-1">Grupo Horizon</div>
                            <div className="text-xs text-gray-400 mb-2">Orçamento: R$ 50k+</div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs bg-brand-purple/20 text-brand-purple px-2 py-0.5 rounded flex items-center gap-1"><Bot size={10} /> Auto</span>
                                <span className="text-xs text-gray-500">Ontem</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 h-[500px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-300 font-bold">Proposta</span>
                        <span className="bg-white/10 text-xs px-2 py-1 rounded-full text-white">3</span>
                    </div>
                    <div className="space-y-3">
                         <div className="glass-card p-3 rounded-lg border-l-4 border-l-yellow-500 cursor-pointer opacity-80">
                            <div className="text-sm font-bold text-white mb-1">Varejo Express</div>
                            <div className="text-xs text-gray-400 mb-2">Valor: R$ 12.000</div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">Follow-up</span>
                                <span className="text-xs text-gray-500">3d atrás</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 h-[500px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-300 font-bold">Fechado</span>
                        <span className="bg-brand-orange/20 text-xs px-2 py-1 rounded-full text-brand-orange">8</span>
                    </div>
                     <div className="space-y-3">
                        <div className="glass-card p-3 rounded-lg border-l-4 border-l-brand-orange cursor-pointer">
                            <div className="text-sm font-bold text-white mb-1">Logística Brasil</div>
                            <div className="text-xs text-gray-400 mb-2">Contrato Assinado</div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-brand-orange font-bold">R$ 25.000</span>
                                <CheckCircle size={14} className="text-brand-orange"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Timeline: React.FC = () => {
    const events = [
        { title: "Lead Entrou", source: "Site", time: "09:14 AM", color: "bg-blue-500" },
        { title: "IA Respondeu", source: "WhatsApp", time: "09:14 AM", color: "bg-brand-purple" },
        { title: "Qualificado", source: "Score: 95/100", time: "09:16 AM", color: "bg-green-500" },
        { title: "Reunião Agendada", source: "Google Calendar", time: "09:20 AM", color: "bg-brand-orange" },
    ];

    return (
        <section className="py-24 bg-black relative">
             <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="text-brand-purple font-bold tracking-wider text-sm uppercase mb-2 block">Timeline 360°</span>
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Histórico completo, <br/>a um clique.
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Chega de informações perdidas. Crie uma linha do tempo unificada para cada cliente, desde o "Oi" até o contrato assinado.
                    </p>
                </div>

                <div className="relative pl-8 border-l border-white/10 ml-6 lg:ml-0">
                    {events.map((event, index) => (
                        <div key={index} className="mb-8 relative group">
                            {/* Dot */}
                            <div className={`absolute -left-[38px] w-5 h-5 rounded-full ${event.color} border-4 border-black group-hover:scale-125 transition-transform`}></div>
                            
                            {/* Card */}
                            <div className="glass-card p-4 rounded-xl inline-block min-w-[250px]">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-bold text-white">{event.title}</h4>
                                    <span className="text-xs text-gray-500">{event.time}</span>
                                </div>
                                <span className="text-sm text-gray-400">{event.source}</span>
                            </div>
                        </div>
                    ))}
                    
                    {/* Floating Connection Line Animation */}
                    <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-gradient-to-b from-brand-purple to-transparent opacity-50"></div>
                </div>
             </div>
        </section>
    );
};

const Dashboard: React.FC = () => {
    return (
        <section id="dashboard" className="py-24 bg-neutral-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-2 block">Business Intelligence</span>
                    <h2 className="text-4xl font-display font-bold text-white mb-4">Relatórios que decidem o jogo</h2>
                    <p className="text-gray-400">Monitore ROI, CAC e LTV em tempo real.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Chart */}
                    <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <Activity className="text-brand-purple" /> Performance de Vendas (Últimos 7 dias)
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={activityData}>
                                    <defs>
                                        <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8A2BE2" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                    <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} />
                                    <YAxis stroke="#666" axisLine={false} tickLine={false} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area type="monotone" dataKey="vendas" stroke="#8A2BE2" strokeWidth={3} fillOpacity={1} fill="url(#colorVendas)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Funnel Chart */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <BarChart3 className="text-brand-orange" /> Funil de Conversão
                        </h3>
                        <div className="space-y-4">
                            {funnelData.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-300">{item.name}</span>
                                        <span className="text-white font-bold">{item.value}</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div 
                                            className="bg-brand-orange h-2 rounded-full" 
                                            style={{ width: `${(item.value / 4000) * 100}%`, opacity: 1 - (index * 0.15) }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CtaForm: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-black relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                                Pronto para <br/>
                                <span className="text-brand-orange">automatizar?</span>
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Junte-se a mais de 500 empresas que transformaram seu atendimento com a Avexor IA.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Agentes de IA Personalizados",
                                "CRM Kanban Visual",
                                "Dashboard de BI em Tempo Real",
                                "Suporte Dedicado",
                                "Setup Inicial Gratuito"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-brand-orange/20 p-1 rounded-full">
                                        <CheckCircle className="text-brand-orange w-5 h-5" />
                                    </div>
                                    <span className="text-gray-200 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-6">Agende uma demonstração</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Nome Completo</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">E-mail Corporativo</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                                    placeholder="voce@empresa.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">WhatsApp</label>
                                <input 
                                    type="tel" 
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>
                            <button className="w-full bg-gradient-to-r from-brand-orange to-brand-orangeDark hover:from-orange-500 hover:to-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all transform hover:-translate-y-1 mt-4">
                                QUERO MINHA DEMONSTRAÇÃO
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-4">
                                Seus dados estão protegidos. Não enviamos spam.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-purple to-brand-purpleDark flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-display font-bold text-white">
            Avexor<span className="text-brand-purple">IA</span>
          </span>
        </div>
        
        <div className="text-gray-500 text-sm">
          © 2025 Avexor IA. Todos os direitos reservados.
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidade</a>
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="bg-brand-bg min-h-screen text-white selection:bg-brand-purple selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <DemoChat />
        <DemoKanban />
        <Timeline />
        <Dashboard />
        <CtaForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;