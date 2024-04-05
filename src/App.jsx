import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { HashLink as Link } from "react-router-hash-link";
import { Routes, Route } from "react-router-dom";
import "./scss/styles.scss";

function App() {
  const restBase = "https://aliabbasi.codes/portfolio/";
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <Link smooth to="/#projects" className="skip-link">
        Skip to Content
      </Link>
      <Header />
      <main id="main-content">
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
