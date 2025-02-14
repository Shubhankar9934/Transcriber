import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Users, Globe, Cpu } from "lucide-react";

const features = [
  {
    title: "Advanced Speech Recognition",
    description:
      "Industry-leading accuracy powered by state-of-the-art AI models",
    icon: Cpu,
    benefits: [
      "99.9% accuracy rate",
      "Support for multiple accents",
      "Noise reduction technology",
    ],
  },
  {
    title: "Multi-Speaker Detection",
    description:
      "Automatically identify and label different speakers in conversations",
    icon: Users,
    benefits: [
      "Up to 10 speaker detection",
      "Gender identification",
      "Speaker timeline visualization",
    ],
  },
  // Add more features...
];

export default function Features() {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why leading enterprises choose our transcription platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
