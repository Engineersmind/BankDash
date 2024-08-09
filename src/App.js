import "./App.css";

import Security from "./pages/Security";

function App() {
  return (
    <>
      <aside className="app-sidebar">sidebar</aside>

      <header className="app-header">header</header>

      <main className="app-main">
        <Security />
      </main>
    </>
  );
}

export default App;
