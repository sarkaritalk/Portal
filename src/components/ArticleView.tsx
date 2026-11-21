import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Printer, 
  Share2, 
  Bookmark, 
  BookmarkCheck, 
  ShieldCheck, 
  ChevronDown, 
  HelpCircle, 
  Youtube, 
  Download, 
  Building
} from 'lucide-react';
import { ServiceArticle, YouTubeVideo } from '../types';
import { CATEGORIES } from '../data/categories';
import { toggleBookmark, getBookmarks } from '../utils/storage';
import { useLanguage } from '../context/LanguageContext';
import { localizeArticle } from '../data/translations/articleTranslations';

interface ArticleViewProps {
  article: ServiceArticle;
  allArticles: ServiceArticle[];
  videos: YouTubeVideo[];
  onNavigate: (tab: string, param?: string) => void;
  onOpenVideo?: (video: YouTubeVideo) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  allArticles,
  videos,
  onNavigate,
  onOpenVideo,
}) => {
  const { language, isHindi, isEnglish, isBilingual, pick } = useLanguage();
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copiedLink, setCopiedLink] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(() => getBookmarks().includes(article.slug));

  const loc = localizeArticle(article, language);
  const category = CATEGORIES.find(c => c.id === article.categoryId);
  const relatedVideo = videos.find(v => v.id === article.relatedVideoId || v.relatedArticleSlug === article.slug);
  const relatedArticles = allArticles.filter(a => article.relatedArticleSlugs?.includes(a.slug));

  const toggleDocCheck = (index: number) => {
    setCheckedDocs(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleBookmark = () => {
    const next = toggleBookmark(article.slug);
    setIsBookmarked(next);
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const textSizeClass = {
    normal: 'text-sm sm:text-base',
    large: 'text-base sm:text-lg',
    xlarge: 'text-lg sm:text-xl',
  }[fontSize];

  const categoryLabel = category
    ? pick(category.nameHi, category.nameEn)
    : pick('श्रेणी', 'Category');

  const relatedVideoTitle = relatedVideo
    ? isHindi
      ? relatedVideo.titleHi
      : isEnglish
        ? relatedVideo.titleEn
        : `${relatedVideo.titleHi} (${relatedVideo.titleEn})`
    : '';

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      
      {/* Top Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap" aria-label="Breadcrumb">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-orange-600 transition-colors cursor-pointer"
        >
          {pick('होम', 'Home')}
        </button>
        <span>/</span>
        <button
          onClick={() => onNavigate('category', article.categoryId)}
          className="hover:text-orange-600 transition-colors cursor-pointer"
        >
          {categoryLabel}
        </button>
        <span>/</span>
        <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
          {loc.displayTitle}
        </span>
      </nav>

      {/* Article Header Card */}
      <header className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-500"></div>

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              article.state === 'Bihar'
                ? 'bg-orange-100 text-orange-900 border border-orange-300'
                : 'bg-blue-100 text-blue-900 border border-blue-300'
            }`}>
              {article.state === 'Bihar'
                ? pick('बिहार सरकार', 'Government of Bihar')
                : pick('भारत सरकार (केंद्रीय)', 'Government of India (Central)')}
            </span>
            <span className="text-xs text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              {loc.department}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {pick('सत्यापित:', 'Verified:')} {article.verifiedDate}
            </span>
          </div>

          {/* Quick Utility Actions */}
          <div className="flex items-center gap-1.5">
            <div className="bg-slate-100 rounded-lg p-0.5 border border-slate-200 flex items-center text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded font-bold cursor-pointer ${fontSize === 'normal' ? 'bg-white shadow-xs text-orange-600' : 'text-slate-600'}`}
                title={pick('सामान्य फॉन्ट', 'Normal Font')}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded font-bold cursor-pointer ${fontSize === 'large' ? 'bg-white shadow-xs text-orange-600' : 'text-slate-600'}`}
                title={pick('बड़ा फॉन्ट', 'Large Font')}
              >
                A+
              </button>
            </div>

            <button
              onClick={handleBookmark}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'bg-amber-50 border-amber-300 text-amber-700' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title={isBookmarked ? pick('सेव्ड से हटाएं', 'Remove Bookmark') : pick('मार्गदर्शिका सेव करें', 'Save Guide')}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer relative"
              title={pick('लिंक कॉपी करें', 'Copy Link')}
            >
              <Share2 className="w-4 h-4" />
              {copiedLink && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">
                  {pick('लिंक कॉपी हो गया!', 'Link copied!')}
                </span>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer hidden sm:flex"
              title={pick('गाइड प्रिंट करें', 'Print Guide')}
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
          {loc.displayTitle}
        </h1>
        {loc.displaySubtitle && (
          <p className="text-sm sm:text-base text-slate-500 font-medium mb-4">
            {loc.displaySubtitle}
          </p>
        )}

        <p className={`text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-200 ${textSizeClass}`}>
          {loc.shortSummary}
        </p>

        {/* Citizen Notice Banner */}
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>{pick('नागरिक सूचना:', 'Citizen Notice:')}</strong>{' '}
            {pick(
              `Sarkari Talk स्वतंत्र मार्गदर्शक पोर्टल है। आवेदन की अंतिम स्वीकृति अथवा अस्वीकृति पूर्णतः संबंधित सरकारी विभाग (${loc.department}) के नियमों और सत्यापन रिपोर्ट पर निर्भर करती है।`,
              `Sarkari Talk is an independent informational guide portal. Final application approval or rejection depends solely on the rules and verification report of the concerned government department (${loc.department}).`
            )}
          </p>
        </div>

        {/* Primary Action Buttons Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
          <a
            href={article.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-xl shadow-sm transition-all hover:shadow-md cursor-pointer"
          >
            <span>{pick('आधिकारिक पोर्टल पर जाएँ ↗', 'Visit Official Portal ↗')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {article.statusCheckUrl && (
            <a
              href={article.statusCheckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-sm font-bold rounded-xl transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              <span>{pick('आवेदन स्थिति चेक करें', 'Check Application Status')}</span>
            </a>
          )}

          {article.downloadUrl && (
            <a
              href={article.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-sm font-bold rounded-xl transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-700" />
              <span>{pick('सर्टिफिकेट डाउनलोड लिंक', 'Download Certificate Link')}</span>
            </a>
          )}
        </div>
      </header>

      {/* Main Body Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Full Guide Sections */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* 1. What is this service or scheme? */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-orange-600 rounded-full"></span>
              <span>{pick('1. यह सेवा / योजना क्या है?', '1. What is this Service / Scheme?')}</span>
            </h2>
            <p className={`text-slate-700 leading-relaxed whitespace-pre-line ${textSizeClass}`}>
              {loc.whatIs}
            </p>
          </section>

          {/* 2. Purpose & Benefits */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-emerald-600 rounded-full"></span>
              <span>{pick('2. मुख्य उद्देश्य और मिलने वाले लाभ', '2. Key Objectives & Benefits')}</span>
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {loc.purposeAndBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className={`text-slate-800 font-medium ${textSizeClass}`}>{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Who is Eligible vs Ineligible */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-blue-600 rounded-full"></span>
              <span>{pick('3. पात्रता एवं अपात्रता शर्तें', '3. Eligibility & Ineligibility Criteria')}</span>
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {pick('कौन पात्र हैं?', 'Who is Eligible?')}
                </h3>
                <ul className="space-y-2">
                  {loc.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className={textSizeClass}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {loc.ineligibility && loc.ineligibility.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-rose-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    {pick('कौन पात्र नहीं हैं?', 'Who is Not Eligible?')}
                  </h3>
                  <ul className="space-y-2">
                    {loc.ineligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700 bg-rose-50/50 p-2.5 rounded-lg border border-rose-100">
                        <span className="text-rose-600 font-bold">✕</span>
                        <span className={textSizeClass}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* 4. Complete Document Checklist */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-amber-500 rounded-full"></span>
                <span>{pick('4. आवश्यक दस्तावेज़ सूची', '4. Required Documents Checklist')}</span>
              </h2>
              <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-bold">
                {pick('चेकलिस्ट', 'Checklist')}
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-3">
              {pick(
                'आवेदन से पहले अपने दस्तावेज़ तैयार करें। जो दस्तावेज़ आपके पास उपलब्ध हैं उन पर टिक (✓) करें:',
                'Prepare your documents before applying. Tick (✓) each document you already have ready:'
              )}
            </p>

            <div className="space-y-2.5">
              {loc.documentsRequired.map((doc, idx) => {
                const isChecked = !!checkedDocs[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleDocCheck(idx)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked 
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleDocCheck(idx)}
                      className="w-4 h-4 rounded text-orange-600 mt-1 cursor-pointer"
                    />
                    <span className={`font-medium ${textSizeClass} ${isChecked ? 'line-through text-slate-400' : ''}`}>
                      {doc}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 5. Application Fee & Charges */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-slate-900 rounded-full"></span>
              <span>{pick('5. आवेदन शुल्क व सरकारी फीस', '5. Application Fees & Official Charges')}</span>
            </h2>

            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-sm text-slate-600 font-medium">{pick('सरकारी आवेदन शुल्क:', 'Official Application Fee:')}</span>
                <span className="text-lg font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-300">
                  {loc.fees.officialFee}
                </span>
              </div>
              {loc.fees.paymentMode && (
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                  <span className="text-slate-600 font-medium">{pick('भुगतान माध्यम:', 'Payment Mode:')}</span>
                  <span className="text-slate-800 font-semibold">{loc.fees.paymentMode}</span>
                </div>
              )}
              {loc.fees.note && (
                <p className="text-xs text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200 leading-relaxed">
                  <strong>{pick('सावधानी नोट:', 'Important Note:')}</strong> {loc.fees.note}
                </p>
              )}
            </div>
          </section>

          {/* 6. Step-by-Step Online Application Process */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-orange-600 rounded-full"></span>
              <span>{pick('6. ऑनलाइन आवेदन की चरणबद्ध प्रक्रिया', '6. Step-by-Step Online Application Process')}</span>
            </h2>

            <div className="space-y-4">
              {loc.onlineProcessSteps.map((stepItem) => (
                <div key={stepItem.step} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                    {stepItem.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">
                      {stepItem.title}
                    </h3>
                    <p className={`text-slate-700 leading-relaxed whitespace-pre-line ${textSizeClass}`}>
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Offline Application Process */}
          {loc.offlineProcess && loc.offlineProcess.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-slate-700 rounded-full"></span>
                <span>{pick('7. ऑफलाइन आवेदन प्रक्रिया (ऑफिस काउंटर)', '7. Offline Application Process (Office Counter)')}</span>
              </h2>
              <ul className="space-y-2">
                {loc.offlineProcess.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className={textSizeClass}>{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 8. Application Status & Certificate Download Guide */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-blue-600 rounded-full"></span>
              <span>{pick('8. आवेदन की स्थिति चेक और प्रमाणपत्र डाउनलोड', '8. Status Tracking & Certificate Download Guide')}</span>
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200">
                <h3 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  {pick('आवेदन की स्थिति कैसे देखें:', 'How to Track Application Status:')}
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                  {loc.statusCheckGuide.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {loc.downloadGuide && loc.downloadGuide.length > 0 && (
                <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                  <h3 className="text-sm font-bold text-emerald-900 mb-2 flex items-center gap-2">
                    <Download className="w-4 h-4 text-emerald-700" />
                    {pick('डिजिटल प्रमाण पत्र या रसीद कैसे डाउनलोड करें:', 'How to Download Digital Certificate or Receipt:')}
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                    {loc.downloadGuide.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* 9. Correction, Renewal & Reapplication */}
          {loc.correctionOrRenewalGuide && loc.correctionOrRenewalGuide.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-indigo-600 rounded-full"></span>
                <span>{pick('9. सुधार, नवीनीकरण और पुनः आवेदन', '9. Correction, Renewal & Reapplication')}</span>
              </h2>
              <ul className="space-y-2">
                {loc.correctionOrRenewalGuide.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span className={textSizeClass}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 10. Common Mistakes & Troubleshooting */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-rose-600 rounded-full"></span>
              <span>{pick('10. सामान्य गलतियाँ और सावधानियाँ (रिजेक्शन से बचें)', '10. Common Mistakes & Precautions (Avoid Rejection)')}</span>
            </h2>
            <div className="space-y-2.5">
              {loc.commonMistakesAndTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-slate-800">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className={`font-medium ${textSizeClass}`}>{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 11. Frequently Asked Questions */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-orange-600 rounded-full"></span>
              <span>{pick('11. अक्सर पूछे जाने वाले सवाल', '11. Frequently Asked Questions (FAQs)')}</span>
            </h2>

            <div className="space-y-3">
              {loc.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* Right 1 Column: Sticky Quick Info & Portals */}
        <div className="space-y-6">
          
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs sticky top-24">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Building className="w-4 h-4 text-orange-600" />
              {pick('महत्वपूर्ण विवरण संक्षेप में', 'Quick Summary')}
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 block">{pick('संबद्ध विभाग:', 'Department:')}</span>
                <span className="font-bold text-slate-900">{loc.department}</span>
              </div>
              <div>
                <span className="text-slate-500 block">{pick('अधिकार क्षेत्र:', 'Jurisdiction:')}</span>
                <span className="font-bold text-slate-900">
                  {article.state === 'Bihar'
                    ? pick('बिहार राज्य', 'Bihar State')
                    : pick('अखिल भारतीय (केंद्र)', 'All India (Central)')}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">{pick('सरकारी शुल्क:', 'Official Fee:')}</span>
                <span className="font-bold text-emerald-700">{loc.fees.officialFee}</span>
              </div>
              <div>
                <span className="text-slate-500 block">{pick('अंतिम सत्यापन तिथि:', 'Last Verified Date:')}</span>
                <span className="font-bold text-slate-900">{article.verifiedDate}</span>
              </div>

              {loc.importantDates && loc.importantDates.length > 0 && (
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-slate-500 block font-semibold">{pick('समय-सीमा व तिथियां:', 'Timelines & Dates:')}</span>
                  {loc.importantDates.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <span className="text-slate-600 block text-[11px]">{item.label}</span>
                      <span className="font-bold text-slate-900 text-xs">{item.dateOrStatus}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Official Source URLs */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {pick('आधिकारिक स्रोत लिंक', 'Official Source Links')}
              </h4>
              <ul className="space-y-2 text-xs">
                {loc.officialSources.map((src, idx) => (
                  <li key={idx}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-orange-600 font-medium flex items-center justify-between gap-1 group"
                    >
                      <span className="truncate">{src.title}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-orange-600 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Official Portal CTA Button */}
            <div className="mt-5">
              <a
                href={article.officialPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>{pick('पोर्टल पर सीधे जाएं (.gov.in)', 'Go to Official Portal (.gov.in)')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[10px] text-slate-400 text-center mt-1.5">
                {pick(
                  'सुरक्षा टिप: केवल आधिकारिक .gov.in या .nic.in डोमेन पर ही विवरण दर्ज करें।',
                  'Security tip: Enter personal details only on verified .gov.in or .nic.in domains.'
                )}
              </p>
            </div>

            {/* Related YouTube Video Card */}
            {relatedVideo && (
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-red-600" />
                  {pick('संबंधित वीडियो ट्यूटोरियल', 'Related Video Tutorial')}
                </h4>
                <div 
                  onClick={() => onOpenVideo && onOpenVideo(relatedVideo)}
                  className="group rounded-xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer hover:border-red-400 transition-all shadow-2xs"
                >
                  <div className="relative aspect-video bg-slate-900 overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${relatedVideo.youtubeId}/hqdefault.jpg`}
                      alt={relatedVideoTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Youtube className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5">
                    <h5 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-red-700">
                      {relatedVideoTitle}
                    </h5>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      {pick('वीडियो गाइड देखें →', 'Watch Video Guide →')}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Related Service Guides */}
            {relatedArticles.length > 0 && (
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  {pick('संबंधित अन्य सरकारी सेवाएँ', 'Other Related Services')}
                </h4>
                <ul className="space-y-2 text-xs">
                  {relatedArticles.map((relArt) => {
                    const relLoc = localizeArticle(relArt, language);
                    return (
                      <li key={relArt.id}>
                        <button
                          onClick={() => onNavigate('article', relArt.slug)}
                          className="text-left font-medium text-slate-700 hover:text-orange-600 hover:underline leading-snug cursor-pointer block"
                        >
                          {relLoc.displayTitle}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

          </div>

        </div>

      </div>

    </article>
  );
};
