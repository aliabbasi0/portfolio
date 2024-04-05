import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./scss/styles.scss";

function App() {
  const restBase = "https://aliabbasi.codes/portfolio/";

  return (
    <div>
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home restBase={restBase} />} />
          <Route
            path="/project/:slug"
            element={<Project restBase={restBase} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
