import "./App.css";
import Preferences from "./pages/Preferences";

function App() {
  return (
    <>
      <aside className="app-sidebar">sidebar</aside>

      <header className="app-header">header</header>

      <main className="app-main">
        <Preferences />
      </main>
    </>
  );
}

export default App;
