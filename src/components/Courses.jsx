import { useTranslation } from 'react-i18next';
import { BookOpen, Users, Clock } from 'lucide-react';
import './Courses.css';

export default function Courses() {
  const { t } = useTranslation();

  const courses = [
    {
      id: 1,
      name: t('courses.mathematics'),
      icon: '📐',
      lessons: 15,
      students: 1250,
      duration: '45 ساعة',
      progress: 85,
      color: '#3b82f6'
    },
    {
      id: 2,
      name: t('courses.science'),
      icon: '🔬',
      lessons: 15,
      students: 980,
      duration: '50 ساعة',
      progress: 60,
      color: '#10b981'
    },
    {
      id: 3,
      name: t('courses.arabic'),
      icon: '📚',
      lessons: 15,
      students: 1100,
      duration: '40 ساعة',
      progress: 90,
      color: '#f59e0b'
    },
    {
      id: 4,
      name: t('courses.english'),
      icon: '🌐',
      lessons: 15,
      students: 850,
      duration: '45 ساعة',
      progress: 45,
      color: '#8b5cf6'
    },
    {
      id: 5,
      name: t('courses.social_studies'),
      icon: '🌍',
      lessons: 12,
      students: 920,
      duration: '35 ساعة',
      progress: 70,
      color: '#ec4899'
    }
  ];

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>{t('courses.title')}</h1>
        <p>اختر المقرر الذي تريد دراسته</p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card" style={{ borderTopColor: course.color }}>
            <div className="course-header">
              <span className="course-icon">{course.icon}</span>
              <h3>{course.name}</h3>
            </div>

            <div className="course-stats">
              <div className="stat">
                <BookOpen size={16} />
                <span>{course.lessons} {t('courses.lessons_count')}</span>
              </div>
              <div className="stat">
                <Users size={16} />
                <span>{course.students} طالب</span>
              </div>
              <div className="stat">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-label">
                <span>{t('courses.progress')}</span>
                <span className="progress-value">{course.progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${course.progress}%`, backgroundColor: course.color }}></div>
              </div>
            </div>

            <div className="course-actions">
              {course.progress === 0 ? (
                <button className="btn btn-primary" style={{ backgroundColor: course.color }}>
                  {t('courses.start_course')}
                </button>
              ) : (
                <button className="btn btn-secondary">
                  {t('courses.continue_course')}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
