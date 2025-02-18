import React from "react";
import { motion } from "framer-motion";
import { Card3D } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Languages,
  Type,
  Bot,
  Quote,
  FileSearch,
  ScanText,
  Wand2,
  Check,
  Hash,
  AlignJustify,
  Mic,
  Users,
  Activity,
} from "lucide-react";

const tools = [
  {
    category: "AI Processing",
    items: [
      {
        name: "Speech Recognition",
        description: "Real-time speech-to-text conversion",
        icon: Mic,
        path: "/tools/ai/speech-recognition",
      },
      {
        name: "Speaker Diarization",
        description: "Identify different speakers in audio",
        icon: Users,
        path: "/tools/ai/speaker-diarization",
      },
      {
        name: "Real-time Progress",
        description: "Track transcription progress live",
        icon: Activity,
        path: "/tools/ai/progress-tracking",
      },
    ],
  },
  {
    category: "Writing Tools",
    items: [
      {
        name: "Paraphraser",
        description: "Rewrite text while keeping the same meaning",
        icon: Wand2,
        path: "/tools/writing/paraphraser",
      },
      {
        name: "Grammar Checker",
        description: "Check grammar and style",
        icon: Check,
        path: "/tools/writing/grammar-checker",
      },
      {
        name: "AI Detector",
        description: "Check if text is AI-generated",
        icon: Bot,
        path: "/tools/writing/ai-detector",
      },
      {
        name: "Plagiarism Checker",
        description: "Check for potential plagiarism",
        icon: FileSearch,
        path: "/tools/writing/plagiarism-checker",
      },
      {
        name: "Summarizer",
        description: "Get concise text summaries",
        icon: ScanText,
        path: "/tools/writing/summarizer",
      },
      {
        name: "Translator",
        description: "Translate between languages",
        icon: Languages,
        path: "/tools/writing/translator",
      },
      {
        name: "Citation Generator",
        description: "Generate citations in multiple formats",
        icon: Quote,
        path: "/tools/writing/citation-generator",
      },
    ],
  },
  {
    category: "Language Tools",
    items: [
      {
        name: "Grammar Check",
        description: "Advanced grammar analysis",
        icon: Type,
        path: "/tools/language/grammar-check",
      },
      {
        name: "Spell Checker",
        description: "Find and fix spelling errors",
        icon: Check,
        path: "/tools/language/spell-checker",
      },
      {
        name: "Punctuation Check",
        description: "Perfect your punctuation",
        icon: AlignJustify,
        path: "/tools/language/punctuation-check",
      },
      {
        name: "Word Counter",
        description: "Count words and characters",
        icon: Hash,
        path: "/tools/language/word-counter",
      },
    ],
  },
];

const ToolsShowcase = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powerful Tools for Every Need
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our comprehensive suite of writing and language tools
          </motion.p>
        </div>

        <div className="space-y-16">
          {tools.map((category, categoryIndex) => (
            <div key={category.category}>
              <motion.h3
                className="text-2xl font-semibold mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {category.category}
              </motion.h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={tool.path}>
                        <Card3D className="p-6 h-full cursor-pointer group transform-gpu transition-transform duration-300 hover:scale-[1.02]">
                          <Icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                          <h4 className="text-lg font-semibold mb-2">
                            {tool.name}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {tool.description}
                          </p>
                          <Button
                            variant="ghost"
                            className="text-blue-500 hover:text-blue-600 p-0 h-auto font-medium"
                          >
                            Try Now
                          </Button>
                        </Card3D>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsShowcase;
