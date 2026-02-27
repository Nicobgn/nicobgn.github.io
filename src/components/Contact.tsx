import { useState } from "preact/hooks";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import type { InputEventHandler } from "preact";
import { cx } from "../libs/core";

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

  return (
    <section id={'contacto'} class={sectionClasses}>
      <h3>Vamos a ponernos en contacto:</h3>
      <form onSubmit={handleSubmit} class={formClasses}>
        <Input
          label="Nombre" name="name"
          onChange={handleInputChange}
        />
        <Input
          label="Correo Electrónico" name="email" type="email"
          onChange={handleInputChange}
        />
        <Input
          label="Propuesta" name="subject"
          onChange={handleInputChange}
        />
        <Textarea
          label="Mensaje" name="message"
          onChange={handleTextareaChange}
        />
        
        <button
          type={'submit'}
          class={buttonClasses}
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
