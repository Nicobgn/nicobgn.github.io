import { cx } from "../libs/core";

const technologies: string[] = [
  'JavaScript',
  'TypeScript',
  'Rust',
  'CSS',
  'Podman/Docker',
  'PostgreSQL',
  'MySQL',
];

const secondaryTechnologies: string[] = [
  'Golang',
  'Python',
];

const Technologies = () => {
  const sectionClasses = cx(
    'flex flex-col md:flex-row',
    'justify-around items-center',
    'p-32',
  );
  
  return (
    <section id={'technologies'} class={sectionClasses}>
      <div>
        <h3>Mi Stack de Tecnologías (defendibles) es:</h3>
        <ul>
          {technologies.map((tech, i) => (
            <li key={`${tech}-${i}`}>{tech}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4>Las no tan defendibles pero que tengo noción son:</h4>
        <ul>
          {secondaryTechnologies.map((tech, i) => (
            <li key={`${tech}-${i}`}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
