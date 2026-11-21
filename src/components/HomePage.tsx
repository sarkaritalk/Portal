import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  Youtube, 
  Globe, 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  GraduationCap, 
  Briefcase, 
  Gift, 
  HeartPulse, 
  Sprout, 
  Car, 
  Landmark, 
  Building2, 
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Clock,
  Layers
} from 'lucide-react';
import { ServiceArticle, YouTubeVideo } from '../types';
import { CATEGORIES } from '../data/categories';
import { OFFICIAL_PORTALS } from '../data/officialPortals';
import { ArticleCard } from './ArticleCard';
import { BiharServicesDirectory } from './BiharServicesDirectory';
import { QuickAccessShortcuts } from './QuickAccessShortcuts';
import { SOCIAL_CONFIG, getWhatsAppUrl } from '../config/social';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES_EN, PORTALS_EN } from '../data/translations/directoryTranslations';
import { localizeArticle } from '../data/translations/articleTranslations';

interface HomePageProps {
  articles: ServiceArticle[];
  videos: YouTubeVideo[];
  onNavigate: (tab: string, param?: string) => void;
  onOpenSearch: () => void;
  onOpenVideo: (video: YouTubeVideo) => void;
  onOpenNewsletter: () => void;
  onOpenEligibilityChecker?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  articles,
  videos,
  onNavigate,
  onOpenVideo,
  onOpenNewsletter,
  onOpenEligibilityChecker,
}) => {
  const { language, isHindi, isEnglish, isBilingual, pick } = useLanguage();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [activePortalFilter, setActivePortalFilter] = useState<'all' | 'Bihar' | 'Central'>('all');

  const whatsAppUrl = getWhatsAppUrl();

  const popularTools = articles.slice(0, 6);

  // Latest verified updates sorted by verifiedDate
  const latestUpdates = [...articles]
    .sort((a, b) => new Date(b.verifiedDate).getTime() - new Date(a.verifiedDate).getTime())
    .slice(0, 4);

  // General FAQs (Hindi + English)
  const homeFaqs = [
    {
      qHi: 'सरकारी TALK (SARKARI TALK) क्या है?',
      qEn: 'What is SARKARI TALK?',
      aHi: 'सरकारी TALK एक स्वतंत्र जन-सेवा सूचना पोर्टल है, जिसे नागरिकों को सरकारी योजनाओं, डिजिटल ऑनलाइन सेवाओं, पात्रता, आवश्यक दस्तावेज़ों, आधिकारिक शुल्क और चरणबद्ध आवेदन प्रक्रिया को सरल भाषा में समझाने तथा सत्यापित आधिकारिक सरकारी पोर्टलों से जोड़ने के लिए बनाया गया है।',
      aEn: 'SARKARI TALK is an independent public-service information platform created to help citizens understand government schemes, digital online services, eligibility criteria, required documents, official fees, and step-by-step application procedures in simple language with verified links to official government portals.',
    },
    {
      qHi: 'क्या सरकारी TALK कोई आधिकारिक सरकारी वेबसाइट है?',
      qEn: 'Is SARKARI TALK an official government website?',
      aHi: 'नहीं। सरकारी TALK पूरी तरह से एक स्वतंत्र और गैर-सरकारी सूचना मंच है। यह भारत सरकार, बिहार सरकार या किसी भी सरकारी मंत्रालय से संबद्ध नहीं है। अंतिम आवेदन, सत्यापन और स्वीकृति केवल अधिकृत सरकारी पोर्टलों (.gov.in / .nic.in) पर ही होती है।',
      aEn: 'No. SARKARI TALK is strictly an independent, non-government informational platform. It is not affiliated with the Government of India, the Government of Bihar, or any government ministry. Final applications, verifications, and approvals take place solely on authorized official government portals (.gov.in / .nic.in).',
    },
    {
      qHi: 'बिहार RTPS से जाति, आय या निवास प्रमाणपत्र बनने में कितना समय लगता है?',
      qEn: 'How long does it take to obtain a Caste, Income, or Residence Certificate from Bihar RTPS?',
      aHi: 'बिहार लोक सेवाओं का अधिकार (RTPS) अधिनियम के तहत राजस्व अधिकारी (RO) स्तर पर सामान्य कार्य-अवधि 10 कार्यदिवस निर्धारित है। स्वीकृत होने पर डिजिटल हस्ताक्षरित प्रमाणपत्र serviceonline.bihar.gov.in से निःशुल्क डाउनलोड किया जा सकता है।',
      aEn: 'Under the Bihar Right to Public Services (RTPS) Act, the standard designated delivery period at the Revenue Officer (RO) level is typically 10 working days. Digitally signed certificates can be downloaded online free of charge from serviceonline.bihar.gov.in once approved.',
    },
    {
      qHi: 'क्या सरकारी TALK गाइड या आवेदन जानकारी के लिए कोई शुल्क लेता है?',
      qEn: 'Does SARKARI TALK charge any fees for applications or guides?',
      aHi: 'कभी नहीं। सरकारी TALK पर उपलब्ध सभी जानकारी, दस्तावेज़ सूची, चरणबद्ध गाइड और वीडियो ट्यूटोरियल 100% निःशुल्क हैं। निर्धारित सरकारी शुल्क (जैसे आधार पता अपडेट के लिए ₹50 या लर्निंग लाइसेंस के लिए ₹200) सीधे अधिकृत सरकारी पेमेंट गेटवे पर ही देय होते हैं।',
      aEn: 'Never. All information, checklists, step-by-step guides, and video tutorials on SARKARI TALK are 100% free of cost. Any official government fees (such as ₹50 for Aadhaar address update or ₹200 for learner licence) are payable directly on authorized government payment gateways.',
    },
    {
      qHi: 'पीएम-किसान की रुकी हुई किस्त का स्टेटस कैसे जांचें?',
      qEn: 'How do I check my pending PM-KISAN installment status?',
      aHi: 'आधिकारिक पोर्टल pmkisan.gov.in पर जाकर "Know Your Status" विकल्प चुनें। अपना PM-Kisan रजिस्ट्रेशन नंबर और मोबाइल OTP दर्ज करके जांचें कि आपका e-KYC, Land Seeding और Aadhaar Bank DBT Seeding सक्रिय (YES) है या नहीं।',
      aEn: 'Visit the official pmkisan.gov.in portal under "Know Your Status". Enter your PM-Kisan Registration Number and mobile OTP to check if your e-KYC status, Land Seeding, and Aadhaar Bank DBT Seeding are active (YES).',
    },
  ];

  const handleScrollToTools = () => {
    const el = document.getElementById('popular-tools');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('category', 'all');
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* ============================================================
          SECTION B: PREMIUM IMMERSIVE HERO BANNER
         ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#0A1938] border-b border-slate-800/80 min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center">
        
        {/* 1. Hero Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
          <img
            src="/assets/hero-bg-india.png"
            alt={pick('डिजिटल इंडिया — भारतीय युवा, किसान और राष्ट्रीय ध्वज', 'Digital India — Indian Youth, Farmer, and National Flag')}
            className="w-full h-full object-cover object-[72%_center] sm:object-[75%_center] md:object-[80%_center] lg:object-[88%_center] xl:object-right"
            loading="eager"
          />

          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0B1B3D]/95 via-[#0B1B3D]/80 via-42% to-transparent"></div>
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/95 via-[#0B1B3D]/85 via-50% to-[#0B1B3D]/40"></div>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-80"></div>
        </div>

        {/* 2. Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl lg:max-w-2xl text-left flex flex-col items-start">
            
            {/* Small Label */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm mb-4 sm:mb-6">
              <div className="flex items-center h-2.5 w-5 rounded-full overflow-hidden border border-white/40 shrink-0">
                <span className="h-full w-1/3 bg-[#FF9933]"></span>
                <span className="h-full w-1/3 bg-white"></span>
                <span className="h-full w-1/3 bg-[#138808]"></span>
              </div>
              {!isHindi && (
                <span className="text-[11px] sm:text-xs font-black tracking-widest uppercase text-white">
                  DIGITAL INDIA | BETTER TOMORROW
                </span>
              )}
              {isBilingual && <span className="text-white/40 hidden sm:inline">•</span>}
              {!isEnglish && (
                <span className="text-[11px] sm:text-xs font-bold text-amber-300 font-hindi">
                  डिजिटल इंडिया | बेहतर भविष्य
                </span>
              )}
            </div>

            {/* Main Heading */}
            <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
              {isHindi ? (
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-black text-white font-hindi tracking-normal leading-[1.22] drop-shadow-md">
                  सरकारी जानकारी और{' '}
                  <span className="text-amber-400 font-black">डिजिटल सेवाएँ</span>{' '}
                  — सब कुछ एक ही जगह
                </h1>
              ) : (
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-black text-white tracking-tight leading-[1.18] drop-shadow-md">
                  Government Information &{' '}
                  <span className="text-amber-400 font-black">Digital Services</span>{' '}
                  — All in One Place
                </h1>
              )}

              {isBilingual && (
                <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-100 font-hindi tracking-normal leading-snug drop-shadow-md">
                  सरकारी जानकारी और{' '}
                  <span className="text-amber-300 font-black">डिजिटल सेवाएँ</span>{' '}
                  — सब कुछ एक ही जगह
                </p>
              )}
            </div>

            {/* Supporting Text */}
            <div className="mb-6 sm:mb-8 space-y-2 max-w-xl">
              {!isHindi && (
                <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal">
                  Explore government schemes, useful online tools, important documents and public-service information in one convenient place.
                </p>
              )}
              {!isEnglish && (
                <p className={`${isHindi ? 'text-sm sm:text-base md:text-lg text-slate-200' : 'text-xs sm:text-sm md:text-base text-slate-300'} leading-relaxed font-hindi font-medium`}>
                  सरकारी योजनाओं, ऑनलाइन टूल्स, जरूरी दस्तावेज़ों और जनसेवाओं की जानकारी यहाँ आसानी से पाएँ।
                </p>
              )}
            </div>

            {/* Button: Explore All Tools */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleScrollToTools}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-red-500/40"
              >
                <span>{pick('सभी टूल्स देखें', 'Explore All Tools', 'Explore All Tools • सभी टूल्स देखें')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          QUICK ACCESS SHORTCUTS & CATEGORIES
         ============================================================ */}
      <QuickAccessShortcuts 
        onNavigate={onNavigate}
        onOpenEligibilityChecker={onOpenEligibilityChecker || (() => onNavigate('eligibility'))}
        onOpenStatusTracker={() => onNavigate('tracker')}
      />

      {/* ============================================================
          SECTION C: POPULAR TOOLS
         ============================================================ */}
      <section id="popular-tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-[11px] font-bold uppercase tracking-wider mb-2 border border-red-200">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>{pick('उपयोगी जन-सेवा टूल्स', 'Essential Public Utilities', 'उपयोगी टूल्स • Essential Utilities')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {pick('लोकप्रिय टूल्स एवं सेवाएँ', 'Popular Tools & Services', 'लोकप्रिय टूल्स एवं सेवाएँ (Popular Tools & Services)')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              {pick(
                'प्रमाणपत्र, भूमि अभिलेख, कल्याणकारी पेंशन और पहचान पत्रों के लिए सर्वाधिक उपयोग किए जाने वाले ऑनलाइन टूल्स व चरणबद्ध मार्गदर्शन।',
                'Frequently accessed online tools and step-by-step guidance for certificates, land records, welfare pensions, and identity cards.'
              )}
            </p>
          </div>

          <button
            onClick={() => onNavigate('category', 'all')}
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{pick('सभी टूल्स व गाइड देखें', 'View All Tools & Guides')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map(article => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              ctaText={pick('टूल खोलें', 'Open Tool')}
              onSelect={(slug) => onNavigate('article', slug)} 
            />
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION D: BROWSE BY CATEGORY
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider mb-2 border border-blue-200">
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <span>{pick('सुव्यवस्थित निर्देशिका', 'Organized Directory', 'श्रेणी निर्देशिका • Organized Directory')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {pick('श्रेणी के अनुसार खोजें', 'Browse by Category', 'श्रेणी के अनुसार खोजें (Browse by Category)')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {pick(
                'विभागवार जनसेवाएँ, कल्याणकारी योजनाएँ और नागरिक संसाधन देखें',
                'Explore public services, welfare schemes, and citizen resources sorted by department'
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map(cat => {
            const count = articles.filter(a => a.categoryId === cat.id || (cat.id === 'bihar-services' && a.state === 'Bihar')).length;
            const catDescEn = CATEGORIES_EN[cat.id] || cat.nameEn;

            return (
              <div
                key={cat.id}
                onClick={() => onNavigate('category', cat.id)}
                className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-red-500 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-red-50 text-slate-700 group-hover:text-red-600 flex items-center justify-center transition-colors mb-3 border border-slate-200 group-hover:border-red-200">
                    {cat.id === 'bihar-services' && <MapPin className="w-5 h-5 text-orange-600" />}
                    {cat.id === 'identity-documents' && <FileText className="w-5 h-5 text-blue-600" />}
                    {cat.id === 'government-schemes' && <Gift className="w-5 h-5 text-emerald-600" />}
                    {cat.id === 'education-scholarships' && <GraduationCap className="w-5 h-5 text-indigo-600" />}
                    {cat.id === 'jobs-recruitment' && <Briefcase className="w-5 h-5 text-amber-600" />}
                    {cat.id === 'agriculture-farmers' && <Sprout className="w-5 h-5 text-green-600" />}
                    {cat.id === 'health-welfare' && <HeartPulse className="w-5 h-5 text-rose-600" />}
                    {cat.id === 'transport-vehicles' && <Car className="w-5 h-5 text-cyan-600" />}
                    {cat.id === 'banking-pension' && <Landmark className="w-5 h-5 text-purple-600" />}
                    {cat.id === 'business-employment' && <Building2 className="w-5 h-5 text-slate-700" />}
                    {cat.id === 'other-services' && <Globe className="w-5 h-5 text-teal-600" />}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-600 leading-snug">
                    {isHindi ? cat.nameHi : cat.nameEn}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-2">
                    {isBilingual ? cat.nameHi : isHindi ? cat.description : catDescEn}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-semibold">
                    {count > 0 ? pick(`${count} गाइड`, `${count} Guides`) : pick('उपलब्ध', 'Available')}
                  </span>
                  <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform">
                    {pick('देखें →', 'Explore →')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          BIHAR GOVERNMENT SCHEMES & ONLINE SERVICES DIRECTORY
         ============================================================ */}
      <BiharServicesDirectory 
        onSelectArticle={(slug) => onNavigate('article', slug)} 
      />

      {/* ============================================================
          SECTION E: LATEST UPDATES
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              <span>{pick('सत्यापित सटीकता', 'Verified Accuracy', 'सत्यापित जानकारी • Verified Accuracy')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {pick('नवीनतम सत्यापित गाइड एवं अपडेट', 'Latest Verified Guides & Updates', 'नवीनतम सत्यापित गाइड (Latest Verified Guides)')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {pick(
                'सरकारी अधिसूचनाओं से सत्यापित नवीनतम प्रक्रियाएँ और आधिकारिक लिंक',
                'Recently audited procedures and official links verified against government gazettes'
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestUpdates.map(article => {
            const loc = localizeArticle(article, language);
            return (
              <div
                key={article.id}
                onClick={() => onNavigate('article', article.slug)}
                className="bg-white rounded-2xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className={`font-bold px-2 py-0.5 rounded ${
                      article.state === 'Bihar' ? 'bg-orange-100 text-orange-900' : 'bg-blue-100 text-blue-900'
                    }`}>
                      {article.state === 'Bihar' ? pick('बिहार', 'Bihar') : pick('केंद्र', 'Central')}
                    </span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {article.verifiedDate}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 line-clamp-2 hover:text-red-600 transition-colors">
                    {loc.displayTitle}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2">
                    {loc.shortSummary}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs text-red-600 font-bold">
                  <span>{pick('सत्यापित गाइड पढ़ें', 'Read Verified Guide')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          SECTION F: CONTACT & SOCIAL MEDIA
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0A1938] via-[#0E275E] to-[#0A1938] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-red-600/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/15 px-3 py-1 rounded-full border border-amber-400/30">
              {pick('समुदाय एवं नागरिक सहायता', 'Community & Citizen Support')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              {pick('हमसे जुड़े रहें', 'Stay Connected With Us', 'हमसे जुड़े रहें (Stay Connected With Us)')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              {pick(
                'नई योजनाओं, अंतिम तिथियों और वीडियो गाइड के त्वरित अपडेट के लिए सरकारी TALK के सोशल मीडिया चैनलों से जुड़ें, या हमारी संपादकीय टीम को सीधे ईमेल करें।',
                'Follow SARKARI TALK across social channels for instant updates on new schemes, deadlines, and video guides, or email our editorial desk directly.'
              )}
            </p>
          </div>

          {/* 5 Social Media & Contact Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            
            {/* 1. Instagram */}
            <a
              href={SOCIAL_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-4 flex flex-col items-center text-center transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-300 font-medium">Instagram</span>
              <span className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                {SOCIAL_CONFIG.instagram.label}
              </span>
              <span className="text-[10px] text-pink-300/80 mt-1">{pick('अपडेट के लिए फॉलो करें →', 'Follow for Updates →')}</span>
            </a>

            {/* 2. YouTube */}
            <a
              href={SOCIAL_CONFIG.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-4 flex flex-col items-center text-center transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                <Youtube className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-300 font-medium">YouTube</span>
              <span className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
                {SOCIAL_CONFIG.youtube.label}
              </span>
              <span className="text-[10px] text-red-300/80 mt-1">{pick('वीडियो गाइड देखें →', 'Watch Tutorials →')}</span>
            </a>

            {/* 3. Facebook */}
            <a
              href={SOCIAL_CONFIG.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-4 flex flex-col items-center text-center transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-300 font-medium">Facebook</span>
              <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                {SOCIAL_CONFIG.facebook.label}
              </span>
              <span className="text-[10px] text-blue-300/80 mt-1">{pick('समुदाय से जुड़ें →', 'Join Community →')}</span>
            </a>

            {/* 4. WhatsApp */}
            {whatsAppUrl ? (
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-4 flex flex-col items-center text-center transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-xs text-slate-300 font-medium">WhatsApp</span>
                <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {pick('WhatsApp पर चैट करें', SOCIAL_CONFIG.whatsapp.label)}
                </span>
                <span className="text-[10px] text-emerald-300/80 mt-1">{pick('सीधी चैट शुरू करें →', 'Start Direct Chat →')}</span>
              </a>
            ) : (
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center select-none"
                title={pick('कॉन्फ़िगरेशन द्वारा WhatsApp सहायता सक्रिय की जा सकती है', 'WhatsApp support can be activated via configuration')}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center mb-3 border border-slate-700">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-xs text-slate-400 font-medium">WhatsApp</span>
                <span className="text-sm font-bold text-slate-300">
                  {pick('WhatsApp पर चैट करें', SOCIAL_CONFIG.whatsapp.label)}
                </span>
                <span className="text-[10px] text-amber-300/90 mt-1 bg-amber-500/20 px-2 py-0.5 rounded-full">
                  {pick('सक्रियण योग्य', 'Configurable')}
                </span>
              </div>
            )}

            {/* 5. Gmail: Exact Sarkaritalk23@gmail.com */}
            <a
              href={SOCIAL_CONFIG.emailLink}
              className="bg-white/10 hover:bg-white/15 border border-amber-400/40 rounded-2xl p-4 flex flex-col items-center text-center transition-all group hover:-translate-y-1"
              title={`${pick('ईमेल भेजें:', 'Compose email to')} ${SOCIAL_CONFIG.email}`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-300 font-medium">Gmail</span>
              <span className="text-xs sm:text-sm font-bold text-amber-300 group-hover:text-white transition-colors truncate max-w-full">
                {SOCIAL_CONFIG.email}
              </span>
              <span className="text-[10px] text-amber-300/80 mt-1">{pick('ईमेल भेजें →', 'Compose Email →')}</span>
            </a>

          </div>
        </div>
      </section>

      {/* ============================================================
          YOUTUBE VIDEO GUIDES SECTION
         ============================================================ */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full mb-2">
                <Youtube className="w-3.5 h-3.5 fill-current" />
                <span>{pick('वीडियो ट्यूटोरियल लाइब्रेरी', 'Video Tutorials Library')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                {pick('चरणबद्ध वीडियो मार्गदर्शन देखें', 'Watch Step-by-Step Video Demonstrations')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {pick(
                  'बिहार RTPS, भूमि अभिलेख दाखिल-खारिज, पीएम किसान e-KYC और आधार अपडेट के सरल वीडियो गाइड',
                  'Visual walkthroughs for Bihar RTPS, land records mutation, PM Kisan e-KYC, and Aadhaar updates'
                )}
              </p>
            </div>

            <button
              onClick={() => onNavigate('videos')}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>{pick('वीडियो लाइब्रेरी देखें', 'Explore Video Library')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.slice(0, 4).map(video => {
              const videoTitle = isHindi
                ? video.titleHi
                : isEnglish
                  ? video.titleEn
                  : `${video.titleHi} (${video.titleEn})`;

              return (
                <div
                  key={video.id}
                  className="bg-slate-800/80 rounded-2xl border border-slate-700 overflow-hidden group flex flex-col justify-between hover:border-red-500 transition-all shadow-xs"
                >
                  <div>
                    <div 
                      onClick={() => onOpenVideo(video)}
                      className="relative aspect-video bg-black overflow-hidden cursor-pointer"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={videoTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Youtube className="w-5 h-5 fill-current" />
                        </div>
                      </div>
                      {video.duration && (
                        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                          {video.duration}
                        </span>
                      )}
                    </div>

                    <div className="p-3.5 space-y-1.5">
                      <span className="text-[10px] font-bold text-amber-400 block">
                        {video.publishedDate}
                      </span>
                      <h3 
                        onClick={() => onOpenVideo(video)}
                        className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 cursor-pointer leading-snug"
                      >
                        {videoTitle}
                      </h3>
                    </div>
                  </div>

                  <div className="p-3.5 pt-0">
                    <button
                      onClick={() => onOpenVideo(video)}
                      className="w-full py-2 bg-slate-700 hover:bg-red-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>{pick('वीडियो देखें', 'Watch Video')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          OFFICIAL GOVERNMENT PORTALS SHOWCASE
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Globe className="w-6 h-6 text-red-600" />
              <span>{pick('आधिकारिक सरकारी पोर्टल निर्देशिका', 'Official Government Portals Directory')}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {pick(
                'साइबर सुरक्षा सत्यापन के साथ अधिकृत .gov.in एवं .nic.in पोर्टलों तक सीधी पहुँच',
                'Direct access to authorized .gov.in and .nic.in portals with cybersecurity verification'
              )}
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActivePortalFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activePortalFilter === 'all' ? 'bg-[#0A1938] text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {pick('सभी', 'All')}
            </button>
            <button
              onClick={() => setActivePortalFilter('Bihar')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activePortalFilter === 'Bihar' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {pick('बिहार', 'Bihar')}
            </button>
            <button
              onClick={() => setActivePortalFilter('Central')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activePortalFilter === 'Central' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {pick('केंद्र', 'Central')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OFFICIAL_PORTALS.filter(p => activePortalFilter === 'all' || p.level === activePortalFilter).slice(0, 6).map(portal => {
            const pEn = PORTALS_EN[portal.id];
            const portalName = isHindi
              ? portal.nameHi
              : isEnglish
                ? portal.nameEn
                : `${portal.nameHi} (${portal.nameEn})`;
            const portalDesc = isHindi
              ? portal.description
              : isEnglish
                ? (pEn?.descriptionEn || portal.description)
                : portal.description;

            return (
              <div
                key={portal.id}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className={`font-bold px-2 py-0.5 rounded ${
                      portal.level === 'Bihar' ? 'bg-orange-100 text-orange-900' : 'bg-blue-100 text-blue-900'
                    }`}>
                      {portal.level === 'Bihar'
                        ? pick('बिहार सरकार', 'Bihar Government')
                        : pick('केंद्र सरकार', 'Central Government')}
                    </span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {pick('अधिकृत', 'Authorized')}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">{portalName}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{portalDesc}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono truncate max-w-[160px]">{portal.url}</span>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-red-600 hover:text-red-700 font-bold flex items-center gap-1"
                  >
                    <span>{pick('पोर्टल खोलें', 'Visit Portal')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => onNavigate('portals')}
            className="text-xs font-bold text-slate-700 hover:text-red-600 underline cursor-pointer"
          >
            {pick('सभी 16+ अधिकृत सरकारी पोर्टल देखें →', 'View All 16+ Authorized Government Portals →')}
          </button>
        </div>
      </section>

      {/* ============================================================
          FREQUENTLY ASKED QUESTIONS
         ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {pick('अक्सर पूछे जाने वाले प्रश्न', 'Frequently Asked Questions', 'अक्सर पूछे जाने वाले प्रश्न (FAQs)')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {pick(
              'सरकारी सेवाओं, पोर्टल सत्यापन और आवेदन दिशानिर्देशों से जुड़े सामान्य प्रश्न',
              'Common questions regarding government services, portal verification, and application guidelines'
            )}
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq, idx) => {
            const isOpen = faqOpenIndex === idx;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <button
                  onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className="text-sm sm:text-base flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{pick(faq.qHi, faq.qEn)}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 bg-slate-50 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200 space-y-2">
                    {!isEnglish && <p>{faq.aHi}</p>}
                    {!isHindi && <p className={isBilingual ? 'text-slate-600 pt-1 border-t border-slate-200/70' : ''}>{faq.aEn}</p>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          NEWSLETTER / UPDATE SUBSCRIPTION BOX
         ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0A1938] to-[#122A63] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              {pick('महत्वपूर्ण योजनाओं व अंतिम तिथियों की सूचना पाएँ', 'Get Notified on Critical Schemes & Deadlines')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
              {pick(
                'छात्रवृत्ति की अंतिम तिथियों, बिहार RTPS नियमों में बदलाव और योजना किस्तों के सत्यापित अपडेट समय पर प्राप्त करें।',
                'Stay ahead with verified notifications on scholarship closing dates, Bihar RTPS rule revisions, and installment dispatches.'
              )}
            </p>
          </div>
          <button
            onClick={onOpenNewsletter}
            className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer shrink-0"
          >
            {pick('निःशुल्क अलर्ट सदस्यता लें →', 'Subscribe to Free Alerts →')}
          </button>
        </div>
      </section>

    </div>
  );
};
