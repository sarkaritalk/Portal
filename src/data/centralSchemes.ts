export interface CentralSchemeItem {
  id: string;
  nameHi: string;
  nameEn: string;
  shortDescHi: string;
  shortDescEn: string;
  categoryId: string;
  categoryNameHi: string;
  categoryNameEn: string;
  ministryHi: string;
  ministryEn: string;
  schemeType: 'Central Sector' | 'Centrally Sponsored (Joint)';
  schemeTypeHi: string;
  schemeTypeEn: string;
  targetBeneficiariesHi: string;
  targetBeneficiariesEn: string;
  eligibility: string[];
  benefitsHi: string;
  benefitsEn: string;
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

export const CENTRAL_CATEGORIES = [
  {
    id: 'farmers-agriculture',
    nameHi: 'किसान एवं कृषि योजनाएं',
    nameEn: 'Farmers & Agriculture Schemes',
    icon: 'Tractor',
    count: 6,
    desc: 'PM-KISAN, फसल बीमा, कृषि सब्सिडी, KCC एवं मृदा स्वास्थ्य'
  },
  {
    id: 'housing-home',
    nameHi: 'आवास एवं घर',
    nameEn: 'Housing & Home Schemes',
    icon: 'Home',
    count: 4,
    desc: 'PMAY-ग्रामीण, PMAY-शहरी एवं आवास निर्माण सहायता'
  },
  {
    id: 'education-scholarships',
    nameHi: 'शिक्षा एवं छात्रवृत्ति',
    nameEn: 'Education & Scholarships',
    icon: 'GraduationCap',
    count: 5,
    desc: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP), उच्च शिक्षा व तकनीकी सहायता'
  },
  {
    id: 'employment-skills',
    nameHi: 'रोजगार एवं कौशल विकास',
    nameEn: 'Employment & Skill Development',
    icon: 'Briefcase',
    count: 4,
    desc: 'नेशनल करियर सर्विस (NCS), PMKVY एवं अप्रेंटिसशिप'
  },
  {
    id: 'women-child',
    nameHi: 'महिला एवं बाल कल्याण',
    nameEn: 'Women & Child Welfare',
    icon: 'HeartHandshake',
    count: 4,
    desc: 'मातृ वंदना योजना (PMMVY), सुकन्या समृद्धि एवं पोषण अभियान'
  },
  {
    id: 'pension-social-security',
    nameHi: 'पेंशन एवं सामाजिक सुरक्षा',
    nameEn: 'Pension & Social Security',
    icon: 'ShieldCheck',
    count: 4,
    desc: 'NSAP राष्ट्रीय वृद्धावस्था पेंशन, अटल पेंशन योजना (APY)'
  },
  {
    id: 'health-medical',
    nameHi: 'स्वास्थ्य एवं चिकित्सा',
    nameEn: 'Health & Medical Services',
    icon: 'Activity',
    count: 4,
    desc: 'आयुष्मान भारत (PM-JAY), आभा (ABHA) आईडी व जन औषधि'
  },
  {
    id: 'labour-worker',
    nameHi: 'श्रमिक एवं मजदूर योजनाएं',
    nameEn: 'Labour & Worker Schemes',
    icon: 'HardHat',
    count: 3,
    desc: 'ई-श्रम कार्ड (e-Shram), PM-SYM मानधन पेंशन योजना'
  },
  {
    id: 'business-self-employment',
    nameHi: 'व्यवसाय एवं स्वरोजगार',
    nameEn: 'Business & Self-Employment',
    icon: 'Building2',
    count: 5,
    desc: 'मुद्रा योजना (MUDRA), PMEGP, PM विश्वकर्मा, PM स्वनिधि'
  },
  {
    id: 'banking-insurance',
    nameHi: 'बैंकिंग एवं बीमा',
    nameEn: 'Banking & Insurance',
    icon: 'Landmark',
    count: 4,
    desc: 'जन धन योजना (PMJDY), जीवन ज्योति (PMJJBY), सुरक्षा बीमा (PMSBY)'
  },
  {
    id: 'ration-food-security',
    nameHi: 'राशन एवं खाद्य सुरक्षा',
    nameEn: 'Ration & Food Security',
    icon: 'Wheat',
    count: 3,
    desc: 'राष्ट्रीय खाद्य सुरक्षा (NFSA), वन नेशन वन राशन कार्ड'
  },
  {
    id: 'identity-documents',
    nameHi: 'पहचान पत्र एवं दस्तावेज',
    nameEn: 'Identity Cards & Documents',
    icon: 'BadgeCheck',
    count: 6,
    desc: 'आधार, पैन कार्ड, वोटर आईडी, पासपोर्ट, डिजिलॉकर'
  },
  {
    id: 'clean-energy-power',
    nameHi: 'बिजली एवं स्वच्छ ऊर्जा',
    nameEn: 'Electricity & Clean Energy',
    icon: 'SunMedium',
    count: 3,
    desc: 'पीएम सूर्य घर मुफ्त बिजली योजना, उज्ज्वला योजना'
  },
  {
    id: 'rural-development',
    nameHi: 'ग्रामीण विकास',
    nameEn: 'Rural Development',
    icon: 'Trees',
    count: 3,
    desc: 'मनरेगा (MGNREGA), राष्ट्रीय ग्रामीण आजीविका मिशन (NRLM)'
  },
  {
    id: 'transport-travel',
    nameHi: 'परिवहन एवं यात्रा',
    nameEn: 'Transport & Travel',
    icon: 'Car',
    count: 3,
    desc: 'सारथी ड्राइविंग लाइसेंस, वाहन पोर्टल, फास्टैग'
  },
  {
    id: 'all-central',
    nameHi: 'सभी केंद्रीय योजनाएं',
    nameEn: 'All Central Government Schemes',
    icon: 'Globe',
    count: 55,
    desc: 'भारत सरकार के विभिन्न मंत्रालयों की संपूर्ण कल्याणकारी योजनाएं'
  },
  {
    id: 'other-central-services',
    nameHi: 'अन्य सरकारी सेवाएं',
    nameEn: 'Other Government Services',
    icon: 'Layers',
    count: 10,
    desc: 'आयकर ई-फाइलिंग, ईपीएफओ (EPFO), डाकघर बचत व कंज्यूमर हेल्पलाइन'
  }
];

export const CENTRAL_SCHEMES_DATA: CentralSchemeItem[] = [
  // ----------------------------------------------------
  // 1. किसान एवं कृषि योजनाएं (Farmers & Agriculture)
  // ----------------------------------------------------
  {
    id: 'pm-kisan',
    nameHi: 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)',
    nameEn: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    shortDescHi: 'पात्र किसान परिवारों को प्रति वर्ष ₹6,000 की वित्तीय सहायता direct DBT के माध्यम से 3 किस्तों में दी जाती है।',
    shortDescEn: 'Direct income support of ₹6,000 per year in 3 equal installments of ₹2,000 to eligible landholding farmer families.',
    categoryId: 'farmers-agriculture',
    categoryNameHi: 'किसान एवं कृषि योजनाएं',
    categoryNameEn: 'Farmers & Agriculture Schemes',
    ministryHi: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Agriculture & Farmers Welfare, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना (100% केंद्र पोषित)',
    schemeTypeEn: 'Central Sector Scheme (100% Central Funded)',
    targetBeneficiariesHi: 'छोटे, सीमांत एवं समस्त कृषि योग्य भूमिधारी किसान परिवार',
    targetBeneficiariesEn: 'Small, marginal and all cultivable landholding farmer families',
    eligibility: [
      'आवेदक के नाम पर कृषि योग्य भूमि का मालिकाना हक (Land Record) होना चाहिए।',
      'संवैधानिक पदधारक, मौजूदा/पूर्व मंत्री, सांसद, विधायक अपात्र हैं।',
      'केंद्र/राज्य सरकार के कार्यरत या सेवानिवृत्त अधिकारी (मल्टी टास्किंग/ग्रुप D छोड़कर) अपात्र हैं।',
      '₹10,000 या अधिक मासिक पेंशन प्राप्तकर्ता एवं आयकरदाता अपात्र हैं।'
    ],
    benefitsHi: '₹6,000 प्रति वर्ष (प्रत्येक 4 माह पर ₹2,000 की 3 समान किस्तें सीधे बैंक खाते में)।',
    benefitsEn: '₹6,000 annually credited directly into verified bank accounts in three installments.',
    documents: [
      'आधार कार्ड (Aadhaar Card with linked mobile for e-KYC)',
      'जमीन का स्वामित्व दस्तावेज (खतियान / जमाबंदी नकल / LPC)',
      'आधार से जुड़ा बैंक खाता (NPCI / DBT Enabled Bank Account)'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन एवं सीएससी केंद्र (Online & CSC)',
    officialApplyUrl: 'https://pmkisan.gov.in/RegistrationFormUpdated.aspx',
    officialApplyLabel: 'ऑनलाइन आवेदन करें / Apply Online',
    statusUrl: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx',
    statusLabel: 'आवेदन / किस्त स्थिति देखें / Check Status',
    sourceUrl: 'https://pmkisan.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    articleSlug: 'pm-kisan-samman-nidhi-guide',
    isPopular: true
  },
  {
    id: 'pm-fasal-bima',
    nameHi: 'प्रधानमंत्री फसल बीमा योजना (PMFBY)',
    nameEn: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    shortDescHi: 'प्राकृतिक आपदाओं, कीटों व रोगों से फसल नुकसान पर किसानों को व्यापक बीमा सुरक्षा व नाममात्र प्रीमियम पर दावा भुगतान।',
    shortDescEn: 'Comprehensive crop insurance coverage against non-preventable natural risks from pre-sowing to post-harvest.',
    categoryId: 'farmers-agriculture',
    categoryNameHi: 'किसान एवं कृषि योजनाएं',
    categoryNameEn: 'Farmers & Agriculture Schemes',
    ministryHi: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Agriculture & Farmers Welfare, GoI',
    schemeType: 'Centrally Sponsored (Joint)',
    schemeTypeHi: 'केंद्र एवं राज्य संयुक्त योजना (Centrally Sponsored)',
    schemeTypeEn: 'Centrally Sponsored Scheme (Joint Implementation)',
    targetBeneficiariesHi: 'अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले सभी किसान (बटाईदार सहित)',
    targetBeneficiariesEn: 'All farmers including sharecroppers growing notified crops in notified areas',
    eligibility: [
      'अधिसूचित क्षेत्र में अधिसूचित खरीफ या रबी फसल उगाने वाले किसान।',
      'ऋणी (Loanee) एवं गैर-ऋणी (Non-Loanee) दोनों किसान पात्र।'
    ],
    benefitsHi: 'खरीफ फसलों पर 2%, रबी पर 1.5% एवं वाणिज्यिक/बागवानी पर 5% नाममात्र प्रीमियम; शेष प्रीमियम सरकार वहन करती है।',
    benefitsEn: 'Subsidized premium (1.5% to 2% for food crops, 5% for horticultural) with full sum assured compensation.',
    documents: [
      'आधार कार्ड',
      'जमीन का स्वामित्व पत्र / बटाईदार अनुबंध पत्र',
      'फसल बुआई प्रमाण पत्र (पटवारी/कृषि अधिकारी द्वारा)',
      'बैंक पासबुक'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन पोर्टल व बैंक शाखा (Online & Banks)',
    officialApplyUrl: 'https://pmfby.gov.in/',
    officialApplyLabel: 'आधिकारिक पोर्टल खोलें / Open Portal',
    statusUrl: 'https://pmfby.gov.in/claimStatus',
    statusLabel: 'बीमा दावा स्थिति देखें / Check Claim Status',
    sourceUrl: 'https://pmfby.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },
  {
    id: 'kisan-credit-card',
    nameHi: 'किसान क्रेडिट कार्ड (KCC - रियायती कृषि ऋण)',
    nameEn: 'Kisan Credit Card (KCC Loan Scheme)',
    shortDescHi: 'किसानों को खेती, पशुपालन व मत्स्य पालन हेतु 4% रियायती ब्याज दर पर ₹3 लाख तक आसान संस्थागत साख।',
    shortDescEn: 'Adequate and timely credit support from banking system up to ₹3 Lakh at an effective interest rate of 4%.',
    categoryId: 'farmers-agriculture',
    categoryNameHi: 'किसान एवं कृषि योजनाएं',
    categoryNameEn: 'Farmers & Agriculture Schemes',
    ministryHi: 'वित्त मंत्रालय एवं कृषि मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Finance & Agriculture, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: 'व्यक्तिगत किसान, संयुक्त देयता समूह (JLG), बटाईदार एवं पशुपालक',
    targetBeneficiariesEn: 'Individual farmers, joint liability groups, tenant farmers & dairy/fishery farmers',
    eligibility: [
      'आयु 18 से 75 वर्ष (60 वर्ष से अधिक होने पर सह-आवेदक अनिवार्य)।',
      'कृषि भूमि या पशुपालन/मत्स्य पालन का प्रमाण।'
    ],
    benefitsHi: 'समय पर पुनर्भुगतान करने पर 3% ब्याज छूट (Interest Subvention), प्रभावी ब्याज मात्र 4% प्रति वर्ष। ₹1.60 लाख तक बिना गारंटी ऋण।',
    benefitsEn: 'Up to ₹3 Lakh at 4% interest with subvention; collateral-free loan up to ₹1.60 Lakh.',
    documents: [
      'केसीसी आवेदन पत्र (KCC Form)',
      'पहचान एवं पता प्रमाण (आधार / वोटर कार्ड)',
      'जमीन के दस्तावेज (खतियान, अद्यतन लगान रसीद)'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'बैंक शाखा एवं सीएससी (Banks & CSC)',
    officialApplyUrl: 'https://pmkisan.gov.in/KCC.aspx',
    officialApplyLabel: 'केसीसी फॉर्म डाउनलोड करें / Download Form',
    sourceUrl: 'https://myscheme.gov.in/schemes/kcc',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 2. आवास एवं घर (Housing & Home Schemes)
  // ----------------------------------------------------
  {
    id: 'pmay-gramin',
    nameHi: 'प्रधानमंत्री आवास योजना - ग्रामीण (PMAY-G)',
    nameEn: 'Pradhan Mantri Awaas Yojana - Gramin (PMAY-G)',
    shortDescHi: 'ग्रामीण क्षेत्रों के बेघर एवं कच्चे मकानों में रहने वाले परिवारों को पक्का मकान निर्माण हेतु ₹1.20 लाख से ₹1.30 लाख की सीधी सहायता।',
    shortDescEn: 'Financial assistance of ₹1.20 Lakh (plain areas) and ₹1.30 Lakh (hilly/difficult areas) to rural homeless households.',
    categoryId: 'housing-home',
    categoryNameHi: 'आवास एवं घर',
    categoryNameEn: 'Housing & Home Schemes',
    ministryHi: 'ग्रामीण विकास मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Rural Development, GoI',
    schemeType: 'Centrally Sponsored (Joint)',
    schemeTypeHi: 'केंद्र एवं राज्य संयुक्त योजना (60:40 अनुपात)',
    schemeTypeEn: 'Centrally Sponsored (60:40 Central:State Ratio)',
    targetBeneficiariesHi: 'SECC 2011 एवं आवास+ सूची में शामिल ग्रामीण बेघर व कच्चे मकान वाले परिवार',
    targetBeneficiariesEn: 'Rural homeless and households living in kutcha/dilapidated houses as per Awaas+ list',
    eligibility: [
      'परिवार के पास देश में कहीं भी पक्का मकान नहीं होना चाहिए।',
      'परिवार में कोई भी सदस्य आयकरदाता या सरकारी कर्मचारी न हो।',
      'परिवार का नाम ग्राम सभा द्वारा अनुमोदित आवास+ सूची में होना अनिवार्य।'
    ],
    benefitsHi: 'मैदानी क्षेत्रों में ₹1,20,000 एवं पहाड़ी/दुर्गम क्षेत्रों में ₹1,30,000। साथ में मनरेगा के तहत 90-95 दिनों की मजदूरी एवं शौचालय निर्माण हेतु ₹12,000 अतिरिक्त।',
    benefitsEn: '₹1.20 Lakh in plains, ₹1.30 Lakh in hilly areas + 90-95 days MGNREGA wages + ₹12,000 for toilet construction.',
    documents: [
      'आधार कार्ड (सभी वयस्क सदस्यों का)',
      'बैंक पासबुक (DBT सक्रिय बचत खाता)',
      'जॉब कार्ड नंबर (मनरेगा)'
    ],
    applicationMode: 'Offline',
    applicationModeLabel: 'ग्राम पंचायत / प्रखंड कार्यालय (Gram Panchayat / Block)',
    officialApplyUrl: 'https://pmayg.nic.in/',
    officialApplyLabel: 'आधिकारिक पोर्टल खोलें / Open Portal',
    statusUrl: 'https://awaassoft.nic.in/netiay/Benificiary.aspx',
    statusLabel: 'लाभार्थी स्थिति ट्रैक करें / Track Status',
    sourceUrl: 'https://pmayg.nic.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    articleSlug: 'pm-awas-yojana-gramin-urban',
    isPopular: true
  },
  {
    id: 'pmay-urban',
    nameHi: 'प्रधानमंत्री आवास योजना - शहरी 2.0 (PMAY-U)',
    nameEn: 'Pradhan Mantri Awaas Yojana - Urban (PMAY-U 2.0)',
    shortDescHi: 'शहरी क्षेत्रों के EWS, LIG एवं मध्य आय वर्ग परिवारों को पक्के मकान की खरीद, निर्माण अथवा गृह ऋण पर ब्याज सब्सिडी।',
    shortDescEn: 'Provides pucca houses or credit linked interest subsidy for EWS, LIG and MIG families in urban areas.',
    categoryId: 'housing-home',
    categoryNameHi: 'आवास एवं घर',
    categoryNameEn: 'Housing & Home Schemes',
    ministryHi: 'आवासन एवं शहरी कार्य मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Housing and Urban Affairs, GoI',
    schemeType: 'Centrally Sponsored (Joint)',
    schemeTypeHi: 'केंद्र एवं राज्य संयुक्त योजना',
    schemeTypeEn: 'Centrally Sponsored Scheme',
    targetBeneficiariesHi: 'शहरी EWS (वार्षिक आय ₹3 लाख तक) एवं LIG (आय ₹3-6 लाख) परिवार',
    targetBeneficiariesEn: 'Urban EWS (income up to ₹3 Lakh) and LIG (income ₹3-6 Lakh) families',
    eligibility: [
      'आवेदक के नाम या परिवार के किसी सदस्य के नाम पर भारत में कोई पक्का मकान न हो।',
      'अधिसूचित नगर निगम/नगर पालिका क्षेत्र का निवासी।'
    ],
    benefitsHi: 'क्रेडिट लिंक्ड सब्सिडी (CLSS) में गृह ऋण पर ब्याज सब्सिडी तथा बीएलसी घटक में ₹1.5 लाख से ₹2.5 लाख तक अनुदान।',
    benefitsEn: 'Interest subsidy on home loans and direct construction grants up to ₹2.5 Lakh under BLC vertical.',
    documents: [
      'आधार कार्ड व पैन कार्ड',
      'आय प्रमाण पत्र (EWS/LIG प्रमाण)',
      'शहरी जमीन का स्वामित्व प्रमाण (BLC घटक हेतु)'
    ],
    applicationMode: 'Online',
    applicationModeLabel: 'ऑनलाइन पोर्टल (Online Portal)',
    officialApplyUrl: 'https://pmay-urban.gov.in/',
    officialApplyLabel: 'ऑनलाइन आवेदन करें / Apply Online',
    statusUrl: 'https://pmay-urban.gov.in/track-assessment-status',
    statusLabel: 'आवेदन स्थिति जांचें / Track Assessment',
    sourceUrl: 'https://pmay-urban.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 3. शिक्षा एवं छात्रवृत्ति (Education & Scholarships)
  // ----------------------------------------------------
  {
    id: 'nsp-central-schemes',
    nameHi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (National Scholarship Portal - NSP)',
    nameEn: 'National Scholarship Portal (NSP Central Schemes)',
    shortDescHi: 'अल्पसंख्यक, दिव्यांग, एससी, एसटी एवं मेधावी छात्रों के लिए भारत सरकार के विभिन्न मंत्रालयों का एकल एकीकृत छात्रवृत्ति मंच।',
    shortDescEn: 'Single unified platform for applying, verifying and disbursing central scholarships directly via DBT.',
    categoryId: 'education-scholarships',
    categoryNameHi: 'शिक्षा एवं छात्रवृत्ति',
    categoryNameEn: 'Education & Scholarships',
    ministryHi: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Electronics & IT, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: 'कक्षा 1 से 12वीं, स्नातक, स्नातकोत्तर एवं तकनीकी/व्यावसायिक पाठ्यक्रमों के मेधावी छात्र',
    targetBeneficiariesEn: 'Pre-matric, post-matric and higher education students from marginalized & meritorious categories',
    eligibility: [
      'मान्यता प्राप्त सरकारी या निजी शैक्षणिक संस्थान में नियमित अध्ययनरत।',
      'विगत वार्षिक परीक्षा में न्यूनतम 50% प्राप्तांक (योजना अनुसार)।',
      'पारिवारिक वार्षिक आय सीमा योजनानुसार ₹1.5 लाख से ₹2.5 लाख तक।'
    ],
    benefitsHi: 'पाठ्यक्रम अनुसार शिक्षण शुल्क प्रतिपूर्ति एवं ₹1,000 से ₹50,000+ प्रति वर्ष छात्रवृत्ति सीधी बैंक अंतरण से।',
    benefitsEn: 'Course fee reimbursement and maintenance allowance ranging from ₹1,000 to ₹50,000+ per academic year.',
    documents: [
      'अकादमिक अंक पत्र (Previous Class Marksheet)',
      'आय प्रमाण पत्र (सक्षम प्राधिकारी द्वारा निर्गत)',
      'जाति प्रमाण पत्र एवं निवास प्रमाण पत्र',
      'संस्थान का बोनाफाइड सर्टिफिकेट (Bonafide Certificate)',
      'आधार कार्ड एवं छात्र का बैंक खाता (Aadhaar Seeded)'
    ],
    applicationMode: 'Online',
    applicationModeLabel: 'ऑनलाइन आवेदन (NSP OTR Portal)',
    officialApplyUrl: 'https://scholarships.gov.in/',
    officialApplyLabel: 'एनएसपी पर आवेदन करें / Apply on NSP',
    statusUrl: 'https://scholarships.gov.in/',
    statusLabel: 'आवेदन स्थिति जांचें / Track Status',
    sourceUrl: 'https://scholarships.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    articleSlug: 'national-scholarship-portal-guide',
    isPopular: true
  },

  // ----------------------------------------------------
  // 4. रोजगार एवं कौशल विकास (Employment & Skill Development)
  // ----------------------------------------------------
  {
    id: 'ncs-national-career-service',
    nameHi: 'नेशनल करियर सर्विस (NCS - राष्ट्रीय रोजगार सेवा पोर्टल)',
    nameEn: 'National Career Service Portal (NCS)',
    shortDescHi: 'नौकरी खोजने वाले युवाओं को सरकारी व निजी नौकरियों, रोजगार मेलों, करियर काउंसलिंग व इंटर्नशिप से जोड़ने वाला राष्ट्रीय मंच।',
    shortDescEn: 'One-stop platform connecting jobseekers with employers, career counseling, apprenticeships and job fairs.',
    categoryId: 'employment-skills',
    categoryNameHi: 'रोजगार एवं कौशल विकास',
    categoryNameEn: 'Employment & Skill Development',
    ministryHi: 'श्रम एवं रोजगार मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Labour & Employment, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: '10वीं/12वीं/स्नातक पास बेरोजगार युवा, कुशल कामगार एवं दिव्यांग अभ्यर्थी',
    targetBeneficiariesEn: 'Jobseekers, fresh graduates, skilled workers, apprentices across India',
    eligibility: [
      'न्यूनतम आयु 14 वर्ष (बाल श्रम निषेध नियमों अनुसार सामान्यतः 18+ वर्ष नौकरी हेतु)।',
      'भारतीय नागरिक।'
    ],
    benefitsHi: 'निःशुल्क जॉब अलर्ट, अखिल भारतीय स्तर पर सत्यापित नियोक्ताओं से सीधा साक्षात्कार एवं स्किल इंडिया प्रमाणन।',
    benefitsEn: 'Free job search, verified vacancies, career guidance, online mock tests and free NCS Jobseeker ID card.',
    documents: [
      'आधार कार्ड या पैन कार्ड',
      'शैक्षणिक योग्यता प्रमाण पत्र',
      'बायोडाटा / रिज्यूमे (Resume)'
    ],
    applicationMode: 'Online',
    applicationModeLabel: 'ऑनलाइन पंजीकरण (100% Free Registration)',
    officialApplyUrl: 'https://www.ncs.gov.in/Pages/Register.aspx',
    officialApplyLabel: 'निशुल्क पंजीकरण करें / Free Registration',
    statusUrl: 'https://www.ncs.gov.in/',
    statusLabel: 'जॉब सर्च करें / Search Jobs',
    sourceUrl: 'https://www.ncs.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },
  {
    id: 'pmkvy-skill-india',
    nameHi: 'प्रधानमंत्री कौशल विकास योजना (PMKVY 4.0)',
    nameEn: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)',
    shortDescHi: 'युवाओं को उद्योग-उन्मुख निःशुल्क कौशल प्रशिक्षण (AI, कोडिंग, ड्रोन, विनिर्माण) एवं प्रमाणन के साथ रोजगार सहायता।',
    shortDescEn: 'Industry-relevant short-term skill training, RPL certification, and monetary rewards for Indian youth.',
    categoryId: 'employment-skills',
    categoryNameHi: 'रोजगार एवं कौशल विकास',
    categoryNameEn: 'Employment & Skill Development',
    ministryHi: 'कौशल विकास एवं उद्यमिता मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Skill Development & Entrepreneurship, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: 'स्कूल/कॉलेज छोड़ चुके युवा एवं बेरोजगार नागरिक',
    targetBeneficiariesEn: 'School/college dropouts and unemployed youth seeking practical industry skills',
    eligibility: [
      'आयु 15 से 45 वर्ष के बीच।',
      'पहचान हेतु आधार कार्ड एवं बैंक खाता आवश्यक।'
    ],
    benefitsHi: '100% मुफ्त प्रशिक्षण, सरकारी स्किल इंडिया सर्टिफिकेट, यूनिफॉर्म व प्रशिक्षण उपरांत ₹5,000 से ₹8,000 तक स्टाइपेंड/इंसेंटिव।',
    benefitsEn: 'Free training course, Skill India certification, toolkit allowance and placement assistance.',
    documents: [
      'आधार कार्ड',
      'शैक्षणिक प्रमाण पत्र (8वीं/10वीं/12वीं)',
      'पासपोर्ट साइज फोटो'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'कौशल केंद्र एवं ऑनलाइन (Skill Centres & Online)',
    officialApplyUrl: 'https://www.skillindiadigital.gov.in/',
    officialApplyLabel: 'कोर्स खोजें व आवेदन करें / Find Courses',
    sourceUrl: 'https://www.msde.gov.in/en/schemes-initiatives/schemes-initiatives-through-nsdc/pmkvy',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 5. महिला एवं बाल कल्याण (Women & Child Welfare)
  // ----------------------------------------------------
  {
    id: 'pmmvy-central',
    nameHi: 'प्रधानमंत्री मातृ वंदना योजना (PMMVY)',
    nameEn: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    shortDescHi: 'गर्भवती एवं धात्री माताओं को मजदूरी नुकसान की भरपाई व बेहतर पोषण हेतु ₹5,000 (प्रथम संतान) एवं ₹6,000 (द्वितीय कन्या संतान) की सहायता।',
    shortDescEn: 'Direct conditional maternity benefit of ₹5,000 for first child and ₹6,000 for second girl child.',
    categoryId: 'women-child',
    categoryNameHi: 'महिला एवं बाल कल्याण',
    categoryNameEn: 'Women & Child Welfare',
    ministryHi: 'महिला एवं बाल विकास मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Women and Child Development, GoI',
    schemeType: 'Centrally Sponsored (Joint)',
    schemeTypeHi: 'केंद्र एवं राज्य संयुक्त योजना (60:40)',
    schemeTypeEn: 'Centrally Sponsored (60:40 Ratio)',
    targetBeneficiariesHi: 'गर्भवती महिलाएं एवं स्तनपान कराने वाली माताएं (आंगनवाड़ी पंजीकृत)',
    targetBeneficiariesEn: 'Pregnant women and lactating mothers for health & nutrition',
    eligibility: [
      'महिला की आयु 19 वर्ष या अधिक होनी चाहिए।',
      'केंद्र या राज्य सरकार की नियमित कर्मचारी न हों।',
      'ई-श्रम कार्ड धारक, बीपीएल, मनरेगा या अनुसूचित जाति/जनजाति की महिलाएं।'
    ],
    benefitsHi: 'प्रथम शिशु के जन्म पर ₹5,000 (दो किस्तों में) एवं दूसरी संतान बालिका होने पर ₹6,000 एकमुश्त।',
    benefitsEn: '₹5,000 in two installments for 1st child; ₹6,000 in single installment if 2nd child is female.',
    documents: [
      'मातृ एवं शिशु सुरक्षा (MCP) कार्ड',
      'माता एवं पिता का आधार कार्ड',
      'माता के नाम का बैंक खाता (आधार सीडेड)'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन पोर्टल व आंगनवाड़ी केंद्र (Online & Anganwadi)',
    officialApplyUrl: 'https://pmmvy.wcd.gov.in/',
    officialApplyLabel: 'ऑनलाइन आवेदन करें / Apply Online',
    statusUrl: 'https://pmmvy.wcd.gov.in/',
    statusLabel: 'आवेदन स्थिति जांचें / Track Status',
    sourceUrl: 'https://pmmvy.wcd.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },
  {
    id: 'sukanya-samriddhi-yojana',
    nameHi: 'सुकन्या समृद्धि योजना (SSY - डाकघर व बैंक खाता)',
    nameEn: 'Sukanya Samriddhi Yojana (SSY Small Savings)',
    shortDescHi: '10 वर्ष तक की बालिकाओं के नाम पर उच्च ब्याज दर (8.2%) व आयकर धारा 80C के तहत पूर्ण कर छूट वाली सरकारी बचत योजना।',
    shortDescEn: 'Government backed small savings scheme for girl child offering 8.2% annual compounded interest & tax exemption.',
    categoryId: 'women-child',
    categoryNameHi: 'महिला एवं बाल कल्याण',
    categoryNameEn: 'Women & Child Welfare',
    ministryHi: 'वित्त मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Finance, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: 'जन्म से 10 वर्ष तक की भारतीय बालिकाएं (प्रति परिवार अधिकतम 2 बालिकाएं)',
    targetBeneficiariesEn: 'Girl children aged up to 10 years at the time of account opening',
    eligibility: [
      'बालिका की उम्र खाता खोलने के समय 10 वर्ष से कम हो।',
      'न्यूनतम ₹250 प्रति वित्तीय वर्ष एवं अधिकतम ₹1.5 लाख तक जमा।'
    ],
    benefitsHi: 'वर्तमान 8.2% उच्चतम सुरक्षित ब्याज दर। 18 वर्ष आयु पर उच्च शिक्षा हेतु 50% निकासी एवं 21 वर्ष में पूर्ण परिपक्वता (Maturity)।',
    benefitsEn: '8.2% interest compounded annually, triple tax exemption under EEE format, maturity at 21 years.',
    documents: [
      'बालिका का जन्म प्रमाण पत्र (Birth Certificate of Girl Child)',
      'अभिभावक का आधार कार्ड व पैन कार्ड',
      'निवास प्रमाण पत्र'
    ],
    applicationMode: 'Offline',
    applicationModeLabel: 'डाकघर अथवा अधिकृत बैंक शाखा (Post Office / Bank)',
    officialApplyUrl: 'https://www.indiapost.gov.in/',
    officialApplyLabel: 'डाकघर पोर्टल पर विवरण देखें / View Details',
    sourceUrl: 'https://www.nsiindia.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 6. पेंशन एवं सामाजिक सुरक्षा (Pension & Social Security)
  // ----------------------------------------------------
  {
    id: 'atal-pension-yojana',
    nameHi: 'अटल पेंशन योजना (APY - ₹1,000 से ₹5,000 मासिक पेंशन)',
    nameEn: 'Atal Pension Yojana (APY Guaranteed Pension)',
    shortDescHi: '18 से 40 वर्ष के नागरिकों को 60 वर्ष की आयु के बाद जीवन भर ₹1,000 से ₹5,000 प्रति माह गारंटीड सरकारी पेंशन।',
    shortDescEn: 'Guaranteed monthly pension of ₹1,000 to ₹5,000 for unorganised sector workers from age 60 onwards.',
    categoryId: 'pension-social-security',
    categoryNameHi: 'पेंशन एवं सामाजिक सुरक्षा',
    categoryNameEn: 'Pension & Social Security',
    ministryHi: 'वित्त मंत्रालय (PFRDA), भारत सरकार',
    ministryEn: 'Ministry of Finance (PFRDA), GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: '18 से 40 वर्ष के समस्त भारतीय नागरिक (विशेषकर असंगठित क्षेत्र कामगार)',
    targetBeneficiariesEn: 'All Indian citizens aged 18-40 having savings bank account',
    eligibility: [
      'प्रवेश आयु 18 से 40 वर्ष के मध्य होनी चाहिए।',
      'आवेदक आयकरदाता (Income Tax Payer) नहीं होना चाहिए (1 अक्टूबर 2022 से लागू नियम)।'
    ],
    benefitsHi: '60 वर्ष की आयु पर ₹1,000, ₹2,000, ₹3,000, ₹4,000 या ₹5,000 की मासिक आजीवन पेंशन। मृत्यु उपरांत पति/पत्नी को आजीवन पेंशन व नॉमिनी को कॉर्पस फंड।',
    benefitsEn: 'Guaranteed pension from ₹1,000 to ₹5,000/month after 60, spouse pension after death, and return of corpus to nominee.',
    documents: [
      'आधार कार्ड',
      'बचत बैंक खाता विवरण (Auto-Debit सुविधा हेतु)',
      'मोबाइल नंबर'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'नेट बैंकिंग व बैंक शाखा (Net Banking & Banks)',
    officialApplyUrl: 'https://www.npscra.nsdl.co.in/nsdl/scheme-details/APY.php',
    officialApplyLabel: 'एपीआई विवरण देखें / View Details',
    statusUrl: 'https://enps.nsdl.com/eNPS/ApySubScribe.html',
    statusLabel: 'एपीवाई प्रान स्थिति जांचें / Check PRAN Status',
    sourceUrl: 'https://pfrda.org.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },
  {
    id: 'nsap-pension-portal',
    nameHi: 'राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP - वृद्धा, विधवा, दिव्यांग पेंशन)',
    nameEn: 'National Social Assistance Programme (NSAP)',
    shortDescHi: 'बीपीएल परिवारों के बुजुर्गों, विधवा महिलाओं एवं गंभीर दिव्यांगजनों को सम्मानजनक जीवन यापन हेतु केंद्रीय मासिक पेंशन।',
    shortDescEn: 'Centrally sponsored welfare programme providing monthly pensions to BPL elderly, widows and disabled.',
    categoryId: 'pension-social-security',
    categoryNameHi: 'पेंशन एवं सामाजिक सुरक्षा',
    categoryNameEn: 'Pension & Social Security',
    ministryHi: 'ग्रामीण विकास मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Rural Development, GoI',
    schemeType: 'Centrally Sponsored (Joint)',
    schemeTypeHi: 'केंद्र एवं राज्य संयुक्त योजना',
    schemeTypeEn: 'Centrally Sponsored Scheme',
    targetBeneficiariesHi: 'गरीबी रेखा से नीचे (BPL) जीवनयापन करने वाले वरिष्ठ नागरिक, विधवाएं एवं दिव्यांग',
    targetBeneficiariesEn: 'BPL senior citizens (IGNOAPS), widows (IGNWPS) and disabled persons (IGNDPS)',
    eligibility: [
      'परिवार बीपीएल सूची में दर्ज हो।',
      'वृद्धावस्था हेतु आयु 60 वर्ष+, विधवा पेंशन हेतु 40 वर्ष+, दिव्यांगता हेतु 80%+ दिव्यांगता।'
    ],
    benefitsHi: 'मासिक वित्तीय पेंशन सीधे बैंक खाते में (राज्य सरकारें इसमें अपनी अतिरिक्त राशि जोड़कर भुगतान करती हैं)।',
    benefitsEn: 'Direct DBT monthly pensions to bank accounts of destitute beneficiaries.',
    documents: [
      'बीपीएल कार्ड / राशन कार्ड',
      'आधार कार्ड व आयु प्रमाण',
      'दिव्यांगता प्रमाण पत्र (दिव्यांग पेंशन हेतु)',
      'पति का मृत्यु प्रमाण पत्र (विधवा पेंशन हेतु)'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन पोर्टल व ब्लॉक कार्यालय (Online & Block)',
    officialApplyUrl: 'https://nsap.nic.in/',
    officialApplyLabel: 'आधिकारिक पोर्टल खोलें / Open Portal',
    statusUrl: 'https://nsap.nic.in/reported/applicationTracker.do',
    statusLabel: 'पेंशन स्थिति ट्रैक करें / Track Status',
    sourceUrl: 'https://nsap.nic.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 7. स्वास्थ्य एवं चिकित्सा (Health & Medical Services)
  // ----------------------------------------------------
  {
    id: 'ayushman-bharat-card',
    nameHi: 'आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना (PM-JAY)',
    nameEn: 'Ayushman Bharat PM-JAY (Golden Card)',
    shortDescHi: 'पात्र परिवारों एवं 70 वर्ष से अधिक आयु के सभी वरिष्ठ नागरिकों को प्रति वर्ष ₹5 लाख तक का कैशलेस एवं मुफ्त अस्पताल इलाज।',
    shortDescEn: 'World largest government health insurance scheme offering ₹5 Lakh cashless treatment per family per year.',
    categoryId: 'health-medical',
    categoryNameHi: 'स्वास्थ्य एवं चिकित्सा',
    categoryNameEn: 'Health & Medical Services',
    ministryHi: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय (NHA), भारत सरकार',
    ministryEn: 'Ministry of Health & Family Welfare (NHA), GoI',
    schemeType: 'Centrally Sponsored (Joint)',
    schemeTypeHi: 'केंद्र एवं राज्य संयुक्त योजना (60:40)',
    schemeTypeEn: 'Centrally Sponsored Scheme (60:40 Ratio)',
    targetBeneficiariesHi: 'SECC सूची, राशन कार्ड धारक एवं 70+ वर्ष के समस्त भारतीय वरिष्ठ नागरिक',
    targetBeneficiariesEn: 'Deprived rural/urban families and all senior citizens aged 70+ regardless of income',
    eligibility: [
      'राशन कार्ड (NFSA) धारक परिवार अथवा 70 वर्ष या अधिक आयु के समस्त नागरिक (वय वंदना कार्ड)।',
      'पूर्व से मौजूद बीमारियों (Pre-existing conditions) का इलाज प्रथम दिन से कवर।'
    ],
    benefitsHi: 'प्रति वर्ष ₹5,00,000 तक देश भर के 29,000+ संबद्ध सरकारी व निजी अस्पतालों में जांच, दवाई, सर्जरी व भर्ती पूर्णतः मुफ्त।',
    benefitsEn: '₹5 Lakh free cashless inpatient hospital care per family per year; special top-up for 70+ seniors.',
    documents: [
      'आधार कार्ड (Aadhaar Card with biometric/OTP verification)',
      'राशन कार्ड नंबर (Ration Card No.)'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन लाभार्थी पोर्टल व अस्पताल कियोस्क (Online & Hospitals)',
    officialApplyUrl: 'https://beneficiary.nha.gov.in/',
    officialApplyLabel: 'आयुष्मान कार्ड बनाएँ / Create Card',
    statusUrl: 'https://beneficiary.nha.gov.in/',
    statusLabel: 'पात्रता जांचें व डाउनलोड करें / Check & Download',
    sourceUrl: 'https://nha.gov.in/PM-JAY',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    articleSlug: 'ayushman-bharat-card-guide',
    isPopular: true
  },
  {
    id: 'abha-card-health-account',
    nameHi: 'आभा डिजिटल हेल्थ आईडी (ABHA - Ayushman Bharat Health Account)',
    nameEn: 'ABHA Health ID Card (14-Digit Digital Health Record)',
    shortDescHi: '14 अंकों का डिजिटल स्वास्थ्य खाता जिससे आपके सभी मेडिकल प्रिस्क्रिप्शन, लैब टेस्ट रिपोर्ट व जांच एक सुरक्षित क्यूआर कोड में जुड़ते हैं।',
    shortDescEn: '14-digit unique health identifier to digitally share and access medical records across hospitals nationwide.',
    categoryId: 'health-medical',
    categoryNameHi: 'स्वास्थ्य एवं चिकित्सा',
    categoryNameEn: 'Health & Medical Services',
    ministryHi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA), भारत सरकार',
    ministryEn: 'National Health Authority (NHA), GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: 'भारत का प्रत्येक नागरिक',
    targetBeneficiariesEn: 'All Indian citizens desiring paperless digital health records',
    eligibility: [
      'भारत का कोई भी नागरिक (किसी भी उम्र के व्यक्ति का आभा कार्ड बन सकता है)।'
    ],
    benefitsHi: 'अस्पतालों में बिना पर्ची लाइन लगे तुरंत ओपीडी पंजीकरण, मेडिकल रिपोर्ट्स खोने का कोई डर नहीं, 100% सुरक्षित व गोपनीय।',
    benefitsEn: 'Instant OPD token scan, paperless health records, consent-based digital sharing with certified doctors.',
    documents: [
      'आधार कार्ड (मोबाइल नंबर लिंक्ड) अथवा ड्राइविंग लाइसेंस'
    ],
    applicationMode: 'Online',
    applicationModeLabel: 'ऑनलाइन तुरंत 2 मिनट में (Instant 2-Minute Creation)',
    officialApplyUrl: 'https://abha.abdm.gov.in/abha/v3/register',
    officialApplyLabel: 'आभा कार्ड ऑनलाइन बनाएँ / Create ABHA',
    statusUrl: 'https://abha.abdm.gov.in/',
    statusLabel: 'आभा कार्ड डाउनलोड करें / Download ABHA',
    sourceUrl: 'https://abha.abdm.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 8. श्रमिक एवं मजदूर योजनाएं (Labour & Worker Schemes)
  // ----------------------------------------------------
  {
    id: 'eshram-card-portal',
    nameHi: 'ई-श्रम कार्ड (e-Shram Universal Account Number - 12 डिजिट UAN)',
    nameEn: 'e-Shram Portal (Unorganised Workers National Database)',
    shortDescHi: 'असंगठित कामगारों (कृषि मजदूर, रेहड़ी, रिक्शा चालक, घरेलू सहायिका, गिग वर्कर्स) का 12 अंकों का राष्ट्रीय पहचान पत्र।',
    shortDescEn: 'Central national database of unorganised workers providing a portable 12-digit UAN smart card.',
    categoryId: 'labour-worker',
    categoryNameHi: 'श्रमिक एवं मजदूर योजनाएं',
    categoryNameEn: 'Labour & Worker Schemes',
    ministryHi: 'श्रम एवं रोजगार मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Labour & Employment, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: 'असंगठित क्षेत्र के 16 से 59 वर्ष के 38 करोड़+ श्रमिक व कामगार',
    targetBeneficiariesEn: 'Unorganised workers not covered under EPFO or ESIC',
    eligibility: [
      'आयु 16 से 59 वर्ष के बीच।',
      'ईपीएफओ (EPFO) अथवा ईएसआईसी (ESIC) का सदस्य नहीं होना चाहिए।',
      'आयकरदाता नहीं होना चाहिए।'
    ],
    benefitsHi: '₹2 लाख का दुर्घटना बीमा कवर (मृत्यु पर ₹2 लाख, आंशिक विकलांगता पर ₹1 लाख), राष्ट्रीय आपदाओं में सीधी सहायता व सामाजिक सुरक्षा योजनाओं से जुड़ाव।',
    benefitsEn: 'Accident insurance coverage up to ₹2 Lakh, portable social security and direct calamity relief assistance.',
    documents: [
      'आधार कार्ड (मोबाइल नंबर लिंक्ड)',
      'सक्रिय बचत बैंक खाता विवरण'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन पोर्टल व सीएससी केंद्र (Self Portal & CSC)',
    officialApplyUrl: 'https://register.eshram.gov.in/',
    officialApplyLabel: 'ई-श्रम पंजीकरण करें / Self Register',
    statusUrl: 'https://register.eshram.gov.in/#/user/already-registered',
    statusLabel: 'कार्ड अपडेट व डाउनलोड करें / Update & Download',
    sourceUrl: 'https://eshram.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    isPopular: true
  },
  {
    id: 'pm-sym-mandhan',
    nameHi: 'प्रधानमंत्री श्रम योगी मानधन योजना (PM-SYM)',
    nameEn: 'Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM Pension)',
    shortDescHi: 'असंगठित कामगारों के लिए 60 वर्ष की आयु के बाद ₹3,000 प्रति माह की निश्चित पेंशन योजना (50% अंशदान सरकार द्वारा)।',
    shortDescEn: 'Old age protection and social security pension of ₹3,000/month for unorganised workers.',
    categoryId: 'labour-worker',
    categoryNameHi: 'श्रमिक एवं मजदूर योजनाएं',
    categoryNameEn: 'Labour & Worker Schemes',
    ministryHi: 'श्रम एवं रोजगार मंत्रालय, भारत सरकार (LIC द्वारा संचालित)',
    ministryEn: 'Ministry of Labour & Employment, GoI (Administered by LIC)',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना (50% मैचिंग ग्रांट)',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: 'मासिक आय ₹15,000 से कम वाले 18-40 वर्ष के असंगठित कामगार',
    targetBeneficiariesEn: 'Unorganised workers with monthly income up to ₹15,000',
    eligibility: [
      'प्रवेश आयु 18 से 40 वर्ष।',
      'मासिक आय ₹15,000 या उससे कम हो।'
    ],
    benefitsHi: '60 वर्ष की आयु उपरांत ₹3,000 प्रति माह गारंटीड पेंशन। जितना अंशदान कामगार देगा (₹55 से ₹200 प्रति माह), उतना ही केंद्र सरकार जमा करेगी।',
    benefitsEn: 'Guaranteed pension of ₹3,000/month after 60 years with 50% matching contribution by Central Govt.',
    documents: [
      'आधार कार्ड',
      'बचत बैंक खाता पासबुक / जन धन खाता'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'सीएससी एवं मानधन पोर्टल (CSC & Mandhan Portal)',
    officialApplyUrl: 'https://maandhan.in/',
    officialApplyLabel: 'मानधन पोर्टल पर आवेदन करें / Apply Online',
    sourceUrl: 'https://maandhan.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 9. व्यवसाय एवं स्वरोजगार (Business & Self-Employment)
  // ----------------------------------------------------
  {
    id: 'pm-mudra-yojana',
    nameHi: 'प्रधानमंत्री मुद्रा योजना (PMMY - ₹50,000 से ₹20 लाख तक व्यवसाय ऋण)',
    nameEn: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    shortDescHi: 'गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों को बिना किसी गारंटी के ₹50,000 से ₹20 लाख तक संस्थागत बैंक ऋण।',
    shortDescEn: 'Collateral-free institutional business loans up to ₹20 Lakh across Shishu, Kishore and Tarun categories.',
    categoryId: 'business-self-employment',
    categoryNameHi: 'व्यवसाय एवं स्वरोजगार',
    categoryNameEn: 'Business & Self-Employment',
    ministryHi: 'वित्त मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Finance, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: 'दुकानदार, व्यापारी, कारीगर, विनिर्माण, सेवा व लघु उद्योग संचालक',
    targetBeneficiariesEn: 'Micro enterprises, traders, shopkeepers, small manufacturing & service units',
    eligibility: [
      'भारतीय नागरिक जिसके पास गैर-कृषि आय सृजन व्यवसाय का प्रस्ताव हो।',
      'किसी भी बैंक या वित्तीय संस्थान में डिफॉल्टर न हो।'
    ],
    benefitsHi: 'शिशु (₹50,000 तक), किशोर (₹50,000 से ₹5 लाख), तरुण (₹5 लाख से ₹10 लाख) एवं तरुण प्लस (₹20 लाख तक) बिना किसी संपार्श्विक (Collateral) के ऋण।',
    benefitsEn: 'Loans from ₹50,000 up to ₹20 Lakh with zero collateral security and subsidized processing charges.',
    documents: [
      'पहचान एवं पता प्रमाण (आधार / वोटर / पैन)',
      'व्यवसाय का विवरण व अनुमानित प्रोजेक्ट रिपोर्ट',
      'विगत 6 माह का बैंक खाता विवरण'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'जनसमर्थ पोर्टल व बैंक शाखा (JanSamarth & Banks)',
    officialApplyUrl: 'https://www.jansamarth.in/business-activity-loan-schemes',
    officialApplyLabel: 'जनसमर्थ पर आवेदन करें / Apply on JanSamarth',
    sourceUrl: 'https://www.mudra.org.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    isPopular: true
  },
  {
    id: 'pm-vishwakarma-yojana',
    nameHi: 'पीएम विश्वकर्मा योजना (PM Vishwakarma - 18 पारंपरिक शिल्पी व कारीगर)',
    nameEn: 'PM Vishwakarma Scheme (Traditional Artisans & Craftspeople)',
    shortDescHi: 'पारंपरिक कारीगरों को ₹15,000 टूलकिट अनुदान, ₹3 लाख तक 5% रियायती ब्याज पर ऋण, आधुनिक प्रशिक्षण व पीएम विश्वकर्मा प्रमाण पत्र।',
    shortDescEn: 'Comprehensive support to 18 traditional trades with ₹15,000 toolkit e-voucher & subsidized loans up to ₹3 Lakh.',
    categoryId: 'business-self-employment',
    categoryNameHi: 'व्यवसाय एवं स्वरोजगार',
    categoryNameEn: 'Business & Self-Employment',
    ministryHi: 'सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय (MSME), भारत सरकार',
    ministryEn: 'Ministry of MSME, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना (100% केंद्र पोषित)',
    schemeTypeEn: 'Central Sector Scheme (₹13,000 Crore Outlay)',
    targetBeneficiariesHi: 'बढ़ई, लोहार, कुम्हार, राजमिस्त्री, दर्जी, मोची, नाई, धोबी सहित 18 अधिसूचित पारंपरिक कारीगर',
    targetBeneficiariesEn: 'Traditional craftspersons working with hands and tools across 18 family-based trades',
    eligibility: [
      'आयु न्यूनतम 18 वर्ष।',
      'परिवार का केवल एक सदस्य ही योजना का लाभ ले सकता है।',
      'विगत 5 वर्षों में पीएमईजीपी या मुद्रा में समान ऋण न लिया हो।'
    ],
    benefitsHi: '5-7 दिन बुनियादी प्रशिक्षण (प्रति दिन ₹500 स्टाइपेंड), ₹15,000 एडवांस टूलकिट वाउचर, ₹1 लाख (प्रथम चरण) व ₹2 लाख (द्वितीय चरण) मात्र 5% ब्याज पर बिना गारंटी ऋण।',
    benefitsEn: 'Skill training with ₹500/day stipend, ₹15,000 toolkit e-voucher, collateral-free enterprise loan up to ₹3 Lakh at 5% interest.',
    documents: [
      'आधार कार्ड (मोबाइल लिंक्ड)',
      'सक्रिय बैंक खाता पासबुक',
      'राशन कार्ड या परिवार विवरण'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'सीएससी केंद्र द्वारा निबंधन (CSC Registration)',
    officialApplyUrl: 'https://pmvishwakarma.gov.in/',
    officialApplyLabel: 'पोर्टल खोलें व विवरण देखें / Open Portal',
    statusUrl: 'https://pmvishwakarma.gov.in/',
    statusLabel: 'आवेदन स्थिति जांचें / Check Status',
    sourceUrl: 'https://pmvishwakarma.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    isPopular: true
  },
  {
    id: 'udyam-registration-portal',
    nameHi: 'उद्यम पंजीकरण पोर्टल (Udyam MSME Registration - 100% Free)',
    nameEn: 'Udyam Registration Portal (Official MSME Certification)',
    shortDescHi: 'सूक्ष्म, लघु एवं मध्यम उद्योगों (MSME) का आधिकारिक सरकारी डिजिटल पंजीकरण एवं आजीवन मान्य उद्यम प्रमाणपत्र।',
    shortDescEn: 'Zero-cost official central registration for MSMEs with instant digital Udyam Certificate.',
    categoryId: 'business-self-employment',
    categoryNameHi: 'व्यवसाय एवं स्वरोजगार',
    categoryNameEn: 'Business & Self-Employment',
    ministryHi: 'सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of MSME, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र डिजिटल सेवा',
    schemeTypeEn: 'Central Sector Digital Service',
    targetBeneficiariesHi: 'सभी नए व पुराने सूक्ष्म, लघु एवं मध्यम उद्यम व व्यापारिक संस्थाएं',
    targetBeneficiariesEn: 'Manufacturing and service enterprises meeting MSME investment & turnover limits',
    eligibility: [
      'माइक्रो: निवेश ₹1 करोड़ तक व टर्नओवर ₹5 करोड़ तक।',
      'स्मॉल: निवेश ₹10 करोड़ तक व टर्नओवर ₹50 करोड़ तक।',
      'मीडियम: निवेश ₹50 करोड़ तक व टर्नओवर ₹250 करोड़ तक।'
    ],
    benefitsHi: 'सरकारी टेंडरों में बिना बयाना राशि (EMD) छूट, प्राथमिकताप्राप्त क्षेत्र ऋण (PSL) प्राथमिकता, पेटेंट/ट्रेडमार्क शुल्क में 50% छूट एवं विलंबित भुगतान निवारण (MSME Samadhaan)।',
    benefitsEn: 'Collateral-free bank loans priority, exemption on tender earnest money, electricity tariff subsidies & Samadhaan portal protection.',
    documents: [
      'उद्यमी का आधार कार्ड (Aadhaar Card of Proprietor/Partner)',
      'पैन कार्ड एवं जीएसटी नंबर (यदि लागू हो)'
    ],
    applicationMode: 'Online',
    applicationModeLabel: '100% ऑनलाइन व निःशुल्क (No Fee Required)',
    officialApplyUrl: 'https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm',
    officialApplyLabel: 'निःशुल्क उद्यम पंजीकरण करें / Register Free',
    statusUrl: 'https://udyamregistration.gov.in/PrintApplication_Pub.aspx',
    statusLabel: 'उद्यम सर्टिफिकेट प्रिंट करें / Print Certificate',
    sourceUrl: 'https://udyamregistration.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    articleSlug: 'udyam-msme-registration'
  },

  // ----------------------------------------------------
  // 10. बैंकिंग एवं बीमा (Banking & Insurance)
  // ----------------------------------------------------
  {
    id: 'pm-jan-dhan-yojana',
    nameHi: 'प्रधानमंत्री जन धन योजना (PMJDY - जीरो बैलेंस बचत खाता)',
    nameEn: 'Pradhan Mantri Jan Dhan Yojana (PMJDY Zero Balance)',
    shortDescHi: 'प्रत्येक परिवार के लिए शून्य शेष बचत खाता, मुफ्त रुपे डेबिट कार्ड, ₹2 लाख दुर्घटना बीमा एवं ₹10,000 ओवरड्राफ्ट सुविधा।',
    shortDescEn: 'National Mission for Financial Inclusion offering zero balance savings accounts with RuPay debit card.',
    categoryId: 'banking-insurance',
    categoryNameHi: 'बैंकिंग एवं बीमा',
    categoryNameEn: 'Banking & Insurance',
    ministryHi: 'वित्तीय सेवाएं विभाग, वित्त मंत्रालय, भारत सरकार',
    ministryEn: 'Dept of Financial Services, Ministry of Finance, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र मिशन',
    schemeTypeEn: 'Central Sector Mission',
    targetBeneficiariesHi: 'बैंकिंग सेवाओं से वंचित 10 वर्ष से अधिक आयु के समस्त भारतीय नागरिक',
    targetBeneficiariesEn: 'All unbanked adults and minors aged 10+ across India',
    eligibility: [
      'भारतीय नागरिक जिसके पास पहले से कोई बुनियादी बचत बैंक खाता न हो।'
    ],
    benefitsHi: 'कोई न्यूनतम बैलेंस रखने की अनिवार्यता नहीं, रुपे डेबिट कार्ड पर ₹2 लाख का मुफ्त दुर्घटना बीमा, 6 माह संतोषजनक संचालन उपरांत ₹10,000 ओवरड्राफ्ट (OD)।',
    benefitsEn: 'Zero minimum balance, free RuPay card with ₹2 Lakh accident cover, and ₹10,000 overdraft facility.',
    documents: [
      'आधार कार्ड (Aadhaar Card) अथवा वोटर कार्ड / मनरेगा जॉब कार्ड'
    ],
    applicationMode: 'Offline',
    applicationModeLabel: 'किसी भी बैंक शाखा या बैंक मित्र (Bank Branches & CSP)',
    officialApplyUrl: 'https://pmjdy.gov.in/account',
    officialApplyLabel: 'फॉर्म डाउनलोड करें व विवरण देखें / View Details',
    sourceUrl: 'https://pmjdy.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },
  {
    id: 'pm-suraksha-bima-pmsby',
    nameHi: 'प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY - मात्र ₹20 वार्षिक प्रीमियम)',
    nameEn: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY ₹20/Year)',
    shortDescHi: '18 से 70 वर्ष के बैंक खाताधारकों को दुर्घटना में मृत्यु या स्थायी दिव्यांगता पर मात्र ₹20 प्रति वर्ष में ₹2 लाख का बीमा कवर।',
    shortDescEn: 'Accidental death and disability cover of ₹2 Lakh for an affordable premium of only ₹20 per year.',
    categoryId: 'banking-insurance',
    categoryNameHi: 'बैंकिंग एवं बीमा',
    categoryNameEn: 'Banking & Insurance',
    ministryHi: 'वित्तीय सेवाएं विभाग, वित्त मंत्रालय, भारत सरकार',
    ministryEn: 'Dept of Financial Services, Ministry of Finance, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: '18 से 70 वर्ष के सभी बचत बैंक खाताधारक नागरिक',
    targetBeneficiariesEn: 'Bank account holders aged 18 to 70 years',
    eligibility: [
      'आयु 18 से 70 वर्ष।',
      'बचत बैंक खाता जिसमें ऑटो-डेबिट (Auto-Debit) सहमति सक्रिय हो।'
    ],
    benefitsHi: 'दुर्घटना में मृत्यु अथवा दोनों आंख/हाथ/पैर की पूर्ण स्थायी क्षति पर ₹2,00,000। एक आंख या एक अंग की क्षति पर ₹1,00,000।',
    benefitsEn: '₹2 Lakh in case of accidental demise or permanent total disability; ₹1 Lakh for permanent partial disability.',
    documents: [
      'आधार कार्ड एवं बैंक पासबुक'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'नेट बैंकिंग व बैंक शाखा (Net Banking & Banks)',
    officialApplyUrl: 'https://www.jansuraksha.gov.in/',
    officialApplyLabel: 'जनसुरक्षा पोर्टल पर देखें / JanSuraksha Portal',
    sourceUrl: 'https://www.jansuraksha.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 11. राशन एवं खाद्य सुरक्षा (Ration & Food Security)
  // ----------------------------------------------------
  {
    id: 'nfsa-ration-central',
    nameHi: 'राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA - प्रधानमंत्री गरीब कल्याण अन्न योजना)',
    nameEn: 'National Food Security Act & PMGKAY (Free Foodgrain)',
    shortDescHi: '81 करोड़+ नागरिकों को 5 किलोग्राम प्रति व्यक्ति प्रतिमाह मुफ्त खाद्यान्न (चावल/गेहूं) एवं वन नेशन वन राशन कार्ड पोर्टेबिलिटी।',
    shortDescEn: 'Provides 5 kg free foodgrains per person per month to priority households and 35 kg per family for Antyodaya.',
    categoryId: 'ration-food-security',
    categoryNameHi: 'राशन एवं खाद्य सुरक्षा',
    categoryNameEn: 'Ration & Food Security',
    ministryHi: 'उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Consumer Affairs, Food & Public Distribution, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना (100% केंद्र पोषित खाद्यान्न)',
    schemeTypeEn: 'Central Sector Scheme (Free Foodgrain)',
    targetBeneficiariesHi: 'अंत्योदय अन्न योजना (AAY) एवं प्राथमिकता प्राप्त गृहस्थी (PHH) राशन कार्ड धारक',
    targetBeneficiariesEn: '81.35 Crore NFSA beneficiaries across all States and UTs',
    eligibility: [
      'सक्षम राज्य खाद्य विभाग द्वारा जारी वैध NFSA डिजिटल राशन कार्ड।'
    ],
    benefitsHi: 'प्रति व्यक्ति 5 किलो खाद्यान्न (चावल/गेहूं/मोटा अनाज) पूर्णतः मुफ्त। देश के किसी भी उचित मूल्य दुकान (FPS) से बायोमेट्रिक अंगूठा लगाकर राशन लेने की सुविधा।',
    benefitsEn: '100% free foodgrain under PMGKAY through e-PoS device at any fair price shop nationwide via ONORC.',
    documents: [
      'राशन कार्ड संख्या',
      'आधार कार्ड (सभी सदस्यों का राशन कार्ड से सीडेड)'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'राज्य खाद्य पोर्टल एवं आपूर्ति कार्यालय (State ePDS & Supply Office)',
    officialApplyUrl: 'https://nfsa.gov.in/',
    officialApplyLabel: 'एनएफएसए पोर्टल खोलें / Open NFSA Portal',
    statusUrl: 'https://nfsa.gov.in/portal/Ration_Card_State_Portals_AA',
    statusLabel: 'राज्य राशन पोर्टल सूची / State Portals',
    sourceUrl: 'https://nfsa.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 12. पहचान पत्र एवं दस्तावेज (Identity Cards & Documents)
  // ----------------------------------------------------
  {
    id: 'myaadhaar-uidai-services',
    nameHi: 'माई आधार सेवा पोर्टल (myAadhaar UIDAI Official)',
    nameEn: 'myAadhaar UIDAI Official Portal Services',
    shortDescHi: 'ई-आधार डाउनलोड, ऑनलाइन पता सुधार, पीवीसी कार्ड ऑर्डर, बायोमेट्रिक लॉक/अनलॉक एवं आधार-पैन लिंकिंग सत्यापन।',
    shortDescEn: 'Comprehensive online citizen services by UIDAI for download, address update, PVC order and authentication history.',
    categoryId: 'identity-documents',
    categoryNameHi: 'पहचान पत्र एवं दस्तावेज',
    categoryNameEn: 'Identity Cards & Documents',
    ministryHi: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI), भारत सरकार',
    ministryEn: 'Unique Identification Authority of India (UIDAI), GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय वैधानिक डिजिटल सेवा',
    schemeTypeEn: 'Central Statutory Digital Service',
    targetBeneficiariesHi: 'भारत के 140 करोड़+ आधार धारक नागरिक',
    targetBeneficiariesEn: 'All residents of India holding or enrolling for 12-digit Aadhaar',
    eligibility: [
      'भारत का कोई भी निवासी नागरिक।'
    ],
    benefitsHi: 'सरकारी योजनाओं, बैंक खातों, सब्सिडी ও पहचान सत्यापन का सर्वोच्च वैधानिक डिजिटल पहचान पत्र।',
    benefitsEn: 'Universal proof of identity & address; essential for Direct Benefit Transfers (DBT) and digital services.',
    documents: [
      '12 अंकों का आधार नंबर / 28 अंकों का नामांकन आईडी (EID)',
      'पंजीकृत मोबाइल नंबर (OTP सत्यापन हेतु)',
      'पता सुधार हेतु वैध पता प्रमाण (Valid PoA)'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन पोर्टल व आधार सेवा केंद्र (Online & ASK)',
    officialApplyUrl: 'https://myaadhaar.uidai.gov.in/',
    officialApplyLabel: 'माई आधार पोर्टल खोलें / Open myAadhaar',
    statusUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-validity',
    statusLabel: 'आधार वैधता जांचें / Check Validity',
    sourceUrl: 'https://uidai.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    articleSlug: 'aadhaar-card-address-update',
    isPopular: true
  },
  {
    id: 'digilocker-national-wallet',
    nameHi: 'डिजिलॉकर (DigiLocker - 100% कानूनी डिजिटल दस्तावेज लॉकर)',
    nameEn: 'DigiLocker (Ministry of Electronics & IT Digital Document Wallet)',
    shortDescHi: 'आधार, पैन, ड्राइविंग लाइसेंस, वाहन आरसी, 10वीं/12वीं मार्कशीट व डिग्री को कानूनी रूप से डिजिटल स्टोर व शेयर करने का मंच।',
    shortDescEn: 'Government digital wallet issuing legally valid electronic certificates as per Rule 9A of IT Rules 2016.',
    categoryId: 'identity-documents',
    categoryNameHi: 'पहचान पत्र एवं दस्तावेज',
    categoryNameEn: 'Identity Cards & Documents',
    ministryHi: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय (MeitY), भारत सरकार',
    ministryEn: 'Ministry of Electronics & IT (MeitY), GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय डिजिटल सार्वजनिक अवसंरचना (DPI)',
    schemeTypeEn: 'Digital Public Infrastructure (DPI)',
    targetBeneficiariesHi: 'प्रत्येक भारतीय नागरिक',
    targetBeneficiariesEn: 'All citizens having an Aadhaar linked mobile number',
    eligibility: [
      'आधार कार्ड धारक भारतीय नागरिक।'
    ],
    benefitsHi: 'आईटी कानून के तहत मूल भौतिक दस्तावेज के 100% समतुल्य मान्य। ट्रैफिक पुलिस, रेलवे, हवाई अड्डों व कॉलेजों में स्वीकार्य।',
    benefitsEn: 'Legally equivalent to original physical documents under IT Act; valid for traffic checks and academic admissions.',
    documents: [
      'आधार कार्ड व मोबाइल नंबर (OTP सत्यापन)'
    ],
    applicationMode: 'Online',
    applicationModeLabel: '100% निःशुल्क ऑनलाइन व मोबाइल ऐप (Free App & Web)',
    officialApplyUrl: 'https://www.digilocker.gov.in/',
    officialApplyLabel: 'डिजिलॉकर खोलें / Open DigiLocker',
    sourceUrl: 'https://www.digilocker.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },
  {
    id: 'pan-card-nsdl-uti',
    nameHi: 'पैन कार्ड ऑनलाइन सेवा (PAN Card Services - नया पैन व ई-पैन)',
    nameEn: 'Permanent Account Number (PAN) Card Services',
    shortDescHi: '10 अंकों का अल्फान्यूमेरिक टैक्स पहचान पत्र, तुरंत ई-पैन डाउनलोड एवं आधार-पैन बायोमेट्रिक लिंकिंग सेवा।',
    shortDescEn: 'Apply online for fresh PAN card (Form 49A), reprint lost physical card, or download instant digital e-PAN.',
    categoryId: 'identity-documents',
    categoryNameHi: 'पहचान पत्र एवं दस्तावेज',
    categoryNameEn: 'Identity Cards & Documents',
    ministryHi: 'आयकर विभाग, वित्त मंत्रालय, भारत सरकार',
    ministryEn: 'Income Tax Department, Ministry of Finance, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय वैधानिक सेवा',
    schemeTypeEn: 'Central Statutory Service',
    targetBeneficiariesHi: 'समस्त भारतीय नागरिक, करदाता, छात्र एवं व्यावसायिक फर्में',
    targetBeneficiariesEn: 'All individuals and entities requiring financial identification in India',
    eligibility: [
      'भारतीय नागरिक या संस्था।'
    ],
    benefitsHi: 'बैंक खाता खोलने, ₹50,000+ वित्तीय लेनदेन, आयकर रिटर्न एवं वित्तीय पहचान हेतु अनिवार्य दस्तावेज।',
    benefitsEn: 'Mandatory financial identity for banking transactions above ₹50,000, filing ITR, investments and business.',
    documents: [
      'पहचान प्रमाण (आधार कार्ड)',
      'पता प्रमाण (आधार / बिजली बिल / बैंक पासबुक)',
      'जन्म तिथि प्रमाण (10वीं मार्कशीट / जन्म प्रमाण पत्र / आधार)'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन एवं टीआईएन सुविधा केंद्र (Online & TIN-FC)',
    officialApplyUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    officialApplyLabel: 'पैन कार्ड आवेदन करें / Apply Online',
    statusUrl: 'https://tin.tin.nsdl.com/pantan/StatusTrack.html',
    statusLabel: 'पैन आवेदन स्थिति ट्रैक करें / Track Status',
    sourceUrl: 'https://www.incometax.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    articleSlug: 'instant-epan-application-guide',
    isPopular: true
  },

  // ----------------------------------------------------
  // 13. बिजली एवं स्वच्छ ऊर्जा (Electricity & Clean Energy)
  // ----------------------------------------------------
  {
    id: 'pm-surya-ghar-yojana',
    nameHi: 'पीएम सूर्य घर मुफ्त बिजली योजना (PM Surya Ghar Solar Subsidy)',
    nameEn: 'PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar Subsidy)',
    shortDescHi: 'घरों की छतों पर 1 से 3 किलोवाट सोलर पैनल लगाने पर ₹30,000 से ₹78,000 तक की सीधी सरकारी सब्सिडी एवं 300 यूनिट मुफ्त बिजली।',
    shortDescEn: 'Direct Central Government subsidy up to ₹78,000 for installing 1-3 kW rooftop solar systems for households.',
    categoryId: 'clean-energy-power',
    categoryNameHi: 'बिजली एवं स्वच्छ ऊर्जा',
    categoryNameEn: 'Electricity & Clean Energy',
    ministryHi: 'नवीन एवं नवीकरणीय ऊर्जा मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of New & Renewable Energy, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना (₹75,021 करोड़ बजट)',
    schemeTypeEn: 'Central Sector Scheme (₹75,021 Crore Outlay)',
    targetBeneficiariesHi: '1 करोड़ भारतीय आवासीय परिवार (Residential Consumers)',
    targetBeneficiariesEn: 'One crore residential households having a valid grid electricity connection',
    eligibility: [
      'आवेदक के नाम पर वैध घरेलू बिजली कनेक्शन (DISCOM Consumer ID) होना चाहिए।',
      'छत पर पर्याप्त छाया-मुक्त स्थान एवं छत का स्वामित्व।'
    ],
    benefitsHi: '1 kW सिस्टम पर ₹30,000, 2 kW पर ₹60,000 एवं 3 kW या अधिक पर ₹78,000 की सीधी बैंक सब्सिडी। बिजली बिल शून्य व अतिरिक्त बिजली बेचने पर कमाई।',
    benefitsEn: 'Subsidy of ₹30,000 for 1 kW, ₹60,000 for 2 kW and ₹78,000 for 3 kW+; reduces monthly electricity bills to zero.',
    documents: [
      'वर्तमान बिजली बिल (Electricity Bill showing CA/Consumer Number)',
      'आधार कार्ड व मकान छत का फोटो',
      'बैंक पासबुक (सब्सिडी DBT क्रेडिट हेतु)'
    ],
    applicationMode: 'Online',
    applicationModeLabel: 'ऑनलाइन राष्ट्रीय सोलर पोर्टल (National Solar Portal)',
    officialApplyUrl: 'https://pmsuryaghar.gov.in/consumerRegistration',
    officialApplyLabel: 'सोलर सब्सिडी आवेदन करें / Apply Online',
    statusUrl: 'https://pmsuryaghar.gov.in/',
    statusLabel: 'आवेदन स्थिति जांचें / Check Status',
    sourceUrl: 'https://pmsuryaghar.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    isPopular: true
  },
  {
    id: 'pm-ujjwala-yojana',
    nameHi: 'प्रधानमंत्री उज्ज्वला योजना 2.0 (PMUY - मुफ्त एलपीजी गैस कनेक्शन)',
    nameEn: 'Pradhan Mantri Ujjwala Yojana (PMUY 2.0 Free LPG Connection)',
    shortDescHi: 'गरीब ग्रामीण व शहरी परिवारों की वयस्क महिलाओं को बिना किसी अग्रिम भुगतान के मुफ्त गैस कनेक्शन, पहला सिलेंडर व चूल्हा।',
    shortDescEn: 'Provides deposit-free LPG connection along with free first refill and stove to adult women from poor households.',
    categoryId: 'clean-energy-power',
    categoryNameHi: 'बिजली एवं स्वच्छ ऊर्जा',
    categoryNameEn: 'Electricity & Clean Energy',
    ministryHi: 'पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Petroleum & Natural Gas, GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय क्षेत्र योजना',
    schemeTypeEn: 'Central Sector Scheme',
    targetBeneficiariesHi: 'बीपीएल, राशन कार्ड धारक, अनुसूचित जाति/जनजाति एवं प्रधानमंत्री आवास योजना लाभार्थी परिवार की वयस्क महिलाएं',
    targetBeneficiariesEn: 'Adult women belonging to poor households with no existing LPG connection',
    eligibility: [
      'आवेदिका महिला की उम्र न्यूनतम 18 वर्ष होनी चाहिए।',
      'परिवार के किसी सदस्य के नाम पर पहले से कोई एलपीजी कनेक्शन न हो।'
    ],
    benefitsHi: '₹1,600 का निःशुल्क कनेक्शन (सिक्योरिटी डिपॉजिट मुफ्त), पहला 14.2 किग्रा भरा सिलेंडर एवं डबल बर्नर चूल्हा मुफ्त, साथ ही ₹300 प्रति सिलेंडर सब्सिडी।',
    benefitsEn: 'Free deposit, free first 14.2 kg LPG refill, free stove, plus ₹300 targeted subsidy per domestic refill.',
    documents: [
      'महिला का आधार कार्ड व परिवार का राशन कार्ड',
      'बैंक खाता विवरण (आधार सीडेड)',
      '14-सूत्रीय ई-केवाईसी घोषणा'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन पोर्टल व स्थानीय गैस एजेंसी (Online & Gas Agency)',
    officialApplyUrl: 'https://www.pmuy.gov.in/ujjwala2.html',
    officialApplyLabel: 'उज्ज्वला आवेदन करें / Apply Online',
    statusUrl: 'https://www.pmuy.gov.in/',
    statusLabel: 'आवेदन स्थिति जांचें / Track Status',
    sourceUrl: 'https://www.pmuy.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 14. ग्रामीण विकास (Rural Development)
  // ----------------------------------------------------
  {
    id: 'mgnrega-job-card',
    nameHi: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम (मनरेगा / MGNREGA)',
    nameEn: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
    shortDescHi: 'ग्रामीण परिवार के अकुशल वयस्क सदस्यों को प्रति वित्तीय वर्ष कम से कम 100 दिनों का कानूनी रूप से गारंटीकृत मजदूरी रोजगार।',
    shortDescEn: 'Statutory guarantee for 100 days of unskilled wage employment per financial year to rural adult members.',
    categoryId: 'rural-development',
    categoryNameHi: 'ग्रामीण विकास',
    categoryNameEn: 'Rural Development',
    ministryHi: 'ग्रामीण विकास मंत्रालय, भारत सरकार',
    ministryEn: 'Ministry of Rural Development, GoI',
    schemeType: 'Centrally Sponsored (Joint)',
    schemeTypeHi: 'केंद्र एवं राज्य संयुक्त योजना (100% अकुशल मजदूरी केंद्र द्वारा)',
    schemeTypeEn: 'Centrally Sponsored (100% Unskilled Wages by Central Govt)',
    targetBeneficiariesHi: 'ग्रामीण क्षेत्रों के इच्छुक अकुशल श्रमिक वयस्क नागरिक',
    targetBeneficiariesEn: 'Rural households whose adult members volunteer to do unskilled manual work',
    eligibility: [
      'आवेदक ग्रामीण क्षेत्र का स्थायी निवासी हो।',
      'आयु न्यूनतम 18 वर्ष पूरी हो।'
    ],
    benefitsHi: '100 दिन का वैधानिक रोजगार। 15 दिन में काम न मिलने पर कानूनी बेरोजगारी भत्ता। मजदूरी का भुगतान सीधे आधार आधारित बैंक खाते (ABPS) में।',
    benefitsEn: '100 days guaranteed unskilled employment, mandatory unemployment allowance if not provided work within 15 days.',
    documents: [
      'परिवार के सदस्यों का आधार कार्ड',
      'बैंक या डाकघर बचत खाता पासबुक',
      'पासपोर्ट फोटो'
    ],
    applicationMode: 'Offline',
    applicationModeLabel: 'ग्राम पंचायत / रोजगार सेवक (Gram Panchayat Office)',
    officialApplyUrl: 'https://nrega.nic.in/',
    officialApplyLabel: 'मनरेगा पोर्टल खोलें / Open Portal',
    statusUrl: 'https://nrega.nic.in/netnrega/statenew.aspx',
    statusLabel: 'जॉब कार्ड सूची व हाजिरी देखें / View Job Card',
    sourceUrl: 'https://nrega.nic.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  },

  // ----------------------------------------------------
  // 15. परिवहन एवं यात्रा (Transport & Travel)
  // ----------------------------------------------------
  {
    id: 'parivahan-sarathi-portal',
    nameHi: 'सारथी परिवहन: ड्राइविंग लाइसेंस व लर्नर लाइसेंस (Sarathi MoRTH)',
    nameEn: 'Sarathi Parivahan Online Driving Licence & LL Portal',
    shortDescHi: 'घर बैठे आधार प्रमाणीकरण से ऑनलाइन लर्नर टेस्ट, पक्का ड्राइविंग लाइसेंस आवेदन, नवीनीकरण, डुप्लिकेट व अंतरराष्ट्रीय परमिट।',
    shortDescEn: 'Contactless Aadhaar-based Learner Licence test, permanent DL booking, renewal and address change across India.',
    categoryId: 'transport-travel',
    categoryNameHi: 'परिवहन एवं यात्रा',
    categoryNameEn: 'Transport & Travel',
    ministryHi: 'सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH), भारत सरकार',
    ministryEn: 'Ministry of Road Transport and Highways (MoRTH), GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय राष्ट्रीय सेवा मंच',
    schemeTypeEn: 'Central National Digital Service',
    targetBeneficiariesHi: '18 वर्ष से अधिक आयु के समस्त वाहन चालक नागरिक',
    targetBeneficiariesEn: 'All citizens applying for Learner Licence, Driving Licence or RTO services',
    eligibility: [
      'बिना गियर दोपहिया: न्यूनतम 16 वर्ष।',
      'गियर सहित मोटरसाइकिल/कार: न्यूनतम 18 वर्ष।',
      'व्यावसायिक (कमर्शियल) वाहन: न्यूनतम 20 वर्ष।'
    ],
    benefitsHi: 'कांटैक्टलेस सेवा: घर बैठे मोबाइल या लैपटॉप से लर्नर लाइसेंस परीक्षा दें और तुरंत डिजिटल लाइसेंस डाउनलोड करें।',
    benefitsEn: 'Faceless contactless service; take home-based online LL test and download instant approved license.',
    documents: [
      'आधार कार्ड (मोबाइल नंबर लिंक्ड)',
      'उम्र व पता प्रमाण',
      'मेडिकल सर्टिफिकेट फॉर्म 1A (40 वर्ष+ या वाणिज्यिक लाइसेंस हेतु)'
    ],
    applicationMode: 'Online',
    applicationModeLabel: '100% ऑनलाइन आवेदन (Sarathi Parivahan Portal)',
    officialApplyUrl: 'https://sarathi.parivahan.gov.in/',
    officialApplyLabel: 'ड्राइविंग लाइसेंस आवेदन / Apply Online',
    statusUrl: 'https://sarathi.parivahan.gov.in/sarathiservice/applViewStatus.do',
    statusLabel: 'आवेदन स्थिति जांचें / Track Status',
    sourceUrl: 'https://parivahan.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified',
    articleSlug: 'parivahan-driving-licence-guide',
    isPopular: true
  },
  {
    id: 'passport-seva-portal',
    nameHi: 'पासपोर्ट सेवा केंद्र (Passport Seva Official MEA Portal)',
    nameEn: 'Passport Seva Kendra (Ministry of External Affairs)',
    shortDescHi: 'नया साधारण पासपोर्ट (36/60 पेज), तत्काल पासपोर्ट, नवीनीकरण व पुलिस क्लीयरेंस सर्टिफिकेट (PCC) ऑनलाइन अपॉइंटमेंट व आवेदन।',
    shortDescEn: 'Official platform for fresh passport application, tatkaal reissue, PCC, and PSK appointment booking.',
    categoryId: 'transport-travel',
    categoryNameHi: 'परिवहन एवं यात्रा',
    categoryNameEn: 'Transport & Travel',
    ministryHi: 'विदेश मंत्रालय (MEA), भारत सरकार',
    ministryEn: 'Ministry of External Affairs (MEA), GoI',
    schemeType: 'Central Sector',
    schemeTypeHi: 'केंद्रीय वैधानिक सेवा',
    schemeTypeEn: 'Central Statutory Service',
    targetBeneficiariesHi: 'विदेश यात्रा हेतु इच्छुक समस्त भारतीय नागरिक',
    targetBeneficiariesEn: 'All Indian citizens traveling abroad for tourism, education or employment',
    eligibility: [
      'भारतीय नागरिकता प्रमाण।'
    ],
    benefitsHi: '10 वर्ष की वैधता वाला अंतरराष्ट्रीय यात्रा पहचान पत्र एवं विदेश में भारतीय दूतावास सुरक्षा।',
    benefitsEn: 'Internationally recognized travel & citizenship document valid for 10 years (5 years for minors).',
    documents: [
      'आधार कार्ड / वोटर आईडी / पैन कार्ड',
      'जन्म तिथि प्रमाण (10वीं मार्कशीट / जन्म प्रमाण पत्र)',
      'निवास प्रमाण पत्र'
    ],
    applicationMode: 'Both',
    applicationModeLabel: 'ऑनलाइन फॉर्म व पीएसके बायोमेट्रिक (Online Form & PSK)',
    officialApplyUrl: 'https://www.passportindia.gov.in/',
    officialApplyLabel: 'पासपोर्ट सेवा पोर्टल खोलें / Open Passport Portal',
    statusUrl: 'https://www.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew',
    statusLabel: 'पासपोर्ट स्थिति ट्रैक करें / Track Status',
    sourceUrl: 'https://www.passportindia.gov.in/',
    verifiedDate: '2026-03-24',
    verificationStatus: 'verified'
  }
];
