import React from "react";
import NewsPaper from "../../img/reading-newspaper.jpg";
import { Container, Section } from "../../styles/containers";
import {
  Header,
  Title,
  Text,
  HeaderContent,
  IconContainer,
  Icon,
  Grid,
  Item,
  ItemTitle,
  Content,
  FooterSection,
  Image,
  Flex,
  FooterTitle,
  FooterText,
} from "./styles";

//icons
import network from "../../img/icons/network.png";
import client from "../../img/icons/client.png";
import growth from "../../img/icons/growth.png";
import community from "../../img/icons/community.png";

const About = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title style={{ color: "white", textAlign: "left" }}>
            What You Will Get from Today's Trends
          </Title>
          <Text
            style={{ color: "white", fontSize: "1.5rem", textAlign: "left" }}
          >
            Today's Trends provides you with the most up-to-date news so that you can
            follow the trends everyday.
          </Text>
        </HeaderContent>
      </Header>
      <Section>
        <Title>The Today's Trends Advantages</Title>
        <Text>
          Today's Trends can introduce you with the current trend whenever
          you want, you can be in a restaurant, or in your office room, tired.
        </Text>
        <Text>
          The interesting part about Today's Trends is that you can use your voice in 
          order to know the latest news on anything as we have the Voice Recognition 
          feature as well as the analog line by line reading.
        </Text>
        <Text>
          You can get news from any place, even from any source. We provide you with the
          authentic news from reliable sources. Also, you can check the accuracy of any
          news as we have the feature of rating any article.
        </Text>
      </Section>
      <Section>
        <Grid>
          <Item>
            <IconContainer>
              <Icon src={community} alt="community" />
            </IconContainer>
            <ItemTitle>WE ARE A TRUSTED MEMBER OF THE COMMUNITY</ItemTitle>
            <Text>
              We are an established member of the community, and a trusted
              channel for local businesses.
            </Text>
          </Item>
          <Item>
            <IconContainer>
              <Icon src={growth} alt="growth" />
            </IconContainer>
            <ItemTitle>WE HELP LOCAL BUSINESSES SUCCEED</ItemTitle>
            <Text>
              We have the solutions and the people to take your business to the
              next level
            </Text>
          </Item>
          <Item>
            <IconContainer>
              <Icon src={network} alt="network data" />
            </IconContainer>
            <ItemTitle>
              WE ARE A MASSIVE AUDIENCE NETWORK & POWERFUL DATA
            </ItemTitle>
            <Text>
              We have exclusive access to the Postmedia Network and powerful
              data insights for better performance.
            </Text>
          </Item>
          <Item>
            <IconContainer>
              <Icon src={client} alt="hand shake" />
            </IconContainer>
            <ItemTitle>WE PROVIDE A BETTER CLIENT EXPERIENCE</ItemTitle>
            <Text>
              We offer dedicated account management & unparalleled performance
              transparency.
            </Text>
          </Item>
        </Grid>
      </Section>
      <FooterSection>
        <Flex>
          <Image src={NewsPaper} alt="reading newspaper" />
          <Content style={{ margin: 0 }}>
            <FooterTitle>Talented Experts</FooterTitle>
            <FooterText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et culpa
              incidunt repellat natus dolorum maiores accusantium. Fugiat nobis
              repellat sunt cupiditate aliquam. Maxime magnam eius quis vel
              ipsam et non a, modi harum porro odit culpa, nihil iure deserunt
              nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eius commodi veritatis inventore quisquam voluptas eveniet
              accusantium, veniam suscipit dolore. Dolorum!
            </FooterText>
          </Content>
        </Flex>
      </FooterSection>
    </Container>
  );
};

export default About;
