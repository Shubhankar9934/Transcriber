import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const docs = [
  {
    category: "Getting Started",
    items: [
      { title: "Quick Start Guide", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Basic Usage", href: "#" },
    ],
  },
  {
    category: "API Reference",
    items: [
      { title: "Authentication", href: "#" },
      { title: "Endpoints", href: "#" },
      { title: "Rate Limits", href: "#" },
    ],
  },
  {
    category: "Guides",
    items: [
      { title: "Best Practices", href: "#" },
      { title: "Advanced Features", href: "#" },
      { title: "Troubleshooting", href: "#" },
    ],
  },
];

export default function Documentation() {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about our platform
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="w-full pl-10"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {docs.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-xl font-semibold mb-4">
                  {section.category}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to
              help.
            </p>
            <Button>Contact Support</Button>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
