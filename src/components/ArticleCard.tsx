import React from 'react';
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { ServiceArticle } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { localizeArticle } from '../data/translations/articleTranslations';

interface ArticleCardProps {
  article: ServiceArticle;
  onSelect: (slug: string) => void;
  ctaText?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  onSelect, 
  ctaText 
}) => {
  const { language, pick } = useLanguage();
  const localized = localizeArticle(article, language);

  const resolvedCta = ctaText ?? pick('टूल एवं गाइड खोलें', 'Open Tool & Guide');
  const stateLabel =
    article.state === 'Bihar'
      ? pick('बिहार सरकार', 'Bihar Government')
      : pick('केंद्र सरकार', 'Central Government');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-red-500/70 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between overflow-hidden group">
      <div className="p-5 sm:p-6 space-y-3">
        {/* Top badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
            article.state === 'Bihar' 
              ? 'bg-orange-100 text-orange-900 border border-orange-200' 
              : 'bg-blue-100 text-blue-900 border border-blue-200'
          }`}>
            {stateLabel}
          </span>
          <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md font-bold flex items-center gap-1 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            {pick('सत्यापित', 'Verified')}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 
            onClick={() => onSelect(article.slug)}
            className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors cursor-pointer leading-snug"
          >
            {localized.displayTitle}
          </h3>
          {localized.displaySubtitle && (
            <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
              {localized.displaySubtitle}
            </p>
          )}
        </div>

        {/* Short summary */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {localized.shortSummary}
        </p>

        {/* Department and Fee badge */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-medium border-t border-slate-100">
          <span className="truncate max-w-[180px]">{localized.department}</span>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px] truncate max-w-[160px]">
            {localized.fees.officialFee}
          </span>
        </div>
      </div>

      {/* Bottom CTA Row */}
      <div className="px-5 sm:px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(article.slug)}
          className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 cursor-pointer transition-colors"
        >
          <span>{resolvedCta}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href={article.officialPortalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-slate-500 hover:text-blue-700 font-medium flex items-center gap-1"
          title={`${pick('पोर्टल पर जाएं:', 'Visit')} ${article.officialPortalName}`}
        >
          <span>{pick('आधिकारिक पोर्टल', 'Official Portal')}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
