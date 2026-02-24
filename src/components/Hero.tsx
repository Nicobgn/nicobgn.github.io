import { useEffect, useState } from "preact/hooks";
import { cx } from "../libs/core";

const phrases: string[] = [
  'Bienvenido al Portfolio',
  'Gracias por pasarte',
  'Me especializo en Tauri',
  'Soy Estudiante de Programación en la UNAHur',
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % phrases.length);
    }, 10000)

    return () => clearInterval(id);
  }, [currentIndex]);

  const sectionClasses = cx(
    'min-h-dvh md:min-h-200'
  );

  return (
    <section id={'hero'} class={sectionClasses}>
      <article>
        <h1>¡Portfolio de Nicolás Barragán!</h1>
        <h2>{phrases[currentIndex]}</h2>
      </article>
    </section>
  )
};
