import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import { Routes, Route } from "react-router-dom";
import "./scss/styles.scss";

function App() {
  const restBase = "https://klausdragon.com/portfolio/";

  return (
    <div>
      <header className="site-header">
        <Nav />
      </header>
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home restBase={restBase} />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
