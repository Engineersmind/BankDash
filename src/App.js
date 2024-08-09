import "./App.css";

import { EditProfile } from "./Components/EditProfile";

function App() {
  return (
    <>
      <aside className="app-sidebar">sidebar</aside>

      <header className="app-header">header</header>

      <main className="app-main">
        <EditProfile />
      </main>
    </>
  );
}

export default App;
