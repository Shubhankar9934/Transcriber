import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Hash, Clock, AlignJustify, Type } from "lucide-react";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    readingTime: 0,
  });

  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const readingTime = Math.ceil(words / 200); // Average reading speed of 200 words per minute

    setStats({
      characters,
      words,
      sentences,
      readingTime,
    });
  }, [text]);

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
                Word Counter
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Count words, characters, and more
              </motion.p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Type className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Characters</p>
                    <p className="text-2xl font-bold">{stats.characters}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Hash className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">Words</p>
                    <p className="text-2xl font-bold">{stats.words}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <AlignJustify className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-600">Sentences</p>
                    <p className="text-2xl font-bold">{stats.sentences}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-600">Reading Time</p>
                    <p className="text-2xl font-bold">
                      {stats.readingTime} min
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <Textarea
                placeholder="Type or paste your text here..."
                className="min-h-[300px]"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Card>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default WordCounter;
