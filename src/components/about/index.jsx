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
            <ItemTitle>WE WORK FOR THE BEST OF THE COMMUNITY</ItemTitle>
            <Text>
              We want people belong to our community get the best experience on reading
              a newspaper. 
            </Text>
          </Item>
          <Item>
            <IconContainer>
              <Icon src={growth} alt="growth" />
            </IconContainer>
            <ItemTitle>WE HELP GIVING AWAY KNOWLEDGE</ItemTitle>
            <Text>
              We want people to gain knowledge through our app, and use the knowledge in 
              their life.
            </Text>
          </Item>
          <Item>
            <IconContainer>
              <Icon src={network} alt="network data" />
            </IconContainer>
            <ItemTitle>
              WE WORK FOR ACCURACY
            </ItemTitle>
            <Text>
              We want people to get the accurate news everyday in order to follow the 
              trends.
            </Text>
          </Item>
          <Item>
            <IconContainer>
              <Icon src={client} alt="hand shake" />
            </IconContainer>
            <ItemTitle>WE PROVIDE A BETTER USER INTERFACE</ItemTitle>
            <Text>
              Our app has the better interface than other newspaper, and our app is easy
              to use.
            </Text>
          </Item>
        </Grid>
      </Section>
      <FooterSection>
        <Flex>
          <Image src={NewsPaper} alt="reading newspaper" />
          <Content style={{ margin: 0 }}>
            <FooterTitle>Reliable Sources</FooterTitle>
            <FooterText>
              We bring you the best news from the best sources. We prioritize the accuracy
              more than the quantity of the news. In order to make this happen, we bring 
              you the news from the most reliable sources, sources that you can trust.
            </FooterText>
          </Content>
        </Flex>
      </FooterSection>
    </Container>
  );
};

export default About;
