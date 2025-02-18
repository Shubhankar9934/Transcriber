import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { FileText, ScanText } from "lucide-react";

const Summarizer = () => {
  const [text, setText] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  const handleSummarize = () => {
    if (!text.trim()) return;

    setIsSummarizing(true);
    // Simulate API call
    setTimeout(() => {
      setSummary(
        "This is a simulated summary of the provided text. The actual API integration will provide real summarization using advanced AI techniques.",
      );
      setIsSummarizing(false);
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
                Text Summarizer
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Get a concise summary of your text
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
                  onClick={handleSummarize}
                  disabled={!text.trim() || isSummarizing}
                  className="flex items-center gap-2"
                >
                  {isSummarizing ? (
                    "Summarizing..."
                  ) : (
                    <>
                      Summarize <ScanText className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {summary && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <h2 className="text-lg font-semibold">Summary</h2>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">{summary}</div>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Summarizer;
