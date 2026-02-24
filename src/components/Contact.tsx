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

    console.log('======= Prueba de Envío ========')
    console.log(formState);
  };

  const sectionClasses = cx(
    'flex flex-col',
    'justify-center items-center gap-4',
    'px-32 py-32',
  );

  return (
    <section id={'contact'} class={sectionClasses}>
      <h3>Vamos a ponernos en contacto:</h3>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre" name="nombre"
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
        
        <button type={'submit'}>Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
