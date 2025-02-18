import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Clock, CheckCircle } from "lucide-react";

const ProgressTracking = () => {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<string>("idle");
  const [timeRemaining, setTimeRemaining] = useState<number>(120); // 2 minutes

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            setStatus("completed");
            setIsActive(false);
            return 100;
          }
          return newProgress;
        });

        setTimeRemaining((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, progress]);

  const startTracking = () => {
    setIsActive(true);
    setStatus("processing");
    setProgress(0);
    setTimeRemaining(120);
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
                Real-Time Progress Tracking
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Track transcription progress with detailed status updates
              </motion.p>
            </div>

            <Card className="p-8">
              <div className="space-y-8">
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    onClick={startTracking}
                    disabled={isActive}
                    className="w-48"
                  >
                    {isActive ? "Processing..." : "Start Demo"}
                  </Button>
                </div>

                {(isActive || status === "completed") && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        {status === "completed" ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Activity className="w-5 h-5 text-blue-500" />
                        )}
                        <span className="font-medium">
                          {status === "completed"
                            ? "Processing Complete"
                            : "Processing..."}
                        </span>
                      </div>
                      {isActive && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>{timeRemaining}s remaining</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Progress value={progress} className="h-2" />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{progress}% complete</span>
                        <span>
                          {Math.round(progress * 1.5)} words processed
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium mb-2">Status Updates</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>✓ Audio file loaded</p>
                        <p>✓ Speech recognition initialized</p>
                        {progress >= 30 && <p>✓ Speaker diarization started</p>}
                        {progress >= 60 && (
                          <p>✓ Preliminary transcription available</p>
                        )}
                        {progress >= 90 && <p>✓ Final processing stage</p>}
                        {status === "completed" && (
                          <p className="text-green-600">
                            ✓ Transcription completed
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default ProgressTracking;
