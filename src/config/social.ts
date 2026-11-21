/**
 * Social Media and Contact Configuration for SARKARI TALK
 * 
 * Edit this file to update social media links and contact options.
 * The WhatsApp phone number is kept empty until explicitly provided by the user.
 * No phone number is ever rendered on the public website.
 */

export interface SocialConfig {
  email: string;
  emailLink: string;
  instagram: {
    label: string;
    url: string;
  };
  youtube: {
    label: string;
    url: string;
  };
  facebook: {
    label: string;
    url: string;
  };
  whatsapp: {
    label: string;
    /**
     * International phone number with digits only (no +, spaces, or hyphens).
     * e.g., "919876543210". Left empty by default until configured.
     */
    phoneNumber: string;
    /**
     * Optional pre-filled message when starting chat
     */
    defaultMessage: string;
  };
}

export const SOCIAL_CONFIG: SocialConfig = {
  // Required exact Gmail address
  email: 'Sarkaritalk23@gmail.com',
  emailLink: 'mailto:Sarkaritalk23@gmail.com',

  // Instagram: Sarkari Talk
  instagram: {
    label: 'Sarkari Talk',
    url: 'https://www.instagram.com/sarkaritalk01/',
  },

  // YouTube: Sarkari Talk
  youtube: {
    label: 'Sarkari Talk',
    url: 'https://youtube.com/@sarkaritalk', // Replace with verified channel URL when ready
  },

  // Facebook: Sarkari Talk
  facebook: {
    label: 'Sarkari Talk',
    url: 'https://www.facebook.com/sarkaritalk', // Replace with verified page URL when ready
  },

  // WhatsApp: Chat on WhatsApp
  // Set phoneNumber to international format (digits only, e.g. "91XXXXXXXXXX") to activate.
  // Left empty by default per user requirements.
  whatsapp: {
    label: 'Chat on WhatsApp',
    phoneNumber: '', 
    defaultMessage: 'Hello Sarkari Talk team, I need assistance regarding a government service.',
  },
};

/**
 * Returns direct wa.me link if a valid phone number is configured, or null if inactive.
 */
export function getWhatsAppUrl(): string | null {
  const cleanNumber = SOCIAL_CONFIG.whatsapp.phoneNumber.replace(/[^0-9]/g, '');
  if (!cleanNumber || cleanNumber.length < 8) {
    return null;
  }
  const encodedMsg = encodeURIComponent(SOCIAL_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}
