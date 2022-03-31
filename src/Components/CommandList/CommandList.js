import React from "react";

function BlockCard({ commandList }) {
  return (
    <React.Fragment>
      {commandList.map((block, i) => (
        <div className="blockContainer" key={i}>
          <h3 data-aos="fade-left">{block.title}</h3>
          <ul>
            {block.commands.map((command, i) => (
              <li key={i} data-aos="fade-left">
                {command}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </React.Fragment>
  );
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
    <div id="commandList">
      <h2>Normal Commands</h2>
      <BlockCard commandList={normalCommands} />
      <h2>Additional Commands</h2>
      <BlockCard commandList={additionalCommands} />
    </div>
  );
};

export default CommandLists;
