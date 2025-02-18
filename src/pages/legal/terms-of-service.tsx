import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const TermsOfService = () => {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 max-w-4xl"
        >
          <div className="text-center mb-12">
            <Scale className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">Last updated: March 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our services, you agree to be bound by
                these Terms of Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                2. Description of Services
              </h2>
              <p className="text-gray-700 mb-4">
                We provide AI-powered transcription and language processing
                tools, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Audio transcription</li>
                <li>Grammar checking</li>
                <li>Paraphrasing</li>
                <li>Translation services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                3. User Obligations
              </h2>
              <p className="text-gray-700 mb-4">
                Users must comply with all applicable laws and regulations.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
