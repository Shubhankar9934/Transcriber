import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Check, AlertCircle } from "lucide-react";

const GrammarCheck = () => {
  const [text, setText] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleCheck = () => {
    if (!text.trim()) return;

    setIsChecking(true);
    // Simulate API call
    setTimeout(() => {
      setResults([
        { type: "error", message: "Missing comma after introductory phrase" },
        {
          type: "suggestion",
          message: "Consider using a more formal tone here",
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
                Grammar Check
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Advanced grammar and style checking
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
                  {isChecking ? "Checking..." : "Check Grammar"}
                </Button>
              </div>
            </Card>

            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Results</h2>
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        {result.type === "error" ? (
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        ) : (
                          <Check className="w-5 h-5 text-blue-500" />
                        )}
                        <div>
                          <p className="font-medium capitalize">
                            {result.type}
                          </p>
                          <p className="text-gray-600">{result.message}</p>
                        </div>
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

export default GrammarCheck;
