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
import Subscription from "./pages/subscription";
import Payment from "./pages/payment";
import PrivacyPolicy from "./pages/legal/privacy-policy";
import TermsOfService from "./pages/legal/terms-of-service";
import CookiePolicy from "./pages/legal/cookie-policy";

// AI Processing Tools
import SpeechRecognition from "./pages/tools/ai/speech-recognition";
import SpeakerDiarization from "./pages/tools/ai/speaker-diarization";
import ProgressTracking from "./pages/tools/ai/progress-tracking";

// Writing Tools
import Paraphraser from "./pages/tools/writing/paraphraser";
import GrammarChecker from "./pages/tools/writing/grammar-checker";
import AiDetector from "./pages/tools/writing/ai-detector";
import PlagiarismChecker from "./pages/tools/writing/plagiarism-checker";
import Summarizer from "./pages/tools/writing/summarizer";
import Translator from "./pages/tools/writing/translator";
import CitationGenerator from "./pages/tools/writing/citation-generator";

// Language Tools
import GrammarCheck from "./pages/tools/language/grammar-check";
import SpellChecker from "./pages/tools/language/spell-checker";
import PunctuationCheck from "./pages/tools/language/punctuation-check";
import WordCounter from "./pages/tools/language/word-counter";

import routes from "tempo-routes";

function App() {
  return (
    <AuthProvider>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
          </div>
        }
      >
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          {/* Main Routes */}
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

          {/* Legal Routes */}
          <Route path="/legal" element={<Legal />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />

          {/* Auth & Payment Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/api-reference" element={<ApiReference />} />
          <Route path="/support" element={<Support />} />

          {/* AI Processing Tools Routes */}
          <Route
            path="/tools/ai/speech-recognition"
            element={<SpeechRecognition />}
          />
          <Route
            path="/tools/ai/speaker-diarization"
            element={<SpeakerDiarization />}
          />
          <Route
            path="/tools/ai/progress-tracking"
            element={<ProgressTracking />}
          />

          {/* Writing Tools Routes */}
          <Route path="/tools/writing/paraphraser" element={<Paraphraser />} />
          <Route
            path="/tools/writing/grammar-checker"
            element={<GrammarChecker />}
          />
          <Route path="/tools/writing/ai-detector" element={<AiDetector />} />
          <Route
            path="/tools/writing/plagiarism-checker"
            element={<PlagiarismChecker />}
          />
          <Route path="/tools/writing/summarizer" element={<Summarizer />} />
          <Route path="/tools/writing/translator" element={<Translator />} />
          <Route
            path="/tools/writing/citation-generator"
            element={<CitationGenerator />}
          />

          {/* Language Tools Routes */}
          <Route
            path="/tools/language/grammar-check"
            element={<GrammarCheck />}
          />
          <Route
            path="/tools/language/spell-checker"
            element={<SpellChecker />}
          />
          <Route
            path="/tools/language/punctuation-check"
            element={<PunctuationCheck />}
          />
          <Route
            path="/tools/language/word-counter"
            element={<WordCounter />}
          />

          {/* Tempo Routes */}
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
