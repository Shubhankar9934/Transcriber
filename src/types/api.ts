export interface TranscriptionJob {
  jobId: string;
  status: "processing" | "completed" | "error";
  progress?: number;
  result?: {
    speakers: Array<{
      id: string;
      name: string;
      color: string;
    }>;
    segments: Array<{
      speakerId: string;
      timestamp: string;
      text: string;
    }>;
  };
}

export interface UploadResponse {
  jobId: string;
}
