import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mic, Activity } from "lucide-react";

const SpeechRecognition = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [progress, setProgress] = useState(0);

  const startRecording = () => {
    setIsRecording(true);
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRecording(false);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    // Simulate transcription
    setTimeout(() => {
      setTranscript("This is a simulated real-time transcription of speech.");
    }, 3000);
  };

  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Real-Time Speech Recognition
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Advanced AI-powered speech recognition with real-time
                transcription
              </motion.p>
            </div>

            <Card className="p-8 text-center">
              <motion.div
                animate={
                  isRecording
                    ? {
                        scale: [1, 1.2, 1],
                        transition: { repeat: Infinity, duration: 1.5 },
                      }
                    : {}
                }
                className="mb-8"
              >
                <Button
                  size="lg"
                  className="w-32 h-32 rounded-full"
                  variant={isRecording ? "destructive" : "default"}
                  onClick={() =>
                    isRecording ? setIsRecording(false) : startRecording()
                  }
                >
                  <Mic className="w-12 h-12" />
                </Button>
              </motion.div>

              {isRecording && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Activity className="w-5 h-5 text-blue-500" />
                    <span>Recording in progress...</span>
                  </div>
                  <Progress
                    value={progress}
                    className="w-full max-w-md mx-auto"
                  />
                </motion.div>
              )}

              {transcript && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto"
                >
                  <h3 className="text-lg font-semibold mb-4">Transcript</h3>
                  <p className="text-gray-700">{transcript}</p>
                </motion.div>
              )}
            </Card>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default SpeechRecognition;
