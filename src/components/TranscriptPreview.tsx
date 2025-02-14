import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download, FileJson, FileText } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

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
  onDownloadTxt = () => console.log("Download TXT"),
  onDownloadJson = () => console.log("Download JSON"),
}) => {
  return (
    <Card className="w-full max-w-[800px] p-6 bg-white shadow-xl border border-slate-200 rounded-xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Transcript Preview
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={onDownloadTxt}
            className="flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Download TXT
          </Button>
          <Button
            variant="outline"
            onClick={onDownloadJson}
            className="flex items-center gap-2"
          >
            <FileJson className="w-4 h-4" />
            Download JSON
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[400px] border rounded-lg p-4">
        {segments.map((segment, index) => {
          const speaker = speakers.find((s) => s.id === segment.speakerId);
          return (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium" style={{ color: speaker?.color }}>
                  {speaker?.name}
                </span>
                <span className="text-sm text-gray-500">
                  {segment.timestamp}
                </span>
              </div>
              <p className="text-gray-700 pl-4">{segment.text}</p>
            </div>
          );
        })}
      </ScrollArea>
    </Card>
  );
};

export default TranscriptPreview;
