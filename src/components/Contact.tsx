import React, { useRef, useState } from 'react';
import { sendEmail } from '../utils/sendEmail';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || isSending) return;

    setIsSending(true);

    const { success } = await sendEmail(
      formRef.current,
      'service_hl5hx58',
      'template_d2pwehl',
      'ZoeEo4DYXdtEqJmTd'
    );

    if (success) {
      setStatusMessage(t('ContactSuccess'));
      setStatusType('success');
      formRef.current.reset();
    } else {
      setStatusMessage(t('ContactError'));
      setStatusType('error');
    }

    setTimeout(() => {
      setStatusMessage('');
      setStatusType('');
    }, 5000);

    setIsSending(false);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">{t('Contact')}</h2>

      {statusMessage && (
        <div className={`form-status ${statusType}`}>{statusMessage}</div>
      )}

      <div className="contact-container bd-grid">
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder={t('ContactName')}
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('ContactEmail')}
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder={t('ContactMessage')}
            cols={0}
            rows={10}
            className="contact-input"
            required
          ></textarea>

          <input
            type="submit"
            value={isSending ? t('ContactSending') : t('ContactSend')}
            className="contact-button button"
            disabled={isSending}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
