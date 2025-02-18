import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Upload, Play, Pause } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const SpeakerDiarization = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speakers, setSpeakers] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleProcess = () => {
    if (!file) return;

    setIsProcessing(true);
    // Simulate processing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setSpeakers([
            {
              id: 1,
              name: "Speaker 1",
              color: "#3B82F6",
              segments: [
                {
                  start: "0:00",
                  end: "0:15",
                  text: "Hello, this is the first speaker.",
                },
              ],
            },
            {
              id: 2,
              name: "Speaker 2",
              color: "#10B981",
              segments: [
                {
                  start: "0:16",
                  end: "0:30",
                  text: "And this is the second speaker responding.",
                },
              ],
            },
          ]);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);
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
                Speaker Diarization
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Automatically identify and label different speakers in your
                audio
              </motion.p>
            </div>

            <Card className="p-8">
              <div className="text-center mb-8">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="audio-upload"
                />
                <label htmlFor="audio-upload">
                  <Button
                    variant="outline"
                    className="w-64 h-32 rounded-lg border-dashed"
                    asChild
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-8 h-8" />
                      <span>Upload Audio File</span>
                      {file && (
                        <span className="text-sm text-gray-500">
                          {file.name}
                        </span>
                      )}
                    </div>
                  </Button>
                </label>
              </div>

              {file && (
                <div className="text-center">
                  <Button
                    onClick={handleProcess}
                    disabled={isProcessing}
                    className="mb-8"
                  >
                    {isProcessing ? "Processing..." : "Start Processing"}
                  </Button>

                  {isProcessing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-8"
                    >
                      <Progress value={progress} className="mb-2" />
                      <p className="text-sm text-gray-500">
                        Analyzing speakers and transcribing audio...
                      </p>
                    </motion.div>
                  )}
                </div>
              )}

              {speakers.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Transcript</h3>
                  <ScrollArea className="h-[400px] rounded-lg border p-4">
                    {speakers.map((speaker) => (
                      <div key={speaker.id} className="mb-6">
                        <div
                          className="text-lg font-medium mb-2"
                          style={{ color: speaker.color }}
                        >
                          {speaker.name}
                        </div>
                        {speaker.segments.map((segment: any, index: number) => (
                          <div
                            key={index}
                            className="pl-4 mb-2 border-l-2"
                            style={{ borderColor: speaker.color }}
                          >
                            <div className="text-sm text-gray-500 mb-1">
                              {segment.start} - {segment.end}
                            </div>
                            <p className="text-gray-700">{segment.text}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </ScrollArea>
                </motion.div>
              )}
            </Card>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default SpeakerDiarization;
