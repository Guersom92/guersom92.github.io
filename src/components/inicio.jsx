import Github from "./icons/github";
import LinkedIn from "./icons/linkedin";
import Mail from "./icons/mail";

export default function Inicio() {
  return (
    <>
      <section className="px-7 flex justify-center flex-col md:flex-row items-center gap-3 h-svh  lg:max-w-[700px] sm:max-w-[400px]  mx-auto ">
        <img
          src="\portrait.png"
          alt="imagen de Guersom"
          className="aspect-square max-w-[350px] sm:max-w-[250px] w-full rounded-full"
        />
        <div>
          <h2 className="text-2xl opacity-70">Hola, soy</h2>
          <h1 className="text-[#16E0BD] text-5xl font-bold">Guersom Falcon</h1>
          <h2 className=" italic text-3xl opacity-90">
            Desarrollador Frontend
          </h2>
          <div className="flex gap-3.5 pt-2 items-center text-white">
            <a
              className="hover:scale-130 transition"
              href="https://github.com/Guersom92"
            >
              <Github className="size-8" />
            </a>
            <a
              className="hover:scale-130 transition"
              href="https://www.linkedin.com/in/guersom/"
            >
              <LinkedIn className="size-8" />
            </a>
            <a
              className="hover:scale-130 transition"
              href="mailto:guersom80@gmail.com"
            >
              <Mail className="size-10"></Mail>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
