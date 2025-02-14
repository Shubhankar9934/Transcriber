import { motion } from "framer-motion";

const stats = [
  { label: "Hours Transcribed", value: "100K+" },
  { label: "Accuracy Rate", value: "99%" },
  { label: "Enterprise Clients", value: "500+" },
  { label: "Languages Supported", value: "40+" },
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
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Stats() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          className="mx-auto max-w-2xl lg:max-w-none"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by companies worldwide
            </h2>
          </motion.div>

          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="flex flex-col bg-white/5 p-8 backdrop-blur-lg"
                variants={item}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  z: 50,
                  transition: { duration: 0.2 },
                }}
              >
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {stat.label}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
