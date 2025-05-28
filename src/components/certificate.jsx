import ExternalIcon from "./icons/external-link";
import useIntersection from "../hooks/useIntersection";

function Certificate({ title, issuer, date, image, url }) {
  const { elementoRef, isIntersecting } = useIntersection();
  return (
    <div
      ref={elementoRef}
      className={`${
        isIntersecting ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 relative pl-8`}
    >
      {/* Punto en la línea de tiempo */}
      <div className="absolute left-[-4px] top-0 h-3 w-3 rounded-full bg-[#16E0BD]"></div>

      <article className="flex flex-col md:items-center md:flex-row gap-6 bg-[#1E293B]/50 rounded-xl p-6 hover:bg-[#1E293B] transition-all">
        <div className="md:w-1/3">
          <a href={url} target="_blank">
            <img
              src={image}
              alt={title}
              className="aspect-3/2 object-cover w-full h-auto rounded-lg shadow-lg hover:scale-105 transition"
              loading="lazy"
            />
          </a>
        </div>

        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <p className="text-[#16E0BD] text-sm mb-2">{date}</p>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{issuer}</p>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-[#16E0BD]/20 hover:bg-[#16E0BD]/30 px-4 py-2 rounded-lg w-fit transition-colors"
          >
            Ver certificado
            <ExternalIcon className="size-4" />
          </a>
        </div>
      </article>
    </div>
  );
}

export default Certificate;
