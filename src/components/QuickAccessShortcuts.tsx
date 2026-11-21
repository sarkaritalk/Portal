import React from 'react';
import { 
  Tractor, 
  Home, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  ShieldCheck, 
  Activity, 
  HardHat, 
  Building2, 
  Landmark, 
  Wheat, 
  BadgeCheck, 
  SunMedium, 
  Trees, 
  Car, 
  Globe, 
  Layers,
  MapPin,
  ArrowRight,
  FileCheck2,
  FileText,
  Clock,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { CENTRAL_CATEGORIES } from '../data/centralSchemes';
import { useLanguage } from '../context/LanguageContext';

interface QuickAccessShortcutsProps {
  onNavigate: (tab: string, param?: string) => void;
  onOpenEligibilityChecker: () => void;
  onOpenStatusTracker: () => void;
}

export const QuickAccessShortcuts: React.FC<QuickAccessShortcutsProps> = ({
  onNavigate,
  onOpenEligibilityChecker,
  onOpenStatusTracker
}) => {
  const { isHindi, isEnglish, isBilingual, pick } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tractor': return <Tractor className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'HardHat': return <HardHat className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Wheat': return <Wheat className="w-5 h-5" />;
      case 'BadgeCheck': return <BadgeCheck className="w-5 h-5" />;
      case 'SunMedium': return <SunMedium className="w-5 h-5" />;
      case 'Trees': return <Trees className="w-5 h-5" />;
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      'text-emerald-700 bg-emerald-50 hover:border-emerald-300',
      'text-blue-700 bg-blue-50 hover:border-blue-300',
      'text-indigo-700 bg-indigo-50 hover:border-indigo-300',
      'text-purple-700 bg-purple-50 hover:border-purple-300',
      'text-rose-700 bg-rose-50 hover:border-rose-300',
      'text-amber-700 bg-amber-50 hover:border-amber-300',
      'text-red-700 bg-red-50 hover:border-red-300',
      'text-orange-700 bg-orange-50 hover:border-orange-300',
      'text-teal-700 bg-teal-50 hover:border-teal-300',
      'text-cyan-700 bg-cyan-50 hover:border-cyan-300',
      'text-yellow-700 bg-yellow-50 hover:border-yellow-300',
      'text-sky-700 bg-sky-50 hover:border-sky-300',
      'text-lime-700 bg-lime-50 hover:border-lime-300',
      'text-green-700 bg-green-50 hover:border-green-300',
      'text-violet-700 bg-violet-50 hover:border-violet-300',
      'text-slate-800 bg-slate-100 hover:border-slate-400',
      'text-slate-700 bg-slate-50 hover:border-slate-300'
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="bg-white border-b border-slate-200 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            SECTION KICKER & TITLE
           ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>{pick('त्वरित पहुँच केंद्र', 'Quick Access Hub', 'त्वरित पहुँच • Quick Access Hub')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {isHindi
              ? 'तुरंत उपयोगी सेवाएं एवं मुख्य श्रेणियां'
              : isEnglish
                ? 'Quick Access Government Services & Major Categories'
                : 'तुरंत उपयोगी सेवाएं एवं मुख्य श्रेणियां'}
            {isBilingual && (
              <span className="block text-base sm:text-lg font-bold text-slate-500 mt-0.5">
                (Quick Access Government Services & Major Categories)
              </span>
            )}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {pick(
              'सरकारी योजनाओं, ऑनलाइन आवेदनों और नागरिक सेवाओं तक बिना भटके तुरंत पहुँचें।',
              'Reach government schemes, online applications, and citizen services instantly without confusion.'
            )}
          </p>
        </div>

        {/* ============================================================
            PART 1: MAIN GOVERNMENT SECTIONS (BIHAR, CENTRAL & DIVYANGJAN)
           ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          
          {/* Card A: Bihar Government Schemes */}
          <div 
            onClick={() => onNavigate('bihar-schemes')}
            className="group relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50/50 to-white border-2 border-orange-200 hover:border-orange-500 rounded-3xl p-5 sm:p-7 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600 text-white text-[11px] font-bold shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 fill-current" />
                  <span>{pick('राज्य स्तरीय सेवा', 'State Level', 'राज्य स्तरीय सेवा • State Level')}</span>
                </span>
                <span className="text-xs font-black text-orange-800 bg-orange-100/80 px-2.5 py-1 rounded-lg">
                  {pick('12 मुख्य श्रेणियां', '12 Main Categories')}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  {isEnglish ? 'Bihar Government Schemes' : 'बिहार सरकार की योजनाएं'}
                </h3>
                {isBilingual && (
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                    (Bihar Government Schemes & RTPS Services)
                  </p>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {pick(
                  'बिहार लोक सेवाओं का अधिकार (RTPS - जाति, आय, निवास, EWS), बिहार भूमि जमाबंदी व दाखिल-खारिज, स्टूडेंट क्रेडिट कार्ड (MNSSBY), कन्या उत्थान एवं वृद्धजन पेंशन।',
                  'Bihar RTPS certificates (Caste, Income, Residence, EWS), Bihar Bhumi Jamabandi & mutation, Student Credit Card (MNSSBY), Kanya Utthan, and Old Age Pension.'
                )}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px]">
                <span className="bg-white/80 border border-orange-200 px-2 py-0.5 rounded-md font-semibold text-orange-900">RTPS ServicePlus</span>
                <span className="bg-white/80 border border-orange-200 px-2 py-0.5 rounded-md font-semibold text-orange-900">{pick('बिहार भूमि', 'Bihar Bhumi')}</span>
                <span className="bg-white/80 border border-orange-200 px-2 py-0.5 rounded-md font-semibold text-orange-900">{pick('मेधासॉफ्ट', 'MedhaSoft')}</span>
                <span className="bg-white/80 border border-orange-200 px-2 py-0.5 rounded-md font-semibold text-orange-900">{pick('ई-लाभार्थी', 'e-Labharthi')}</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-orange-200/60 flex items-center justify-between text-xs font-bold text-orange-700">
              <span>{pick('बिहार सरकारी योजनाएं खोलें', 'Open Bihar Services', 'बिहार सरकारी योजनाएं खोलें / Open Bihar Services')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
            </div>
          </div>

          {/* Card B: Central Government Schemes */}
          <div 
            onClick={() => onNavigate('central-schemes')}
            className="group relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50/50 to-white border-2 border-blue-200 hover:border-blue-500 rounded-3xl p-5 sm:p-7 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-700 text-white text-[11px] font-bold shadow-2xs">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>{pick('अखिल भारतीय सेवा', 'All India National', 'अखिल भारतीय सेवा • All India National')}</span>
                </span>
                <span className="text-xs font-black text-blue-800 bg-blue-100/80 px-2.5 py-1 rounded-lg">
                  {pick('17 मुख्य श्रेणियां', '17 Main Categories')}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                  {isEnglish ? 'Central Government Schemes' : 'केंद्र सरकार की योजनाएं'}
                </h3>
                {isBilingual && (
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                    (Central Government Schemes & Services)
                  </p>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {pick(
                  'भारत सरकार के सभी मंत्रालयों की योजनाएं: पीएम किसान (₹6,000), आयुष्मान भारत (₹5 लाख मुफ्त इलाज), पीएम आवास, मुद्रा ऋण, ई-श्रम, पीएम सूर्य घर सोलर सब्सिडी एवं छात्रवृत्ति।',
                  'Schemes across Central Ministries: PM-KISAN (₹6,000), Ayushman Bharat (₹5 Lakh free treatment), PM Awas, MUDRA Loan, e-Shram, PM Surya Ghar solar subsidy & scholarships.'
                )}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px]">
                <span className="bg-white/80 border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-900">PM-KISAN</span>
                <span className="bg-white/80 border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-900">{pick('PM-JAY आयुष्मान', 'PM-JAY Ayushman')}</span>
                <span className="bg-white/80 border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-900">{pick('PMAY आवास', 'PMAY Housing')}</span>
                <span className="bg-white/80 border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-900">myScheme</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-blue-200/60 flex items-center justify-between text-xs font-bold text-blue-700">
              <span>{pick('केंद्रीय योजनाएं देखें', 'View Central Schemes', 'केंद्रीय योजनाएं देखें / View Central Schemes')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
            </div>
          </div>

          {/* Card C: Divyangjan Schemes & Financial Assistance */}
          <div 
            onClick={() => onNavigate('divyangjan-schemes')}
            className="group relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50/40 to-white border-2 border-indigo-200 hover:border-indigo-500 rounded-3xl p-5 sm:p-7 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-700 text-white text-[11px] font-bold shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{pick('दिव्यांगजन विशेष', 'Divyangjan Hub', 'दिव्यांगजन विशेष • Divyangjan Hub')}</span>
                </span>
                <span className="text-xs font-black text-indigo-800 bg-indigo-100/80 px-2.5 py-1 rounded-lg">
                  {pick('6 उप-श्रेणियां (12 योजनाएं)', '6 Subcategories (12 Schemes)')}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {isEnglish ? 'Divyangjan Schemes & Assistance' : 'दिव्यांगजन योजनाएं एवं सहायता'}
                </h3>
                {isBilingual && (
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                    (Divyangjan Schemes & Financial Assistance)
                  </p>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {pick(
                  'UDID स्वावलंबन कार्ड, दिव्यांग पेंशन (₹400-₹500 DBT), विवाह प्रोत्साहन (₹1 लाख), ADIP/एलिम्को निःशुल्क सहायक उपकरण, संबल मोटर चालित ट्राइसाइकिल एवं रियायती ऋण।',
                  'UDID Swavlamban Card, Disability Pension (₹400-₹500 DBT), Marriage Incentive (₹1 Lakh), ADIP/ALIMCO free assistive devices, Sambal motorized tricycles & concessional loans.'
                )}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px]">
                <span className="bg-white/80 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold text-indigo-900">{pick('UDID स्वावलंबन', 'UDID Swavlamban')}</span>
                <span className="bg-white/80 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold text-indigo-900">{pick('दिव्यांग पेंशन', 'Disability Pension')}</span>
                <span className="bg-white/80 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold text-indigo-900">{pick('ADIP उपकरण', 'ADIP Devices')}</span>
                <span className="bg-white/80 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold text-indigo-900">{pick('NSP स्कॉलरशिप', 'NSP Scholarship')}</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-indigo-200/60 flex items-center justify-between text-xs font-bold text-indigo-700">
              <span>{pick('दिव्यांगजन योजनाएं खोलें', 'Open Divyangjan Hub', 'दिव्यांगजन योजनाएं खोलें / Open Divyangjan Hub')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
            </div>
          </div>

        </div>

        {/* ============================================================
            PART 2: QUICK ACTION UTILITY BUTTONS
           ============================================================ */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-3 sm:p-4 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            
            {/* 1. All Schemes */}
            <button
              onClick={() => onNavigate('central-schemes')}
              className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all text-left flex flex-col justify-between cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700 w-fit group-hover:bg-slate-900 group-hover:text-white transition-colors mb-1.5">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block group-hover:text-red-600 transition-colors">
                  {isEnglish ? 'All Schemes' : 'सभी योजनाएं'}
                </span>
                {isBilingual && <span className="text-[10px] text-slate-500 font-medium">All Schemes</span>}
              </div>
            </button>

            {/* 2. Online Applications */}
            <button
              onClick={() => onNavigate('central-schemes')}
              className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition-all text-left flex flex-col justify-between cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-colors mb-1.5">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block group-hover:text-emerald-700 transition-colors">
                  {isEnglish ? 'Online Apply' : 'ऑनलाइन आवेदन'}
                </span>
                {isBilingual && <span className="text-[10px] text-slate-500 font-medium">Online Apply</span>}
              </div>
            </button>

            {/* 3. Check Eligibility */}
            <button
              onClick={onOpenEligibilityChecker}
              className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 hover:border-orange-500 hover:shadow-xs transition-all text-left flex flex-col justify-between cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-orange-600 text-white w-fit shadow-2xs mb-1.5">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-black text-orange-900 block">
                  {isEnglish ? 'Check Eligibility' : 'पात्रता जांचें'}
                </span>
                {isBilingual && <span className="text-[10px] text-orange-700 font-bold">Check Eligibility</span>}
              </div>
            </button>

            {/* 4. Track Application Status */}
            <button
              onClick={onOpenStatusTracker}
              className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all text-left flex flex-col justify-between cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700 w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors mb-1.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block group-hover:text-blue-700 transition-colors">
                  {isEnglish ? 'Track Status' : 'आवेदन की स्थिति'}
                </span>
                {isBilingual && <span className="text-[10px] text-slate-500 font-medium">Track Status</span>}
              </div>
            </button>

            {/* 5. Required Documents */}
            <button
              onClick={() => onNavigate('bihar-schemes')}
              className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 hover:border-purple-400 hover:shadow-xs transition-all text-left flex flex-col justify-between cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-purple-50 text-purple-700 w-fit group-hover:bg-purple-600 group-hover:text-white transition-colors mb-1.5">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors">
                  {isEnglish ? 'Documents' : 'जरूरी दस्तावेज'}
                </span>
                {isBilingual && <span className="text-[10px] text-slate-500 font-medium">Documents</span>}
              </div>
            </button>

            {/* 6. Government Portals */}
            <button
              onClick={() => onNavigate('portals')}
              className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xs transition-all text-left flex flex-col justify-between cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700 w-fit group-hover:bg-amber-600 group-hover:text-white transition-colors mb-1.5">
                <Landmark className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block group-hover:text-amber-700 transition-colors">
                  {isEnglish ? 'Portals Hub' : 'सरकारी सेवाएं'}
                </span>
                {isBilingual && <span className="text-[10px] text-slate-500 font-medium">Portals Hub</span>}
              </div>
            </button>

          </div>
        </div>

        {/* ============================================================
            PART 3: CENTRAL GOVERNMENT CATEGORY SHORTCUTS (17 TILES)
           ============================================================ */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {isHindi
                  ? 'केंद्रीय योजनाएं: विषयवार श्रेणियां'
                  : isEnglish
                    ? 'Central Schemes: Subject Categories'
                    : 'केंद्रीय योजनाएं: विषयवार श्रेणियां'}
                {isBilingual && (
                  <span className="text-slate-500 font-normal text-xs sm:text-sm ml-1.5">
                    / Central Category Shortcuts
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-500">
                {pick('सीधे अपनी आवश्यकता अनुसार श्रेणी पर क्लिक करें:', 'Click directly on a category matching your requirement:')}
              </p>
            </div>
            <button
              onClick={() => onNavigate('central-schemes')}
              className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>{pick('सभी 17 श्रेणियां खोलें', 'Open All 17 Categories')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {CENTRAL_CATEGORIES.map((cat, idx) => {
              const colorClass = getCategoryColor(idx);

              return (
                <div
                  key={cat.id}
                  onClick={() => onNavigate('central-schemes', cat.id)}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all p-3.5 flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${colorClass}`}>
                      {getCategoryIcon(cat.icon)}
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                        {isEnglish ? cat.nameEn : cat.nameHi}
                      </h4>
                      {isBilingual && (
                        <p className="text-[10px] font-semibold text-slate-400 truncate mt-0.5">
                          {cat.nameEn}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px]">
                    <span className="text-slate-500 font-medium truncate">
                      {pick(`${cat.count} योजनाएं`, `${cat.count} Schemes`)}
                    </span>
                    <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
