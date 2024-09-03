"use client";

import React, { RefObject, useEffect, useState } from "react";

const useFollowPointerHook = (ref: RefObject<HTMLElement>) => {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      //   const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      //   const y = clientY - element.offsetTop - element.offsetHeight / 2;

      const x = clientX;
      const y = clientY + window.scrollY; 
      
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
};

export default useFollowPointerHook;
