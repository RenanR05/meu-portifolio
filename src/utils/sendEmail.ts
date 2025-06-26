import emailjs from '@emailjs/browser';

export const sendEmail = async (
  form: HTMLFormElement,
  serviceId: string,
  templateId: string,
  publicKey: string
) => {
  try {
    const result = await emailjs.sendForm(serviceId, templateId, form, publicKey);
    return { success: true, result };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
};
