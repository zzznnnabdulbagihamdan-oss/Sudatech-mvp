import { useTranslation } from 'react-i18next';
import { Send, Zap } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import './AiTutor.css';

export default function AiTutor() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'مرحباً! أنا معلمك الذكي. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      const responses = [
        'هذا سؤال رائع! دعني أشرح لك بالتفصيل...',
        'أفهم سؤالك. الإجابة هي...',
        'هذا موضوع مهم جداً. دعنا نناقشه معاً...',
        'ممتاز! أنت تتعلم بسرعة. الجواب هو...'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: 'ai', text: randomResponse }]);
      setIsLoading(false);
    }, 1000);
  };

  const suggestedQuestions = [
    'اشرح لي المعادلات الخطية',
    'كيف أحل هذه المسألة؟',
    'ما هو الفرق بين...',
    'أعطني أمثلة على...'
  ];

  return (
    <div className="ai-tutor">
      <div className="tutor-header">
        <div className="tutor-title">
          <Zap size={24} />
          <h1>{t('ai_tutor.title')}</h1>
        </div>
        <p>معلمك الذكي متاح 24/7 للإجابة على أسئلتك</p>
      </div>

      <div className="tutor-content">
        <div className="messages-container">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              <div className="message-bubble">
                {msg.type === 'ai' && <span className="ai-icon">🤖</span>}
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message ai">
              <div className="message-bubble">
                <span className="ai-icon">🤖</span>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="suggested-questions">
          <p>أسئلة مقترحة:</p>
          <div className="questions-grid">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                className="question-btn"
                onClick={() => {
                  setInput(q);
                }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="input-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('ai_tutor.ask_question')}
            disabled={isLoading}
            className="message-input"
          />
          <button type="submit" disabled={isLoading || !input.trim()} className="send-btn">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
