import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { uploadAudioFile, getTranscriptionResult } from "@/lib/api";
import type { TranscriptionJob } from "@/types/api";
import Header from "./Header";
import UploadZone from "./UploadZone";
import TranscriptionStatus from "./TranscriptionStatus";
import TranscriptPreview from "./TranscriptPreview";
import Hero from "./landing/Hero";
import Features from "./landing/Features";
import Stats from "./landing/Stats";
import CTA from "./landing/CTA";
import Footer from "./Footer";
import InputSelector from "./InputSelector";

const Home = () => {
  const [showApp, setShowApp] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [transcriptionStatus, setTranscriptionStatus] = useState<
    "idle" | "processing" | "completed" | "error"
  >("idle");
  const [transcriptionProgress, setTranscriptionProgress] = useState(0);
  const [jobId, setJobId] = useState<string | null>(null);
  const [transcriptData, setTranscriptData] =
    useState<NonNullable<TranscriptionJob["result"]>>();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (jobId && transcriptionStatus === "processing") {
      interval = setInterval(async () => {
        try {
          const result = await getTranscriptionResult(jobId);
          setTranscriptionProgress(result.progress || 0);
          if (result.status === "completed" && result.result) {
            setTranscriptionStatus("completed");
            setTranscriptData(result.result);
          } else if (result.status === "error") {
            setTranscriptionStatus("error");
          }
        } catch (error) {
          console.error("Error fetching status:", error);
          setTranscriptionStatus("error");
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [jobId, transcriptionStatus]);

  const handleFileUpload = async (file: File) => {
    try {
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const uploadInterval = setInterval(() => {
        setUploadProgress((prev) => Math.min(prev + 10, 90));
      }, 500);

      const { jobId: newJobId } = await uploadAudioFile(file);
      clearInterval(uploadInterval);
      setUploadProgress(100);
      setJobId(newJobId);
      setIsUploading(false);
      setTranscriptionStatus("processing");
    } catch (error) {
      console.error("Upload failed:", error);
      setIsUploading(false);
      setTranscriptionStatus("error");
    }
  };

  const handleStart = () => setShowApp(true);

  return (
    <AnimatePresence mode="wait">
      {!showApp ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen"
        >
          <Header />
          <Hero onStart={handleStart} onDemo={handleStart} />
          <Features />
          <Stats />
          <CTA onStart={handleStart} />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100"
        >
          <Header showBackButton onBack={() => setShowApp(false)} />
          <motion.main
            className="container mx-auto px-4 py-8 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="max-w-3xl mx-auto space-y-8">
              <InputSelector
                onFileUpload={handleFileUpload}
                isUploading={isUploading}
                uploadProgress={uploadProgress}
              />

              <AnimatePresence>
                {(isUploading || transcriptionStatus !== "idle") && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <TranscriptionStatus
                      status={transcriptionStatus}
                      progress={
                        transcriptionStatus === "idle"
                          ? uploadProgress
                          : transcriptionProgress
                      }
                      estimatedTimeRemaining={
                        transcriptionStatus === "processing"
                          ? "2 minutes"
                          : undefined
                      }
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {transcriptionStatus === "completed" && transcriptData && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <TranscriptPreview
                      speakers={transcriptData.speakers}
                      segments={transcriptData.segments}
                      onDownloadTxt={() => {
                        const text = transcriptData.segments
                          .map(
                            (s) =>
                              `[${s.timestamp}] ${
                                transcriptData.speakers.find(
                                  (sp) => sp.id === s.speakerId,
                                )?.name
                              }: ${s.text}`,
                          )
                          .join("\n");
                        const blob = new Blob([text], { type: "text/plain" });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "transcript.txt";
                        a.click();
                      }}
                      onDownloadJson={() => {
                        const blob = new Blob(
                          [JSON.stringify(transcriptData, null, 2)],
                          { type: "application/json" },
                        );
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "transcript.json";
                        a.click();
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
