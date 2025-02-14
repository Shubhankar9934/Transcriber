import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Former ML researcher at Google, passionate about AI accessibility.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    bio: "15+ years experience in speech recognition and natural language processing.",
  },
  // Add more team members...
];

const values = [
  {
    title: "Innovation",
    description:
      "Pushing the boundaries of what's possible with AI technology.",
  },
  {
    title: "Accessibility",
    description: "Making advanced technology accessible to everyone.",
  },
  {
    title: "Privacy",
    description:
      "Maintaining the highest standards of data protection and privacy.",
  },
];

export default function About() {
  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
            <p className="text-xl text-gray-600">
              We're on a mission to make audio transcription accessible,
              accurate, and effortless for everyone.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Join Us Section */}
          <div className="bg-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our mission.
            </p>
            <Button size="lg" variant="secondary">
              View Open Positions
            </Button>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
