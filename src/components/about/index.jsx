import React from "react";
import { Container } from "../../styles/containers";
import { Section, Block, Title, Text, Image } from "./styles";

//images
import NewsWithCup from "../../img/cup-with-newspaper.jpg";
import NewsWithCup2 from "../../img/cup-with-newspaper-2.jpg";
import ReadingNewspaper from "../../img/reading-newspaper.jpg";
import Newspapers from "../../img/newspapers.jpg";

const About = () => {
  return (
    <Container>
      <Section>
        <Image src={NewsWithCup2} position={"on-left"} />
        <Block position={"on-right"}>
          <Title>What does this page do?</Title>
          <Text>
            Proident consectetur nulla reprehenderit fugiat exercitation culpa.
            Fugiat reprehenderit proident deserunt cillum commodo non. Ex
            adipisicing deserunt id sint amet do labore voluptate esse.
            Consectetur aliquip dolor nisi proident in cillum esse.
          </Text>
        </Block>
      </Section>
      <Section>
        <Image src={ReadingNewspaper} position={"on-right"} />
        <Block position={"on-left"}>
          <Title>
            Proident adipisicing ullamco aliquip reprehenderit laboris in dolore
            cillum anim.
          </Title>
          <Text>
            Aliqua cupidatat commodo velit culpa reprehenderit occaecat sunt do
            est ullamco tempor aute. Cillum ex eu incididunt consectetur irure
            ut Lorem consequat officia cillum laborum. Cillum occaecat veniam
            sunt voluptate.
          </Text>
        </Block>
      </Section>
      <Section>
        <Image src={Newspapers} position={"on-left"} />
        <Block position={"on-right"}>
          <Title>
            Quis exercitation minim quis pariatur eiusmod mollit non et ullamco
            ullamco pariatur proident eiusmod veniam.
          </Title>
          <Text>
            Est dolor adipisicing enim nisi aute ut excepteur duis occaecat
            nulla laborum veniam. Ut aliquip proident cillum quis nisi in minim
            ex pariatur officia cillum qui incididunt aliqua. Consectetur
            commodo minim do id id tempor velit consectetur ullamco sit. Mollit
            in veniam id exercitation anim anim in nisi eu Lorem sint aliqua
            irure non.
          </Text>
        </Block>
      </Section>
      <Section>
        <Image src={NewsWithCup} position={"on-right"} />
        <Block position={"on-left"}>
          <Title>
            Consectetur ut irure proident voluptate officia incididunt aute esse
            et ullamco non nostrud aliquip proident.
          </Title>
          <Text>
            Aliqua deserunt voluTexttate veniam voluptate magna nostrud laboris
            ut ipsum. Lorem reprehenderit ipsum commodo ullamco officia. Culpa
            dolor sunt occaecat cupidatat est et excepteur. Do dolor enim
            proident magna esse. Ullamco ea qui voluptate sit voluptate non. Ea
            do in irure sit pariatur ullamco mollit. Esse culpa mollit labore
            nisi.
          </Text>
        </Block>
      </Section>
    </Container>
  );
};

export default About;
