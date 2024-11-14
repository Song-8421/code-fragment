function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");

  return (
    <>
      <div className = "bg-red-300">
        sa
      </div>
    </>
  );
}

export default App;
