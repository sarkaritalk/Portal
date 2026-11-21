import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Landmark, 
  HeartHandshake, 
  HardHat, 
  GraduationCap, 
  Wheat, 
  Tractor, 
  Briefcase, 
  Activity, 
  BadgeCheck, 
  Building2, 
  FileCheck2,
  X,
  Info,
  ChevronDown,
  ChevronUp,
  Filter,
  ArrowRight
} from 'lucide-react';
import { 
  BIHAR_DIRECTORY_CATEGORIES, 
  BIHAR_SERVICES_DATA
} from '../data/biharDirectory';
import { useLanguage } from '../context/LanguageContext';
import { 
  BIHAR_CATEGORIES_EN, 
  BIHAR_SERVICES_EN, 
  pickText, 
  pickArray 
} from '../data/translations/directoryTranslations';

interface BiharServicesDirectoryProps {
  onSelectArticle?: (slug: string) => void;
  initialCategory?: string;
  isStandalonePage?: boolean;
}

export const BiharServicesDirectory: React.FC<BiharServicesDirectoryProps> = ({
  onSelectArticle,
  initialCategory,
  isStandalonePage = false,
}) => {
  const { language, isHindi, isEnglish, isBilingual, pick } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [scopeFilter, setScopeFilter] = useState<'all' | 'Bihar' | 'Central'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedDocsId, setExpandedDocsId] = useState<string | null>(null);

  // Filter services across Hindi + English fields
  const filteredServices = useMemo(() => {
    return BIHAR_SERVICES_DATA.filter(item => {
      if (selectedCategory !== 'all' && item.categoryId !== selectedCategory) {
        return false;
      }

      if (scopeFilter !== 'all' && item.scope !== scopeFilter) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const en = BIHAR_SERVICES_EN[item.id];
        const matchesTitle = item.titleHi.toLowerCase().includes(q) || item.titleEn.toLowerCase().includes(q);
        const matchesDept =
          item.departmentHi.toLowerCase().includes(q) ||
          item.departmentEn.toLowerCase().includes(q);
        const matchesDesc =
          item.descriptionHi.toLowerCase().includes(q) ||
          item.descriptionEn.toLowerCase().includes(q);
        const matchesDocs =
          item.documents.some(doc => doc.toLowerCase().includes(q)) ||
          (en?.documentsEn.some(doc => doc.toLowerCase().includes(q)) ?? false);
        const matchesEligibility =
          item.eligibility.some(el => el.toLowerCase().includes(q)) ||
          (en?.eligibilityEn.some(el => el.toLowerCase().includes(q)) ?? false);

        if (!matchesTitle && !matchesDept && !matchesDesc && !matchesDocs && !matchesEligibility) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, scopeFilter, searchQuery]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2': return <FileCheck2 className="w-4 h-4 shrink-0" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 shrink-0" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4 shrink-0" />;
      case 'HardHat': return <HardHat className="w-4 h-4 shrink-0" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 shrink-0" />;
      case 'Wheat': return <Wheat className="w-4 h-4 shrink-0" />;
      case 'Tractor': return <Tractor className="w-4 h-4 shrink-0" />;
      case 'Landmark': return <Landmark className="w-4 h-4 shrink-0" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 shrink-0" />;
      case 'Activity': return <Activity className="w-4 h-4 shrink-0" />;
      case 'BadgeCheck': return <BadgeCheck className="w-4 h-4 shrink-0" />;
      case 'Building2': return <Building2 className="w-4 h-4 shrink-0" />;
      default: return <FileText className="w-4 h-4 shrink-0" />;
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setScopeFilter('all');
    setSearchQuery('');
  };

  return (
    <section 
      id="bihar-services-section"
      className={`${isStandalonePage ? 'py-8 sm:py-12' : 'py-12 sm:py-16'} bg-slate-50 border-t border-slate-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            SECTION HEADER
           ============================================================ */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold mb-3 shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-orange-600"></span>
            {!isEnglish && <span>सत्यापित डायरेक्टरी • सरकारी TALK</span>}
            {isBilingual && <span className="text-orange-400">|</span>}
            {!isHindi && <span>Verified Official Government Portals</span>}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {isEnglish ? 'Bihar Government Schemes & Online Services' : 'बिहार सरकारी योजनाएँ एवं ऑनलाइन सेवाएँ'}
            {isBilingual && (
              <span className="block text-lg sm:text-xl font-bold text-slate-600 mt-1">
                (Bihar Government Schemes & Online Services)
              </span>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {!isEnglish && (
              <span>
                बिहार सरकार की योजनाओं, प्रमाणपत्रों, छात्रवृत्तियों, पेंशन और जरूरी ऑनलाइन सेवाओं की जानकारी एक ही जगह पाएँ।
              </span>
            )}
            {isEnglish && (
              <span>
                Find information about Bihar government schemes, certificates, scholarships, pensions, and essential online services in one place.
              </span>
            )}
            {isBilingual && (
              <span className="block text-xs sm:text-sm text-slate-500 mt-0.5">
                (Find information about Bihar government schemes, certificates, scholarships, pensions, and essential online services in one place.)
              </span>
            )}
          </p>
        </div>

        {/* ============================================================
            SEARCH & SCOPE FILTER BAR
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
                placeholder={pick('योजना या सेवा खोजें...', 'Search schemes or services...', 'योजना या सेवा खोजें (Search schemes or services)')}
                className="w-full pl-11 pr-10 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
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

            {/* Scope Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0 self-start sm:self-auto overflow-x-auto max-w-full">
              <button
                onClick={() => setScopeFilter('all')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  scopeFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {pick('सभी सेवाएँ', 'All Services')}
              </button>
              <button
                onClick={() => setScopeFilter('Bihar')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  scopeFilter === 'Bihar'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {pick('बिहार राज्य', 'Bihar State')}
              </button>
              <button
                onClick={() => setScopeFilter('Central')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  scopeFilter === 'Central'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {pick('केंद्रीय सेवाएँ', 'Central Services')}
              </button>
            </div>
          </div>

          {/* Results count & active search tags */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">
                {pick(
                  `कुल ${filteredServices.length} सेवाएँ प्रदर्शित`,
                  `Showing ${filteredServices.length} services`,
                  `कुल ${filteredServices.length} सेवाएँ प्रदर्शित (Showing ${filteredServices.length})`
                )}
              </span>
              <span className="text-slate-300">•</span>
              <span>
                {pick(
                  `(कुल ${BIHAR_SERVICES_DATA.length} में से)`,
                  `(out of ${BIHAR_SERVICES_DATA.length})`
                )}
              </span>
            </div>

            {(searchQuery || selectedCategory !== 'all' || scopeFilter !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer"
              >
                <span>{pick('सभी फ़िल्टर रीसेट करें', 'Reset All Filters')}</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ============================================================
            12 CATEGORY FILTER CHIPS / BUTTONS
           ============================================================ */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>{pick('श्रेणी अनुसार फ़िल्टर करें', 'Filter by Category')}</span>
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {pick('12 मुख्य श्रेणियाँ', '12 Main Categories')}
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
              <span>{pick('सभी श्रेणियाँ', 'All Categories')}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {BIHAR_SERVICES_DATA.length}
              </span>
            </button>

            {BIHAR_DIRECTORY_CATEGORIES.map(cat => {
              const count = BIHAR_SERVICES_DATA.filter(s => s.categoryId === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              const catDesc = pickText(language, cat.shortDesc, BIHAR_CATEGORIES_EN[cat.id] || cat.shortDesc);

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                  title={catDesc}
                >
                  {getCategoryIcon(cat.iconName)}
                  <span>{pickText(language, cat.nameHi, cat.nameEn)}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-orange-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            SERVICES CARD GRID
           ============================================================ */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-xs">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-900">
              {pick('कोई सेवा या योजना नहीं मिली', 'No Services Found')}
            </h4>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              {pick(
                'आपके द्वारा खोजे गए शब्द से मेल खाती कोई सरकारी सेवा नहीं मिली। कृपया दूसरे शब्दों से प्रयास करें।',
                'No government service matched your search term. Please try another keyword or reset filters.'
              )}
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-xl hover:bg-orange-700 transition-colors cursor-pointer"
            >
              {pick('सभी सेवाएँ पुनः देखें', 'View All Services')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => {
              const isDocsExpanded = expandedDocsId === service.id;
              const en = BIHAR_SERVICES_EN[service.id];
              const scopeLabel = pickText(language, service.scopeLabelHi, service.scopeLabelEn || (service.scope === 'Bihar' ? 'Bihar Government' : 'Central Government'));
              const feeLabel = pickText(language, service.fee, en?.feeEn || service.fee);
              const deptLabel = pickText(language, service.departmentHi, service.departmentEn);
              const descText = isHindi
                ? service.descriptionHi
                : isEnglish
                  ? service.descriptionEn
                  : service.descriptionHi;
              const eligibilityList = pickArray(language, service.eligibility, en?.eligibilityEn);
              const docsList = pickArray(language, service.documents, en?.documentsEn);
              const primaryLabel = pickText(language, service.primaryLabel, en?.primaryLabelEn || 'Visit Official Portal', 'slash');

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-5 sm:p-6 space-y-3">
                    
                    {/* Top Row: Scope Badge & Fee */}
                    <div className="flex items-start justify-between gap-2 text-[11px]">
                      <span className={`font-bold px-2.5 py-1 rounded-lg shrink-0 ${
                        service.scope === 'Bihar'
                          ? 'bg-orange-50 text-orange-800 border border-orange-200/60'
                          : 'bg-blue-50 text-blue-800 border border-blue-200/60'
                      }`}>
                        {scopeLabel}
                      </span>

                      <span className="text-slate-500 font-medium text-right shrink-0">
                        {feeLabel}
                      </span>
                    </div>

                    {/* Central Government Explicit Clarification */}
                    {service.scope === 'Central' && (
                      <div className="bg-blue-50/70 text-blue-900 text-[10px] px-2.5 py-1 rounded-md border border-blue-100 flex items-center gap-1.5">
                        <Info className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{pick('केंद्रीय सेवा — पूरे भारत में मान्य', 'Central Service — Valid across India', 'केंद्रीय सेवा (Central Service) — पूरे भारत में मान्य')}</span>
                      </div>
                    )}

                    {/* Service Title */}
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {isEnglish ? service.titleEn : service.titleHi}
                      </h4>
                      {isBilingual && (
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          ({service.titleEn})
                        </p>
                      )}
                    </div>

                    {/* Department Tag */}
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate" title={deptLabel}>
                        {deptLabel}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {descText}
                    </p>
                    {isBilingual && service.descriptionEn && (
                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                        {service.descriptionEn}
                      </p>
                    )}

                    {/* Collapsible Eligibility & Required Documents Drawer */}
                    <div className="pt-2 border-t border-slate-100">
                      <button
                        onClick={() => setExpandedDocsId(isDocsExpanded ? null : service.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:text-orange-600 py-1 transition-colors cursor-pointer text-left"
                      >
                        <span className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-orange-500" />
                          <span>{pick('पात्रता एवं जरूरी दस्तावेज़', 'Eligibility & Documents')}</span>
                        </span>
                        {isDocsExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </button>

                      {isDocsExpanded && (
                        <div className="mt-2.5 p-3 bg-slate-50 rounded-xl text-xs space-y-2.5 animate-in fade-in duration-150 border border-slate-200/70">
                          <div>
                            <h5 className="font-bold text-slate-800 text-[11px] mb-1">
                              {pick('पात्रता:', 'Eligibility:')}
                            </h5>
                            <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                              {eligibilityList.map((el, idx) => (
                                <li key={idx}>{el}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-bold text-slate-800 text-[11px] mb-1">
                              {pick('आवश्यक दस्तावेज़:', 'Required Documents:')}
                            </h5>
                            <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                              {docsList.map((doc, idx) => (
                                <li key={idx}>{doc}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-4 sm:p-5 pt-0 bg-white space-y-2">
                    <a
                      href={service.primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition-colors shadow-2xs cursor-pointer text-center"
                    >
                      <span>{primaryLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.statusUrl && (
                        <a
                          href={service.statusUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold rounded-lg transition-colors cursor-pointer text-center"
                          title={pick('आवेदन की स्थिति जाँचें', 'Check application status')}
                        >
                          <Clock className="w-3 h-3 shrink-0 text-slate-500" />
                          <span className="truncate">{pick('स्थिति देखें', 'Status')}</span>
                        </a>
                      )}

                      {service.articleSlug && onSelectArticle ? (
                        <button
                          onClick={() => onSelectArticle(service.articleSlug!)}
                          className="flex items-center justify-center gap-1 px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold rounded-lg transition-colors cursor-pointer text-center"
                          title={pick('विस्तृत गाइड पढ़ें', 'Read detailed guide')}
                        >
                          <span>{pick('विस्तृत गाइड', 'Guide')}</span>
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
            LEGAL DISCLAIMER & CITIZEN ADVISORY
           ============================================================ */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
              <h4 className="font-bold text-slate-900">
                {pick('अस्वीकरण एवं नागरिक सूचना', 'Independent Informational Notice')}
              </h4>
              {!isEnglish && (
                <>
                  <p>
                    <strong>सरकारी TALK (Sarkari Talk)</strong> एक स्वतंत्र नागरिक सूचना पोर्टल है। यह वेबसाइट किसी भी सरकारी विभाग, मंत्रालय, आयोग अथवा सरकारी उपक्रम से संबद्ध नहीं है।
                  </p>
                  <p>
                    सभी सरकारी योजनाओं, RTPS प्रमाण पत्रों और ऑनलाइन सेवाओं के आवेदन, भुगतान एवं सत्यापन केवल संबंधित विभागों के आधिकारिक सरकारी पोर्टलों (जैसे <strong>.gov.in</strong> या <strong>.nic.in</strong>) पर ही सुरक्षित रूप से किए जाते हैं। किसी भी निजी व्यक्ति अथवा अनधिकृत नंबर पर कोई शुल्क न दें।
                  </p>
                </>
              )}
              {!isHindi && (
                <>
                  <p>
                    <strong>SARKARI TALK</strong> is an independent citizen information portal and is not affiliated with any government department, ministry, commission, or public undertaking.
                  </p>
                  <p>
                    Applications, official payments, and verifications for all government schemes, RTPS certificates, and online services take place strictly on authorized official government portals (such as <strong>.gov.in</strong> or <strong>.nic.in</strong>). Never pay unauthorized individuals.
                  </p>
                </>
              )}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] text-slate-500 border-t border-slate-100">
                <span>
                  {pick('आधिकारिक पूछताछ:', 'Official Enquiries:')}{' '}
                  <a href="mailto:sarkaritalk23@gmail.com" className="text-orange-600 font-bold hover:underline">sarkaritalk23@gmail.com</a>
                </span>
                <span>•</span>
                <span>{pick('बिहार लोक सेवा का अधिकार (RTPS) अधिनियम 2011', 'Bihar Right to Public Services (RTPS) Act 2011')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
