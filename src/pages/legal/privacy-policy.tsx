import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 max-w-4xl"
        >
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: March 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Account information (name, email, password)</li>
                <li>Audio files and transcriptions</li>
                <li>Payment information</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide and improve our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and updates</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your
                personal information.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
