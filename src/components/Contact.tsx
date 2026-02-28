import { useState } from "preact/hooks";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import type { InputEventHandler } from "preact";
import { cx } from "../libs/core";
import { useLang } from "../contexts/lang";
import { MESSAGES } from "../libs/i18n";
import { fetchForm, type ContactForm } from "../libs/form";

const Contact = () => {
  const [formState, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const { lang } = useLang();

  const handleInputChange: InputEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handleTextareaChange: InputEventHandler<HTMLTextAreaElement> = (e) => {
    const { name, value } = e.currentTarget;

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    await fetchForm(formState, {
      setFeedback,
      setIsLoading,
      setForm,
    });
  };

  const sectionClasses = cx(
    'flex flex-col',
    'justify-center items-center gap-4',
    'py-24 px-6 md:px-12',
  );

  const buttonClasses = cx(
    'px-4 py-3',
    'bg-blue-900 hover:bg-blue-700 focus:bg-blue-700',
    'rounded-md hover:ring',
    // 'hover:font-bold',
    // 'mx-auto',
  );

  const formClasses = cx(
    'px-8 py-6 rounded-md',
    'bg-linear-to-br from-slate-900/30 to-zinc-900/10',
  );

  const msg = MESSAGES[lang].contact;

  return (
    <section id={'contacto'} class={sectionClasses}>
      <h3 class={'text-2xl font-bold'}>{msg.title}</h3>
      <p class={'opacity-80 max-w-2xl'}>{msg.subtitle}</p>
      
      <form onSubmit={handleSubmit} class={formClasses}>
        <input type="hidden" name={'_honeypot'} value={formState._honeypot} />

        <Input
          label={msg.form.name} name="name"
          onChange={handleInputChange}
          value={formState.name}
        />
        <Input
          label={msg.form.email} name="email" type="email"
          onChange={handleInputChange}
          value={formState.email}
        />
        <Input
          label={msg.form.subject} name="subject"
          onChange={handleInputChange}
          value={formState.subject}
        />
        <Textarea
          label={msg.form.message} name="message"
          onChange={handleTextareaChange}
          value={formState.message}
        />
        
        <button
          type={'submit'}
          class={buttonClasses}
          disabled={isLoading}
        >
          {isLoading ? msg.form.sending : msg.form.send}
        </button>

        {feedback && (
          <div class={cx(
            'mt-4 p-3 rounded-md text-sm',
            feedback.type === 'success'
              ? 'bg-green-900/30 text-green-200'
              : 'bg-red-900/30 text-red-200'
          )}>
            {feedback.message}
          </div>
        )}
      </form>
      
      <p class={'text-xs opacity-70 max-w-md text-center mt-4'}>
        {msg.privacyNote}
      </p>
      <p class={'text-xs opacity-70 max-w-md text-center'}>
        {msg.deliveryNote}
      </p>
    </section>
  );
};

export default Contact;
