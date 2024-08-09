import "./App.css";

import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <>
      <aside className="app-sidebar">sidebar</aside>

      <header className="app-header">header</header>

      <main className="app-main">
        <ResetPassword/>
      </main>
    </>
  );
}

export default App;
