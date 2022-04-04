function setRippleElement(el) {
  const dot = document.createElement("span");
  dot.setAttribute("id", "rpl");
  const largestSide = Math.sqrt(
    Math.pow(el.offsetWidth, 2) + Math.pow(el.offsetHeight, 2)
  );
  const dotSize = Math.ceil((largestSide * 2) / 100);
  dot.style = `
        position: absolute;
        left: 0;
        right: 0;
        width: ${dotSize}px;
        height: ${dotSize}px;
        z-index: 10;
        border-radius: 50%; 
        background: white;
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.5;
        animation: ripple 500ms ease-out forwards;
    `;
  //   el.style.position = "relative";
  //   el.style.overflow = "hidden";
  el.addEventListener("click", (event) => {
    //console.log(event);
    const { pageX, pageY, currentTarget } = event;
    const x =
      ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
    const y =
      ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;
    dot.style.left = x + "%";
    dot.style.top = y + "%";
    el.appendChild(dot);
  });
}

//main function
export default function rippleEffect() {
  //console.log("ripple clicked");
  document.querySelectorAll(".ripple").forEach(setRippleElement);
}
