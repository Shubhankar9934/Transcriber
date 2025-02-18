import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, ExternalLink } from "lucide-react";

const PlagiarismChecker = () => {
  const [text, setText] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState<any[] | null>(null);

  const handleCheck = () => {
    if (!text.trim()) return;

    setIsChecking(true);
    // Simulate API call
    setTimeout(() => {
      setResults([
        {
          matchedText: "This specific phrase appears to be copied",
          similarity: 95,
          source: "https://example.com/article1",
        },
        {
          matchedText: "Another potentially plagiarized section",
          similarity: 80,
          source: "https://example.com/article2",
        },
      ]);
      setIsChecking(false);
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
                Plagiarism Checker
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Check your text for potential plagiarism
              </motion.p>
            </div>

            <Card className="p-6 mb-6">
              <Textarea
                placeholder="Enter your text here..."
                className="min-h-[200px] mb-4"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleCheck}
                  disabled={!text.trim() || isChecking}
                >
                  {isChecking ? "Checking..." : "Check for Plagiarism"}
                </Button>
              </div>
            </Card>

            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Results</h2>
                  <div className="space-y-6">
                    {results.map((result, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg space-y-3"
                      >
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-yellow-500" />
                          <p className="font-medium">
                            {result.similarity}% Match Found
                          </p>
                        </div>
                        <p className="text-gray-600 pl-7">
                          "{result.matchedText}"
                        </p>
                        <div className="pl-7">
                          <a
                            href={result.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 flex items-center gap-1"
                          >
                            View Source <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <Progress value={result.similarity} />
                      </div>
                    ))}
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

export default PlagiarismChecker;
