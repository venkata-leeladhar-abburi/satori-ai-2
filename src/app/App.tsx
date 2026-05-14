import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Zap, Shield, GitBranch, Sparkles, Building2, CheckCircle2, ChevronDown, TrendingUp, FileText, Search, BarChart3, MessageSquare, FileCheck, Package, ShieldCheck, Clock, Lock, Globe, Plug, Rocket, Users, CheckSquare, BarChart, Crown, Check, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import DashboardPreview from './components/DashboardPreview';



const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-up, .reveal-scale').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FAF7F4] font-satoshi text-[#1A120B] selection:bg-[#F97316]/20">
      
      {/* =========================================
          HERO SECTION (Exact Layout Match)
      ========================================= */}
      <div className="p-3 sm:p-4">
        <div className="relative w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] overflow-hidden bg-[#d9d9d9] rounded-2xl sm:rounded-3xl flex flex-col shadow-sm">
          
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disableRemotePlayback
            webkit-playsinline="true"
            x5-playsinline="true"
            poster="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=40"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10" />

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col flex-1 h-full min-h-0">
            <div className="hero-reveal gpu">
              <Navbar />
            </div>

            {/* Hero Content */}
            <div className="flex flex-col items-center px-4 pt-10 sm:pt-16 pb-8 sm:pb-12 text-center flex-shrink-0">
              {/* Badge */}
              <div className="hero-reveal stagger-1 gpu inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#EDE7E2] rounded-full px-4 py-1.5 shadow-sm text-[13px] font-medium text-[#1A120B]">
                <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse" />
                AI Procurement Intelligence
              </div>

              {/* Headline */}
              <h1 
                style={{ 
                  fontSize: 'clamp(36px, 8vw, 76px)', 
                  lineHeight: 1.05, 
                  fontWeight: 600, 
                  letterSpacing: '-0.03em' 
                }} 
                className="hero-reveal stagger-2 gpu mt-6 sm:mt-8 max-w-5xl text-[#1A120B]"
              >
                Autonomous <span className="font-instrument italic font-normal text-[#F97316]">Procurement</span> <br /> 
                for Modern Enterprises
              </h1>

              {/* Subtitle */}
              <p 
                style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}
                className="hero-reveal stagger-3 gpu mt-5 sm:mt-6 text-[#7A6E66] px-2 max-w-2xl font-medium leading-relaxed"
              >
                Satori AI automates procurement workflows, supplier intelligence, approvals, contract management, and spend optimization using enterprise-grade AI orchestration.
              </p>

              {/* CTA Buttons */}
              <div className="hero-reveal stagger-4 gpu mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4">
                <button className="inline-flex items-center gap-3 bg-[#1A120B] text-white rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 text-[15px] font-medium group hover:bg-[#F97316] transition-all duration-300 shadow-xl shadow-[#1A120B]/10 hover:shadow-[#F97316]/20 hover:-translate-y-0.5 active:scale-[0.97]">
                  Request Demo
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </div>
                </button>
                <button className="inline-flex items-center gap-2 bg-white text-[#1A120B] border border-[#EDE7E2] rounded-full px-6 py-3 text-[15px] font-medium hover:bg-[#FAF7F4] transition-colors active:scale-[0.97]">
                  Explore Platform
                </button>
              </div>
            </div>

            {/* Dashboard Tray - Pushed to bottom */}
            <div className="hero-reveal stagger-5 gpu mt-auto relative z-20">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 2 — TRUST BAR
      ========================================= */}
      <div className="py-24 border-b border-[#EDE7E2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="reveal text-[14px] font-semibold text-[#7A6E66] tracking-wider uppercase mb-10">
            Trusted by enterprise procurement leaders worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['SAP', 'AWS', 'Oracle', 'Microsoft', 'Workday', 'Dynamics 365'].map((logo, i) => (
              <div key={logo} className={`reveal stagger-${(i % 3) + 1} text-2xl font-bold font-instrument text-[#1A120B] tracking-tight`}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 3 — FEATURES
      ========================================= */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="reveal text-[#F97316] text-[13px] font-bold tracking-widest uppercase bg-[#F97316]/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Features
            </span>
            <h2 className="reveal stagger-1 text-4xl sm:text-5xl font-bold tracking-tight text-[#1A120B] mb-6">
              AI modules built for <span className="font-instrument italic font-normal text-[#F97316]">enterprise</span> procurement
            </h2>
            <p className="reveal stagger-2 text-[#7A6E66] text-lg">
              Everything procurement teams need — powered by intelligent orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Autonomous Procurement", desc: "Self-driving workflows from intake to PO creation." },
              { icon: Building2, title: "Supplier Intelligence", desc: "Real-time risk, ESG, and performance monitoring." },
              { icon: CheckCircle2, title: "Contract Automation", desc: "AI-generated terms and redlining in seconds." },
              { icon: TrendingUp, title: "Spend Optimization", desc: "Predictive analytics to identify savings opportunities." },
              { icon: Shield, title: "Risk Intelligence", desc: "Proactive mitigation of supply chain disruptions." },
              { icon: Sparkles, title: "AI Negotiation Engine", desc: "Automated supplier communication and bargaining." }
            ].map((feat, i) => (
              <div key={i} className={`reveal-scale stagger-${(i % 3) + 1} gpu group bg-[#FAF7F4] border border-[#EDE7E2] rounded-3xl p-8 hover:bg-white hover:shadow-[0_8px_40px_rgba(26,18,11,0.04)] hover:border-[#F97316]/30 transition-all duration-300 relative overflow-hidden interactive-card`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316]/5 rounded-full blur-3xl group-hover:bg-[#F97316]/10 transition-colors" />
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-[#EDE7E2] flex items-center justify-center mb-6 text-[#1A120B] group-hover:text-[#F97316] group-hover:-translate-y-1 transition-all">
                  <feat.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1A120B] mb-3">{feat.title}</h3>
                <p className="text-[#7A6E66] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 4 — PROCUREMENT PIPELINE
      ========================================= */}
      <div className="py-32 bg-[#FAF7F4] relative overflow-hidden font-satoshi">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
          <div className="reveal inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-[13px] font-medium text-[#F97316] mb-8 border border-[#F97316]/20">
            <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full" />
            AI-Powered Procurement
          </div>
          <h2 className="reveal stagger-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A120B] mb-6">
            End-to-end <span className="font-instrument italic font-normal text-[#F97316]">automation</span>
          </h2>
          <p className="reveal stagger-2 text-[#7A6E66] text-lg max-w-2xl mx-auto">
            Satori AI orchestrates every stage of the procurement lifecycle<br className="hidden sm:block" /> from request to execution with intelligent automation.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          {/* Line wrapping element */}
          <div className="absolute top-[80px] left-10 right-10 bottom-12 border-2 border-[#F97316]/20 rounded-[40px] border-t-0 hidden lg:block z-0" />
          <div className="absolute top-[80px] left-10 right-10 h-px border-t-2 border-dashed border-[#F97316]/30 hidden lg:block z-0" />

          {/* The Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {[
              { title: 'Intake', desc: 'Capture requests and requirements instantly.', icon: FileText },
              { title: 'Discovery', desc: 'Find the right suppliers using AI intelligence.', icon: Search },
              { title: 'Evaluation', desc: 'Evaluate and compare suppliers objectively.', icon: BarChart3 },
              { title: 'Negotiation', desc: 'AI assists in negotiations for the best terms.', icon: MessageSquare },
              { title: 'PO Creation', desc: 'Create and send POs with complete accuracy.', icon: FileCheck },
              { title: 'Execution', desc: 'Track, manage, and ensure timely delivery.', icon: Package }
            ].map((step, i) => (
              <div key={i} className={`reveal stagger-${i + 1} gpu bg-white/60 backdrop-blur-md border border-white rounded-3xl p-6 pt-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative interactive-card`}>
                {/* The Badge */}
                <div className="absolute -top-3 w-6 h-6 bg-[#F97316] rounded-full text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </div>
                {/* The Icon Container */}
                <div className="w-20 h-20 mb-6 bg-gradient-to-b from-white to-[#FAF7F4] shadow-inner border border-[#EDE7E2] rounded-2xl flex items-center justify-center text-[#F97316] relative">
                  <div className="absolute inset-0 bg-[#F97316]/5 rounded-2xl blur-md" />
                  <step.icon size={32} strokeWidth={1.5} className="relative z-10" />
                </div>
                <h3 className="font-bold text-[#1A120B] mb-2">{step.title}</h3>
                <p className="text-xs text-[#7A6E66] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* The Bottom Features */}
          <div className="reveal-up stagger-3 mt-16 lg:mt-24 max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-white rounded-full p-4 px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10">
            {[
              { title: 'Intelligent Automation', desc: 'Reduce manual work', icon: ShieldCheck },
              { title: 'Real-time Visibility', desc: 'Track every action', icon: Clock },
              { title: 'Data-driven Decisions', desc: 'Better outcomes', icon: TrendingUp },
              { title: 'Secure & Compliant', desc: 'Enterprise-grade security', icon: Lock }
            ].map((feat, i) => (
              <div key={i} className={`flex items-center gap-3 w-full lg:w-auto reveal stagger-${i + 1}`}>
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center shrink-0">
                   <feat.icon className="text-[#F97316]" size={20} strokeWidth={2} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-[#1A120B]">{feat.title}</div>
                  <div className="text-xs text-[#7A6E66]">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 5 — METRICS
      ========================================= */}
      <div className="py-32 border-b border-[#EDE7E2] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: "300%", label: "Efficiency Increase" },
              { num: "100K+", label: "Monthly Transactions" },
              { num: "78%", label: "Less Manual Work" },
              { num: "99.9%", label: "Enterprise Reliability" }
            ].map((stat, i) => (
              <div key={i} className={`reveal stagger-${i + 1} gpu text-center md:text-left`}>
                <div className="text-5xl sm:text-6xl font-bold text-[#1A120B] tracking-tighter mb-2">
                  {stat.num}
                </div>
                <div className="text-[#7A6E66] font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 6 — WHY SATORI
      ========================================= */}
      <div className="py-32 bg-[#FAF7F4] relative overflow-hidden font-satoshi">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
          <div className="reveal inline-flex items-center gap-2 bg-transparent rounded-full px-4 py-1.5 text-[13px] font-bold text-[#F97316] mb-6 border border-[#F97316]/20 uppercase tracking-widest">
            <Sparkles size={14} className="fill-[#F97316]" />
            Why Satori AI
          </div>
          <h2 className="reveal stagger-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A120B] mb-6">
            Built for <span className="font-instrument italic font-normal text-[#F97316]">intelligent</span><br className="hidden sm:block" /> enterprise operations
          </h2>
          <p className="reveal stagger-2 text-[#7A6E66] text-lg max-w-2xl mx-auto">
            Satori AI combines deep domain intelligence with advanced automation<br className="hidden sm:block" /> to help enterprises operate smarter, faster, and more efficiently.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Left Column: Image */}
          <div className="reveal-up flex-1 w-full flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <img 
                src="/images/orchestration_engine.png" 
                alt="Satori AI Orchestration Engine" 
                className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply"
              />
            </div>
          </div>
          
          {/* Right Column: Features */}
          <div className="flex-1 w-full space-y-8">
            {[
              { icon: GitBranch, title: "AI-driven Workflows", desc: "Automate complex procurement workflows with intelligent orchestration and minimal human effort." },
              { icon: TrendingUp, title: "Predictive Procurement", desc: "Leverage AI to forecast demand, identify risks, and optimize sourcing decisions." },
              { icon: CheckSquare, title: "Autonomous Approvals", desc: "AI agents handle approvals, validations, and compliance checks autonomously." },
              { icon: Globe, title: "Real-time Supplier Intelligence", desc: "Get 360° visibility into supplier performance, capacity, risk, and sustainability." },
              { icon: Plug, title: "Seamless Integrations", desc: "Connect with your ERP, finance, and enterprise systems effortlessly." },
              { icon: Lock, title: "Enterprise-grade Security", desc: "Built with robust security, role-based access, and compliance at the core." }
            ].map((feat, i) => (
              <div key={i} className={`reveal stagger-${(i % 3) + 1} gpu flex items-start gap-6 ${i !== 0 ? 'pt-8 border-t border-dashed border-[#F97316]/20' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#EDE7E2] shadow-sm flex items-center justify-center shrink-0 group hover:border-[#F97316]/50 transition-colors interactive-card">
                  <feat.icon size={24} className="text-[#F97316]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1A120B] mb-2">{feat.title}</h4>
                  <p className="text-sm text-[#7A6E66] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 7 — TESTIMONIALS
      ========================================= */}
      <div className="py-32 border-b border-[#EDE7E2] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="reveal text-4xl sm:text-5xl font-bold tracking-tight text-[#1A120B] mb-6">
              What enterprise <span className="font-instrument italic font-normal text-[#F97316]">leaders</span> say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "Satori AI transformed our procurement lifecycle. Approvals that took weeks now happen autonomously in minutes.", author: "Sarah Jenkins", role: "CPO, Global Logistics Co" },
              { text: "The risk intelligence and supplier matching capabilities alone paid for the platform in the first month.", author: "David Chen", role: "VP Procurement, TechCorp" }
            ].map((test, i) => (
              <div key={i} className={`reveal stagger-${i + 1} gpu bg-[#FAF7F4] border border-[#EDE7E2] rounded-3xl p-10 flex flex-col justify-between interactive-card`}>
                <p className="text-xl text-[#1A120B] font-medium leading-relaxed mb-8">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold">{test.author.charAt(0)}</div>
                  <div>
                    <h4 className="font-bold text-[#1A120B]">{test.author}</h4>
                    <p className="text-[#7A6E66] text-sm">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 8 — INTEGRATIONS
      ========================================= */}
      <div className="py-32 bg-gradient-to-b from-[#FAF7F4] to-white relative overflow-hidden font-satoshi">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
          <div className="reveal inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-[12px] font-bold text-[#F97316] mb-8 border border-[#F97316]/20 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full" />
            Integrations
          </div>
          <h2 className="reveal stagger-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A120B] mb-6">
            Connect with your enterprise <span className="font-instrument italic font-normal text-[#F97316]">ecosystem</span>
          </h2>
          <p className="reveal stagger-2 text-[#7A6E66] text-lg max-w-2xl mx-auto">
            Seamlessly integrate with your existing ERP, finance, and communication tools.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Decorative Dashed Line SVG */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden md:block opacity-40">
            <svg width="100%" height="100%" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
              <path d="M 100 120 C 10 120, 10 240, 100 240 L 900 240 C 990 240, 990 120, 900 120 Z" stroke="#F97316" strokeWidth="2" strokeDasharray="6 6" />
              {/* Orange connection dots */}
              <circle cx="50" cy="120" r="4" fill="#F97316" />
              <circle cx="200" cy="240" r="4" fill="#F97316" />
              <circle cx="800" cy="240" r="4" fill="#F97316" />
              <circle cx="950" cy="120" r="4" fill="#F97316" />
            </svg>
          </div>

          <div className="flex flex-col items-center gap-8 relative z-10">
            {/* Top Row */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'SAP', url: 'https://www.vectorlogo.zone/logos/sap/sap-ar21.svg' },
                { name: 'Oracle', url: 'https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg' },
                { name: 'AWS', url: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg' },
                { name: 'Azure', url: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg' },
                { name: 'Workday', url: 'https://www.vectorlogo.zone/logos/workday/workday-ar21.svg' },
                { name: 'Dynamics 365', url: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' }
              ].map((int, i) => (
                <div key={int.name} className={`reveal-scale stagger-${(i % 3) + 1} gpu bg-white border border-[#EDE7E2] rounded-[32px] w-40 h-40 flex flex-col items-center justify-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform cursor-pointer group interactive-card`}>
                  <div className="h-10 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity px-4">
                    <img src={int.url} alt={int.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="font-bold text-[#1A120B] text-[15px]">{int.name}</span>
                </div>
              ))}
            </div>
            
            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'Slack', url: 'https://www.vectorlogo.zone/logos/slack/slack-ar21.svg' },
                { name: 'Power BI', url: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-ar21.svg' }
              ].map((int, i) => (
                <div key={int.name} className={`reveal stagger-${i + 1} gpu bg-white border border-[#EDE7E2] rounded-[32px] w-40 h-40 flex flex-col items-center justify-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform cursor-pointer group interactive-card`}>
                  <div className="h-10 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity px-4">
                    <img src={int.url} alt={int.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="font-bold text-[#1A120B] text-[15px]">{int.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 9 — PRICING
      ========================================= */}
      <div className="py-32 bg-[#FAF7F4] border-t border-[#EDE7E2] font-satoshi relative overflow-hidden">
        {/* Soft Background Wave */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F97316]/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <div className="reveal inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-[12px] font-bold text-[#F97316] mb-8 border border-[#F97316]/20 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full" />
              Pricing
            </div>
            <h2 className="reveal stagger-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A120B] mb-6">
              Enterprise-ready <span className="font-instrument italic font-normal text-[#F97316]">pricing</span>
            </h2>
            <p className="reveal stagger-2 text-[#7A6E66] text-lg">
              Flexible plans designed to scale with your organization's procurement needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto relative z-10">
            
            {/* Starter */}
            <div className="reveal stagger-1 gpu bg-white border border-[#EDE7E2] rounded-[40px] p-10 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] interactive-card">
              <div className="w-14 h-14 bg-[#F97316]/10 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="text-[#F97316]" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A120B] mb-2">Starter</h3>
              <p className="text-[#7A6E66] text-sm mb-8 min-h-[40px]">For growing procurement teams.</p>
              
              <div className="text-4xl font-bold text-[#1A120B] mb-8 pb-8 border-b border-[#EDE7E2]">
                Custom<span className="text-lg text-[#7A6E66] font-normal">/yr</span>
              </div>
              
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "AI-assisted procurement",
                  "Supplier database access",
                  "Standard reporting",
                  "Email support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={4} className="text-white" />
                    </div>
                    <span className="text-[#1A120B] text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-4 rounded-full border border-[#EDE7E2] font-bold text-[#1A120B] hover:bg-[#FAF7F4] hover:border-[#F97316]/30 transition-all shadow-sm active:scale-[0.97]">
                Contact Sales
              </button>
            </div>

            {/* Professional */}
            <div className="reveal stagger-2 gpu bg-[#1A120B] text-white rounded-[40px] p-10 flex flex-col shadow-2xl relative transform md:-translate-y-4 border border-[#F97316]/20 interactive-card">
              <div className="absolute top-6 right-6 bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full" />
                Most Popular
              </div>
              
              <div className="absolute -inset-1 bg-gradient-to-b from-[#F97316]/20 to-transparent rounded-[44px] -z-10 blur-xl opacity-50" />
              
              <div className="w-14 h-14 bg-[#F97316] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_#F9731640]">
                <Crown className="text-white" size={28} strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-white/60 text-sm mb-8 min-h-[40px]">Full AI orchestration suite.</p>
              
              <div className="text-4xl font-bold text-white mb-8 pb-8 border-b border-white/10">
                Custom<span className="text-lg text-white/60 font-normal">/yr</span>
              </div>
              
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Starter",
                  "Autonomous workflows",
                  "Advanced analytics",
                  "Priority support",
                  "API & integrations"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={4} className="text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-4 rounded-full bg-[#F97316] text-white font-bold hover:bg-[#d95d0b] transition-all shadow-[0_0_20px_#F9731640] active:scale-[0.97]">
                Request Demo
              </button>
            </div>

            {/* Enterprise */}
            <div className="reveal stagger-3 gpu bg-white border border-[#EDE7E2] rounded-[40px] p-10 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] interactive-card">
              <div className="w-14 h-14 bg-[#F97316]/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-[#F97316]" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A120B] mb-2">Enterprise</h3>
              <p className="text-[#7A6E66] text-sm mb-8 min-h-[40px]">Unlimited scale and custom ERP integrations.</p>
              
              <div className="text-4xl font-bold text-[#1A120B] mb-8 pb-8 border-b border-[#EDE7E2]">
                Custom<span className="text-lg text-[#7A6E66] font-normal">/yr</span>
              </div>
              
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Professional",
                  "Custom AI models",
                  "Dedicated success manager",
                  "SLA & compliance",
                  "On-premise / Private cloud"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={4} className="text-white" />
                    </div>
                    <span className="text-[#1A120B] text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-4 rounded-full border border-[#EDE7E2] font-bold text-[#1A120B] hover:bg-[#FAF7F4] hover:border-[#F97316]/30 transition-all shadow-sm active:scale-[0.97]">
                Contact Sales
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 10 — FAQ
      ========================================= */}
      <div className="py-32 bg-[#FAF7F4] border-t border-[#EDE7E2]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="reveal text-4xl sm:text-5xl font-bold tracking-tight text-[#1A120B]">
              Frequently asked <span className="font-instrument italic font-normal text-[#F97316]">questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {/* FAQ Items */}
            {[
              { q: "What is Satori AI?", a: "Satori AI is an intelligent orchestration platform designed to automate and optimize enterprise procurement workflows." },
              { q: "How does deployment work?", a: "We offer dedicated deployment engineers who integrate Satori AI with your existing ERP and data infrastructure in weeks, not months." },
              { q: "Does it replace ERP systems?", a: "No, Satori AI acts as an intelligence layer on top of your existing ERP (like SAP or Oracle) to automate decisions and workflows." },
              { q: "Is enterprise data secure?", a: "Yes, we use enterprise-grade encryption and comply with SOC2, GDPR, and ISO 27001 standards. Data is never used to train public models." },
              { q: "What integrations are supported?", a: "We support native integrations with SAP, Oracle, Workday, Dynamics 365, AWS, and over 50+ enterprise tools." }
            ].map((faq, i) => (
              <div key={i} className={`reveal stagger-${(i % 3) + 1} gpu bg-white border border-[#EDE7E2] rounded-2xl p-6 hover:border-[#F97316]/30 transition-colors interactive-card`}>
                <h4 className="text-[#1A120B] font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-[#7A6E66]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 11 — FINAL CTA
      ========================================= */}
      <div className="p-3 sm:p-4 bg-[#FAF7F4]">
        <div className="bg-white border border-[#EDE7E2] rounded-[40px] p-8 sm:p-16 lg:p-20 relative overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.02)]">
          {/* Soft Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-[#F97316]/5 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            {/* Left Column Content */}
            <div className="flex-1 max-w-2xl reveal stagger-1 gpu">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-[12px] font-bold text-[#F97316] mb-8 border border-[#F97316]/20 uppercase tracking-widest shadow-sm">
                <Sparkles size={14} className="fill-[#F97316]" />
                Ready to transform
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1A120B] mb-6 leading-[1.05]">
                Transform enterprise <br className="hidden sm:block" />
                procurement <br className="hidden sm:block" />
                with <span className="font-instrument italic font-normal text-[#F97316]">AI</span>
              </h2>
              
              <p className="text-[#7A6E66] text-lg sm:text-xl mb-12">
                Deploy intelligent procurement orchestration <br className="hidden sm:block" />
                across your organization today.
              </p>
              
              {/* Features Row */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 mb-12">
                {[
                  { icon: Rocket, label: "Rapid Deployment" },
                  { icon: Shield, label: "Enterprise Security" },
                  { icon: BarChart, label: "Measurable Impact" },
                  { icon: Users, label: "Scalable Solution" }
                ].map((feat, i) => (
                  <div key={i} className={`flex items-center gap-3 reveal stagger-${i + 1}`}>
                    <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center shrink-0">
                      <feat.icon size={20} className="text-[#F97316]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[13px] font-bold text-[#1A120B] leading-tight max-w-[80px]">
                      {feat.label.split(' ').map((w, j) => <React.Fragment key={j}>{w}<br/></React.Fragment>)}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Buttons */}
              <div className="reveal stagger-3 flex flex-col sm:flex-row items-center gap-8 mt-12">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F97316] text-white rounded-full px-8 py-4 text-lg font-bold hover:bg-[#d95d0b] transition-all duration-300 shadow-xl shadow-[#F97316]/20 hover:shadow-[#F97316]/30 hover:-translate-y-0.5 active:scale-[0.97]">
                  Book Enterprise Demo
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
                <button className="group relative inline-flex items-center justify-center gap-2 text-[#1A120B] font-bold text-lg hover:text-[#F97316] transition-colors active:scale-[0.97]">
                  Explore Platform
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  <span className="absolute left-0 right-8 -bottom-1 h-0.5 bg-[#1A120B] group-hover:bg-[#F97316] transition-colors" />
                </button>
              </div>
            </div>
            
            {/* Right Column Image */}
            <div className="reveal-up stagger-4 flex-1 w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square">
                <img 
                  src="/images/cta_chip.png" 
                  alt="Satori AI Ready to Transform" 
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer className="reveal-up bg-[#FAF7F4] pt-10 pb-10 px-4 sm:px-8 font-satoshi gpu">
        <div className="max-w-[1400px] mx-auto bg-white border border-[#EDE7E2] rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8 sm:p-12 lg:p-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Left Column: Brand & Newsletter */}
            <div className="lg:col-span-4 flex flex-col gap-8 reveal stagger-1">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-[#F97316] rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                  <div className="w-3 h-3 bg-[#F97316] rounded-full" />
                </div>
                <span className="font-bold text-[24px] tracking-tight text-[#1A120B]">SatoriAI</span>
              </div>
              
              <p className="text-[#7A6E66] leading-relaxed max-w-xs text-[15px]">
                The intelligent orchestration platform for modern enterprise procurement.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {['twitter', 'linkedin', 'youtube', 'mail'].map((social, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#EDE7E2] flex items-center justify-center text-[#7A6E66] hover:text-[#F97316] hover:border-[#F97316] transition-colors active:scale-[0.97]">
                    {social === 'twitter' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>}
                    {social === 'linkedin' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                    {social === 'youtube' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 00-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
                    {social === 'mail' && <Mail className="w-4 h-4" />}
                  </a>
                ))}
              </div>

              {/* Newsletter Block */}
              <div className="bg-[#FAF7F4] rounded-2xl p-5 mt-2 border border-[#EDE7E2]/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl border border-[#EDE7E2] flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#F97316]" strokeWidth={2} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1A120B] text-sm">Stay updated</h5>
                    <p className="text-[13px] text-[#7A6E66] leading-tight mt-1">
                      Insights, product updates, and industry trends delivered to your inbox.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-white border border-[#EDE7E2] rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#F97316] transition-colors"
                  />
                  <button className="bg-[#F97316] text-white rounded-xl w-11 flex items-center justify-center hover:bg-[#d95d0b] transition-colors shrink-0 active:scale-[0.97]">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Middle Columns: Links */}
            <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8 pt-2 reveal stagger-2">
              {[
                { title: 'Product', links: ['Platform', 'Solutions', 'Integrations', 'Pricing', 'Security', 'Roadmap'] },
                { title: 'Company', links: ['About', 'Careers', 'Customers', 'Partners', 'Resources', 'Contact'] },
                { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Data Processing Agreement', 'Cookie Policy'] }
              ].map((col, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-[#F97316] mb-2">{col.title}</h4>
                  <div className="w-6 h-[2px] bg-[#F97316] mb-6" />
                  <ul className="flex flex-col">
                    {col.links.map((link, j) => (
                      <li key={j} className="border-b border-[#EDE7E2]/60 last:border-0">
                        <a href="#" className="flex items-center justify-between py-3.5 text-[14px] font-medium text-[#1A120B] hover:text-[#F97316] transition-colors group">
                          {link}
                          <ChevronRight size={14} className="text-[#F97316] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Column: Trust Badge Box */}
            <div className="lg:col-span-3 reveal stagger-3">
              <div className="bg-[#FAF7F4] border border-[#EDE7E2]/60 rounded-3xl p-6 lg:p-8 h-full flex flex-col shadow-sm interactive-card">
                <h4 className="font-bold text-[#1A120B] text-lg mb-8">Trusted by enterprises</h4>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full border border-[#F97316]/20 flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="text-[#F97316]" size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1A120B] text-lg leading-tight mb-0.5">99.9%</div>
                      <div className="text-[13px] text-[#7A6E66]">Uptime SLA</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full border border-[#F97316]/20 flex items-center justify-center shrink-0 shadow-sm">
                      <Lock className="text-[#F97316]" size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1A120B] text-lg leading-tight mb-0.5">ISO 27001</div>
                      <div className="text-[13px] text-[#7A6E66]">Certified</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full border border-[#F97316]/20 flex items-center justify-center shrink-0 shadow-sm">
                      <Globe className="text-[#F97316]" size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1A120B] text-[15px] leading-tight mb-0.5">Enterprise-grade</div>
                      <div className="text-[13px] text-[#7A6E66]">Security & Compliance</div>
                    </div>
                  </div>
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-[#F97316] font-bold text-[14px] mt-8 hover:text-[#d95d0b] transition-colors group">
                  View Compliance
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#EDE7E2] pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-[13px] font-medium text-[#7A6E66] reveal stagger-4">
            <p className="shrink-0">© 2026 Satori AI. All rights reserved.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#F97316]" strokeWidth={1.5} />
                Enterprise Security
              </div>
              <div className="w-px h-4 bg-[#EDE7E2] hidden sm:block" />
              <div className="flex items-center gap-2">
                <Package size={16} className="text-[#F97316]" strokeWidth={1.5} />
                Data Encrypted
              </div>
              <div className="w-px h-4 bg-[#EDE7E2] hidden sm:block" />
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-[#F97316]" strokeWidth={1.5} />
                Role-Based Access
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0">
              <a href="#" className="hover:text-[#1A120B] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#1A120B] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
