import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Shield,
  Users,
  Zap,
  MessageSquare,
  Phone,
} from "lucide-react";

const benefits = [
  {
    title: "Custom AI Models",
    description: "Train models on your industry-specific terminology",
    icon: Zap,
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security with custom compliance options",
    icon: Shield,
  },
  {
    title: "Dedicated Support",
    description: "24/7 priority support with dedicated account manager",
    icon: MessageSquare,
  },
];

export default function Enterprise() {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Enterprise Solutions</h1>
            <p className="text-xl text-gray-600">
              Customized transcription solutions for large organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-300 mb-6">
                  Let's discuss how we can help your organization with custom
                  transcription solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    <span>enterprise@transcription.ai</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
                  />
                  <textarea
                    placeholder="Tell us about your needs"
                    rows={4}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
                  />
                  <Button size="lg" className="w-full">
                    Request Demo
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
