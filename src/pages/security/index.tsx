import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server, Key, Database } from "lucide-react";

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256",
    icon: Lock,
  },
  {
    title: "SOC 2 Compliance",
    description:
      "Independently audited for security, availability, and confidentiality",
    icon: FileCheck,
  },
  {
    title: "Data Centers",
    description: "Enterprise-grade infrastructure with redundant backups",
    icon: Server,
  },
  {
    title: "Access Control",
    description: "Role-based access control with detailed audit logs",
    icon: Key,
  },
  {
    title: "Data Privacy",
    description: "GDPR and CCPA compliant data handling practices",
    icon: Shield,
  },
  {
    title: "Data Retention",
    description: "Configurable data retention policies with secure deletion",
    icon: Database,
  },
];

export default function Security() {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              Enterprise-Grade Security
            </h1>
            <p className="text-xl text-gray-600">
              Your data security and privacy is our top priority
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Security Certifications
              </h2>
              <p className="text-xl mb-8">
                We maintain the highest level of security certifications to
                ensure your data is protected
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["ISO 27001", "SOC 2", "HIPAA", "GDPR"].map((cert) => (
                  <div key={cert} className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
