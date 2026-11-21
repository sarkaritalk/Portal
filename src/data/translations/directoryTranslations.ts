import { LanguageMode } from '../../context/LanguageContext';

export const CATEGORIES_EN: Record<string, string> = {
  'identity-documents': 'Aadhaar Card, PAN Card, Voter ID, Ration Card, Caste-Income-Residence and Birth Certificate',
  'bihar-services': 'RTPS ServicePlus, Bihar Bhumi Jamabandi, Ration Card, Student Credit Card & Certificates',
  'government-schemes': 'PM Kisan, Ayushman Bharat, PM Awas, Ujjwala, Vishwakarma and Pension Schemes',
  'education-scholarships': 'National Scholarship Portal (NSP), Post-Matric, Board Results and Entrance Exams',
  'jobs-recruitment': 'UPSC, SSC, Railways, Banking, BPSC, Police Recruitment Notifications, Admit Cards & Results',
  'agriculture-farmers': 'PM Kisan Samman Nidhi, Kisan Credit Card (KCC), Crop Insurance and Farm Subsidies',
  'health-welfare': 'Ayushman Card (ABHA), Jan Aushadhi, Maternity Benefits, Government Hospitals & Vaccination',
  'transport-vehicles': 'Learner/Driving Licence, Vehicle RC, Ownership Transfer, e-Challan & Sarathi Portal',
  'banking-pension': 'EPFO (PF), Jeevan Pramaan Certificate, Atal Pension, Jan Dhan Account & DBT Status',
  'business-employment': 'Udyam Registration (MSME), PM SVANidhi, MUDRA Loan, PMEGP, GST & FSSAI',
  'other-services': 'RTI Online, CPGRAMS Public Grievance, Electricity & Water Bills, Consumer Helpline & Passport',
};

export interface PortalTranslationEn {
  departmentEn: string;
  servicesCoveredEn: string[];
  descriptionEn: string;
}

export const PORTALS_EN: Record<string, PortalTranslationEn> = {
  'bihar-rtps': {
    departmentEn: 'General Administration Department, Government of Bihar',
    servicesCoveredEn: ['Caste Certificate', 'Income Certificate', 'Residence Certificate', 'EWS Certificate', 'Non-Creamy Layer (OBC/NCL)'],
    descriptionEn: 'Official portal for issuing Right to Public Services (RTPS) and other online certificates for citizens of Bihar.',
  },
  'bihar-bhumi': {
    departmentEn: 'Department of Revenue and Land Reforms, Bihar',
    servicesCoveredEn: ['View Jamabandi Register', 'Online Mutation (Dakhil-Kharij)', 'Land Tax (Bhu-Lagaan)', 'LPC Application'],
    descriptionEn: 'Official Bihar Government portal for online land tax receipts, Jamabandi copies, Khatiyan records, and mutation applications.',
  },
  'bihar-student-credit-card': {
    departmentEn: 'Planning and Development Department, Government of Bihar',
    servicesCoveredEn: ['Bihar Student Credit Card', 'Kushal Yuva Program (KYP)', 'Mukhyamantri Swayam Sahayata Bhatta'],
    descriptionEn: 'Primary portal for up to ₹4 Lakh higher education loan, youth skill training, and unemployment allowance in Bihar.',
  },
  'uidai': {
    departmentEn: 'Ministry of Electronics and Information Technology, Govt. of India',
    servicesCoveredEn: ['Download Aadhaar', 'Update Address', 'Document Update', 'Order PVC Card', 'Aadhaar-Bank Seeding Status'],
    descriptionEn: 'Official UIDAI portal to download e-Aadhaar, update address online, and verify Aadhaar authentication history.',
  },
  'pm-kisan': {
    departmentEn: 'Ministry of Agriculture & Farmers Welfare, Govt. of India',
    servicesCoveredEn: ['PM-Kisan Installment Status', 'e-KYC Verification', 'New Farmer Registration', 'Name/Aadhaar Correction'],
    descriptionEn: 'Official national portal providing ₹6,000 annual financial assistance to eligible landholding farmer families.',
  },
  'nha-ayushman': {
    departmentEn: 'National Health Authority (NHA), Government of India',
    servicesCoveredEn: ['Ayushman Eligibility Check', 'e-KYC & New Card', 'Download Ayushman Card', 'Find Empanelled Hospitals'],
    descriptionEn: 'Official portal to create and download Ayushman cards for up to ₹5 Lakh free treatment per family annually.',
  },
  'incometax': {
    departmentEn: 'Department of Revenue, Ministry of Finance, Govt. of India',
    servicesCoveredEn: ['Instant e-PAN (Free)', 'PAN-Aadhaar Link Status', 'Verify PAN Card', 'ITR e-Filing'],
    descriptionEn: 'Official Income Tax Department portal for instant free e-PAN generation via Aadhaar OTP and PAN-Aadhaar linking.',
  },
  'parivahan': {
    departmentEn: 'Ministry of Road Transport and Highways, Govt. of India',
    servicesCoveredEn: ['Online Learner Licence Test', 'Driving Licence Renewal', 'Vehicle RC Transfer', 'e-Challan Payment'],
    descriptionEn: 'Unified central portal for all driving licence and vehicle registration online services across India.',
  },
  'nsp': {
    departmentEn: 'Ministry of Education / MeitY, Government of India',
    servicesCoveredEn: ['Pre-Matric Scholarship', 'Post-Matric Scholarship', 'Merit-cum-Means', 'Divyang Scholarship'],
    descriptionEn: 'Single national platform for scholarships offered by Central Ministries and State Governments to students.',
  },
  'eci-voters': {
    departmentEn: 'Election Commission of India (ECI)',
    servicesCoveredEn: ['New Voter ID (Form 6)', 'Voter Card Correction (Form 8)', 'Download e-EPIC', 'Search Name in Voter List'],
    descriptionEn: 'Official ECI portal to register as a voter, request corrections, and download digital Voter ID (e-EPIC).',
  },
  'digilocker': {
    departmentEn: 'Digital India, Ministry of Electronics & IT',
    servicesCoveredEn: ['Digital Marksheets', 'Aadhaar/PAN/Driving Licence', 'Caste & Residence Certificates', 'Digital Vehicle RC'],
    descriptionEn: 'Government of India digital document wallet issuing legally valid electronic certificates under the IT Act.',
  },
  'umang': {
    departmentEn: 'Digital India Corporation, Ministry of Electronics & IT',
    servicesCoveredEn: ['EPFO PF Passbook & Claim', 'Gas Cylinder Booking', 'Ration Card Details', 'Pension Status'],
    descriptionEn: 'Unified super portal providing access to 1,200+ Central, State, and municipal citizen services in one place.',
  },
  'epfo': {
    departmentEn: 'Ministry of Labour and Employment, Govt. of India',
    servicesCoveredEn: ['UAN Activation', 'EPF Passbook & Balance', 'Online PF Withdrawal Claim', 'Nominee e-Sign'],
    descriptionEn: 'Official portal for organized sector employees to manage Provident Fund, pension, and insurance accounts.',
  },
  'bihar-epds': {
    departmentEn: 'Food & Consumer Protection Department, Bihar',
    servicesCoveredEn: ['New Ration Card (RCMS)', 'Check Name in Ration List', 'Dealer Distribution', 'e-KYC Status'],
    descriptionEn: 'Official Bihar portal for new ration card applications, adding family members, and checking ration distribution lists.',
  },
  'cpgrams': {
    departmentEn: 'Department of Administrative Reforms and Public Grievances (DARPG)',
    servicesCoveredEn: ['Lodge Departmental Grievance', 'Track Grievance Status', 'File Appeal'],
    descriptionEn: 'Official portal to lodge and track online public grievances against any Central or State Government department.',
  },
  'udyam-msme': {
    departmentEn: 'Ministry of Micro, Small and Medium Enterprises, Govt. of India',
    servicesCoveredEn: ['Free MSME Registration', 'Download Udyam Certificate', 'Govt Scheme & Subsidy Benefits'],
    descriptionEn: 'The sole official portal for free government Udyam MSME registration certificates for small businesses and industries.',
  },
};

export const VIDEOS_EN: Record<string, string> = {
  'vid-rtps-caste': 'Learn the complete step-by-step process to apply free for Caste and Income certificates on ServicePlus without visiting the block office.',
  'vid-bihar-land': 'Know the right way to check your land Khatiyan, Lagaan receipt, and avoid mutation rejection on Bihar Bhumi.',
  'vid-pm-kisan-status': 'Complete guide to check land seeding, bank DBT Aadhaar mapping, and e-KYC if your PM Kisan installment is pending.',
  'vid-ayushman-card': 'Create your ₹5 Lakh Ayushman Bharat card right from your phone using the new NHA Beneficiary portal without visiting a CSC.',
  'vid-aadhaar-address': 'Verified method to update your Aadhaar address from home by uploading valid Proof of Address on the UIDAI myAadhaar portal.',
  'vid-pan-aadhaar-instant': 'Get an original digital PAN card free in 10 minutes with zero government fees via the Income Tax e-Filing portal.',
  'vid-bihar-student-credit': 'Complete education loan application process at 0%-1% or 4% simple interest after 12th for B.Tech, B.Ed, B.Sc, Polytechnic, and higher studies.',
  'vid-driving-licence': 'Tips to pass the online Learner Licence test from home via Aadhaar authentication without visiting the RTO.',
};

export const BIHAR_CATEGORIES_EN: Record<string, string> = {
  'certificates-rtps': 'Apply online & check status for Caste, Income, Residence, EWS, NCL & Character certificates.',
  'pension-social-security': 'Old Age, Widow, Disability pensions and e-Labharthi payment status tracking.',
  'women-child-welfare': 'Mukhyamantri Kanya Utthan Yojana (Graduation, 12th) and Matru Vandana assistance.',
  'labour-worker-welfare': 'Bihar BOCW construction worker registration, renewal and e-Shram card services.',
  'scholarships-education': 'Post Matric Scholarship (PMS), Student Credit Card (MNSSBY) and Medhasoft.',
  'ration-food-security': 'New Ration Card (RCMS), search name in ration list and foodgrain distribution status.',
  'farmer-agriculture': 'DBT Farmer Registration, PM-Kisan, Crop Assistance Scheme and farm machinery subsidy.',
  'land-revenue': 'Apna Khata, online Jamabandi register, Dakhil-Kharij (Mutation) and Bhu-Lagaan payment.',
  'employment-training': 'Kushal Yuva Program (KYP), Unemployment Self-Help Allowance (SHA) & Udyami Yojana.',
  'healthcare-disability': 'Ayushman Bharat ₹5 Lakh free treatment card, Swavlamban UDID & Bhavya Bihar.',
  'identity-central': 'Aadhaar, PAN, Voter Card, Driving Licence and Birth/Death certificates (Central Govt. portals).',
  'other-bihar-services': 'Suvidha electricity bill, Public Grievance Redressal (Jan Shikayat) & Bihar Disaster Management.',
};

export interface BiharServiceEn {
  feeEn: string;
  eligibilityEn: string[];
  documentsEn: string[];
  primaryLabelEn: string;
  statusLabelEn?: string;
}

export const BIHAR_SERVICES_EN: Record<string, BiharServiceEn> = {
  'rtps-caste-certificate': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'Applicant must be a permanent resident of Bihar.',
      'Caste must be listed in the official reserved categories notified by Government of Bihar.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Passport Size Photo',
      'Self Declaration (available inside online form)',
      'Father’s Caste Certificate or Khatiyan (if available)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'rtps-income-certificate': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'Permanent resident family member of Bihar.',
      'Total annual family income from all legitimate sources is valid.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Applicant’s colour photograph',
      'Annual Income Self-Declaration',
      'Active mobile number for OTP',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'rtps-residence-certificate': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'Applicant or their ancestors must be permanently residing in Bihar.',
    ],
    documentsEn: [
      'Identity Proof (Aadhaar Card / Voter ID)',
      'Recent Passport Photo',
      'Permanent residential address details',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'rtps-ncl-certificate': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'Permanent resident of Bihar belonging to BC or EBC category.',
      'Annual family income below the Creamy Layer limit (₹8 Lakh).',
    ],
    documentsEn: [
      'Previously issued Caste Certificate',
      'Previously issued Income Certificate',
      'Previously issued Residence Certificate',
      'Self-Declaration Form (Form XI/16)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'rtps-ews-certificate': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'General Category citizens (not covered under SC/ST/BC/EBC).',
      'Gross annual family income below ₹8 Lakh and compliant with land/asset norms.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Passport Photo',
      'Income, Caste & Residence details',
      'Land/Residential property documents (if applicable)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'rtps-character-certificate': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Resident of Bihar living under the jurisdiction of the concerned police station.',
      'No serious pending criminal record or arrest warrant.',
    ],
    documentsEn: [
      'Identity Proof (Aadhaar / Voter ID)',
      'Residence Certificate',
      'Passport Size Photo',
      'Active Mobile Number',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'sspmis-mvpy': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'Applicant must be a permanent resident of Bihar.',
      'Minimum age 60 years completed (as per Aadhaar or Voter list).',
      'Must not be receiving any other government or retirement pension.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Voter Identity Card',
      'Bank Passbook (Aadhaar-linked account)',
      'Consent form & Passport Photo',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'sspmis-widow-pension': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Applicant must be a permanent resident of Bihar.',
      'Minimum age 18 years or above.',
      'Widow with annual income up to ₹60,000 or BPL household.',
    ],
    documentsEn: [
      'Husband’s Death Certificate',
      'Aadhaar Card & Bank Passbook',
      'Income & Residence Certificates',
      'Passport Photo',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'sspmis-disability-pension': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Permanent resident of Bihar.',
      'Disability certificate of 40% or above issued by competent medical authority.',
    ],
    documentsEn: [
      'Disability Certificate / UDID Card',
      'Aadhaar Card & Bank Passbook',
      'Residence Certificate & Photo',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'elabharthi-payment-status': {
    feeEn: '₹0 (Status Check Free)',
    eligibilityEn: [
      'Registered beneficiary under any social security pension scheme of Bihar.',
    ],
    documentsEn: [
      'Beneficiary ID / Bank Account Number / Aadhaar Number',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'medhasoft-kanya-snatak': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Female student must be a permanent resident of Bihar.',
      'Graduated from a recognized university/college in Bihar.',
    ],
    documentsEn: [
      'Graduation Final Year Marksheet',
      'Aadhaar Card (in student’s name)',
      'Bank Passbook (branch in Bihar, Aadhaar-seeded account)',
      'Residence Certificate',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'medhasoft-kanya-inter': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Female student passed 12th Intermediate from Bihar Board (BSEB).',
      'Must be unmarried at the time of passing the examination.',
    ],
    documentsEn: [
      '12th Intermediate Marksheet & Roll Number',
      'Aadhaar Card & Unmarried Self-Declaration',
      'Student’s own Bank Account (Aadhaar Seeded)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'pmmvy-matru-vandana': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Pregnant women and lactating mothers registered at Anganwadi centre.',
      'Regular permanent government employees are not eligible.',
    ],
    documentsEn: [
      'Mother & Child Protection (MCP) Card',
      'Aadhaar Card of pregnant woman and husband',
      'Bank Passbook',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'bocw-labour-card': {
    feeEn: '₹20 to ₹50 (Govt. Prescribed Registration Fee)',
    eligibilityEn: [
      'Age between 18 and 60 years.',
      'Worked as a construction worker for at least 90 days in the last 12 months.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Bank Passbook (Bihar branch account)',
      '90-day work certificate or self-declaration',
      'Passport Size Photo',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'eshram-card-central': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'Age between 16 and 59 years.',
      'Unorganised sector worker (must not be an EPFO or ESIC member).',
    ],
    documentsEn: [
      'Aadhaar Card (Mobile number linked)',
      'Active Savings Bank Account details',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'pms-bihar-online': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'Permanent resident of Bihar belonging to SC, ST, BC, or EBC category.',
      'Studying in a recognized post-matric course.',
      'Family annual income within notified ceiling (₹2.5 Lakh to ₹3 Lakh).',
    ],
    documentsEn: [
      'Latest Caste, Income & Residence Certificates',
      '10th and last passed exam marksheet',
      'College admission receipt & fee structure',
      'Bonafide Certificate',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'mnssby-student-credit-card': {
    feeEn: '₹0 (No Processing Fee)',
    eligibilityEn: [
      'Permanent resident of Bihar and 12th passed.',
      'Age generally under 25 years (up to 30 for PG courses).',
      'Admitted to a recognized Government or NAAC-accredited institution.',
    ],
    documentsEn: [
      '10th & 12th original marksheets and certificates',
      'Admission letter & fee schedule from institute',
      'Aadhaar & PAN Card of student and co-applicant (guardian)',
      'Residence Certificate',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'medhasoft-matric-protsahan': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Student passed 10th exam from Bihar Board (BSEB).',
      'Student must hold a DBT-activated bank account in Bihar.',
    ],
    documentsEn: [
      '10th Registration Number & Marks obtained',
      'Aadhaar Card & Mobile Number',
      'Bank Account Details (Aadhaar Seeded)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'national-scholarship-portal': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Students fulfilling academic marks and family income criteria of the respective central scheme.',
    ],
    documentsEn: [
      'Academic marksheets, Bonafide, Income & Caste certificates, Aadhaar Card',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'rcms-bihar-new-card': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Family permanently residing in Bihar without an existing active ration card.',
      'Must meet Priority Household eligibility criteria.',
    ],
    documentsEn: [
      'Aadhaar Cards of head of family and all members',
      'Combined Family Group Photo',
      'Residence & Income Certificates',
      'Bank Passbook of the female head of household',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'epds-ration-search': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Ration card holders across all districts of Bihar.',
    ],
    documentsEn: [
      'Ration Card Number or District, Block & Panchayat details',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'dbt-agriculture-farmer-reg': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Landholding (Raiyat) or tenant/sharecropper (Gair-Raiyat) farmers of Bihar.',
    ],
    documentsEn: [
      'Aadhaar Card (mobile linked)',
      'Bank Account (NPCI Aadhaar Seeded)',
      'Land details (for landholders)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'pm-kisan-portal': {
    feeEn: '₹0 (OTP e-KYC Completely Free)',
    eligibilityEn: [
      'Farmer families owning cultivable agricultural land.',
      'Constitutional post holders, income tax payers, and pensioners drawing ₹10,000+/month are ineligible.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Updated Land Tax Receipt / LPC',
      'Bank Passbook',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'fasal-sahayata-bihar': {
    feeEn: '₹0 (No Premium / Free)',
    eligibilityEn: [
      'Landholding and sharecropper farmers in Bihar who suffered crop loss in the notified season.',
    ],
    documentsEn: [
      'Land Possession Certificate (LPC) or Land Tax Receipt',
      'Self-Declaration verified by Ward Member / Kisan Salahkar',
      'Applicant’s Aadhaar & Bank Account',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'farmech-bihar-subsidy': {
    feeEn: '₹0 (Application Free)',
    eligibilityEn: [
      'Registered farmers of Bihar (DBT Farmer Registration mandatory).',
    ],
    documentsEn: [
      '13-digit Farmer Registration Number',
      'Current Land Tax Receipt',
      'Caste Certificate (for extra reserved category subsidy)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'biharbhumi-apna-khata': {
    feeEn: '₹0 (Free to View)',
    eligibilityEn: [
      'Landowners, heirs, or citizens checking any land located in Bihar.',
    ],
    documentsEn: [
      'District, Circle, Halka & Mauza name, Khata number or Raiyat name',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'biharbhumi-mutation': {
    feeEn: '₹0 (Online Govt. Application Free)',
    eligibilityEn: [
      'Land buyers holding valid registered Sale Deed, Gift Deed, or ancestral partition proof.',
    ],
    documentsEn: [
      'Scanned copy of Registered Sale Deed (Kewala)',
      'Seller’s previous Jamabandi receipt',
      'Family genealogy / heirship proof (for ancestral land)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'biharbhumi-bhu-lagaan': {
    feeEn: 'Nominal Land Revenue Fee as per plot area & official rates',
    eligibilityEn: [
      'Landholders whose Jamabandi is digitized on the Bihar Bhumi portal.',
    ],
    documentsEn: [
      'Bhag Vartaman & Prishth Sankhya (from Jamabandi register)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'bhunaksha-bihar-maps': {
    feeEn: '₹0 (Free to View)',
    eligibilityEn: [
      'Citizens and farmers of any Mauza in Bihar.',
    ],
    documentsEn: [
      'District, Subdivision, Circle & Mauza name',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'bsdm-kyp-portal': {
    feeEn: '₹1,000 Refundable Security Deposit (fully refunded after course completion)',
    eligibilityEn: [
      'Age 15 to 28 years (age relaxation for reserved categories as per rules).',
      'Minimum 10th pass student.',
    ],
    documentsEn: [
      '10th Original Marksheet',
      'Aadhaar Card & Residence Certificate',
      'Bank Passbook',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'mnssby-swayam-sahayata-sha': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Age between 20 and 25 years.',
      '12th pass unemployed youth not enrolled in regular college education.',
    ],
    documentsEn: [
      '12th Pass Marksheet & School Leaving Certificate',
      'Aadhaar Card & Bank Passbook',
      'Residence Certificate',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'udyami-bihar-yojana': {
    feeEn: '₹0 (Portal Application Completely Free)',
    eligibilityEn: [
      'Permanent residents of Bihar.',
      'Minimum 10+2 / Intermediate or equivalent ITI / Polytechnic Diploma.',
    ],
    documentsEn: [
      'Permanent Residence Certificate & Caste Certificate',
      '10th & 12th Marksheets',
      'PAN Card, Aadhaar Card & Current Bank Account',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'bpsc-official-portal': {
    feeEn: 'As per Exam Notification',
    eligibilityEn: [
      'Minimum educational qualification and age limit as specified in the respective recruitment notification.',
    ],
    documentsEn: [
      'Educational Certificates, Category Certificates, Live Photo & Signature',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'ayushman-bharat-pmjay': {
    feeEn: '₹0 (e-KYC & Card Download Completely Free)',
    eligibilityEn: [
      'Families listed in SECC 2011 or Bihar NFSA Ration Card holder families.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Ration Card Number',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'swavlamban-udid-disability': {
    feeEn: '₹0 (Free)',
    eligibilityEn: [
      'Indian citizens with any notified benchmark disability.',
    ],
    documentsEn: [
      'Medical Board Disability Certificate or hospital report',
      'Aadhaar Card & photo clearly showing disability',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'uidai-aadhaar-portal': {
    feeEn: 'Download ₹0, PVC Card ₹50 (inclusive of postal speed post charges)',
    eligibilityEn: [
      'Every resident of India holding a 12-digit Aadhaar number or 28-digit Enrolment ID (EID).',
    ],
    documentsEn: [
      'Aadhaar Number & registered mobile number (for OTP)',
      'Valid Proof of Address (for address update)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'pan-card-services': {
    feeEn: '₹107 (for physical PAN card dispatch within India)',
    eligibilityEn: [
      'Indian citizens, entities, and taxpayers.',
    ],
    documentsEn: [
      'Proof of Identity (Aadhaar Card)',
      'Proof of Address (Aadhaar / Electricity Bill / Bank Account)',
      'Proof of Date of Birth',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'eci-voter-services': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'Citizen of India aged 18 years or above on the qualifying date.',
    ],
    documentsEn: [
      'Passport Photo',
      'Age Proof (10th Marksheet / Aadhaar / Birth Certificate)',
      'Residence Proof',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'parivahan-driving-licence': {
    feeEn: 'Learner Licence ₹150 + Test ₹50, Permanent DL ₹700 (Govt. Fee)',
    eligibilityEn: [
      'Minimum 18 years for geared motorcycle/car (16 years for gearless two-wheelers up to 50cc).',
    ],
    documentsEn: [
      'Aadhaar Card (Mobile linked)',
      'Age & Address Proof',
      'Medical Fitness Form 1A (for age 40+ or commercial category)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'crs-birth-death-registration': {
    feeEn: 'Free within 21 days (₹2 between 21–30 days, ₹5 late fee up to 1 year)',
    eligibilityEn: [
      'Reporting to the local registrar within 21 days of the birth/death event.',
    ],
    documentsEn: [
      'Hospital birth/death discharge slip',
      'Parents’ Aadhaar Cards',
      'Informant’s identity proof',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'suvidha-electricity-bihar': {
    feeEn: 'As per consumed units & official electricity bill',
    eligibilityEn: [
      'All domestic, commercial, and agricultural electricity consumers in Bihar.',
    ],
    documentsEn: [
      'Consumer Account Number (CA Number / Consumer ID)',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'lok-shikayat-bihar': {
    feeEn: '₹0 (Completely Free)',
    eligibilityEn: [
      'Any citizen of Bihar aggrieved by delayed or denied public services or departmental negligence.',
    ],
    documentsEn: [
      'Written description of grievance',
      'Copy of earlier application or receipt (if available)',
      'Aadhaar Card & Mobile Number',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'Check Application Status',
  },
  'bsdma-disaster-management': {
    feeEn: 'Free Public Safety Service',
    eligibilityEn: [
      'All citizens of Bihar.',
    ],
    documentsEn: [
      'No documents required',
    ],
    primaryLabelEn: 'Open Official Portal',
    statusLabelEn: 'View Official Information',
  },
};

export const CENTRAL_CATEGORIES_EN: Record<string, string> = {
  'farmers-agriculture': 'PM-KISAN, Crop Insurance, Agriculture Subsidies, KCC & Soil Health',
  'housing-home': 'PMAY-Gramin, PMAY-Urban & Housing Construction Support',
  'education-scholarships': 'National Scholarship Portal (NSP), Higher Education & Technical Aid',
  'employment-skills': 'National Career Service (NCS), PMKVY & Apprenticeship',
  'women-child': 'Matru Vandana Yojana (PMMVY), Sukanya Samriddhi & Poshan Abhiyaan',
  'pension-social-security': 'NSAP National Old Age Pension, Atal Pension Yojana (APY)',
  'health-medical': 'Ayushman Bharat (PM-JAY), ABHA Health ID & Jan Aushadhi',
  'labour-worker': 'e-Shram Card, PM-SYM Maandhan Pension Scheme',
  'business-self-employment': 'MUDRA Yojana, PMEGP, PM Vishwakarma & PM SVANidhi',
  'banking-insurance': 'Jan Dhan Yojana (PMJDY), Jeevan Jyoti (PMJJBY) & Suraksha Bima (PMSBY)',
  'ration-food-security': 'National Food Security (NFSA), One Nation One Ration Card',
  'identity-documents': 'Aadhaar, PAN Card, Voter ID, Passport & DigiLocker',
  'clean-energy-power': 'PM Surya Ghar Muft Bijli Yojana & Ujjwala Yojana',
  'rural-development': 'MGNREGA & National Rural Livelihood Mission (NRLM)',
  'transport-travel': 'Sarathi Driving Licence, Vahan Portal & FASTag',
  'all-central': 'Complete Welfare Schemes of Various Central Government Ministries',
  'other-central-services': 'Income Tax e-Filing, EPFO, Post Office Savings & Consumer Helpline',
};

export interface CentralSchemeEn {
  eligibilityEn: string[];
  documentsEn: string[];
  applicationModeLabelEn: string;
  officialApplyLabelEn: string;
  statusLabelEn?: string;
}

export const CENTRAL_SCHEMES_EN: Record<string, CentralSchemeEn> = {
  'pm-kisan': {
    eligibilityEn: [
      'Applicant must hold cultivable land records in their name.',
      'Constitutional post holders, current/former ministers, MPs, MLAs are ineligible.',
      'Serving or retired Central/State Govt officers (excluding MTS/Group D) are ineligible.',
      'Pensioners drawing ₹10,000+ monthly pension and income tax payers are ineligible.',
    ],
    documentsEn: [
      'Aadhaar Card (with linked mobile for e-KYC)',
      'Land ownership record (Khatiyan / Jamabandi / LPC)',
      'Aadhaar-linked bank account (NPCI / DBT enabled)',
    ],
    applicationModeLabelEn: 'Online & CSC Centre',
    officialApplyLabelEn: 'Apply Online',
    statusLabelEn: 'Check Status',
  },
  'pm-fasal-bima': {
    eligibilityEn: [
      'Farmers growing notified Kharif or Rabi crops in notified areas.',
      'Both loanee and non-loanee farmers are eligible.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Land ownership record / sharecropper agreement',
      'Crop sowing certificate (by Patwari/Agriculture Officer)',
      'Bank Passbook',
    ],
    applicationModeLabelEn: 'Online Portal & Bank Branches',
    officialApplyLabelEn: 'Open Portal',
    statusLabelEn: 'Check Claim Status',
  },
  'kisan-credit-card': {
    eligibilityEn: [
      'Age 18 to 75 years (co-applicant mandatory for age above 60).',
      'Proof of agricultural land or animal husbandry/fisheries.',
    ],
    documentsEn: [
      'KCC Application Form',
      'Identity & Address Proof (Aadhaar / Voter Card)',
      'Land documents (Khatiyan, updated land tax receipt)',
    ],
    applicationModeLabelEn: 'Banks & CSC',
    officialApplyLabelEn: 'Download Form',
  },
  'pmay-gramin': {
    eligibilityEn: [
      'Family must not own a pucca house anywhere in India.',
      'No family member should be an income tax payer or government employee.',
      'Name must be included in the Gram Sabha approved Awaas+ list.',
    ],
    documentsEn: [
      'Aadhaar Card (all adult members)',
      'Bank Passbook (DBT-enabled savings account)',
      'MGNREGA Job Card Number',
    ],
    applicationModeLabelEn: 'Gram Panchayat / Block Office',
    officialApplyLabelEn: 'Open Portal',
    statusLabelEn: 'Track Status',
  },
  'pmay-urban': {
    eligibilityEn: [
      'Applicant or family member must not own a pucca house anywhere in India.',
      'Resident of a notified Municipal Corporation / Municipality area.',
    ],
    documentsEn: [
      'Aadhaar Card & PAN Card',
      'Income Certificate (EWS/LIG proof)',
      'Urban land ownership document (for BLC vertical)',
    ],
    applicationModeLabelEn: 'Online Portal',
    officialApplyLabelEn: 'Apply Online',
    statusLabelEn: 'Track Assessment',
  },
  'nsp-central-schemes': {
    eligibilityEn: [
      'Regular student enrolled in a recognized government or private institution.',
      'Minimum 50% marks in previous annual exam (as per scheme norms).',
      'Annual family income ceiling ₹1.5 Lakh to ₹2.5 Lakh as per scheme.',
    ],
    documentsEn: [
      'Previous Class Marksheet',
      'Income Certificate (issued by competent authority)',
      'Caste & Residence Certificates',
      'Institution Bonafide Certificate',
      'Aadhaar Card & Student’s Bank Account (Aadhaar Seeded)',
    ],
    applicationModeLabelEn: 'Online Application (NSP OTR Portal)',
    officialApplyLabelEn: 'Apply on NSP',
    statusLabelEn: 'Track Status',
  },
  'ncs-national-career-service': {
    eligibilityEn: [
      'Minimum age 14 years (typically 18+ for jobs under labour laws).',
      'Indian citizen.',
    ],
    documentsEn: [
      'Aadhaar Card or PAN Card',
      'Educational Qualification Certificates',
      'Resume / Biodata',
    ],
    applicationModeLabelEn: 'Online Registration (100% Free)',
    officialApplyLabelEn: 'Free Registration',
    statusLabelEn: 'Search Jobs',
  },
  'pmkvy-skill-india': {
    eligibilityEn: [
      'Age between 15 and 45 years.',
      'Aadhaar Card and bank account required for verification.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Educational Certificates (8th/10th/12th)',
      'Passport Size Photo',
    ],
    applicationModeLabelEn: 'Skill Centres & Online',
    officialApplyLabelEn: 'Find Courses',
  },
  'pmmvy-central': {
    eligibilityEn: [
      'Woman must be at least 19 years of age.',
      'Not in regular Central or State Government service.',
      'e-Shram cardholders, BPL, MGNREGA, or SC/ST women.',
    ],
    documentsEn: [
      'Mother & Child Protection (MCP) Card',
      'Aadhaar Card of Mother and Father',
      'Mother’s Aadhaar-seeded Bank Account',
    ],
    applicationModeLabelEn: 'Online Portal & Anganwadi Centre',
    officialApplyLabelEn: 'Apply Online',
    statusLabelEn: 'Track Status',
  },
  'sukanya-samriddhi-yojana': {
    eligibilityEn: [
      'Girl child must be under 10 years of age at the time of account opening.',
      'Minimum ₹250 and maximum ₹1.5 Lakh deposit per financial year.',
    ],
    documentsEn: [
      'Birth Certificate of Girl Child',
      'Guardian’s Aadhaar Card & PAN Card',
      'Address Proof',
    ],
    applicationModeLabelEn: 'Post Office or Authorized Bank Branch',
    officialApplyLabelEn: 'View Details',
  },
  'atal-pension-yojana': {
    eligibilityEn: [
      'Entry age between 18 and 40 years.',
      'Applicant must not be an income tax payer (effective 1 October 2022).',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Savings Bank Account details (for auto-debit)',
      'Mobile Number',
    ],
    applicationModeLabelEn: 'Net Banking & Bank Branches',
    officialApplyLabelEn: 'View Details',
    statusLabelEn: 'Check PRAN Status',
  },
  'nsap-pension-portal': {
    eligibilityEn: [
      'Household listed in Below Poverty Line (BPL) register.',
      'Old Age: 60+ years, Widow: 40+ years, Disability: 80%+ disability.',
    ],
    documentsEn: [
      'BPL Card / Ration Card',
      'Aadhaar Card & Age Proof',
      'Disability Certificate (for disability pension)',
      'Husband’s Death Certificate (for widow pension)',
    ],
    applicationModeLabelEn: 'Online Portal & Block Office',
    officialApplyLabelEn: 'Open Portal',
    statusLabelEn: 'Track Status',
  },
  'ayushman-bharat-card': {
    eligibilityEn: [
      'NFSA Ration Card holder families or all senior citizens aged 70+ (Vay Vandana Card).',
      'Pre-existing illnesses covered from day one.',
    ],
    documentsEn: [
      'Aadhaar Card (with biometric/OTP verification)',
      'Ration Card Number',
    ],
    applicationModeLabelEn: 'Online Beneficiary Portal & Hospital Kiosks',
    officialApplyLabelEn: 'Create Card',
    statusLabelEn: 'Check & Download',
  },
  'abha-card-health-account': {
    eligibilityEn: [
      'Any Indian citizen (ABHA can be created for all age groups).',
    ],
    documentsEn: [
      'Aadhaar Card (mobile number linked) or Driving Licence',
    ],
    applicationModeLabelEn: 'Online Instant 2-Minute Creation',
    officialApplyLabelEn: 'Create ABHA',
    statusLabelEn: 'Download ABHA',
  },
  'eshram-card-portal': {
    eligibilityEn: [
      'Age between 16 and 59 years.',
      'Not a member of EPFO or ESIC.',
      'Must not be an income tax payer.',
    ],
    documentsEn: [
      'Aadhaar Card (mobile number linked)',
      'Active Savings Bank Account details',
    ],
    applicationModeLabelEn: 'Self Portal & CSC',
    officialApplyLabelEn: 'Self Register',
    statusLabelEn: 'Update & Download',
  },
  'pm-sym-mandhan': {
    eligibilityEn: [
      'Entry age between 18 and 40 years.',
      'Monthly income ₹15,000 or less.',
    ],
    documentsEn: [
      'Aadhaar Card',
      'Savings Bank Account Passbook / Jan Dhan Account',
    ],
    applicationModeLabelEn: 'CSC & Mandhan Portal',
    officialApplyLabelEn: 'Apply Online',
  },
  'pm-mudra-yojana': {
    eligibilityEn: [
      'Indian citizen with a non-farm income-generating business plan.',
      'Not a defaulter with any bank or financial institution.',
    ],
    documentsEn: [
      'Identity & Address Proof (Aadhaar / Voter / PAN)',
      'Business details & estimated project report',
      'Last 6 months bank statement',
    ],
    applicationModeLabelEn: 'JanSamarth Portal & Bank Branches',
    officialApplyLabelEn: 'Apply on JanSamarth',
  },
  'pm-vishwakarma-yojana': {
    eligibilityEn: [
      'Minimum age 18 years.',
      'Only one member per family can avail benefits.',
      'Must not have taken a similar loan under PMEGP or MUDRA in the past 5 years.',
    ],
    documentsEn: [
      'Aadhaar Card (mobile linked)',
      'Active Bank Passbook',
      'Ration Card or family details',
    ],
    applicationModeLabelEn: 'CSC Registration',
    officialApplyLabelEn: 'Open Portal',
    statusLabelEn: 'Check Status',
  },
  'udyam-registration-portal': {
    eligibilityEn: [
      'Micro: Investment up to ₹1 Crore & Turnover up to ₹5 Crore.',
      'Small: Investment up to ₹10 Crore & Turnover up to ₹50 Crore.',
      'Medium: Investment up to ₹50 Crore & Turnover up to ₹250 Crore.',
    ],
    documentsEn: [
      'Aadhaar Card of Proprietor/Partner',
      'PAN Card & GST Number (if applicable)',
    ],
    applicationModeLabelEn: '100% Online & Free (No Fee Required)',
    officialApplyLabelEn: 'Register Free',
    statusLabelEn: 'Print Certificate',
  },
  'pm-jan-dhan-yojana': {
    eligibilityEn: [
      'Indian citizen without an existing basic savings bank deposit account.',
    ],
    documentsEn: [
      'Aadhaar Card or Voter Card / MGNREGA Job Card',
    ],
    applicationModeLabelEn: 'Any Bank Branch or Bank Mitra (CSP)',
    officialApplyLabelEn: 'View Details',
  },
  'pm-suraksha-bima-pmsby': {
    eligibilityEn: [
      'Age 18 to 70 years.',
      'Savings bank account with active auto-debit consent.',
    ],
    documentsEn: [
      'Aadhaar Card & Bank Passbook',
    ],
    applicationModeLabelEn: 'Net Banking & Bank Branches',
    officialApplyLabelEn: 'JanSuraksha Portal',
  },
  'nfsa-ration-central': {
    eligibilityEn: [
      'Valid NFSA Digital Ration Card issued by the respective State Food Department.',
    ],
    documentsEn: [
      'Ration Card Number',
      'Aadhaar Card (seeded with ration card for all members)',
    ],
    applicationModeLabelEn: 'State ePDS Portal & Supply Office',
    officialApplyLabelEn: 'Open NFSA Portal',
    statusLabelEn: 'State Portals',
  },
  'myaadhaar-uidai-services': {
    eligibilityEn: [
      'Any resident of India.',
    ],
    documentsEn: [
      '12-digit Aadhaar Number / 28-digit Enrolment ID (EID)',
      'Registered Mobile Number (for OTP verification)',
      'Valid Proof of Address (for address update)',
    ],
    applicationModeLabelEn: 'Online Portal & Aadhaar Seva Kendra (ASK)',
    officialApplyLabelEn: 'Open myAadhaar',
    statusLabelEn: 'Check Validity',
  },
  'digilocker-national-wallet': {
    eligibilityEn: [
      'Indian citizen holding an Aadhaar Card.',
    ],
    documentsEn: [
      'Aadhaar Card & Mobile Number (OTP verification)',
    ],
    applicationModeLabelEn: '100% Free Web Portal & Mobile App',
    officialApplyLabelEn: 'Open DigiLocker',
  },
  'pan-card-nsdl-uti': {
    eligibilityEn: [
      'Indian citizens or entities.',
    ],
    documentsEn: [
      'Proof of Identity (Aadhaar Card)',
      'Proof of Address (Aadhaar / Electricity Bill / Bank Passbook)',
      'Date of Birth Proof (10th Marksheet / Birth Certificate / Aadhaar)',
    ],
    applicationModeLabelEn: 'Online & TIN-FC Facilitation Centres',
    officialApplyLabelEn: 'Apply Online',
    statusLabelEn: 'Track Status',
  },
  'pm-surya-ghar-yojana': {
    eligibilityEn: [
      'Valid residential electricity connection (DISCOM Consumer ID) in applicant’s name.',
      'Suitable shadow-free roof space and roof ownership.',
    ],
    documentsEn: [
      'Latest Electricity Bill showing CA/Consumer Number',
      'Aadhaar Card & rooftop photo',
      'Bank Passbook (for subsidy DBT credit)',
    ],
    applicationModeLabelEn: 'Online National Solar Portal',
    officialApplyLabelEn: 'Apply Online',
    statusLabelEn: 'Check Status',
  },
  'pm-ujjwala-yojana': {
    eligibilityEn: [
      'Adult woman applicant aged 18 years or above.',
      'No existing LPG connection in any household member’s name.',
    ],
    documentsEn: [
      'Woman’s Aadhaar Card & family Ration Card',
      'Bank Account details (Aadhaar Seeded)',
      '14-point e-KYC declaration',
    ],
    applicationModeLabelEn: 'Online Portal & Local Gas Agency',
    officialApplyLabelEn: 'Apply Online',
    statusLabelEn: 'Track Status',
  },
  'mgnrega-job-card': {
    eligibilityEn: [
      'Permanent resident of a rural household.',
      'Minimum age 18 years completed.',
    ],
    documentsEn: [
      'Aadhaar Cards of household members',
      'Bank or Post Office Savings Passbook',
      'Passport Photos',
    ],
    applicationModeLabelEn: 'Gram Panchayat / Rozgar Sevak Office',
    officialApplyLabelEn: 'Open Portal',
    statusLabelEn: 'View Job Card',
  },
  'parivahan-sarathi-portal': {
    eligibilityEn: [
      'Gearless two-wheeler (up to 50cc): Minimum 16 years.',
      'Geared motorcycle / Light Motor Vehicle (Car): Minimum 18 years.',
      'Commercial transport vehicle: Minimum 20 years.',
    ],
    documentsEn: [
      'Aadhaar Card (mobile number linked)',
      'Age & Address Proof',
      'Medical Certificate Form 1A (for age 40+ or commercial licence)',
    ],
    applicationModeLabelEn: '100% Online (Sarathi Parivahan Portal)',
    officialApplyLabelEn: 'Apply Online',
    statusLabelEn: 'Track Status',
  },
  'passport-seva-portal': {
    eligibilityEn: [
      'Proof of Indian citizenship.',
    ],
    documentsEn: [
      'Aadhaar Card / Voter ID / PAN Card',
      'Date of Birth Proof (10th Marksheet / Birth Certificate)',
      'Residence Proof',
    ],
    applicationModeLabelEn: 'Online Form & PSK Biometrics',
    officialApplyLabelEn: 'Open Passport Portal',
    statusLabelEn: 'Track Status',
  },
};

export interface DivyangjanEn {
  minDisabilityEn: string;
  financialAssistanceEn: string;
  eligibilityEn: string[];
  documentsEn: string[];
  applicationModeLabelEn: string;
  officialApplyLabelEn: string;
  statusLabelEn?: string;
}

export const DIVYANGJAN_EN: Record<string, DivyangjanEn> = {
  'div-udid-card': {
    minDisabilityEn: '40% or above (certified by Medical Board)',
    financialAssistanceEn: 'Free digital smart card & valid nationwide certificate (lifetime/specified validity)',
    eligibilityEn: [
      'Any Indian citizen affected by disability',
      'Formal medical assessment and certification from Govt. Hospital / Medical Board',
      'Persons falling under any of the 21 benchmark disabilities notified under RPwD Act 2016',
    ],
    documentsEn: [
      'Recent colour passport photo (white background)',
      'Signature or thumb impression',
      'Proof of Identity (Aadhaar Card / Voter ID / PAN Card)',
      'Proof of Address (Ration Card / Electricity Bill / Domicile)',
      'Old disability certificate (if previously issued offline)',
    ],
    applicationModeLabelEn: 'Online (Swavlamban Portal)',
    officialApplyLabelEn: 'Apply Online for UDID Card',
    statusLabelEn: 'Track Application & Card Status',
  },
  'div-bihar-pension': {
    minDisabilityEn: '40% or above',
    financialAssistanceEn: '₹400 per month (directly to bank account via DBT)',
    eligibilityEn: [
      'Applicant must be a permanent resident of Bihar',
      'Valid 40%+ disability certificate from Civil Surgeon / Medical Board or UDID Card',
      'Annual household income within prescribed limit (BPL or eligible limit)',
      'Must not be availing duplicate benefits of another similar government pension scheme',
    ],
    documentsEn: [
      'Aadhaar Card (linked to bank account for DBT)',
      'Disability Certificate / UDID Card',
      'Bihar Residence Certificate (issued via RTPS)',
      'Income Certificate / Ration Card (BPL list)',
      'Bank Passbook front page copy (with IFSC)',
      'Passport Size Photo',
    ],
    applicationModeLabelEn: 'Online (RTPS) & Offline (Block / RTPS Counter)',
    officialApplyLabelEn: 'Apply Online on Bihar RTPS Portal',
    statusLabelEn: 'Check e-Labharthi Payment Status',
  },
  'div-central-igndps': {
    minDisabilityEn: '80% or Severe / Multiple Disability',
    financialAssistanceEn: '₹300–₹500 Central Share + State Top-up (via DBT)',
    eligibilityEn: [
      'Age between 18 and 79 years',
      'Disability percentage 80% or higher (severe) or multiple disabilities',
      'Applicant’s family must be listed under Below Poverty Line (BPL)',
    ],
    documentsEn: [
      'Aadhaar Card',
      '80%+ Disability Certificate from Medical Board or UDID Card',
      'BPL Certificate / Ration Card',
      'Age Proof',
      'Aadhaar-linked Bank Passbook',
    ],
    applicationModeLabelEn: 'Online (NSAP Portal) & Offline (Local Block Office)',
    officialApplyLabelEn: 'View Details on NSAP National Portal',
    statusLabelEn: 'Check NSAP Pension Application Status',
  },
  'div-bihar-vivah-protsahan': {
    minDisabilityEn: '40% or above',
    financialAssistanceEn: '₹1,00,000 (One Lakh Rupees) Fixed Deposit / Financial Incentive',
    eligibilityEn: [
      'At least one spouse must be a permanent resident of Bihar',
      'At least one spouse (bride or groom) must have 40%+ certified disability',
      'Legal marriageable age fulfilled (Groom min. 21 years, Bride min. 18 years)',
      'Marriage Registration Certificate from competent authority mandatory',
      'Application must be submitted within the prescribed period after marriage',
    ],
    documentsEn: [
      'Marriage Registration Certificate',
      'Aadhaar Cards of both Bride and Groom',
      'Disability Certificate / UDID Card (40% or above)',
      'Bihar Permanent Residence Certificate',
      'Age Proof (Matric Certificate or Birth Certificate)',
      'Joint Bank Account Passbook',
      'Joint Marriage Photograph',
    ],
    applicationModeLabelEn: 'Offline (District Social Security Cell / Assistant Director Office)',
    officialApplyLabelEn: 'View Guidelines on Social Welfare Bihar',
    statusLabelEn: 'Contact District Social Security Cell',
  },
  'div-adip-aids': {
    minDisabilityEn: '40% or above',
    financialAssistanceEn: '100% Free Aids (income up to ₹15,000/month) or 50% Subsidy (income ₹15,001–₹22,500)',
    eligibilityEn: [
      'Indian citizen of any age group',
      'Holder of 40%+ Disability Certificate or UDID Card',
      'Monthly family income not exceeding ₹22,500',
      'Must not have received similar aid from govt. in last 3 years (1 year for children)',
    ],
    documentsEn: [
      'Disability Certificate / UDID Card',
      'Income Certificate (by Revenue Officer / BPL Ration Card)',
      'Residence Proof & Aadhaar Card',
      'Passport Size Photo clearly showing disability',
    ],
    applicationModeLabelEn: 'Online (ADIP Portal) & Local ALIMCO Distribution Camps',
    officialApplyLabelEn: 'Register Online on ADIP Portal',
    statusLabelEn: 'View Distribution Camps & Status',
  },
  'div-bihar-sambal': {
    minDisabilityEn: '60% or above (Locomotor Disability)',
    financialAssistanceEn: 'Free Battery / Motorized Tricycle (worth approx. ₹42,000)',
    eligibilityEn: [
      'Applicant must be a permanent resident of Bihar',
      'Minimum age 18 years completed',
      'Locomotor disability of 60% or above',
      'Studying in a higher educational institute or engaged in regular employment/self-employment',
      'Applicant must not already own a motorized vehicle',
    ],
    documentsEn: [
      'UDID Card / Civil Surgeon Disability Certificate (60%+)',
      'Bihar Domicile Certificate',
      'College/University ID Card or proof of employment/business',
      'Aadhaar Card',
      'Income Certificate (annual income below ₹2 Lakh)',
      'Passport Size Photo',
    ],
    applicationModeLabelEn: 'Online (Sambal Portal / Social Welfare Bihar)',
    officialApplyLabelEn: 'Sambal Scheme Guidelines & Portal',
    statusLabelEn: 'Check at District Social Security Office',
  },
  'div-national-scholarship': {
    minDisabilityEn: '40% or above',
    financialAssistanceEn: '₹4,000 to ₹15,000+ per year (maintenance + book grant as per course level)',
    eligibilityEn: [
      'Valid 40%+ Disability Certificate or UDID Card',
      'Studying regularly in a recognized government or private school/college',
      'Parents/guardian total annual income not exceeding ₹2.5 Lakh',
      'Pre-Matric for Classes 9–10; Post-Matric from Class 11 onwards',
    ],
    documentsEn: [
      'UDID Card / Disability Certificate',
      'Aadhaar Card (with Aadhaar-Seeded Bank Account)',
      'Marksheet of last passed examination',
      'Current session fee receipt / Bonafide Certificate',
      'Parents’ Income Certificate',
      'Bank Passbook',
    ],
    applicationModeLabelEn: 'Online (National Scholarship Portal - NSP)',
    officialApplyLabelEn: 'Apply Online on NSP Portal',
    statusLabelEn: 'Check NSP Application Status & OTR',
  },
  'div-top-class-scholarship': {
    minDisabilityEn: '40% or above',
    financialAssistanceEn: 'Full Tuition Fees + ₹3,000/month Living Allowance + ₹30,000 One-time Computer Grant',
    eligibilityEn: [
      'Admitted to full-time course in notified 240+ premier national institutions',
      'Minimum 40% Disability Certificate or UDID Card',
      'Annual family income not exceeding ₹8.00 Lakh',
      '300 fresh slots allotted annually on merit basis',
    ],
    documentsEn: [
      'UDID Card / Disability Certificate',
      'Institute Admission Letter & Fee Structure',
      'Income Certificate from competent authority',
      'Class 12th / Graduation Marksheet',
      'Aadhaar Card & Bank Passbook',
    ],
    applicationModeLabelEn: 'Online (National Scholarship Portal)',
    officialApplyLabelEn: 'Apply on NSP Top Class Portal',
    statusLabelEn: 'Check NSP Application Status',
  },
  'div-nhfdc-loan': {
    minDisabilityEn: '40% or above',
    financialAssistanceEn: 'Loans from ₹50,000 to ₹50 Lakh (at concessional 4%–8% annual interest)',
    eligibilityEn: [
      'Indian citizen with 40%+ Disability Certificate',
      'Age between 18 and 55 years',
      'Not a defaulter of any bank or financial institution',
      'Feasible business/shop/enterprise Project Proposal',
    ],
    documentsEn: [
      'UDID Card / Disability Certificate',
      'Aadhaar Card, PAN Card & Address Proof',
      'Proposed Business / Shop Project Report',
      'Income Certificate',
      'Bank Statement (last 6 months) & Guarantor details',
    ],
    applicationModeLabelEn: 'Online (NDFDC Portal) & State Channelizing Agencies (SCAs)',
    officialApplyLabelEn: 'Visit NDFDC Official Website',
    statusLabelEn: 'Check State Nodal Agency & Loan Status',
  },
  'div-sipda-skills': {
    minDisabilityEn: '40% or above',
    financialAssistanceEn: '100% Free Training + Travel/Stipend Allowance + Placement Assistance',
    eligibilityEn: [
      '40%+ Disability Certificate or UDID Card',
      'Age 15 years or above',
      'Minimum educational qualification (8th/10th/12th pass depending on trade)',
    ],
    documentsEn: [
      'UDID Card / Disability Certificate',
      'Aadhaar Card',
      'Educational Qualification Certificate',
      'Passport Size Photo & Bank Passbook',
    ],
    applicationModeLabelEn: 'Online (SCPwD / SIPDA) & Nearest Training Centre',
    officialApplyLabelEn: 'View DEPwD Skill Training Schemes',
    statusLabelEn: 'View List of Training Centres',
  },
  'div-railway-concession': {
    minDisabilityEn: '40% or above (in prescribed Railway format)',
    financialAssistanceEn: '25% to 75% concession on train fares (including 1 escort)',
    eligibilityEn: [
      'Certificate issued by Govt. Doctor in the prescribed Railway Concession Format',
      'One escort traveling with the passenger is also eligible for the same concession',
      'Unique Divyang Photo Card can be issued from DRM Office for online IRCTC booking',
    ],
    documentsEn: [
      'Disability Certificate in prescribed Railway format (signed & stamped)',
      'UDID Card & Aadhaar Card',
      'Age Proof & 4 Passport Size Photos',
      'Local Address Proof',
    ],
    applicationModeLabelEn: 'Offline (DRM Office Counter) & Online (IRCTC Portal)',
    officialApplyLabelEn: 'IRCTC Divyang e-Ticketing Portal',
    statusLabelEn: 'IRCTC Concession Rules & Verification',
  },
  'div-bus-pass-rights': {
    minDisabilityEn: '40% or above',
    financialAssistanceEn: 'Free / Heavily Subsidized Travel Pass (Annually Renewable)',
    eligibilityEn: [
      'Applicant must be a permanent resident of Bihar',
      '40%+ Disability Certificate from Medical Authority or UDID Card',
      'Pass and ID proof must be presented to conductor/inspector during journey',
    ],
    documentsEn: [
      'Copy of UDID Card / Disability Certificate',
      'Aadhaar Card & Bihar Domicile Certificate',
      '2 Passport Size Photos',
      'BSRTC Bus Pass Application Form',
    ],
    applicationModeLabelEn: 'Offline (BSRTC Main Bus Depot / District Transport Office)',
    officialApplyLabelEn: 'Bihar Transport Department Portal',
    statusLabelEn: 'Check at Nearest BSRTC Bus Depot',
  },
};

export function pickText(language: LanguageMode, hi: string, en: string, sep: 'parens' | 'slash' = 'parens'): string {
  if (language === 'hi') return hi;
  if (language === 'en') return en;
  if (!hi) return en;
  if (!en || hi === en) return hi;
  return sep === 'slash' ? `${hi} / ${en}` : `${hi} (${en})`;
}

export function pickArray(language: LanguageMode, hiArr: string[], enArr?: string[]): string[] {
  if (language === 'hi') return hiArr;
  if (language === 'en') return enArr && enArr.length > 0 ? enArr : hiArr;
  return hiArr.map((hi, i) => {
    const en = enArr?.[i];
    if (!en || en === hi) return hi;
    return `${hi} (${en})`;
  });
}
