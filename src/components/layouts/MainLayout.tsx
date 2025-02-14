import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

export default function MainLayout({
  children,
  showNav = true,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="min-h-[calc(100vh-80px)]"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
