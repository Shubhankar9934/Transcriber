import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

interface UploadZoneProps {
  onFileUpload?: (file: File) => void;
  isUploading?: boolean;
  uploadProgress?: number;
}

const UploadZone = ({
  onFileUpload = () => {},
  isUploading = false,
  uploadProgress = 0,
}: UploadZoneProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]);
        onFileUpload(acceptedFiles[0]);
      }
    },
    [onFileUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "audio/*": [".mp3", ".wav", ".m4a", ".aac"],
    },
    multiple: false,
  });

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto bg-white p-8 rounded-xl shadow-xl border border-slate-200">
      <div
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 bg-gradient-to-b from-slate-50 to-white transform hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1
          ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400"}
          ${isUploading ? "pointer-events-none opacity-50" : ""}`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center justify-center space-y-4">
          <Upload
            className={`w-12 h-12 ${isDragActive ? "text-blue-500" : "text-gray-400"}`}
          />
          {selectedFile ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
                {selectedFile.name}
              </span>
              <button
                onClick={clearSelection}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          ) : (
            <>
              <p className="text-lg font-medium text-gray-700">
                Drag and drop your audio file here
              </p>
              <p className="text-sm text-gray-500">
                or click to select a file from your computer
              </p>
              <p className="text-xs text-gray-400">
                Supported formats: MP3, WAV, M4A, AAC
              </p>
            </>
          )}
        </div>
      </div>

      {isUploading && (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="w-full" />
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <Button
          disabled={!selectedFile || isUploading}
          onClick={() => selectedFile && onFileUpload(selectedFile)}
        >
          {isUploading ? "Uploading..." : "Upload File"}
        </Button>
      </div>
    </div>
  );
};

export default UploadZone;
