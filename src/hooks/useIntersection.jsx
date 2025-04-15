import React, { useEffect, useRef, useState } from "react";

function useIntersection() {
  const elementoRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (isIntersecting === true) return;
    const elemento = elementoRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    });

    observer.observe(elemento);

    return () => {
      observer.unobserve(elemento);
    };
  }, [isIntersecting]);

  return { elementoRef, isIntersecting };
}

export default useIntersection;
