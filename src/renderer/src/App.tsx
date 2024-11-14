import Search from "./components/Search";
import Results from "./components/Results";

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");

  return (
    <>
      <Search></Search>
      <Results></Results>
    </>
  );
}

export default App;
