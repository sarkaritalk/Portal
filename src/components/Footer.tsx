import React from 'react';
import { 
  ExternalLink, 
  ShieldAlert, 
  CheckCircle2, 
  Mail, 
  Globe, 
  Code,
  FileCode,
  Youtube,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';
import { Logo } from './Logo';
import { SOCIAL_CONFIG, getWhatsAppUrl } from '../config/social';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (tab: string, param?: string) => void;
  onOpenSitemapModal: () => void;
  onOpenRobotsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenSitemapModal,
  onOpenRobotsModal,
}) => {
  const { language, pick, pickSlash } = useLanguage();
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <footer className="bg-[#0A1938] text-slate-300 border-t-4 border-red-600 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Legal Disclaimer Card (Exact Section 9 Content) */}
        <div className="bg-slate-900/95 border border-amber-500/50 rounded-2xl p-4 sm:p-6 mb-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="p-3 bg-amber-500/15 text-amber-400 rounded-xl border border-amber-500/30 shrink-0">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <h3 className="text-white text-base sm:text-lg font-bold flex items-center gap-2 flex-wrap">
                <span>{pickSlash('महत्वपूर्ण कानूनी अस्वीकरण', 'Important Legal Disclaimer')}</span>
                <span className="bg-amber-500/20 text-amber-300 text-xs px-2 py-0.5 rounded font-mono">
                  {pick('स्वतंत्र प्लेटफॉर्म', 'Independent Platform')}
                </span>
              </h3>
              {(language === 'hi' || language === 'bilingual') && (
                <p>
                  {language === 'bilingual' && <strong>Hindi: </strong>}
                  SARKARI TALK एक स्वतंत्र सूचना प्लेटफॉर्म है। यह भारत सरकार या बिहार सरकार की आधिकारिक वेबसाइट नहीं है। योजनाओं की पात्रता, लाभ, दस्तावेज और आवेदन की अंतिम जानकारी के लिए संबंधित आधिकारिक पोर्टल देखें।
                </p>
              )}
              {(language === 'en' || language === 'bilingual') && (
                <p>
                  {language === 'bilingual' && <strong>English: </strong>}
                  SARKARI TALK is an independent information platform and is not an official Government of India or Bihar Government website. Please verify eligibility, benefits, required documents, and application details on the relevant official portal.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Social Contact */}
          <div className="space-y-4">
            <Logo lightText size="md" />
            
            <p className="text-xs text-slate-300 leading-relaxed">
              {pick(
                'भारत और बिहार के नागरिकों के लिए सरकारी योजनाओं, डिजिटल सेवाओं, प्रमाण पत्रों और ऑनलाइन आवेदन प्रक्रियाओं की सरल एवं प्रामाणिक जानकारी।',
                'Simplifying public welfare schemes, digital citizen services, certificates, and online application procedures for citizens across India and Bihar.'
              )}
            </p>

            {/* Exact Gmail Address */}
            <div className="pt-1">
              <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold mb-1">
                {pick('आधिकारिक संपर्क ईमेल:', 'Official Contact Email:')}
              </span>
              <a
                href={SOCIAL_CONFIG.emailLink}
                className="text-xs sm:text-sm font-bold text-amber-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{SOCIAL_CONFIG.email}</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={SOCIAL_CONFIG.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                title="YouTube - Sarkari Talk"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                title="Instagram - Sarkari Talk"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL_CONFIG.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                title="Facebook - Sarkari Talk"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {whatsAppUrl ? (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                </a>
              ) : (
                <span
                  className="w-9 h-9 rounded-xl bg-slate-800/50 text-slate-500 flex items-center justify-center border border-slate-700/50 cursor-not-allowed"
                  title="WhatsApp (Configurable)"
                >
                  <MessageCircle className="w-4 h-4" />
                </span>
              )}
            </div>
          </div>

          {/* Col 2: Popular Guides & Tools */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              {pick('लोकप्रिय सेवाएं एवं टूल्स', 'Popular Services & Tools')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('central-schemes')}
                  className="hover:text-amber-400 text-blue-300 font-bold transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                >
                  <span>{pick('केंद्र सरकार की योजनाएं', 'Central Government Schemes')}</span>
                  <span className="text-[10px] bg-blue-900/60 text-blue-300 px-1.5 py-0.2 rounded">{pick('17 श्रेणियां', '17 Cats')}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('bihar-schemes')}
                  className="hover:text-amber-400 text-orange-300 font-bold transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                >
                  <span>{pick('बिहार सरकार की योजनाएं', 'Bihar Government Schemes')}</span>
                  <span className="text-[10px] bg-orange-900/60 text-orange-300 px-1.5 py-0.2 rounded">RTPS</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('divyangjan-schemes')}
                  className="hover:text-amber-400 text-indigo-300 font-bold transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                >
                  <span>{pick('दिव्यांगजन योजनाएं', 'Divyangjan Hub')}</span>
                  <span className="text-[10px] bg-indigo-900/60 text-indigo-300 px-1.5 py-0.2 rounded">{pick('12 योजनाएं', '12 Schemes')}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('eligibility')}
                  className="hover:text-amber-400 text-emerald-300 font-bold transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                >
                  <span>{pick('पात्रता जांचें', 'Check Eligibility Tool')}</span>
                  <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-1.5 py-0.2 rounded">{pick('जाँचें', 'Check')}</span>
                </button>
              </li>
              <li className="border-t border-slate-800 pt-1.5 mt-1.5">
                <button 
                  onClick={() => onNavigate('article', 'bihar-rtps-caste-income-residence')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('बिहार RTPS: जाति, आय एवं निवास', 'Bihar RTPS: Caste, Income & Residence')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('article', 'bihar-bhumi-jamabandi-mutation')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('बिहार भूमि: जमाबंदी एवं दाखिल-खारिज', 'Bihar Bhumi: Jamabandi & Mutation')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('article', 'pm-kisan-samman-nidhi-guide')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('पीएम किसान: अगली किस्त एवं e-KYC', 'PM Kisan: Next Installment & e-KYC')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('article', 'ayushman-bharat-card-guide')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('आयुष्मान भारत 5 लाख स्वास्थ्य कार्ड', 'Ayushman Bharat 5 Lakh Health Card')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('article', 'aadhaar-card-address-update')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('आधार कार्ड पता व दस्तावेज अपडेट', 'Aadhaar Card Address & Document Update')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('article', 'instant-epan-application-guide')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('निःशुल्क इंस्टेंट ई-पैन आवेदन', 'Instant e-PAN Card Application (Free)')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {pick('सत्यापित सरकारी पोर्टल', 'Verified Government Portals')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://serviceonline.bihar.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white text-slate-400 flex items-center justify-between group"
                >
                  <span>Bihar RTPS ServicePlus</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://myaadhaar.uidai.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white text-slate-400 flex items-center justify-between group"
                >
                  <span>UIDAI myAadhaar Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://pmkisan.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white text-slate-400 flex items-center justify-between group"
                >
                  <span>PM-KISAN Samman Nidhi</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://beneficiary.nha.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white text-slate-400 flex items-center justify-between group"
                >
                  <span>NHA Ayushman Beneficiary</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://scholarships.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white text-slate-400 flex items-center justify-between group"
                >
                  <span>National Scholarship (NSP)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portals')}
                  className="text-amber-400 hover:underline pt-1 text-[11px] block text-left cursor-pointer font-semibold"
                >
                  {pick('सभी 16+ सरकारी पोर्टल देखें →', 'View All 16+ Government Portals →')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust, Legal & Policy */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-800 flex items-center gap-2">
              <span className="w-2.5 h-2 rounded-full bg-blue-500"></span>
              {pick('संपादकीय एवं कानूनी नीतियां', 'Editorial & Legal Policies')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('page', 'about')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('हमारे बारे में', 'About Us')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('page', 'editorial-policy')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('संपादकीय नीति', 'Editorial Policy')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('page', 'corrections-policy')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('सुधार नीति', 'Corrections Policy')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('page', 'disclaimer')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('कानूनी अस्वीकरण', 'Legal Disclaimer')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('page', 'privacy')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('गोपनीयता नीति', 'Privacy Policy')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('page', 'contact')}
                  className="hover:text-amber-400 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  {pick('संपर्क सूत्र', 'Contact Us')}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Technical SEO, Sitemap, and Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © {new Date().getFullYear()} SARKARI TALK.{' '}
              {pick('सर्वाधिकार सुरक्षित। स्वतंत्र नागरिक सूचना केंद्र।', 'All rights reserved. Independent Citizen Information Hub.')}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {pick('ईमेल:', 'Email:')} <a href={SOCIAL_CONFIG.emailLink} className="text-amber-400 underline">{SOCIAL_CONFIG.email}</a> • {pick('सरकारी मुहरों या लोगो का कोई अनधिकृत उपयोग नहीं।', 'No unauthorized use of government seals or logos.')}
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenSitemapModal}
              className="hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5 text-amber-400" />
              XML Sitemap
            </button>
            <span>•</span>
            <button
              onClick={onOpenRobotsModal}
              className="hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Code className="w-3.5 h-3.5 text-blue-400" />
              robots.txt
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('admin')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              {pick('एडमिन', 'Admin')}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
