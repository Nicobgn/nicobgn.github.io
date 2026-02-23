import { useEffect, useState } from "preact/hooks";

const phrases: string[] = [
  'Bienvenido al Portfolio',
  'Gracias por pasarte',
  'Me especializo en Tauri',
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    (() => {
      currentIndex >= phrases.length - 1
        ? setCurrentIndex(0)
        : setCurrentIndex(prev => prev + 1);
    })()
  }, [5000])

  return (
    <section>
      <article>
        <h1>¡Portfolio de Nicolás Barragán!</h1>
        <h2>{phrases[currentIndex]}</h2>
      </article>
    </section>
  )
};
