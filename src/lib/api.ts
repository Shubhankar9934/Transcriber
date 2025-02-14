import { TranscriptionJob, UploadResponse } from "@/types/api";

// Mock data for development
const mockSpeakers = [
  { id: "1", name: "Speaker 1", color: "#3B82F6" },
  { id: "2", name: "Speaker 2", color: "#10B981" },
];

const mockSegments = [
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

// Simulate transcription progress
const simulateTranscription = (jobId: string): Promise<TranscriptionJob> => {
  return new Promise((resolve) => {
    const progress = Math.random() * 100;
    setTimeout(() => {
      if (progress > 90) {
        resolve({
          jobId,
          status: "completed",
          progress: 100,
          result: {
            speakers: mockSpeakers,
            segments: mockSegments,
          },
        });
      } else {
        resolve({
          jobId,
          status: "processing",
          progress: Math.round(progress),
        });
      }
    }, 1000);
  });
};

export async function uploadAudioFile(file: File): Promise<UploadResponse> {
  // Simulate file upload with artificial delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ jobId: Math.random().toString(36).substring(7) });
    }, 1500);
  });
}

export async function getTranscriptionResult(
  jobId: string,
): Promise<TranscriptionJob> {
  return simulateTranscription(jobId);
}
