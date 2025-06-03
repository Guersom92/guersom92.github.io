import Github from "./icons/github";
import Mundo from "./icons/mundo";
import useIntersection from "../hooks/useIntersection";

export default function Card({
  imagen,
  descripcion,
  titulo,
  tecnologias,
  web,
  codigo,
}) {
  const { elementoRef, isIntersecting } = useIntersection();
  return (
    <article
      ref={elementoRef}
      className={`${
        isIntersecting ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 rounded-lg bg-[#1E293B]/50 hover:bg-[#1E293B] text-card-foreground flex flex-col overflow-hidden h-full`}
    >
      <a className="block cursor-pointer overflow-hidden " href={web}>
        <img
          className="rounded-t-lg aspect-video w-full  duration-500  hover:scale-110"
          src={`/${imagen}`}
          alt={`captura de pantalla de la web ${titulo}`}
        />
      </a>
      <header className="flex flex-col pt-2 px-3">
        <h3 className="font-semibold tracking-tight my-1 text-lg ">{titulo}</h3>
        <p className="text-white/80 max-w-full text-pretty mb-3 text-sm">
          {descripcion}
        </p>
      </header>

      <div className="px-3 mt-auto flex text-sm font-sans flex-wrap gap-1">
        {tecnologias.map((tecnologia, index) => (
          <div
            key={index}
            className=" rounded-md border font-semibold  border-transparent bg-gray-700   px-1 py-0 text-xs"
          >
            {tecnologia}
          </div>
        ))}
      </div>

      <div className="pt-2 px-3 pb-2 flex flex-row flex-wrap gap-1">
        <a target="_blank" href={web}>
          <div className="items-center rounded-md border font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#16E0BD] text-gray-900 shadow hover:bg-[#16E0BD]/60 flex gap-2 px-2 py-1 text-sm">
            <Mundo className="size-4" />
            Web
          </div>
        </a>
        <a target="_blank" href={codigo}>
          <div className="items-center rounded-md border font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black  shadow hover:bg-black/50 flex gap-2 px-2 py-1 text-sm">
            <Github className="size-4" />
            Código
          </div>
        </a>
      </div>
    </article>
  );
}
