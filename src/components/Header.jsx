import { useTranslation } from 'react-i18next';
import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">🎓</div>
          <div className="logo-text">
            <h2>SudaTech</h2>
          </div>
        </div>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {i18n.language === 'ar' ? 'EN' : 'العربية'}
          </button>
          <button className="user-menu">
            <span className="user-avatar">👤</span>
            <span>{t('platform.profile')}</span>
          </button>
          <button className="logout-btn" title={t('platform.logout')}>
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
