import Card from "./card";
import Code from "./icons/code";
import PROYECTOS from "./data";

export default function Proyectos() {
  return (
    <section className="lg:max-w-[700px] mx-auto px-7 pt-7 max-w-[500px]">
      <h2 className="text-3xl text-[#16E0BD] gap-x-2 font-semibold flex  items-center mb-3 pb-4">
        <Code className="text-[#16E0BD] size-8" />
        Mis proyectos
      </h2>
      <div className="grid grid-cols-1 gap-x-3 gap-y-7 sm:grid-cols-2 max-w-[700px] mx-auto ">
        {PROYECTOS.map((proyect, index) => {
          return <Card key={index} {...proyect} />;
        })}
      </div>
    </section>
  );
}
