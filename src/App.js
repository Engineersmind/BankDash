import "./App.css";

import { Settings } from "./pages/Settings";

function App() {
  return (
    <>
      <aside className="app-sidebar">sidebar</aside>

      <header className="app-header">header</header>

      <main className="app-main">
        <Settings />
      </main>
    </>
  );
}

export default App;
