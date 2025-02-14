import React from "react";
import { Progress } from "./ui/progress";
import { Card } from "./ui/card";

interface TranscriptionStatusProps {
  progress?: number;
  estimatedTimeRemaining?: string;
  status?: "idle" | "processing" | "completed" | "error";
}

const TranscriptionStatus = ({
  progress = 45,
  estimatedTimeRemaining = "2 minutes",
  status = "processing",
}: TranscriptionStatusProps) => {
  return (
    <Card className="w-full p-6 bg-white shadow-lg border border-slate-200 rounded-xl">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-700">
            {status === "idle" && "Waiting to start..."}
            {status === "processing" && "Transcribing audio..."}
            {status === "completed" && "Transcription complete!"}
            {status === "error" && "Error processing transcription"}
          </h3>
          {status === "processing" && (
            <span className="text-sm text-gray-500">
              Estimated time remaining: {estimatedTimeRemaining}
            </span>
          )}
        </div>

        <Progress
          value={progress}
          className="w-full"
          indicatorClassName={`
            ${status === "completed" ? "bg-green-500" : ""}
            ${status === "error" ? "bg-red-500" : ""}
            ${status === "processing" ? "bg-blue-500" : ""}
            ${status === "idle" ? "bg-gray-300" : ""}
          `}
        />

        {status === "error" && (
          <p className="text-sm text-red-500">
            An error occurred while processing your transcription. Please try
            again.
          </p>
        )}
      </div>
    </Card>
  );
};

export default TranscriptionStatus;
