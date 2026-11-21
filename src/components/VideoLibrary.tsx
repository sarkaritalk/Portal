import React, { useState } from 'react';
import { Youtube, ExternalLink, Play, Calendar, FileText, X } from 'lucide-react';
import { YouTubeVideo, CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';
import { useLanguage } from '../context/LanguageContext';
import { VIDEOS_EN, pickText } from '../data/translations/directoryTranslations';

interface VideoLibraryProps {
  videos: YouTubeVideo[];
  onNavigateToArticle: (slug: string) => void;
  selectedVideoModal?: YouTubeVideo | null;
  onCloseVideoModal?: () => void;
  onOpenVideoModal?: (video: YouTubeVideo) => void;
}

export const VideoLibrary: React.FC<VideoLibraryProps> = ({
  videos,
  onNavigateToArticle,
  selectedVideoModal,
  onCloseVideoModal,
  onOpenVideoModal,
}) => {
  const { language, isHindi, isEnglish, isBilingual, pick } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(v => v.categoryId === selectedCategory);

  const getVideoTitle = (v: YouTubeVideo) =>
    isHindi ? v.titleHi : isEnglish ? v.titleEn : `${v.titleHi} (${v.titleEn})`;

  const getVideoDesc = (v: YouTubeVideo) => {
    const enDesc = VIDEOS_EN[v.id];
    if (isHindi) return v.description;
    if (isEnglish) return enDesc || v.description;
    return v.description;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 via-rose-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white mb-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-600/40 text-red-200 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30 mb-3">
            <Youtube className="w-4 h-4 fill-current" />
            <span>{pick('Sarkari Talk वीडियो मार्गदर्शिका', 'Sarkari Talk Video Tutorials (YouTube Library)', 'Sarkari Talk वीडियो मार्गदर्शिका (YouTube Library)')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            {pick('सरकारी फॉर्म और ऑनलाइन प्रक्रियाओं के सरल वीडियो', 'Step-by-Step Video Guides for Government Forms & Online Services')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {pick(
              'हर सरकारी सेवा का लाइव डेमो और स्टेप-बाय-स्टेप वीडियो ट्यूटोरियल देखें ताकि फॉर्म भरते समय कोई गलती न हो।',
              'Watch visual demonstrations and step-by-step video walkthroughs for government services so you can apply accurately without errors.'
            )}
          </p>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
          }`}
        >
          {pick(`सभी वीडियो (${videos.length})`, `All Videos (${videos.length})`)}
        </button>
        {CATEGORIES.filter(c => videos.some(v => v.categoryId === c.id)).map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {pickText(language, cat.nameHi, cat.nameEn)}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map(video => {
          const category = CATEGORIES.find(c => c.id === video.categoryId);
          const thumbnailUrl = video.thumbnailUrl || `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
          const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
          const videoTitle = getVideoTitle(video);
          const videoDesc = getVideoDesc(video);

          return (
            <div
              key={video.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={() => onOpenVideoModal ? onOpenVideoModal(video) : window.open(watchUrl, '_blank')}
                  className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer"
                >
                  <img
                    src={thumbnailUrl}
                    alt={videoTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                  {video.duration && (
                    <div className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      {category ? pickText(language, category.nameHi, category.nameEn) : pick('सामान्य', 'General')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {video.publishedDate}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onOpenVideoModal ? onOpenVideoModal(video) : window.open(watchUrl, '_blank')}
                    className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-700 transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {videoTitle}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {videoDesc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenVideoModal ? onOpenVideoModal(video) : window.open(watchUrl, '_blank')}
                    className="flex-1 py-2 px-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Youtube className="w-3.5 h-3.5 fill-current" />
                    <span>{pick('वीडियो देखें', 'Watch Video')}</span>
                  </button>

                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors"
                    title={pick('YouTube पर अलग टैब में खोलें', 'Open on YouTube in new tab')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {video.relatedArticleSlug && (
                  <button
                    onClick={() => onNavigateToArticle(video.relatedArticleSlug!)}
                    className="w-full text-center text-[11px] text-orange-700 hover:text-orange-900 font-semibold hover:underline flex items-center justify-center gap-1 pt-1 cursor-pointer"
                  >
                    <FileText className="w-3 h-3" />
                    <span>{pick('संबंधित लिखित गाइड पढ़ें →', 'Read Related Written Guide →')}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Video Modal Player */}
      {selectedVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <h4 className="text-sm font-bold truncate pr-4">{getVideoTitle(selectedVideoModal)}</h4>
              <button
                onClick={onCloseVideoModal}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideoModal.youtubeId}?autoplay=1`}
                title={getVideoTitle(selectedVideoModal)}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-slate-50">
              <p className="text-xs text-slate-600 line-clamp-1">{getVideoDesc(selectedVideoModal)}</p>
              {selectedVideoModal.relatedArticleSlug && (
                <button
                  onClick={() => {
                    if (onCloseVideoModal) onCloseVideoModal();
                    onNavigateToArticle(selectedVideoModal.relatedArticleSlug!);
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

    </div>
  );
};
