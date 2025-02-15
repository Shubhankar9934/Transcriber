import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";
import Home from "./components/home";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import Enterprise from "./pages/enterprise";
import Security from "./pages/security";
import Documentation from "./pages/documentation";
import Blog from "./pages/blog";
import About from "./pages/about";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import Legal from "./pages/legal";
import ApiReference from "./pages/api-reference";
import Support from "./pages/support";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import routes from "tempo-routes";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/security" element={<Security />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
          </Routes>
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
