import { motion } from "framer-motion";
import { Brain, Users, Clock, FileAudio, Download, Shield } from "lucide-react";

const features = [
  {
    name: "Advanced AI Processing",
    description:
      "State-of-the-art machine learning models for accurate transcription",
    icon: Brain,
  },
  {
    name: "Speaker Diarization",
    description:
      "Automatically identify and label different speakers in the conversation",
    icon: Users,
  },
  {
    name: "Real-time Progress",
    description: "Track transcription progress with detailed status updates",
    icon: Clock,
  },
  {
    name: "Multiple Audio Formats",
    description: "Support for MP3, WAV, M4A, and AAC audio files",
    icon: FileAudio,
  },
  {
    name: "Export Options",
    description: "Download transcripts in TXT or JSON formats",
    icon: Download,
  },
  {
    name: "Enterprise Security",
    description:
      "Bank-level encryption for all your audio files and transcripts",
    icon: Shield,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <div className="py-24 sm:py-32 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Advanced Technology
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need for perfect transcriptions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="flex flex-col p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.2 },
                }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
