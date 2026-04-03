import { useTranslation } from 'react-i18next';
import { LayoutDashboard, BookOpen, GraduationCap, TrendingUp, Zap, Users, FileText, Mail } from 'lucide-react';
import { useState } from 'react';
import './Sidebar.css';

export default function Sidebar({ activeTab, setActiveTab }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: t('sidebar.dashboard'), icon: LayoutDashboard },
    { id: 'courses', label: t('sidebar.courses'), icon: BookOpen },
    { id: 'lessons', label: t('sidebar.lessons'), icon: GraduationCap },
    { id: 'progress', label: t('sidebar.progress'), icon: TrendingUp },
    { id: 'ai_tutor', label: t('sidebar.ai_tutor'), icon: Zap },
    { id: 'community', label: t('sidebar.community'), icon: Users },
    { id: 'contact', label: t('contact.title'), icon: Mail }
  ];

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="nav-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
