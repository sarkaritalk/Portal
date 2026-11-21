import React, { useState } from 'react';
import { ShieldAlert, FileText, CheckCircle2, Mail, Send, Code, Copy, Check } from 'lucide-react';
import { generateSitemapXml, generateRobotsTxt } from '../utils/seo';
import { ServiceArticle } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface StaticPageProps {
  pageId: 'about' | 'about-us' | 'disclaimer' | 'editorial-policy' | 'corrections-policy' | 'privacy' | 'contact' | 'contact-us';
  articles: ServiceArticle[];
  onNavigate: (tab: string, param?: string) => void;
}

export const StaticPages: React.FC<StaticPageProps> = ({ pageId, onNavigate }) => {
  const { pick } = useLanguage();
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const normalizedPage =
    pageId === 'about-us' ? 'about' : pageId === 'contact-us' ? 'contact' : pageId;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-200">
      
      {/* DISCLAIMER PAGE */}
      {normalizedPage === 'disclaimer' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                {pick('कानूनी अस्वीकरण', 'Legal Disclaimer', 'कानूनी अस्वीकरण (Legal Disclaimer)')}
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                {pick('गैर-सरकारी व स्वतंत्र सूचनात्मक पोर्टल', 'Non-Government & Independent Informational Portal')}
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 font-medium">
              <strong>{pick('महत्वपूर्ण घोषणा:', 'Important Notice:')}</strong>{' '}
              {pick(
                'Sarkari Talk (sarkaritalk.in) एक पूर्णतः स्वतंत्र और गैर-सरकारी वेबसाइट है। इसका भारत सरकार (Government of India) या बिहार सरकार (Government of Bihar) या किसी भी अन्य राज्य सरकार अथवा सरकारी विभाग से कोई प्रत्यक्ष या अप्रत्यक्ष संबंध नहीं है।',
                'Sarkari Talk (sarkaritalk.in) is a strictly independent and non-government informational website. It has no direct or indirect affiliation with the Government of India, the Government of Bihar, or any other state government department or ministry.'
              )}
            </div>

            <h3 className="text-base font-bold text-slate-900 pt-2">
              {pick('1. सूचना का उद्देश्य', '1. Purpose of Information', '1. सूचना का उद्देश्य (Purpose of Information)')}
            </h3>
            <p>
              {pick(
                'इस वेबसाइट पर प्रकाशित समस्त सामग्री केवल भारतीय नागरिकों के सामान्य मार्गदर्शन, जागरूकता एवं शैक्षणिक उद्देश्य के लिए है। हम विभिन्न सरकारी अधिसूचनाओं, गजटों एवं आधिकारिक पोर्टलों पर उपलब्ध सार्वजनिक जानकारी को सरल भाषा में प्रस्तुत करते हैं ताकि आम नागरिक योजनाओं के लाभ और आवेदन प्रक्रिया को आसानी से समझ सकें।',
                'All content published on this website is solely for general guidance, public awareness, and educational purposes for citizens. We summarize public information from official notifications, gazettes, and authorized government portals in clear language so citizens can easily understand benefits and application workflows.'
              )}
            </p>

            <h3 className="text-base font-bold text-slate-900 pt-2">
              {pick('2. कोई सरकारी गारंटी नहीं', '2. No Guarantee or Official Authority', '2. कोई सरकारी गारंटी नहीं (No Guarantee or Official Authority)')}
            </h3>
            <p>
              {pick(
                'Sarkari Talk किसी भी नागरिक को किसी भी योजना में लाभ मिलने, प्रमाण पत्र स्वीकृत होने, अथवा सरकारी नौकरी में चयन होने की कोई गारंटी नहीं देता है। किसी भी आवेदन को स्वीकार अथवा अस्वीकार करने का सम्पूर्ण एवं एकमात्र अधिकार संबंधित सरकारी विभाग या अधिकृत प्राधिकारी के पास सुरक्षित है।',
                'Sarkari Talk does not guarantee scheme approval, certificate issuance, or employment selection for any applicant. Sole authority to accept or reject applications lies with the respective government department or designated officer.'
              )}
            </p>

            <h3 className="text-base font-bold text-slate-900 pt-2">
              {pick('3. आधिकारिक स्रोतों से पुष्टि', '3. Verification on Official Portals', '3. आधिकारिक स्रोतों से पुष्टि (Verification on Official Portals)')}
            </h3>
            <p>
              {pick(
                'यद्यपि हम हर जानकारी को आधिकारिक स्रोतों से सत्यापित करने का भरसक प्रयास करते हैं, फिर भी किसी योजना की वर्तमान पात्रता, आवेदन शुल्क, अंतिम तिथि अथवा नियमों में सरकारी स्तर पर कभी भी बदलाव हो सकता है। अतः पाठकों को दृढ़तापूर्वक सलाह दी जाती है कि वे किसी भी सेवा के लिए अंतिम आवेदन करने से पूर्व संबंधित विभाग के आधिकारिक पोर्टल (.gov.in / .nic.in) पर नियमों की पुष्टि अवश्य कर लें।',
                'While we verify all information against official sources, scheme eligibility, official fees, deadlines, and rules may be updated by authorities at any time. Readers are strongly advised to confirm final rules directly on the concerned official portal (.gov.in / .nic.in) before submitting applications.'
              )}
            </p>

            <h3 className="text-base font-bold text-slate-900 pt-2">
              {pick('4. वित्तीय लेनदेन एवं व्यक्तिगत डेटा', '4. Financial Safety & Personal Data', '4. वित्तीय लेनदेन एवं व्यक्तिगत डेटा (Financial Safety)')}
            </h3>
            <p>
              {pick(
                'Sarkari Talk किसी भी उपयोगकर्ता से आधार कार्ड का मूल विवरण, पैन नंबर, बैंक पासवर्ड, एटीएम पिन या ओटीपी (OTP) की कभी मांग नहीं करता है। न ही हमारी वेबसाइट किसी भी सेवा के बदले कोई सरकारी शुल्क वसूलती है। यदि कोई व्यक्ति Sarkari Talk के नाम पर पैसे की मांग करता है तो वह धोखाधड़ी हो सकती है।',
                'Sarkari Talk never collects or requests Aadhaar numbers, PAN details, bank passwords, ATM PINs, or OTPs, nor does it charge any service or application fee. Beware of anyone demanding payment in the name of Sarkari Talk.'
              )}
            </p>
          </div>
        </div>
      )}

      {/* ABOUT US PAGE */}
      {normalizedPage === 'about' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="p-3 bg-orange-500/10 text-orange-600 rounded-xl">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                {pick('हमारे बारे में', 'About Sarkari Talk', 'हमारे बारे में (About Sarkari Talk)')}
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                {pick('सरकारी योजनाएँ और सेवाएँ, आसान भाषा में', 'Government Schemes & Digital Services in Simple Language')}
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p className="text-base font-medium text-slate-900">
              {pick(
                'Sarkari Talk का जन्म एक साधारण संकल्प के साथ हुआ: भारत के करोड़ों नागरिकों तक सरकारी योजनाओं, कल्याणकारी नीतियों और ऑनलाइन जनसेवाओं की जानकारी सरल, स्पष्ट और प्रामाणिक रूप से पहुँचाना।',
                'Sarkari Talk was founded with a straightforward mission: to make information on government schemes, welfare policies, and online public services accessible to millions of Indian citizens in clear, accurate, and easy-to-follow guides.'
              )}
            </p>

            <h3 className="text-base font-bold text-slate-900 pt-2">
              {pick('हमारा मिशन', 'Our Mission', 'हमारा मिशन (Our Mission)')}
            </h3>
            <p>
              {pick(
                'अक्सर ग्रामीण क्षेत्रों और छोटे कस्बों में नागरिक सही जानकारी के अभाव में कल्याणकारी योजनाओं (जैसे पीएम किसान, आयुष्मान भारत, आवास योजना, या छात्रवृत्ति) के लाभ से वंचित रह जाते हैं या बिचौलियों के चक्कर में पड़कर अनावश्यक पैसे गँवाते हैं। Sarkari Talk नागरिकों को सीधे सशक्त बनाता है कि वे खुद अपने मोबाइल से सही प्रक्रिया समझ सकें और आधिकारिक सरकारी पोर्टलों पर निःशुल्क या निर्धारित शुल्क पर आवेदन कर सकें।',
                'Citizens in rural areas and smaller towns often miss out on welfare schemes (like PM-KISAN, Ayushman Bharat, PM Awas, or scholarships) or pay unnecessary middleman charges due to lack of clear guidance. Sarkari Talk empowers citizens to understand exact workflows on their own phones and apply directly on official government portals.'
              )}
            </p>

            <h3 className="text-base font-bold text-slate-900 pt-2">
              {pick('बिहार पर विशेष ध्यान', 'Special Focus on Bihar', 'बिहार पर विशेष ध्यान (Special Focus on Bihar)')}
            </h3>
            <p>
              {pick(
                'बिहार राज्य में लोक सेवाओं का अधिकार (RTPS - ServicePlus), भूमि जमाबंदी, दाखिल-खारिज (म्यूटेशन), स्टूडेंट क्रेडिट कार्ड और कृषि अनुदान जैसी सेवाओं की मांग बहुत अधिक है। इसलिए हमने बिहार सरकार के सभी प्रमुख विभागों के लिए समर्पित और विस्तृत मार्गदर्शिका तैयार की है।',
                'Demand for Right to Public Services (RTPS - ServicePlus), Bihar Bhumi land Jamabandi, mutation, Student Credit Card, and agriculture subsidies is immense in Bihar. That is why we maintain dedicated, department-wise guides for Bihar Government services alongside Central schemes.'
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1.5" />
                <h4 className="font-bold text-slate-900 text-sm">
                  {pick('100% प्रामाणिक स्रोत', '100% Authentic Sources')}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {pick('केवल आधिकारिक सरकारी वेबसाइट्स से सत्यापित सामग्री।', 'Content verified strictly against official government portals.')}
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <FileText className="w-6 h-6 text-orange-600 mx-auto mb-1.5" />
                <h4 className="font-bold text-slate-900 text-sm">
                  {pick('सरल व स्पष्ट भाषा', 'Clear & Simple Guides')}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {pick('बिना कठिन कानूनी जटिलताओं के सीधे समझने योग्य शब्द।', 'Actionable step-by-step instructions without bureaucratic jargon.')}
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <ShieldAlert className="w-6 h-6 text-blue-600 mx-auto mb-1.5" />
                <h4 className="font-bold text-slate-900 text-sm">
                  {pick('पूर्णतः निःशुल्क', '100% Free Access')}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {pick('नागरिकों से किसी भी जानकारी या गाइड का कोई शुल्क नहीं।', 'Zero charges to citizens for accessing guides, checklists, or tools.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDITORIAL POLICY PAGE */}
      {normalizedPage === 'editorial-policy' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
            {pick('संपादकीय नीति', 'Editorial Policy', 'संपादकीय नीति (Editorial Policy)')}
          </h1>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              {pick(
                'Sarkari Talk उच्च पत्रकारिता एवं तथ्य-सत्यापन मानकों का पालन करता है। हमारी संपादकीय नीति यह सुनिश्चित करती है कि कोई भी जानकारी बिना प्राथमिक स्रोत के सत्यापन के प्रकाशित न हो।',
                'Sarkari Talk follows strict fact-checking and editorial standards to ensure no guide or scheme detail is published without verification from primary government sources.'
              )}
            </p>
            <h3 className="text-base font-bold text-slate-900">
              {pick('1. प्राथमिक स्रोतों का उपयोग', '1. Use of Primary Government Sources')}
            </h3>
            <p>
              {pick(
                'हम किसी भी योजना के नियम, पात्रता, शुल्क या समय-सीमा को केवल भारत सरकार के राजपत्र (Gazette), संबंधित मंत्रालय की आधिकारिक वेबसाइट (.gov.in / .nic.in) अथवा प्रेस सूचना ब्यूरो (PIB) द्वारा जारी आधिकारिक विज्ञप्ति से ही लेते हैं।',
                'Every eligibility rule, official fee, or timeline is sourced solely from Government Gazettes, respective Ministry portals (.gov.in / .nic.in), or Press Information Bureau (PIB) releases.'
              )}
            </p>
            <h3 className="text-base font-bold text-slate-900">
              {pick('2. असत्यापित दावों पर स्पष्ट नोटिस', '2. Clear Disclosure on Unconfirmed Dates')}
            </h3>
            <p>
              {pick(
                'यदि किसी योजना का आवेदन पोर्टल वर्तमान में अस्थायी रूप से बंद है या कोई नई तारीख अभी विभाग द्वारा घोषित नहीं हुई है, तो हम अनुमान लगाने के बजाय स्पष्ट रूप से "आधिकारिक पोर्टल पर पुष्टि करें" अंकित करते हैं।',
                'If an application window is temporarily closed or official dates have not been announced yet, we clearly instruct readers to verify on the official portal rather than guessing deadlines.'
              )}
            </p>
            <h3 className="text-base font-bold text-slate-900">
              {pick('3. सनसनीखेज शीर्षकों से परहेज', '3. Zero Clickbait & Misleading Claims')}
            </h3>
            <p>
              {pick(
                'हम क्लिकबेट या भ्रामक शीर्षकों (जैसे "सबको मिलेंगे ₹50,000", "तुरंत होगा सब माफ") का सख्त विरोध करते हैं। हमारा प्रत्येक शीर्षक तथ्यात्मक और प्रामाणिक होता है।',
                'We strictly avoid sensationalist or misleading headlines. Every guide title reflects verified facts and real scheme provisions.'
              )}
            </p>
          </div>
        </div>
      )}

      {/* CORRECTIONS POLICY PAGE */}
      {normalizedPage === 'corrections-policy' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
            {pick('त्रुटि सुधार नीति', 'Corrections Policy', 'त्रुटि सुधार नीति (Corrections Policy)')}
          </h1>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              {pick(
                'सटीकता और पारदर्शिता हमारी सर्वोच्च प्राथमिकता है। सरकारी नियमों, पोर्टल लिंक्स या अंतिम तिथियों में कभी भी परिवर्तन हो सकता है।',
                'Accuracy and transparency are our highest priorities. Government rules, portal URLs, and closing dates may be revised by departments at any time.'
              )}
            </p>
            <h3 className="text-base font-bold text-slate-900">
              {pick('पाठक फीडबैक और सुधार प्रक्रिया', 'Reader Feedback & Correction Workflow')}
            </h3>
            <p>
              {pick(
                'यदि आपको हमारी वेबसाइट पर किसी भी लेख, पोर्टल लिंक, सरकारी फीस या पात्रता शर्त में कोई त्रुटि या आउटडेटेड जानकारी दिखाई देती है, तो आप हमें तुरंत सूचित कर सकते हैं।',
                'If you spot any outdated rule, broken official link, fee change, or typographical error in any guide or directory card, please notify us immediately.'
              )}
            </p>
            <p>
              {pick(
                'हमारी समीक्षा टीम 24 से 48 घंटे के भीतर संबंधित आधिकारिक सरकारी पोर्टल से मिलान कर आवश्यक सुधार करेगी और लेख के अंत में अद्यतन तिथि (Last Verified Date) को अपडेट करेगी।',
                'Our review desk verifies the reported update against the official government portal within 24–48 hours and updates the Last Verified Date accordingly.'
              )}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('page', 'contact')}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-xs cursor-pointer"
              >
                {pick('सुधार रिपोर्ट करने के लिए संपर्क करें →', 'Contact Us to Report a Correction →')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRIVACY POLICY PAGE */}
      {normalizedPage === 'privacy' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
            {pick('गोपनीयता नीति', 'Privacy Policy', 'गोपनीयता नीति (Privacy Policy)')}
          </h1>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              {pick(
                'Sarkari Talk पर हम आपकी व्यक्तिगत निजता का पूर्ण सम्मान करते हैं। यह नीति बताती है कि हमारी वेबसाइट पर उपयोगकर्ता के डेटा का क्या प्रबंध किया जाता है।',
                'At Sarkari Talk, we deeply respect your privacy. This policy outlines how user preferences and data are handled on our platform.'
              )}
            </p>
            <h3 className="text-base font-bold text-slate-900">
              {pick('1. कोई संवेदनशील डेटा संग्रह नहीं', '1. Zero Collection of Sensitive Personal Data')}
            </h3>
            <p>
              {pick(
                'हम कभी भी किसी नागरिक का आधार नंबर, पैन नंबर, बैंक खाता संख्या, पासवर्ड, या बायोमेट्रिक डेटा एकत्र या स्टोर नहीं करते हैं।',
                'We never collect, store, or process Aadhaar numbers, PAN numbers, bank account credentials, passwords, or biometric information.'
              )}
            </p>
            <h3 className="text-base font-bold text-slate-900">
              {pick('2. लोकल स्टोरेज का उपयोग', '2. Use of Browser LocalStorage')}
            </h3>
            <p>
              {pick(
                'आपके द्वारा सेव किए गए बुकमार्क, भाषा चयन और फॉन्ट साइज प्राथमिकताएं केवल आपके अपने ब्राउज़र के LocalStorage में सुरक्षित रहती हैं।',
                'Your saved bookmarks, language preference, and font-size settings are stored locally inside your own browser LocalStorage only.'
              )}
            </p>
            <h3 className="text-base font-bold text-slate-900">
              {pick('3. बाह्य वेबसाइट लिंक', '3. External Official Portal Links')}
            </h3>
            <p>
              {pick(
                'हमारी वेबसाइट पर भारत सरकार एवं बिहार सरकार के आधिकारिक पोर्टल्स के लिंक दिए गए हैं। उन पोर्टल्स पर जाने के बाद उनकी अपनी गोपनीयता नीतियां लागू होती हैं।',
                'Our website links directly to official Central and Bihar Government portals. Once redirected to an official government site, its own privacy policy governs your session.'
              )}
            </p>
          </div>
        </div>
      )}

      {/* CONTACT US PAGE */}
      {normalizedPage === 'contact' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
            {pick('संपर्क सूत्र व पाठक सुझाव', 'Contact Us & Reader Suggestions', 'संपर्क सूत्र व पाठक सुझाव (Contact Us)')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                {pick(
                  'किसी सरकारी योजना की जानकारी में सुधार, नए विषय का अनुरोध या सामान्य सुझाव के लिए आप हमारी संपादकीय टीम से संपर्क कर सकते हैं।',
                  'You can reach out to our editorial desk to report an error, request a guide on a specific government scheme, or share general feedback.'
                )}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <Mail className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">
                      {pick('आधिकारिक संपर्क ईमेल:', 'Official Contact Email:')}
                    </span>
                    <a href="mailto:Sarkaritalk23@gmail.com" className="font-bold text-slate-900 hover:text-red-600 transition-colors">
                      Sarkaritalk23@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
                <strong>{pick('कृपया ध्यान दें:', 'Please Note:')}</strong>{' '}
                {pick(
                  'Sarkari Talk कोई सरकारी कार्यालय नहीं है। हम किसी का रुका हुआ राशन कार्ड या जाति प्रमाण पत्र स्वीकृत नहीं करा सकते; इसके लिए आपको अपने संबंधित ब्लॉक/अंचल कार्यालय या आधिकारिक हेल्पलाइन (जैसे RTPS 1800-345-6284) पर संपर्क करना होगा।',
                  'Sarkari Talk is not a government office and cannot process or expedite pending Ration Cards or Caste Certificates. For application approvals, please contact your Block/Circle Office or official departmental helpline (such as Bihar RTPS 1800-345-6284).'
                )}
              </div>
            </div>

            <div>
              {contactSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-base">
                    {pick('आपका संदेश प्राप्त हो गया है!', 'Your message has been received!')}
                  </h4>
                  <p className="text-xs text-emerald-700">
                    {pick(
                      'Sarkari Talk संपादकीय टीम आपके सुझाव/सुधार की समीक्षा करेगी। धन्यवाद!',
                      'The Sarkari Talk editorial team will review your feedback shortly. Thank you!'
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">{pick('आपका नाम *', 'Your Name *')}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={pick('पूरा नाम दर्ज करें', 'Enter your full name')}
                      className="w-full p-2.5 border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">{pick('ईमेल या मोबाइल नंबर *', 'Email or Mobile Number *')}</label>
                    <input
                      type="text"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={pick('ईमेल या 10 अंकों का मोबाइल', 'Email address or 10-digit mobile')}
                      className="w-full p-2.5 border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">{pick('विषय *', 'Subject *')}</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-xl bg-white"
                      required
                    >
                      <option value="">{pick('विषय चुनें...', 'Select subject...')}</option>
                      <option value="correction">{pick('जानकारी में त्रुटि सुधार की सूचना', 'Report an Information Correction')}</option>
                      <option value="new-guide">{pick('नई सरकारी सेवा पर गाइड का अनुरोध', 'Request a New Scheme Guide')}</option>
                      <option value="broken-link">{pick('टूटा हुआ सरकारी लिंक रिपोर्ट करें', 'Report a Broken Official Link')}</option>
                      <option value="other">{pick('अन्य सामान्य सुझाव', 'Other General Feedback')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">{pick('विस्तृत संदेश *', 'Message Details *')}</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={pick('कृपया विवरण साझा करें...', 'Please share details here...')}
                      className="w-full p-2.5 border border-slate-300 rounded-xl"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>{pick('संदेश भेजें', 'Send Message')}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export const SeoModal: React.FC<{
  type: 'sitemap' | 'robots';
  articles: ServiceArticle[];
  onClose: () => void;
}> = ({ type, articles, onClose }) => {
  const { pick } = useLanguage();
  const [copied, setCopied] = useState(false);
  const baseUrl = window.location.origin;

  const content = type === 'sitemap' 
    ? generateSitemapXml(articles, baseUrl)
    : generateRobotsTxt(baseUrl);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-orange-600" />
            <h3 className="text-base font-bold text-slate-900">
              {type === 'sitemap' ? 'XML Sitemap (Google Indexing)' : 'robots.txt (Search Crawlers)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-slate-600">
          {pick(
            'सर्च इंजन (Google Search Console, Bing) के लिए स्वचालित रूप से जनरेटेड मान्य फ़ाइल:',
            'Automatically generated valid file for Search Engines (Google Search Console, Bing):'
          )}
        </p>

        <pre className="bg-slate-950 text-emerald-400 p-4 rounded-xl text-xs font-mono overflow-x-auto max-h-72 leading-relaxed">
          {content}
        </pre>

        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? pick('कॉपी हो गया', 'Copied') : pick('टेक्स्ट कॉपी करें', 'Copy Text')}</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 cursor-pointer"
          >
            {pick('बंद करें', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
};
