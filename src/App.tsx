/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ArticleView } from './components/ArticleView';
import { CategoryPage } from './components/CategoryPage';
import { VideoLibrary } from './components/VideoLibrary';
import { PortalsDirectory } from './components/PortalsDirectory';
import { StatusTrackerHub } from './components/StatusTrackerHub';
import { AdminPanel } from './components/AdminPanel';
import { StaticPages, SeoModal } from './components/StaticPages';
import { SearchBar } from './components/SearchBar';
import { NewsletterModal } from './components/NewsletterModal';
import { CentralSchemesDirectory } from './components/CentralSchemesDirectory';
import { BiharServicesDirectory } from './components/BiharServicesDirectory';
import { DivyangjanDirectory } from './components/DivyangjanDirectory';
import { EligibilityCheckerModal } from './components/EligibilityCheckerModal';
import { ServiceArticle, YouTubeVideo, CategoryId } from './types';
import { 
  getStoredArticles, 
  getStoredVideos, 
  getBookmarks
} from './utils/storage';
import { updatePageMetadata, generateArticleJsonLd, BASE_SITE_NAME } from './utils/seo';
import { useLanguage } from './context/LanguageContext';
import { localizeArticle } from './data/translations/articleTranslations';
import { VIDEOS_EN } from './data/translations/directoryTranslations';

export default function App() {
  const { language, isHindi, isEnglish, pick } = useLanguage();
  const [articles, setArticles] = useState<ServiceArticle[]>(() => getStoredArticles());
  const [videos, setVideos] = useState<YouTubeVideo[]>(() => getStoredVideos());
  const [bookmarks] = useState<string[]>(() => getBookmarks());

  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId | 'all'>('all');
  const [selectedStaticPage, setSelectedStaticPage] = useState<any>(null);
  const [selectedCentralCategory, setSelectedCentralCategory] = useState<string>('all');
  const [selectedDivyangjanSubcategory, setSelectedDivyangjanSubcategory] = useState<string>('all');

  // Modals
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [videoModal, setVideoModal] = useState<YouTubeVideo | null>(null);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [seoModalType, setSeoModalType] = useState<'sitemap' | 'robots' | null>(null);
  const [eligibilityOpen, setEligibilityOpen] = useState(false);

  // Sync state with URL search params on mount & back/forward
  useEffect(() => {
    const handleUrlState = () => {
      const params = new URLSearchParams(window.location.search);
      const articleParam = params.get('article');
      const categoryParam = params.get('category');
      const tabParam = params.get('tab');
      const pageParam = params.get('page');
      const catParam = params.get('cat');
      const subcatParam = params.get('subcat');

      if (articleParam) {
        setSelectedArticleSlug(articleParam);
        setActiveTab('article');
      } else if (categoryParam) {
        setSelectedCategoryId(categoryParam as CategoryId | 'all');
        setActiveTab('category');
      } else if (pageParam) {
        setSelectedStaticPage(pageParam);
        setActiveTab('page');
      } else if (tabParam === 'central-schemes') {
        setSelectedCentralCategory(catParam || 'all');
        setActiveTab('central-schemes');
      } else if (tabParam === 'divyangjan-schemes') {
        setSelectedDivyangjanSubcategory(subcatParam || 'all');
        setActiveTab('divyangjan-schemes');
      } else if (tabParam === 'bihar-schemes') {
        setActiveTab('bihar-schemes');
      } else if (tabParam === 'eligibility') {
        setEligibilityOpen(true);
      } else if (tabParam) {
        setActiveTab(tabParam);
      } else {
        setActiveTab('home');
        setSelectedArticleSlug(null);
      }
    };

    handleUrlState();
    window.addEventListener('popstate', handleUrlState);
    return () => window.removeEventListener('popstate', handleUrlState);
  }, []);

  // Update URL history and metadata
  const navigateTo = (tab: string, param?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const url = new URL(window.location.href);

    url.searchParams.delete('article');
    url.searchParams.delete('category');
    url.searchParams.delete('tab');
    url.searchParams.delete('page');
    url.searchParams.delete('cat');
    url.searchParams.delete('subcat');

    if (tab === 'article' && param) {
      setSelectedArticleSlug(param);
      setActiveTab('article');
      url.searchParams.set('article', param);
    } else if (tab === 'category' && param) {
      setSelectedCategoryId(param as CategoryId | 'all');
      setActiveTab('category');
      url.searchParams.set('category', param);
    } else if (tab === 'central-schemes') {
      setSelectedCentralCategory(param || 'all');
      setActiveTab('central-schemes');
      url.searchParams.set('tab', 'central-schemes');
      if (param) url.searchParams.set('cat', param);
    } else if (tab === 'divyangjan-schemes') {
      setSelectedDivyangjanSubcategory(param || 'all');
      setActiveTab('divyangjan-schemes');
      url.searchParams.set('tab', 'divyangjan-schemes');
      if (param) url.searchParams.set('subcat', param);
    } else if (tab === 'bihar-schemes') {
      setActiveTab('bihar-schemes');
      url.searchParams.set('tab', 'bihar-schemes');
    } else if (tab === 'eligibility') {
      setEligibilityOpen(true);
    } else if (tab === 'page' && param) {
      setSelectedStaticPage(param);
      setActiveTab('page');
      url.searchParams.set('page', param);
    } else if (tab === 'home') {
      setActiveTab('home');
      setSelectedArticleSlug(null);
    } else {
      setActiveTab(tab);
      url.searchParams.set('tab', tab);
    }

    window.history.pushState({}, '', url.toString());
  };

  // Dynamic SEO & Title updates (language-aware)
  useEffect(() => {
    if (activeTab === 'article' && selectedArticleSlug) {
      const currentArt = articles.find(a => a.slug === selectedArticleSlug);
      if (currentArt) {
        const loc = localizeArticle(currentArt, language);
        updatePageMetadata(loc.displayTitle, loc.shortSummary);

        const { articleSchema, faqSchema, breadcrumbSchema } = generateArticleJsonLd(currentArt, window.location.origin);
        let script = document.getElementById('json-ld-article') as HTMLScriptElement | null;
        if (!script) {
          script = document.createElement('script');
          script.id = 'json-ld-article';
          script.type = 'application/ld+json';
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify([articleSchema, faqSchema, breadcrumbSchema].filter(Boolean));
      }
    } else {
      const defaultDesc = isHindi
        ? 'सरकारी योजनाएं, ऑनलाइन डिजिटल सेवाएं, बिहार RTPS, राशन कार्ड, आधार, पैन और जनकल्याणकारी गाइड सरल भाषा में सत्यापित आधिकारिक लिंक के साथ।'
        : 'Government schemes, online digital services, Bihar RTPS, ration card, Aadhaar, PAN, and welfare guidelines in simple language with verified official links.';
      updatePageMetadata(BASE_SITE_NAME, defaultDesc);
      const script = document.getElementById('json-ld-article');
      if (script) script.remove();
    }
  }, [activeTab, selectedArticleSlug, articles, language, isHindi]);

  const currentArticle = selectedArticleSlug
    ? articles.find(a => a.slug === selectedArticleSlug) || articles[0]
    : null;

  const modalVideoTitle = videoModal
    ? isHindi
      ? videoModal.titleHi
      : isEnglish
        ? videoModal.titleEn
        : `${videoModal.titleHi} (${videoModal.titleEn})`
    : '';

  const modalVideoDesc = videoModal
    ? isHindi
      ? videoModal.description
      : isEnglish
        ? (VIDEOS_EN[videoModal.id] || videoModal.description)
        : videoModal.description
    : '';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      
      {/* Universal Header */}
      <Header
        activeTab={activeTab === 'category' ? `category-${selectedCategoryId}` : activeTab}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenEligibilityChecker={() => setEligibilityOpen(true)}
        bookmarkCount={bookmarks.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            articles={articles}
            videos={videos}
            onNavigate={navigateTo}
            onOpenSearch={() => setSearchModalOpen(true)}
            onOpenVideo={(video) => setVideoModal(video)}
            onOpenNewsletter={() => setNewsletterOpen(true)}
            onOpenEligibilityChecker={() => setEligibilityOpen(true)}
          />
        )}

        {activeTab === 'central-schemes' && (
          <CentralSchemesDirectory
            initialCategory={selectedCentralCategory}
            onSelectArticle={(slug) => navigateTo('article', slug)}
            onOpenEligibilityChecker={() => setEligibilityOpen(true)}
          />
        )}

        {activeTab === 'bihar-schemes' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
              <button
                onClick={() => navigateTo('home')}
                className="hover:text-orange-600 transition-colors cursor-pointer"
              >
                {pick('होम', 'Home')}
              </button>
              <span>/</span>
              <span className="font-semibold text-slate-800">
                {pick('बिहार सरकार की योजनाएं', 'Bihar Government Schemes', 'बिहार सरकार की योजनाएं (Bihar Schemes)')}
              </span>
            </div>
            <BiharServicesDirectory 
              onSelectArticle={(slug) => navigateTo('article', slug)}
              isStandalonePage={true}
            />
          </div>
        )}

        {activeTab === 'divyangjan-schemes' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
              <button
                onClick={() => navigateTo('home')}
                className="hover:text-indigo-600 transition-colors cursor-pointer"
              >
                {pick('होम', 'Home')}
              </button>
              <span>/</span>
              <span className="font-semibold text-slate-800">
                {pick(
                  'दिव्यांगजन योजनाएं एवं आर्थिक सहायता',
                  'Divyangjan Schemes & Financial Assistance',
                  'दिव्यांगजन योजनाएं एवं आर्थिक सहायता (Divyangjan Schemes & Financial Assistance)'
                )}
              </span>
            </div>
            <DivyangjanDirectory
              initialSubcategory={selectedDivyangjanSubcategory}
              onSelectArticle={(slug) => navigateTo('article', slug)}
              onOpenEligibilityChecker={() => setEligibilityOpen(true)}
            />
          </div>
        )}

        {activeTab === 'article' && currentArticle && (
          <ArticleView
            article={currentArticle}
            allArticles={articles}
            videos={videos}
            onNavigate={navigateTo}
            onOpenVideo={(video) => setVideoModal(video)}
          />
        )}

        {activeTab === 'category' && (
          <CategoryPage
            categoryId={selectedCategoryId}
            articles={articles}
            onSelectArticle={(slug) => navigateTo('article', slug)}
            onNavigateHome={() => navigateTo('home')}
            onSelectCategory={(id) => navigateTo('category', id)}
          />
        )}

        {activeTab === 'videos' && (
          <VideoLibrary
            videos={videos}
            onNavigateToArticle={(slug) => navigateTo('article', slug)}
            selectedVideoModal={videoModal}
            onCloseVideoModal={() => setVideoModal(null)}
            onOpenVideoModal={(video) => setVideoModal(video)}
          />
        )}

        {activeTab === 'portals' && (
          <PortalsDirectory />
        )}

        {activeTab === 'tracker' && (
          <StatusTrackerHub
            onNavigateToArticle={(slug) => navigateTo('article', slug)}
          />
        )}

        {activeTab === 'admin' && (
          <AdminPanel
            articles={articles}
            videos={videos}
            onUpdateArticles={(updated) => setArticles(updated)}
            onUpdateVideos={(updated) => setVideos(updated)}
            onPreviewArticle={(slug) => navigateTo('article', slug)}
          />
        )}

        {activeTab === 'page' && selectedStaticPage && (
          <StaticPages
            pageId={selectedStaticPage}
            articles={articles}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenSitemapModal={() => setSeoModalType('sitemap')}
        onOpenRobotsModal={() => setSeoModalType('robots')}
      />

      {/* Modals */}
      <SearchBar
        articles={articles}
        isOpen={searchModalOpen}
        isModal={true}
        onClose={() => setSearchModalOpen(false)}
        onSelectArticle={(slug) => {
          setSearchModalOpen(false);
          navigateTo('article', slug);
        }}
      />

      <EligibilityCheckerModal
        isOpen={eligibilityOpen}
        onClose={() => setEligibilityOpen(false)}
        onSelectArticle={(slug) => {
          setEligibilityOpen(false);
          navigateTo('article', slug);
        }}
        onNavigateTab={navigateTo}
      />

      {videoModal && activeTab !== 'videos' && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <h4 className="text-sm font-bold truncate pr-4">{modalVideoTitle}</h4>
              <button
                onClick={() => setVideoModal(null)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoModal.youtubeId}?autoplay=1`}
                title={modalVideoTitle}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 flex items-center justify-between gap-3 bg-slate-50">
              <p className="text-xs text-slate-600 line-clamp-1">{modalVideoDesc}</p>
              {videoModal.relatedArticleSlug && (
                <button
                  onClick={() => {
                    const slug = videoModal.relatedArticleSlug!;
                    setVideoModal(null);
                    navigateTo('article', slug);
                  }}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl whitespace-nowrap cursor-pointer"
                >
                  {pick('लिखित गाइड खोलें', 'Open Written Guide')}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <NewsletterModal
        isOpen={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />

      {seoModalType && (
        <SeoModal
          type={seoModalType}
          articles={articles}
          onClose={() => setSeoModalType(null)}
        />
      )}

    </div>
  );
}
