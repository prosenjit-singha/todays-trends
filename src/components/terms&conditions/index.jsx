import React from "react";
import { Container, Section } from "../../styles/containers";
import { Heading, Title, SpanText, Text, Strong, Ul, List } from "./styles";

const Terms = () => {
  return (
    <>
      <Container>
        <Section>
          <Heading>WEBSITE TERMS & CONDITIONS</Heading>
          <Text>Last updated on 05/07/2022</Text>
        </Section>
        <Section>
          <Strong>THE AGREEMENT:</Strong>
          <Text>
            The use of this website and services on this website provided by
            Todays's Trends, LLC (hereinafter referred to as “Company”) are
            subject to the following Terms & Conditions (hereinafter the
            “Agreement”), all parts and sub-parts of which are specifically
            incorporated by reference here. This Agreement shall govern the use
            of all pages on this website (hereinafter collectively referred to
            as “Website”) and any services provided by or on this Website
            (“Services”).
          </Text>
        </Section>
        {/* <Section>
          <Title>DEFINITIONS</Title>
          <Text>
            The parties referred to in this Agreement shall be defined as
            follows:
          </Text>
          <Ul>
            <List>
              Company, Us, We: The Company, as the creator, operator, and
              publisher of the Website, makes the Website, and certain Services
              on it, available to users. VaVa, VaVa Virtual, VaVa Virtual
              Assistants, Company, Us, We, Our, Ours and other first-person
              pronouns will refer to the Company, as well as all employees and
              affiliates of the Company.
            </List>
            <List>
              You, the User, the Client: You, as the user of the Website, will
              be referred to throughout this Agreement with second-person
              pronouns such as You, Your, Yours, or as User or Client.
            </List>
            <List>
              Parties: Collectively, the parties to this Agreement (the Company
              and You) will be referred to as Parties.
            </List>
          </Ul>
        </Section> */}
        <Section>
          <Title>INTELLECTUAL PROPERTY</Title>
          <Text>
          The Service and all contents, including but not limited to text, images, 
          graphics or code are not the property of Today's Trends and are protected by 
          copyright, trademarks, database and other intellectual property rights. 
          You may display and copy, download or print portions of the material from 
          the different areas of the Service only for your own non-commercial use. 
          Any other use is strictly prohibited and may violate copyright, trademark 
          and other laws. These Terms do not grant you a license to use any trademark 
          of Today's Trends or its affiliates. You further agree not to use, change 
          or delete any proprietary notices from materials downloaded from the Service.
          </Text>
        </Section>
        <Section>
          <Title>LINKS TO OTHER WEBSITES</Title>
          <Text>
          The Service may contain links to third-party web sites or services that are 
          not owned or controlled by Today's Trends.

          Today's Trends has no control over, and assumes no responsibility for, 
          the content, privacy policies, or practices of any third-party web sites or 
          services. You further acknowledge and agree that Today's Trends shall not 
          be responsible or liable, directly or indirectly, for any damage or loss 
          caused or alleged to be caused by or in connection with use of or reliance 
          on any such content, goods or services available on or through any such 
          websites or services.

          We strongly advise you to read the terms and conditions and privacy policies 
          of any third-party web sites or services that you visit.
          </Text>
        </Section>
        <Section>
          <Title>GOVERNING LAW </Title>
          <Text>
          These Terms shall be governed by, and interpreted and enforced in accordance 
          with, the laws in the Province of TT and the laws of TT, as 
          applicable.

          If any provision of these Terms is held to be invalid or unenforceable by a 
          court of competent jurisdiction, then any remaining provisions of these Terms 
          will remain in effect. These Terms constitute the entire agreement between us 
          regarding our Service, and supersede and replace any prior agreements, oral or 
          otherwise, regarding the Service.
          </Text>
        </Section>
        <Section>
          <Title>CHANGES</Title>
          <Text>
          We reserve the right, at our sole discretion, to modify or replace these Terms 
          at any time. If a revision is required, we will make reasonable efforts to 
          provide at least 30 days’ notice prior to any new terms taking effect. What 
          constitutes a material change will be determined at our sole discretion.

          By continuing to access or use our Service after those revisions become 
          effective, you agree to be bound by the revised terms. If you do not agree 
          to the new terms, in whole or in part, please stop using the website and 
          the Service.
          </Text>
        </Section>
        <Section>
          <Title>ACCEPTABLE USE</Title>
          <Text>
            You agree not to use the Website or Services for any unlawful
            purpose or any purpose prohibited under this clause. You agree not
            to use the Website or Services in any way that could damage the
            Website, Services, or general business of the Company.
          </Text>
          <Ul>
            <List>
              You further agree not to use the Website or Services:
              <Ul>
                <List>
                  To harass, abuse, or threaten others or otherwise violate any
                  person’s legal rights;
                </List>
                <List>
                  To violate any intellectual property rights of the Company or
                  any third party;
                </List>
                <List>
                  To upload or otherwise disseminate any computer viruses or
                  other software that may damage the property of another;
                </List>
                <List>To perpetrate any fraud;</List>
                <List>
                  To engage in or create any unlawful gambling, sweepstakes, or
                  pyramid scheme;
                </List>
                <List>
                  To publish or distribute any obscene or defamatory material;
                </List>
                <List>
                  To publish or distribute any material that incites violence,
                  hate, or discrimination towards any group;
                </List>
                <List>To unlawfully gather information about others.</List>
              </Ul>
            </List>
          </Ul>
        </Section>
        {/* REVERSE ENGINEERING & SECURITY */}
        <Section>
          <Title>REVERSE ENGINEERING & SECURITY</Title>
          <Text>You agree not to undertake any of the following actions:</Text>
          <Ul>
            <List>
              Reverse engineer, or attempt to reverse engineer or disassemble
              any code or software from or on the Website or Services;
            </List>
            <List>
              Violate the security of the Website or Services through any
              unauthorized access, circumvention of encryption or other security
              tools, data mining or interference to any host, user or network.
            </List>
          </Ul>
        </Section>
        {/* SPAM POLICY */}
        <Section>
          <Title>SPAM POLICY</Title>
          <Text>
            You are strictly prohibited from using the Website or any of the
            Today's Trends' Services for illegal spam activities, including gathering
            email addresses and personal information from others or sending any
            mass commercial emails.
          </Text>
        </Section>
        <Section>
          <Title>CONTACT</Title>
          <Text>
          If you have any questions about these Terms, please contact us.
          </Text>
        </Section>
      </Container>
    </>
  );
};

export default Terms;
