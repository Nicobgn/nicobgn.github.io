import { useState } from "preact/hooks";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import type { InputEventHandler } from "preact";
import { cx } from "../libs/core";
import { useLang } from "../contexts/lang";
import { MESSAGES } from "../libs/i18n";

type Form = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [formState, setForm] = useState<Form>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    const { name, email, subject } = formState;

    if (!name || !email || !subject) {
      console.error('Los campos del formulario no son válidos');
    }

    console.log('======= Prueba de Envío ========')
    console.log(formState);
  };

  const sectionClasses = cx(
    'flex flex-col',
    'justify-center items-center gap-4',
    'py-32 px-42',
  );

  const buttonClasses = cx(
    'px-4 py-3',
    'bg-blue-900 hover:bg-blue-700 focus:bg-blue-700',
    'rounded-md hover:ring',
    // 'hover:font-bold'
  );

  const formClasses = cx(
    'px-8 py-6 rounded-md',
    'bg-zinc-900/30',
  );

  const msg = MESSAGES[lang].contact;

  return (
    <section id={'contacto'} class={sectionClasses}>
      <h3 class={'text-2xl font-bold'}>{msg.title}</h3>
      <p class={'opacity-80 max-w-2xl'}>{msg.subtitle}</p>
      
      <form onSubmit={handleSubmit} class={formClasses}>
        <Input
          label={msg.form.name} name="name"
          onChange={handleInputChange}
        />
        <Input
          label={msg.form.email} name="email" type="email"
          onChange={handleInputChange}
        />
        <Input
          label={msg.form.subject} name="subject"
          onChange={handleInputChange}
        />
        <Textarea
          label={msg.form.message} name="message"
          onChange={handleTextareaChange}
        />
        
        <button
          type={'submit'}
          class={buttonClasses}
        >
          {msg.form.send}
        </button>
      </form>
    </section>
  );
};

export default Contact;
