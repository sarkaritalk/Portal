import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  Plus, 
  Edit3, 
  Trash2, 
  Save, 
  RotateCcw, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Youtube, 
  FileText, 
  Eye
} from 'lucide-react';
import { ServiceArticle, YouTubeVideo, CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';
import { resetContentToDefaults, saveStoredArticles, saveStoredVideos } from '../utils/storage';
import { useLanguage } from '../context/LanguageContext';
import { pickText } from '../data/translations/directoryTranslations';
import { localizeArticle } from '../data/translations/articleTranslations';

interface AdminPanelProps {
  articles: ServiceArticle[];
  videos: YouTubeVideo[];
  onUpdateArticles: (articles: ServiceArticle[]) => void;
  onUpdateVideos: (videos: YouTubeVideo[]) => void;
  onPreviewArticle: (slug: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  articles,
  videos,
  onUpdateArticles,
  onUpdateVideos,
  onPreviewArticle,
}) => {
  const { language, isEnglish, pick } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'articles' | 'videos' | 'backup'>('articles');

  const [editingArticle, setEditingArticle] = useState<ServiceArticle | null>(null);
  const [isNewArticle, setIsNewArticle] = useState(false);

  const [editingVideo, setEditingVideo] = useState<YouTubeVideo | null>(null);
  const [isNewVideo, setIsNewVideo] = useState(false);

  const [feedback, setFeedback] = useState<string | null>(null);

  const showFeedback = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'sarkari2026' || password === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError(pick('गलत पासवर्ड। कृपया पुनः प्रयास करें। (डिफ़ॉल्ट पासकी: sarkari2026)', 'Incorrect passkey. Please try again. (Default: sarkari2026)'));
    }
  };

  const handleStartNewArticle = () => {
    const newArt: ServiceArticle = {
      id: `art-${Date.now()}`,
      slug: `service-${Date.now()}`,
      titleHi: '',
      titleEn: '',
      categoryId: 'bihar-services',
      state: 'Bihar',
      department: '',
      shortSummary: '',
      verifiedDate: new Date().toISOString().split('T')[0],
      statusVerification: 'verified',
      officialPortalUrl: 'https://',
      officialPortalName: '',
      whatIs: '',
      purposeAndBenefits: [''],
      eligibility: [''],
      ineligibility: [''],
      documentsRequired: [''],
      fees: {
        officialFee: 'निःशुल्क (₹0)',
      },
      onlineProcessSteps: [
        { step: 1, title: 'पोर्टल खोलें', description: 'आधिकारिक वेबसाइट पर जाएं।' },
      ],
      statusCheckGuide: ['पोर्टल पर एप्लीकेशन नंबर डालकर स्थिति जांचें।'],
      commonMistakesAndTips: ['दस्तावेज़ साफ अपलोड करें।'],
      faqs: [
        { question: 'आवेदन की अंतिम तिथि क्या है?', answer: 'आधिकारिक पोर्टल पर देखें।' },
      ],
      officialSources: [
        { title: 'आधिकारिक वेबसाइट', url: 'https://' },
      ],
      status: 'published',
    };
    setEditingArticle(newArt);
    setIsNewArticle(true);
  };

  const handleSaveArticle = () => {
    if (!editingArticle || !editingArticle.titleHi.trim()) {
      showFeedback(pick('कृपया हिंदी शीर्षक दर्ज करें।', 'Please enter a Hindi title before saving.'));
      return;
    }

    const updatedList = isNewArticle
      ? [editingArticle, ...articles]
      : articles.map(a => a.id === editingArticle.id ? editingArticle : a);

    saveStoredArticles(updatedList);
    onUpdateArticles(updatedList);
    setEditingArticle(null);
    showFeedback(pick('लेख सफलतापूर्वक सुरक्षित (Saved) किया गया!', 'Article saved successfully!'));
  };

  const handleDeleteArticle = (id: string) => {
    if (window.confirm(pick('क्या आप वाकई इस लेख को हटाना चाहते हैं?', 'Are you sure you want to delete this article?'))) {
      const updated = articles.filter(a => a.id !== id);
      saveStoredArticles(updated);
      onUpdateArticles(updated);
      showFeedback(pick('लेख हटा दिया गया।', 'Article deleted.'));
    }
  };

  const handleStartNewVideo = () => {
    const newVid: YouTubeVideo = {
      id: `vid-${Date.now()}`,
      youtubeId: '',
      titleHi: '',
      titleEn: '',
      description: '',
      categoryId: 'bihar-services',
      publishedDate: new Date().toISOString().split('T')[0],
      duration: '10:00',
    };
    setEditingVideo(newVid);
    setIsNewVideo(true);
  };

  const handleSaveVideo = () => {
    if (!editingVideo || !editingVideo.youtubeId.trim() || !editingVideo.titleHi.trim()) {
      showFeedback(pick('कृपया YouTube Video ID और शीर्षक दर्ज करें।', 'Please enter YouTube Video ID and title.'));
      return;
    }

    const updatedVideos = isNewVideo
      ? [editingVideo, ...videos]
      : videos.map(v => v.id === editingVideo.id ? editingVideo : v);

    saveStoredVideos(updatedVideos);
    onUpdateVideos(updatedVideos);
    setEditingVideo(null);
    showFeedback(pick('वीडियो सफलतापूर्वक सुरक्षित किया गया!', 'Video saved successfully!'));
  };

  const handleDeleteVideo = (id: string) => {
    if (window.confirm(pick('क्या आप वाकई इस वीडियो को हटाना चाहते हैं?', 'Are you sure you want to delete this video?'))) {
      const updated = videos.filter(v => v.id !== id);
      saveStoredVideos(updated);
      onUpdateVideos(updated);
      showFeedback(pick('वीडियो हटा दिया गया।', 'Video deleted.'));
    }
  };

  const handleExportData = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      articles,
      videos,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sarkari-talk-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showFeedback(pick('बैकअप JSON फाइल सफलतापूर्वक डाउनलोड की गई।', 'Backup JSON file downloaded successfully.'));
  };

  const handleResetDefaults = () => {
    if (window.confirm(pick('क्या आप सभी लेखों और वीडियो को मूल सत्यापित डिफ़ॉल्ट डेटा पर रीसेट करना चाहते हैं?', 'Reset all articles and videos back to verified default data?'))) {
      resetContentToDefaults();
      window.location.reload();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 animate-in fade-in duration-200">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md">
          <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-center text-slate-900 mb-1">
            {pick('Sarkari Talk एडमिन लॉगिन', 'Sarkari Talk Admin Login')}
          </h2>
          <p className="text-xs text-center text-slate-500 mb-6">
            {pick(
              'सामग्री प्रबंधन, नए लेख जोड़ने और YouTube वीडियो अपडेट करने के लिए सुरक्षित क्षेत्र।',
              'Restricted area for managing service guides, articles, and YouTube tutorials.'
            )}
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                {pick('एडमिन सुरक्षा पासकी', 'Admin Security Passkey')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={pick('पासकी दर्ज करें...', 'Enter passkey...')}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                autoFocus
              />
              <span className="text-[11px] text-slate-600 block mt-1">
                {pick('डिफ़ॉल्ट पासकी:', 'Default passkey:')}{' '}
                <code className="bg-slate-100 px-1 py-0.5 rounded text-orange-600">sarkari2026</code>
              </span>
            </div>

            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              {pick('लॉगिन करें', 'Log In')}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      
      {/* Admin Header */}
      <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded">
              {pick('एडमिन अधिकृत', 'Admin Authorized')}
            </span>
            <span className="text-xs text-slate-400">{pick('सामग्री प्रबंधन प्रणाली (CMS)', 'Content Management System (CMS)')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            {pick('कंटेंट एडिटर एवं सत्यापन प्रबंधन', 'Content Editor & Verification Console')}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportData}
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4 text-orange-400" />
            <span>{pick('बैकअप JSON', 'Export JSON')}</span>
          </button>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-3 py-2 bg-rose-900/60 hover:bg-rose-900 text-rose-200 text-xs font-bold rounded-xl border border-rose-800 flex items-center gap-1.5 cursor-pointer"
          >
            <Unlock className="w-4 h-4" />
            <span>{pick('लॉगआउट', 'Log Out')}</span>
          </button>
        </div>
      </div>

      {feedback && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-bold rounded-xl flex items-center gap-2 shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => { setActiveTab('articles'); setEditingArticle(null); }}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'articles' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>{pick(`सरकारी सेवा लेख (${articles.length})`, `Service Articles (${articles.length})`)}</span>
        </button>
        <button
          onClick={() => { setActiveTab('videos'); setEditingVideo(null); }}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'videos' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Youtube className="w-4 h-4" />
          <span>{pick(`यूट्यूब वीडियो (${videos.length})`, `YouTube Videos (${videos.length})`)}</span>
        </button>
        <button
          onClick={() => setActiveTab('backup')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'backup' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <RotateCcw className="w-4 h-4" />
          <span>{pick('डेटा व बैकअप रीसेट', 'Backup & Reset')}</span>
        </button>
      </div>

      {/* ARTICLES MANAGEMENT TAB */}
      {activeTab === 'articles' && (
        <div>
          {!editingArticle ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs text-slate-600 font-medium">
                  {pick('सभी प्रकाशित और ड्राफ्ट सरकारी योजनाओं की सूची।', 'List of all published and draft government service guides.')}
                </p>
                <button
                  onClick={handleStartNewArticle}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>{pick('नया लेख जोड़ें', 'Add New Article')}</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs divide-y divide-slate-100">
                {articles.map(article => {
                  const loc = localizeArticle(article, language);
                  return (
                    <div key={article.id} className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            article.state === 'Bihar' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {article.state}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">{loc.department}</span>
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                            {pick('सत्यापित:', 'Verified:')} {article.verifiedDate}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {loc.displayTitle}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">{loc.shortSummary}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => onPreviewArticle(article.slug)}
                          className="p-2 border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-600 cursor-pointer"
                          title={pick('लाइव देखें', 'Preview Live')}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => { setEditingArticle(article); setIsNewArticle(false); }}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>{pick('संपादित करें', 'Edit')}</span>
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(article.id)}
                          className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                          title={pick('हटाएं', 'Delete')}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  {isNewArticle ? pick('नया सेवा लेख बनाएँ', 'Create New Service Guide') : pick('लेख संपादित करें', 'Edit Article')}
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingArticle(null)}
                    className="px-3 py-1.5 border border-slate-300 text-slate-700 text-xs font-bold rounded-lg cursor-pointer hover:bg-slate-50"
                  >
                    {pick('रद्द करें', 'Cancel')}
                  </button>
                  <button
                    onClick={handleSaveArticle}
                    className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Save className="w-4 h-4" />
                    <span>{pick('सेव करें', 'Save')}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('हिंदी शीर्षक *', 'Hindi Title *')}</label>
                  <input
                    type="text"
                    value={editingArticle.titleHi}
                    onChange={(e) => setEditingArticle({ ...editingArticle, titleHi: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('अंग्रेजी शीर्षक', 'English Title')}</label>
                  <input
                    type="text"
                    value={editingArticle.titleEn}
                    onChange={(e) => setEditingArticle({ ...editingArticle, titleEn: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('श्रेणी', 'Category')}</label>
                  <select
                    value={editingArticle.categoryId}
                    onChange={(e) => setEditingArticle({ ...editingArticle, categoryId: e.target.value as CategoryId })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c.id} value={c.id}>{pickText(language, c.nameHi, c.nameEn)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('राज्य / स्तर', 'State / Level')}</label>
                  <select
                    value={editingArticle.state}
                    onChange={(e) => setEditingArticle({ ...editingArticle, state: e.target.value as 'Bihar' | 'Central' | 'All India' })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                  >
                    <option value="Bihar">{pick('बिहार सरकार', 'Government of Bihar')}</option>
                    <option value="Central">{pick('भारत सरकार (केंद्रीय)', 'Government of India (Central)')}</option>
                    <option value="All India">{pick('अखिल भारतीय', 'All India')}</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('संबद्ध सरकारी विभाग', 'Department')}</label>
                  <input
                    type="text"
                    value={editingArticle.department}
                    onChange={(e) => setEditingArticle({ ...editingArticle, department: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('सत्यापन तिथि (YYYY-MM-DD)', 'Verified Date (YYYY-MM-DD)')}</label>
                  <input
                    type="date"
                    value={editingArticle.verifiedDate}
                    onChange={(e) => setEditingArticle({ ...editingArticle, verifiedDate: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('आधिकारिक पोर्टल नाम', 'Official Portal Name')}</label>
                  <input
                    type="text"
                    value={editingArticle.officialPortalName}
                    onChange={(e) => setEditingArticle({ ...editingArticle, officialPortalName: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('आधिकारिक पोर्टल URL', 'Official Portal URL')}</label>
                  <input
                    type="url"
                    value={editingArticle.officialPortalUrl}
                    onChange={(e) => setEditingArticle({ ...editingArticle, officialPortalUrl: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('सरकारी फीस (शुल्क)', 'Official Fee')}</label>
                  <input
                    type="text"
                    value={editingArticle.fees.officialFee}
                    onChange={(e) => setEditingArticle({ 
                      ...editingArticle, 
                      fees: { ...editingArticle.fees, officialFee: e.target.value } 
                    })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('स्टेटस चेक URL', 'Status Check URL')}</label>
                  <input
                    type="url"
                    value={editingArticle.statusCheckUrl || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, statusCheckUrl: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1 text-xs">{pick('संक्षिप्त परिचय', 'Short Summary')}</label>
                <textarea
                  rows={2}
                  value={editingArticle.shortSummary}
                  onChange={(e) => setEditingArticle({ ...editingArticle, shortSummary: e.target.value })}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1 text-xs">{pick('यह सेवा क्या है?', 'What is this service?')}</label>
                <textarea
                  rows={3}
                  value={editingArticle.whatIs}
                  onChange={(e) => setEditingArticle({ ...editingArticle, whatIs: e.target.value })}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setEditingArticle(null)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 cursor-pointer"
                >
                  {pick('रद्द करें', 'Cancel')}
                </button>
                <button
                  onClick={handleSaveArticle}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  {pick('सेव करें', 'Save')}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* YOUTUBE VIDEOS MANAGEMENT TAB */}
      {activeTab === 'videos' && (
        <div>
          {!editingVideo ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs text-slate-600 font-medium">
                  {pick('YouTube वीडियो लाइब्रेरी प्रबंधन। वास्तविक वीडियो ID दर्ज करें ताकि थंबनेल लोड हो सके।', 'Manage YouTube tutorials. Enter valid YouTube IDs for automatic thumbnails.')}
                </p>
                <button
                  onClick={handleStartNewVideo}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>{pick('नया वीडियो जोड़ें', 'Add New Video')}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map(video => (
                  <div key={video.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden p-4 space-y-3">
                    <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden relative">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={isEnglish ? video.titleEn : video.titleHi}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2">
                        {isEnglish ? video.titleEn : video.titleHi}
                      </h4>
                      <span className="text-[11px] text-slate-400 block mt-1">ID: {video.youtubeId}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <button
                        onClick={() => { setEditingVideo(video); setIsNewVideo(false); }}
                        className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                      >
                        {pick('संपादित करें', 'Edit')}
                      </button>
                      <button
                        onClick={() => handleDeleteVideo(video.id)}
                        className="text-xs text-rose-600 font-bold hover:underline cursor-pointer"
                      >
                        {pick('हटाएं', 'Delete')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 max-w-2xl">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                {isNewVideo ? pick('नया YouTube वीडियो जोड़ें', 'Add New YouTube Video') : pick('वीडियो संपादित करें', 'Edit Video')}
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">YouTube Video ID *</label>
                  <input
                    type="text"
                    value={editingVideo.youtubeId}
                    onChange={(e) => setEditingVideo({ ...editingVideo, youtubeId: e.target.value })}
                    placeholder={pick('उदा: dQw4w9WgXcQ (watch?v= के बाद वाला भाग)', 'e.g. dQw4w9WgXcQ (part after watch?v=)')}
                    className="w-full p-2.5 border border-slate-300 rounded-lg"
                  />
                  <span className="text-[10px] text-slate-500 block mt-1">
                    {pick('थंबनेल स्वतः', 'Thumbnail automatically loads from')} https://img.youtube.com/vi/{'{id}'}/hqdefault.jpg
                  </span>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('वीडियो शीर्षक (हिंदी) *', 'Video Title (Hindi) *')}</label>
                  <input
                    type="text"
                    value={editingVideo.titleHi}
                    onChange={(e) => setEditingVideo({ ...editingVideo, titleHi: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('वीडियो शीर्षक (अंग्रेजी)', 'Video Title (English)')}</label>
                  <input
                    type="text"
                    value={editingVideo.titleEn}
                    onChange={(e) => setEditingVideo({ ...editingVideo, titleEn: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('संक्षिप्त विवरण', 'Short Description')}</label>
                  <textarea
                    rows={2}
                    value={editingVideo.description}
                    onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">{pick('श्रेणी', 'Category')}</label>
                    <select
                      value={editingVideo.categoryId}
                      onChange={(e) => setEditingVideo({ ...editingVideo, categoryId: e.target.value as CategoryId })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg"
                    >
                      {CATEGORIES.map(c => (
                        <option key={c.id} value={c.id}>{pickText(language, c.nameHi, c.nameEn)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">{pick('अवधि (उदा: 12:40)', 'Duration (e.g. 12:40)')}</label>
                    <input
                      type="text"
                      value={editingVideo.duration || ''}
                      onChange={(e) => setEditingVideo({ ...editingVideo, duration: e.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{pick('संबंधित लेख (वैकल्पिक)', 'Related Guide (Optional)')}</label>
                  <select
                    value={editingVideo.relatedArticleSlug || ''}
                    onChange={(e) => setEditingVideo({ ...editingVideo, relatedArticleSlug: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg"
                  >
                    <option value="">{pick('कोई नहीं', 'None')}</option>
                    {articles.map(a => (
                      <option key={a.slug} value={a.slug}>{isEnglish ? a.titleEn : a.titleHi}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  onClick={() => setEditingVideo(null)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold cursor-pointer"
                >
                  {pick('रद्द करें', 'Cancel')}
                </button>
                <button
                  onClick={handleSaveVideo}
                  className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  {pick('वीडियो सेव करें', 'Save Video')}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* BACKUP & RESET TAB */}
      {activeTab === 'backup' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-2xl space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
            {pick('डेटा बैकअप, रिस्टोर और रीसेट विकल्प', 'Data Backup, Restore & Reset Options')}
          </h3>

          <div className="space-y-4 text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900">{pick('कंटेंट बैकअप डाउनलोड करें (JSON)', 'Download Content Backup (JSON)')}</h4>
                <p className="text-slate-500">
                  {pick('सभी प्रकाशित लेखों, गाइडों और यूट्यूब वीडियो की कॉपी अपने कंप्यूटर पर सुरक्षित रखें।', 'Export all published guides and YouTube tutorials to your device.')}
                </p>
              </div>
              <button
                onClick={handleExportData}
                className="px-4 py-2 bg-slate-900 hover:bg-orange-600 text-white font-bold rounded-xl shrink-0 cursor-pointer"
              >
                {pick('डाउनलोड', 'Download')}
              </button>
            </div>

            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-rose-900">{pick('डिफ़ॉल्ट सत्यापित डेटा पर रीसेट करें', 'Reset to Verified Default Data')}</h4>
                <p className="text-rose-700">
                  {pick('यदि कोई गलत संपादन हो गया हो, तो सभी लेखों को मूल प्रामाणिक डेटा पर पुनः स्थापित करें।', 'Restore all guides and videos back to their original verified dataset.')}
                </p>
              </div>
              <button
                onClick={handleResetDefaults}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shrink-0 cursor-pointer"
              >
                {pick('रीसेट करें', 'Reset Data')}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
