import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Lessons from './components/Lessons';
import AiTutor from './components/AiTutor';
import Contact from './components/Contact';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'ar';
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <Courses />;
      case 'lessons':
        return <Lessons />;
      case 'ai_tutor':
        return <AiTutor />;
      case 'contact':
        return <Contact />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="app-layout">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
