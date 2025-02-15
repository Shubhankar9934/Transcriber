import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Scale, FileText } from "lucide-react";

const legalDocs = [
  {
    title: "Terms of Service",
    description: "Our terms of service and conditions of use",
    icon: Scale,
    link: "/legal/terms",
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your data",
    icon: Shield,
    link: "/legal/privacy",
  },
  {
    title: "Cookie Policy",
    description: "Information about how we use cookies",
    icon: FileText,
    link: "/legal/cookies",
  },
];

export default function Legal() {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Legal Information</h1>
            <p className="text-xl text-gray-600">
              Important information about your rights and our obligations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {legalDocs.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <doc.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <Link
                  to={doc.link}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Need Legal Assistance?
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our legal documents or need
              assistance, please contact our legal team.
            </p>
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact Legal Team →
            </Link>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
