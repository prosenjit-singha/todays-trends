import React from "react";
import { Container, Section } from "../../styles/containers";
import { Blocks, Blocks2, Block, Headline, Body, Text, Title } from "./styles";

function BlockCard({ commandList }) {
  return commandList.map((block, i) => (
    <Block className="blockContainer" key={i}>
      <Headline>{block.title}</Headline>
      <Body>
        {block.commands.map((command, i) => (
          <Text key={i}>
            <span style={{ display: "inline-block" }}>{command}</span>
          </Text>
        ))}
      </Body>
    </Block>
  ));
}
const CommandLists = () => {
  const normalCommands = [
    {
      title: "To Know About the Project, Try Asking:",
      commands: ["What does this webpage do?", "What can I do here?"],
    },
    {
      title: "To Get News by Source, Try Asking:",
      commands: [
        "Give me the news from <source_name>",
        "Show me the news from <source_name>",
        "Tell me the news from <source_name>",
      ],
    },
    {
      title: "To Get News by Term, Try Asking:",
      commands: ["What’s up with <term>?", "I wanna know about <term>."],
    },
    {
      title: "To Get News by Category, Try Asking:",
      commands: [
        "(Show me or you can use words like show) the (recent/latest/you can skip this portion) articles/news/headlines in/about/on <category>",
        "(Show me or you can use words like show) the (recent/latest/you can skip this portion) <category> articles/news/headlines",
      ],
    },
  ];

  const additionalCommands = [
    {
      title:
        "If Alan asks if you would like him to read the headlines, you can give him two responses:",
      commands: [
        "To let him read the headlines, you just say (yes/of course/why not?)",
        "If you don’t want him to read the headlines, just say (no/never mind)",
      ],
    },
    {
      title: "If you want Alan to open any article you like, ask him:",
      commands: [
        "Open the article number <Article Number>",
        "Open article number <Article Number>",
        "Open <Article Number>",
        "Open number <Article Number>",
      ],
    },
    {
      title: "If you want Alan to go back to home, try telling him:",
      commands: ["Go back", "Can you go back?", "Back"],
    },
  ];
  return (
    <Container style={{ overflowX: "hidden" }}>
      <Section>
        <Title>Normal Commands</Title>
        <BlockCard commandList={normalCommands} />
      </Section>
      <Section>
        <Title>Additional Commands</Title>
        <BlockCard commandList={additionalCommands} />
      </Section>
    </Container>
  );
};

export default CommandLists;
