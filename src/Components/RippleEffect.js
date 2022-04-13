import { useEffect, useRef } from "react";

export const useRippleEffect = () => {
  const rippleRef = useRef();
  const dot = document.createElement("SPAN");
  //console.log(rippleRef);
  useEffect(() => {
    const element = rippleRef.current;
    element.style.position = "relative";
    element.style.overflow = "hidden";
    const largestSide = Math.sqrt(
      Math.pow(element.offsetWidth, 2) + Math.pow(element.offsetHeight, 2)
    );
    const dotSize = Math.ceil((largestSide * 2) / 100);
    const rippleColor = "rgba(255,255,255,0.6)";
    dot.style = `
		        position: absolute;
		        left: 0;
		        top: 0;
		        width: ${dotSize}px;
		        height: ${dotSize}px;
		        z-index: 3;
		        border-radius: 50%;
		        background: ${rippleColor};
		        transform: translate(-50%, -50%) scale(1);
		        opacity: 1;

         animation: ripple 1s ease-out forwards;
    `;
    //event listner;
    const applyEffect = (event) => {
      const { pageX, pageY, target } = event;
      const { height, width, top, left } = element.getBoundingClientRect();
      console.log();
      // x and y in percentages
      const x = ((pageX - left) * 100) / width;
      const y = ((pageY - top) * 100) / height;

      element.appendChild(dot);

      dot.style.left = x + "%";
      dot.style.top = y + "%";
    };
    rippleRef.current.addEventListener("click", applyEffect);
    return () => {
      rippleRef.current &&
        rippleRef.current.removeEventListener("click", applyEffect);
    };
  }, []);
  return rippleRef;
};
