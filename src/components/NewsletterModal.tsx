import React, { useState } from 'react';
import { CheckCircle2, Bell, X, ShieldCheck } from 'lucide-react';
import { saveSubscriber } from '../utils/storage';
import { useLanguage } from '../context/LanguageContext';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const { pick } = useLanguage();
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState('all');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact.trim()) {
      saveSubscriber(contact, category);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setContact('');
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
          <Bell className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-black text-slate-900 mb-1">
          {pick('सरकारी योजना व सेवा अपडेट्स पाएं', 'Get Government Scheme & Service Alerts')}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {pick(
            'बिहार RTPS, नई छात्रवृत्ति, PM किसान किस्त और अंतिम तिथियों के महत्वपूर्ण अलर्ट सीधे अपने ईमेल या फोन पर प्राप्त करें। (100% निःशुल्क और स्पैम-मुक्त)',
            'Receive verified alerts on Bihar RTPS updates, scholarship deadlines, and PM-Kisan installments directly via email or phone. (100% Free & Spam-Free)'
          )}
        </p>

        {submitted ? (
          <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-1 text-xs">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-emerald-900 text-sm">
              {pick('धन्यवाद! आप सफलतापूर्वक जुड़ गए हैं।', 'Thank you! You are successfully subscribed.')}
            </h4>
            <p className="text-emerald-700">
              {pick('हम केवल सत्यापित सरकारी सूचनाएं ही साझा करेंगे।', 'We only share verified official government updates.')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {pick('ईमेल या 10 अंकों का मोबाइल नंबर', 'Email or 10-Digit Mobile Number')}
              </label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={pick('name@example.com या 98XXXXXXXX', 'name@example.com or 98XXXXXXXX')}
                className="w-full p-2.5 border border-slate-300 rounded-xl"
                autoFocus
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {pick('रुचि का क्षेत्र', 'Preferred Category', 'रुचि का क्षेत्र (Preferred Category)')}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-xl bg-white"
              >
                <option value="all">{pick('सभी सेवाएँ व योजनाएँ (भारत व बिहार)', 'All Services & Schemes (All India & Bihar)')}</option>
                <option value="bihar">{pick('विशेष रूप से बिहार सरकारी सेवाएँ (RTPS/भूमि)', 'Bihar Government Services (RTPS / Land)')}</option>
                <option value="farmers">{pick('किसान कल्याण (PM Kisan/कृषि)', 'Farmers Welfare (PM-Kisan / Agriculture)')}</option>
                <option value="students">{pick('छात्रवृत्ति और शिक्षा (Scholarship/NSP)', 'Scholarships & Education (NSP / Student)')}</option>
                <option value="jobs">{pick('सरकारी भर्ती व एडमिट कार्ड', 'Government Recruitment & Admit Cards')}</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                {pick('मुफ्त अपडेट्स चालू करें', 'Subscribe to Free Alerts')}
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {pick('आपका डेटा पूर्णतः गोपनीय रहता है। कभी भी अनसब्सक्राइब करें।', 'Your data stays 100% private. Unsubscribe anytime.')}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
