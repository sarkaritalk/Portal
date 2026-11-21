import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight, 
  RotateCcw,
  UserCheck
} from 'lucide-react';
import { CENTRAL_SCHEMES_DATA } from '../data/centralSchemes';
import { BIHAR_SERVICES_DATA } from '../data/biharDirectory';
import { useLanguage } from '../context/LanguageContext';
import { pickText } from '../data/translations/directoryTranslations';

interface EligibilityCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle?: (slug: string) => void;
  onNavigateTab?: (tab: string, param?: string) => void;
}

export const EligibilityCheckerModal: React.FC<EligibilityCheckerModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  onNavigateTab
}) => {
  const { language, isHindi, isEnglish, isBilingual, pick } = useLanguage();
  const [stateResidence, setStateResidence] = useState<'bihar' | 'other'>('bihar');
  const [socialCategory, setSocialCategory] = useState<'general' | 'obc_ebc' | 'sc_st' | 'ews'>('obc_ebc');
  const [ageGroup, setAgeGroup] = useState<'student' | 'youth' | 'middle' | 'senior'>('youth');
  const [occupation, setOccupation] = useState<'farmer' | 'student' | 'woman' | 'labour' | 'business' | 'unemployed' | 'divyang' | 'general'>('farmer');
  const [incomeRange, setIncomeRange] = useState<'under1' | '1to3' | '3to8' | 'above8'>('1to3');
  const [hasCalculated, setHasCalculated] = useState(false);

  if (!isOpen) return null;

  const matchingCentral = CENTRAL_SCHEMES_DATA.filter(scheme => {
    if (occupation === 'farmer') {
      if (scheme.categoryId === 'farmers-agriculture') return true;
      if (scheme.id === 'pm-surya-ghar-yojana') return true;
    }
    if (occupation === 'student' || ageGroup === 'student') {
      if (scheme.categoryId === 'education-scholarships') return true;
    }
    if (occupation === 'woman') {
      if (scheme.categoryId === 'women-child' || scheme.id === 'pm-ujjwala-yojana') return true;
    }
    if (occupation === 'labour') {
      if (scheme.categoryId === 'labour-worker' || scheme.id === 'mgnrega-job-card' || scheme.id === 'pmay-gramin') return true;
    }
    if (occupation === 'business') {
      if (scheme.categoryId === 'business-self-employment') return true;
    }
    if (occupation === 'unemployed' || ageGroup === 'youth') {
      if (scheme.categoryId === 'employment-skills') return true;
    }
    if (ageGroup === 'senior') {
      if (scheme.categoryId === 'pension-social-security' || scheme.id === 'ayushman-bharat-card') return true;
    }
    if (incomeRange === 'under1' || incomeRange === '1to3') {
      if (scheme.id === 'ayushman-bharat-card' || scheme.id === 'nfsa-ration-central' || scheme.id === 'pm-suraksha-bima-pmsby') return true;
    }
    return false;
  });

  const matchingBihar = stateResidence === 'bihar' ? BIHAR_SERVICES_DATA.filter(service => {
    if (occupation === 'farmer' && service.categoryId === 'farmer-agriculture') return true;
    if (occupation === 'student' && service.categoryId === 'scholarships-education') return true;
    if (occupation === 'woman' && service.categoryId === 'women-child-welfare') return true;
    if (occupation === 'labour' && service.categoryId === 'labour-worker-welfare') return true;
    if (occupation === 'unemployed' && service.categoryId === 'employment-training') return true;
    if (ageGroup === 'senior' && service.categoryId === 'pension-social-security') return true;
    if (service.categoryId === 'certificates-rtps' && (socialCategory === 'obc_ebc' || socialCategory === 'sc_st' || socialCategory === 'ews')) return true;
    return false;
  }) : [];

  const handleReset = () => {
    setStateResidence('bihar');
    setSocialCategory('obc_ebc');
    setAgeGroup('youth');
    setOccupation('farmer');
    setIncomeRange('1to3');
    setHasCalculated(false);
  };

  void hasCalculated;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#0B1B3D] via-[#0E275E] to-[#0B1B3D] text-white flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-orange-500 text-white">
                <UserCheck className="w-4 h-4" />
              </span>
              <h3 className="text-base sm:text-xl font-black text-white">
                {pick('पात्रता जांच टूल', 'Check Eligibility Tool', 'पात्रता जांचें / Check Eligibility Tool')}
              </h3>
            </div>
            <p className="text-xs text-slate-300">
              {pick(
                'अपनी सामान्य जानकारी चुनें और जानें कि आप किन-किन सरकारी योजनाओं के पात्र हो सकते हैं।',
                'Select your general profile criteria to discover which government schemes you may be eligible for.'
              )}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0 ml-2"
            title={pick('बंद करें', 'Close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Security Disclaimer */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 flex items-start gap-2.5 text-xs text-emerald-900">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">{pick('100% सुरक्षित एवं गोपनीय:', '100% Safe & Private:')}</span>{' '}
              {pick(
                'SARKARI TALK कभी भी आपका आधार नंबर, बैंक पिन, पासवर्ड या व्यक्तिगत डेटा नहीं मांगता। यह टूल केवल सामान्य मानदंडों के आधार पर संभावित योजनाएं बताता है।',
                'SARKARI TALK never asks for your Aadhaar number, bank PIN, passwords, or personal data. This tool estimates likely schemes using general criteria only.'
              )}
            </div>
          </div>

          {/* Form Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                {pick('1. निवास राज्य', '1. State of Residence', '1. निवास राज्य / State of Residence')}
              </label>
              <select
                value={stateResidence}
                onChange={(e) => { setStateResidence(e.target.value as 'bihar' | 'other'); setHasCalculated(true); }}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
              >
                <option value="bihar">{pick('बिहार राज्य', 'Bihar State')}</option>
                <option value="other">{pick('अन्य राज्य (भारत)', 'All Other States (India)')}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                {pick('2. सामाजिक श्रेणी', '2. Social Category', '2. सामाजिक श्रेणी / Category')}
              </label>
              <select
                value={socialCategory}
                onChange={(e) => { setSocialCategory(e.target.value as 'general' | 'obc_ebc' | 'sc_st' | 'ews'); setHasCalculated(true); }}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
              >
                <option value="obc_ebc">{pick('ओबीसी / ईबीसी (पिछड़ा वर्ग)', 'OBC / EBC (Backward Class)')}</option>
                <option value="sc_st">{pick('अनुसूचित जाति / जनजाति', 'Scheduled Caste / Tribe (SC / ST)')}</option>
                <option value="ews">{pick('आर्थिक कमजोर सामान्य वर्ग (EWS)', 'Economically Weaker Section (EWS)')}</option>
                <option value="general">{pick('सामान्य वर्ग', 'General Category')}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                {pick('3. आयु वर्ग', '3. Age Group', '3. आयु वर्ग / Age Group')}
              </label>
              <select
                value={ageGroup}
                onChange={(e) => { setAgeGroup(e.target.value as 'student' | 'youth' | 'middle' | 'senior'); setHasCalculated(true); }}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
              >
                <option value="youth">{pick('युवा (18 से 35 वर्ष)', 'Youth (18 to 35 Years)')}</option>
                <option value="student">{pick('विद्यार्थी (स्कूल / कॉलेज)', 'Student (School / College)')}</option>
                <option value="middle">{pick('कार्यशील वयस्क (35 से 59 वर्ष)', 'Working Adult (35 to 59 Years)')}</option>
                <option value="senior">{pick('वरिष्ठ नागरिक (60+ वर्ष)', 'Senior Citizen (60+ Years)')}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                {pick('4. पेशा या मुख्य स्थिति', '4. Occupation & Status', '4. पेशा या मुख्य स्थिति / Occupation & Status')}
              </label>
              <select
                value={occupation}
                onChange={(e) => { setOccupation(e.target.value as any); setHasCalculated(true); }}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
              >
                <option value="farmer">{pick('किसान / कृषक', 'Farmer & Agriculture')}</option>
                <option value="student">{pick('छात्र / छात्रा (उच्च शिक्षा / स्कूल)', 'Student (School / Higher Education)')}</option>
                <option value="woman">{pick('महिला / माता', 'Women & Maternity')}</option>
                <option value="labour">{pick('असंगठित निर्माण श्रमिक / मजदूर', 'Unorganized Worker / Labour')}</option>
                <option value="business">{pick('व्यापारी / स्व-रोजगार / कारीगर', 'Business / MSME / Artisan')}</option>
                <option value="unemployed">{pick('बेरोजगार युवा (रोजगार तलाश)', 'Jobseeker / Unemployed Youth')}</option>
                <option value="divyang">{pick('दिव्यांगजन (UDID / 40%+)', 'Person with Disability (UDID / 40%+)')}</option>
                <option value="general">{pick('सामान्य नागरिक', 'Other / General Citizen')}</option>
              </select>
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-bold text-slate-800">
                {pick('5. वार्षिक पारिवारिक आय', '5. Annual Family Income', '5. वार्षिक पारिवारिक आय / Annual Family Income')}
              </label>
              <select
                value={incomeRange}
                onChange={(e) => { setIncomeRange(e.target.value as 'under1' | '1to3' | '3to8' | 'above8'); setHasCalculated(true); }}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
              >
                <option value="under1">{pick('₹1 लाख से कम (BPL / अत्यंत निर्धन)', 'Under ₹1 Lakh (BPL / Very Low Income)')}</option>
                <option value="1to3">{pick('₹1 लाख से ₹3 लाख (निम्न आय वर्ग)', '₹1 Lakh to ₹3 Lakh (Low Income)')}</option>
                <option value="3to8">{pick('₹3 लाख से ₹8 लाख (मध्यम वर्ग)', '₹3 Lakh to ₹8 Lakh (Middle Income)')}</option>
                <option value="above8">{pick('₹8 लाख से अधिक (उच्च आय वर्ग)', 'Above ₹8 Lakh (High Income Group)')}</option>
              </select>
            </div>

          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{pick('चयन रीसेट करें', 'Reset Choices')}</span>
            </button>

            <button
              onClick={() => setHasCalculated(true)}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>
                {pick(
                  `योजनाएं देखें (${matchingCentral.length + matchingBihar.length} उपलब्ध)`,
                  `View Schemes (${matchingCentral.length + matchingBihar.length} Matching)`
                )}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Results Display */}
          <div className="border-t border-slate-200 pt-5 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{pick('आपके लिए संभावित योजनाएं', 'Matching Schemes for You')}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
                  {matchingCentral.length + matchingBihar.length}
                </span>
              </h4>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                {pick('प्रारंभिक परिणाम', 'Preliminary Results')}
              </span>
            </div>

            {occupation === 'divyang' && (
              <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-4 rounded-2xl shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-indigo-200 uppercase tracking-wide">
                    {pick('विशेष समर्पित श्रेणी', 'Dedicated Divyangjan Hub')}
                  </span>
                  <span className="text-[10px] bg-indigo-500/40 px-2 py-0.5 rounded text-white font-mono">
                    {pick('12 योजनाएं उपलब्ध', '12 Schemes Available')}
                  </span>
                </div>
                <h5 className="text-sm font-black">
                  {pick('दिव्यांगजन योजनाएं एवं आर्थिक सहायता हब', 'Divyangjan Schemes & Financial Assistance Hub')}
                </h5>
                <p className="text-xs text-slate-200">
                  {pick(
                    'UDID स्वावलंबन कार्ड, ₹400-₹500 मासिक पेंशन, ₹1 लाख विवाह अनुदान, ADIP निःशुल्क सहायक उपकरण एवं छात्रवृत्ति की पूरी सूची देखें।',
                    'Explore UDID Swavlamban Card, ₹400–₹500 monthly pension, ₹1 Lakh marriage incentive, ADIP free assistive devices, and scholarships.'
                  )}
                </p>
                {onNavigateTab && (
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateTab('divyangjan-schemes');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-indigo-950 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer mt-1"
                  >
                    <span>{pick('समस्त 12 दिव्यांगजन योजनाएं खोलें', 'Open All 12 Divyangjan Schemes')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {matchingCentral.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 inline-block">
                  {pick(`केंद्र सरकार की योजनाएं (${matchingCentral.length})`, `Central Government Schemes (${matchingCentral.length})`)}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matchingCentral.slice(0, 6).map(scheme => {
                    return (
                      <div 
                        key={scheme.id}
                        className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 hover:border-slate-300 transition-all"
                      >
                        <h5 className="text-xs font-bold text-slate-900 line-clamp-1">
                          {isEnglish ? scheme.nameEn : scheme.nameHi}
                        </h5>
                        {isBilingual && (
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {scheme.nameEn}
                          </p>
                        )}
                        <p className="text-[11px] text-emerald-700 font-semibold line-clamp-1">
                          {pick('लाभ:', 'Benefits:')} {isEnglish ? scheme.benefitsEn : scheme.benefitsHi}
                        </p>
                        <div className="pt-1 flex items-center justify-between text-[11px]">
                          <a
                            href={scheme.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1"
                          >
                            <span>{pick('आधिकारिक पोर्टल', 'Official Portal')}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          {scheme.articleSlug && onSelectArticle && (
                            <button
                              onClick={() => {
                                onClose();
                                onSelectArticle(scheme.articleSlug!);
                              }}
                              className="text-slate-700 hover:text-slate-900 font-bold cursor-pointer"
                            >
                              {pick('विस्तृत गाइड →', 'Read Guide →')}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {matchingBihar.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-orange-900 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block">
                  {pick(`बिहार सरकार की योजनाएं (${matchingBihar.length})`, `Bihar Government Schemes (${matchingBihar.length})`)}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matchingBihar.slice(0, 6).map(service => {
                    return (
                      <div 
                        key={service.id}
                        className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 hover:border-slate-300 transition-all"
                      >
                        <h5 className="text-xs font-bold text-slate-900 line-clamp-1">
                          {isEnglish ? service.titleEn : service.titleHi}
                        </h5>
                        {isBilingual && (
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {service.titleEn}
                          </p>
                        )}
                        <p className="text-[11px] text-slate-600 line-clamp-1">
                          {pick('विभाग:', 'Dept:')} {pickText(language, service.departmentHi, service.departmentEn)}
                        </p>
                        <div className="pt-1 flex items-center justify-between text-[11px]">
                          <a
                            href={service.primaryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1"
                          >
                            <span>{pick('आधिकारिक पोर्टल', 'Official Portal')}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          {service.articleSlug && onSelectArticle && (
                            <button
                              onClick={() => {
                                onClose();
                                onSelectArticle(service.articleSlug!);
                              }}
                              className="text-slate-700 hover:text-slate-900 font-bold cursor-pointer"
                            >
                              {pick('गाइड पढ़ें →', 'Read Guide →')}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {matchingCentral.length === 0 && matchingBihar.length === 0 && (
              <div className="p-6 bg-slate-50 rounded-2xl text-center text-xs text-slate-600">
                {pick(
                  'दिए गए मानदंडों से मेल खाती कोई विशिष्ट योजना नहीं मिली। कृपया चयन बदलकर पुनः प्रयास करें।',
                  'No specific scheme matched the selected profile criteria. Please try adjusting your selections.'
                )}
              </div>
            )}

          </div>

          {/* Official Final Disclaimer */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-[11px] text-amber-900 space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>{pick('महत्वपूर्ण अस्वीकरण', 'Official Disclaimer')}</span>
            </p>
            {!isEnglish && (
              <p>
                {isBilingual && <strong>Hindi: </strong>}
                SARKARI TALK एक स्वतंत्र सूचना प्लेटफॉर्म है। यह भारत सरकार या बिहार सरकार की आधिकारिक वेबसाइट नहीं है। योजनाओं की पात्रता, लाभ, दस्तावेज और आवेदन की अंतिम जानकारी के लिए संबंधित आधिकारिक पोर्टल देखें।
              </p>
            )}
            {!isHindi && (
              <p>
                {isBilingual && <strong>English: </strong>}
                SARKARI TALK is an independent information platform and is not an official Government of India or Bihar Government website. Please verify eligibility, benefits, required documents, and application details on the relevant official portal.
              </p>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-500">
            {pick('SARKARI TALK • जनहित में निःशुल्क सूचना', 'SARKARI TALK • Free Public Utility Information')}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            {pick('बंद करें', 'Close')}
          </button>
        </div>

      </div>
    </div>
  );
};
