import { useState } from "react";
import { useSprings, useSpring, easings } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import clamp from "lodash.clamp";
import Button from "../../../button/Button";
import {
  Container,
  Pages,
  Page,
  Image,
  Dot,
  Dots,
  Content,
  Category,
  Title,
  Info,
  Admin,
} from "./styles";
import { useRef } from "react";

const images = [
  "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

function Indicator({ index, i, setIndex }) {
  const isActive = index === i;
  const glow = useSpring({
    backgroundImage: isActive
      ? "radial-gradient( hsl(225, 100%, 99%), hsl(225, 100%, 96%))"
      : "radial-gradient( hsl(225, 20%, 85%), hsl(225, 20%, 80%))",
    boxShadow: isActive
      ? `0 0 10px hsl(225, 50%, 70%), 0 0 20px hsl(225, 50%, 100%)`
      : `0 0 0 hsl(225, 50%, 70%), 0 0 0px hsl(225, 50%, 100%),`,
    border: isActive ? "2px solid white" : "2px solid hsl(225, 20%, 77%)",
    config: {
      easing: easings.easeInOutBounce,
    },
  });
  const handleClick = () => {
    //setIndex(i);
  };
  return <Dot style={glow} onClick={handleClick} />;
}

export default function HeaderImages() {
  const [index, setIndex] = useState(0);
  const width = window.innerWidth;
  const scrollTop = useRef(0);
  const [props, api] = useSprings(images.length, (i) => ({
    x: i * width,
    scale: 1,
    display: "block",
  }));

  const bind = useGesture(
    {
      onDragStart: () => {
        scrollTop.current = document.documentElement.scrollTop;
      },
      onDrag: ({ active, movement: [mx, my], direction: [xDir], cancel }) => {
        if (active && Math.abs(mx) > width / 2) {
          setIndex(clamp(index + (xDir > 0 ? -1 : 1), 0, images.length - 1));

          cancel();
        }
        api.start((i) => {
          if (i < index - 1 || i > index + 1) return { display: "none" };
          const x = (i - index) * width + (active ? mx : 0);
          const scale = active ? 1 - Math.abs(mx) / width / 2 : 1;
          return { x, scale, display: "block" };
        });
        if (my) {
          document.documentElement.scrollTop = scrollTop.current - my;
        }
      },
      onDragEnd: () => {
        console.log(index);
      },
    },
    {
      drag: {
        axis: "lock",
      },
    }
  );

  function bgImg(url) {
    return `linear-gradient(rgba(255, 255, 255, 0), rgba(51, 52, 73, 0.8) 80%), url(${url}) `;
  }

  return (
    <Container>
      <Pages>
        {props.map(({ x, display, scale }, i) => (
          <Page {...bind()} key={i} style={{ display, x }}>
            <Image style={{ backgroundImage: bgImg(images[i]) }} />
            <Content style={{ scale, x }}>
              <Category>Technical</Category>
              <Title>A beautiful title is very important.</Title>
              <Info>
                By <Admin>PJ </Admin>
                December 9, 2021 501 views
              </Info>
              <Button borderRadius={0.25} fontSize={1.3}>
                Read More
              </Button>
            </Content>
          </Page>
        ))}
      </Pages>
      <Dots>
        {images.map((image, i) => (
          <Indicator index={index} setIndex={setIndex} i={i} />
        ))}
      </Dots>
    </Container>
  );
}
