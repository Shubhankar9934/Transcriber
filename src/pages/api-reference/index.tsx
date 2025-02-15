import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Copy, Check } from "lucide-react";
import { useState } from "react";

const endpoints = [
  {
    method: "POST",
    path: "/v1/transcribe",
    description: "Upload and transcribe an audio file",
    example: `curl -X POST https://api.transcription.ai/v1/transcribe \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "file=@audio.mp3"
`,
  },
  {
    method: "GET",
    path: "/v1/transcription/:id",
    description: "Get transcription status and results",
    example: `curl https://api.transcription.ai/v1/transcription/123 \
  -H "Authorization: Bearer YOUR_API_KEY"
`,
  },
  {
    method: "GET",
    path: "/v1/speakers",
    description: "List detected speakers in a transcription",
    example: `curl https://api.transcription.ai/v1/speakers/123 \
  -H "Authorization: Bearer YOUR_API_KEY"
`,
  },
];

export default function ApiReference() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">API Reference</h1>
            <p className="text-xl text-gray-600">
              Complete documentation for integrating with our API
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Authentication</h2>
              <p className="text-gray-600 mb-4">
                All API endpoints require authentication using a Bearer token in
                the Authorization header.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm">
                Authorization: Bearer YOUR_API_KEY
              </div>
            </div>

            <div className="space-y-6">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 border-b">
                    <div className="flex items-center gap-4 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          endpoint.method === "POST"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-lg">{endpoint.path}</code>
                    </div>
                    <p className="text-gray-600">{endpoint.description}</p>
                  </div>
                  <div className="bg-gray-900 p-6 relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(endpoint.example, index)}
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                    <pre className="text-white font-mono text-sm overflow-x-auto">
                      {endpoint.example}
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-6">
                Sign up now to get your API key and start integrating
              </p>
              <Button variant="secondary" size="lg">
                Get API Key
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
