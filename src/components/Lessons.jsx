import { useTranslation } from 'react-i18next';
import { Play, FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import './Lessons.css';

export default function Lessons() {
  const { t } = useTranslation();
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    { id: 1, title: 'مقدمة الرياضيات', course: t('courses.mathematics'), duration: '45 دقيقة', completed: true },
    { id: 2, title: 'الجبر الأساسي', course: t('courses.mathematics'), duration: '60 دقيقة', completed: true },
    { id: 3, title: 'الهندسة', course: t('courses.mathematics'), duration: '50 دقيقة', completed: false },
    { id: 4, title: 'مقدمة العلوم', course: t('courses.science'), duration: '40 دقيقة', completed: false },
    { id: 5, title: 'الفيزياء', course: t('courses.science'), duration: '55 دقيقة', completed: false }
  ];

  return (
    <div className="lessons-container">
      <div className="lessons-header">
        <h1>{t('lessons.title')}</h1>
      </div>

      <div className="lessons-layout">
        <div className="lessons-list">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`lesson-card ${selectedLesson?.id === lesson.id ? 'active' : ''} ${lesson.completed ? 'completed' : ''}`}
              onClick={() => setSelectedLesson(lesson)}
            >
              <div className="lesson-icon">
                {lesson.completed ? <CheckCircle size={20} /> : <Play size={20} />}
              </div>
              <div className="lesson-info">
                <h3>{lesson.title}</h3>
                <p>{lesson.course}</p>
                <span className="duration">{lesson.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="lesson-viewer">
          {selectedLesson ? (
            <>
              <div className="lesson-header">
                <h2>{selectedLesson.title}</h2>
                <p>{selectedLesson.course}</p>
              </div>

              <div className="lesson-content">
                <div className="video-placeholder">
                  <Play size={64} />
                  <p>🎥 {t('lessons.video')}</p>
                </div>

                <div className="lesson-section">
                  <h3>{t('lessons.reading')}</h3>
                  <p>هنا يتم عرض محتوى الدرس والشرح التفصيلي للموضوع مع أمثلة عملية وتطبيقات مهمة.</p>
                </div>

                <div className="lesson-section">
                  <h3>{t('lessons.exercises')}</h3>
                  <div className="exercises-list">
                    <button className="btn btn-secondary">{t('lessons.practice_exercise')} 1</button>
                    <button className="btn btn-secondary">{t('lessons.practice_exercise')} 2</button>
                    <button className="btn btn-secondary">{t('lessons.quiz')}</button>
                  </div>
                </div>

                <div className="lesson-actions">
                  <button className="btn btn-primary">{t('lessons.complete_lesson')}</button>
                  <button className="btn btn-outline">{t('lessons.next_lesson')}</button>
                </div>
              </div>
            </>
          ) : (
            <div className="no-lesson-selected">
              <FileText size={64} />
              <p>{t('lessons.select_lesson')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
