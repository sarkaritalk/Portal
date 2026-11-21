import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  FileText
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StatusTrackerHubProps {
  onNavigateToArticle: (slug: string) => void;
}

export const StatusTrackerHub: React.FC<StatusTrackerHubProps> = ({ onNavigateToArticle }) => {
  const { isHindi, isEnglish, isBilingual, pick } = useLanguage();
  const [filterState, setFilterState] = useState<'all' | 'bihar' | 'central'>('all');

  const trackerItems = [
    {
      id: 'rtps-status',
      titleHi: 'बिहार RTPS आवेदन स्थिति (जाति, आय, निवास)',
      titleEn: 'Bihar RTPS Application Status (Caste, Income, Residence)',
      service: 'ServicePlus Bihar',
      category: 'bihar',
      inputNeededHi: 'आवेदन संदर्भ संख्या (Application Ref Number जैसे: BRCO/2026/...)',
      inputNeededEn: 'Application Reference Number (e.g. BRCO/2026/...)',
      officialUrl: 'https://serviceonline.bihar.gov.in/viewApplicationStatus.do',
      articleSlug: 'bihar-rtps-caste-income-residence',
      descHi: 'बिहार RTPS पर दिए गए जाति, आय, आवासीय, या EWS आवेदन की वर्तमान स्वीकृति व प्रमाण पत्र की स्थिति जांचें।',
      descEn: 'Check current approval and certificate readiness status for Caste, Income, Residence, or EWS applications submitted on Bihar RTPS.',
    },
    {
      id: 'bihar-bhumi-status',
      titleHi: 'बिहार दाखिल-खारिज (Mutation) वाद संख्या स्थिति',
      titleEn: 'Bihar Land Mutation (Dakhil-Kharij) Case Status',
      service: 'Bihar Bhumi Land Records',
      category: 'bihar',
      inputNeededHi: 'जिला, अंचल, वित्तीय वर्ष और केस नंबर (वाद संख्या) या डीड नंबर',
      inputNeededEn: 'District, Circle (Anchal), Financial Year, and Case Number or Deed Number',
      officialUrl: 'https://biharbhumi.bihar.gov.in/Biharbhumi/DakhilKharijStatus',
      articleSlug: 'bihar-bhumi-jamabandi-mutation',
      descHi: 'कर्मचारी रिपोर्ट, सीओ आदेश और शुद्धि पत्र जारी होने की रियल-टाइम स्थिति देखें।',
      descEn: 'Check real-time Karmachari report, Circle Officer (CO) order, and Correction Slip (Shuddhi Patra) status.',
    },
    {
      id: 'pm-kisan-status',
      titleHi: 'PM-KISAN लाभार्थी व किस्त स्थिति (Know Your Status)',
      titleEn: 'PM-KISAN Beneficiary & Installment Status (Know Your Status)',
      service: 'PM-KISAN Samman Nidhi',
      category: 'central',
      inputNeededHi: 'PM Kisan रजिस्ट्रेशन नंबर (या आधार/मोबाइल से खोजें) + मोबाइल ओटीपी',
      inputNeededEn: 'PM-Kisan Registration Number (or search via Aadhaar/Mobile) + Mobile OTP',
      officialUrl: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx',
      articleSlug: 'pm-kisan-samman-nidhi-guide',
      descHi: 'e-KYC, लैंड सीडिंग, और 2000 रुपये की अगली किस्त आपके बैंक खाते में भेजी गई या नहीं, यह चेक करें।',
      descEn: 'Verify e-KYC, Land Seeding, Aadhaar DBT Seeding, and whether the ₹2,000 installment was credited to your bank account.',
    },
    {
      id: 'aadhaar-status',
      titleHi: 'आधार कार्ड नामांकन व सुधार स्थिति (Check Enrolment Status)',
      titleEn: 'Aadhaar Enrolment & Update Status',
      service: 'UIDAI myAadhaar',
      category: 'central',
      inputNeededHi: '28 अंकों का Enrolment ID (EID) या 14 अंकों का Service Request Number (SRN)',
      inputNeededEn: '28-digit Enrolment ID (EID) or 14-digit Service Request Number (SRN)',
      officialUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-status',
      articleSlug: 'aadhaar-card-address-update',
      descHi: 'पता सुधार, नाम सुधार या नए आधार कार्ड निर्माण की स्वीकृति स्थिति देखें।',
      descEn: 'Track approval status for Aadhaar address update, demographic corrections, or new Aadhaar enrolment.',
    },
    {
      id: 'ayushman-status',
      titleHi: 'आयुष्मान भारत परिवार कार्ड पात्रता व स्थिति',
      titleEn: 'Ayushman Bharat Family Card Eligibility & Status',
      service: 'NHA Beneficiary Portal',
      category: 'central',
      inputNeededHi: 'राशन कार्ड नंबर या 12 अंकों का आधार नंबर',
      inputNeededEn: 'Ration Card Number or 12-digit Aadhaar Number',
      officialUrl: 'https://beneficiary.nha.gov.in/',
      articleSlug: 'ayushman-bharat-card-guide',
      descHi: 'जांचें कि आपके परिवार के किन सदस्यों का ₹5 लाख वाला आयुष्मान कार्ड बना है और किसका लंबित है।',
      descEn: 'Check which family members have an approved ₹5 Lakh Ayushman card and whose e-KYC is still pending.',
    },
    {
      id: 'pan-aadhaar-status',
      titleHi: 'पैन-आधार लिंक स्थिति (Link Aadhaar Status)',
      titleEn: 'PAN–Aadhaar Link Status',
      service: 'Income Tax e-Filing',
      category: 'central',
      inputNeededHi: '10 अंकों का पैन नंबर और 12 अंकों का आधार नंबर',
      inputNeededEn: '10-character PAN Number and 12-digit Aadhaar Number',
      officialUrl: 'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status',
      articleSlug: 'instant-epan-application-guide',
      descHi: 'जांचें कि आपका पैन कार्ड निष्क्रिय (Inoperative) तो नहीं हुआ है और आधार से जुड़ा है या नहीं।',
      descEn: 'Verify whether your PAN card is active and linked with Aadhaar to avoid becoming inoperative.',
    },
    {
      id: 'voter-status',
      titleHi: 'वोटर कार्ड आवेदन स्थिति (Track Voter Application)',
      titleEn: 'Voter ID Application Tracking Status',
      service: 'ECI Voters Service',
      category: 'central',
      inputNeededHi: 'रेफरेंस नंबर (फॉर्म 6, 7 या 8 भरने के बाद प्राप्त)',
      inputNeededEn: 'Reference Number (generated after submitting Form 6, 7, or 8)',
      officialUrl: 'https://voters.eci.gov.in/',
      descHi: 'नए मतदाता पहचान पत्र या मतदाता सूची में नाम जुड़ने की बीएलओ सत्यापन स्थिति ट्रैक करें।',
      descEn: 'Track BLO verification and approval progress for new Voter ID registration or electoral roll corrections.',
    },
    {
      id: 'dl-status',
      titleHi: 'ड्राइविंग लाइसेंस व लर्नर लाइसेंस आवेदन स्थिति',
      titleEn: 'Driving & Learner Licence Application Status',
      service: 'Parivahan Sarathi',
      category: 'central',
      inputNeededHi: 'एप्लीकेशन नंबर और जन्मतिथि',
      inputNeededEn: 'Application Number and Date of Birth',
      officialUrl: 'https://sarathi.parivahan.gov.in/',
      articleSlug: 'parivahan-driving-licence-guide',
      descHi: 'आरटीओ अप्रूवल, टेस्ट रिजल्ट और स्मार्ट कार्ड डिस्पैच की स्पीड पोस्ट ट्रैकिंग स्थिति।',
      descEn: 'Check RTO approval, driving test result, and Speed Post dispatch status of your smart DL card.',
    },
    {
      id: 'epf-claim-status',
      titleHi: 'EPFO पीएफ क्लेम स्टेटस (Track EPF Claim)',
      titleEn: 'EPFO PF Withdrawal Claim Status',
      service: 'EPFO Member Portal',
      category: 'central',
      inputNeededHi: '12 अंकों का UAN नंबर और पासवर्ड',
      inputNeededEn: '12-digit UAN Number and Password',
      officialUrl: 'https://passbook.epfindia.gov.in/',
      articleSlug: 'epfo-pf-balance-withdrawal',
      descHi: 'फॉर्म 31 (एडवांस) या फॉर्म 19 (पूर्ण निकासी) क्लेम सेटल होने और बैंक में ट्रांसफर की स्थिति।',
      descEn: 'Track settlement and bank credit status of Form 31 (Advance) or Form 19 (Final PF Withdrawal) claims.',
    },
  ];

  const filteredItems = trackerItems.filter(item => {
    if (filterState === 'bihar') return item.category === 'bihar';
    if (filterState === 'central') return item.category === 'central';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white mb-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{pick('एकीकृत नागरिक ट्रैकिंग हब', 'Unified Citizen Status Tracking Hub')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            {pick('सरकारी आवेदन की स्थिति (Application Status) कैसे चेक करें', 'How to Check Government Application Status Online')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {pick(
              'बिहार RTPS, जमीन दाखिल-खारिज, PM Kisan किस्त, आधार सुधार, पैन लिंक, और ड्राइविंग लाइसेंस की आधिकारिक स्थिति सीधे संबंधित विभाग के सर्वर से जांचें।',
              'Check live official status for Bihar RTPS, Land Mutation, PM-Kisan installments, Aadhaar updates, PAN-Aadhaar link, and Driving Licence directly on departmental portals.'
            )}
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setFilterState('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            filterState === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {pick(`सभी सेवाएँ (${trackerItems.length})`, `All Services (${trackerItems.length})`)}
        </button>
        <button
          onClick={() => setFilterState('bihar')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            filterState === 'bihar'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {pick('बिहार सरकार सेवाएँ', 'Bihar State Services')}
        </button>
        <button
          onClick={() => setFilterState('central')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            filterState === 'central'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {pick('केंद्रीय सेवाएँ', 'Central Services', 'केंद्रीय सेवाएँ (Central Services)')}
        </button>
      </div>

      {/* Tracker Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  item.category === 'bihar'
                    ? 'bg-orange-100 text-orange-900 border border-orange-200'
                    : 'bg-blue-100 text-blue-900 border border-blue-200'
                }`}>
                  {item.category === 'bihar'
                    ? pick('बिहार सरकार', 'Bihar Government')
                    : pick('भारत सरकार', 'Central Government')}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {item.service}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {isEnglish ? item.titleEn : item.titleHi}
                </h3>
                {isBilingual && (
                  <p className="text-xs font-medium text-slate-500 mt-0.5">({item.titleEn})</p>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {isHindi ? item.descHi : isEnglish ? item.descEn : item.descHi}
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <span className="text-slate-500 block font-semibold text-[11px] mb-1">
                  {pick('जांच के लिए आवश्यक नंबर:', 'Required Reference Details:')}
                </span>
                <p className="text-slate-800 font-medium">
                  {pick(item.inputNeededHi, item.inputNeededEn)}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
              <a
                href={item.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{pick('आधिकारिक स्टेटस पेज खोलें', 'Open Official Status Page')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {item.articleSlug && (
                <button
                  onClick={() => onNavigateToArticle(item.articleSlug!)}
                  className="w-full text-center text-[11px] text-orange-700 hover:text-orange-900 font-semibold hover:underline flex items-center justify-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  <span>{pick('स्टेप-बाय-स्टेप मार्गदर्शिका पढ़ें →', 'Read Step-by-Step Guide →')}</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
