import Certificate from "./certificate";
import CertificateIcon from "./icons/certificateIcon";
import webSecurityCert from "../assets/certificates/web-security.webp";
import mcpCert from "../assets/certificates/mcp.webp";
import javascriptCert from "../assets/certificates/Javascript.webp";
import reactCert from "../assets/certificates/React.webp";
import fullstackCert from "../assets/certificates/certificate-fullstack.webp";
import typescript from "../assets/certificates/Typescript.webp";

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Introduction to JavaScript Security",
      issuer: "The Linux Foundation",
      date: "2026",
      image: webSecurityCert,
      url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/d662b216-1fe3-4dc5-9ff9-4ccd261beed1-guersom-falcon-987fb227-3dfb-49f4-8c2c-543884273fb5-certificate.pdf",
    },
    {
      id: 2,
      title: "Fundamentals of MCP",
      issuer: "Hugging Face Instructors",
      date: "2026",
      image: mcpCert,
      url: "https://cas-bridge.xethub.hf.co/xet-bridge-us/682f5d0ff0af4dc8a20649c1/ef6a6975960f7e1d17ac50e8a77d30f27a26e9e8276aad1185ee713d04380ed9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cas%2F20260519%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260519T194016Z&X-Amz-Expires=3600&X-Amz-Signature=5805a7d4a67b8fa4171242ae43fdec3c898e025451060095c06f56d5377eeac3&X-Amz-SignedHeaders=host&X-Xet-Cas-Uid=631f5e05e488fcef857e4a44&response-content-disposition=inline%3B+filename*%3DUTF-8%27%272026-03-14.png%3B+filename%3D%222026-03-14.png%22%3B&response-content-type=image%2Fpng&x-amz-checksum-mode=ENABLED&x-id=GetObject&Expires=1779223216&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3OTIyMzIxNn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2FzLWJyaWRnZS54ZXRodWIuaGYuY28veGV0LWJyaWRnZS11cy82ODJmNWQwZmYwYWY0ZGM4YTIwNjQ5YzEvZWY2YTY5NzU5NjBmN2UxZDE3YWM1MGU4YTc3ZDMwZjI3YTI2ZTllODI3NmFhZDExODVlZTcxM2QwNDM4MGVkOSoifV19&Signature=JG7a%7Ec6Xla3lh4rw9IK-Z0xPPNCejGklpD7tw0adRNcaoZxGR-8kRFeCCKu9BpuF5m5WVH9R5Ft7xW2pMpx3YRAa4xgi7wMDD9hASO-ogRcfJCX3EWTEdxLPlnFCABSK8vg-ZgbpQfEsLDQW8cUlNIm-FHXje1IOcphLdJvyqbX%7EgaNgHDhop71oKdFxyfWnDNfQY71qwzSjsFg4tvNC-ILsdQw3usP0jxO0tbsO%7ExHdESP2XRhTZVCirxnClwNfH9Zr9EJ3hBPJkcMSRlJs6x1bhZ03ILJlBK%7EoHna0rlZZn3z2DSAMo-%7E8halKmD6j8LPlfkhpRBQaMLdaqLt1Xg__&Key-Pair-Id=K2L8F4GPSG1IFC",
    },
    {
      id: 3,
      title: "Full Stack Open",
      issuer: "Universidad de Helsinki",
      date: "2025",
      image: fullstackCert,
      url: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/dc5da3122784c843aa4de85562c9bcea",
    },
    {
      id: 4,
      title: "Learn Typescript",
      issuer: "Scrimba",
      date: "2025",
      image: typescript,
      url: "https://coursera.org/verify/VNTMMKWKNRNI",
    },
    {
      id: 5,
      title: "Learn React",
      issuer: "Scrimba",
      date: "2020",
      image: reactCert,
      url: "https://v1.scrimba.com/certificate/uVNbB7ux/glearnreact",
    },
    {
      id: 6,
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
