import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceArticle, CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';
import { useLanguage } from '../context/LanguageContext';
import { pickText } from '../data/translations/directoryTranslations';
import { localizeArticle } from '../data/translations/articleTranslations';

interface SearchBarProps {
  articles: ServiceArticle[];
  onSelectArticle: (slug: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  initialQuery?: string;
  isModal?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  articles,
  onSelectArticle,
  isOpen = true,
  onClose,
  initialQuery = '',
  isModal = false,
}) => {
  const { language, isHindi, isEnglish, pick } = useLanguage();
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [selectedState, setSelectedState] = useState<string>('all');

  const popularQueries = [
    { hi: 'दिव्यांग पेंशन एवं UDID कार्ड', en: 'Divyang Pension & UDID Card' },
    { hi: 'बिहार RTPS जाति आय निवास', en: 'Bihar RTPS Caste Income Residence' },
    { hi: 'बिहार जमीन जमाबंदी नकल', en: 'Bihar Land Jamabandi Record' },
    { hi: 'PM Kisan e-KYC किस्त', en: 'PM Kisan e-KYC Installment' },
    { hi: 'आयुष्मान कार्ड ₹5 लाख', en: 'Ayushman Card ₹5 Lakh' },
    { hi: 'आधार कार्ड पता सुधार', en: 'Aadhaar Address Update' },
    { hi: 'फ्री Instant e-PAN कार्ड', en: 'Free Instant e-PAN Card' },
    { hi: 'स्टूडेंट क्रेडिट कार्ड 4 लाख', en: 'Student Credit Card 4 Lakh' },
  ];

  // Normalized search across Hindi + English translated fields
  const filteredArticles = useMemo(() => {
    if (!query.trim() && selectedCategory === 'all' && selectedState === 'all') {
      return articles.slice(0, 6);
    }

    const cleanQuery = query.toLowerCase().trim();
    const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);

    return articles.filter(article => {
      if (selectedCategory !== 'all' && article.categoryId !== selectedCategory) {
        return false;
      }

      if (selectedState !== 'all' && article.state !== selectedState) {
        return false;
      }

      if (queryTokens.length === 0) return true;

      const enArt = localizeArticle(article, 'en');
      const searchableText = [
        article.titleHi,
        article.titleEn,
        article.shortSummary,
        enArt.shortSummary,
        article.department,
        enArt.department,
        article.whatIs,
        enArt.whatIs,
        ...article.purposeAndBenefits,
        ...enArt.purposeAndBenefits,
        ...article.documentsRequired,
        ...enArt.documentsRequired,
        ...article.faqs.map(f => f.question + ' ' + f.answer),
      ].join(' ').toLowerCase();

      return queryTokens.every(token => {
        if (searchableText.includes(token)) return true;

        const aliasMap: Record<string, string[]> = {
          'divyang': ['दिव्यांग', 'विकलांग', 'udid', 'swavlamban', 'disability', 'handicap'],
          'disability': ['दिव्यांग', 'विकलांग', 'udid', 'swavlamban'],
          'udid': ['स्वावलंबन', 'udid', 'दिव्यांगता', 'disability'],
          'pension': ['पेंशन', 'वृद्धजन', 'दिव्यांग'],
          'aadhar': ['आधार', 'aadhaar'],
          'aadhaar': ['आधार', 'aadhar'],
          'pan': ['पैन'],
          'caste': ['जाति'],
          'income': ['आय'],
          'residence': ['निवास', 'आवासीय', 'domicile'],
          'domicile': ['निवास'],
          'ration': ['राशन'],
          'kisan': ['किसान', 'farmer'],
          'bihar': ['बिहार'],
          'scholarship': ['छात्रवृत्ति', 'स्कॉलरशिप'],
          'job': ['भर्ती', 'नौकरी', 'vacancy'],
          'licence': ['लाइसेंस', 'license'],
          'license': ['लाइसेंस', 'licence'],
          'jamabandi': ['जमाबंदी'],
          'mutation': ['दाखिल खारिज', 'दाखिल-खारिज'],
          'free': ['मुफ्त', 'निःशुल्क'],
          'loan': ['ऋण', 'लोन'],
          'pmay': ['आवास', 'pm awas'],
        };

        for (const [key, aliases] of Object.entries(aliasMap)) {
          if (token.includes(key) || aliases.some(a => a.includes(token))) {
            if (aliases.some(a => searchableText.includes(a)) || searchableText.includes(key)) {
              return true;
            }
          }
        }

        return false;
      });
    });
  }, [articles, query, selectedCategory, selectedState]);

  if (!isOpen) return null;

  const content = (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Search Input Box */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-b border-slate-800 text-white">
        <div className="flex items-center justify-between gap-2 mb-3">
          <label htmlFor="search-input" className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>
              {pick(
                'सरकारी सेवाएँ व टूल्स खोजें',
                'Search Government Services & Tools',
                'सरकारी सेवाएँ व टूल्स खोजें (Hindi & English)'
              )}
            </span>
          </label>
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
          <input
            id="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={pick(
              'खोजें जैसे: बिहार RTPS, PM किसान, e-PAN, राशन कार्ड, आधार अपडेट...',
              'Search e.g. Bihar RTPS, PM Kisan, Instant e-PAN, Ration Card, Aadhaar update...'
            )}
            className="w-full pl-12 pr-10 py-3 sm:py-3.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-xl text-sm sm:text-base font-medium focus:outline-hidden focus:ring-3 focus:ring-red-500 shadow-inner"
            autoFocus={isModal}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Popular searches chips */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          <span className="text-[11px] text-slate-400 shrink-0 font-medium">
            {pick('लोकप्रिय खोज:', 'Popular Searches:')}
          </span>
          {popularQueries.map((pq, idx) => {
            const label = isEnglish ? pq.en : pq.hi;
            return (
              <button
                key={idx}
                onClick={() => setQuery(label)}
                className="text-[11px] px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full border border-slate-700 whitespace-nowrap transition-colors cursor-pointer"
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          <span className="text-slate-500 font-semibold flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-600" /> {pick('फ़िल्टर:', 'Filters:')}
          </span>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as CategoryId | 'all')}
            className="bg-white border border-slate-300 text-slate-700 rounded-lg px-2.5 py-1 text-xs font-medium cursor-pointer"
          >
            <option value="all">{pick('सभी श्रेणियाँ', 'All Categories')}</option>
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>{pickText(language, cat.nameHi, cat.nameEn)}</option>
            ))}
          </select>

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-white border border-slate-300 text-slate-700 rounded-lg px-2.5 py-1 text-xs font-medium cursor-pointer"
          >
            <option value="all">{pick('सभी राज्य व केंद्र', 'All States & Central')}</option>
            <option value="Bihar">{pick('केवल बिहार सरकार', 'Bihar Government Only')}</option>
            <option value="Central">{pick('केवल केंद्र सरकार', 'Central Government Only')}</option>
          </select>
        </div>

        <div className="text-slate-500 text-[11px] font-medium">
          {pick(`${filteredArticles.length} परिणाम मिले`, `${filteredArticles.length} results found`)}
        </div>
      </div>

      {/* Results Listing */}
      <div className="max-h-[60vh] sm:max-h-[460px] overflow-y-auto divide-y divide-slate-100 p-2">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => {
            const loc = localizeArticle(article, language);
            return (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article.slug);
                  if (onClose) onClose();
                }}
                className="p-3.5 sm:p-4 hover:bg-orange-50/60 rounded-xl transition-colors cursor-pointer group flex items-start justify-between gap-3"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      article.state === 'Bihar' 
                        ? 'bg-orange-100 text-orange-800 border border-orange-300' 
                        : 'bg-blue-100 text-blue-800 border border-blue-300'
                    }`}>
                      {article.state === 'Bihar'
                        ? pick('बिहार सरकार', 'Bihar Government')
                        : pick('भारत सरकार (केंद्रीय)', 'Central Government')}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {loc.department}
                    </span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded flex items-center gap-1 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {pick('सत्यापित', 'Verified')}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors leading-snug">
                    {loc.displayTitle}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {loc.shortSummary}
                  </p>

                  <div className="flex items-center gap-4 pt-1 text-[11px] text-slate-500 font-medium">
                    <span className="text-emerald-700 font-bold">{loc.fees.officialFee}</span>
                    <span>•</span>
                    <span>{pick('पोर्टल:', 'Portal:')} {article.officialPortalName}</span>
                  </div>
                </div>

                <div className="shrink-0 pt-2 text-slate-400 group-hover:text-orange-600 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-800">
              {pick(`"${query}" से संबंधित कोई सटीक परिणाम नहीं मिला`, `No exact results found for "${query}"`)}
            </h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              {pick(
                'सुझाव: स्पेलिंग जांचें या सामान्य शब्द जैसे "जाति", "जमाबंदी", "आधार", "राशन", या "किसान" लिखकर देखें।',
                'Tip: Check spelling or try common keywords like "Caste", "Jamabandi", "Aadhaar", "Ration", or "Kisan".'
              )}
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('all');
                  setSelectedState('all');
                }}
                className="text-xs text-orange-600 font-bold hover:underline cursor-pointer"
              >
                {pick('सभी गाइड रीसेट करें', 'Reset All Guides')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 overflow-y-auto pt-16 sm:pt-20 animate-in fade-in duration-150">
        <div className="w-full max-w-2xl relative">
          {content}
        </div>
      </div>
    );
  }

  return content;
};
