export interface BiharCategoryInfo {
  id: string;
  nameHi: string;
  nameEn: string;
  shortDesc: string;
  iconName: string;
}

export interface BiharServiceItem {
  id: string;
  categoryId: string;
  titleHi: string;
  titleEn: string;
  departmentHi: string;
  departmentEn: string;
  scope: 'Bihar' | 'Central';
  scopeLabelHi: string;
  scopeLabelEn: string;
  descriptionHi: string;
  descriptionEn: string;
  fee: string;
  eligibility: string[];
  documents: string[];
  primaryUrl: string;
  primaryLabel: string;
  statusUrl?: string;
  statusLabel?: string;
  articleSlug?: string;
  isPopular?: boolean;
}

export const BIHAR_DIRECTORY_CATEGORIES: BiharCategoryInfo[] = [
  {
    id: 'certificates-rtps',
    nameHi: 'प्रमाणपत्र एवं RTPS सेवाएँ',
    nameEn: 'Certificates & RTPS Services',
    shortDesc: 'जाति, आय, निवास, EWS, NCL एवं चरित्र प्रमाण पत्र ऑनलाइन आवेदन व स्थिति जाँचें।',
    iconName: 'FileCheck2'
  },
  {
    id: 'pension-social-security',
    nameHi: 'पेंशन एवं सामाजिक सुरक्षा',
    nameEn: 'Pension & Social Security',
    shortDesc: 'वृद्धजन, विधवा, दिव्यांग पेंशन एवं ई-लाभार्थी भुगतान स्थिति ट्रैकिंग।',
    iconName: 'ShieldCheck'
  },
  {
    id: 'women-child-welfare',
    nameHi: 'कन्या, महिला एवं बाल कल्याण',
    nameEn: 'Girl Child, Women & Child Welfare',
    shortDesc: 'मुख्यमंत्री कन्या उत्थान योजना (स्नातक, 12वीं) एवं मातृ वंदना सहायता।',
    iconName: 'HeartHandshake'
  },
  {
    id: 'labour-worker-welfare',
    nameHi: 'लेबर कार्ड एवं श्रमिक कल्याण',
    nameEn: 'Labour Card & Worker Welfare',
    shortDesc: 'BOCW बिहार भवन निर्माण श्रमिक निबंधन, नवीनीकरण एवं ई-श्रम कार्ड सेवाएँ।',
    iconName: 'HardHat'
  },
  {
    id: 'scholarships-education',
    nameHi: 'छात्रवृत्ति, शिक्षा एवं विद्यार्थी सहायता',
    nameEn: 'Scholarships, Education & Student Assistance',
    shortDesc: 'पोस्ट मैट्रिक स्कॉलरशिप (PMS), स्टूडेंट क्रेडिट कार्ड (MNSSBY) एवं मेधासॉफ्ट।',
    iconName: 'GraduationCap'
  },
  {
    id: 'ration-food-security',
    nameHi: 'राशन कार्ड एवं खाद्य सुरक्षा',
    nameEn: 'Ration Card & Food Security',
    shortDesc: 'नया राशन कार्ड (RCMS), सूची में नाम खोजें एवं खाद्यान्न वितरण स्थिति।',
    iconName: 'Wheat'
  },
  {
    id: 'farmer-agriculture',
    nameHi: 'किसान एवं कृषि सहायता',
    nameEn: 'Farmer & Agriculture Assistance',
    shortDesc: 'DBT किसान पंजीकरण, पीएम किसान, फसल सहायता योजना एवं कृषि यंत्र सब्सिडी।',
    iconName: 'Tractor'
  },
  {
    id: 'land-revenue',
    nameHi: 'जमीन, जमाबंदी एवं राजस्व सेवाएँ',
    nameEn: 'Land Records, Jamabandi & Revenue Services',
    shortDesc: 'अपना खाता, ऑनलाइन जमाबंदी पंजी, दाखिल-खारिज (म्यूटेशन) एवं भू-लगान भुगतान।',
    iconName: 'Landmark'
  },
  {
    id: 'employment-training',
    nameHi: 'रोजगार, प्रशिक्षण एवं नौकरी सहायता',
    nameEn: 'Employment, Training & Job Assistance',
    shortDesc: 'कुशल युवा कार्यक्रम (KYP), बेरोजगारी स्वयं सहायता भत्ता (SHA) एवं उद्यमी योजना।',
    iconName: 'Briefcase'
  },
  {
    id: 'healthcare-disability',
    nameHi: 'स्वास्थ्य, आयुष्मान एवं दिव्यांग सेवाएँ',
    nameEn: 'Healthcare, Ayushman & Disability Services',
    shortDesc: 'आयुष्मान भारत 5 लाख मुफ्त इलाज कार्ड, स्वावलंबन UDID एवं भाव्या बिहार।',
    iconName: 'Activity'
  },
  {
    id: 'identity-central',
    nameHi: 'पहचान पत्र एवं जरूरी केंद्रीय ऑनलाइन सेवाएँ',
    nameEn: 'Identity Cards & Essential Central Services',
    shortDesc: 'आधार, पैन, वोटर कार्ड, ड्राइविंग लाइसेंस व जन्म/मृत्यु प्रमाण पत्र (केंद्र सरकार द्वारा संचालित)।',
    iconName: 'BadgeCheck'
  },
  {
    id: 'other-bihar-services',
    nameHi: 'अन्य बिहार सरकारी सेवाएँ एवं विभाग',
    nameEn: 'Other Bihar Government Services & Departments',
    shortDesc: 'सुविधा बिजली बिल, लोक शिकायत निवारण (Jan Shikayat) व राज्य आपदा प्रबंधन।',
    iconName: 'Building2'
  }
];

export const BIHAR_SERVICES_DATA: BiharServiceItem[] = [
  // ==========================================
  // 1. प्रमाणपत्र एवं RTPS सेवाएँ (Certificates & RTPS Services)
  // ==========================================
  {
    id: 'rtps-caste-certificate',
    categoryId: 'certificates-rtps',
    titleHi: 'जाति प्रमाणपत्र निर्गमन (RO / SDO / DM स्तर)',
    titleEn: 'Caste Certificate Issuance (RO / SDO / DM Level)',
    departmentHi: 'सामान्य प्रशासन विभाग, बिहार सरकार',
    departmentEn: 'General Administration Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'अनुसूचित जाति (SC), जनजाति (ST), अत्यंत पिछड़ा वर्ग (EBC) व पिछड़ा वर्ग (BC) के लिए डिजिटल हस्ताक्षरित जाति प्रमाणपत्र।',
    descriptionEn: 'Digitally signed caste certificate for SC, ST, EBC, and BC residents of Bihar via ServicePlus RTPS.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'आवेदक बिहार राज्य का स्थायी निवासी होना चाहिए।',
      'जाति बिहार सरकार की आधिकारिक आरक्षित सूची में अधिसूचित होनी चाहिए।'
    ],
    documents: [
      'आधार कार्ड (Aadhaar Card)',
      'पासपोर्ट साइज फोटो (Passport Size Photo)',
      'स्व-घोषणा पत्र (ऑनलाइन फॉर्म में उपलब्ध)',
      'पिता का जाति प्रमाण या खतियान (यदि उपलब्ध हो)'
    ],
    primaryUrl: 'https://serviceonline.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://serviceonline.bihar.gov.in/resources/homePage/10/checkStatus.html',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bihar-rtps-caste-income-residence',
    isPopular: true
  },
  {
    id: 'rtps-income-certificate',
    categoryId: 'certificates-rtps',
    titleHi: 'आय प्रमाणपत्र निर्गमन (राजस्व अधिकारी स्तर)',
    titleEn: 'Income Certificate Issuance (Revenue Officer Level)',
    departmentHi: 'सामान्य प्रशासन विभाग, बिहार सरकार',
    departmentEn: 'General Administration Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'छात्रवृत्ति, सरकारी नौकरी, राशन कार्ड एवं योजनाओं के लिए वार्षिक पारिवारिक आय का वैधानिक प्रमाणपत्र।',
    descriptionEn: 'Official certification of annual family income from agriculture, salary, business and other sources.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'बिहार के मूल निवासी परिवार के सदस्य।',
      'परिवार की सभी वैध स्रोतों से होने वाली वार्षिक आय का विवरण मान्य।'
    ],
    documents: [
      'आधार कार्ड (Aadhaar Card)',
      'आवेदक की रंगीन फोटो (Photo)',
      'वार्षिक आय स्व-घोषणा (Self Declaration)',
      'सक्रिय मोबाइल नंबर (Mobile Number for OTP)'
    ],
    primaryUrl: 'https://serviceonline.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://serviceonline.bihar.gov.in/resources/homePage/10/checkStatus.html',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bihar-rtps-caste-income-residence',
    isPopular: true
  },
  {
    id: 'rtps-residence-certificate',
    categoryId: 'certificates-rtps',
    titleHi: 'निवास / आवासीय प्रमाणपत्र (Residential Certificate)',
    titleEn: 'Residence / Domicile Certificate',
    departmentHi: 'सामान्य प्रशासन विभाग, बिहार सरकार',
    departmentEn: 'General Administration Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'बिहार में स्थायी निवास सिद्ध करने वाला डिजिटल आवासीय प्रमाण पत्र (स्थायी/अस्थायी)।',
    descriptionEn: 'Official domicile proof certifying permanent residence in Bihar for admissions, jobs and benefits.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'आवेदक या उसके पूर्वज बिहार राज्य में स्थायी रूप से निवासरत हों।'
    ],
    documents: [
      'पहचान पत्र (आधार कार्ड / वोटर आईडी)',
      'नवीनतम पासपोर्ट फोटो',
      'स्थायी निवास का पता विवरण'
    ],
    primaryUrl: 'https://serviceonline.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://serviceonline.bihar.gov.in/resources/homePage/10/checkStatus.html',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bihar-rtps-caste-income-residence',
    isPopular: true
  },
  {
    id: 'rtps-ncl-certificate',
    categoryId: 'certificates-rtps',
    titleHi: 'नॉन-क्रीमी लेयर (NCL) प्रमाणपत्र (बिहार / केंद्र सरकार प्रयोजनार्थ)',
    titleEn: 'Non-Creamy Layer (NCL) Certificate (Bihar / Central Format)',
    departmentHi: 'सामान्य प्रशासन विभाग, बिहार सरकार',
    departmentEn: 'General Administration Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'BC/EBC एवं OBC श्रेणी के उम्मीदवारों के लिए क्रीमी लेयर से बाहर होने का अनिवार्य प्रमाणपत्र।',
    descriptionEn: 'Mandatory certification for backward class candidates with family income within the prescribed limit.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'बिहार के BC या EBC वर्ग के स्थायी निवासी।',
      'परिवार की वार्षिक आय क्रीमी लेयर सीमा (₹8 लाख) से कम हो।'
    ],
    documents: [
      'पहले से बना जाति प्रमाण पत्र',
      'पहले से बना आय प्रमाण पत्र',
      'पहले से बना निवास प्रमाण पत्र',
      'स्व-घोषणा पत्र (Form 16/XI)'
    ],
    primaryUrl: 'https://serviceonline.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://serviceonline.bihar.gov.in/resources/homePage/10/checkStatus.html',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'rtps-ews-certificate',
    categoryId: 'certificates-rtps',
    titleHi: 'ईडब्ल्यूएस (EWS) आर्थिक रूप से कमजोर वर्ग प्रमाणपत्र',
    titleEn: 'Economically Weaker Section (EWS) Certificate',
    departmentHi: 'सामान्य प्रशासन विभाग, बिहार सरकार',
    departmentEn: 'General Administration Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'सामान्य वर्ग (General Category) के आर्थिक रूप से कमजोर नागरिकों के लिए 10% आरक्षण प्रमाणपत्र।',
    descriptionEn: '10% quota eligibility certificate for general category citizens meeting income and asset criteria.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'सामान्य वर्ग के नागरिक (SC/ST/BC/EBC में शामिल न हों)।',
      'पारिवारिक सकल वार्षिक आय ₹8 लाख से कम हो एवं आवासीय/भूमि सीमा नियम लागू हों।'
    ],
    documents: [
      'आधार कार्ड',
      'पासपोर्ट फोटो',
      'आय, जाति व निवास विवरण',
      'जमीन/मकान संबंधित दस्तावेज (यदि लागू हो)'
    ],
    primaryUrl: 'https://serviceonline.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://serviceonline.bihar.gov.in/resources/homePage/10/checkStatus.html',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'rtps-character-certificate',
    categoryId: 'certificates-rtps',
    titleHi: 'आचरण / चरित्र प्रमाणपत्र (बिहार पुलिस सत्यापन)',
    titleEn: 'Character Certificate (Bihar Police Verification via RTPS)',
    departmentHi: 'गृह विभाग (आरक्षी शाखा), बिहार सरकार',
    departmentEn: 'Home Dept (Police Branch), Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'सरकारी संविदा, सीएसपी, पेट्रोल पंप या नौकरी हेतु स्थानीय थाना द्वारा पुलिस सत्यापन प्रमाण पत्र।',
    descriptionEn: 'Police character verification certificate issued by local police station through RTPS portal.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'बिहार राज्य का निवासी जिसका संबंधित थाना क्षेत्र में निवास हो।',
      'कोई गंभीर आपराधिक रिकॉर्ड या वारंट लंबित न हो।'
    ],
    documents: [
      'पहचान पत्र (आधार / वोटर आईडी)',
      'निवास प्रमाण पत्र',
      'पासपोर्ट साइज फोटो',
      'सक्रिय मोबाइल नंबर'
    ],
    primaryUrl: 'https://serviceonline.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://serviceonline.bihar.gov.in/resources/homePage/10/checkStatus.html',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },

  // ==========================================
  // 2. पेंशन एवं सामाजिक सुरक्षा (Pension & Social Security)
  // ==========================================
  {
    id: 'sspmis-mvpy',
    categoryId: 'pension-social-security',
    titleHi: 'मुख्यमंत्री वृद्धजन पेंशन योजना (MVPY)',
    titleEn: 'Mukhyamantri Vridhjan Pension Yojana (MVPY)',
    departmentHi: 'समाज कल्याण विभाग, बिहार सरकार',
    departmentEn: 'Social Welfare Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: '60 वर्ष से अधिक उम्र के बिहार के सभी वृद्धजनों को ₹400 प्रति माह एवं 80+ वर्ष वालों को ₹500 प्रति माह वित्तीय सहायता।',
    descriptionEn: 'Monthly financial assistance for senior citizens aged 60+ (₹400/month) and 80+ (₹500/month) in Bihar.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'आवेदक बिहार का स्थायी निवासी हो।',
      'उम्र न्यूनतम 60 वर्ष पूरी होनी चाहिए (आधार या मतदाता सूची अनुसार)।',
      'आवेदक किसी अन्य सरकारी पेंशन या सेवानिवृत्ति पेंशन का लाभ न ले रहा हो।'
    ],
    documents: [
      'आधार कार्ड (Aadhaar Card)',
      'मतदाता पहचान पत्र (Voter Card)',
      'बैंक पासबुक (आधार से लिंक खाता)',
      'सहमति पत्र एवं पासपोर्ट फोटो'
    ],
    primaryUrl: 'https://sspmis.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://elabharthi.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    isPopular: true
  },
  {
    id: 'sspmis-widow-pension',
    categoryId: 'pension-social-security',
    titleHi: 'लक्ष्मीबाई सामाजिक सुरक्षा पेंशन (विधवा पेंशन)',
    titleEn: 'Lakshmibai Social Security Pension (Widow Pension)',
    departmentHi: 'समाज कल्याण विभाग, बिहार सरकार',
    departmentEn: 'Social Welfare Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: '18 वर्ष या उससे अधिक आयु की विधवा महिलाओं को आर्थिक संबल हेतु ₹400 प्रति माह पेंशन।',
    descriptionEn: 'Monthly assistance of ₹400 for widowed women aged 18 and above residing in Bihar.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'आवेदिका बिहार की स्थायी निवासी हो।',
      'आयु 18 वर्ष या अधिक हो।',
      'पति की मृत्यु हो चुकी हो एवं वार्षिक आय सीमा ₹60,000 या बीपीएल परिवार हो।'
    ],
    documents: [
      'पति का मृत्यु प्रमाण पत्र (Death Certificate of Husband)',
      'आधार कार्ड व बैंक पासबुक',
      'आय एवं निवास प्रमाण पत्र',
      'पासपोर्ट फोटो'
    ],
    primaryUrl: 'https://sspmis.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://elabharthi.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'sspmis-disability-pension',
    categoryId: 'pension-social-security',
    titleHi: 'बिहार राज्य निःशक्तता पेंशन योजना',
    titleEn: 'Bihar State Disability Pension Scheme',
    departmentHi: 'समाज कल्याण विभाग, बिहार सरकार',
    departmentEn: 'Social Welfare Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: '40% या उससे अधिक दिव्यांगता वाले बिहार के नागरिकों को मासिक पेंशन व सहायता राशि।',
    descriptionEn: 'Monthly financial assistance for persons with benchmark disability of 40% or more in Bihar.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'बिहार राज्य का स्थायी निवासी।',
      'सक्षम चिकित्सा प्राधिकारी द्वारा 40% या अधिक दिव्यांगता प्रमाण पत्र।'
    ],
    documents: [
      'दिव्यांगता प्रमाण पत्र (Disability / UDID Card)',
      'आधार कार्ड व बैंक पासबुक',
      'निवास प्रमाण पत्र एवं फोटो'
    ],
    primaryUrl: 'https://sspmis.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://elabharthi.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'elabharthi-payment-status',
    categoryId: 'pension-social-security',
    titleHi: 'ई-लाभार्थी पेंशन भुगतान स्थिति व जीवन प्रमाणीकरण (e-KYC)',
    titleEn: 'e-Labharthi Pension Payment Status & Jeevan Pramaan',
    departmentHi: 'समाज कल्याण विभाग / NIC बिहार',
    departmentEn: 'Social Welfare Dept / NIC Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'वृद्धावस्था, विधवा एवं दिव्यांग पेंशन का बैंक खाता भुगतान स्टेटस और वार्षिक जीवन प्रमाणीकरण स्थिति।',
    descriptionEn: 'Check monthly pension disbursement status in bank account and annual life certificate (eKYC) status.',
    fee: '₹0 (जाँच पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'बिहार के किसी भी सामाजिक सुरक्षा पेंशन योजना के पंजीकृत लाभार्थी।'
    ],
    documents: [
      'लाभार्थी संख्या (Beneficiary ID) / बैंक खाता संख्या / आधार संख्या'
    ],
    primaryUrl: 'https://elabharthi.bih.nic.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://elabharthi.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    isPopular: true
  },

  // ==========================================
  // 3. कन्या, महिला एवं बाल कल्याण (Girl Child, Women & Child Welfare)
  // ==========================================
  {
    id: 'medhasoft-kanya-snatak',
    categoryId: 'women-child-welfare',
    titleHi: 'मुख्यमंत्री कन्या उत्थान योजना (स्नातक पास प्रोत्साहन राशि)',
    titleEn: 'Mukhyamantri Kanya Utthan Yojana (Graduation ₹50,000 Incentive)',
    departmentHi: 'शिक्षा विभाग, बिहार सरकार',
    departmentEn: 'Education Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'बिहार के विश्वविद्यालयों से मान्यता प्राप्त स्नातक (Graduation) उत्तीर्ण अविवाहित/विवाहित छात्राओं को ₹50,000 की एकमुश्त सहायता।',
    descriptionEn: 'One-time incentive grant of ₹50,000 to female students graduating from recognized universities in Bihar.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'छात्रा बिहार राज्य की स्थायी निवासी होनी चाहिए।',
      'बिहार के किसी मान्यता प्राप्त कॉलेज/विश्वविद्यालय से स्नातक डिग्री उत्तीर्ण।'
    ],
    documents: [
      'स्नातक फाइनल ईयर मार्कशीट (Graduation Marksheet)',
      'आधार कार्ड (छात्रा के नाम से)',
      'बैंक पासबुक (बिहार में स्थित बैंक शाखा, आधार सीडेड खाता)',
      'निवास प्रमाण पत्र'
    ],
    primaryUrl: 'https://medhasoft.bih.nic.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://medhasoft.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    isPopular: true
  },
  {
    id: 'medhasoft-kanya-inter',
    categoryId: 'women-child-welfare',
    titleHi: 'मुख्यमंत्री कन्या उत्थान योजना (इंटरमीडिएट +2 उत्तीर्ण अविवाहित छात्राएँ)',
    titleEn: 'Mukhyamantri Kanya Utthan Yojana (+2 Intermediate ₹25,000)',
    departmentHi: 'शिक्षा विभाग, बिहार सरकार',
    departmentEn: 'Education Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'बिहार विद्यालय परीक्षा समिति (BSEB) से 12वीं उत्तीर्ण अविवाहित छात्राओं को ₹25,000 प्रोत्साहन राशि।',
    descriptionEn: 'Financial incentive of ₹25,000 for unmarried girls passing 12th intermediate from Bihar Board.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'बिहार बोर्ड (BSEB) से इंटरमीडिएट उत्तीर्ण छात्रा।',
      'परीक्षा उत्तीर्ण होने के समय अविवाहित (Unmarried) होना अनिवार्य।'
    ],
    documents: [
      '12वीं इंटरमीडिएट मार्कशीट व रोल नंबर',
      'आधार कार्ड व अविवाहित स्व-घोषणा',
      'छात्रा के नाम का बैंक खाता (Aadhaar Seeded)'
    ],
    primaryUrl: 'https://medhasoft.bih.nic.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://medhasoft.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'pmmvy-matru-vandana',
    categoryId: 'women-child-welfare',
    titleHi: 'प्रधानमंत्री मातृ वंदना योजना (PMMVY)',
    titleEn: 'Pradhan Mantri Matru Vandana Yojana (Maternity Benefit)',
    departmentHi: 'महिला एवं बाल विकास मंत्रालय / समाज कल्याण बिहार',
    departmentEn: 'Ministry of WCD / Social Welfare Bihar',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय सेवा (बिहार में लागू)',
    scopeLabelEn: 'Central Scheme (Active in Bihar)',
    descriptionHi: 'गर्भवती एवं धात्री माताओं को प्रथम व द्वितीय कन्या शिशु के पोषण एवं स्वास्थ्य सुधार हेतु ₹5,000 से ₹6,000 मातृत्व सहायता।',
    descriptionEn: 'Maternity cash incentive of ₹5,000 to ₹6,000 for pregnant women and lactating mothers for health & nutrition.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'गर्भवती महिला एवं स्तनपान कराने वाली माताएँ (आंगनवाड़ी केंद्र में पंजीकृत)।',
      'सरकारी स्थायी नौकरी वाले कर्मचारी इस योजना में शामिल नहीं।'
    ],
    documents: [
      'मातृ एवं शिशु सुरक्षा (MCP) कार्ड',
      'गर्भवती महिला व पति का आधार कार्ड',
      'बैंक पासबुक'
    ],
    primaryUrl: 'https://pmmvy.wcd.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://pmmvy.wcd.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },

  // ==========================================
  // 4. लेबर कार्ड एवं श्रमिक कल्याण (Labour Card & Worker Welfare)
  // ==========================================
  {
    id: 'bocw-labour-card',
    categoryId: 'labour-worker-welfare',
    titleHi: 'बिहार भवन निर्माण श्रमिक लेबर कार्ड ऑनलाइन निबंधन (BOCW)',
    titleEn: 'Bihar BOCW Labour Card Online Registration',
    departmentHi: 'श्रम संसाधन विभाग, बिहार सरकार',
    departmentEn: 'Labour Resources Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'राजमिस्त्री, बढ़ई, पेंटर, प्लंबर व निर्माण श्रमिकों को सरकारी अनुदान, वस्त्र, चिकित्सा व औजार सहायता हेतु लेबर कार्ड।',
    descriptionEn: 'Registration of building and construction workers for annual dress, medical, equipment and pension benefits.',
    fee: '₹20 से ₹50 (सरकारी निबंधन शुल्क / Govt Prescribed Fee)',
    eligibility: [
      'आयु 18 से 60 वर्ष के बीच होनी चाहिए।',
      'विगत 12 महीनों में कम से कम 90 दिन निर्माण श्रमिक के रूप में कार्य किया हो।'
    ],
    documents: [
      'आधार कार्ड',
      'बैंक पासबुक (बिहार में खाता)',
      '90 दिन कार्य का नियोजन प्रमाण पत्र / स्व-घोषणा',
      'पासपोर्ट साइज फोटो'
    ],
    primaryUrl: 'https://bocw.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://bocw.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    isPopular: true
  },
  {
    id: 'eshram-card-central',
    categoryId: 'labour-worker-welfare',
    titleHi: 'ई-श्रम कार्ड (e-Shram Universal Account Number)',
    titleEn: 'e-Shram National Database of Unorganised Workers',
    departmentHi: 'श्रम एवं रोजगार मंत्रालय, भारत सरकार',
    departmentEn: 'Ministry of Labour & Employment, Govt of India',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय सेवा (पूरे भारत में मान्य)',
    scopeLabelEn: 'Central Service (Pan-India)',
    descriptionHi: 'असंगठित क्षेत्र के कामगारों (कृषि मजदूर, रेहड़ी-पटरी, गिग वर्कर्स) के लिए 12 अंकों का राष्ट्रीय पहचान कार्ड।',
    descriptionEn: 'Universal 12-digit UAN card for unorganised workers across India for social security benefits.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'आयु 16 से 59 वर्ष के बीच।',
      'असंगठित क्षेत्र का श्रमिक (ईपीएफओ या ईएसआईसी सदस्य न हो)।'
    ],
    documents: [
      'आधार कार्ड (मोबाइल लिंक अनिवार्य)',
      'सक्रिय बचत बैंक खाता विवरण'
    ],
    primaryUrl: 'https://eshram.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://eshram.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },

  // ==========================================
  // 5. छात्रवृत्ति, शिक्षा एवं विद्यार्थी सहायता (Scholarships, Education & Student Assistance)
  // ==========================================
  {
    id: 'pms-bihar-online',
    categoryId: 'scholarships-education',
    titleHi: 'बिहार पोस्ट मैट्रिक स्कॉलरशिप पोर्टल (PMS Bihar - SC/ST/BC/EBC)',
    titleEn: 'Bihar Post Matric Scholarship Portal (PMS Bihar)',
    departmentHi: 'शिक्षा विभाग, बिहार सरकार',
    departmentEn: 'Education Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: '10वीं के बाद इंटरमीडिएट, आईटीआई, पॉलिटेक्निक, स्नातक, बीएड व मेडिकल/इंजीनियरिंग छात्रों के लिए सरकारी छात्रवृत्ति।',
    descriptionEn: 'Post-matric state scholarship portal for SC, ST, BC, and EBC students studying in recognized institutions.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'बिहार के स्थायी निवासी SC, ST, BC या EBC छात्र।',
      'मान्यता प्राप्त संस्थान में पोस्ट मैट्रिक पाठ्यक्रम में अध्ययनरत।',
      'पारिवारिक आय सीमा सरकारी अधिसूचना अनुसार (अधिकतम ₹2.5 लाख से ₹3 लाख)।'
    ],
    documents: [
      'जाति, आय एवं निवास प्रमाण पत्र (नवीनतम)',
      '10वीं व अंतिम उत्तीर्ण परीक्षा की मार्कशीट',
      'कॉलेज नामांकन रसीद व फीस स्ट्रक्चर',
      'बोनाफाइड सर्टिफिकेट (Bonafide Certificate)'
    ],
    primaryUrl: 'https://pmsonline.bih.nic.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://pmsonline.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    isPopular: true
  },
  {
    id: 'mnssby-student-credit-card',
    categoryId: 'scholarships-education',
    titleHi: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना (MNSSBY - ₹4 लाख शिक्षा ऋण)',
    titleEn: 'Bihar Student Credit Card Scheme (MNSSBY ₹4 Lakh Loan)',
    departmentHi: 'योजना एवं विकास विभाग, बिहार सरकार',
    departmentEn: 'Planning & Development Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: '12वीं पास विद्यार्थियों को उच्च शिक्षा (B.Tech, MBBS, BCA, BBA, होटल मैनेजमेंट आदि) हेतु 1% से 4% साधारण ब्याज पर ₹4 लाख तक ऋण।',
    descriptionEn: 'Concessionary education loan up to ₹4 Lakhs for Bihar students pursuing higher professional courses.',
    fee: '₹0 (कोई प्रोसेसिंग शुल्क नहीं / No Processing Fee)',
    eligibility: [
      'बिहार का मूल निवासी और 12वीं उत्तीर्ण।',
      'उम्र सामान्यतः 25 वर्ष से कम (कोर्स अनुसार)।',
      'मान्यता प्राप्त सरकारी या NAAC "A" ग्रेड संस्थान में नामांकित।'
    ],
    documents: [
      '10वीं व 12वीं का मूल प्रमाण पत्र व अंक पत्र',
      'संस्थान का प्रवेश पत्र व शुल्क विवरण',
      'विद्यार्थी व सह-आवेदक (अभिभावक) का आधार कार्ड व पैन कार्ड',
      'निवास प्रमाण पत्र'
    ],
    primaryUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bihar-student-credit-card-scheme',
    isPopular: true
  },
  {
    id: 'medhasoft-matric-protsahan',
    categoryId: 'scholarships-education',
    titleHi: 'मुख्यमंत्री बालक/बालिका 10th पास प्रोत्साहन योजना (मेधासॉफ्ट)',
    titleEn: 'Mukhyamantri 10th Matric Pass Protsahan Yojana (Medhasoft)',
    departmentHi: 'शिक्षा विभाग, बिहार सरकार',
    departmentEn: 'Education Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'बिहार बोर्ड 10वीं मैट्रिक में प्रथम श्रेणी उत्तीर्ण विद्यार्थियों को ₹10,000 एवं SC/ST द्वितीय श्रेणी को ₹8,000 प्रोत्साहन राशि।',
    descriptionEn: '₹10,000 incentive for 1st division 10th matric students in Bihar, and ₹8,000 for 2nd division SC/ST students.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'बिहार बोर्ड (BSEB) से 10वीं परीक्षा उत्तीर्ण छात्र/छात्रा।',
      'छात्र का अपना बैंक खाता बिहार में होना चाहिए (DBT एक्टिवेट)।'
    ],
    documents: [
      '10वीं का रजिस्ट्रेशन नंबर व प्राप्तांक (Marks)',
      'आधार कार्ड व मोबाइल नंबर',
      'बैंक खाता विवरण (आधार सीडेड)'
    ],
    primaryUrl: 'https://medhasoft.bih.nic.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://medhasoft.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'national-scholarship-portal',
    categoryId: 'scholarships-education',
    titleHi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (National Scholarship Portal - NSP)',
    titleEn: 'National Scholarship Portal (NSP All Central Schemes)',
    departmentHi: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय, भारत सरकार',
    departmentEn: 'Ministry of Electronics & IT, Govt of India',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय सेवा (पूरे भारत में मान्य)',
    scopeLabelEn: 'Central Portal (Pan-India)',
    descriptionHi: 'केंद्रीय मंत्रालय (अल्पसंख्यक, सामाजिक न्याय, जनजातीय कार्य) द्वारा संचालित विभिन्न राष्ट्रीय छात्रवृत्तियों का एकीकृत मंच।',
    descriptionEn: 'Unified government portal for Pre-Matric, Post-Matric, and Merit-cum-Means central scholarships.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'संबंधित केंद्रीय योजना की पात्रता व पारिवारिक आय सीमा का पालन करने वाले छात्र।'
    ],
    documents: [
      'अकादमिक मार्कशीट, बोनाफाइड, आय व जाति प्रमाण पत्र, आधार कार्ड'
    ],
    primaryUrl: 'https://scholarships.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://scholarships.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'national-scholarship-portal-guide'
  },

  // ==========================================
  // 6. राशन कार्ड एवं खाद्य सुरक्षा (Ration Card & Food Security)
  // ==========================================
  {
    id: 'rcms-bihar-new-card',
    categoryId: 'ration-food-security',
    titleHi: 'नया राशन कार्ड ऑनलाइन आवेदन (RCMS Bihar)',
    titleEn: 'New Ration Card Online Application (RCMS Bihar)',
    departmentHi: 'खाद्य एवं उपभोक्ता संरक्षण विभाग, बिहार सरकार',
    departmentEn: 'Food & Consumer Protection Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) अंतर्गत PHH एवं अंत्योदय नया डिजिटल राशन कार्ड आवेदन।',
    descriptionEn: 'Apply online for new priority household (PHH) or Antyodaya Anna Yojana (AAY) digital ration cards.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'परिवार बिहार का स्थायी निवासी हो एवं पहले से राशन कार्ड न हो।',
      'पात्र गृहस्थी मानकों (आवास, वाहन, सरकारी नौकरी आदि शर्तों) को पूरा करता हो।'
    ],
    documents: [
      'परिवार के मुखिया व सभी सदस्यों का आधार कार्ड',
      'परिवार की संयुक्त फोटो (Group Photo)',
      'निवास प्रमाण पत्र एवं आय प्रमाण पत्र',
      'मुखिया के नाम का बैंक खाता पासबुक'
    ],
    primaryUrl: 'https://epds.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://epds.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bihar-ration-card-epds',
    isPopular: true
  },
  {
    id: 'epds-ration-search',
    categoryId: 'ration-food-security',
    titleHi: 'राशन कार्ड सूची में नाम देखें एवं ई-राशन कार्ड डाउनलोड (ePDS)',
    titleEn: 'Search Name in Ration Card List & Download e-RC',
    departmentHi: 'खाद्य एवं उपभोक्ता संरक्षण विभाग, बिहार सरकार',
    departmentEn: 'Food & Consumer Protection Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'जिला, अनुमंडल, ब्लॉक एवं डीलर वार राशन कार्ड सूची में नाम चेक करें व डिजिटल राशन कार्ड डाउनलोड करें।',
    descriptionEn: 'View district-wise ration card register, member names, dealer mapping and download printable e-card.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'बिहार के किसी भी जिले के राशन कार्ड धारक।'
    ],
    documents: [
      'राशन कार्ड नंबर या जिला, ब्लॉक व पंचायत का विवरण'
    ],
    primaryUrl: 'https://epds.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://epos.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bihar-ration-card-epds'
  },

  // ==========================================
  // 7. किसान एवं कृषि सहायता (Farmer & Agriculture Assistance)
  // ==========================================
  {
    id: 'dbt-agriculture-farmer-reg',
    categoryId: 'farmer-agriculture',
    titleHi: 'बिहार कृषि विभाग प्रत्यक्ष लाभ अंतरण (DBT किसान पंजीकरण)',
    titleEn: 'DBT Agriculture Bihar - Farmer Registration (13-Digit ID)',
    departmentHi: 'कृषि विभाग, बिहार सरकार',
    departmentEn: 'Agriculture Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'बिहार में बीज अनुदान, डीजल सब्सिडी, कृषि यंत्र व सरकारी योजनाओं के लिए अनिवार्य 13 अंकों का किसान पंजीकरण।',
    descriptionEn: 'Mandatory 13-digit farmer registration ID required for all Bihar agriculture subsidies and schemes.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'बिहार के भूमिधारक (रैयत) या गैर-रैयत (बटाईदार) किसान।'
    ],
    documents: [
      'आधार कार्ड (मोबाइल नंबर लिंक्ड)',
      'बैंक खाता (NPCI आधार सीडेड)',
      'जमीन का विवरण (रैयत हेतु)'
    ],
    primaryUrl: 'https://dbtagriculture.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://dbtagriculture.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    isPopular: true
  },
  {
    id: 'pm-kisan-portal',
    categoryId: 'farmer-agriculture',
    titleHi: 'पीएम किसान सम्मान निधि (PM-Kisan ₹6,000 प्रति वर्ष व eKYC)',
    titleEn: 'PM Kisan Samman Nidhi (Beneficiary Status & OTP e-KYC)',
    departmentHi: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
    departmentEn: 'Ministry of Agriculture, Govt of India',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय योजना (पूरे भारत में लागू)',
    scopeLabelEn: 'Central Scheme (All India)',
    descriptionHi: 'पात्र किसान परिवारों को प्रति वर्ष ₹2,000 की 3 समान किस्तों में ₹6,000 सीधी बैंक अंतरण सहायता।',
    descriptionEn: 'Direct financial benefit of ₹6,000 per year transferred to bank accounts of eligible farmer families.',
    fee: '₹0 (OTP e-KYC पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'कृषि योग्य भूमि वाले किसान परिवार।',
      'संवैधानिक पदधारक, आयकरदाता एवं ₹10,000 से अधिक पेंशनभोगी अपात्र।'
    ],
    documents: [
      'आधार कार्ड',
      'जमीन की अद्यतन रसीद / LPC',
      'बैंक पासबुक'
    ],
    primaryUrl: 'https://pmkisan.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'pm-kisan-samman-nidhi-guide',
    isPopular: true
  },
  {
    id: 'fasal-sahayata-bihar',
    categoryId: 'farmer-agriculture',
    titleHi: 'बिहार राज्य फसल सहायता योजना (PACS Fasal Sahayata)',
    titleEn: 'Bihar Rajya Fasal Sahayata Yojana (Crop Loss Compensation)',
    departmentHi: 'सहकारिता विभाग, बिहार सरकार',
    departmentEn: 'Cooperative Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'बाढ़, सुखाड़ व प्राकृतिक आपदा से फसल क्षति होने पर किसानों को ₹7,500 से ₹10,000 प्रति हेक्टेयर तक निःशुल्क वित्तीय सुरक्षा।',
    descriptionEn: 'State crop damage compensation scheme replacing conventional insurance without charging any premium.',
    fee: '₹0 (कोई प्रीमियम नहीं / Free)',
    eligibility: [
      'बिहार के रैयत एवं गैर-रैयत (बटाईदार) किसान जिनका संबंधित मौसम में फसल नुकसान हुआ हो।'
    ],
    documents: [
      'भू-स्वामित्व प्रमाण पत्र (LPC) या जमीन लगान रसीद',
      'स्व-घोषणा पत्र (वार्ड सदस्य/किसान सलाहकार सत्यापित)',
      'आवेदक का आधार व बैंक खाता'
    ],
    primaryUrl: 'https://pacsonline.bih.nic.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://pacsonline.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'farmech-bihar-subsidy',
    categoryId: 'farmer-agriculture',
    titleHi: 'कृषि यांत्रिकरण योजना (OFMAS Bihar Farm Machinery Subsidy)',
    titleEn: 'Agricultural Farm Machinery Subsidy (OFMAS Bihar)',
    departmentHi: 'कृषि विभाग, बिहार सरकार',
    departmentEn: 'Agriculture Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'ट्रैक्टर, रोटावेटर, कल्टीवेटर, रीपर व आधुनिक कृषि उपकरणों की खरीद पर 40% से 80% तक सरकारी अनुदान।',
    descriptionEn: 'Online subsidy portal for purchase of tractors, rotavators, harvesters and modern agricultural machinery.',
    fee: '₹0 (आवेदन निःशुल्क / Free)',
    eligibility: [
      'बिहार के पंजीकृत किसान (DBT Registration अनिवार्य)।'
    ],
    documents: [
      '13 अंकों का किसान पंजीकरण नंबर',
      'जमीन की वर्तमान रसीद',
      'जाति प्रमाण पत्र (आरक्षित श्रेणी के अतिरिक्त अनुदान हेतु)'
    ],
    primaryUrl: 'https://farmech.bih.nic.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://farmech.bih.nic.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },

  // ==========================================
  // 8. जमीन, जमाबंदी एवं राजस्व सेवाएँ (Land Records, Jamabandi & Revenue Services)
  // ==========================================
  {
    id: 'biharbhumi-apna-khata',
    categoryId: 'land-revenue',
    titleHi: 'बिहार भूमि: अपना खाता, जमाबंदी पंजी व खेसरा विवरण देखें',
    titleEn: 'Bihar Bhumi: View Apna Khata & Jamabandi Register Online',
    departmentHi: 'राजस्व एवं भूमि सुधार विभाग, बिहार सरकार',
    departmentEn: 'Revenue & Land Reforms Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'बिहार के सभी 38 जिलों के मौजा वार जमाबंदी पंजी भाग-वर्तमान, पृष्ठ संख्या एवं जमीन का ब्योरा ऑनलाइन देखें।',
    descriptionEn: 'Search digital land records, Jamabandi registers, plot numbers, volume and page numbers online.',
    fee: '₹0 (देखना निःशुल्क / Free)',
    eligibility: [
      'बिहार में स्थित किसी भी भूमि के मालिक, वारिस या नागरिक।'
    ],
    documents: [
      'जिला, अंचल, हल्का एवं मौजा का नाम, खाता संख्या या रैयत का नाम'
    ],
    primaryUrl: 'https://biharbhumi.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://biharbhumi.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bihar-bhumi-jamabandi-mutation',
    isPopular: true
  },
  {
    id: 'biharbhumi-mutation',
    categoryId: 'land-revenue',
    titleHi: 'ऑनलाइन दाखिल-खारिज / म्यूटेशन आवेदन (Online Mutation Application)',
    titleEn: 'Online Dakhil Kharij / Land Mutation Application',
    departmentHi: 'राजस्व एवं भूमि सुधार विभाग, बिहार सरकार',
    departmentEn: 'Revenue & Land Reforms Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'केवाला, वसीयत या बंटवारा के पश्चात जमीन अपने नाम कराने हेतु अंचलाधिकारी (CO) के पास ऑनलाइन म्यूटेशन आवेदन।',
    descriptionEn: 'Apply online for recording change of ownership after land sale deed, inheritance or partition.',
    fee: '₹0 (सरकारी ऑनलाइन आवेदन निःशुल्क / Free)',
    eligibility: [
      'वैध पंजीकृत केवाला (Sale Deed), दानपत्र या पैतृक बंटवारे के आधार पर भूमि क्रेता।'
    ],
    documents: [
      'पंजीकृत केवाला (Scanned Sale Deed Copy)',
      'विक्रेता की पूर्व जमाबंदी रसीद',
      'वंशावली / वारिसाना प्रमाण (यदि पैतृक जमीन हो)'
    ],
    primaryUrl: 'https://biharbhumi.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://biharbhumi.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bihar-bhumi-jamabandi-mutation',
    isPopular: true
  },
  {
    id: 'biharbhumi-bhu-lagaan',
    categoryId: 'land-revenue',
    titleHi: 'ऑनलाइन भू-लगान भुगतान एवं ई-रसीद डाउनलोड (Land Tax)',
    titleEn: 'Online Bhu-Lagaan Payment & e-Receipt Download',
    departmentHi: 'राजस्व एवं भूमि सुधार विभाग, बिहार सरकार',
    departmentEn: 'Revenue & Land Reforms Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'घर बैठे नेट बैंकिंग, यूपीआई या डेबिट कार्ड से जमीन का सरकारी टैक्स (लगान) भरें और अद्यतन रसीद डाउनलोड करें।',
    descriptionEn: 'Pay annual government land tax online via UPI/NetBanking and download instant verified tax receipts.',
    fee: 'जमीन के क्षेत्रफल एवं दर अनुसार नाममात्र लगान (Nominal Land Revenue Fee)',
    eligibility: [
      'जिनकी जमाबंदी बिहार भूमि पोर्टल पर डिजिटाइज्ड रूप से मौजूद है।'
    ],
    documents: [
      'भाग वर्तमान एवं पृष्ठ संख्या (जमाबंदी पंजी से प्राप्त)'
    ],
    primaryUrl: 'https://biharbhumi.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://biharbhumi.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bihar-bhumi-jamabandi-mutation'
  },
  {
    id: 'bhunaksha-bihar-maps',
    categoryId: 'land-revenue',
    titleHi: 'भू-नक्शा बिहार (BhuNaksha Digital Cadastral Village Maps)',
    titleEn: 'BhuNaksha Bihar (Cadastral Land Maps Online)',
    departmentHi: 'राजस्व एवं भूमि सुधार विभाग, बिहार सरकार',
    departmentEn: 'Revenue & Land Reforms Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'अपने गांव व मौजा का डिजिटल भू-नक्शा एवं खेसरा सीमांकन ऑनलाइन देखें और प्रिंट करें।',
    descriptionEn: 'View geo-referenced cadastral map of land plots, boundaries and village sheets online.',
    fee: '₹0 (देखना निःशुल्क / Free)',
    eligibility: [
      'बिहार के किसी भी मौजा के नागरिक व किसान।'
    ],
    documents: [
      'जिला, अनुमंडल, अंचल एवं मौजा का नाम'
    ],
    primaryUrl: 'https://bhunaksha.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://bhunaksha.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },

  // ==========================================
  // 9. रोजगार, प्रशिक्षण एवं नौकरी सहायता (Employment, Training & Job Assistance)
  // ==========================================
  {
    id: 'bsdm-kyp-portal',
    categoryId: 'employment-training',
    titleHi: 'कुशल युवा कार्यक्रम (BSDM - KYP Computer & English Training)',
    titleEn: 'Kushal Yuva Program (BSDM Skill Development)',
    departmentHi: 'श्रम संसाधन विभाग, बिहार कौशल विकास मिशन',
    departmentEn: 'Labour Resources Dept, Bihar Skill Development Mission',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: '10वीं/12वीं पास युवाओं को 240 घंटे का कंप्यूटर ज्ञान (IT Literacy), संवाद कौशल (Communication) व सॉफ्ट स्किल्स मुफ्त प्रशिक्षण।',
    descriptionEn: 'Free 240-hour IT literacy, communication and soft-skills training course under 7 Nischay for youth.',
    fee: '₹1,000 रिफंडेबल सुरक्षा राशि (कोर्स पूरा होने पर पूरी राशि वापस)',
    eligibility: [
      'आयु 15 से 28 वर्ष (आरक्षित वर्गों को आयु में नियमानुसार छूट)।',
      'न्यूनतम 10वीं पास विद्यार्थी।'
    ],
    documents: [
      '10वीं का मूल अंक पत्र',
      'आधार कार्ड व निवास प्रमाण पत्र',
      'बैंक पासबुक'
    ],
    primaryUrl: 'https://skillmissionbihar.org/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://skillmissionbihar.org/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    isPopular: true
  },
  {
    id: 'mnssby-swayam-sahayata-sha',
    categoryId: 'employment-training',
    titleHi: 'मुख्यमंत्री निश्चय स्वयं सहायता भत्ता योजना (SHA - ₹1,000/माह)',
    titleEn: 'Mukhyamantri Swayam Sahayata Bhatta Yojana (SHA ₹1,000/Month)',
    departmentHi: 'योजना एवं विकास विभाग, बिहार सरकार',
    departmentEn: 'Planning & Development Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'नौकरी की तलाश कर रहे 20 से 25 वर्ष के 12वीं पास बेरोजगार युवाओं को 2 वर्ष तक ₹1,000 प्रति माह स्वयं सहायता भत्ता।',
    descriptionEn: 'Monthly allowance of ₹1,000 for up to 2 years for unemployed youth seeking jobs under 7 Nischay.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'आयु 20 से 25 वर्ष के बीच।',
      '12वीं उत्तीर्ण बेरोजगार युवक/युवती जो आगे किसी कॉलेज में नियमित पढ़ाई न कर रहे हों।'
    ],
    documents: [
      '12वीं पास मार्कशीट व स्कूल लीविंग सर्टिफिकेट',
      'आधार कार्ड व बैंक पासबुक',
      'निवास प्रमाण पत्र'
    ],
    primaryUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'udyami-bihar-yojana',
    categoryId: 'employment-training',
    titleHi: 'मुख्यमंत्री उद्यमी योजना (SC/ST/EBC/महिला/युवा उद्यमी ₹10 लाख सहायता)',
    titleEn: 'Mukhyamantri Udyami Yojana (₹10 Lakh Business Loan & Grant)',
    departmentHi: 'उद्योग विभाग, बिहार सरकार',
    departmentEn: 'Industries Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'नया उद्योग या विनिर्माण इकाई लगाने हेतु ₹10 लाख (₹5 लाख अनुदान/माफ एवं ₹5 लाख 1% ब्याज/ब्याजमुक्त ऋण)।',
    descriptionEn: 'Support of up to ₹10 Lakhs (50% grant + 50% low interest/interest-free loan) to set up enterprise in Bihar.',
    fee: '₹0 (पोर्टल आवेदन पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'बिहार के स्थायी निवासी।',
      'न्यूनतम योग्यता 10+2 / इंटरमीडिएट या समकक्ष आईटीआई / पॉलिटेक्निक डिप्लोमा।'
    ],
    documents: [
      'स्थायी निवास प्रमाण पत्र, जाति प्रमाण पत्र',
      '10वीं व 12वीं का अंक पत्र',
      'पैन कार्ड, आधार कार्ड एवं चालू बैंक खाता (Current Account)'
    ],
    primaryUrl: 'https://udyami.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://udyami.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'bpsc-official-portal',
    categoryId: 'employment-training',
    titleHi: 'बिहार लोक सेवा आयोग (BPSC Official Recruitment Portal)',
    titleEn: 'Bihar Public Service Commission (BPSC Exam Portal)',
    departmentHi: 'बिहार लोक सेवा आयोग',
    departmentEn: 'Bihar Public Service Commission',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'संयुक्त सिविल सेवा, शिक्षक भर्ती (TRE), सहायक अभियंता एवं प्रशासनिक पदों की आधिकारिक भर्ती विज्ञप्ति व परीक्षा फॉर्म।',
    descriptionEn: 'Official recruitment portal for civil services, teacher recruitments, administrative exams and results.',
    fee: 'विज्ञप्ति अनुसार निर्धारित परीक्षा शुल्क (As per Exam Notification)',
    eligibility: [
      'संबंधित भर्ती अधिसूचना अनुसार निर्धारित न्यूनतम शैक्षणिक योग्यता व आयु।'
    ],
    documents: [
      'शैक्षणिक प्रमाण पत्र, आरक्षण प्रमाण पत्र, फोटो व हस्ताक्षर'
    ],
    primaryUrl: 'https://www.bpsc.bih.nic.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://onlinebpsc.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'bpsc-recruitment-examination-guide'
  },

  // ==========================================
  // 10. स्वास्थ्य, आयुष्मान एवं दिव्यांग सेवाएँ (Healthcare, Ayushman & Disability Services)
  // ==========================================
  {
    id: 'ayushman-bharat-pmjay',
    categoryId: 'healthcare-disability',
    titleHi: 'आयुष्मान भारत कार्ड (PM-JAY एवं मुख्यमंत्री जन आरोग्य योजना)',
    titleEn: 'Ayushman Bharat Golden Card (PM-JAY ₹5 Lakh Free Treatment)',
    departmentHi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA) / स्वास्थ्य विभाग बिहार',
    departmentEn: 'National Health Authority (NHA) / Health Dept Bihar',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय योजना (बिहार में लागू)',
    scopeLabelEn: 'Central Scheme (Active in Bihar)',
    descriptionHi: 'प्रति वर्ष प्रति परिवार ₹5 लाख तक का सूचीबद्ध सरकारी एवं निजी अस्पतालों में कैशलेस व निःशुल्क इलाज।',
    descriptionEn: 'Cashless health cover up to ₹5 Lakhs per family per year across empaneled hospitals in India.',
    fee: '₹0 (ई-केवाईसी व कार्ड डाउनलोड पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'SECC 2011 सूची में नाम वाले परिवार अथवा बिहार के राष्ट्रीय खाद्य सुरक्षा (राशन कार्ड) धारक परिवार।'
    ],
    documents: [
      'आधार कार्ड (Aadhaar Card)',
      'राशन कार्ड संख्या (Ration Card Number)'
    ],
    primaryUrl: 'https://beneficiary.nha.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://beneficiary.nha.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'ayushman-bharat-card-guide',
    isPopular: true
  },
  {
    id: 'swavlamban-udid-disability',
    categoryId: 'healthcare-disability',
    titleHi: 'विशिष्ट दिव्यांगता पहचान पत्र (UDID स्वावलंबन कार्ड)',
    titleEn: 'Unique Disability ID (UDID) Swavlamban Card Portal',
    departmentHi: 'दिव्यांगजन सशक्तिकरण विभाग, भारत सरकार',
    departmentEn: 'Dept of Empowerment of Persons with Disabilities, GoI',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय सेवा (पूरे भारत में मान्य)',
    scopeLabelEn: 'Central Service (Pan-India)',
    descriptionHi: 'दिव्यांगजनों के लिए राष्ट्रव्यापी एकल स्मार्ट कार्ड जिससे रेल, बस छूट व सभी सरकारी योजनाओं का लाभ मिलता है।',
    descriptionEn: 'Unified nationwide smart identity card for persons with disability for pensions and travel concessions.',
    fee: '₹0 (निःशुल्क / Free)',
    eligibility: [
      'किसी भी प्रकार की बेंचमार्क दिव्यांगता वाले भारतीय नागरिक।'
    ],
    documents: [
      'मेडिकल बोर्ड दिव्यांगता प्रमाण पत्र या अस्पताल जांच रिपोर्ट',
      'आधार कार्ड व दिव्यांगता दर्शाने वाली फोटो'
    ],
    primaryUrl: 'https://www.swavlambancard.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://www.swavlambancard.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },

  // ==========================================
  // 11. पहचान पत्र एवं जरूरी केंद्रीय ऑनलाइन सेवाएँ (Identity Cards & Essential Central Services)
  // * Clearly marked as Central Services
  // ==========================================
  {
    id: 'uidai-aadhaar-portal',
    categoryId: 'identity-central',
    titleHi: 'आधार कार्ड सेवाएँ (myAadhaar UIDAI - डाउनलोड, सुधार व पीवीसी कार्ड)',
    titleEn: 'Aadhaar Card Services (myAadhaar UIDAI Official Portal)',
    departmentHi: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI), भारत सरकार',
    departmentEn: 'Unique Identification Authority of India (UIDAI), GoI',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय सेवा (पूरे भारत में मान्य)',
    scopeLabelEn: 'Central Service (Pan-India)',
    descriptionHi: 'ई-आधार डाउनलोड, पता ऑनलाइन सुधार, आधार-पैन लिंकिंग स्टेटस एवं ₹50 में आधिकारिक प्लास्टिक पीवीसी कार्ड ऑर्डर।',
    descriptionEn: 'Official central UIDAI portal to download e-Aadhaar, update address online, verify mobile and order PVC card.',
    fee: 'डाउनलोड ₹0, पीवीसी कार्ड ₹50 (सरकारी डाक खर्च सहित)',
    eligibility: [
      'भारत का प्रत्येक नागरिक जिसके पास 12 अंकों का आधार नंबर अथवा 28 अंकों की नामांकन आईडी (EID) हो।'
    ],
    documents: [
      'आधार नंबर व आधार से जुड़ा रजिस्टर्ड मोबाइल नंबर (OTP सत्यापन हेतु)',
      'पता सुधार हेतु वैध पता प्रमाण (यदि लागू हो)'
    ],
    primaryUrl: 'https://myaadhaar.uidai.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-validity',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'aadhaar-card-address-update',
    isPopular: true
  },
  {
    id: 'pan-card-services',
    categoryId: 'identity-central',
    titleHi: 'पैन कार्ड सेवाएँ (PAN Card Online - नया पैन व ई-पैन सुधार)',
    titleEn: 'PAN Card Online Services (Protean NSDL / UTIITSL Portal)',
    departmentHi: 'आयकर विभाग, वित्त मंत्रालय, भारत सरकार',
    departmentEn: 'Income Tax Dept, Ministry of Finance, Govt of India',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय सेवा (पूरे भारत में मान्य)',
    scopeLabelEn: 'Central Service (Pan-India)',
    descriptionHi: 'नया 10 अंकों का पैन कार्ड (Form 49A) ऑनलाइन आवेदन, खोए पैन का रीप्रिंट एवं नाम/जन्म तिथि सुधार सेवा।',
    descriptionEn: 'Apply for fresh Permanent Account Number (PAN), corrections in existing PAN or reprint of physical card.',
    fee: '₹107 (शारीरिक पैन कार्ड हेतु भारत में प्रेषण शुल्क सहित)',
    eligibility: [
      'भारतीय नागरिक, संस्थाएँ एवं करदाता।'
    ],
    documents: [
      'पहचान प्रमाण (आधार कार्ड)',
      'पता प्रमाण (आधार / बिजली बिल / बैंक खाता)',
      'जन्म तिथि प्रमाण'
    ],
    primaryUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://tin.tin.nsdl.com/pantan/StatusTrack.html',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'instant-epan-application-guide',
    isPopular: true
  },
  {
    id: 'eci-voter-services',
    categoryId: 'identity-central',
    titleHi: 'मतदाता पहचान पत्र सेवाएँ (ECI Voters Services Portal - Form 6, 8)',
    titleEn: 'Voter ID Services (Election Commission of India - Form 6, 8)',
    departmentHi: 'भारत निर्वाचन आयोग (Election Commission of India)',
    departmentEn: 'Election Commission of India (ECI)',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय सेवा (पूरे भारत में मान्य)',
    scopeLabelEn: 'Central Service (Pan-India)',
    descriptionHi: '18 वर्ष की आयु पूरी होने पर नया वोटर आईडी (Form 6), वोटर लिस्ट में नाम खोजना, स्थानांतरण/सुधार (Form 8) व ई-एपिक डाउनलोड।',
    descriptionEn: 'Register as new elector (Form 6), download digital e-EPIC and update voter details online.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'भारत का नागरिक जिसकी आयु अर्हक तिथि को 18 वर्ष या अधिक हो।'
    ],
    documents: [
      'पासपोर्ट फोटो',
      'आयु प्रमाण पत्र (10वीं मार्कशीट / आधार / जन्म प्रमाण)',
      'निवास प्रमाण पत्र'
    ],
    primaryUrl: 'https://voters.eci.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://voters.eci.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    isPopular: true
  },
  {
    id: 'parivahan-driving-licence',
    categoryId: 'identity-central',
    titleHi: 'सारथी परिवहन: ड्राइविंग लाइसेंस व लर्नर लाइसेंस (Sarathi Parivahan)',
    titleEn: 'Sarathi Parivahan: Driving Licence & Learner Licence Online',
    departmentHi: 'सड़क परिवहन एवं राजमार्ग मंत्रालय, भारत सरकार / परिवहन विभाग बिहार',
    departmentEn: 'MoRTH, Govt of India / Transport Dept Bihar',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय मंच (बिहार आरटीओ में मान्य)',
    scopeLabelEn: 'Central Portal (Enforced in Bihar RTOs)',
    descriptionHi: 'घर बैठे ऑनलाइन लर्नर लाइसेंस (LL) टेस्ट, पक्का ड्राइविंग लाइसेंस (DL) आवेदन, नवीनीकरण व वाहन आरसी विवरण।',
    descriptionEn: 'Online Aadhaar-authenticated Learner Licence exam, permanent DL slot booking and vehicle RC records.',
    fee: 'लर्नर लाइसेंस ₹150+टेस्ट ₹50, स्थायी ड्राइविंग लाइसेंस ₹700 (सरकारी शुल्क)',
    eligibility: [
      'गियर वाली मोटरसाइकिल/कार हेतु न्यूनतम आयु 18 वर्ष (बिना गियर दोपहिया हेतु 16 वर्ष)।'
    ],
    documents: [
      'आधार कार्ड (मोबाइल लिंक्ड)',
      'उम्र व पता प्रमाण',
      'मेडिकल फिटनेस फॉर्म 1A (40 वर्ष से अधिक या व्यावसायिक श्रेणी हेतु)'
    ],
    primaryUrl: 'https://parivahan.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://sarathi.parivahan.gov.in/sarathiservice/applViewStatus.do',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    articleSlug: 'parivahan-driving-licence-guide'
  },
  {
    id: 'crs-birth-death-registration',
    categoryId: 'identity-central',
    titleHi: 'जन्म एवं मृत्यु पंजीकरण (CRS Civil Registration System)',
    titleEn: 'Civil Registration System (CRS Birth & Death Certificate)',
    departmentHi: 'भारत के महारजिस्ट्रार (ORGI), गृह मंत्रालय, भारत सरकार',
    departmentEn: 'Office of Registrar General of India, Ministry of Home Affairs',
    scope: 'Central',
    scopeLabelHi: 'केंद्रीय प्रणाली (बिहार रजिस्ट्रार द्वारा जारी)',
    scopeLabelEn: 'Central System (Administered by Local Registrars)',
    descriptionHi: 'जन्म और मृत्यु की आधिकारिक सूचना दर्ज करने एवं कानूनी प्रमाण पत्र प्राप्त करने का राष्ट्रीय पोर्टल।',
    descriptionEn: 'Official national framework for reporting births and deaths within statutory timeframes.',
    fee: '21 दिनों के भीतर निःशुल्क (21-30 दिन में ₹2, 1 वर्ष के भीतर ₹5 विलंब शुल्क)',
    eligibility: [
      'घटना (जन्म/मृत्यु) होने के 21 दिनों के भीतर संबंधित स्थानीय रजिस्ट्रार के समक्ष रिपोर्टिंग।'
    ],
    documents: [
      'अस्पताल का जन्म/मृत्यु डिस्चार्ज प्रमाण पत्र',
      'माता-पिता का आधार कार्ड',
      'मुखिया का पहचान पत्र'
    ],
    primaryUrl: 'https://crsorgi.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://crsorgi.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },

  // ==========================================
  // 12. अन्य बिहार सरकारी सेवाएँ एवं विभाग (Other Bihar Government Services & Departments)
  // ==========================================
  {
    id: 'suvidha-electricity-bihar',
    categoryId: 'other-bihar-services',
    titleHi: 'सुविधा ऐप एवं बिजली बिल भुगतान (SBPDCL / NBPDCL Bihar)',
    titleEn: 'Suvidha Electricity Consumer Portal (SBPDCL / NBPDCL)',
    departmentHi: 'ऊर्जा विभाग, बिहार सरकार (बिहार स्टेट पावर होल्डिंग)',
    departmentEn: 'Energy Dept, Govt of Bihar (BSPHCL)',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'नया बिजली कनेक्शन आवेदन, मीटर रीडिंग, मासिक बिजली बिल देखना व ऑनलाइन भुगतान तथा लोड वृद्धि सेवाएँ।',
    descriptionEn: 'Instant electricity bill payment, new smart meter recharge and connection requests across Bihar.',
    fee: 'उपभोग बिल अनुसार (As per consumed units & bill)',
    eligibility: [
      'बिहार के सभी घरेलू, व्यावसायिक एवं कृषि बिजली उपभोक्ता।'
    ],
    documents: [
      'उपभोक्ता संख्या (CA Number / Consumer ID)'
    ],
    primaryUrl: 'https://www.sbpdcl.co.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://www.sbpdcl.co.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)'
  },
  {
    id: 'lok-shikayat-bihar',
    categoryId: 'other-bihar-services',
    titleHi: 'बिहार लोक शिकायत निवारण अधिकार अधिनियम (Jan Shikayat Portal)',
    titleEn: 'Bihar Public Grievance Redressal Act Portal',
    departmentHi: 'सामान्य प्रशासन विभाग (प्रशासनिक सुधार मिशन), बिहार',
    departmentEn: 'General Administration Dept (BPSM), Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'सरकारी विभागों, योजनाओं या अधिकारियों की लापरवाही के विरुद्ध 60 कार्यदिवसों में कानूनी सुनवाई व समाधान पाने का संवैधानिक अधिकार।',
    descriptionEn: 'Statutory right of citizens to register grievances and receive formal legal hearings and decisions within 60 days.',
    fee: '₹0 (पूर्णतः निःशुल्क / Free)',
    eligibility: [
      'बिहार का कोई भी नागरिक जो किसी सरकारी सेवा या नीति के क्रियान्वयन से असंतुष्ट या पीड़ित हो।'
    ],
    documents: [
      'शिकायत का लिखित विवरण',
      'पूर्व में दिए गए आवेदन या रसीद की छायाप्रति (यदि उपलब्ध हो)',
      'आधार कार्ड व मोबाइल नंबर'
    ],
    primaryUrl: 'https://lokshikayat.bihar.gov.in/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://lokshikayat.bihar.gov.in/',
    statusLabel: 'आवेदन की स्थिति देखें (Check Application Status)',
    isPopular: true
  },
  {
    id: 'bsdma-disaster-management',
    categoryId: 'other-bihar-services',
    titleHi: 'बिहार राज्य आपदा प्रबंधन प्राधिकरण (BSDMA)',
    titleEn: 'Bihar State Disaster Management Authority (BSDMA)',
    departmentHi: 'आपदा प्रबंधन विभाग, बिहार सरकार',
    departmentEn: 'Disaster Management Dept, Govt of Bihar',
    scope: 'Bihar',
    scopeLabelHi: 'बिहार सरकार',
    scopeLabelEn: 'Bihar Govt',
    descriptionHi: 'बाढ़, वज्रपात (ठनका), भूकंप व शीतलहर से बचाव की पूर्व चेतावनी, आपातकालीन हेल्पलाइन व आपदा राहत दिशा-निर्देश।',
    descriptionEn: 'Official weather alerts, lightning hazard forecasts, flood warnings and disaster relief guidance in Bihar.',
    fee: 'निःशुल्क लोक सेवा (Free Public Safety Service)',
    eligibility: [
      'बिहार के समस्त नागरिक।'
    ],
    documents: [
      'किसी दस्तावेज की आवश्यकता नहीं'
    ],
    primaryUrl: 'https://bsdma.org/',
    primaryLabel: 'आधिकारिक पोर्टल खोलें (Open Official Portal)',
    statusUrl: 'https://bsdma.org/',
    statusLabel: 'आधिकारिक जानकारी देखें (View Official Information)'
  }
];
