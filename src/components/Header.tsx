import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Home, 
  Wrench, 
  Users, 
  Briefcase, 
  ChevronDown, 
  Info, 
  Phone, 
  Bell, 
  Mail, 
  Instagram, 
  Youtube, 
  Facebook, 
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Settings,
  FileText,
  Landmark
} from 'lucide-react';
import { Logo } from './Logo';
import { SOCIAL_CONFIG, getWhatsAppUrl } from '../config/social';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tab: string, param?: string) => void;
  onOpenSearch: () => void;
  onOpenEligibilityChecker?: () => void;
  bookmarkCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  onOpenSearch,
  onOpenEligibilityChecker,
}) => {
  const { language, setLanguage, pick, pickSlash } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [schemesDropdownOpen, setSchemesDropdownOpen] = useState(false);
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toolsRef = useRef<HTMLDivElement>(null);
  const schemesRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsDropdownOpen(false);
      }
      if (schemesRef.current && !schemesRef.current.contains(e.target as Node)) {
        setSchemesDropdownOpen(false);
      }
      if (docsRef.current && !docsRef.current.contains(e.target as Node)) {
        setDocsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (tab: string, param?: string) => {
    onNavigate(tab, param);
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    setSchemesDropdownOpen(false);
    setDocsDropdownOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSearch();
  };

  const whatsAppUrl = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* ========================================================
          1. TOP MAIN HEADER (Navy Blue: #0B1B3D)
          - Left: Circular Logo + 'सरकारी TALK' + Tagline
          - Center: White Pill Search Bar with Red Search Button
          - Right: 5 Social Icons + Email Link
         ======================================================== */}
      <div className="bg-[#0B1B3D] text-white border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            
            {/* LEFT: SARKARI TALK Logo & Brand */}
            <div 
              onClick={() => handleNavClick('home')}
              className="cursor-pointer group shrink-0"
              title="SARKARI TALK — Homepage"
            >
              <Logo size="md" lightText={true} />
            </div>

            {/* CENTER: Search Bar (Desktop & Tablet) */}
            <div className="hidden md:flex flex-1 max-w-xl mx-2">
              <form 
                onSubmit={handleSearchSubmit}
                onClick={onOpenSearch}
                className="w-full bg-white rounded-full flex items-center pl-4 pr-1.5 py-1.5 shadow-sm border border-slate-300 hover:border-slate-400 transition-all cursor-pointer group"
              >
                <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0 mr-2.5" />
                <input
                  type="text"
                  readOnly
                  value={searchQuery}
                  placeholder={pickSlash('टूल्स, योजनाएं, सेवाएं खोजें...', 'Search for tools, schemes, services...')}
                  className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-normal cursor-pointer"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenSearch();
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-2 rounded-full transition-colors shrink-0 shadow-xs cursor-pointer"
                >
                  {pickSlash('खोजें', 'Search')}
                </button>
              </form>
            </div>

            {/* RIGHT: Social Media Icons + Official Email Contact */}
            <div className="flex flex-col items-end gap-1 shrink-0">
              {/* Row of 5 Colorful Social Icons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* 1. Instagram */}
                <a
                  href={SOCIAL_CONFIG.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-xs hover:opacity-90 hover:scale-105 transition-all"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* 2. YouTube */}
                <a
                  href={SOCIAL_CONFIG.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FF0000] flex items-center justify-center text-white shadow-xs hover:opacity-90 hover:scale-105 transition-all"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                {/* 3. Facebook */}
                <a
                  href={SOCIAL_CONFIG.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white shadow-xs hover:opacity-90 hover:scale-105 transition-all"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                {/* 4. WhatsApp */}
                <a
                  href={whatsAppUrl || 'https://wa.me/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#25D366] flex items-center justify-center text-white shadow-xs hover:opacity-90 hover:scale-105 transition-all"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* 5. Gmail */}
                <a
                  href={`mailto:${SOCIAL_CONFIG.email}`}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#EA4335] shadow-xs hover:bg-slate-50 hover:scale-105 transition-all"
                  title="Gmail"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* Mobile Search & Menu Toggles */}
                <button
                  onClick={onOpenSearch}
                  className="md:hidden ml-1 p-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 text-red-500" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

              {/* Official Email Link */}
              <a
                href={`mailto:${SOCIAL_CONFIG.email}`}
                className="hidden sm:flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300 hover:text-white transition-colors"
                title={`Email: ${SOCIAL_CONFIG.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-slate-300" />
                <span className="font-medium">{SOCIAL_CONFIG.email}</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================
          2. SECONDARY HORIZONTAL NAVIGATION BAR (White Background)
          Matches Reference Screenshot:
          - [Home] (Red active button)
          - [Tools ⌵]
          - [Schemes ⌵]
          - [Documents ⌵]
          - [Latest Updates]
          - [About Us]
          - [Contact Us]
         ======================================================== */}
      <nav className="bg-white border-b border-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-13">
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 sm:space-x-2">
              
              {/* 1. Home (Red button) */}
              <button
                onClick={() => handleNavClick('home')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'home'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>{pickSlash('होम', 'Home')}</span>
              </button>

              {/* 2. Tools ⌵ */}
              <div 
                ref={toolsRef}
                className="relative"
                onMouseEnter={() => setToolsDropdownOpen(true)}
                onMouseLeave={() => setToolsDropdownOpen(false)}
              >
                <button
                  onClick={() => {
                    const el = document.getElementById('popular-tools');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else handleNavClick('category', 'bihar-services');
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <Wrench className="w-4 h-4 text-slate-600" />
                  <span>{pickSlash('टूल्स', 'Tools')}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </button>

                {toolsDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => {
                        const el = document.getElementById('popular-tools');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        setToolsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-red-50 hover:text-red-700 flex items-center justify-between"
                    >
                      <span>{pick('लोकप्रिय ऑनलाइन टूल्स', 'Popular Online Tools')}</span>
                      <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded">{pick('प्रमुख', 'Featured')}</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('category', 'bihar-services')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                    >
                      <span>{pick('बिहार RTPS सेवाएं', 'Bihar RTPS Services')}</span>
                      <span className="text-[10px] text-orange-600 font-medium">{pick('प्रमाणपत्र', 'Certificates')}</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('tracker')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                    >
                      <span>{pick('आवेदन स्थिति ट्रैकर', 'Application Status Tracker')}</span>
                      <span className="text-[10px] text-blue-600 font-medium">{pick('जाँचें', 'Verify')}</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('article', 'bihar-bhumi-jamabandi-mutation')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      {pick('बिहार भूमि (भू-अभिलेख)', 'Bihar Bhumi (Land Records)')}
                    </button>
                    <button
                      onClick={() => handleNavClick('article', 'instant-epan-application-guide')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      {pick('इंस्टेंट ई-पैन गाइड', 'Instant e-PAN Generator Guide')}
                    </button>
                    <button
                      onClick={() => handleNavClick('portals')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 border-t border-slate-100 mt-1 pt-1.5"
                    >
                      {pick('आधिकारिक सरकारी पोर्टल निर्देशिका', 'Official Government Portals Directory')}
                    </button>
                  </div>
                )}
              </div>

              {/* 3. Schemes ⌵ */}
              <div 
                ref={schemesRef}
                className="relative"
                onMouseEnter={() => setSchemesDropdownOpen(true)}
                onMouseLeave={() => setSchemesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('category', 'government-schemes')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'category-government-schemes'
                      ? 'bg-slate-100 text-red-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Users className="w-4 h-4 text-slate-600" />
                  <span>{pickSlash('योजनाएं', 'Schemes')}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </button>

                {schemesDropdownOpen && (
                  <div className="absolute top-full left-0 w-76 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => handleNavClick('central-schemes')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-blue-900 hover:bg-blue-50 flex items-center justify-between"
                    >
                      <span>{pick('केंद्र सरकार की योजनाएं', 'Central Government Schemes')}</span>
                      <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">{pick('राष्ट्रीय', 'National')}</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('bihar-schemes')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-orange-900 hover:bg-orange-50 flex items-center justify-between"
                    >
                      <span>{pick('बिहार सरकार की योजनाएं', 'Bihar Government Schemes')}</span>
                      <span className="text-[10px] bg-orange-100 text-orange-800 font-bold px-1.5 py-0.5 rounded">{pick('राज्य', 'State')}</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('divyangjan-schemes')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-indigo-900 hover:bg-indigo-50 flex items-center justify-between"
                    >
                      <span>{pick('दिव्यांगजन योजनाएं', 'Divyangjan Schemes Hub')}</span>
                      <span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-1.5 py-0.5 rounded">{pick('विशेष', 'Special')}</span>
                    </button>
                    {onOpenEligibilityChecker && (
                      <button
                        onClick={() => {
                          setSchemesDropdownOpen(false);
                          onOpenEligibilityChecker();
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-50 flex items-center justify-between"
                      >
                        <span>{pick('पात्रता जांचें', 'Check Eligibility Tool')}</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">{pick('टूल', 'Interactive')}</span>
                      </button>
                    )}
                    <div className="border-t border-slate-100 my-1"></div>
                    <button
                      onClick={() => handleNavClick('article', 'pm-kisan-samman-nidhi-guide')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                    >
                      <span>{pick('पीएम किसान सम्मान निधि', 'PM-KISAN Samman Nidhi')}</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">₹6,000/{pick('वर्ष', 'yr')}</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('article', 'ayushman-bharat-card-guide')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                    >
                      <span>{pick('आयुष्मान भारत (PM-JAY)', 'Ayushman Bharat (PM-JAY)')}</span>
                      <span className="text-[10px] text-blue-600 font-semibold">₹5 {pick('लाख', 'Lakh')}</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('category', 'government-schemes')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 border-t border-slate-100 mt-1 pt-1.5"
                    >
                      {pick('सभी कल्याणकारी योजनाएं', 'All Welfare Schemes')}
                    </button>
                  </div>
                )}
              </div>

              {/* 4. Documents ⌵ */}
              <div 
                ref={docsRef}
                className="relative"
                onMouseEnter={() => setDocsDropdownOpen(true)}
                onMouseLeave={() => setDocsDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('category', 'identity-documents')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'category-identity-documents'
                      ? 'bg-slate-100 text-red-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Briefcase className="w-4 h-4 text-slate-600" />
                  <span>{pickSlash('दस्तावेज़', 'Documents')}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </button>

                {docsDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => handleNavClick('category', 'identity-documents')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-red-50 hover:text-red-700"
                    >
                      {pick('पहचान एवं नागरिक दस्तावेज़', 'Identity & Citizen Documents')}
                    </button>
                    <button
                      onClick={() => handleNavClick('article', 'aadhaar-card-address-update')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      {pick('आधार कार्ड पता अपडेट व डाउनलोड', 'Aadhaar Card Address & Update')}
                    </button>
                    <button
                      onClick={() => handleNavClick('article', 'instant-epan-application-guide')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      {pick('इंस्टेंट ई-पैन कार्ड ऑनलाइन', 'Instant e-PAN Card Online')}
                    </button>
                    <button
                      onClick={() => handleNavClick('article', 'udid-card-disability-certificate-guide')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      {pick('UDID स्वावलंबन व दिव्यांग प्रमाण पत्र', 'UDID & Disability Certificate')}
                    </button>
                    <button
                      onClick={() => handleNavClick('article', 'bihar-rtps-caste-income-residence')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      {pick('जाति, आय एवं निवास प्रमाण पत्र', 'Caste, Income & Residence Certificates')}
                    </button>
                  </div>
                )}
              </div>

              {/* 5. Latest Updates */}
              <button
                onClick={() => {
                  const el = document.getElementById('latest-updates');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else handleNavClick('category', 'all');
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <Bell className="w-4 h-4 text-slate-600" />
                <span>{pickSlash('ताज़ा अपडेट', 'Latest Updates')}</span>
              </button>

              {/* 6. About Us */}
              <button
                onClick={() => handleNavClick('page', 'about-us')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'page-about-us'
                    ? 'bg-slate-100 text-red-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Info className="w-4 h-4 text-slate-600" />
                <span>{pickSlash('हमारे बारे में', 'About Us')}</span>
              </button>

              {/* 7. Contact Us */}
              <button
                onClick={() => handleNavClick('page', 'contact-us')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'page-contact-us'
                    ? 'bg-slate-100 text-red-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>{pickSlash('संपर्क करें', 'Contact Us')}</span>
              </button>

            </div>

            {/* Quick Access Badges & Language Switcher on the right of white navbar */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Working Language Switcher (हिंदी | English | दोनों) */}
              <div className="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                    language === 'hi'
                      ? 'bg-orange-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="हिंदी मुख्य (Hindi Primary)"
                >
                  हिंदी
                </button>
                <span className="text-slate-300 mx-0.5">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                    language === 'en'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="English Primary"
                >
                  English
                </button>
                <span className="text-slate-300 mx-0.5">|</span>
                <button
                  onClick={() => setLanguage('bilingual')}
                  className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                    language === 'bilingual'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="दोनों भाषाएं / Bilingual (Hindi + English)"
                >
                  द्विभाषी
                </button>
              </div>

              <button
                onClick={() => handleNavClick('tracker')}
                className="flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-200 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>{pickSlash('स्थिति जाँच', 'Status Tracker')}</span>
              </button>
              <button
                onClick={() => handleNavClick('admin')}
                title={pick('एडमिन सेटिंग्स', 'Admin Settings')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile View Active Label & Search */}
            <div className="flex lg:hidden items-center justify-between w-full py-1">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-600 text-white font-bold text-xs"
              >
                <Home className="w-3.5 h-3.5" />
                <span>{pickSlash('होम', 'Home')}</span>
              </button>
              
              <div className="flex items-center gap-1.5">
                {/* Mobile Language Switcher */}
                <button
                  onClick={() => setLanguage(language === 'hi' ? 'en' : language === 'en' ? 'bilingual' : 'hi')}
                  className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-bold border border-slate-300"
                  title={pick('भाषा बदलें', 'Switch Language')}
                >
                  {language === 'hi' ? 'हिंदी' : language === 'en' ? 'ENG' : 'हिंदी/EN'}
                </button>
                <button
                  onClick={() => handleNavClick('central-schemes')}
                  className="px-2 py-1 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[11px] font-bold"
                >
                  {pick('केंद्र', 'Central')}
                </button>
                <button
                  onClick={() => handleNavClick('bihar-schemes')}
                  className="px-2 py-1 rounded bg-orange-50 text-orange-800 border border-orange-200 text-[11px] font-bold"
                >
                  {pick('बिहार', 'Bihar')}
                </button>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* ========================================================
          3. MOBILE DRAWER MENU
         ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-300 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
          {/* Mobile Search Input */}
          <div className="mb-4">
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-full text-slate-700 text-xs font-medium"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-red-600" />
                <span>{pickSlash('टूल्स, योजनाएं, दस्तावेज़ खोजें...', 'Search tools, schemes, documents...')}</span>
              </div>
              <span className="bg-red-600 text-white font-bold text-[10px] px-3 py-1 rounded-full">{pickSlash('खोजें', 'Search')}</span>
            </button>
          </div>

          <div className="space-y-1 text-slate-800 text-sm font-semibold">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5 text-red-600"
            >
              <Home className="w-4 h-4" />
              <span>{pickSlash('होम', 'Home')}</span>
            </button>
            <button
              onClick={() => handleNavClick('central-schemes')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 flex items-center gap-2.5 text-blue-900 bg-blue-50/50 font-bold"
            >
              <Landmark className="w-4 h-4 text-blue-700" />
              <span>{pick('केंद्र सरकार की योजनाएं', 'Central Government Schemes')}</span>
            </button>
            <button
              onClick={() => handleNavClick('bihar-schemes')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 flex items-center gap-2.5 text-orange-900 bg-orange-50/50 font-bold"
            >
              <FileText className="w-4 h-4 text-orange-600" />
              <span>{pick('बिहार सरकार की योजनाएं', 'Bihar Government Schemes')}</span>
            </button>
            <button
              onClick={() => handleNavClick('divyangjan-schemes')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-50 flex items-center gap-2.5 text-indigo-900 bg-indigo-50/50 font-bold"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>{pick('दिव्यांगजन योजनाएं', 'Divyangjan Hub')}</span>
            </button>
            {onOpenEligibilityChecker && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEligibilityChecker();
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 flex items-center gap-2.5 text-emerald-800 font-bold"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{pick('पात्रता जांचें', 'Check Eligibility Tool')}</span>
              </button>
            )}
            <button
              onClick={() => {
                const el = document.getElementById('popular-tools');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5"
            >
              <Wrench className="w-4 h-4 text-slate-600" />
              <span>{pick('लोकप्रिय टूल्स', 'Popular Tools')}</span>
            </button>
            <button
              onClick={() => handleNavClick('category', 'bihar-services')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5 text-orange-700"
            >
              <FileText className="w-4 h-4 text-orange-600" />
              <span>{pick('बिहार RTPS सेवाएं', 'Bihar RTPS Services')}</span>
            </button>
            <button
              onClick={() => handleNavClick('category', 'government-schemes')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5"
            >
              <Users className="w-4 h-4 text-slate-600" />
              <span>{pick('कल्याणकारी योजनाएं', 'Welfare Schemes')}</span>
            </button>
            <button
              onClick={() => handleNavClick('category', 'identity-documents')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5"
            >
              <Briefcase className="w-4 h-4 text-slate-600" />
              <span>{pick('दस्तावेज़ (आधार, पैन, वोटर)', 'Documents (Aadhaar, PAN, Voter)')}</span>
            </button>
            <button
              onClick={() => handleNavClick('tracker')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5 text-blue-700"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{pick('आवेदन स्थिति ट्रैकर', 'Status Tracker')}</span>
            </button>
            <button
              onClick={() => handleNavClick('portals')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5"
            >
              <ExternalLink className="w-4 h-4 text-slate-600" />
              <span>{pick('आधिकारिक सरकारी पोर्टल', 'Official Government Portals')}</span>
            </button>
            <button
              onClick={() => handleNavClick('videos')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5 text-red-600"
            >
              <Youtube className="w-4 h-4" />
              <span>{pick('यूट्यूब वीडियो गाइड', 'YouTube Video Guides')}</span>
            </button>
            <button
              onClick={() => handleNavClick('page', 'about-us')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5"
            >
              <Info className="w-4 h-4 text-slate-600" />
              <span>{pick('सरकारी TALK के बारे में', 'About SARKARI TALK')}</span>
            </button>
            <button
              onClick={() => handleNavClick('page', 'contact-us')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>{pick('संपर्क करें', 'Contact Us')}</span>
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2.5 text-slate-500"
            >
              <Settings className="w-4 h-4" />
              <span>{pick('एडमिन प्रबंधन', 'Admin Management')}</span>
            </button>
          </div>

          {/* Social links row inside mobile drawer */}
          <div className="mt-4 pt-3 border-t border-slate-200">
            <p className="text-[11px] font-semibold text-slate-500 mb-2">{pick('सरकारी TALK से जुड़ें:', 'Connect with Sarkari Talk:')}</p>
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_CONFIG.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FF0000] flex items-center justify-center text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_CONFIG.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={whatsAppUrl || 'https://wa.me/'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center text-white"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SOCIAL_CONFIG.email}`}
                className="w-8 h-8 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-red-600"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a
              href={`mailto:${SOCIAL_CONFIG.email}`}
              className="mt-2 text-xs text-slate-600 flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{SOCIAL_CONFIG.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
