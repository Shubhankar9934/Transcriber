import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Crown } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic transcription for individuals",
    features: [
      "5 hours of transcription per month",
      "Basic speaker detection",
      "Standard support",
      "TXT export",
    ],
  },
  {
    name: "Premium",
    price: "$29",
    description: "Advanced features for professionals",
    features: [
      "25 hours of transcription per month",
      "Advanced speaker detection",
      "Priority support",
      "All export formats",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for large teams",
    features: [
      "Unlimited transcription",
      "Custom AI model training",
      "24/7 dedicated support",
      "Custom integration",
      "SLA guarantee",
    ],
  },
];

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    navigate(`/payment?plan=${planName.toLowerCase()}`);
  };

  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Choose Your Plan
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Select the perfect plan for your transcription needs
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`relative p-8 h-full ${plan.popular ? "border-2 border-blue-500" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`w-full ${plan.popular ? "bg-blue-500 hover:bg-blue-600" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Free" ? "Current Plan" : "Select Plan"}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default SubscriptionPage;
