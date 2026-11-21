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
  Tractor, 
  Home, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Activity, 
  HardHat, 
  Building2, 
  Wheat, 
  BadgeCheck, 
  SunMedium, 
  Trees, 
  Car, 
  Globe, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { 
  CENTRAL_CATEGORIES, 
  CENTRAL_SCHEMES_DATA
} from '../data/centralSchemes';
import { useLanguage } from '../context/LanguageContext';
import { 
  CENTRAL_CATEGORIES_EN, 
  CENTRAL_SCHEMES_EN, 
  pickText, 
  pickArray 
} from '../data/translations/directoryTranslations';

interface CentralSchemesDirectoryProps {
  onSelectArticle?: (slug: string) => void;
  initialCategory?: string;
  onOpenEligibilityChecker?: () => void;
}

export const CentralSchemesDirectory: React.FC<CentralSchemesDirectoryProps> = ({
  onSelectArticle,
  initialCategory,
  onOpenEligibilityChecker
}) => {
  const { language, isHindi, isEnglish, isBilingual, pick } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [schemeTypeFilter, setSchemeTypeFilter] = useState<'all' | 'Central Sector' | 'Centrally Sponsored (Joint)'>('all');
  const [applyModeFilter, setApplyModeFilter] = useState<'all' | 'Online' | 'Offline' | 'Both'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSchemeId, setExpandedSchemeId] = useState<string | null>(null);

  // Filter schemes across Hindi & English
  const filteredSchemes = useMemo(() => {
    return CENTRAL_SCHEMES_DATA.filter(scheme => {
      if (selectedCategory !== 'all' && scheme.categoryId !== selectedCategory) {
        return false;
      }

      if (schemeTypeFilter !== 'all' && scheme.schemeType !== schemeTypeFilter) {
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
        const en = CENTRAL_SCHEMES_EN[scheme.id];
        const matchesName = scheme.nameHi.toLowerCase().includes(q) || scheme.nameEn.toLowerCase().includes(q);
        const matchesDesc = scheme.shortDescHi.toLowerCase().includes(q) || scheme.shortDescEn.toLowerCase().includes(q);
        const matchesMinistry = scheme.ministryHi.toLowerCase().includes(q) || scheme.ministryEn.toLowerCase().includes(q);
        const matchesBeneficiary = scheme.targetBeneficiariesHi.toLowerCase().includes(q) || scheme.targetBeneficiariesEn.toLowerCase().includes(q);
        const matchesCategory = scheme.categoryNameHi.toLowerCase().includes(q) || scheme.categoryNameEn.toLowerCase().includes(q);
        const matchesBenefits =
          scheme.benefitsHi.toLowerCase().includes(q) ||
          scheme.benefitsEn.toLowerCase().includes(q);
        const matchesDocs =
          scheme.documents.some(d => d.toLowerCase().includes(q)) ||
          (en?.documentsEn.some(d => d.toLowerCase().includes(q)) ?? false);

        if (!matchesName && !matchesDesc && !matchesMinistry && !matchesBeneficiary && !matchesCategory && !matchesBenefits && !matchesDocs) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, schemeTypeFilter, applyModeFilter, searchQuery]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tractor': return <Tractor className="w-4 h-4 shrink-0" />;
      case 'Home': return <Home className="w-4 h-4 shrink-0" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 shrink-0" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 shrink-0" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4 shrink-0" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 shrink-0" />;
      case 'Activity': return <Activity className="w-4 h-4 shrink-0" />;
      case 'HardHat': return <HardHat className="w-4 h-4 shrink-0" />;
      case 'Building2': return <Building2 className="w-4 h-4 shrink-0" />;
      case 'Landmark': return <Landmark className="w-4 h-4 shrink-0" />;
      case 'Wheat': return <Wheat className="w-4 h-4 shrink-0" />;
      case 'BadgeCheck': return <BadgeCheck className="w-4 h-4 shrink-0" />;
      case 'SunMedium': return <SunMedium className="w-4 h-4 shrink-0" />;
      case 'Trees': return <Trees className="w-4 h-4 shrink-0" />;
      case 'Car': return <Car className="w-4 h-4 shrink-0" />;
      case 'Globe': return <Globe className="w-4 h-4 shrink-0" />;
      default: return <Layers className="w-4 h-4 shrink-0" />;
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSchemeTypeFilter('all');
    setApplyModeFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            SECTION HEADER
           ============================================================ */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold mb-3 shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            {!isEnglish && <span>भारत सरकार की योजनाएं</span>}
            {isBilingual && <span>•</span>}
            {!isHindi && <span>Central Government Schemes</span>}
            <span className="text-blue-400">|</span>
            <span>{pick('राष्ट्रीय निर्देशिका', 'National Directory')}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {isEnglish ? 'Central Government Schemes & National Services' : 'केंद्र सरकार की योजनाएं'}
            {isBilingual && (
              <span className="block text-lg sm:text-xl font-bold text-slate-600 mt-1">
                (Central Government Schemes & National Services)
              </span>
            )}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {!isEnglish && (
              <span>
                भारत सरकार के सभी मंत्रालयों की कल्याणकारी योजनाओं, पात्रता, लाभ राशि, आवश्यक दस्तावेज एवं आधिकारिक सरकारी पोर्टलों की प्रामाणिक जानकारी।
              </span>
            )}
            {isEnglish && (
              <span>
                Authentic directory of Central Government welfare schemes, eligibility rules, verified benefits, required documents, and official portal links.
              </span>
            )}
            {isBilingual && (
              <span className="block text-xs sm:text-sm text-slate-500 mt-0.5">
                (Authentic directory of Central Government welfare schemes, verified benefits, required documents, and official portal links.)
              </span>
            )}
          </p>

          {onOpenEligibilityChecker && (
            <div className="mt-4">
              <button
                onClick={onOpenEligibilityChecker}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <span>{pick('पात्रता जांचें टूल खोलें', 'Open Check Eligibility Tool', 'पात्रता जांचें टूल खोलें / Open Check Eligibility Tool')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* ============================================================
            SEARCH & CONTROLS BAR
           ============================================================ */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={pick('योजना, मंत्रालय या कीवर्ड खोजें...', 'Search schemes, ministry, or keywords...', 'योजना, मंत्रालय या कीवर्ड खोजें (Search schemes, ministry, or keywords)...')}
                className="w-full pl-11 pr-10 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                  title={pick('खोज साफ़ करें', 'Clear search')}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter 1: Scheme Type */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0 overflow-x-auto max-w-full">
              <button
                onClick={() => setSchemeTypeFilter('all')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  schemeTypeFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {pick('सभी प्रकार', 'All Types')}
              </button>
              <button
                onClick={() => setSchemeTypeFilter('Central Sector')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  schemeTypeFilter === 'Central Sector'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title={pick('100% केंद्र सरकार द्वारा वित्तपोषित योजनाएं', '100% funded by the Central Government')}
              >
                {pick('केंद्रीय क्षेत्र (100%)', '100% Central Sector', 'केंद्रीय क्षेत्र (100% Central)')}
              </button>
              <button
                onClick={() => setSchemeTypeFilter('Centrally Sponsored (Joint)')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  schemeTypeFilter === 'Centrally Sponsored (Joint)'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title={pick('केंद्र एवं राज्य सरकारों द्वारा संयुक्त रूप से संचालित', 'Jointly implemented by Central and State Governments')}
              >
                {pick('केंद्र-राज्य संयुक्त', 'Joint (Central-State)', 'केंद्र-राज्य संयुक्त (Joint)')}
              </button>
            </div>

            {/* Filter 2: Online Apply Available */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0">
              <button
                onClick={() => setApplyModeFilter(applyModeFilter === 'Online' ? 'all' : 'Online')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  applyModeFilter === 'Online'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {pick('केवल ऑनलाइन आवेदन', 'Online Apply Only', 'ऑनलाइन आवेदन उपलब्ध (Online Only)')}
              </button>
            </div>

          </div>

          {/* Results count & active search tags */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">
                {pick(
                  `कुल ${filteredSchemes.length} केंद्रीय योजनाएं प्रदर्शित`,
                  `Showing ${filteredSchemes.length} Central schemes`,
                  `कुल ${filteredSchemes.length} केंद्रीय योजनाएं प्रदर्शित (Showing ${filteredSchemes.length})`
                )}
              </span>
              <span className="text-slate-300">•</span>
              <span>
                {pick(
                  `(कुल ${CENTRAL_SCHEMES_DATA.length} में से)`,
                  `(out of ${CENTRAL_SCHEMES_DATA.length})`
                )}
              </span>
            </div>

            {(searchQuery || selectedCategory !== 'all' || schemeTypeFilter !== 'all' || applyModeFilter !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                <span>{pick('सभी फ़िल्टर रीसेट करें', 'Reset All Filters')}</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ============================================================
            CATEGORY SELECTOR TABS
           ============================================================ */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>{pick('श्रेणी अनुसार फ़िल्टर करें', 'Filter by Category')}</span>
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {pick('17 मुख्य श्रेणियां', '17 Main Categories')}
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{pick('सभी केंद्रीय योजनाएं', 'All Schemes')}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {CENTRAL_SCHEMES_DATA.length}
              </span>
            </button>

            {CENTRAL_CATEGORIES.filter(c => c.id !== 'all-central').map(cat => {
              const count = CENTRAL_SCHEMES_DATA.filter(s => s.categoryId === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              const catDesc = pickText(language, cat.desc, CENTRAL_CATEGORIES_EN[cat.id] || cat.desc);

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                  title={catDesc}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{pickText(language, cat.nameHi, cat.nameEn)}</span>
                  {count > 0 && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            SCHEMES CARDS GRID
           ============================================================ */}
        {filteredSchemes.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-xs">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-900">
              {pick('कोई केंद्रीय योजना नहीं मिली', 'No Schemes Found')}
            </h4>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              {pick(
                'आपके द्वारा खोजे गए शब्द से मेल खाती कोई योजना नहीं मिली। कृपया फ़िल्टर रीसेट करें।',
                'No central scheme matched your search query. Please reset filters to view all schemes.'
              )}
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
            >
              {pick('सभी योजनाएं पुनः देखें', 'View All Schemes')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map(scheme => {
              const isExpanded = expandedSchemeId === scheme.id;
              const en = CENTRAL_SCHEMES_EN[scheme.id];
              const schemeTypeLabel = pickText(language, scheme.schemeTypeHi, scheme.schemeTypeEn || scheme.schemeType);
              const ministryLabel = pickText(language, scheme.ministryHi, scheme.ministryEn);
              const targetLabel = pickText(language, scheme.targetBeneficiariesHi, scheme.targetBeneficiariesEn);
              const shortDesc = isHindi
                ? scheme.shortDescHi
                : isEnglish
                  ? scheme.shortDescEn
                  : scheme.shortDescHi;
              const benefitsText = isHindi
                ? scheme.benefitsHi
                : isEnglish
                  ? scheme.benefitsEn
                  : scheme.benefitsEn
                    ? `${scheme.benefitsHi}\n${scheme.benefitsEn}`
                    : scheme.benefitsHi;
              const eligibilityList = pickArray(language, scheme.eligibility, en?.eligibilityEn);
              const docsList = pickArray(language, scheme.documents, en?.documentsEn);
              const applyModeLabel = pickText(language, scheme.applicationModeLabel, en?.applicationModeLabelEn || scheme.applicationMode);
              const applyButtonLabel = pickText(language, scheme.officialApplyLabel, en?.officialApplyLabelEn || 'Visit Official Portal', 'slash');

              return (
                <div
                  key={scheme.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-5 sm:p-6 space-y-3">
                    
                    {/* Top Badges */}
                    <div className="flex items-start justify-between gap-2 text-[11px]">
                      <span className={`font-bold px-2.5 py-1 rounded-lg shrink-0 ${
                        scheme.schemeType === 'Central Sector'
                          ? 'bg-blue-50 text-blue-800 border border-blue-200/70'
                          : 'bg-orange-50 text-orange-800 border border-orange-200/70'
                      }`}>
                        {schemeTypeLabel}
                      </span>

                      <div className="flex items-center gap-1 text-emerald-700 font-bold shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{pick(`सत्यापित (${scheme.verifiedDate})`, `Verified (${scheme.verifiedDate})`)}</span>
                      </div>
                    </div>

                    {/* Scheme Title */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {isEnglish ? scheme.nameEn : scheme.nameHi}
                      </h3>
                      {isBilingual && (
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          ({scheme.nameEn})
                        </p>
                      )}
                    </div>

                    {/* Ministry Tag */}
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate" title={ministryLabel}>
                        {ministryLabel}
                      </span>
                    </div>

                    {/* Target Beneficiaries */}
                    <div className="bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200/60 text-[11px] text-slate-700 flex items-start gap-1.5">
                      <span className="font-bold text-slate-900 shrink-0">
                        {pick('पात्र लाभार्थी:', 'Target Beneficiaries:')}
                      </span>
                      <span className="line-clamp-2">{targetLabel}</span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {shortDesc}
                    </p>
                    {isBilingual && scheme.shortDescEn && (
                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                        {scheme.shortDescEn}
                      </p>
                    )}

                    {/* Verified Benefits Highlight */}
                    <div className="bg-emerald-50/70 border border-emerald-200/60 p-2.5 rounded-xl text-xs space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                        {pick('सत्यापित सरकारी लाभ:', 'Verified Government Benefits:', 'सत्यापित सरकारी लाभ / Verified Benefits:')}
                      </span>
                      <p className="text-slate-800 font-semibold leading-relaxed text-[11px] whitespace-pre-line">
                        {benefitsText}
                      </p>
                    </div>

                    {/* Collapsible Details: Eligibility & Required Documents */}
                    <div className="pt-2 border-t border-slate-100">
                      <button
                        onClick={() => setExpandedSchemeId(isExpanded ? null : scheme.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:text-blue-600 py-1 transition-colors cursor-pointer text-left"
                      >
                        <span className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-blue-500" />
                          <span>{pick('पात्रता एवं जरूरी दस्तावेज', 'Eligibility & Documents')}</span>
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 p-3 bg-slate-50 rounded-xl text-xs space-y-2.5 animate-in fade-in duration-150 border border-slate-200/70">
                          <div>
                            <h5 className="font-bold text-slate-900 text-[11px] mb-1">
                              {pick('पात्रता शर्तें:', 'Eligibility Criteria:')}
                            </h5>
                            <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                              {eligibilityList.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-bold text-slate-900 text-[11px] mb-1">
                              {pick('आवश्यक दस्तावेज:', 'Required Documents:')}
                            </h5>
                            <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                              {docsList.map((doc, idx) => (
                                <li key={idx}>{doc}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-1 text-[11px] text-slate-500">
                            <strong>{pick('आवेदन का माध्यम:', 'Application Mode:')}</strong> {applyModeLabel}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-4 sm:p-5 pt-0 bg-white space-y-2">
                    {scheme.officialApplyUrl ? (
                      <a
                        href={scheme.officialApplyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-2xs cursor-pointer text-center"
                      >
                        <span>{applyButtonLabel}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    ) : (
                      <a
                        href={scheme.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition-colors shadow-2xs cursor-pointer text-center"
                      >
                        <span>{pick('आधिकारिक जानकारी देखें', 'View Official Details', 'आधिकारिक जानकारी देखें / View Official Details')}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {scheme.statusUrl && (
                        <a
                          href={scheme.statusUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold rounded-lg transition-colors cursor-pointer text-center"
                          title={pick('आवेदन / लाभार्थी स्थिति जांचें', 'Check application / beneficiary status')}
                        >
                          <Clock className="w-3 h-3 shrink-0 text-slate-500" />
                          <span className="truncate">{pick('स्थिति जांचें', 'Status')}</span>
                        </a>
                      )}

                      {scheme.articleSlug && onSelectArticle ? (
                        <button
                          onClick={() => onSelectArticle(scheme.articleSlug!)}
                          className="flex items-center justify-center gap-1 px-2.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-[11px] font-bold rounded-lg transition-colors cursor-pointer text-center"
                          title={pick('विस्तृत गाइड पढ़ें', 'Read detailed guide')}
                        >
                          <span>{pick('गाइड पढ़ें', 'Guide')}</span>
                          <ArrowRight className="w-3 h-3 shrink-0" />
                        </button>
                      ) : null}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ============================================================
            OFFICIAL DISCLAIMER
           ============================================================ */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <h4 className="font-bold text-slate-900">
                {pick('महत्वपूर्ण कानूनी अस्वीकरण एवं नागरिक सूचना', 'Legal Notice & Citizen Information', 'महत्वपूर्ण कानूनी अस्वीकरण एवं नागरिक सूचना / Legal Notice')}
              </h4>
              {!isEnglish && (
                <p>
                  {isBilingual && <strong>Hindi: </strong>}
                  SARKARI TALK एक स्वतंत्र सूचना प्लेटफॉर्म है। यह भारत सरकार या बिहार सरकार की आधिकारिक वेबसाइट नहीं है। योजनाओं की पात्रता, लाभ, दस्तावेज और आवेदन की अंतिम जानकारी के लिए संबंधित आधिकारिक पोर्टल देखें।
                </p>
              )}
              {!isHindi && (
                <p>
                  {isBilingual && <strong>English: </strong>}
                  SARKARI TALK is an independent information platform and is not an official Government of India or Bihar Government website. Please verify eligibility, benefits, required documents, and application details on the relevant official portal.
                </p>
              )}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] text-slate-500 border-t border-slate-100">
                <span>
                  {pick('आधिकारिक संपर्क ईमेल:', 'Official Contact Email:')}{' '}
                  <a href="mailto:sarkaritalk23@gmail.com" className="text-blue-600 font-bold hover:underline">sarkaritalk23@gmail.com</a>
                </span>
                <span>•</span>
                <span>
                  {pick('सत्यापित सरकारी स्रोत:', 'Verified Government Sources:')}{' '}
                  <a href="https://www.myscheme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline font-semibold">myScheme.gov.in</a> &{' '}
                  <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline font-semibold">india.gov.in</a>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
