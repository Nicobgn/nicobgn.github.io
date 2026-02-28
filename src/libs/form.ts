export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honeypot?: string; // Campo oculto para evitar spam
};

type FormFeedback = {
  type: 'success' | 'error';
  message: string;
};

type FormHandlers = {
  setFeedback: (feedback: FormFeedback | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setForm: (form: ContactForm) => void;
  mountedAt: number;
};

export const fetchForm = async (
  form: ContactForm,
  handlers: FormHandlers,
) => {
  const { name, email, subject, message } = form;
  const { setFeedback, setIsLoading, setForm, mountedAt } = handlers;

  const ellapsed = Date.now() - mountedAt;

  if (ellapsed < 3000) {
    setFeedback({
      type: 'error',
      message: 'Por favor espera un momento antes de enviar el formulario'
    });
    return;
  }

  if (form._honeypot) {
    return;
  }

  if (!name || !email || !subject || !message) {
    setFeedback({
      type: 'error',
      message: 'Por favor completa todos los campos'
    });
    return;
  }

  setIsLoading(true);
  setFeedback(null);

  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    // formData.append('_captcha', 'false');
    formData.append('_template', 'table');
    formData.append('_honey', form._honeypot || '');
    formData.append('_subject', `Nuevo mensaje de ${name}: ${subject}`);
    formData.append('_replyto', email);
    formData.append('_captcha', 'false');

    const formHeaders = new Headers();
    formHeaders.append('Accept', 'application/json');
    formHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    console.log(formData)

    const response = await fetch('https://formsubmit.co/83bb7506c7b164e34e6f12e6f10bf08a', {
      method: 'POST',
      body: formData,
      headers: formHeaders,
    });

    console.log(response);

    if (response.ok) {
      setFeedback({
        type: 'success',
        message: '¡Mensaje enviado correctamente! Te responderé pronto.'
      });
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      throw new Error('Error al enviar el formulario');
    }
  } catch (error) {
    setFeedback({
      type: 'error',
      message: 'Hubo un error al enviar el mensaje. Intenta de nuevo.'
    });
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};
