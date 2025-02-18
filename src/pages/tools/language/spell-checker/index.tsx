import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const SpellChecker = () => {
  const [text, setText] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleCheck = () => {
    if (!text.trim()) return;

    setIsChecking(true);
    // Simulate API call
    setTimeout(() => {
      setResults([
        {
          word: "recieve",
          suggestion: "receive",
          context: "...you will recieve the...",
        },
        {
          word: "accomodate",
          suggestion: "accommodate",
          context: "...to accomodate your...",
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
                Spell Checker
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Check your text for spelling errors
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
                  {isChecking ? "Checking..." : "Check Spelling"}
                </Button>
              </div>
            </Card>

            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Spelling Errors
                  </h2>
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg space-y-2"
                      >
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                          <p className="font-medium">
                            "{result.word}" might be misspelled
                          </p>
                        </div>
                        <p className="text-gray-600 pl-7">
                          Suggestion: {result.suggestion}
                        </p>
                        <p className="text-sm text-gray-500 pl-7">
                          Context: {result.context}
                        </p>
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

export default SpellChecker;
