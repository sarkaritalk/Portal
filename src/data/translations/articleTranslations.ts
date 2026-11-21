import { ServiceArticle } from '../../types';
import { LanguageMode } from '../../context/LanguageContext';

export interface ArticleTranslationEn {
  department: string;
  shortSummary: string;
  whatIs: string;
  purposeAndBenefits: string[];
  eligibility: string[];
  ineligibility?: string[];
  documentsRequired: string[];
  fees: {
    officialFee: string;
    note?: string;
    paymentMode: string;
  };
  onlineProcessSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  offlineProcess?: string[];
  statusCheckGuide: string[];
  downloadGuide?: string[];
  correctionOrRenewalGuide?: string[];
  commonMistakesAndTips: string[];
  importantDates?: { label: string; dateOrStatus: string }[];
  faqs: { question: string; answer: string }[];
  officialSources: { title: string; url: string }[];
}

export const ARTICLE_TRANSLATIONS_EN: Record<string, ArticleTranslationEn> = {
  'bihar-rtps-caste-income-residence': {
    department: 'General Administration Department, Government of Bihar',
    shortSummary: 'Complete official guide to apply free from home for Revenue Officer (RO), SDO, or DM level Caste, Income, and Residence certificates in Bihar.',
    whatIs: 'Under the Bihar Right to Public Services (RTPS) Act, the state government provides Caste, Income, and Residential certificates online within a fixed timeframe. Citizens no longer need to visit the Block or Circle office for these applications.',
    purposeAndBenefits: [
      'Reservation and fee concession benefits in government jobs, school/college admissions, and scholarships.',
      'Valid income and residence proof for Ration Card, Student Credit Card, and social security pension schemes.',
      'Legally valid digitally signed certificate (100% valid even without a physical stamp).',
      'Free facility to download the PDF directly onto your mobile phone from the portal.',
    ],
    eligibility: [
      'Applicant must be a native or permanent resident of Bihar.',
      'For Caste Certificate, the applicant’s caste must be notified under SC, ST, EBC, BC, or EWS lists by the Bihar Government.',
      'For Income Certificate, combined annual family income from all legal sources (agriculture, job, business, other) is valid.',
    ],
    ineligibility: [
      'Residents outside Bihar are not eligible for Bihar state-level caste reservation benefits.',
      'Submitting false or misleading income/caste details may lead to rejection and legal action.',
    ],
    documentsRequired: [
      'Aadhaar Card, Voter ID, Passport, or PAN Card.',
      'Recent colour passport-size photo (JPG format, max 350 KB).',
      'Self-Declaration Form (filled online on the portal itself).',
      'Father’s Caste Certificate or Khatiyan (optional supporting proof for caste verification).',
      'Active mobile number and email ID (for OTP and SMS alerts).',
    ],
    fees: {
      officialFee: '₹0 (Completely Free)',
      note: 'There is no government fee on the official Bihar RTPS portal. CSC or cyber cafes may charge only nominal printing/internet charges.',
      paymentMode: 'Free (No Payment Required)',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Open the Official RTPS Portal',
        description: 'Visit serviceonline.bihar.gov.in. You can register via "Khud ka Panjikaran" on the right or apply directly without login.',
      },
      {
        step: 2,
        title: 'Select the Required Service',
        description: 'Click "RTPS Services" > "General Administration Department" on the left homepage menu, then choose Caste, Income, or Residence Certificate issuance.',
      },
      {
        step: 3,
        title: 'Choose the Certificate Level',
        description: 'Always select "Revenue Officer (RO) Level" first. SDO and DM level applications can only be submitted after the RO-level certificate is issued.',
      },
      {
        step: 4,
        title: 'Fill Application Details',
        description: 'Enter applicant name (in English and Hindi), parents’ names, gender, mobile number, state, district, subdivision, block, gram panchayat/municipality, and full address.',
      },
      {
        step: 5,
        title: 'Attach Photo & Identity Proof',
        description: 'Upload a clear passport photo. Click "Attach Annexure", select Aadhaar Card as ID proof, and upload its clear PDF/image.',
      },
      {
        step: 6,
        title: 'Preview & Submit Application',
        description: 'Review all details in Preview and click Submit. Download the Acknowledgement Receipt containing your Application Reference Number.',
      },
    ],
    offlineProcess: [
      'If online application is not possible, visit the RTPS counter at your respective Block/Circle office.',
      'Fill the prescribed form and attach a photo and self-attested copy of your Aadhaar Card.',
      'Submit at the counter and collect the computer-generated receipt showing the scheduled delivery date.',
    ],
    statusCheckGuide: [
      'Click "Track Application Status" under Citizen Section on the RTPS portal homepage.',
      'Enter your Application Reference Number (e.g., BRCO/2026/XXXXX).',
      'Select application submission date or delivery date, enter captcha, and click Submit.',
      'After OTP verification, view your current application stage (Under Process / Approved / Rejected).',
    ],
    downloadGuide: [
      'Click the "Download Certificate" link on the homepage.',
      'Select RTPS service, enter your Application Reference Number and applicant name (in English).',
      'Click Download Certificate to save the digitally signed original certificate PDF.',
    ],
    correctionOrRenewalGuide: [
      'To correct details in an issued certificate, submit a fresh application with accurate details and supporting proof.',
      'Income certificates are generally valid for 1 financial year from issuance, after which a fresh one is required.',
      'Caste and Residence certificates remain valid unless the applicant’s permanent residence or category changes.',
    ],
    commonMistakesAndTips: [
      'Ensure spelling of names in both English and Hindi matches your Aadhaar Card 100%.',
      'Upload a clear photograph showing both ears clearly against a clean background.',
      'Upload a legible scan/copy of Aadhaar Card where both name and address are readable.',
      'Save a screenshot or printout of the Application Reference Number safely.',
    ],
    importantDates: [
      { label: 'Revenue Officer (RO) Level Timeline', dateOrStatus: '10 Working Days' },
      { label: 'Sub-Divisional Officer (SDO) Timeline', dateOrStatus: '14 Working Days' },
      { label: 'Application Fee', dateOrStatus: 'Zero (Free)' },
    ],
    faqs: [
      {
        question: 'Is a physical stamp from the Block Officer required on Bihar RTPS certificates?',
        answer: 'No. As per Government of Bihar directives, digitally signed certificates are 100% legally valid without any physical signature or office stamp.',
      },
      {
        question: 'How long is a Caste Certificate valid?',
        answer: 'A Caste Certificate is valid for life unless the government revises the classification of the concerned caste.',
      },
      {
        question: 'What is the main reason for application rejection?',
        answer: 'Blurry Aadhaar uploads, selecting the wrong police station or circle in the address, or picking the wrong caste category.',
      },
    ],
    officialSources: [
      { title: 'Bihar RTPS Official Portal', url: 'https://serviceonline.bihar.gov.in/' },
      { title: 'General Administration Dept, Govt. of Bihar', url: 'https://state.bihar.gov.in/gad/' },
    ],
  },

  'bihar-bhumi-jamabandi-mutation': {
    department: 'Revenue and Land Reforms Department, Government of Bihar',
    shortSummary: 'Accurate guide to view land Khatiyan, Jamabandi register copies, file online Dakhil-Kharij (Mutation), and pay online land tax receipts.',
    whatIs: 'The Bihar Bhumi portal (biharbhumi.bihar.gov.in) is a digital initiative of the Revenue and Land Reforms Department enabling citizens across all 38 districts of Bihar to transparently access land records, Jamabandi, Lagaan receipts, and online mutation services.',
    purposeAndBenefits: [
      'View and print digital Jamabandi registers (Khata, Khesra, Rakba, Jamabandi No.) from home.',
      'Apply online for land ownership transfer (Dakhil-Kharij / Mutation) after sale or inheritance.',
      'Pay online land tax (Bhu-Lagaan) and receive instant digital receipts.',
      'Apply online for Land Possession Certificate (LPC).',
    ],
    eligibility: [
      'Legitimate landowners, landholders, or legal heirs in the state of Bihar.',
      'A registered Sale Deed (Kewala), Gift Deed, or Will is required for mutation.',
    ],
    ineligibility: [
      'Illegal mutation claims on government, Gair-Majarua Aam, or court-disputed land are automatically rejected.',
    ],
    documentsRequired: [
      'Registered Sale Deed / Kewala document in PDF format.',
      'Seller’s Jamabandi or previous tax receipt details.',
      'Heirship / Genealogy certificate (if applying for ancestral land mutation).',
      'Aadhaar Card and active mobile number.',
      'Accurate Khata number, Khesra (plot) number, and land area (acres/decimals).',
    ],
    fees: {
      officialFee: 'Viewing Jamabandi & Mutation Application: Free (₹0)',
      note: 'Annual Bhu-Lagaan (land tax) is paid directly into the government treasury via Net Banking/UPI at prescribed official rates.',
      paymentMode: 'Net Banking / UPI / Debit Card (Only for Lagaan Tax)',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Register on the Bihar Bhumi Portal',
        description: 'Visit biharbhumi.bihar.gov.in, click "Apply Online Mutation", and create an account using your mobile number and OTP.',
      },
      {
        step: 2,
        title: 'Select District & Circle',
        description: 'Log in, choose your District and Circle (Anchal), and click "Apply New Mutation".',
      },
      {
        step: 3,
        title: 'Enter Applicant & Buyer Details',
        description: 'Fill in applicant name, father/husband name, mobile number, email, and current address.',
      },
      {
        step: 4,
        title: 'Enter Land & Deed Details',
        description: 'Provide Deed number, Deed date, Registry office name, Halka, Mauza, Khata, Khesra, and land area.',
      },
      {
        step: 5,
        title: 'Upload Supporting Document',
        description: 'Upload a clear scanned PDF of the registered Kewala (Sale Deed) within the permitted file size limit.',
      },
      {
        step: 6,
        title: 'Submit & Note Case Number',
        description: 'Submit the final application and securely save the generated Case Number (Vaad Sankhya).',
      },
    ],
    offlineProcess: [
      'After online submission, the concerned Halka Karamchari (Revenue Staff) conducts field verification.',
      'Based on the Karamchari’s report, the Circle Officer (CO) issues the Correction Slip (Shuddhi Patra).',
    ],
    statusCheckGuide: [
      'Click "View Dakhil-Kharij Application Status" on the Bihar Bhumi portal.',
      'Select your District, Circle, and Financial Year.',
      'Enter Case Number or Deed Number and click Search.',
      'View current status (Karamchari verification, Objection, or Approved) immediately.',
    ],
    downloadGuide: [
      'Once mutation is approved, click "View Correction Slip" on the same status page.',
      'Download the digitally signed Correction Slip confirming your new Jamabandi entry.',
    ],
    correctionOrRenewalGuide: [
      'For clerical errors in name, Khata, Khesra, or area in Jamabandi records, apply online via the "Parimarjan Plus" portal.',
    ],
    commonMistakesAndTips: [
      'Scan all pages of the Sale Deed sequentially and legibly; blurry scans lead to rejection.',
      'Select the exact Halka and Mauza to prevent the file from routing to the wrong official.',
      'Always verify the seller’s name in "View Jamabandi Register" on the portal before purchasing land.',
    ],
    importantDates: [
      { label: 'Uncontested Mutation Timeline', dateOrStatus: '35 Working Days' },
      { label: 'Contested / Objection Timeline', dateOrStatus: '75 Working Days' },
      { label: 'Land Tax Financial Year', dateOrStatus: 'Update annually by 31 March' },
    ],
    faqs: [
      {
        question: 'Can a land tax receipt be generated without completing Mutation?',
        answer: 'No. After purchasing land, government receipts cannot be issued in the buyer’s name until Dakhil-Kharij (Mutation) is approved.',
      },
      {
        question: 'Which portal is used to fix old errors in Jamabandi?',
        answer: 'Use the Bihar Government’s "Parimarjan Plus" portal to request online corrections in digitized Jamabandi records.',
      },
    ],
    officialSources: [
      { title: 'Revenue & Land Reforms Dept, Bihar', url: 'https://biharbhumi.bihar.gov.in/' },
      { title: 'Government of Bihar Official Portal', url: 'https://state.bihar.gov.in/' },
    ],
  },

  'pm-kisan-samman-nidhi-guide': {
    department: 'Ministry of Agriculture & Farmers Welfare, Government of India',
    shortSummary: 'Complete process for PM-KISAN ₹2,000 four-monthly installments, reasons for stalled installments, Aadhaar e-KYC, and bank seeding fixes.',
    whatIs: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a 100% Central Sector scheme by the Government of India providing ₹6,000 annual financial assistance to eligible landholding farmer families in three equal ₹2,000 installments directly into Aadhaar-linked bank accounts via DBT.',
    purposeAndBenefits: [
      'Timely cash support for seeds, fertilizers, pesticides, and agricultural expenses.',
      'Eliminates dependence on moneylenders and intermediaries.',
      'Transparent ₹2,000 transfer every 4 months directly to the farmer’s bank account without deductions.',
    ],
    eligibility: [
      'All landholding farmer families holding valid cultivable land records in their name.',
      'Bank account must be linked with Aadhaar and NPCI / DBT enabled.',
      'Active e-KYC must be completed on the portal.',
    ],
    ineligibility: [
      'All Institutional Land Holders.',
      'Constitutional post holders, former/current Ministers, MPs, MLAs, Mayors, and District Panchayat Chairpersons.',
      'Serving or retired regular Central/State Govt officers (excluding Class IV / MTS staff).',
      'Retired pensioners receiving monthly pension of ₹10,000 or more.',
      'Individuals who paid Income Tax in the previous assessment year.',
      'Registered Doctors, Engineers, Lawyers, Chartered Accountants, and Architects.',
    ],
    documentsRequired: [
      'Aadhaar Card.',
      'Updated land ownership records (Jamabandi or Khatiyan copy).',
      'Active Aadhaar-linked bank account number and IFSC code.',
      'Aadhaar-linked mobile number (for OTP verification).',
    ],
    fees: {
      officialFee: 'Self-Registration & OTP e-KYC on Portal: Free (₹0)',
      note: 'Biometric e-KYC at a CSC centre may involve a nominal prescribed service fee (approx. ₹15).',
      paymentMode: 'Free',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Open Official PM-KISAN Website',
        description: 'Visit pmkisan.gov.in and navigate to the "Farmers Corner" section.',
      },
      {
        step: 2,
        title: 'Select New Farmer Registration',
        description: 'Choose "Rural Farmer Registration" or "Urban Farmer Registration" as applicable.',
      },
      {
        step: 3,
        title: 'Enter Aadhaar & Mobile Number',
        description: 'Enter your 12-digit Aadhaar number, mobile number, state, captcha code, and click "Get OTP".',
      },
      {
        step: 4,
        title: 'Fill Personal & Land Details',
        description: 'Select district, sub-district, block, and village. Enter Khata number, Khasra number, area, and land registration date.',
      },
      {
        step: 5,
        title: 'Upload Land Document',
        description: 'Upload a clear PDF of your land receipt or Jamabandi and submit the registration form.',
      },
    ],
    statusCheckGuide: [
      'Click "Know Your Status" on pmkisan.gov.in.',
      'Enter your PM-KISAN Registration Number (or retrieve it using "Know Your Registration Number" via mobile/Aadhaar).',
      'Enter captcha and click "Get Data".',
      'Verify three key statuses: 1. e-KYC Status (YES), 2. Land Seeding (YES), and 3. Aadhaar Bank Account Seeding Status (YES).',
    ],
    downloadGuide: [
      'Farmers can view and download their installment payment history and acknowledgement slip directly from the portal.',
    ],
    correctionOrRenewalGuide: [
      'If your name mismatches Aadhaar, use the "Name Correction as per Aadhaar" option on the portal.',
      'If your bank account is inactive or DBT-disabled, open an Aadhaar-seeded account at India Post Payments Bank (IPPB).',
    ],
    commonMistakesAndTips: [
      'Linking Aadhaar at a bank branch is separate from enabling NPCI DBT mapping — explicitly request "DBT Seeding" at your bank.',
      'If Land Seeding shows NO, contact your block Agriculture Coordinator with land documents for verification.',
    ],
    importantDates: [
      { label: 'Installment Frequency', dateOrStatus: 'Every 4 Months (3 Times a Year)' },
      { label: 'Mandatory e-KYC Status', dateOrStatus: 'Required for all beneficiaries' },
      { label: 'Verification Status', dateOrStatus: 'Active on Portal' },
    ],
    faqs: [
      {
        question: 'If both husband and wife own land, will both receive ₹6,000?',
        answer: 'No. Under scheme guidelines, husband, wife, and minor children constitute a single farmer family, and only one eligible member can receive the benefit.',
      },
      {
        question: 'How can I complete e-KYC from my mobile phone?',
        answer: 'Click "e-KYC" under Farmers Corner on pmkisan.gov.in, enter your Aadhaar number, and verify the 6-digit OTP sent to your Aadhaar-linked mobile number.',
      },
    ],
    officialSources: [
      { title: 'PM-KISAN Official Portal', url: 'https://pmkisan.gov.in/' },
      { title: 'Ministry of Agriculture & Farmers Welfare', url: 'https://agricoop.nic.in/' },
    ],
  },

  'ayushman-bharat-card-guide': {
    department: 'National Health Authority (NHA), Ministry of Health & Family Welfare',
    shortSummary: 'Simple guide to self-create and download your Ayushman Card for ₹5 Lakh annual cashless hospital treatment across listed government and private hospitals.',
    whatIs: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is the world’s largest government health assurance scheme. Every member of an eligible family receives a dedicated Ayushman Card providing cashless treatment up to ₹5,00,000 per family per year.',
    purposeAndBenefits: [
      'Covers medicines, diagnostics, and meals for 3 days pre-hospitalization and 15 days post-hospitalization.',
      'Cashless treatment across 1,949+ procedures including heart surgery, cancer, neurology, kidney dialysis, and orthopedics.',
      'Nationwide portability across any empanelled government or private hospital in India.',
      'No restriction on family size or member age.',
    ],
    eligibility: [
      'Deprived rural and urban families identified in SECC 2011 data.',
      'Eligible Ration Card holders under the National Food Security Act (NFSA).',
      'All senior citizens aged 70 years and above under Ayushman Vay Vandana Yojana regardless of income.',
      'Additional Antyodaya and priority households notified by respective state governments.',
    ],
    ineligibility: [
      'Income tax payers and government employees already covered under CGHS / ECHS schemes (70+ seniors receive special separate coverage).',
    ],
    documentsRequired: [
      'Ration Card number or Family ID.',
      'Aadhaar Card.',
      'Active mobile number linked to Aadhaar (for OTP).',
    ],
    fees: {
      officialFee: '₹0 (Completely Free)',
      note: 'There is no government fee to create or download an Ayushman Card from the official portal.',
      paymentMode: 'Free',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Open NHA Beneficiary Portal',
        description: 'Visit beneficiary.nha.gov.in, select "Beneficiary", enter your mobile number, and log in via OTP.',
      },
      {
        step: 2,
        title: 'Search Family Eligibility',
        description: 'Choose Scheme: PMJAY, State (e.g., Bihar), Sub-Scheme (Ration Card), and Search By "Ration Card No" or "Aadhaar No".',
      },
      {
        step: 3,
        title: 'View Family Member List',
        description: 'All family members appear in results. Unverified members show an orange "Action / eKYC" button.',
      },
      {
        step: 4,
        title: 'Complete e-KYC Verification',
        description: 'Click "e-KYC" next to the member name and authenticate using Aadhaar OTP, fingerprint, or face authentication.',
      },
      {
        step: 5,
        title: 'Capture Live Photo & Submit',
        description: 'Capture a live camera photo of the beneficiary, verify mobile number and PIN code, and submit.',
      },
      {
        step: 6,
        title: 'Download Ayushman Card',
        description: 'Once verified and approved, click "Download Card" to save your PVC-sized digital Ayushman Card PDF.',
      },
    ],
    offlineProcess: [
      'Visit the "Ayushman Mitra" desk at your nearest government hospital or empanelled private hospital.',
      'Present your Ration Card and Aadhaar Card for biometric verification and instant card generation.',
    ],
    statusCheckGuide: [
      'Log in to beneficiary.nha.gov.in using your Ration Card number to check member statuses (Verified / Unverified / Approved).',
    ],
    downloadGuide: [
      'Log in and click the "Download Card" icon next to an approved member’s name.',
      'After OTP authentication, download the colour PDF card ready for lamination.',
    ],
    correctionOrRenewalGuide: [
      'Name and DOB on the Ayushman Card sync directly from Aadhaar. Update Aadhaar first, then select "Redo e-KYC" on the portal.',
    ],
    commonMistakesAndTips: [
      'Large name mismatches between Ration Card and Aadhaar can lower the e-KYC match score.',
      'Ensure you submit your Ayushman Card at the hospital helpdesk within 24 hours of admission.',
    ],
    importantDates: [
      { label: 'Card Validity', dateOrStatus: 'Lifetime (Annually Renewed Coverage)' },
      { label: 'Annual Treatment Limit', dateOrStatus: '₹5,00,000 per family per year' },
      { label: 'Senior Citizens (70+) Top-Up', dateOrStatus: 'Dedicated ₹5,00,000 cover' },
    ],
    faqs: [
      {
        question: 'Can a hospital ask for advance payment from an Ayushman cardholder?',
        answer: 'No. Ayushman Bharat is 100% cashless and paperless. Demanding money for covered packages is illegal. Call helpline 14555 to report.',
      },
      {
        question: 'Are maternity delivery expenses covered under the Ayushman Card?',
        answer: 'Yes, both normal deliveries and cesarean operations are included in Ayushman packages.',
      },
    ],
    officialSources: [
      { title: 'National Health Authority (NHA)', url: 'https://beneficiary.nha.gov.in/' },
      { title: 'PMJAY Official Information', url: 'https://pmjay.gov.in/' },
    ],
  },

  'aadhaar-card-address-update': {
    department: 'Unique Identification Authority of India (UIDAI)',
    shortSummary: 'Official guide to update your Aadhaar address from home via myAadhaar by uploading valid Proof of Address or via Head of Family (HOF) consent.',
    whatIs: 'UIDAI’s myAadhaar portal allows residents to update their current address online from home in two ways: 1. By uploading a valid Proof of Address document in your own name, or 2. Without personal documents using a Head of Family (HOF) Aadhaar and consent.',
    purposeAndBenefits: [
      'Keep your address updated for banking, passport, driving licence, and government services after relocation or marriage.',
      'Smooth KYC verification across institutions.',
      'Secure online update without standing in queues at Aadhaar Seva Kendras.',
    ],
    eligibility: [
      'Any Indian resident holding a valid 12-digit Aadhaar number.',
      'An active mobile number must be linked with Aadhaar for OTP login.',
    ],
    ineligibility: [
      'Online address update is not possible if your mobile number is not linked to Aadhaar; visit an Aadhaar Kendra first.',
      'Name, DOB, gender, and biometrics (photo/fingerprints) cannot be updated online; they require visiting a centre.',
    ],
    documentsRequired: [
      'Valid Proof of Address (POA): Ration Card, Voter ID, Electricity Bill (within 3 months), Bank Passbook, Passport, or Registered Rent Agreement.',
      'If lacking personal POA: Head of Family (father/husband/mother) Aadhaar and Proof of Relationship for HOF-based update.',
    ],
    fees: {
      officialFee: '₹50 (Fifty Rupees)',
      note: 'UIDAI’s official online fee for address update is ₹50 paid via the online payment gateway.',
      paymentMode: 'UPI / Debit Card / Credit Card / Net Banking',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Log in to myAadhaar Portal',
        description: 'Visit myaadhaar.uidai.gov.in, click "Login", enter your 12-digit Aadhaar number and captcha, and verify via OTP.',
      },
      {
        step: 2,
        title: 'Select Address Update',
        description: 'Click the "Address Update" card on the dashboard and choose "Update Aadhaar Online".',
      },
      {
        step: 3,
        title: 'Enter New Address',
        description: 'Enter Care of (Father/Husband name), House No., Street, Locality, Landmark, PIN Code, State, District, Village/Town, and Post Office.',
      },
      {
        step: 4,
        title: 'Upload Proof of Address',
        description: 'Choose your valid POA document type from the dropdown (e.g., Voter ID) and upload a clear colour scan in PDF or JPG.',
      },
      {
        step: 5,
        title: 'Preview & Pay ₹50 Fee',
        description: 'Verify both English and regional Hindi spellings of the address, then pay the ₹50 official fee online.',
      },
      {
        step: 6,
        title: 'Download SRN Receipt',
        description: 'Download the acknowledgement receipt containing your Service Request Number (SRN) after successful payment.',
      },
    ],
    offlineProcess: [
      'If mobile is unlinked, find the nearest centre via "Locate Enrolment Center" on uidai.gov.in.',
      'Fill the Aadhaar Update form, verify biometrics at the centre, pay ₹50, and collect your acknowledgement slip.',
    ],
    statusCheckGuide: [
      'Click "Check Enrolment & Update Status" on myaadhaar.uidai.gov.in.',
      'Enter the 14-digit or 28-digit SRN / URN number and captcha.',
      'View current progress (Draft, Verification Stage, Validated, Completed).',
    ],
    downloadGuide: [
      'Once status shows Completed, use "Download Aadhaar" to save your updated e-Aadhaar PDF.',
      'PDF password is the first 4 letters of your name in CAPITAL + birth year (e.g., RAMA1995).',
    ],
    correctionOrRenewalGuide: [
      'If rejected due to document clarity, check the rejection reason and submit a fresh request with a legible valid POA.',
    ],
    commonMistakesAndTips: [
      'Ensure all four corners of the uploaded document are visible and text is crisp and readable.',
      'Carefully review the auto-translated Hindi text when typing the address in English and fix any spelling mismatches.',
    ],
    importantDates: [
      { label: 'Processing Time', dateOrStatus: 'Typically 3 to 7 Working Days' },
      { label: 'Official Fee', dateOrStatus: '₹50' },
    ],
    faqs: [
      {
        question: 'Can I update my mobile number in Aadhaar online from home?',
        answer: 'No. For security reasons, mobile number, fingerprint, and photo updates require in-person biometric authentication at an Aadhaar Seva Kendra.',
      },
      {
        question: 'What if I have no address proof in my own name?',
        answer: 'You can use the "Head of Family (HOF)" option with your father’s or spouse’s Aadhaar and a relationship document like Ration Card or Marriage Certificate.',
      },
    ],
    officialSources: [
      { title: 'UIDAI myAadhaar Official Portal', url: 'https://myaadhaar.uidai.gov.in/' },
      { title: 'UIDAI Support & Helpdesk', url: 'https://uidai.gov.in/' },
    ],
  },

  'instant-epan-application-guide': {
    department: 'Income Tax Department, Ministry of Finance, Govt. of India',
    shortSummary: 'Official guide to get a legally valid digital PAN Card free (₹0) within minutes on the Income Tax e-Filing portal without any paper forms.',
    whatIs: 'Instant e-PAN is a digital facility by the Income Tax Department allowing citizens who do not already hold a PAN to generate a valid digital PAN PDF free within minutes using only their Aadhaar number and Aadhaar-linked mobile OTP.',
    purposeAndBenefits: [
      'Immediate PAN availability for opening bank accounts, scholarships, stock trading, and financial transactions.',
      'No paper forms or CSC visits required.',
      '100% legally valid on par with a physical plastic PAN card.',
    ],
    eligibility: [
      'Applicant must never have been allotted a PAN earlier.',
      'Applicant must be 18 years or older (not for minors).',
      'Full date of birth (DD/MM/YYYY) must be present on the Aadhaar Card.',
      'Active mobile number must be linked to Aadhaar.',
    ],
    ineligibility: [
      'Existing PAN holders cannot apply (holding more than one PAN is illegal and carries up to ₹10,000 penalty).',
    ],
    documentsRequired: [
      'Aadhaar Card Number only (no document scan or photo upload needed; details sync from Aadhaar).',
      'Aadhaar-linked mobile number.',
    ],
    fees: {
      officialFee: '₹0 (Completely Free)',
      note: 'Downloading e-PAN on the Income Tax portal is 100% free. A physical plastic card can later be ordered from NSDL/UTIITSL for ₹50.',
      paymentMode: 'Free',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Visit the e-Filing Portal',
        description: 'Open incometax.gov.in and click "Instant e-PAN" under Quick Links.',
      },
      {
        step: 2,
        title: 'Select Get New e-PAN',
        description: 'Click "Get New e-PAN", enter your 12-digit Aadhaar number, and accept the declaration.',
      },
      {
        step: 3,
        title: 'Verify Aadhaar OTP',
        description: 'Enter the 6-digit OTP sent to your Aadhaar-linked mobile and consent to UIDAI data validation.',
      },
      {
        step: 4,
        title: 'Confirm Aadhaar Details',
        description: 'Verify your name, date of birth, gender, and photo fetched from Aadhaar, optionally link email, and submit.',
      },
      {
        step: 5,
        title: 'Save Acknowledgement Number',
        description: 'Note down the 15-digit Acknowledgement Number displayed upon submission.',
      },
    ],
    statusCheckGuide: [
      'Go to the Instant e-PAN page and click Continue under "Check Status / Download PAN".',
      'Enter your Aadhaar number and verify OTP.',
      'Check allocation status ("PAN allotted successfully").',
    ],
    downloadGuide: [
      'Click "Download e-PAN" on the status screen to save the PDF.',
      'The PDF password is your date of birth in DDMMYYYY format without spaces or slashes.',
    ],
    correctionOrRenewalGuide: [
      'e-PAN does not display the father’s name. If you need a physical card with your father’s name, submit a "Reprint / Change Request" on NSDL/Protean for ₹50.',
    ],
    commonMistakesAndTips: [
      'If Aadhaar only shows your birth year (e.g., 1990), update your full DOB in Aadhaar first before applying.',
      'An Instant e-PAN is automatically linked with your Aadhaar.',
    ],
    importantDates: [
      { label: 'Processing Time', dateOrStatus: '10 Minutes to 24 Hours' },
      { label: 'Official Fee', dateOrStatus: '₹0 (Free)' },
    ],
    faqs: [
      {
        question: 'Can I open a bank account with an Instant e-PAN card?',
        answer: 'Yes. As per RBI guidelines, digitally signed e-PAN is 100% valid across all public and private banks, passport offices, and institutions.',
      },
      {
        question: 'Is a physical plastic PAN card delivered by post automatically?',
        answer: 'No, this is a digital service only. You can order a physical card separately for ₹50 via Protean (NSDL) or UTIITSL.',
      },
    ],
    officialSources: [
      { title: 'Income Tax Department e-Filing Portal', url: 'https://www.incometax.gov.in/' },
    ],
  },

  'bihar-student-credit-card-scheme': {
    department: 'Education Dept / Planning & Development Dept, Government of Bihar',
    shortSummary: 'Concessional or 1%–4% interest education loan up to ₹4 Lakh for 12th-pass Bihar students pursuing B.Tech, MBBS, B.Sc, B.Ed, Polytechnic & higher studies.',
    whatIs: 'Under Mukhyamantri Saat Nischay Yojana ("Aarthik Hal, Yuvaon Ko Bal"), the Bihar Student Credit Card Scheme (BSCC) helps poor and middle-class students pursue higher education with a government-guaranteed education loan up to ₹4 Lakh.',
    purposeAndBenefits: [
      'Loan up to ₹4,00,000 for recognized degree, diploma, and technical courses.',
      'Only 4% simple interest for male students, and 1% simple interest for female, Divyang, and transgender students.',
      'Moratorium period: no EMI repayment until 1 year after course completion or upon getting employment.',
      'Covers tuition fees, hostel expenses, books, and laptop costs.',
    ],
    eligibility: [
      'Applicant must be a permanent resident of Bihar.',
      'Must have passed 12th (Intermediate) from a recognized institution in Bihar or bordering states.',
      'Maximum age 25 years at application time (up to 30 years for PG courses).',
      'Institution must be approved by NAAC / NBA or recognized Central/State regulatory bodies.',
    ],
    ineligibility: [
      'Students enrolled in unrecognized or unaccredited colleges.',
      'Applicants who have already completed a degree at the same level.',
    ],
    documentsRequired: [
      'Aadhaar Card of student and co-applicant (parent/guardian).',
      '10th and 12th Marksheets and Certificates.',
      'Admission Letter / Bonafide Certificate from the college.',
      'Detailed College Fee Structure on official letterhead.',
      'Bank Passbook copies of applicant and co-applicant.',
      'Residence Certificate and Passport Size Photos.',
    ],
    fees: {
      officialFee: 'Application Process Completely Free (₹0)',
      note: 'No fee is charged on the MNSSBY portal or at DRCC offices.',
      paymentMode: 'Free',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Register on MNSSBY Portal',
        description: 'Visit 7nishchay-yuvaupmission.bihar.gov.in, click "New Applicant Registration", and verify mobile & email OTP.',
      },
      {
        step: 2,
        title: 'Log In & Select BSCC Scheme',
        description: 'Log in with your credentials and choose "BSCC (Bihar Student Credit Card)".',
      },
      {
        step: 3,
        title: 'Fill Personal & Academic Details',
        description: 'Enter 10th/12th roll numbers, board, college name, course, and fee schedule details.',
      },
      {
        step: 4,
        title: 'Upload Required Documents',
        description: 'Upload scans of admission slip, fee structure, Aadhaar cards, and bank passbooks.',
      },
      {
        step: 5,
        title: 'Get DRCC Appointment Slip',
        description: 'Upon submission, receive an appointment date and time to visit your home district’s DRCC.',
      },
      {
        step: 6,
        title: 'Physical Verification at DRCC',
        description: 'Visit the DRCC with original documents. After verification, funds are sanctioned and transferred directly to the college account.',
      },
    ],
    statusCheckGuide: [
      'Click "Application Status" on the portal homepage.',
      'Enter your Registration Number or Aadhaar Number and Date of Birth.',
      'Track approval stages and loan disbursement status.',
    ],
    correctionOrRenewalGuide: [
      'To release subsequent semester/annual installments, upload previous semester marksheets and the college demand letter on the portal.',
    ],
    commonMistakesAndTips: [
      'Always upload the fee structure on official college letterhead signed and stamped by the Principal or Finance Officer.',
      'Ensure the co-applicant parent’s bank account is active.',
    ],
    importantDates: [
      { label: 'Application Window', dateOrStatus: 'Open year-round upon admission' },
      { label: 'Loan Limit', dateOrStatus: 'Up to ₹4,00,000' },
      { label: 'Interest Rate', dateOrStatus: '4% for Male, 1% for Female / Divyang' },
    ],
    faqs: [
      {
        question: 'If a student does not get a job after graduation, is recovery paused?',
        answer: 'Yes. Under scheme rules, loan recovery stays deferred until the student secures employment or self-employment by submitting an affidavit.',
      },
      {
        question: 'Can Bihar students studying in colleges outside Bihar apply?',
        answer: 'Yes, provided the student is a Bihar resident and the college is recognized by regulatory bodies like AICTE, UGC, NAAC, or NBA.',
      },
    ],
    officialSources: [
      { title: 'Bihar 7 Nischay Yuva Mission Portal', url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/' },
      { title: 'Education Department, Govt. of Bihar', url: 'https://state.bihar.gov.in/educationbihar/' },
    ],
  },

  'bihar-ration-card-epds': {
    department: 'Food & Consumer Protection Department, Government of Bihar',
    shortSummary: 'Complete guide to apply online for Antyodaya & Priority Household (PHH) Ration Card in Bihar, add family members, and verify e-KYC.',
    whatIs: 'The Food & Consumer Protection Department of Bihar issues Ration Cards under the National Food Security Act (NFSA) to provide free/subsidized foodgrains (rice and wheat) to eligible poor households. New cards are applied online through the RCMS portal.',
    purposeAndBenefits: [
      '5 kg free foodgrain per eligible member monthly under PMGKAY.',
      'Primary eligibility basis for Ayushman Bharat ₹5 Lakh health coverage.',
      'Widely accepted as citizen identity and residence proof.',
    ],
    eligibility: [
      'Applicant must be a permanent resident of Bihar.',
      'The eldest adult woman (18+ years) of the family must be designated Head of Family.',
      'The household must not already hold an active Ration Card.',
    ],
    ineligibility: [
      'Households owning four-wheelers, pucca three-room+ houses (per exclusion criteria), or over 5 acres of irrigated land.',
      'Households with an income tax payer or regular government employee.',
    ],
    documentsRequired: [
      'Aadhaar Card copies of all family members.',
      'Bank Passbook of the female head of household (showing clear IFSC code).',
      'Combined passport-size group photograph of the whole family.',
      'Residence Certificate and Income Certificate.',
      'Active mobile number.',
    ],
    fees: {
      officialFee: 'Free (₹0)',
      note: 'There is no government fee for Ration Card applications.',
      paymentMode: 'Free',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Open RCMS Online Portal',
        description: 'Visit epds.bihar.gov.in and click "Apply for Online Ration Card".',
      },
      {
        step: 2,
        title: 'Log in via Jan Parichay / MeriPehchaan',
        description: 'Sign in using your mobile number and OTP on the MeriPehchaan SSO portal.',
      },
      {
        step: 3,
        title: 'Select Rural or Urban Area',
        description: 'Choose Rural for village areas or Urban for town/city residences.',
      },
      {
        step: 4,
        title: 'Fill Head of Family Details',
        description: 'Enter the female family head’s name, father/husband name, caste, occupation, income, and bank account details.',
      },
      {
        step: 5,
        title: 'Add Other Family Members',
        description: 'Click "Add Member" to enter spouse, children, and dependents along with their Aadhaar numbers.',
      },
      {
        step: 6,
        title: 'Upload Documents & Submit',
        description: 'Upload the combined PDF of family group photo, Aadhaar cards, and bank passbook, then submit.',
      },
    ],
    statusCheckGuide: [
      'Go to "RC Print" or "Application Status" on the EPDS portal.',
      'Select District, Subdivision, and enter your acknowledgement number to view approval status at the SDO level.',
    ],
    commonMistakesAndTips: [
      'Verify that spellings of all members’ names match their Aadhaar Cards accurately.',
      'Ensure the bank passbook is active and clearly readable.',
    ],
    importantDates: [
      { label: 'Application Window', dateOrStatus: 'Available online year-round' },
      { label: 'Ration e-KYC Status', dateOrStatus: 'Mandatory via FPS dealer e-PoS machine' },
    ],
    faqs: [
      {
        question: 'How do I add a newborn child to an existing Ration Card?',
        answer: 'Obtain the child’s Birth Certificate and Aadhaar Card, log in to the RCMS portal, and submit an "Add Member" request.',
      },
    ],
    officialSources: [
      { title: 'Bihar Food & Consumer Protection Dept', url: 'http://epds.bihar.gov.in/' },
    ],
  },

  'national-scholarship-portal-guide': {
    department: 'Ministry of Education / Ministry of Social Justice, Govt. of India',
    shortSummary: 'India’s sole unified national portal for all Central and State scholarships from Class 1 to college, professional courses, and research.',
    whatIs: 'The National Scholarship Portal (NSP) is a Government of India single-window platform delivering scholarships from multiple Central Ministries and State departments directly into students’ bank accounts via DBT.',
    purposeAndBenefits: [
      'Financial aid for EWS, Minority, SC, ST, OBC, and Divyang students.',
      'Covers Pre-Matric (Class 1–10), Post-Matric (Class 11–12 & College), and Top-Class professional programs.',
      'Transparent selection and direct bank transfers.',
    ],
    eligibility: [
      'Minimum required marks in previous exam as specified by the scheme (typically 50% or higher).',
      'Annual family income within prescribed ceiling (typically ₹1.5 Lakh to ₹2.5 Lakh).',
      'Student’s school/college must be registered on NSP with a valid AISHE/DISE code.',
    ],
    ineligibility: [
      'Students availing more than one government scholarship concurrently are ineligible.',
    ],
    documentsRequired: [
      'Student’s Aadhaar Card or Aadhaar Enrolment slip.',
      'Latest Income Certificate issued by competent authority.',
      'Caste Certificate (where applicable).',
      'Previous class marksheet.',
      'Current session fee receipt and Bonafide Certificate.',
      'Student’s Aadhaar-seeded bank account.',
    ],
    fees: {
      officialFee: 'Free (₹0)',
      note: 'There is no government fee to apply on the NSP portal.',
      paymentMode: 'Free',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Complete OTR (One Time Registration) on NSP',
        description: 'Visit scholarships.gov.in and generate your OTR ID using Face Authentication or Aadhaar OTP.',
      },
      {
        step: 2,
        title: 'Log In & Choose Scheme',
        description: 'Log in with OTR number and password to view schemes matching your class, category, and income.',
      },
      {
        step: 3,
        title: 'Enter Academic Details',
        description: 'Fill in school/college name, roll number, admission year, and marks obtained.',
      },
      {
        step: 4,
        title: 'Upload Required Documents',
        description: 'Upload scans of Income, Caste, and Bonafide certificates.',
      },
      {
        step: 5,
        title: 'Final Submit & Printout',
        description: 'Print the final submitted form and submit it to your school/college Nodal Officer for institute verification.',
      },
    ],
    statusCheckGuide: [
      'Log in to NSP with your OTR and click "Track Application Status" to check Institute, District, and Ministry verification.',
    ],
    commonMistakesAndTips: [
      'Your bank account must have Aadhaar DBT seeding active; simply entering the account number is not enough.',
      'Submit the hard copy to your college/school Nodal Officer before the deadline so verification is not missed.',
    ],
    importantDates: [
      { label: 'Application Cycle', dateOrStatus: 'Dates announced each academic session on portal' },
      { label: 'Biometric Verification', dateOrStatus: 'Mandatory at institution level' },
    ],
    faqs: [
      {
        question: 'What happens if my college fails to verify the application in time?',
        answer: 'Applications unverified by the institute before the closing date are automatically rejected, so follow up with your Nodal Teacher promptly.',
      },
    ],
    officialSources: [
      { title: 'National Scholarship Portal', url: 'https://scholarships.gov.in/' },
    ],
  },

  'parivahan-driving-licence-guide': {
    department: 'Ministry of Road Transport and Highways (MoRTH), Govt. of India',
    shortSummary: 'Official fee and rules for taking the contactless online Learner Licence test from home via Aadhaar and applying for a Permanent Driving Licence.',
    whatIs: 'Parivahan Sarathi (parivahan.gov.in) is the Government of India’s national portal enabling citizens to take the online Learner Licence (LL) test from home without visiting an RTO and book slots for Permanent Driving Licences.',
    purposeAndBenefits: [
      'Take the online LL test from home via Aadhaar-based authentication.',
      'Zero middlemen — pay transparent government fees directly.',
      'Download digital Learner Licence immediately to begin legal driving practice.',
    ],
    eligibility: [
      'Minimum 16 years for gearless two-wheelers up to 50cc (with guardian consent).',
      'Minimum 18 years for geared two-wheelers and Light Motor Vehicles (Car/LMV).',
      'Minimum 20 years plus 1-year-old LMV licence for commercial transport vehicles.',
    ],
    ineligibility: [
      'Medically unfit individuals unable to drive safely.',
    ],
    documentsRequired: [
      'Age Proof (10th Marksheet, PAN Card, or Birth Certificate).',
      'Address Proof (Aadhaar Card, Electricity Bill, or Voter ID).',
      'Form 1 (Medical Self-Declaration) or Form 1A signed by a doctor if aged 40+.',
      'Passport-size photo and digital signature.',
    ],
    fees: {
      officialFee: 'Learner Licence: ₹150 + Test Fee ₹50 = ₹200 Total (per class)',
      note: 'Permanent DL fee approx. ₹200 + Smart Card fee ₹200 (minor variations possible across states).',
      paymentMode: 'UPI / Net Banking / Debit Card on Portal',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Select State on Sarathi Portal',
        description: 'Visit sarathi.parivahan.gov.in and select your state (e.g., Bihar / Uttar Pradesh).',
      },
      {
        step: 2,
        title: 'Choose Apply for Learner Licence',
        description: 'Click "Apply for Learner Licence" and select "Submit via Aadhaar Authentication" for contactless processing.',
      },
      {
        step: 3,
        title: 'Authenticate via Aadhaar',
        description: 'Enter Aadhaar number and mobile OTP to auto-fetch your name, address, and photo.',
      },
      {
        step: 4,
        title: 'Choose Vehicle Class',
        description: 'Select Motorcycle with Gear (MCWG), Car (LMV), or both.',
      },
      {
        step: 5,
        title: 'Pay Official Government Fee',
        description: 'Pay the prescribed fee online and download the payment receipt.',
      },
      {
        step: 6,
        title: 'Take Online Test & Download LL',
        description: 'Watch the road safety tutorial, verify face via webcam, pass the 15-question online test, and download your Learner Licence immediately.',
      },
    ],
    statusCheckGuide: [
      'Click "Application Status" on Sarathi portal and enter Application Number and Date of Birth to track progress.',
    ],
    downloadGuide: [
      'After passing the test, go to "Print Learner Licence (Form 3)" and download via OTP.',
    ],
    commonMistakesAndTips: [
      'Ensure bright lighting on your face and keep looking at the webcam during the online test.',
      'Book your Permanent Driving Licence test slot at the RTO between 30 days and 180 days after Learner Licence issuance.',
    ],
    importantDates: [
      { label: 'Learner Licence Validity', dateOrStatus: '6 Months (180 Days) from issue' },
      { label: 'Permanent DL Eligibility', dateOrStatus: 'After 30 days of holding LL' },
    ],
    faqs: [
      {
        question: 'Do I need to visit the RTO for an Aadhaar-based Learner Licence?',
        answer: 'No. If your mobile number is linked to Aadhaar and you select Aadhaar authentication, you can take the test at home and download the LL online.',
      },
    ],
    officialSources: [
      { title: 'Ministry of Road Transport & Highways (Parivahan)', url: 'https://parivahan.gov.in/' },
    ],
  },

  'pm-awas-yojana-gramin-urban': {
    department: 'Ministry of Rural Development / Ministry of Housing & Urban Affairs, GoI',
    shortSummary: 'Verified details on financial assistance for building pucca houses for homeless & kutcha-house families and checking your name in the beneficiary list.',
    whatIs: 'Pradhan Mantri Awas Yojana (PMAY) aims to provide pucca houses with basic amenities to all homeless families and households living in kutcha or dilapidated houses. Under PMAY-Gramin, ₹1,20,000 (₹1,30,000 in hilly areas) plus ₹12,000 for toilet construction under Swachh Bharat Mission is provided.',
    purposeAndBenefits: [
      '₹1.20 Lakh direct financial support in rural areas transferred via DBT in 3 installments.',
      '90–95 person-days of unskilled MGNREGA wage support (approx. ₹20,000+ extra).',
      'Convergence with Ujjwala free LPG connection and Saubhagya electricity connection.',
      'House ownership registered in the name of the female head or jointly.',
    ],
    eligibility: [
      'Family must not own a pucca house anywhere in India.',
      'Homeless families or those living in 1–2 room kutcha wall/kutcha roof houses.',
      'Name must be listed in Awaas+ survey or SECC 2011 list.',
    ],
    ineligibility: [
      'Households owning motorized 3/4 wheelers or Kisan Credit Cards with ₹50,000+ limit.',
      'Households with a government employee or income tax payer.',
    ],
    documentsRequired: [
      'Aadhaar Cards of all family members.',
      'Active Aadhaar-linked Bank Passbook.',
      'MGNREGA Job Card Number.',
      'Clear geo-tagged photo of current kutcha house.',
      'Active mobile number.',
    ],
    fees: {
      officialFee: '₹0 (Completely Free)',
      note: 'Do not pay any middleman or official. Selection is strictly based on the verified transparent list.',
      paymentMode: 'Free',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Check Name in Housing List',
        description: 'Visit pmayg.nic.in > Stakeholders > IAY/PMAYG Beneficiary and enter your registration number to view details.',
      },
      {
        step: 2,
        title: 'Contact Gram Panchayat & Awas Sahayak',
        description: 'New rural housing registrations are carried out by the Gram Panchayat Awas Sahayak via AwaasSoft geo-tagging.',
      },
      {
        step: 3,
        title: 'Document & Bank Account Verification',
        description: 'Aadhaar and bank account details are verified through the PFMS system.',
      },
      {
        step: 4,
        title: 'First Installment Release (₹40,000)',
        description: 'After Sanction Order issuance, the first installment for foundation digging is transferred directly to your bank.',
      },
      {
        step: 5,
        title: 'Geo-Tagging & Subsequent Installments',
        description: 'Second installment (₹40,000) is released at lintel level and third installment (₹40,000) after roof casting and completion.',
      },
    ],
    statusCheckGuide: [
      'Visit pmayg.nic.in and open "FTO Tracking" or "Beneficiary Details" by selecting State, District, Block, and Panchayat to track list and installments.',
    ],
    commonMistakesAndTips: [
      'Begin construction promptly after receiving an installment; delays can hold up subsequent releases.',
      'Keep bank DBT seeding active so FTO payments do not bounce.',
    ],
    importantDates: [
      { label: 'Completion Timeline', dateOrStatus: 'Within 12 months of first installment' },
      { label: 'Assistance Amount', dateOrStatus: 'Plains: ₹1.20 Lakh | Hilly Areas: ₹1.30 Lakh' },
    ],
    faqs: [
      {
        question: 'Can I apply online individually if my name is missing from the PMAY-G list?',
        answer: 'No self-registration exists for rural PMAY-G; beneficiary surveys are conducted periodically by State Governments and Panchayats via Awaas+.',
      },
    ],
    officialSources: [
      { title: 'Ministry of Rural Development PMAY-G', url: 'https://pmayg.nic.in/' },
    ],
  },

  'epfo-pf-balance-withdrawal': {
    department: 'Employees’ Provident Fund Organisation (EPFO), Ministry of Labour & Employment',
    shortSummary: 'Official guide for UAN activation, checking PF passbook balance, and withdrawing EPF funds online for medical needs, marriage, or job change.',
    whatIs: 'EPFO’s Unified Member Portal enables organized sector employees to manage their Provident Fund (PF), Pension (EPS), and Insurance (EDLI) online. Claims can now be settled directly into bank accounts without requiring employer physical signatures.',
    purposeAndBenefits: [
      'Check monthly PF contributions and interest online in the EPF Passbook.',
      'Receive emergency PF Advance (Form 31) within 3–7 days directly in your bank account while employed.',
      'Withdraw full PF (Form 19) and Pension (Form 10C) online after leaving employment.',
      'Transfer old employer PF accounts seamlessly (One Member One PF Account).',
    ],
    eligibility: [
      'Employee must have an active 12-digit Universal Account Number (UAN).',
      'Aadhaar, PAN, and Bank Account KYC must be verified and digitally approved by the employer.',
      'Mobile number linked to Aadhaar must be active.',
    ],
    ineligibility: [
      'Unorganised sector workers without EPF deductions (they fall under e-Shram).',
      '100% PF withdrawal is not permitted while actively employed except for specific emergencies/advances.',
    ],
    documentsRequired: [
      'UAN Number and Password.',
      'Cancelled bank cheque showing employee name, account number, and IFSC, or attested bank passbook.',
      'PAN Card (to avoid TDS if total service is under 5 years and withdrawal exceeds ₹50,000).',
    ],
    fees: {
      officialFee: '₹0 (Completely Free)',
      note: 'EPFO charges zero fees for checking passbook balances or submitting online withdrawal claims.',
      paymentMode: 'Free',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Log In to Member Interface',
        description: 'Visit unifiedportal-mem.epfindia.gov.in and log in with your UAN, password, and captcha.',
      },
      {
        step: 2,
        title: 'Verify KYC & Bank Details',
        description: 'Go to Manage > KYC and confirm your bank account shows "Approved by Employer and Digitally Signed".',
      },
      {
        step: 3,
        title: 'Open Online Services Claim',
        description: 'Click "Online Services" > "Claim (Form-31, 19, 10C & 10D)" from the top menu.',
      },
      {
        step: 4,
        title: 'Verify Bank Account Number',
        description: 'Enter your full bank account number, click "Verify", and accept the Certificate of Undertaking.',
      },
      {
        step: 5,
        title: 'Select Claim Type',
        description: 'Choose "PF Advance (Form 31)" while working, select purpose (Illness, Construction, Marriage), and enter amount.',
      },
      {
        step: 6,
        title: 'Upload Cheque Photo & Submit via OTP',
        description: 'Upload a clear JPG scan of your bank cheque/passbook (100–500 KB) and submit with Aadhaar OTP.',
      },
    ],
    statusCheckGuide: [
      'Navigate to Online Services > Track Claim Status to view real-time status (Under Process / Settled / Rejected).',
    ],
    commonMistakesAndTips: [
      'Your name must be pre-printed on the uploaded cheque leaf; otherwise upload a bank-attested passbook.',
      'Always transfer old employer PF accounts when switching jobs to preserve continuous service history for pension.',
    ],
    importantDates: [
      { label: 'PF Advance Settlement Time', dateOrStatus: 'Typically 3 to 7 Working Days' },
      { label: 'Full Final Withdrawal Eligibility', dateOrStatus: '2 Months after leaving employment' },
    ],
    faqs: [
      {
        question: 'Do I need to upload a doctor’s prescription for Illness PF Advance?',
        answer: 'No. Under the Illness parameter for PF Advance, no medical certificate upload is required; self-declaration is sufficient.',
      },
    ],
    officialSources: [
      { title: 'Employees’ Provident Fund Organisation (EPFO)', url: 'https://www.epfindia.gov.in/' },
    ],
  },

  'udyam-msme-registration': {
    department: 'Ministry of Micro, Small and Medium Enterprises (MSME), Govt. of India',
    shortSummary: 'Process and loan benefits of obtaining the sole official, zero-fee government Udyam MSME Certificate for shopkeepers, small traders, and startups.',
    whatIs: 'Udyam Registration is the official and 100% free portal operated by the Ministry of MSME, Government of India, issuing a permanent Udyam Registration Number and digital MSME Certificate to micro, small, and medium enterprises.',
    purposeAndBenefits: [
      'Access collateral-free MUDRA loans and MSME loans at subsidized interest rates.',
      'Electricity tariff concessions and exemption from Earnest Money Deposit (EMD) in government tenders.',
      '50% government subsidy on trademark and patent registration fees.',
      'Legal protection against delayed payments via the MSME Samadhaan portal.',
    ],
    eligibility: [
      'Any Proprietorship, Partnership, LLP, or Private Limited enterprise.',
      'Micro Enterprise: Investment up to ₹1 Crore and Turnover up to ₹5 Crore.',
      'Small Enterprise: Investment up to ₹10 Crore and Turnover up to ₹50 Crore.',
      'Medium Enterprise: Investment up to ₹50 Crore and Turnover up to ₹250 Crore.',
    ],
    ineligibility: [
      'Large enterprises with annual turnover above ₹250 Crore or plant & machinery investment above ₹50 Crore.',
      'Illegal or prohibited businesses.',
    ],
    documentsRequired: [
      '12-digit Aadhaar Card of owner/entrepreneur.',
      'PAN Card.',
      'Bank Account Number and IFSC code.',
      'Active mobile number and email ID.',
      'Full business address and number of employees.',
    ],
    fees: {
      officialFee: '₹0 (Completely Free)',
      note: 'Beware of fake private websites charging ₹1,000–₹2,500. The official udyamregistration.gov.in portal is 100% free.',
      paymentMode: 'Free (100% Free)',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Visit Official Udyam Portal',
        description: 'Open udyamregistration.gov.in and click "For New Entrepreneurs who are not Registered yet as MSME".',
      },
      {
        step: 2,
        title: 'Enter Aadhaar & Entrepreneur Name',
        description: 'Enter Aadhaar number and name as per Aadhaar, then click "Validate & Generate OTP".',
      },
      {
        step: 3,
        title: 'PAN Verification',
        description: 'Select Type of Organisation (e.g., Proprietary), enter your PAN number, and validate.',
      },
      {
        step: 4,
        title: 'Business & Unit Details',
        description: 'Enter shop/factory name, unit address, business commencement date, and bank details.',
      },
      {
        step: 5,
        title: 'Select NIC Code',
        description: 'Choose the 5-digit NIC code matching your activity (Manufacturing, Service, or Retail Trading).',
      },
      {
        step: 6,
        title: 'Final Submit & Download Certificate',
        description: 'Submit using final OTP. Your digitally signed Udyam Certificate is generated and downloadable within 2–3 days.',
      },
    ],
    statusCheckGuide: [
      'Click "Print / Verify" > "Print Udyam Certificate" from the top menu.',
      'Enter your Udyam Registration Number and verify mobile OTP.',
    ],
    commonMistakesAndTips: [
      'Always verify the website domain ends in .gov.in; never pay fees on .com or .org lookalike websites.',
    ],
    importantDates: [
      { label: 'Certificate Validity', dateOrStatus: 'Lifetime (No Renewal Fee)' },
      { label: 'Official Fee', dateOrStatus: 'Zero (Free)' },
    ],
    faqs: [
      {
        question: 'Can retail shopkeepers apply for Udyam Registration?',
        answer: 'Yes. The Government of India includes Retail and Wholesale Traders under MSME registration for Priority Sector Lending benefits.',
      },
    ],
    officialSources: [
      { title: 'Ministry of MSME Udyam Portal', url: 'https://udyamregistration.gov.in/' },
    ],
  },

  'bpsc-recruitment-examination-guide': {
    department: 'Bihar Public Service Commission (BPSC), Patna',
    shortSummary: 'Verified details on BPSC Combined Competitive Exam (CCE), Teacher Recruitment Exam (TRE), official notifications, eligibility, syllabus, and admit cards.',
    whatIs: 'Bihar Public Service Commission (BPSC) is Bihar’s constitutional recruitment body conducting fair examinations for state administrative posts (SDM, DSP, CO, BDO), School Teachers (TRE), Engineering, Medical, and other gazetted services.',
    purposeAndBenefits: [
      'Permanent government employment opportunities in Bihar administration, police, education, and technical departments.',
      'Transparent online application and exam calendar via bpsc.bih.nic.in and onlinebpsc.bihar.gov.in.',
      'Facility to download OMR sheets, raise answer key objections, and track impartial results.',
    ],
    eligibility: [
      'For Civil Services (CCE): Bachelor’s degree in any discipline from a recognized university.',
      'For Teacher Recruitment (TRE): B.Ed/D.El.Ed with CTET / BTET / STET qualification as per post level.',
      'Age Limit: Minimum 20–22 years depending on post; maximum 37 years for General Male (relaxations for reserved categories as per Bihar rules).',
    ],
    ineligibility: [
      'Candidates awaiting final graduation results (unless expressly permitted in the notification).',
    ],
    documentsRequired: [
      'Matric (10th) Certificate for date of birth proof.',
      'Graduation and relevant academic marksheets & degrees.',
      'Residence Certificate (for permanent residents of Bihar).',
      'Caste / Non-Creamy Layer (NCL) / EWS Certificate for candidates claiming reservation.',
      'Aadhaar Card, live webcam photo, and Hindi/English digital signatures.',
    ],
    fees: {
      officialFee: 'General / Other State Candidates: ₹600 | Bihar SC/ST/PwD/All Female: ₹150',
      note: 'An additional ₹200 biometric fee may apply if Aadhaar verification is opted out; verify exact fee in the notification.',
      paymentMode: 'Net Banking / Debit Card / Credit Card on Portal',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Register on BPSC Online Portal',
        description: 'Visit onlinebpsc.bihar.gov.in, open "Online Registration", and click "Apply Online" next to the active advertisement.',
      },
      {
        step: 2,
        title: 'Personal & Reservation Details',
        description: 'Enter applicant name, parents’ names, DOB, marital status, and reservation category.',
      },
      {
        step: 3,
        title: 'Email & Mobile OTP Verification',
        description: 'Submit OTP to receive your login Username and Password — save them securely.',
      },
      {
        step: 4,
        title: 'Pay Examination Fee',
        description: 'Log in with your Username and Password and pay the prescribed exam fee online.',
      },
      {
        step: 5,
        title: 'Detailed Form & Live Photo Capture',
        description: 'Fill educational qualifications, capture a clear live webcam photo, upload Hindi/English signatures, and submit.',
      },
    ],
    statusCheckGuide: [
      'Log in at onlinebpsc.bihar.gov.in to check application receipt, payment status, and admit card links on your dashboard.',
    ],
    downloadGuide: [
      'e-Admit Cards are released 7–10 days before the exam on bpsc.bih.nic.in and your candidate dashboard.',
    ],
    commonMistakesAndTips: [
      'Caste and Residence certificates must be issued prior to the application closing date.',
      'Ensure no shadows or other people appear in the background while capturing your live photo.',
      'Never rely on unverified social media rumors; always check official press notes on bpsc.bih.nic.in.',
    ],
    importantDates: [
      { label: 'Exam Calendar', dateOrStatus: 'Published regularly on official BPSC website' },
      { label: 'Official Portal', dateOrStatus: 'bpsc.bih.nic.in' },
    ],
    faqs: [
      {
        question: 'Can candidates from other states apply for BPSC examinations?',
        answer: 'Yes, Indian citizens from other states may apply under the General / Unreserved category without Bihar state reservation benefits.',
      },
    ],
    officialSources: [
      { title: 'Bihar Public Service Commission (BPSC)', url: 'https://bpsc.bih.nic.in/' },
      { title: 'BPSC Online Application Portal', url: 'https://onlinebpsc.bihar.gov.in/' },
    ],
  },

  'udid-card-disability-certificate-guide': {
    department: 'Dept. of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice',
    shortSummary: 'Complete process to apply online from home for the nationwide digital UDID Swavlamban Card, hospital Medical Board verification, disability pension, and government benefits.',
    whatIs: 'Unique Disability ID (UDID) is a national digital identity card issued by the Department of Empowerment of Persons with Disabilities (DEPwD), Government of India. It integrates disability details, percentage, and Medical Board certification into a single QR-coded smart card accepted everywhere in India.',
    purposeAndBenefits: [
      'Single uniform digital ID valid across all states in India.',
      'Mandatory for State & Central Disability Pensions (Bihar Disability Pension, IGNDPS) directly into bank accounts.',
      '25% to 75% fare concessions in Indian Railways and state transport buses.',
      'Free wheelchairs, tricycles, hearing aids, and artificial limbs under the ADIP scheme via ALIMCO.',
      '4% reservation in government jobs and 5% reservation + scholarships in higher education.',
      'Concessional self-employment loans up to ₹50 Lakh at 4% interest via NDFDC.',
    ],
    eligibility: [
      'Applicant must be an Indian citizen.',
      'Must be affected by any of the 21 benchmark disabilities notified under the RPwD Act 2016.',
      'Minimum 40% disability certified by a government district hospital or Medical Board.',
    ],
    ineligibility: [
      'Persons with less than 40% disability are not eligible for benchmark disability UDID benefits.',
      'Submitting forged documents or false medical reports leads to cancellation and legal action.',
    ],
    documentsRequired: [
      'Recent colour passport photo (white background, disability clearly visible).',
      'Signature or Thumb Impression.',
      'Proof of Identity (Aadhaar Card / Voter ID / PAN Card / Birth Certificate).',
      'Proof of Address (Aadhaar Card / Ration Card / Domicile / Electricity Bill).',
      'Old Disability Certificate (if previously issued offline by a hospital).',
    ],
    fees: {
      officialFee: '₹0 (Completely Free)',
      note: 'Applying online for a UDID Card on the Swavlamban portal is 100% free. Do not pay middlemen.',
      paymentMode: 'Free Online Service',
    },
    onlineProcessSteps: [
      {
        step: 1,
        title: 'Open Official Swavlamban Portal',
        description: 'Visit swavlambancard.gov.in and click "Apply for Disability Certificate & UDID Card".',
      },
      {
        step: 2,
        title: 'Enter Personal Details',
        description: 'Fill in applicant name (in English and Hindi), parents’ names, DOB, gender, mobile number, Aadhaar number, and address.',
      },
      {
        step: 3,
        title: 'Select Disability Details',
        description: 'Select disability type (from 21 categories), affected body part, and mention if an older certificate exists.',
      },
      {
        step: 4,
        title: 'Upload Documents & Photo',
        description: 'Upload passport photo, signature/thumb impression, identity proof, and address proof in JPG/PDF format.',
      },
      {
        step: 5,
        title: 'Submit & Save Enrollment Number',
        description: 'Submit the application to generate a unique Enrollment Number and keep it safe.',
      },
      {
        step: 6,
        title: 'Medical Board Verification at District Hospital',
        description: 'Your application routes automatically to the District CMO / Civil Surgeon hospital. Attend the physical medical checkup on the SMS-notified date to get your card issued.',
      },
    ],
    offlineProcess: [
      'Citizens unable to apply online can seek free assistance at their nearest CSC, District Disability Rehabilitation Centre (DDRC), or District Social Security office.',
    ],
    statusCheckGuide: [
      'Click "Track Application Status" on swavlambancard.gov.in.',
      'Enter your Enrollment Number or Aadhaar Number.',
      'Check live status including Medical Board report and card dispatch progress.',
    ],
    downloadGuide: [
      'Once approved, open "Download your e-Disability Card & e-UDID Card", enter your Enrollment/UDID number and DOB to save the digital PDF.',
    ],
    commonMistakesAndTips: [
      'Avoid spelling mismatches between your Aadhaar Card and the application form.',
      'Provide an active mobile number as hospital checkup dates and dispatch alerts arrive via SMS.',
      'For temporary disability cards, apply for renewal 3 months prior to expiry.',
    ],
    importantDates: [
      { label: 'Application Window', dateOrStatus: 'Open 24x7 online year-round' },
      { label: 'Card Validity', dateOrStatus: 'Lifetime for Permanent Disability; 5 Years for Temporary' },
    ],
    faqs: [
      {
        question: 'Do I still need to carry old paper disability certificates after receiving a UDID card?',
        answer: 'No. The UDID Card is a single valid document accepted across government and private offices nationwide, complete with instant QR verification.',
      },
      {
        question: 'Is a UDID Card mandatory for Bihar Disability Pension?',
        answer: 'Yes. Bihar Social Welfare Department requires a UDID Card or valid 40%+ Medical Board certificate on e-Labharthi & RTPS portals.',
      },
      {
        question: 'Can I book concessional railway tickets with a UDID Card?',
        answer: 'Yes. Passengers with 40%+ disability can obtain a Railway Concession Photo Card and book concessional e-tickets on IRCTC.',
      },
    ],
    officialSources: [
      { title: 'Swavlamban UDID Official Portal', url: 'https://www.swavlambancard.gov.in/' },
      { title: 'Dept. of Empowerment of Persons with Disabilities (DEPwD)', url: 'https://disabilityaffairs.gov.in/' },
      { title: 'Bihar Social Welfare Department', url: 'https://state.bihar.gov.in/socialwelfare/' },
    ],
  },
};

const joinPair = (hi: string, en: string): string => {
  if (!hi) return en;
  if (!en || hi === en) return hi;
  return `${hi} (${en})`;
};

const mapStringList = (language: LanguageMode, hiList: string[], enList?: string[]): string[] => {
  if (language === 'hi') return hiList;
  if (language === 'en') return enList && enList.length > 0 ? enList : hiList;
  return hiList.map((hi, idx) => {
    const en = enList?.[idx];
    return en ? joinPair(hi, en) : hi;
  });
};

export interface LocalizedArticle extends ServiceArticle {
  displayTitle: string;
  displaySubtitle?: string;
}

export function localizeArticle(article: ServiceArticle, language: LanguageMode): LocalizedArticle {
  const en = ARTICLE_TRANSLATIONS_EN[article.slug];

  const displayTitle =
    language === 'hi'
      ? article.titleHi
      : language === 'en'
      ? article.titleEn
      : article.titleHi;

  const displaySubtitle =
    language === 'bilingual' ? article.titleEn : undefined;

  if (!en || language === 'hi') {
    return {
      ...article,
      displayTitle,
      displaySubtitle,
    };
  }

  if (language === 'en') {
    return {
      ...article,
      displayTitle,
      displaySubtitle,
      department: en.department,
      shortSummary: en.shortSummary,
      whatIs: en.whatIs,
      purposeAndBenefits: en.purposeAndBenefits,
      eligibility: en.eligibility,
      ineligibility: en.ineligibility ?? article.ineligibility,
      documentsRequired: en.documentsRequired,
      fees: {
        officialFee: en.fees.officialFee,
        note: en.fees.note ?? article.fees.note,
        paymentMode: en.fees.paymentMode,
      },
      onlineProcessSteps: en.onlineProcessSteps,
      offlineProcess: en.offlineProcess ?? article.offlineProcess,
      statusCheckGuide: en.statusCheckGuide,
      downloadGuide: en.downloadGuide ?? article.downloadGuide,
      correctionOrRenewalGuide: en.correctionOrRenewalGuide ?? article.correctionOrRenewalGuide,
      commonMistakesAndTips: en.commonMistakesAndTips,
      importantDates: en.importantDates ?? article.importantDates,
      faqs: en.faqs,
      officialSources: en.officialSources,
    };
  }

  // Bilingual mode
  return {
    ...article,
    displayTitle,
    displaySubtitle,
    department: joinPair(article.department, en.department),
    shortSummary: article.shortSummary, // Keep clean Hindi summary on cards/articles, subtitle adds English context; full English details shown if needed cleanly
    whatIs: `${article.whatIs}\n\n${en.whatIs}`,
    purposeAndBenefits: mapStringList('bilingual', article.purposeAndBenefits, en.purposeAndBenefits),
    eligibility: mapStringList('bilingual', article.eligibility, en.eligibility),
    ineligibility: mapStringList('bilingual', article.ineligibility, en.ineligibility),
    documentsRequired: mapStringList('bilingual', article.documentsRequired, en.documentsRequired),
    fees: {
      officialFee: joinPair(article.fees.officialFee, en.fees.officialFee),
      note: article.fees.note && en.fees.note ? joinPair(article.fees.note, en.fees.note) : article.fees.note,
      paymentMode: joinPair(article.fees.paymentMode ?? '', en.fees.paymentMode),
    },
    onlineProcessSteps: article.onlineProcessSteps.map((s, idx) => {
      const enStep = en.onlineProcessSteps[idx];
      if (!enStep) return s;
      return {
        step: s.step,
        title: `${s.title} / ${enStep.title}`,
        description: `${s.description}\n${enStep.description}`,
      };
    }),
    offlineProcess: article.offlineProcess
      ? mapStringList('bilingual', article.offlineProcess, en.offlineProcess)
      : undefined,
    statusCheckGuide: mapStringList('bilingual', article.statusCheckGuide, en.statusCheckGuide),
    downloadGuide: article.downloadGuide
      ? mapStringList('bilingual', article.downloadGuide, en.downloadGuide)
      : undefined,
    correctionOrRenewalGuide: article.correctionOrRenewalGuide
      ? mapStringList('bilingual', article.correctionOrRenewalGuide, en.correctionOrRenewalGuide)
      : undefined,
    commonMistakesAndTips: mapStringList('bilingual', article.commonMistakesAndTips, en.commonMistakesAndTips),
    importantDates: article.importantDates?.map((d, idx) => {
      const enD = en.importantDates?.[idx];
      if (!enD) return d;
      return {
        label: `${d.label} / ${enD.label}`,
        dateOrStatus: joinPair(d.dateOrStatus, enD.dateOrStatus),
      };
    }),
    faqs: article.faqs.map((f, idx) => {
      const enF = en.faqs[idx];
      if (!enF) return f;
      return {
        question: `${f.question} (${enF.question})`,
        answer: `${f.answer}\n${enF.answer}`,
      };
    }),
    officialSources: article.officialSources.map((src, idx) => {
      const enSrc = en.officialSources[idx];
      if (!enSrc) return src;
      return {
        title: src.title === enSrc.title ? src.title : `${src.title} (${enSrc.title})`,
        url: src.url,
      };
    }),
  };
}
