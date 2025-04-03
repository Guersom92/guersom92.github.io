import Github from "./icons/github";
import Mundo from "./icons/mundo";

export default function Card({
  imagen,
  descripcion,
  titulo,
  tecnologias,
  web,
  codigo,
}) {
  return (
    <article class="rounded-lg bg-gray-800/60 text-card-foreground flex flex-col overflow-hidden h-full">
      <a class="block cursor-pointer" href={web}>
        <img
          className="rounded-t-lg aspect-video w-full"
          src={`/${imagen}`}
          alt=""
        />
      </a>
      <header class="flex flex-col pt-2 px-3">
        <h3 class="font-semibold tracking-tight my-1 text-lg ">{titulo}</h3>
        <p class="text-white/80 max-w-full text-pretty mb-3 text-sm">
          {descripcion}
        </p>
      </header>

      <div class="px-3 mt-auto flex text-sm font-sans flex-wrap gap-1">
        {tecnologias.map((tecnologia) => (
          <div class=" rounded-md border font-semibold  border-transparent bg-gray-700   px-1 py-0 text-xs">
            {tecnologia}
          </div>
        ))}
      </div>

      <div class="pt-2 px-3 pb-2 flex flex-row flex-wrap gap-1">
        <a target="_blank" href={web}>
          <div class="items-center rounded-md border font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#16E0BD] text-gray-900 shadow hover:bg-[#16E0BD]/60 flex gap-2 px-2 py-1 text-sm">
            <Mundo class="size-4" />
            Web
          </div>
        </a>
        <a target="_blank" href={codigo}>
          <div class="items-center rounded-md border font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black  shadow hover:bg-black/50 flex gap-2 px-2 py-1 text-sm">
            <Github class="size-4" />
            Código
          </div>
        </a>
      </div>
    </article>
  );
}
