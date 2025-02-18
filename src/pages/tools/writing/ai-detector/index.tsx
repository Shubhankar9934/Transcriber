import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bot, User } from "lucide-react";

const AiDetector = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ score: number; label: string } | null>(
    null,
  );

  const handleAnalyze = () => {
    if (!text.trim()) return;

    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        score: 85,
        label: "AI-Generated",
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                AI Content Detector
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Check if text was written by a human or AI
              </motion.p>
            </div>

            <Card className="p-6 mb-6">
              <Textarea
                placeholder="Paste your text here..."
                className="min-h-[200px] mb-4"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleAnalyze}
                  disabled={!text.trim() || isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Text"}
                </Button>
              </div>
            </Card>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Analysis Result
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      {result.score > 50 ? (
                        <Bot className="w-8 h-8 text-blue-500" />
                      ) : (
                        <User className="w-8 h-8 text-green-500" />
                      )}
                      <div>
                        <p className="text-lg font-medium">{result.label}</p>
                        <p className="text-gray-600">
                          {result.score}% confidence score
                        </p>
                      </div>
                    </div>
                    <Progress value={result.score} />
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default AiDetector;
