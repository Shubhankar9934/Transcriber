import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Input } from "./ui/input";
import { Mic, Link, Upload } from "lucide-react";
import UploadZone from "./UploadZone";

interface InputSelectorProps {
  onFileUpload: (file: File) => void;
  isUploading: boolean;
  uploadProgress: number;
}

const InputSelector = ({
  onFileUpload,
  isUploading,
  uploadProgress,
}: InputSelectorProps) => {
  const [url, setUrl] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const file = new File([blob], "recording.webm", { type: "audio/webm" });
        onFileUpload(file);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const handleUrlSubmit = async () => {
    if (!url) return;
    // Here you would typically validate and process the URL
    // For now, we'll just show that it's not implemented
    alert("URL processing will be implemented in the next version");
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="w-full grid grid-cols-3 h-16 bg-slate-50">
          <TabsTrigger
            value="upload"
            className="flex items-center gap-2 text-base"
          >
            <Upload className="w-5 h-5" /> Upload File
          </TabsTrigger>
          <TabsTrigger
            value="record"
            className="flex items-center gap-2 text-base"
          >
            <Mic className="w-5 h-5" /> Record Audio
          </TabsTrigger>
          <TabsTrigger
            value="url"
            className="flex items-center gap-2 text-base"
          >
            <Link className="w-5 h-5" /> From URL
          </TabsTrigger>
        </TabsList>

        <div className="p-6">
          <TabsContent value="upload">
            <UploadZone
              onFileUpload={onFileUpload}
              isUploading={isUploading}
              uploadProgress={uploadProgress}
            />
          </TabsContent>

          <TabsContent value="record">
            <motion.div
              className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-xl gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2">Record Audio</h3>
                <p className="text-sm text-gray-500">
                  Click the button below to start recording your audio
                </p>
              </div>

              <Button
                size="lg"
                variant={isRecording ? "destructive" : "default"}
                onClick={isRecording ? stopRecording : startRecording}
                className="w-48"
              >
                <Mic className="w-5 h-5 mr-2" />
                {isRecording ? "Stop Recording" : "Start Recording"}
              </Button>

              {isRecording && (
                <motion.div
                  className="w-4 h-4 rounded-full bg-red-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="url">
            <motion.div
              className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-xl gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Transcribe from URL
                </h3>
                <p className="text-sm text-gray-500">
                  Enter the URL of an audio or video file to transcribe
                </p>
              </div>

              <div className="flex w-full max-w-lg gap-2">
                <Input
                  type="url"
                  placeholder="https://example.com/audio.mp3"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleUrlSubmit}>Transcribe</Button>
              </div>
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default InputSelector;
