export type CategoryId = 
  | 'identity-documents'
  | 'government-schemes'
  | 'bihar-services'
  | 'education-scholarships'
  | 'jobs-recruitment'
  | 'agriculture-farmers'
  | 'health-welfare'
  | 'transport-vehicles'
  | 'banking-pension'
  | 'business-employment'
  | 'other-services';

export interface Category {
  id: CategoryId;
  nameHi: string;
  nameEn: string;
  description: string;
  iconName: string;
  badgeCount?: number;
  featured?: boolean;
}

export interface ServiceArticle {
  id: string;
  slug: string;
  titleHi: string;
  titleEn: string;
  categoryId: CategoryId;
  state: 'Central' | 'Bihar' | 'All India' | 'State Specific';
  department: string;
  shortSummary: string;
  verifiedDate: string; // YYYY-MM-DD
  statusVerification: 'verified' | 'confirm_on_portal';
  officialPortalUrl: string;
  officialPortalName: string;
  officialApplicationUrl?: string;
  statusCheckUrl?: string;
  downloadUrl?: string;
  
  // Section 5 Template Fields
  whatIs: string;
  purposeAndBenefits: string[];
  eligibility: string[];
  ineligibility: string[];
  documentsRequired: string[];
  fees: {
    officialFee: string;
    note?: string;
    paymentMode?: string;
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
  importantDates?: {
    label: string;
    dateOrStatus: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  officialSources: {
    title: string;
    url: string;
  }[];
  relatedVideoId?: string;
  relatedArticleSlugs?: string[];
  status: 'published' | 'draft' | 'archived';
}

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  titleHi: string;
  titleEn: string;
  description: string;
  categoryId: CategoryId;
  publishedDate: string;
  duration?: string;
  relatedArticleSlug?: string;
  thumbnailUrl?: string;
}

export interface OfficialPortal {
  id: string;
  nameHi: string;
  nameEn: string;
  url: string;
  level: 'Central' | 'Bihar' | 'National Utility';
  department: string;
  servicesCovered: string[];
  description: string;
  isPopular?: boolean;
}

export interface SearchFilters {
  query: string;
  category?: CategoryId | 'all';
  state?: string;
  verificationStatus?: string;
}
