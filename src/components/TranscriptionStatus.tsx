import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "./ui/progress";
import { Card } from "./ui/card";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

interface TranscriptionStatusProps {
  progress?: number;
  estimatedTimeRemaining?: string;
  status?: "idle" | "processing" | "completed" | "error";
}

const TranscriptionStatus: React.FC<TranscriptionStatusProps> = ({
  progress = 0,
  estimatedTimeRemaining = "2 minutes",
  status = "idle",
}) => {
  const statusConfig = {
    idle: {
      icon: Clock,
      color: "text-gray-500",
      bgColor: "bg-gray-100",
      progressColor: "bg-gray-300",
    },
    processing: {
      icon: Clock,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      progressColor: "bg-blue-500",
    },
    completed: {
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50",
      progressColor: "bg-green-500",
    },
    error: {
      icon: AlertCircle,
      color: "text-red-500",
      bgColor: "bg-red-50",
      progressColor: "bg-red-500",
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card className="w-full overflow-hidden">
      <motion.div
        className={`p-6 ${config.bgColor}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StatusIcon className={`w-5 h-5 ${config.color}`} />
              <h3 className={`text-sm font-medium ${config.color}`}>
                {status === "idle" && "Waiting to start..."}
                {status === "processing" && "Transcribing audio..."}
                {status === "completed" && "Transcription complete!"}
                {status === "error" && "Error processing transcription"}
              </h3>
            </div>
            <AnimatePresence mode="wait">
              {status === "processing" && (
                <motion.span
                  key="time"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-sm text-gray-500"
                >
                  {estimatedTimeRemaining} remaining
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <Progress
              value={progress}
              className="h-2"
              indicatorClassName={config.progressColor}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 bg-white/50"
              animate={{
                x: ["-100%", "100%"],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <AnimatePresence mode="wait">
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-red-500"
              >
                An error occurred while processing your transcription. Please
                try again.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Card>
  );
};

export default TranscriptionStatus;
