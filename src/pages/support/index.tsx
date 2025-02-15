import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, Book, LifeBuoy, Mail } from "lucide-react";

const categories = [
  {
    title: "Getting Started",
    description: "New to our platform? Start here",
    icon: Book,
    articles: ["Quick Start Guide", "Account Setup", "First Transcription"],
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions",
    icon: LifeBuoy,
    articles: ["Audio Upload Issues", "Transcription Errors", "Account Access"],
  },
  {
    title: "API Support",
    description: "Help with API integration",
    icon: MessageCircle,
    articles: ["API Authentication", "Rate Limits", "Common Errors"],
  },
];

export default function Support() {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
            <p className="text-xl text-gray-600 mb-8">
              Search our knowledge base or browse common topics
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for answers..."
                className="w-full pl-10"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <category.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article}>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
              <p className="text-xl mb-8">
                Our support team is just an email away
              </p>
              <Button variant="secondary" size="lg">
                Contact Support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
