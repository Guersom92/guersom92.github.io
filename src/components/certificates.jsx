import Certificate from "./certificate";
import CertificateIcon from "./icons/certificateIcon";
import javascriptCert from "../assets/certificates/Javascript.webp";
import reactCert from "../assets/certificates/React.webp";

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Learn React",
      issuer: "Scrimba",
      date: "2020",
      image: reactCert,
      url: "https://v1.scrimba.com/certificate/uVNbB7ux/glearnreact",
    },
    {
      id: 2,
      title: "Javascript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "2020",
      image: javascriptCert,
      url: "https://www.freecodecamp.org/certification/guersom92/javascript-algorithms-and-data-structures",
    },
  ];

  return (
    <section className="lg:max-w-[680px] mx-auto px-7 pt-7">
      <h2 className="text-3xl text-[#16E0BD] gap-x-2 font-semibold flex items-center mb-8">
        <CertificateIcon className="text-[#16E0BD] size-8" />
        Certificados
      </h2>

      <div className="relative flex flex-col gap-12">
        {/* Línea vertical de tiempo */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-[#16E0BD]/20"></div>

        {certificates.map((certificate) => (
          <Certificate key={certificate.id} {...certificate} />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
