import Card from "./card";
import Code from "./icons/code";

const PROYECTOS = [
  {
    titulo: "Trivia",
    descripcion:
      "Es una aplicación web de trivia donde los usuarios pueden responder preguntas de opción múltiple. La interfaz es sencilla y permite seleccionar respuestas, con retroalimentación inmediata.",
    imagen: "Trivia.webp",
    tecnologias: ["React JS", "Vite", "CSS"],
    web: "https://guersom92.github.io/Trivia/",
    codigo: "https://github.com/Guersom92/Trivia",
  },
  {
    titulo: "Tiempo Restante",
    descripcion:
      "Aplicación web que representa visualmente cuántas semanas te quedan por vivir, basada en tu fecha de nacimiento y tu expectativa.",
    imagen: "TiempoRestante.webp",
    tecnologias: ["React JS", "Vite", "Tailwind"],
    web: "https://guersom92.github.io/TiempoRestante/",
    codigo: "https://github.com/Guersom92/TiempoRestante",
  },
  {
    titulo: "Mediciones en Marte",
    descripcion:
      "Web que presenta datos meteorológicos recientes recopilados por el módulo de aterrizaje InSight de la NASA en Elysium Planitia, una llanura cercana al ecuador de Marte.",
    imagen: "Marte.webp",
    tecnologias: ["JavasScript", "CSS", "HTML"],
    web: "https://guersom92.github.io/TiempoMarciano/",
    codigo: "https://github.com/Guersom92/TiempoMarciano",
  },
];

export default function Proyectos() {
  return (
    <section className="lg:max-w-[700px] mx-auto px-7 pt-7 max-w-[500px]">
      <h2 className="text-3xl text-[#16E0BD] gap-x-2 font-semibold flex  items-center mb-3 pb-4">
        <Code className="text-[#16E0BD] size-8" />
        Mis proyectos
      </h2>
      <div className="grid grid-cols-1 gap-x-3 gap-y-7 sm:grid-cols-2 max-w-[700px] mx-auto ">
        {PROYECTOS.map(
          ({ titulo, descripcion, imagen, tecnologias, web, codigo }) => {
            return (
              <Card
                titulo={titulo}
                descripcion={descripcion}
                imagen={imagen}
                tecnologias={tecnologias}
                web={web}
                codigo={codigo}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
