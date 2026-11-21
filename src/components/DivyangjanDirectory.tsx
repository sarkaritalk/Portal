import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Landmark, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  Info, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Activity, 
  Car, 
  Layers,
  Sparkles,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { 
  DIVYANGJAN_SUBCATEGORIES, 
  DIVYANGJAN_SCHEMES_DATA
} from '../data/divyangjanSchemes';
import { useLanguage } from '../context/LanguageContext';
import { DIVYANGJAN_EN, pickText, pickArray } from '../data/translations/directoryTranslations';

interface DivyangjanDirectoryProps {
  initialSubcategory?: string;
  onSelectArticle?: (slug: string) => void;
  onOpenEligibilityChecker?: () => void;
}

export const DivyangjanDirectory: React.FC<DivyangjanDirectoryProps> = ({
  initialSubcategory,
  onSelectArticle,
}) => {
  const { language, isHindi, isEnglish, isBilingual, pick } = useLanguage();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(initialSubcategory || 'all');
  const [levelFilter, setLevelFilter] = useState<'all' | 'Central' | 'Bihar' | 'Joint'>('all');
  const [applyModeFilter, setApplyModeFilter] = useState<'all' | 'Online' | 'Offline' | 'Both'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSchemeId, setExpandedSchemeId] = useState<string | null>(null);

  const filteredSchemes = useMemo(() => {
    return DIVYANGJAN_SCHEMES_DATA.filter(scheme => {
      if (selectedSubcategory !== 'all' && scheme.subcategoryId !== selectedSubcategory) {
        return false;
      }

      if (levelFilter !== 'all' && scheme.governmentLevel !== levelFilter) {
        return false;
      }

      if (applyModeFilter !== 'all') {
        if (applyModeFilter === 'Online' && scheme.applicationMode !== 'Online' && scheme.applicationMode !== 'Both') {
          return false;
        }
        if (applyModeFilter === 'Offline' && scheme.applicationMode !== 'Offline') {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const en = DIVYANGJAN_EN[scheme.id];
        const matchesName = scheme.nameHi.toLowerCase().includes(q) || scheme.nameEn.toLowerCase().includes(q);
        const matchesDesc = scheme.shortDescHi.toLowerCase().includes(q) || scheme.shortDescEn.toLowerCase().includes(q);
        const matchesDept = scheme.departmentHi.toLowerCase().includes(q) || scheme.departmentEn.toLowerCase().includes(q);
        const matchesBeneficiary = scheme.targetBeneficiariesHi.toLowerCase().includes(q) || scheme.targetBeneficiariesEn.toLowerCase().includes(q);
        const matchesSubcat = scheme.subcategoryNameHi.toLowerCase().includes(q) || scheme.subcategoryNameEn.toLowerCase().includes(q);
        const matchesAssistance =
          scheme.financialAssistance.toLowerCase().includes(q) ||
          (en?.financialAssistanceEn.toLowerCase().includes(q) ?? false);
        const matchesDocs =
          scheme.documents.some(d => d.toLowerCase().includes(q)) ||
          (en?.documentsEn.some(d => d.toLowerCase().includes(q)) ?? false);
        const matchesElig =
          scheme.eligibility.some(e => e.toLowerCase().includes(q)) ||
          (en?.eligibilityEn.some(e => e.toLowerCase().includes(q)) ?? false);

        if (!matchesName && !matchesDesc && !matchesDept && !matchesBeneficiary && !matchesSubcat && !matchesAssistance && !matchesDocs && !matchesElig) {
          return false;
        }
      }

      return true;
    });
  }, [selectedSubcategory, levelFilter, applyModeFilter, searchQuery]);

  const getSubcategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4 shrink-0" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 shrink-0" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 shrink-0" />;
      case 'Activity': return <Activity className="w-4 h-4 shrink-0" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 shrink-0" />;
      case 'Car': return <Car className="w-4 h-4 shrink-0" />;
      default: return <Layers className="w-4 h-4 shrink-0" />;
    }
  };

  const getLevelBadge = (level: 'Central' | 'Bihar' | 'Joint') => {
    switch (level) {
      case 'Central':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
            <Landmark className="w-3 h-3 text-blue-700" />
            <span>{pick('केंद्र सरकार', 'Central Govt', 'केंद्र सरकार (Central)')}</span>
          </span>
        );
      case 'Bihar':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-100 text-orange-800 border border-orange-200">
            <MapPin className="w-3 h-3 text-orange-600" />
            <span>{pick('बिहार सरकार', 'Bihar Govt', 'बिहार सरकार (Bihar)')}</span>
          </span>
        );
      case 'Joint':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-200">
            <Sparkles className="w-3 h-3 text-purple-600" />
            <span>{pick('संयुक्त योजना (NSAP)', 'Joint Scheme (NSAP)', 'संयुक्त योजना (Joint / NSAP)')}</span>
          </span>
        );
    }
  };

  const activeSubcatObj = DIVYANGJAN_SUBCATEGORIES.find(s => s.id === selectedSubcategory) || DIVYANGJAN_SUBCATEGORIES[0];

  return (
    <div className="bg-slate-50 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* ============================================================
            HERO / BANNER
           ============================================================ */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white p-6 sm:p-10 shadow-xl border border-indigo-900/50">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/80 border border-indigo-700 text-indigo-200 text-xs font-bold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>
                {pick(
                  'दिव्यांगजन कल्याण एवं सशक्तिकरण पोर्टल • RPwD अधिनियम 2016',
                  'Divyangjan Welfare & Empowerment Portal • RPwD Act 2016 Compliant',
                  'दिव्यांगजन कल्याण एवं सशक्तिकरण पोर्टल • RPwD Act 2016 Compliant'
                )}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {isEnglish ? 'Divyangjan Schemes & Financial Assistance' : 'दिव्यांगजन योजनाएं एवं आर्थिक सहायता'}
              {isBilingual && (
                <span className="block text-base sm:text-xl font-bold text-indigo-200 mt-1">
                  (Divyangjan Schemes & Financial Assistance)
                </span>
              )}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {pick(
                'दिव्यांग पेंशन, विशिष्ट पहचान पत्र (UDID स्वावलंबन कार्ड), राष्ट्रीय छात्रवृत्ति, एडिप (ADIP/ALIMCO) निःशुल्क सहायक उपकरण, संबल मोटर चालित ट्राइसाइकिल, रियायती स्वरोजगार ऋण एवं रियायती यात्रा पास की पूरी प्रमाणित जानकारी।',
                'Verified details on Disability Pension, Unique Disability ID (UDID Swavlamban Card), national scholarships, ADIP/ALIMCO free assistive devices, Sambal motorized tricycles, concessional self-employment loans, and travel concession passes.'
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">{pick('12 प्रमुख कल्याणकारी योजनाएं', '12 Key Welfare Schemes')}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/15">
                <Landmark className="w-4 h-4 text-blue-300" />
                <span className="font-semibold">{pick('केंद्र एवं बिहार सरकार प्रमाणित', 'Verified Central & Bihar Schemes')}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/15">
                <ExternalLink className="w-4 h-4 text-amber-300" />
                <span className="font-semibold">{pick('आधिकारिक .gov.in पोर्टल्स', 'Official .gov.in Portals')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            SUBCATEGORY TABS BAR
           ============================================================ */}
        <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wider">
              {pick('विषयवार उप-श्रेणियां:', 'Select Subcategory:', 'विषयवार उप-श्रेणियां (Select Subcategory):')}
            </span>
            <span className="text-xs font-bold text-indigo-600">
              {pick(`कुल ${DIVYANGJAN_SCHEMES_DATA.length} योजनाएं उपलब्ध`, `${DIVYANGJAN_SCHEMES_DATA.length} Schemes Available`)}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
            {DIVYANGJAN_SUBCATEGORIES.map(subcat => {
              const isActive = selectedSubcategory === subcat.id;
              return (
                <button
                  key={subcat.id}
                  onClick={() => setSelectedSubcategory(subcat.id)}
                  className={`p-2.5 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-[1.02]'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className={`p-1 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-white text-indigo-700 shadow-2xs'}`}>
                      {getSubcategoryIcon(subcat.icon)}
                    </div>
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-900'
                    }`}>
                      {subcat.count}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold block leading-tight line-clamp-2">
                      {isEnglish ? subcat.nameEn : subcat.nameHi}
                    </span>
                    {isBilingual && (
                      <span className={`text-[10px] block truncate mt-0.5 ${isActive ? 'text-indigo-100' : 'text-slate-500'}`}>
                        {subcat.nameEn}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            SEARCH & FILTERS BAR
           ============================================================ */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={pick('योजना, पेंशन, UDID, स्कॉलरशिप, उपकरण या दस्तावेज खोजें...', 'Search schemes, pension, UDID, scholarship, devices or documents...')}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Government Level Filter */}
            <div className="md:col-span-3">
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value as 'all' | 'Central' | 'Bihar' | 'Joint')}
                className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="all">{pick('सभी सरकारें', 'All Government Levels')}</option>
                <option value="Central">{pick('केंद्र सरकार', 'Central Government')}</option>
                <option value="Bihar">{pick('बिहार सरकार', 'Bihar State')}</option>
                <option value="Joint">{pick('संयुक्त / प्रायोजित', 'Joint / Centrally Sponsored')}</option>
              </select>
            </div>

            {/* Application Mode Filter */}
            <div className="md:col-span-3">
              <select
                value={applyModeFilter}
                onChange={(e) => setApplyModeFilter(e.target.value as 'all' | 'Online' | 'Offline' | 'Both')}
                className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="all">{pick('सभी आवेदन माध्यम', 'All Application Modes')}</option>
                <option value="Online">{pick('केवल ऑनलाइन', 'Online Apply Only')}</option>
                <option value="Offline">{pick('केवल ऑफलाइन / शिविर', 'Offline / Camps Only')}</option>
              </select>
            </div>

          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>
                {pick('दिखाई जा रही योजनाएं:', 'Schemes shown:')}{' '}
                <strong className="text-slate-800">{filteredSchemes.length}</strong>
              </span>
              {selectedSubcategory !== 'all' && (
                <span className="bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-md border border-indigo-200">
                  {pickText(language, activeSubcatObj.nameHi, activeSubcatObj.nameEn)}
                </span>
              )}
            </div>

            {(selectedSubcategory !== 'all' || levelFilter !== 'all' || applyModeFilter !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedSubcategory('all');
                  setLevelFilter('all');
                  setApplyModeFilter('all');
                  setSearchQuery('');
                }}
                className="text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer"
              >
                {pick('सभी फिल्टर हटाएं', 'Reset Filters')}
              </button>
            )}
          </div>
        </div>

        {/* ============================================================
            SCHEMES CARDS LIST
           ============================================================ */}
        {filteredSchemes.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              {pick('कोई दिव्यांगजन योजना नहीं मिली', 'No Divyangjan Schemes Found')}
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              {pick(
                'कृपया खोज शब्द बदलें या फिल्टर रीसेट करें। आप सभी योजनाएं देखने के लिए रीसेट बटन पर क्लिक कर सकते हैं।',
                'Please change your search query or reset filters to view all available schemes.'
              )}
            </p>
            <button
              onClick={() => {
                setSelectedSubcategory('all');
                setLevelFilter('all');
                setApplyModeFilter('all');
                setSearchQuery('');
              }}
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              {pick('सभी योजनाएं देखें', 'View All Schemes')}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSchemes.map((scheme) => {
              const isExpanded = expandedSchemeId === scheme.id;
              const en = DIVYANGJAN_EN[scheme.id];
              const minDisabilityLabel = pickText(language, scheme.minDisabilityPercentage, en?.minDisabilityEn || scheme.minDisabilityPercentage);
              const financialAidLabel = pickText(language, scheme.financialAssistance, en?.financialAssistanceEn || scheme.financialAssistance);
              const descText = isHindi ? scheme.shortDescHi : isEnglish ? scheme.shortDescEn : scheme.shortDescHi;
              const deptLabel = pickText(language, scheme.departmentHi, scheme.departmentEn);
              const applyLabel = pickText(language, scheme.officialApplyLabel, en?.officialApplyLabelEn || 'Visit Official Portal', 'slash');
              const statusLabel = scheme.statusLabel
                ? pickText(language, scheme.statusLabel, en?.statusLabelEn || 'Check Status')
                : pick('स्थिति जांचें', 'Check Status');
              const eligibilityList = pickArray(language, scheme.eligibility, en?.eligibilityEn);
              const docsList = pickArray(language, scheme.documents, en?.documentsEn);
              const targetLabel = pickText(language, scheme.targetBeneficiariesHi, scheme.targetBeneficiariesEn);
              const modeLabel = pickText(language, scheme.applicationModeLabel, en?.applicationModeLabelEn || scheme.applicationMode);

              return (
                <div
                  key={scheme.id}
                  className={`bg-white rounded-2xl border transition-all ${
                    isExpanded 
                      ? 'border-indigo-400 shadow-md ring-2 ring-indigo-50' 
                      : 'border-slate-200 hover:border-indigo-300 hover:shadow-xs'
                  }`}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {getLevelBadge(scheme.governmentLevel)}
                          
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            {pickText(language, scheme.subcategoryNameHi, scheme.subcategoryNameEn)}
                          </span>

                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {pick('दिव्यांगता:', 'Disability:')} {minDisabilityLabel}
                          </span>

                          {scheme.isPopular && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-white">
                              ★ {pick('लोकप्रिय', 'Popular')}
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                          {isEnglish ? scheme.nameEn : scheme.nameHi}
                        </h3>
                        {isBilingual && (
                          <p className="text-xs sm:text-sm font-semibold text-slate-500">
                            ({scheme.nameEn})
                          </p>
                        )}
                      </div>

                      <div className="sm:text-right shrink-0">
                        <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-2.5 text-left sm:text-right">
                          <span className="text-[10px] font-bold text-emerald-700 block uppercase tracking-wide">
                            {pick('वित्तीय सहायता / लाभ', 'Financial Aid / Benefits')}
                          </span>
                          <span className="text-xs sm:text-sm font-black text-emerald-950 block">
                            {financialAidLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                      {descText}
                    </p>
                    {isBilingual && scheme.shortDescEn && (
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        {scheme.shortDescEn}
                      </p>
                    )}

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <Landmark className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-semibold text-slate-700">{pick('विभाग / मंत्रालय:', 'Department / Ministry:')}</span>
                      <span className="truncate">{deptLabel}</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                      <div className="flex flex-wrap items-center gap-2">
                        {scheme.officialApplyUrl && (
                          <a
                            href={scheme.officialApplyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-colors"
                          >
                            <span>{applyLabel}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {scheme.statusUrl && (
                          <a
                            href={scheme.statusUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                          >
                            <Clock className="w-3.5 h-3.5 text-slate-500" />
                            <span>{statusLabel}</span>
                          </a>
                        )}

                        {scheme.articleSlug && onSelectArticle && (
                          <button
                            onClick={() => onSelectArticle(scheme.articleSlug!)}
                            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                          >
                            <FileText className="w-3.5 h-3.5 text-indigo-600" />
                            <span>{pick('मार्गदर्शिका पढ़ें', 'Read Guide')}</span>
                          </button>
                        )}
                      </div>

                      <button
                        onClick={() => setExpandedSchemeId(isExpanded ? null : scheme.id)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer ml-auto"
                      >
                        <span>
                          {isExpanded
                            ? pick('कम विवरण देखें', 'Show Less')
                            : pick('पात्रता व दस्तावेज विवरण', 'Eligibility & Documents')}
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-slate-200 bg-slate-50/80 p-4 sm:p-6 rounded-b-2xl space-y-5 animate-in fade-in duration-150">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5">
                          <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 border-b border-slate-100 pb-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>{pick('पात्रता शर्तें', 'Eligibility Criteria')}</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {eligibilityList.map((el, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                <span>{el}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5">
                          <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 border-b border-slate-100 pb-2">
                            <FileText className="w-4 h-4 text-indigo-600" />
                            <span>{pick('आवश्यक दस्तावेज', 'Required Documents')}</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {docsList.map((doc, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                <span>{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="bg-white p-3 rounded-xl border border-slate-200">
                          <span className="font-bold text-slate-500 block text-[11px]">{pick('लक्षित लाभार्थी:', 'Target Beneficiaries:')}</span>
                          <span className="font-semibold text-slate-800 mt-0.5 block">{targetLabel}</span>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-slate-200">
                          <span className="font-bold text-slate-500 block text-[11px]">{pick('आवेदन का माध्यम:', 'Application Mode:')}</span>
                          <span className="font-semibold text-slate-800 mt-0.5 block">{modeLabel}</span>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-slate-200">
                          <span className="font-bold text-slate-500 block text-[11px]">{pick('सत्यापन स्थिति:', 'Verification Status:')}</span>
                          <span className="inline-flex items-center gap-1 font-bold text-emerald-700 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{pick(`आधिकारिक रिकॉर्ड से सत्यापित (${scheme.verifiedDate})`, `Verified from Official Records (${scheme.verifiedDate})`)}</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-500 border-t border-slate-200">
                        <span>
                          {pick('सत्यापित आधिकारिक पोर्टल स्रोत:', 'Verified Official Source:')}{' '}
                          <a href={scheme.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-mono">{scheme.sourceUrl}</a>
                        </span>
                        <span className="text-slate-400">
                          {pick('SARKARI TALK स्वतंत्र नागरिक सूचना मंच', 'SARKARI TALK Independent Citizen Information Portal')}
                        </span>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

        {/* ============================================================
            RPwD ACT 2016 CITIZEN RIGHTS & HELPLINE BOX
           ============================================================ */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
                <AlertCircle className="w-3.5 h-3.5 text-amber-300" />
                <span>{pick('नागरिक अधिकार • RPwD अधिनियम 2016', 'Citizen Rights • Rights of Persons with Disabilities Act (RPwD 2016)')}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                {pick('दिव्यांगजनों के 21 प्रकार एवं कानूनी अधिकार', '21 Recognized Disabilities & Legal Rights')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {pick(
                  'RPwD अधिनियम 2016 के तहत 21 प्रकार की दिव्यांगताओं को मान्यता प्राप्त है। सरकारी नौकरियों में 4% आरक्षण, उच्च शिक्षण संस्थानों में 5% आरक्षण, बाधा रहित वातावरण एवं भेदभाव से सुरक्षा प्रत्येक नागरिक का कानूनी अधिकार है।',
                  'Under the RPwD Act 2016, 21 benchmark disabilities are officially recognized. 4% reservation in government jobs, 5% reservation in higher education institutions, barrier-free accessibility, and protection against discrimination are guaranteed legal rights.'
                )}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <a
                href="https://www.swavlambancard.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-indigo-950 font-bold text-xs hover:bg-slate-100 transition-colors shadow-sm"
              >
                <span>{pick('UDID स्वावलंबन पोर्टल खोलें', 'Open UDID Swavlamban Portal')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://disabilityaffairs.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-800 hover:bg-indigo-700 text-white font-bold text-xs transition-colors border border-indigo-700"
              >
                <span>{pick('दिव्यांगजन सशक्तिकरण विभाग (DEPwD)', 'Dept. of Empowerment of PwD (DEPwD)')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
