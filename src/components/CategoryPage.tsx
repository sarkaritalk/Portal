import React, { useState } from 'react';
import { 
  Filter, 
  Search
} from 'lucide-react';
import { CategoryId, ServiceArticle } from '../types';
import { CATEGORIES } from '../data/categories';
import { ArticleCard } from './ArticleCard';
import { BiharServicesDirectory } from './BiharServicesDirectory';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES_EN, pickText } from '../data/translations/directoryTranslations';
import { localizeArticle } from '../data/translations/articleTranslations';

interface CategoryPageProps {
  categoryId: CategoryId | 'all';
  articles: ServiceArticle[];
  onSelectArticle: (slug: string) => void;
  onNavigateHome: () => void;
  onSelectCategory: (id: CategoryId | 'all') => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryId,
  articles,
  onSelectArticle,
  onNavigateHome,
  onSelectCategory,
}) => {
  const { language, isHindi, isEnglish, pick } = useLanguage();
  const [filterState, setFilterState] = useState<'all' | 'Bihar' | 'Central'>('all');
  const [localSearch, setLocalSearch] = useState('');

  const currentCategory = categoryId !== 'all' ? CATEGORIES.find(c => c.id === categoryId) : null;

  const categoryArticles = articles.filter(article => {
    if (categoryId !== 'all' && article.categoryId !== categoryId) {
      if (categoryId === 'bihar-services' && article.state === 'Bihar') {
        // match
      } else {
        return false;
      }
    }

    if (filterState !== 'all' && article.state !== filterState) {
      return false;
    }

    if (localSearch.trim()) {
      const q = localSearch.toLowerCase();
      const loc = localizeArticle(article, 'en');
      const match =
        article.titleHi.toLowerCase().includes(q) ||
        article.titleEn.toLowerCase().includes(q) ||
        article.shortSummary.toLowerCase().includes(q) ||
        loc.shortSummary.toLowerCase().includes(q) ||
        article.department.toLowerCase().includes(q) ||
        loc.department.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  const currentTitle = currentCategory
    ? pickText(language, currentCategory.nameHi, currentCategory.nameEn)
    : pick('सभी सरकारी सेवाएँ और योजनाएँ', 'All Government Services & Schemes');

  const currentDescription = currentCategory
    ? isHindi
      ? currentCategory.description
      : isEnglish
        ? (CATEGORIES_EN[currentCategory.id] || currentCategory.description)
        : `${currentCategory.description} (${CATEGORIES_EN[currentCategory.id] || currentCategory.nameEn})`
    : pick(
        'भारत और बिहार सरकार की समस्त कल्याणकारी योजनाओं, पहचान पत्रों और नागरिक सेवाओं की विस्तृत सूची।',
        'Complete directory of welfare schemes, identity documents, and citizen services from the Government of India and Bihar.'
      );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      
      {/* Category Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <button
            onClick={onNavigateHome}
            className="hover:text-orange-600 transition-colors cursor-pointer"
          >
            {pick('होम', 'Home')}
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-800">
            {currentTitle}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {currentTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              {currentDescription}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              {pick(`कुल ${categoryArticles.length} सत्यापित गाइड उपलब्ध`, `${categoryArticles.length} Verified Guides Available`)}
            </span>
          </div>
        </div>
      </div>

      {/* Category Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
            categoryId === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {pick('सभी सेवाएँ', 'All Services')}
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
              categoryId === cat.id
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {pickText(language, cat.nameHi, cat.nameEn)}
          </button>
        ))}
      </div>

      {/* If this is Bihar Services category, render the comprehensive 12-category directory */}
      {categoryId === 'bihar-services' && (
        <div className="mb-12">
          <BiharServicesDirectory 
            onSelectArticle={onSelectArticle}
            isStandalonePage={true}
          />
        </div>
      )}

      {/* Filter and In-Category Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-8 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder={pick('इस श्रेणी में खोजें...', 'Search within this category...')}
            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
          <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> {pick('राज्य फ़िल्टर:', 'Jurisdiction:')}
          </span>
          <button
            onClick={() => setFilterState('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              filterState === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {pick('सभी', 'All')}
          </button>
          <button
            onClick={() => setFilterState('Bihar')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              filterState === 'Bihar' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {pick('बिहार सरकार', 'Bihar Govt')}
          </button>
          <button
            onClick={() => setFilterState('Central')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              filterState === 'Central' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {pick('केंद्रीय (भारत सरकार)', 'Central (Govt. of India)')}
          </button>
        </div>
      </div>

      {/* Articles Grid */}
      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.map(article => (
            <ArticleCard
              key={article.id}
              article={article}
              onSelect={onSelectArticle}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <p className="text-base font-bold text-slate-800">
            {pick('चयनित फ़िल्टर के अनुसार कोई लेख नहीं मिला।', 'No guides matched your selected filters.')}
          </p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {pick('कृपया अन्य श्रेणी चुनें अथवा फ़िल्टर हटाएँ।', 'Please select another category or clear your filters.')}
          </p>
          <button
            onClick={() => { setFilterState('all'); setLocalSearch(''); }}
            className="text-xs font-bold text-orange-600 underline cursor-pointer"
          >
            {pick('फ़िल्टर रीसेट करें', 'Reset Filters')}
          </button>
        </div>
      )}

    </div>
  );
};
