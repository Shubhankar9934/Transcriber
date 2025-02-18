import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download, FileJson, FileText } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Speaker {
  id: string;
  name: string;
  color: string;
}

interface TranscriptSegment {
  speakerId: string;
  timestamp: string;
  text: string;
}

interface TranscriptPreviewProps {
  speakers?: Speaker[];
  segments?: TranscriptSegment[];
  onDownloadTxt?: () => void;
  onDownloadJson?: () => void;
}

const defaultSpeakers: Speaker[] = [
  { id: "1", name: "Speaker 1", color: "#3B82F6" },
  { id: "2", name: "Speaker 2", color: "#10B981" },
];

const defaultSegments: TranscriptSegment[] = [
  {
    speakerId: "1",
    timestamp: "00:00:00",
    text: "Hello, this is a sample transcript segment.",
  },
  {
    speakerId: "2",
    timestamp: "00:00:05",
    text: "This is another speaker responding in the conversation.",
  },
  {
    speakerId: "1",
    timestamp: "00:00:10",
    text: "The transcript continues with more dialogue examples.",
  },
];

const TranscriptPreview: React.FC<TranscriptPreviewProps> = ({
  speakers = defaultSpeakers,
  segments = defaultSegments,
  onDownloadTxt = () => {},
  onDownloadJson = () => {},
}) => {
  return (
    <Card className="w-full bg-gradient-to-br from-white to-slate-50 shadow-xl border border-slate-200 rounded-xl overflow-hidden transform-gpu transition-all duration-300 hover:shadow-2xl relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Transcript Preview
          </h2>
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outline"
                onClick={onDownloadTxt}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Download TXT
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outline"
                onClick={onDownloadJson}
                className="flex items-center gap-2"
              >
                <FileJson className="w-4 h-4" />
                Download JSON
              </Button>
            </motion.div>
          </div>
        </div>

        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="json">JSON</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <ScrollArea className="h-[400px] rounded-lg border p-4">
              <AnimatePresence>
                {segments.map((segment, index) => {
                  const speaker = speakers.find(
                    (s) => s.id === segment.speakerId,
                  );
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-4 hover:bg-slate-50 p-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-medium"
                          style={{ color: speaker?.color }}
                        >
                          {speaker?.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {segment.timestamp}
                        </span>
                      </div>
                      <p className="text-gray-700 pl-4">{segment.text}</p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="text">
            <ScrollArea className="h-[400px] rounded-lg border p-4 font-mono text-sm">
              {segments
                .map((segment) => {
                  const speaker = speakers.find(
                    (s) => s.id === segment.speakerId,
                  );
                  return `[${segment.timestamp}] ${speaker?.name}: ${segment.text}\n`;
                })
                .join("\n")}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="json">
            <ScrollArea className="h-[400px] rounded-lg border p-4 font-mono text-sm">
              <pre>{JSON.stringify({ speakers, segments }, null, 2)}</pre>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </motion.div>
    </Card>
  );
};

export default TranscriptPreview;
