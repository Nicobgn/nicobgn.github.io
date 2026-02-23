import { useState } from "preact/hooks";
import Input from "./Input";
import Textarea from "./Textarea";
import type { InputEventHandler } from "preact";

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

  return (
    <section>
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
      </form>
    </section>
  );
};

export default Contact;
