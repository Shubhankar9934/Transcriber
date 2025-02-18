import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

const CookiePolicy = () => {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 max-w-4xl"
        >
          <div className="text-center mb-12">
            <Cookie className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-600">Last updated: March 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                1. What Are Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when
                you visit our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-gray-700 mb-4">We use cookies to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve our services</li>
                <li>Provide personalized content</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                3. Managing Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies through your browser
                settings.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default CookiePolicy;
