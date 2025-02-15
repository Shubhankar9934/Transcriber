import { TranscriptionJob, UploadResponse } from "@/types/api";

const API_BASE_URL = "http://localhost:5000/api";

export async function uploadAudioFile(file: File): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${API_BASE_URL}/transcribe`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

export async function getTranscriptionResult(
  jobId: string,
): Promise<TranscriptionJob> {
  try {
    const response = await fetch(`${API_BASE_URL}/result/${jobId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching transcription result:", error);
    throw error;
  }
}
