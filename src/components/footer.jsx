import React from "react";
import Github from "./icons/github";
import LinkedIn from "./icons/linkedin";
import Mail from "./icons/mail";

export default function Footer() {
  return (
    <footer className="bg-black/20  mt-5 flex items-center justify-center gap-5 p-5">
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
    </footer>
  );
}
