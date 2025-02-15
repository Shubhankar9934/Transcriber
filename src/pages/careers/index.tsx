import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Code, Lightbulb, Megaphone, Briefcase } from "lucide-react";

const positions = [
  {
    title: "Senior ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Lead the development of our next-generation speech recognition models.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description:
      "Shape the future of our transcription platform and user experience.",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Build and maintain our web application and API infrastructure.",
  },
];

const benefits = [
  "Competitive salary and equity",
  "Health, dental, and vision insurance",
  "Unlimited PTO",
  "Remote-first culture",
  "Learning and development budget",
  "401(k) matching",
];

export default function Careers() {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600">
              Help us build the future of audio transcription technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600">{position.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {position.location}
                  </span>
                  <Button>Apply Now</Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Benefits & Perks</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <p className="font-medium">{benefit}</p>
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
