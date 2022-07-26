import { useRef, useEffect } from "react";

export function useDragSlider() {
  const imagesRef = useRef();
  const isDown = useRef(false);
  const startX = useRef(null);
  const scrollLeft = useRef(null);
  useEffect(() => {
    const mouseDown = (e) => {
      isDown.current = true;
      scrollLeft.current = imagesRef.current.scrollLeft;
      startX.current = e.pageX - imagesRef.current.offsetLeft;
    };
    const mouseUp = () => {
      isDown.current = false;
    };
    const mouseLeave = () => {
      isDown.current = false;
    };
    const mouseMove = (e) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - imagesRef.current.offsetLeft;
      const move = x - startX.current;
      imagesRef.current.scrollLeft = scrollLeft.current - move;
    };
    imagesRef.current.addEventListener("mouseup", mouseUp);
    imagesRef.current.addEventListener("mousedown", mouseDown);
    imagesRef.current.addEventListener("mouseleave", mouseLeave);
    imagesRef.current.addEventListener("mousemove", mouseMove);
    return () => {
      imagesRef.current.removeEventListener("mouseup", mouseUp);
      imagesRef.current.removeEventListener("mousedown", mouseDown);
      imagesRef.current.removeEventListener("mouseleave", mouseLeave);
      imagesRef.current.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return imagesRef;
}
