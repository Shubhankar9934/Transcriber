import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight, Wand2 } from "lucide-react";

const Paraphraser = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleParaphrase = async () => {
    if (!inputText.trim()) return;

    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setOutputText(
        "This is a simulated paraphrased version of your text. The actual API integration will provide real paraphrasing.",
      );
      setIsProcessing(false);
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
                AI Paraphrasing Tool
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Rewrite your text with different words while keeping the same
                meaning
              </motion.p>
            </div>

            <div className="grid gap-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Original Text</h2>
                <Textarea
                  placeholder="Enter your text here..."
                  className="min-h-[200px] mb-4"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handleParaphrase}
                    disabled={!inputText.trim() || isProcessing}
                    className="flex items-center gap-2"
                  >
                    {isProcessing ? (
                      "Processing..."
                    ) : (
                      <>
                        Paraphrase <Wand2 className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {outputText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="p-6">
                    <h2 className="text-lg font-semibold mb-4">
                      Paraphrased Text
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
                      {outputText}
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Paraphraser;
