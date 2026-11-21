import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, Search, CheckCircle2, Lock, ExternalLink } from 'lucide-react';
import { OFFICIAL_PORTALS } from '../data/officialPortals';
import { useLanguage } from '../context/LanguageContext';
import { PORTALS_EN, pickText, pickArray } from '../data/translations/directoryTranslations';

export const PortalsDirectory: React.FC = () => {
  const { language, isHindi, isEnglish, isBilingual, pick } = useLanguage();
  const [filterLevel, setFilterLevel] = useState<'all' | 'Bihar' | 'Central' | 'National Utility'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPortals = OFFICIAL_PORTALS.filter(portal => {
    if (filterLevel !== 'all' && portal.level !== filterLevel) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const pEn = PORTALS_EN[portal.id];
      const match =
        portal.nameHi.toLowerCase().includes(q) ||
        portal.nameEn.toLowerCase().includes(q) ||
        portal.department.toLowerCase().includes(q) ||
        (pEn?.departmentEn.toLowerCase().includes(q) ?? false) ||
        (pEn?.descriptionEn.toLowerCase().includes(q) ?? false) ||
        portal.servicesCovered.some(s => s.toLowerCase().includes(q)) ||
        (pEn?.servicesCoveredEn.some(s => s.toLowerCase().includes(q)) ?? false);
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white mb-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{pick('आधिकारिक एवं प्रामाणिक सरकारी पोर्टल डायरेक्टरी', 'Official & Verified Government Portals Directory')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            {pick('भारत एवं बिहार सरकार के अधिकृत वेब पोर्टल', 'Authorized Web Portals of Government of India & Bihar')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {pick(
              'सुरक्षित एवं सीधी सरकारी सेवाएं। किसी भी अनधिकृत या फर्जी वेबसाइट से बचें। सभी लिंक केवल .gov.in एवं .nic.in अधिकृत सर्वरों से जुड़े हैं।',
              'Safe and direct government services. Avoid unauthorized or fake websites. All links point strictly to official .gov.in and .nic.in domains.'
            )}
          </p>
        </div>
      </div>

      {/* Cyber Safety Warning Notice */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 mb-8 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="p-3 bg-amber-500 text-white rounded-xl shrink-0">
          <Lock className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-sm text-amber-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            {pick('असली सरकारी वेबसाइट पहचानने का नियम', 'Cyber Safety Rule: How to Verify Official Websites', 'असली सरकारी वेबसाइट पहचानने का नियम (Cyber Safety Rule)')}
          </h4>
          <p className="leading-relaxed text-amber-900">
            {pick(
              'भारत सरकार और राज्य सरकारों के आधिकारिक पोर्टलों के पते के अंत में हमेशा .gov.in या .nic.in होता है। यदि किसी वेबसाइट के अंत में .com, .org, या .online हो और वह सरकारी फॉर्म भरने या पैसे मांगने का दावा करे, तो वह फर्जी हो सकती है।',
              'Official Indian Central and State Government websites always end with .gov.in or .nic.in. If a site ends in .com, .org, or .online and claims to collect fees for government forms, treat it with caution.'
            )}
          </p>
        </div>
      </div>

      {/* Controls: Search and Filter Tabs */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={pick('पोर्टल या सेवा का नाम खोजें...', 'Search portal or service name...')}
            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto scrollbar-none pb-1 sm:pb-0">
          <button
            onClick={() => setFilterLevel('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
              filterLevel === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {pick(`सभी (${OFFICIAL_PORTALS.length})`, `All (${OFFICIAL_PORTALS.length})`)}
          </button>
          <button
            onClick={() => setFilterLevel('Bihar')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
              filterLevel === 'Bihar'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {pick('बिहार सरकार', 'Bihar Govt')}
          </button>
          <button
            onClick={() => setFilterLevel('Central')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
              filterLevel === 'Central'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {pick('भारत सरकार (केंद्रीय)', 'Central Govt')}
          </button>
          <button
            onClick={() => setFilterLevel('National Utility')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
              filterLevel === 'National Utility'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {pick('डिजिटल यूटिलिटी', 'Digital Utility')}
          </button>
        </div>
      </div>

      {/* Portals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPortals.map(portal => {
          const pEn = PORTALS_EN[portal.id];
          const dept = pickText(language, portal.department, pEn?.departmentEn || portal.department);
          const desc = isHindi ? portal.description : isEnglish ? (pEn?.descriptionEn || portal.description) : portal.description;
          const services = pickArray(language, portal.servicesCovered, pEn?.servicesCoveredEn);

          return (
            <div
              key={portal.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    portal.level === 'Bihar' 
                      ? 'bg-orange-100 text-orange-800 border border-orange-200' 
                      : portal.level === 'Central' 
                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}>
                    {portal.level === 'Bihar'
                      ? pick('बिहार सरकार', 'Bihar Government')
                      : portal.level === 'Central'
                        ? pick('केंद्रीय पोर्टल', 'Central Portal')
                        : pick('राष्ट्रीय यूटिलिटी', 'National Utility')}
                  </span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {pick('आधिकारिक', 'Official')}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {isEnglish ? portal.nameEn : portal.nameHi}
                  </h3>
                  {isBilingual && (
                    <p className="text-xs text-slate-500 font-medium">{portal.nameEn}</p>
                  )}
                  <p className="text-[11px] text-slate-600 font-semibold mt-1">{dept}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {desc}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] text-slate-500 block font-semibold mb-1">
                    {pick('उपलब्ध मुख्य सेवाएँ:', 'Key Services Covered:')}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {services.map((srv, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-slate-900 hover:bg-orange-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer group"
                >
                  <span>{pick('आधिकारिक पोर्टल खोलें', 'Open Official Portal')}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="text-[10px] text-slate-500 font-mono text-center block mt-1 truncate">
                  {portal.url}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
