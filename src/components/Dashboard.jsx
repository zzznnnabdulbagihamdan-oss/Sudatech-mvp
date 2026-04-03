import { useTranslation } from 'react-i18next';
import { TrendingUp, BookOpen, Award, Clock } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  const { t } = useTranslation();

  const stats = [
    { icon: TrendingUp, label: t('dashboard.completion_rate'), value: '75%', color: '#10b981' },
    { icon: Clock, label: t('dashboard.hours_learned'), value: '24h', color: '#f59e0b' },
    { icon: BookOpen, label: t('dashboard.recent_courses'), value: '5', color: '#06b6d4' },
    { icon: Award, label: t('dashboard.certificates'), value: '3', color: '#8b5cf6' }
  ];

  const recentCourses = [
    { id: 1, name: t('courses.mathematics'), progress: 85, lessons: '12/15' },
    { id: 2, name: t('courses.science'), progress: 60, lessons: '9/15' },
    { id: 3, name: t('courses.arabic'), progress: 90, lessons: '14/15' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>{t('dashboard.title')}</h1>
        <p>{t('dashboard.welcome_message')}</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="stat-card" style={{ borderTopColor: stat.color }}>
              <div className="stat-icon" style={{ color: stat.color }}>
                <Icon size={24} />
              </div>
              <div className="stat-content">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dashboard-section">
        <h2>{t('dashboard.recent_courses')}</h2>
        <div className="courses-list">
          {recentCourses.map((course) => (
            <div key={course.id} className="course-item">
              <div className="course-info">
                <h3>{course.name}</h3>
                <p>{course.lessons}</p>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
              </div>
              <span className="progress-text">{course.progress}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h2>{t('dashboard.statistics')}</h2>
        <div className="stats-chart">
          <p style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
            📊 {t('dashboard.your_progress')}
          </p>
        </div>
      </div>
    </div>
  );
}
