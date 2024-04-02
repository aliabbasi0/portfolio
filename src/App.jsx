import Header from "./components/Header";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./scss/styles.scss";

function App() {
  const restBase = "https://klausdragon.com/portfolio/";

  return (
    <div>
      <Header />
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
