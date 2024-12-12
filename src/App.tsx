import React, { useState } from "react";
import "@radix-ui/themes/styles.css";
import { Box, Button, TextArea, Theme } from "@radix-ui/themes";
import ollama from "ollama";


export default function App() {
  const [data, setData] = useState();
  const [text, setText] = useState();

  async function send() {
    console.log("rentre");
    const resp = await ollama.list();
    console.log(resp);
    const response = ollama.chat({
      model: "tinyllama",
      messages: [{ role: "user", content: text }]
    }).then(response => {
      console.log(response);
      setData(response.message.content);
    });
  }

  return (
    <Theme>
      <div
        className="flex flex-col min-h-screen  text-center bg-white dark:bg-gray-700 flex align-center center w-[900px] p-5">
        <Box style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }} width={"500px"}>
          <TextArea size="1" placeholder="Reply to comment…" onChange={(e) => setText(e.target.value)} />
          <Button onClick={send}>
            Run
          </Button>
        </Box>
        <Box className={"mt-5"}>
          <p>
            {data}
          </p>
        </Box>
      </div>
    </Theme>
  );
}

