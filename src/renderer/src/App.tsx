import Search from "./components/Search";

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");

  return (
    <>
      <Search></Search>
    </>
  );
}

export default App;
