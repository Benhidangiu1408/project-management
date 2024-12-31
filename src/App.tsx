import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StoryBoard from "./pages/Stage Page/StoryBoard";

import { Checkbox } from "@radix-ui/react-checkbox";
import StoryPointTable from "./pages/Stage Page/StoryPointTable";
import {  CustomCalendar } from "./pages/Stage Page/CalenUI";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <StoryPointTable />
      <br />
      <StoryBoard />
      <br/>
      {/* <calen */}
      <CustomCalendar/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
