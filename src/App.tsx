import Graph from "./components/Graph";

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl text-yellow-100	 font-bold">Food Explorer</h1>
      </header>

      <main className="p-6">
        <Graph />
      </main>
    </div>
  );
}

export default App;
