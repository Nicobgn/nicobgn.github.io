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

type Messages = {
  [key: string]: string | { [key: string]: string } | any;
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
  msg: Messages,
) => {
  const { name, email, subject, message } = form;
  const { setFeedback, setIsLoading, setForm, mountedAt } = handlers;

  const ellapsed = Date.now() - mountedAt;

  if (ellapsed < 3000) {
    setFeedback({
      type: 'error',
      message: msg.validation.tooFast,
    });
    return;
  }

  if (form._honeypot) {
    setFeedback({
      type: 'error',
      message: msg.validation.honeypot,
    })
    return;
  }

  if (!name || !email || !subject || !message) {
    setFeedback({
      type: 'error',
      message: msg.validation.required,
    });
    return;
  }

  setIsLoading(true);
  setFeedback(null);

  try {
    const formData = new FormData();
    formData.append('_template', 'table');
    form._honeypot && formData.append('_honey', form._honeypot);
    formData.append('_subject', `Nuevo mensaje de ${name}: ${subject}`);
    formData.append('_replyto', email);
    formData.append('_captcha', 'false');

    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    const formHeaders = new Headers();
    formHeaders.append('Accept', 'application/json');
    // formHeaders.append('Content-Type', 'application/json');

    console.log(Object.fromEntries(formData));

    const response = await fetch('https://formsubmit.co/83bb7506c7b164e34e6f12e6f10bf08a', {
      method: 'POST',
      body: formData,
      headers: formHeaders,
    });

    console.log(response);

    if (response.ok) {
      setFeedback({
        type: 'success',
        message: msg.success,
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
      message: msg.error,
    });
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};
