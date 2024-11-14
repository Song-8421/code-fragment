import Search from "./components/Search";
import Results from "./components/Results";
import { CodeContext } from "./context/CodeContext";
import { useState } from "react";
import { codes, DataType } from "./data";

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");
  const [data, setData] = useState<DataType[]>(codes);


  return (
    <CodeContext.Provider value = {{ data, setData }}>
      <Search></Search>
      <Results></Results>
    </CodeContext.Provider>
  );
}

export default App;
