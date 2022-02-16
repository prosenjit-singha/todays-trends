import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "9d1324a30a0a78d5a51fdfa0d05b9c372e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("command executed!");
        }
      },
    });
  }, []);
  return <div>Hi</div>;
};

export default App;
