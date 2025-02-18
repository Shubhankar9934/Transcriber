import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Check, Quote } from "lucide-react";

const CitationGenerator = () => {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    year: "",
    source: "",
    url: "",
  });
  const [citationStyle, setCitationStyle] = useState("apa");
  const [citation, setCitation] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = () => {
    // Simulate citation generation
    const citation =
      citationStyle === "apa"
        ? `${formData.authors} (${formData.year}). ${formData.title}. ${formData.source}.`
        : `${formData.authors}. "${formData.title}." ${formData.source}, ${formData.year}.`;

    setCitation(citation);
  };

  const handleCopy = () => {
    if (citation) {
      navigator.clipboard.writeText(citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
                Citation Generator
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Generate citations in multiple formats
              </motion.p>
            </div>

            <Card className="p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Select
                    value={citationStyle}
                    onValueChange={setCitationStyle}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Citation Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apa">APA</SelectItem>
                      <SelectItem value="mla">MLA</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                      <SelectItem value="harvard">Harvard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Title
                    </label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter the title"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Authors
                    </label>
                    <Input
                      name="authors"
                      value={formData.authors}
                      onChange={handleInputChange}
                      placeholder="Author names (separated by commas)"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Year
                    </label>
                    <Input
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="Publication year"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Source
                    </label>
                    <Input
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      placeholder="Journal, Book, Website, etc."
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      URL (optional)
                    </label>
                    <Input
                      name="url"
                      value={formData.url}
                      onChange={handleInputChange}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={handleGenerate}
                    className="flex items-center gap-2"
                  >
                    Generate Citation <Quote className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {citation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-lg font-semibold">
                      Generated Citation
                    </h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopy}
                      className="hover:bg-gray-100"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">{citation}</div>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default CitationGenerator;
