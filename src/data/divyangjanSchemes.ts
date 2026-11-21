export interface DivyangjanSchemeItem {
  id: string;
  nameHi: string;
  nameEn: string;
  shortDescHi: string;
  shortDescEn: string;
  subcategoryId: 
    | 'pension-assistance'
    | 'udid-certificate'
    | 'scholarships'
    | 'assistive-devices'
    | 'employment-skills'
    | 'other-benefits';
  subcategoryNameHi: string;
  subcategoryNameEn: string;
  governmentLevel: 'Central' | 'Bihar' | 'Joint';
  governmentLevelHi: string;
  governmentLevelEn: string;
  departmentHi: string;
  departmentEn: string;
  targetBeneficiariesHi: string;
  targetBeneficiariesEn: string;
  minDisabilityPercentage: string; // e.g. "40% या अधिक"
  financialAssistance: string;
  eligibility: string[];
  documents: string[];
  applicationMode: 'Online' | 'Offline' | 'Both';
  applicationModeLabel: string;
  officialApplyUrl?: string;
  officialApplyLabel: string;
  statusUrl?: string;
  statusLabel?: string;
  sourceUrl: string;
  verifiedDate: string;
  verificationStatus: 'verified' | 'pending';
  articleSlug?: string;
  isPopular?: boolean;
}

export interface DivyangjanSubcategory {
  id: 
    | 'all'
    | 'pension-assistance'
    | 'udid-certificate'
    | 'scholarships'
    | 'assistive-devices'
    | 'employment-skills'
    | 'other-benefits';
  nameHi: string;
  nameEn: string;
  icon: string;
  count: number;
  descHi: string;
  descEn: string;
}

export const DIVYANGJAN_SUBCATEGORIES: DivyangjanSubcategory[] = [
  {
    id: 'all',
    nameHi: 'सभी दिव्यांगजन योजनाएं देखें',
    nameEn: 'View All Divyangjan Schemes',
    icon: 'Layers',
    count: 12,
    descHi: 'केंद्र और बिहार सरकार की सभी 12 कल्याणकारी योजनाएं',
    descEn: 'All Central and Bihar Welfare Schemes for Persons with Disabilities'
  },
  {
    id: 'pension-assistance',
    nameHi: 'दिव्यांग पेंशन एवं आर्थिक सहायता',
    nameEn: 'Disability Pension & Financial Assistance',
    icon: 'HeartHandshake',
    count: 3,
    descHi: 'मासिक पेंशन, सामाजिक सुरक्षा एवं विवाह प्रोत्साहन अनुदान',
    descEn: 'Monthly pensions, social security & marriage incentive grants'
  },
  {
    id: 'udid-certificate',
    nameHi: 'दिव्यांग प्रमाणपत्र एवं UDID कार्ड',
    nameEn: 'Disability Certificate & UDID Card',
    icon: 'ShieldCheck',
    count: 2,
    descHi: 'स्वावलंबन कार्ड, ऑनलाइन आवेदन, नवीनीकरण एवं सत्यापन',
    descEn: 'Swavlamban card, online application, renewal & digital verification'
  },
  {
    id: 'scholarships',
    nameHi: 'दिव्यांग छात्रवृत्ति',
    nameEn: 'Scholarships for Students with Disabilities',
    icon: 'GraduationCap',
    count: 2,
    descHi: 'प्री-मैट्रिक, पोस्ट-मैट्रिक, उच्च शिक्षा व टॉप क्लास स्कॉलरशिप',
    descEn: 'Pre/post-matric, higher education & top-class scholarships'
  },
  {
    id: 'assistive-devices',
    nameHi: 'सहायक उपकरण एवं पुनर्वास',
    nameEn: 'Assistive Devices & Rehabilitation',
    icon: 'Activity',
    count: 2,
    descHi: 'ADIP योजना, एलिम्को (ALIMCO) उपकरण, कृत्रिम अंग व ट्राइसाइकिल',
    descEn: 'ADIP scheme, ALIMCO assistive aids, prosthetics & tricycles'
  },
  {
    id: 'employment-skills',
    nameHi: 'दिव्यांग रोजगार एवं कौशल विकास',
    nameEn: 'Employment & Skill Development',
    icon: 'Briefcase',
    count: 2,
    descHi: 'रियायती ऋण, कौशल प्रशिक्षण (SIPDA) एवं स्वरोजगार योजनाएं',
    descEn: 'Concessional loans (NDFDC), SIPDA skill training & self-employment'
  },
  {
    id: 'other-benefits',
    nameHi: 'अन्य दिव्यांगजन सुविधाएं',
    nameEn: 'Other Benefits for Persons with Disabilities',
    icon: 'Car',
    count: 2,
    descHi: 'रेलवे व बस रियायती पास, सुगम्य भारत एवं कानूनी अधिकार',
    descEn: 'Railway & bus concession passes, Accessible India & legal rights'
  }
];

export const DIVYANGJAN_SCHEMES_DATA: DivyangjanSchemeItem[] = [
  // 1. UDID Card (National)
  {
    id: 'div-udid-card',
    nameHi: 'विशिष्ट दिव्यांगता पहचान पत्र (UDID स्वावलंबन कार्ड)',
    nameEn: 'Unique Disability ID (UDID Swavlamban Card)',
    shortDescHi: 'पूरे भारत में एक समान मान्य डिजिटल दिव्यांग पहचान पत्र, जिससे सभी 21 प्रकार की दिव्यांगताओं के लिए सरकारी लाभ व प्रमाण पत्र एक ही कार्ड में मिल जाता है।',
    shortDescEn: 'A single nationwide valid digital disability identity card eliminating multiple paper certificates across all 21 notified disabilities.',
    subcategoryId: 'udid-certificate',
    subcategoryNameHi: 'दिव्यांग प्रमाणपत्र एवं UDID कार्ड',
    subcategoryNameEn: 'Disability Certificate & UDID Card',
    governmentLevel: 'Central',
    governmentLevelHi: 'केंद्र सरकार (अखिल भारतीय)',
    governmentLevelEn: 'Central Government (All India)',
    departmentHi: 'दिव्यांगजन सशक्तिकरण विभाग (DEPwD), सामाजिक न्याय एवं अधिकारिता मंत्रालय',
    departmentEn: 'Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice',
    targetBeneficiariesHi: 'RPwD अधिनियम 2016 के तहत 21 प्रकार की दिव्यांगता से प्रभावित कोई भी भारतीय नागरिक',
    targetBeneficiariesEn: 'Any Indian citizen living with any of the 21 benchmark disabilities under RPwD Act 2016',
    minDisabilityPercentage: '40% या अधिक (सत्यापन चिकित्सा बोर्ड द्वारा)',
    financialAssistance: 'निःशुल्क डिजिटल कार्ड एवं प्रमाण पत्र (जीवन पर्यन्त/मान्य अवधि हेतु)',
    eligibility: [
      'भारत का कोई भी नागरिक जो दिव्यांगता से प्रभावित है',
      'सरकारी अस्पताल/मेडिकल बोर्ड द्वारा विधिवत मेडिकल परीक्षण एवं प्रमाण पत्र',
      'RPwD Act 2016 में अधिसूचित 21 श्रेणियों में से किसी में आने वाले व्यक्ति'
    ],
    documents: [
      'पासपोर्ट साइज रंगीन फोटो (सफेद पृष्ठभूमि)',
      'हस्ताक्षर अथवा अंगूठे का निशान',
      'पहचान प्रमाण (आधार कार्ड / वोटर आईडी / पैन कार्ड)',
      'निवास प्रमाण पत्र (राशन कार्ड / बिजली बिल / मूल निवास)',
      'पुराना विकलांगता प्रमाण पत्र (यदि पहले से ऑफलाइन बना हुआ हो)'
    ],
    applicationMode: 'Online',
    applicationModeLabel: 'ऑनलाइन (स्वावलंबन पोर्टल)',
    officialApplyUrl: 'https://www.swavlambancard.gov.in/',
    officialApplyLabel: 'UDID कार्ड हेतु ऑनलाइन आवेदन करें',
    statusUrl: 'https://www.swavlambancard.gov.in/pwd/application-track',
    statusLabel: 'आवेदन व कार्ड की स्थिति ट्रैक करें',
    sourceUrl: 'https://www.swavlambancard.gov.in/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    articleSlug: 'udid-card-disability-certificate-guide',
    isPopular: true
  },

  // 2. Bihar State Disability Pension Scheme
  {
    id: 'div-bihar-pension',
    nameHi: 'बिहार राज्य दिव्यांग पेंशन योजना (मुख्यमंत्री निःशक्तता पेंशन)',
    nameEn: 'Bihar State Disability Pension Scheme',
    shortDescHi: 'बिहार के 40% या अधिक दिव्यांगता वाले नागरिकों को आर्थिक सुरक्षा हेतु प्रतिमाह सामाजिक सुरक्षा पेंशन सीधे बैंक खाते में प्रदान की जाती है।',
    shortDescEn: 'Monthly social security disability pension directly credited into bank accounts of eligible disabled residents of Bihar.',
    subcategoryId: 'pension-assistance',
    subcategoryNameHi: 'दिव्यांग पेंशन एवं आर्थिक सहायता',
    subcategoryNameEn: 'Disability Pension & Financial Assistance',
    governmentLevel: 'Bihar',
    governmentLevelHi: 'बिहार सरकार (राज्य योजना)',
    governmentLevelEn: 'Bihar State Government',
    departmentHi: 'समाज कल्याण विभाग, बिहार सरकार (ई-लाभार्थी / RTPS)',
    departmentEn: 'Department of Social Welfare, Government of Bihar (e-Labharthi / RTPS)',
    targetBeneficiariesHi: 'बिहार राज्य के स्थायी निवासी दिव्यांगजन (न्यूनतम 40% दिव्यांगता)',
    targetBeneficiariesEn: 'Permanent residents of Bihar with at least 40% certified disability',
    minDisabilityPercentage: '40% या अधिक',
    financialAssistance: '₹400 प्रतिमाह (DBT द्वारा सीधे बैंक खाते में)',
    eligibility: [
      'आवेदक बिहार राज्य का स्थायी निवासी होना चाहिए',
      'न्यूनतम 40% दिव्यांगता का वैध सिविल सर्जन/मेडिकल बोर्ड प्रमाण पत्र या UDID कार्ड',
      'परिवार की वार्षिक आय सीमा के भीतर हो (BPL अथवा निर्धारित सीमा)',
      'केंद्र या राज्य सरकार की किसी अन्य समान पेंशन योजना का दोहरा लाभ न ले रहा हो'
    ],
    documents: [
      'आधार कार्ड (Aadhaar Card) - बैंक खाते से DBT लिंक होना अनिवार्य',
      'दिव्यांगता प्रमाण पत्र / UDID कार्ड',
      'बिहार निवास प्रमाण पत्र (RTPS द्वारा निर्गत)',
      'आय प्रमाण पत्र / राशन कार्ड (BPL सूची)',
      'बैंक पासबुक की प्रथम पृष्ठ की प्रति (IFSC सहित)',
      'पासपोर्ट साइज फोटो'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन (RTPS) एवं ऑफलाइन (प्रखंड/RTPS काउंटर)',
    officialApplyUrl: 'https://serviceonline.bihar.gov.in/',
    officialApplyLabel: 'RTPS बिहार पोर्टल पर ऑनलाइन आवेदन करें',
    statusUrl: 'https://elabharthi.bih.nic.in/',
    statusLabel: 'ई-लाभार्थी भुगतान स्थिति देखें',
    sourceUrl: 'https://state.bihar.gov.in/socialwelfare/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    articleSlug: 'bihar-rtps-caste-income-residence',
    isPopular: true
  },

  // 3. Indira Gandhi National Disability Pension Scheme (IGNDPS)
  {
    id: 'div-central-igndps',
    nameHi: 'इंदिरा गांधी राष्ट्रीय दिव्यांगता पेंशन योजना (IGNDPS)',
    nameEn: 'Indira Gandhi National Disability Pension Scheme (IGNDPS)',
    shortDescHi: 'राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP) के तहत 80% या अधिक गंभीर/बहु-दिव्यांगता वाले बीपीएल परिवारों के व्यक्तियों को मासिक पेंशन।',
    shortDescEn: 'Centrally sponsored monthly pension under NSAP for individuals aged 18-79 with severe or multiple disabilities (80% and above) from BPL households.',
    subcategoryId: 'pension-assistance',
    subcategoryNameHi: 'दिव्यांग पेंशन एवं आर्थिक सहायता',
    subcategoryNameEn: 'Disability Pension & Financial Assistance',
    governmentLevel: 'Joint',
    governmentLevelHi: 'केंद्र एवं राज्य संयुक्त (Centrally Sponsored - NSAP)',
    governmentLevelEn: 'Centrally Sponsored Scheme (NSAP)',
    departmentHi: 'ग्रामीण विकास मंत्रालय, भारत सरकार एवं राज्य समाज कल्याण विभाग',
    departmentEn: 'Ministry of Rural Development, Govt of India & State Social Welfare Dept',
    targetBeneficiariesHi: '18 से 79 वर्ष आयु वर्ग के गंभीर/बहु-दिव्यांग बीपीएल नागरिक',
    targetBeneficiariesEn: 'Severely disabled individuals (80%+) aged 18-79 from BPL families',
    minDisabilityPercentage: '80% अथवा बहु-दिव्यांगता (Severe/Multiple Disability)',
    financialAssistance: '₹300 - ₹500 केंद्र अंश + राज्य टॉप-अप (DBT द्वारा)',
    eligibility: [
      'आयु 18 से 79 वर्ष के बीच हो',
      'दिव्यांगता का प्रतिशत 80% या उससे अधिक (गंभीर दिव्यांगता) अथवा बहु-दिव्यांगता हो',
      'आवेदक का परिवार बीपीएल (गरीबी रेखा से नीचे) सूची में सूचीबद्ध होना चाहिए'
    ],
    documents: [
      'आधार कार्ड',
      'सक्षम मेडिकल बोर्ड द्वारा निर्गत 80%+ दिव्यांगता प्रमाण पत्र या UDID कार्ड',
      'बीपीएल प्रमाण पत्र / राशन कार्ड',
      'आयु प्रमाण पत्र',
      'आधार से लिंक बैंक खाता पासबुक'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन (NSAP पोर्टल) एवं ऑफलाइन (स्थानीय ब्लॉक कार्यालय)',
    officialApplyUrl: 'https://nsap.nic.in/',
    officialApplyLabel: 'NSAP राष्ट्रीय पोर्टल पर विवरण देखें',
    statusUrl: 'https://nsap.nic.in/trackApplication.do',
    statusLabel: 'NSAP पेंशन आवेदन स्थिति जांचें',
    sourceUrl: 'https://nsap.nic.in/',
    verifiedDate: '2026-10-24',
    verificationStatus: 'verified',
    isPopular: false
  },

  // 4. Bihar Mukhyamantri Nishaktata Vivah Protsahan Yojana
  {
    id: 'div-bihar-vivah-protsahan',
    nameHi: 'बिहार मुख्यमंत्री निःशक्तता विवाह प्रोत्साहन अनुदान योजना',
    nameEn: 'Bihar Mukhyamantri Nishaktata Vivah Protsahan Yojana',
    shortDescHi: 'दिव्यांगजनों के विवाह को प्रोत्साहित करने एवं सामाजिक सुरक्षा देने हेतु बिहार सरकार द्वारा ₹1,00,000 की एकमुश्त वित्तीय सहायता दी जाती है।',
    shortDescEn: 'A one-time incentive grant of ₹1,00,000 provided by Government of Bihar to promote marriages involving persons with disabilities.',
    subcategoryId: 'pension-assistance',
    subcategoryNameHi: 'दिव्यांग पेंशन एवं आर्थिक सहायता',
    subcategoryNameEn: 'Disability Pension & Financial Assistance',
    governmentLevel: 'Bihar',
    governmentLevelHi: 'बिहार सरकार (राज्य योजना)',
    governmentLevelEn: 'Bihar State Government',
    departmentHi: 'समाज कल्याण विभाग, बिहार सरकार',
    departmentEn: 'Department of Social Welfare, Government of Bihar',
    targetBeneficiariesHi: 'विवाहित दिव्यांग जोड़ा (पति या पत्नी में से कोई एक अथवा दोनों दिव्यांग हों)',
    targetBeneficiariesEn: 'Newly married couples where either spouse (or both) has a certified disability',
    minDisabilityPercentage: '40% या अधिक',
    financialAssistance: '₹1,00,000 (एक लाख रुपये) फिक्स्ड डिपॉजिट / वित्तीय प्रोत्साहन',
    eligibility: [
      'वर एवं वधू में से कम से कम एक व्यक्ति बिहार राज्य का स्थायी निवासी हो',
      'पति अथवा पत्नी में से कम से कम एक व्यक्ति 40% या अधिक दिव्यांग हो',
      'विवाह की कानूनी आयु पूर्ण हो (वर न्यूनतम 21 वर्ष, वधू न्यूनतम 18 वर्ष)',
      'सक्षम प्राधिकारी द्वारा विवाह निबंधन (Marriage Registration Certificate) अनिवार्य',
      'विवाह की तिथि से निर्धारित समयावधि के भीतर आवेदन जमा करना आवश्यक'
    ],
    documents: [
      'विवाह निबंधन प्रमाण पत्र (Marriage Certificate)',
      'वर एवं वधू दोनों का आधार कार्ड',
      'दिव्यांगता प्रमाण पत्र / UDID कार्ड (40% या अधिक)',
      'बिहार राज्य का मूल निवास प्रमाण पत्र',
      'आयु प्रमाण पत्र (मैट्रिक प्रमाण पत्र या जन्म प्रमाण पत्र)',
      'संयुक्त बैंक खाता पासबुक (Joint Bank Account)',
      'विवाह की संयुक्त तस्वीर (Joint Photograph)'
    ],
    applicationMode: 'Offline',
    applicationModeLabel: 'ऑफलाइन (जिला सामाजिक सुरक्षा कोषांग / सहायक निदेशक कार्यालय)',
    officialApplyUrl: 'https://state.bihar.gov.in/socialwelfare/',
    officialApplyLabel: 'समाज कल्याण विभाग बिहार पर निर्देश देखें',
    statusUrl: 'https://state.bihar.gov.in/socialwelfare/',
    statusLabel: 'जिला सामाजिक सुरक्षा कोषांग से संपर्क करें',
    sourceUrl: 'https://state.bihar.gov.in/socialwelfare/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    isPopular: true
  },

  // 5. ADIP Scheme (Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances)
  {
    id: 'div-adip-aids',
    nameHi: 'एडिप योजना - निःशुल्क सहायक उपकरण एवं कृत्रिम अंग (ADIP Scheme)',
    nameEn: 'ADIP Scheme - Assistance for Purchase/Fitting of Aids and Appliances',
    shortDescHi: 'गरीब व जरूरतमंद दिव्यांगजनों को व्हीलचेयर, ट्राइसाइकिल, श्रवण यंत्र, कृत्रिम अंग, कैलिपर्स एवं आधुनिक उपकरण निःशुल्क या रियायती दर पर उपलब्ध कराना।',
    shortDescEn: 'Provides durable, modern and scientifically manufactured aids and assistive appliances (wheelchairs, hearing aids, tricycles, prosthetics) free of cost via ALIMCO.',
    subcategoryId: 'assistive-devices',
    subcategoryNameHi: 'सहायक उपकरण एवं पुनर्वास',
    subcategoryNameEn: 'Assistive Devices & Rehabilitation',
    governmentLevel: 'Central',
    governmentLevelHi: 'केंद्र सरकार (अखिल भारतीय)',
    governmentLevelEn: 'Central Government (All India)',
    departmentHi: 'दिव्यांगजन सशक्तिकरण विभाग (DEPwD) / एलिम्को (ALIMCO)',
    departmentEn: 'DEPwD / Artificial Limbs Manufacturing Corporation of India (ALIMCO)',
    targetBeneficiariesHi: '40% या अधिक दिव्यांगता वाले व्यक्ति जिनकी मासिक आय ₹22,500 से कम हो',
    targetBeneficiariesEn: 'Persons with 40%+ disability with monthly family income up to ₹22,500',
    minDisabilityPercentage: '40% या अधिक',
    financialAssistance: '100% निःशुल्क उपकरण (आय ₹15,000/माह तक) अथवा 50% अनुदान (आय ₹15,001-₹22,500 तक)',
    eligibility: [
      'भारतीय नागरिक हो और किसी भी आयु का हो',
      'न्यूनतम 40% दिव्यांगता प्रमाण पत्र या UDID कार्ड धारक हो',
      'मासिक पारिवारिक आय ₹22,500 से अधिक न हो',
      'पिछले 3 वर्षों में उसी उपकरण के लिए सरकारी सहायता प्राप्त न की हो (बच्चों के लिए 1 वर्ष)'
    ],
    documents: [
      'दिव्यांगता प्रमाण पत्र / UDID कार्ड',
      'आय प्रमाण पत्र (सक्षम राजस्व अधिकारी / BPL राशन कार्ड द्वारा)',
      'निवास प्रमाण पत्र एवं आधार कार्ड',
      'पासपोर्ट आकार का फोटो (दिव्यांगता प्रदर्शित करता हुआ)'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन (ADIP पोर्टल) एवं स्थानीय शिविर (ALIMCO Camps)',
    officialApplyUrl: 'https://adip.depwd.gov.in/',
    officialApplyLabel: 'ADIP पोर्टल पर ऑनलाइन पंजीकरण करें',
    statusUrl: 'https://adip.depwd.gov.in/',
    statusLabel: 'उपकरण वितरण शिविर व स्थिति देखें',
    sourceUrl: 'https://adip.depwd.gov.in/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    isPopular: true
  },

  // 6. Bihar Sambal Yojana (Assistive Devices)
  {
    id: 'div-bihar-sambal',
    nameHi: 'बिहार मुख्यमंत्री दिव्यांगजन सशक्तिकरण संबल योजना',
    nameEn: 'Bihar Mukhyamantri Divyangjan Sashaktikaran Sambal Yojana',
    shortDescHi: 'बिहार के दिव्यांग छात्र-छात्राओं एवं कामकाजी दिव्यांगों को बैटरी चालित ट्राइसाइकिल (Motorized Tricycle), व्हीलचेयर एवं आधुनिक सहायक उपकरण वितरण।',
    shortDescEn: 'Distribution of battery-operated motorized tricycles and assistive aids to disabled students and working professionals across Bihar.',
    subcategoryId: 'assistive-devices',
    subcategoryNameHi: 'सहायक उपकरण एवं पुनर्वास',
    subcategoryNameEn: 'Assistive Devices & Rehabilitation',
    governmentLevel: 'Bihar',
    governmentLevelHi: 'बिहार सरकार (राज्य योजना)',
    governmentLevelEn: 'Bihar State Government',
    departmentHi: 'समाज कल्याण विभाग, बिहार सरकार (संबल योजना)',
    departmentEn: 'Social Welfare Department, Government of Bihar (Sambal Scheme)',
    targetBeneficiariesHi: 'बिहार के 18 वर्ष से अधिक आयु के दिव्यांग छात्र एवं स्वावलंबी कामकाजी नागरिक (चलने-फिरने में 60%+ असमर्थता)',
    targetBeneficiariesEn: 'Locomotor disabled students and workers aged 18+ in Bihar with 60%+ disability',
    minDisabilityPercentage: '60% या अधिक (चलन दिव्यांगता - Locomotor Disability)',
    financialAssistance: 'निःशुल्क बैटरी/मोटर चालित ट्राइसाइकिल (₹42,000 मूल्य की)',
    eligibility: [
      'आवेदक बिहार राज्य का स्थायी निवासी होना चाहिए',
      'आयु न्यूनतम 18 वर्ष पूर्ण होनी चाहिए',
      'चलन दिव्यांगता (लोकोमोटर) न्यूनतम 60% या अधिक होनी चाहिए',
      'आवेदक उच्च शिक्षण संस्थान में अध्ययनरत हो अथवा नियमित रोजगार/स्वरोजगार में संलग्न हो',
      'आवेदक के पास पहले से कोई मोटरयुक्त वाहन उपलब्ध न हो'
    ],
    documents: [
      'UDID कार्ड / सिविल सर्जन द्वारा निर्गत दिव्यांगता प्रमाण पत्र (60%+)',
      'बिहार मूल निवास प्रमाण पत्र',
      'कॉलेज/विश्वविद्यालय का पहचान पत्र अथवा रोजगार/दुकान/व्यवसाय का प्रमाण',
      'आधार कार्ड',
      'आय प्रमाण पत्र (वार्षिक आय ₹2 लाख से कम)',
      'पासपोर्ट साइज फोटो'
    ],
    applicationMode: 'Online',
    applicationModeLabel: 'ऑनलाइन (संबल पोर्टल / समाज कल्याण बिहार)',
    officialApplyUrl: 'https://state.bihar.gov.in/socialwelfare/',
    officialApplyLabel: 'संबल योजना दिशानिर्देश व पोर्टल',
    statusUrl: 'https://state.bihar.gov.in/socialwelfare/',
    statusLabel: 'जिला सामाजिक सुरक्षा कार्यालय से जांचें',
    sourceUrl: 'https://state.bihar.gov.in/socialwelfare/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    isPopular: true
  },

  // 7. National Pre-Matric & Post-Matric Scholarships for Students with Disabilities
  {
    id: 'div-national-scholarship',
    nameHi: 'दिव्यांग विद्यार्थियों हेतु राष्ट्रीय छात्रवृत्ति (Pre & Post-Matric NSP)',
    nameEn: 'National Scholarships for Students with Disabilities (NSP)',
    shortDescHi: 'कक्षा 9वीं से लेकर उच्चतर माध्यमिक, स्नातक एवं स्नातकोत्तर स्तर तक अध्ययनरत दिव्यांग छात्र-छात्राओं को मासिक रखरखाव भत्ता एवं पुस्तक अनुदान।',
    shortDescEn: 'Pre-Matric (class 9-10) and Post-Matric (class 11 to PG) scholarships providing monthly maintenance allowances, book grants, and disability allowances via National Scholarship Portal.',
    subcategoryId: 'scholarships',
    subcategoryNameHi: 'दिव्यांग छात्रवृत्ति',
    subcategoryNameEn: 'Scholarships for Students with Disabilities',
    governmentLevel: 'Central',
    governmentLevelHi: 'केंद्र सरकार (अखिल भारतीय - DEPwD)',
    governmentLevelEn: 'Central Government (All India - DEPwD)',
    departmentHi: 'दिव्यांगजन सशक्तिकरण विभाग (DEPwD) / राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)',
    departmentEn: 'DEPwD / National Scholarship Portal (NSP)',
    targetBeneficiariesHi: 'मान्यता प्राप्त विद्यालयों/कॉलेजों में नियमित अध्ययनरत 40%+ दिव्यांग छात्र',
    targetBeneficiariesEn: 'Regular students with 40%+ disability studying in recognized schools/colleges',
    minDisabilityPercentage: '40% या अधिक',
    financialAssistance: '₹4,000 से ₹15,000+ प्रतिवर्ष (पाठ्यक्रम स्तरानुसार रखरखाव + पुस्तक अनुदान)',
    eligibility: [
      'विद्यार्थी के पास वैध 40% या अधिक का दिव्यांगता प्रमाण पत्र या UDID कार्ड हो',
      'मान्यता प्राप्त सरकारी या निजी स्कूल/कॉलेज में नियमित रूप से अध्ययनरत हो',
      'अभिभावक/माता-पिता की कुल वार्षिक आय ₹2.5 लाख से अधिक न हो',
      'कक्षा 9 और 10 के लिए प्री-मैट्रिक तथा कक्षा 11वीं और उससे आगे पोस्ट-मैट्रिक लागू'
    ],
    documents: [
      'UDID कार्ड / दिव्यांगता प्रमाण पत्र',
      'आधार कार्ड (Aadhaar Seeded Bank Account)',
      'अंतिम उत्तीर्ण कक्षा की अंकतालिका (Marksheet)',
      'वर्तमान शैक्षणिक सत्र की फीस रसीद / बोनाफाइड प्रमाण पत्र',
      'माता-पिता का आय प्रमाण पत्र',
      'बैंक पासबुक'
    ],
    applicationMode: 'Online',
    applicationModeLabel: 'ऑनलाइन (National Scholarship Portal - NSP)',
    officialApplyUrl: 'https://scholarships.gov.in/',
    officialApplyLabel: 'NSP पोर्टल पर ऑनलाइन आवेदन करें',
    statusUrl: 'https://scholarships.gov.in/',
    statusLabel: 'NSP आवेदन स्थिति व OTR जांचें',
    sourceUrl: 'https://scholarships.gov.in/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    articleSlug: 'education-scholarships',
    isPopular: true
  },

  // 8. Top Class Education Scholarship for Students with Disabilities
  {
    id: 'div-top-class-scholarship',
    nameHi: 'दिव्यांग विद्यार्थियों के लिए उच्च शिक्षा टॉप क्लास स्कॉलरशिप',
    nameEn: 'Top Class Education Scheme for Students with Disabilities',
    shortDescHi: 'आईआईटी, आईआईएम, एम्स, एनआईटी एवं शीर्ष राष्ट्रीय संस्थानों में पढ़ने वाले दिव्यांग छात्रों की पूरी ट्यूशन फीस, लैपटॉप भत्ता एवं जीवन निर्वाह अनुदान।',
    shortDescEn: 'Full tuition fee reimbursement, computer/laptop grant, and monthly allowance for disabled students securing admission in premier notified institutions (IITs, IIMs, NITs, AIIMS, NLUs).',
    subcategoryId: 'scholarships',
    subcategoryNameHi: 'दिव्यांग छात्रवृत्ति',
    subcategoryNameEn: 'Scholarships for Students with Disabilities',
    governmentLevel: 'Central',
    governmentLevelHi: 'केंद्र सरकार (अखिल भारतीय)',
    governmentLevelEn: 'Central Government (All India)',
    departmentHi: 'दिव्यांगजन सशक्तिकरण विभाग (DEPwD), भारत सरकार',
    departmentEn: 'Department of Empowerment of Persons with Disabilities, Govt of India',
    targetBeneficiariesHi: 'अधिसूचित 240+ शीर्ष संस्थानों में स्नातक/स्नातकोत्तर पाठ्यक्रम में प्रवेश पाने वाले दिव्यांग छात्र',
    targetBeneficiariesEn: 'Disabled students admitted to notified premier institutes (IIT/IIM/AIIMS/etc.)',
    minDisabilityPercentage: '40% या अधिक',
    financialAssistance: 'पूर्ण ट्यूशन फीस + ₹3,000/माह निर्वाह भत्ता + ₹30,000 एकमुश्त कंप्यूटर सहायता',
    eligibility: [
      'मान्यता प्राप्त शीर्ष 240+ राष्ट्रीय संस्थानों में पूर्णकालिक पाठ्यक्रम में प्रवेश',
      'न्यूनतम 40% दिव्यांगता प्रमाण पत्र या UDID कार्ड',
      'पारिवारिक वार्षिक आय ₹8.00 लाख से अधिक न हो',
      'प्रतिवर्ष कुल 300 नए स्लॉट मेरिट के आधार पर आवंटित'
    ],
    documents: [
      'UDID कार्ड / दिव्यांगता प्रमाण पत्र',
      'संस्थान प्रवेश पत्र एवं फीस विवरण (Fee Structure)',
      'सक्षम प्राधिकारी द्वारा आय प्रमाण पत्र',
      'कक्षा 12वीं / स्नातक की अंकतालिका',
      'आधार कार्ड एवं बैंक पासबुक'
    ],
    applicationMode: 'Online',
    applicationModeLabel: 'ऑनलाइन (National Scholarship Portal)',
    officialApplyUrl: 'https://scholarships.gov.in/',
    officialApplyLabel: 'NSP टॉप क्लास पोर्टल पर आवेदन करें',
    statusUrl: 'https://scholarships.gov.in/',
    statusLabel: 'NSP आवेदन स्थिति जांचें',
    sourceUrl: 'https://disabilityaffairs.gov.in/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    isPopular: false
  },

  // 9. NDFDC / NHFDC Concessional Loans for Self Employment
  {
    id: 'div-nhfdc-loan',
    nameHi: 'राष्ट्रीय दिव्यांगजन वित्त एवं विकास निगम (NDFDC / NHFDC) स्वरोजगार ऋण',
    nameEn: 'NDFDC Concessional Loans & Self-Employment Assistance',
    shortDescHi: 'दिव्यांगजनों को दुकान, डेयरी, लघु उद्योग, सर्विस सेंटर या व्यवसाय शुरू करने हेतु बेहद कम ब्याज दर (4% से 8%) पर ₹50 लाख तक का रियायती ऋण।',
    shortDescEn: 'Highly concessional term loans up to ₹50 Lakh at low interest rates (4%-8% per annum) to start independent businesses, vocational enterprises, or agricultural projects.',
    subcategoryId: 'employment-skills',
    subcategoryNameHi: 'दिव्यांग रोजगार एवं कौशल विकास',
    subcategoryNameEn: 'Employment & Skill Development',
    governmentLevel: 'Central',
    governmentLevelHi: 'केंद्र सरकार (राज्य चैनलिजिंग एजेंसियों के माध्यम से)',
    governmentLevelEn: 'Central Government via State Channelizing Agencies',
    departmentHi: 'राष्ट्रीय दिव्यांगजन वित्त एवं विकास निगम (NDFDC), सामाजिक न्याय मंत्रालय',
    departmentEn: 'National Divyangjan Finance and Development Corporation (NDFDC)',
    targetBeneficiariesHi: '18 से 55 वर्ष आयु के दिव्यांग उद्यमी एवं स्वरोजगार के इच्छुक व्यक्ति',
    targetBeneficiariesEn: 'Disabled entrepreneurs & self-employed individuals aged 18-55',
    minDisabilityPercentage: '40% या अधिक',
    financialAssistance: '₹50,000 से ₹50 लाख तक ऋण (मात्र 4% - 8% वार्षिक रियायती ब्याज दर)',
    eligibility: [
      'भारतीय नागरिक हो और न्यूनतम 40% दिव्यांगता प्रमाण पत्र हो',
      'आयु 18 से 55 वर्ष के बीच हो',
      'किसी भी बैंक या वित्तीय संस्थान का डिफाल्टर न हो',
      'व्यवसाय/दुकान/प्रोजेक्ट की व्यवहार्यता रिपोर्ट (Project Proposal)'
    ],
    documents: [
      'UDID कार्ड / दिव्यांगता प्रमाण पत्र',
      'आधार कार्ड, पैन कार्ड एवं निवास प्रमाण',
      'प्रस्तावित व्यवसाय/दुकान का प्रोजेक्ट रिपोर्ट (Project Report)',
      'आय प्रमाण पत्र',
      'बैंक स्टेटमेंट (विगत 6 माह) एवं जमानतदार (Guarantor) विवरण'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन (NDFDC पोर्टल) एवं राज्य चैनलिजिंग एजेंसी (SCAs)',
    officialApplyUrl: 'http://www.nhfdc.nic.in/',
    officialApplyLabel: 'NDFDC आधिकारिक वेबसाइट देखें',
    statusUrl: 'http://www.nhfdc.nic.in/',
    statusLabel: 'राज्य नोडल एजेंसी व ऋण स्थिति जांचें',
    sourceUrl: 'http://www.nhfdc.nic.in/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    isPopular: true
  },

  // 10. SIPDA & Divyangjan Skill Training
  {
    id: 'div-sipda-skills',
    nameHi: 'सिपडा योजना एवं दिव्यांग कौशल विकास प्रशिक्षण (SIPDA Scheme)',
    nameEn: 'SIPDA Scheme & Divyangjan Skill Development Training',
    shortDescHi: 'दिव्यांगजनों को कंप्यूटर, डेटा एंट्री, मोबाइल रिपेयर, सिलाई, हैंडीक्राफ्ट एवं डिजिटल कौशल में निःशुल्क प्रमाणन प्रशिक्षण और मानदेय।',
    shortDescEn: 'Free market-aligned vocational skill training with stipend and placement assistance across IT, electronics, retail, and handicrafts under SIPDA.',
    subcategoryId: 'employment-skills',
    subcategoryNameHi: 'दिव्यांग रोजगार एवं कौशल विकास',
    subcategoryNameEn: 'Employment & Skill Development',
    governmentLevel: 'Central',
    governmentLevelHi: 'केंद्र सरकार (DEPwD)',
    governmentLevelEn: 'Central Government (DEPwD)',
    departmentHi: 'दिव्यांगजन सशक्तिकरण विभाग (DEPwD), कौशल विकास परिषद (SCPwD)',
    departmentEn: 'DEPwD & Skill Council for Persons with Disability (SCPwD)',
    targetBeneficiariesHi: '15 से 59 वर्ष आयु के दिव्यांग युवक-युवतियां',
    targetBeneficiariesEn: 'Disabled youth and jobseekers aged 15-59 seeking employment skills',
    minDisabilityPercentage: '40% या अधिक',
    financialAssistance: '100% निःशुल्क प्रशिक्षण + आने-जाने का भत्ता / छात्रवृत्ति + प्लेसमेंट सहायता',
    eligibility: [
      'न्यूनतम 40% दिव्यांगता का प्रमाण पत्र या UDID कार्ड',
      'आयु 15 वर्ष या अधिक हो',
      'न्यूनतम शैक्षणिक योग्यता (ट्रेड के आधार पर 8वीं/10वीं/12वीं पास)'
    ],
    documents: [
      'UDID कार्ड / दिव्यांगता प्रमाण पत्र',
      'आधार कार्ड',
      'शैक्षणिक योग्यता प्रमाण पत्र',
      'पासपोर्ट साइज फोटो एवं बैंक पासबुक'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन (SCPwD / SIPDA) एवं नजदीकी प्रशिक्षण केंद्र',
    officialApplyUrl: 'https://disabilityaffairs.gov.in/',
    officialApplyLabel: 'DEPwD कौशल प्रशिक्षण योजनाएं देखें',
    statusUrl: 'https://disabilityaffairs.gov.in/',
    statusLabel: 'प्रशिक्षण केंद्रों की सूची देखें',
    sourceUrl: 'https://disabilityaffairs.gov.in/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    isPopular: false
  },

  // 11. Indian Railways Concession for Divyangjan
  {
    id: 'div-railway-concession',
    nameHi: 'भारतीय रेलवे दिव्यांगजन रियायत एवं ई-टिकटिंग फोटो आईडी कार्ड',
    nameEn: 'Indian Railways Concession & Divyangjan Photo Identity Card',
    shortDescHi: 'दिव्यांगजनों और उनके साथ एक सहायक (Escort) को ट्रेन टिकटों पर 25% से 75% तक की भारी छूट तथा IRCTC पर ऑनलाइन रियायती टिकट बुकिंग की सुविधा।',
    shortDescEn: 'Concession up to 75% on train fares in sleeper, 3AC, chair car and 2AC classes along with an escort for eligible categories of disabled passengers.',
    subcategoryId: 'other-benefits',
    subcategoryNameHi: 'अन्य दिव्यांगजन सुविधाएं',
    subcategoryNameEn: 'Other Benefits for Persons with Disabilities',
    governmentLevel: 'Central',
    governmentLevelHi: 'केंद्र सरकार (रेल मंत्रालय)',
    governmentLevelEn: 'Central Government (Ministry of Railways)',
    departmentHi: 'भारतीय रेल मंत्रालय / IRCTC / मंडल रेल प्रबंधक (DRM) कार्यालय',
    departmentEn: 'Ministry of Railways / IRCTC / Divisional Railway Manager (DRM) Office',
    targetBeneficiariesHi: 'दृष्टिबाधित, श्रवणबाधित, चलन दिव्यांग एवं मानसिक दिव्यांग यात्री',
    targetBeneficiariesEn: 'Orthopaedically impaired, visually impaired, deaf & dumb, and mentally challenged passengers',
    minDisabilityPercentage: '40% या अधिक (मान्य रेलवे फॉर्मेट प्रमाण पत्र)',
    financialAssistance: 'ट्रेन किराए में 25% से 75% तक की छूट (सहायक सहित)',
    eligibility: [
      'रेलवे के निर्धारित प्रपत्र (Railway Concession Certificate) में सरकारी डॉक्टर द्वारा जारी प्रमाण पत्र',
      'यात्री के साथ एक सहायक (Escort) भी समान छूट का हकदार होता है',
      'IRCTC पर ऑनलाइन बुकिंग हेतु DRM कार्यालय से "Unique Divyang Photo Card" जारी कराया जा सकता है'
    ],
    documents: [
      'रेलवे निर्धारित फॉर्मेट में दिव्यांगता प्रमाण पत्र (हस्ताक्षरित एवं मुहरबंद)',
      'UDID कार्ड एवं आधार कार्ड',
      'आयु प्रमाण पत्र एवं 4 पासपोर्ट साइज फोटो',
      'स्थानीय पता प्रमाण पत्र'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑफलाइन (DRM कार्यालय काउंटर) एवं ऑनलाइन (IRCTC पोर्टल)',
    officialApplyUrl: 'https://www.irctc.co.in/',
    officialApplyLabel: 'IRCTC दिव्यांग ई-टिकटिंग पोर्टल',
    statusUrl: 'https://www.irctc.co.in/',
    statusLabel: 'IRCTC रियायत नियम व सत्यापन',
    sourceUrl: 'https://indianrailways.gov.in/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    isPopular: true
  },

  // 12. Free/Concessional Bus Pass & RPwD Act 2016 Rights
  {
    id: 'div-bus-pass-rights',
    nameHi: 'बिहार राज्य पथ परिवहन निगम दिव्यांगजन निःशुल्क/रियायती बस पास',
    nameEn: 'Bihar State Transport Divyangjan Concessional Bus Pass & Rights',
    shortDescHi: 'बिहार राज्य पथ परिवहन निगम (BSRTC) की बसों में दिव्यांगजनों के लिए निःशुल्क अथवा अत्यधिक रियायती यात्रा पास एवं आरक्षित सीटों की सुविधा।',
    shortDescEn: 'Free and concessional bus travel passes in BSRTC buses along with reserved seating and barrier-free public transport access under RPwD Act 2016.',
    subcategoryId: 'other-benefits',
    subcategoryNameHi: 'अन्य दिव्यांगजन सुविधाएं',
    subcategoryNameEn: 'Other Benefits for Persons with Disabilities',
    governmentLevel: 'Bihar',
    governmentLevelHi: 'बिहार सरकार (परिवहन विभाग)',
    governmentLevelEn: 'Bihar State Government (Transport Dept)',
    departmentHi: 'बिहार राज्य पथ परिवहन निगम (BSRTC) / परिवहन विभाग, बिहार सरकार',
    departmentEn: 'Bihar State Road Transport Corporation (BSRTC) / Transport Department',
    targetBeneficiariesHi: 'बिहार राज्य के 40% या अधिक दिव्यांगता वाले नागरिक',
    targetBeneficiariesEn: 'Disabled citizens of Bihar with certified 40%+ disability',
    minDisabilityPercentage: '40% या अधिक',
    financialAssistance: 'निःशुल्क / भारी रियायती यात्रा पास (वार्षिक नवीकरणीय)',
    eligibility: [
      'आवेदक बिहार का स्थायी निवासी हो',
      'सक्षम चिकित्सा प्राधिकारी द्वारा 40% या अधिक का दिव्यांगता प्रमाण पत्र या UDID कार्ड',
      'बस कंडक्टर/जांचकर्ता को यात्रा के समय पास और पहचान पत्र दिखाना अनिवार्य'
    ],
    documents: [
      'UDID कार्ड / दिव्यांगता प्रमाण पत्र की प्रति',
      'आधार कार्ड एवं बिहार निवास प्रमाण पत्र',
      '2 पासपोर्ट साइज फोटो',
      'BSRTC बस पास आवेदन प्रपत्र'
    ],
    applicationMode: 'Offline',
    applicationModeLabel: 'ऑफलाइन (BSRTC मुख्य बस डिपो / जिला परिवहन कार्यालय)',
    officialApplyUrl: 'https://state.bihar.gov.in/transport/',
    officialApplyLabel: 'बिहार परिवहन विभाग पोर्टल',
    statusUrl: 'https://state.bihar.gov.in/transport/',
    statusLabel: 'निकटतम BSRTC बस डिपो पर जांचें',
    sourceUrl: 'https://state.bihar.gov.in/transport/',
    verifiedDate: '2026-10-25',
    verificationStatus: 'verified',
    isPopular: false
  }
];
