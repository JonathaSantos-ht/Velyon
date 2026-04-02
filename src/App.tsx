import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  Layout, 
  MessageCircle, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  Instagram, 
  Clock, 
  Target, 
  Rocket,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Star,
  ShoppingBag,
  Settings,
  Code
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5532998473363";
const INSTAGRAM_LINK = "https://www.instagram.com/velyon.dev/";
const LOGO_URL = "https://i.im.ge/2026/04/02/epwfhm.Sem-nome-1800-x-1800-px.png?v=1";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-12 md:py-20 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = "", 
  href = "" 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp', 
  className?: string, 
  href?: string 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-center";
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark",
    secondary: "bg-accent text-white shadow-lg shadow-accent/30 hover:bg-emerald-600",
    outline: "border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary",
    whatsapp: "bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:bg-[#20ba5a]"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      target={href.startsWith('http') ? "_blank" : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const plans = [
    {
      name: "Start",
      price: "249,90",
      tag: "🟢 Entrada",
      desc: "Atraia seus primeiros clientes",
      features: ["1 página (Landing Page)", "Design responsivo", "Botão WhatsApp", "Entrega em 5 dias"],
      color: "bg-emerald-100 text-emerald-700",
      borderColor: "border-emerald-200",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      name: "Basic",
      price: "349,90",
      tag: "🔵 Intermediário",
      desc: "Para quem quer um pouco mais",
      features: ["Até 2 páginas", "Layout mais trabalhado", "Responsivo", "Botão WhatsApp", "Ajustes básicos"],
      color: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-200",
      icon: <Layout className="w-5 h-5" />
    },
    {
      name: "Pro",
      price: "499,90",
      tag: "🟣 Recomendado",
      desc: "Onde o seu negócio decola",
      features: ["Até 3 páginas", "Design completo", "SEO básico", "Integração WhatsApp", "Entrega em 7 dias"],
      color: "bg-purple-100 text-purple-700",
      borderColor: "border-primary",
      recommended: true,
      icon: <Star className="w-5 h-5" />
    },
    {
      name: "Business",
      price: "699,90",
      tag: "🟠 Profissional",
      desc: "Para empresas sérias",
      features: ["Até 4 páginas", "Design premium", "SEO melhorado", "Performance otimizada", "Ajustes personalizados"],
      color: "bg-orange-100 text-orange-700",
      borderColor: "border-orange-200",
      icon: <Target className="w-5 h-5" />
    },
    {
      name: "Premium",
      price: "899,90",
      tag: "🔴 Topo de Linha",
      desc: "A solução definitiva",
      features: ["Até 5 páginas", "Design avançado", "SEO + performance", "Suporte prioritário", "Entrega em 10 dias"],
      color: "bg-red-100 text-red-700",
      borderColor: "border-red-200",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      name: "E-commerce Start",
      price: "1.299,90",
      tag: "🟣 Loja Online",
      desc: "Comece a vender produtos",
      features: ["Loja virtual básica", "Até 10 produtos", "Integração WhatsApp", "Layout moderno", "Pagamento simples"],
      color: "bg-purple-100 text-purple-700",
      borderColor: "border-purple-200",
      icon: <ShoppingBag className="w-5 h-5" />
    },
    {
      name: "E-commerce Pro",
      price: "1.999,90",
      tag: "🔵 Melhor Custo-Benefício",
      desc: "Venda muito mais",
      features: ["Até 30 produtos", "Pagamento (Pix, cartão)", "Carrinho de compras", "Página de produto profissional", "Painel de gestão"],
      color: "bg-blue-100 text-blue-700",
      borderColor: "border-primary",
      recommended: true,
      icon: <Star className="w-5 h-5" />
    },
    {
      name: "E-commerce Premium",
      price: "2.999,90",
      tag: "🟠 Negócios Sérios",
      desc: "Estrutura completa",
      features: ["Produtos ilimitados", "Design personalizado", "Integração completa", "Cupons de desconto", "Área de cliente"],
      color: "bg-orange-100 text-orange-700",
      borderColor: "border-orange-200",
      icon: <ShoppingBag className="w-5 h-5" />
    },
    {
      name: "Business Digital",
      price: "3.999,90",
      tag: "🔴 Empresas Maiores",
      desc: "Site + Sistema",
      features: ["Sistema personalizado", "Integrações específicas", "Área administrativa", "Automações básicas", "Estrutura escalável"],
      color: "bg-red-100 text-red-700",
      borderColor: "border-red-200",
      icon: <Settings className="w-5 h-5" />
    },
    {
      name: "Sistema Sob Medida",
      price: "5.000",
      tag: "🟤 Alto Ticket",
      desc: "Projetos grandes",
      features: ["100% personalizado", "Dashboard ADM", "Login de usuários", "Funcionalidades sob medida", "Integrações avançadas"],
      color: "bg-stone-100 text-stone-700",
      borderColor: "border-stone-200",
      isStartingAt: true,
      icon: <Code className="w-5 h-5" />
    }
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Planos', href: '#planos' },
    { name: 'Como funciona', href: '#processo' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header/Nav */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-md border-b border-white/10 py-0.5 md:py-1 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src={LOGO_URL} 
              alt="Velyon Logo" 
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-200">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
            ))}
            <Button href={WHATSAPP_LINK} variant="whatsapp" className="px-6 py-2 text-sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-bold text-slate-200 py-2 border-b border-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button href={WHATSAPP_LINK} variant="whatsapp" className="w-full mt-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <Section className="pt-40 md:pt-48 pb-20 md:pb-32 bg-linear-to-b from-slate-50 to-white overflow-hidden relative">
        <div className="absolute top-20 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <Rocket className="w-4 h-4" />
              <span>Sua presença digital começa aqui</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Criação de Sites <span className="gradient-text">Profissionais</span> para seu Negócio Crescer
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Tenha um site moderno, rápido e pronto para gerar clientes todos os dias. Aumente sua credibilidade e venda mais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href={WHATSAPP_LINK} variant="primary">
                Solicitar site agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href={WHATSAPP_LINK} variant="whatsapp">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6">
              {[
                { icon: <Clock className="w-5 h-5" />, text: "Entrega rápida" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Design profissional" },
                { icon: <Smartphone className="w-5 h-5" />, text: "Funciona no celular" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500 font-medium text-sm md:text-base">
                  <span className="text-accent">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white group">
              <img 
                src="https://i.im.ge/2026/04/02/epjbcY.FireShot-Capture-014-Fotografo-Profissional-Link-na-Bio-lensmasterpremium-netlify-app.png" 
                alt="Exemplo de Site Profissional" 
                className="w-full h-auto group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-bold text-lg">Design Moderno & Responsivo</p>
              </div>
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 glass p-4 md:p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <p className="text-primary font-black text-xl md:text-2xl mb-1">A partir de</p>
              <p className="text-slate-900 font-extrabold text-2xl md:text-4xl">R$ 249,90</p>
            </div>
            <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-accent p-3 md:p-4 rounded-2xl shadow-xl z-20 text-white font-bold hidden sm:block">
              <Zap className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" />
              100% Otimizado
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Você está perdendo clientes por não ter um site?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Hoje, quem não está na internet praticamente não existe. Um site profissional aumenta sua credibilidade e faz seu negócio vender mais. Não deixe seu concorrente levar seus clientes.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solucao" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
              <img 
                src="https://i.im.ge/2026/04/02/epjEK8.3334882-desktop-source-code-and-wallpaper-by-coding-and-programming-gratis-foto.jpeg" 
                alt="Desenvolvimento de Código Profissional" 
                className="w-full h-auto group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nós criamos seu site do zero</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8">
              Cuidamos de tudo: design, estrutura e publicação. Você só precisa focar no seu negócio enquanto nós construímos sua vitrine digital de alta performance.
            </p>
            <div className="space-y-4">
              {[
                "Design exclusivo e personalizado",
                "Foco total em conversão de clientes",
                "Suporte técnico especializado",
                "Hospedagem e domínio configurados"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="font-medium text-slate-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="beneficios" className="bg-slate-50">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que você recebe</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">Tudo o que seu negócio precisa para ter sucesso online, sem complicações.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Layout className="w-8 h-8" />, title: "Site profissional e moderno", desc: "Design alinhado com as tendências atuais do mercado." },
            { icon: <Smartphone className="w-8 h-8" />, title: "100% responsivo", desc: "Seu site perfeito em celulares, tablets e computadores." },
            { icon: <Zap className="w-8 h-8" />, title: "Carregamento rápido", desc: "Velocidade extrema para não perder nenhum visitante." },
            { icon: <Target className="w-8 h-8" />, title: "Estrutura para vendas", desc: "Focado em transformar visitantes em clientes reais." },
            { icon: <MessageCircle className="w-8 h-8" />, title: "Botão para WhatsApp", desc: "Facilite o contato direto dos seus clientes com você." },
            { icon: <Search className="w-8 h-8" />, title: "SEO básico incluído", desc: "Apareça nas buscas do Google de forma estratégica." }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 text-sm md:text-base">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Social Proof / Why Us */}
      <Section className="bg-white">
        <div className="bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Por que escolher a Velyon?</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Rocket />, title: "Atendimento rápido", desc: "Não gostamos de esperar, e você também não." },
                  { icon: <Target />, title: "Foco em resultado", desc: "Sites feitos para vender e crescer seu negócio." },
                  { icon: <MessageCircle />, title: "Suporte direto", desc: "Fale conosco a qualquer hora pelo WhatsApp." },
                  { icon: <ShieldCheck />, title: "Padrão Profissional", desc: "Qualidade de agência com preço justo." }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="mb-4 text-accent">{item.icon}</div>
                    <h4 className="text-lg md:text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-6 md:p-8 rounded-3xl text-slate-900">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-200 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/seed/person1/100/100" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg">Garantia de Satisfação</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Zap key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 italic mb-6 text-sm md:text-base">
                "Nosso compromisso é com o seu sucesso. Ajustamos seu site até você ficar 100% satisfeito com o resultado final."
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm md:text-base">
                <ShieldCheck className="w-5 h-5" />
                Sua segurança em primeiro lugar
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Plans Section */}
      <Section id="planos" className="bg-slate-50 overflow-hidden relative">
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />

        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Escolha o plano <span className="gradient-text">ideal</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-lg font-medium">
              Investimento transparente para o tamanho do seu sonho. Arraste para o lado para ver mais.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Carousel Controls */}
          <div className="absolute top-1/2 -left-6 -right-6 -translate-y-1/2 flex justify-between pointer-events-none z-20 hidden lg:flex">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className={`w-14 h-14 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary transition-all pointer-events-auto ${scrollProgress <= 5 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              disabled={scrollProgress <= 5}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className={`w-14 h-14 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary transition-all pointer-events-auto ${scrollProgress >= 95 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              disabled={scrollProgress >= 95}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>
          </div>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 px-4 pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`flex-shrink-0 w-[300px] md:w-[380px] snap-center bg-white p-8 md:p-10 rounded-[3rem] border-2 ${
                  plan.recommended 
                    ? 'border-primary shadow-2xl shadow-primary/20 z-10' 
                    : plan.borderColor + ' shadow-lg shadow-slate-200/50'
                } flex flex-col relative transition-all duration-500 group`}
              >
                {plan.recommended && (
                  <>
                    <div className="absolute -inset-1 bg-primary/20 rounded-[3.1rem] blur-xl -z-10 animate-pulse" />
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-primary/40">
                      <Star className="w-4 h-4 fill-current animate-spin-slow" />
                      Mais Vendido
                    </div>
                  </>
                )}
                
                <div className="mb-8">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${plan.color} font-black text-xs mb-6 uppercase tracking-wider`}>
                    {plan.icon}
                    {plan.tag}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{plan.name}</h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-slate-400 text-sm font-bold">{plan.isStartingAt ? 'A partir de' : 'Apenas'}</span>
                    <div className="flex items-start">
                      <span className="text-lg font-bold text-slate-900 mt-1">R$</span>
                      <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm md:text-base mt-4 font-medium leading-relaxed">{plan.desc}</p>
                </div>

                <div className="h-px w-full bg-slate-100 mb-8" />

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm md:text-base group/item">
                      <div className={`mt-1 p-0.5 rounded-full ${plan.recommended ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'} transition-colors group-hover/item:bg-primary group-hover/item:text-white`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  href={WHATSAPP_LINK} 
                  variant={plan.recommended ? 'primary' : 'outline'} 
                  className={`w-full py-5 text-base font-black uppercase tracking-widest transition-all duration-300 ${
                    plan.recommended ? 'hover:shadow-xl hover:shadow-primary/30' : ''
                  }`}
                >
                  {plan.isStartingAt ? 'Solicitar Orçamento' : 'Garantir meu site'}
                </Button>
              </motion.div>
            ))}
          </div>
          
          {/* Custom Progress Bar */}
          <div className="max-w-md mx-auto mt-4 px-4">
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                animate={{ width: `${scrollProgress}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>Início</span>
              <span>Arraste para explorar</span>
              <span>Fim</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="processo" className="bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4 fill-current" />
              Fluxo de Trabalho Velyon
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
              Como seu site <span className="gradient-text">ganha vida</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Um processo transparente e ágil, desenhado para transformar sua visão em uma máquina de vendas online em tempo recorde.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Dynamic Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-1 bg-slate-100 -z-10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-linear-to-r from-primary via-accent to-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {[
            { 
              step: "01", 
              title: "Conexão Inicial", 
              desc: "Tudo começa com um 'Oi'. Analisamos seu nicho e mostramos como podemos destacar sua marca no digital.", 
              detail: "Atendimento humano e rápido via WhatsApp.",
              icon: <MessageCircle className="w-10 h-10" />,
              textColor: "text-blue-500",
              glowColor: "bg-blue-500"
            },
            { 
              step: "02", 
              title: "DNA do Projeto", 
              desc: "Mergulhamos no seu negócio. Coletamos informações cruciais para criar uma estrutura que converte visitantes em clientes.", 
              detail: "Briefing focado em resultados reais.",
              icon: <Target className="w-10 h-10" />,
              textColor: "text-purple-600",
              glowColor: "bg-purple-600"
            },
            { 
              step: "03", 
              title: "Mão na Massa", 
              desc: "Nossos devs e designers entram em ação. Criamos um site leve, rápido e com visual de cair o queixo.", 
              detail: "Design exclusivo e código otimizado.",
              icon: <Layout className="w-10 h-10" />,
              textColor: "text-emerald-500",
              glowColor: "bg-emerald-500"
            },
            { 
              step: "04", 
              title: "Decolagem", 
              desc: "Hora de brilhar! Seu site vai ao ar com SEO configurado e pronto para ser encontrado pelo seu público.", 
              detail: "Suporte pós-lançamento garantido.",
              icon: <Rocket className="w-10 h-10" />,
              textColor: "text-orange-500",
              glowColor: "bg-orange-500"
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group"
            >
              {/* Step Card */}
              <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                
                {/* Icon Container with Glow */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 ${item.glowColor} opacity-10 blur-2xl rounded-full group-hover:opacity-30 transition-opacity duration-500`} />
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className={`w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center relative z-10 border border-slate-50 group-hover:border-primary/20 transition-all duration-500`}
                  >
                    <div className={`${item.textColor} transition-colors duration-500`}>
                      {item.icon}
                    </div>
                  </motion.div>
                  
                  {/* Step Number Floating */}
                  <div className="absolute -right-2 -bottom-2 w-10 h-10 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-sm shadow-xl border-2 border-white z-20">
                    {item.step}
                  </div>
                </div>

                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium mb-6 flex-grow">
                  {item.desc}
                </p>
                
                {/* Detail Badge */}
                <div className="w-full pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full">
                    {item.detail}
                  </span>
                </div>
              </div>

              {/* Mobile Arrow */}
              {i < 3 && (
                <div className="md:hidden flex justify-center my-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-8 h-8 rotate-90 text-slate-200" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { icon: <Clock />, text: "Entrega em tempo recorde" },
            { icon: <ShieldCheck />, text: "Contrato de transparência" },
            { icon: <MessageCircle />, text: "Suporte 1-on-1 via WhatsApp" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-400 font-bold text-sm uppercase tracking-widest">
              <div className="text-primary">{badge.icon}</div>
              {badge.text}
            </div>
          ))}
        </motion.div>
      </Section>

      {/* Extra Info Banner */}
      <div className="bg-accent py-4 md:py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-8 md:gap-12 text-white font-black text-lg md:text-2xl uppercase italic">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current" />
              <span>Entrega em poucos dias</span>
              <span className="text-white/30">•</span>
              <span>Atendimento imediato</span>
              <span className="text-white/30">•</span>
              <span>Condições facilitadas</span>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <Section className="bg-slate-900 text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6">Pronto para ter seu site profissional?</h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10">
            Fale comigo agora e receba um orçamento rápido. Não perca mais tempo e comece a vender online hoje mesmo.
          </p>
          <Button href={WHATSAPP_LINK} variant="primary" className="px-10 md:px-12 py-5 md:py-6 text-lg md:text-xl">
            Quero meu site agora
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
            <a href={INSTAGRAM_LINK} target="_blank" className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
              <span>@velyon.dev</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-slate-400">
              <ShieldCheck className="w-6 h-6" />
              <span>Satisfação Garantida</span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Top Footer / Newsletter-like CTA */}
          <div className="bg-slate-800/40 border border-white/5 rounded-[3rem] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                Vamos transformar sua <span className="text-primary">presença digital?</span>
              </h3>
              <p className="text-slate-400 font-medium">Receba uma consultoria gratuita para o seu projeto.</p>
            </div>
            <Button href={WHATSAPP_LINK} variant="primary" className="w-full md:w-auto px-10 py-4 text-base shadow-2xl shadow-primary/20">
              Falar com Especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            {/* Brand Column */}
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col items-center sm:items-start space-y-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={LOGO_URL} 
                  alt="Velyon Logo" 
                  className="w-36 md:w-44 h-auto object-contain brightness-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  referrerPolicy="no-referrer"
                />
                <p className="text-slate-400 text-center sm:text-left leading-relaxed text-sm md:text-base font-medium">
                  Especialistas em criar experiências digitais que convertem. Unimos design de elite com tecnologia de ponta para o seu sucesso.
                </p>
              </div>
              <div className="flex justify-center sm:justify-start gap-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, link: INSTAGRAM_LINK, color: "hover:bg-pink-500" },
                  { icon: <MessageCircle className="w-5 h-5" />, link: WHATSAPP_LINK, color: "hover:bg-[#25D366]" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.link} 
                    target="_blank" 
                    className={`w-12 h-12 rounded-2xl bg-slate-800/80 border border-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" />
                Navegação
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-primary transition-all flex items-center gap-2 group font-medium">
                      <div className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#solucao" className="text-slate-400 hover:text-primary transition-all flex items-center gap-2 group font-medium">
                    <div className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                    Nossa Solução
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                Expertise
              </h4>
              <ul className="space-y-5">
                {[
                  { icon: <Layout className="w-4 h-4" />, text: "Landing Pages de Alta Conversão" },
                  { icon: <Smartphone className="w-4 h-4" />, text: "Sites 100% Responsivos" },
                  { icon: <Search className="w-4 h-4" />, text: "SEO & Google Ads" },
                  { icon: <Zap className="w-4 h-4" />, text: "Performance & Velocidade" }
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-400 group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium group-hover:text-slate-200 transition-colors">{service.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <div className="w-2 h-2 bg-white/40 rounded-full" />
                Contato Direto
              </h4>
              <div className="space-y-6 w-full">
                <motion.a 
                  whileHover={{ x: 5 }}
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  className="block p-4 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <span className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-1 block">WhatsApp Business</span>
                  <div className="text-white font-bold text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    (32) 99847-3363
                  </div>
                </motion.a>

                <motion.a 
                  whileHover={{ x: 5 }}
                  href={INSTAGRAM_LINK} 
                  target="_blank" 
                  className="block p-4 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-pink-500/30 transition-all group"
                >
                  <span className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-1 block">Instagram Oficial</span>
                  <div className="text-white font-bold text-lg flex items-center gap-2 group-hover:text-pink-500 transition-colors">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    @velyon.dev
                  </div>
                </motion.a>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-accent/5 border border-accent/10">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  <span className="text-accent text-[11px] font-black uppercase tracking-widest">Online Agora</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-slate-500 text-xs font-bold tracking-wide">
                © 2026 Velyon.dev - Todos os direitos reservados.
              </p>
              <p className="text-slate-600 text-[10px] font-medium">
                Desenvolvido com ❤️ por Velyon Digital Solutions
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href={WHATSAPP_LINK} 
        target="_blank" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 md:p-5 rounded-2xl shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black text-sm uppercase tracking-widest whitespace-nowrap">
          Falar no Whats
        </span>
      </motion.a>
    </div>
  );
}
