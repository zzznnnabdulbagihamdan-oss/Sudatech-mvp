import { useTranslation } from 'react-i18next';
import { Mail, Phone, MessageCircle, Linkedin, Facebook } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'zzznnnabdulbagihamdan@gmail.com',
      link: 'mailto:zzznnnabdulbagihamdan@gmail.com',
      color: '#ef4444'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+249 128 020 157',
      link: 'tel:+249128020157',
      color: '#3b82f6'
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: '+249 965 656 367',
      link: 'https://wa.me/249965656367',
      color: '#10b981'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/abdulbagi-hamdan-adam-ismail-097742340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0a66c2'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      link: 'https://www.facebook.com/share/1Lj1fesWZV/',
      color: '#1877f2'
    }
  ];

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-methods">
          {contactInfo.map((method, idx) => {
            const Icon = method.icon;
            return (
              <a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon" style={{ backgroundColor: method.color }}>
                  <Icon size={24} />
                </div>
                <div className="contact-details">
                  <h4>{method.label}</h4>
                  <p>{method.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="social-methods">
          <h3>{t('contact.follow_us')}</h3>
          <div className="social-buttons">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  style={{ backgroundColor: social.color }}
                  title={social.label}
                >
                  <Icon size={24} />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
