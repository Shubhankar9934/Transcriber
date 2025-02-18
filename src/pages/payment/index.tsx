import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import MainLayout from "@/components/layouts/MainLayout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Lock } from "lucide-react";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      navigate("/payment/success");
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container max-w-2xl mx-auto px-4"
        >
          <Card className="p-8">
            <div className="text-center mb-8">
              <motion.h1
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Complete Your Purchase
              </motion.h1>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                You're upgrading to{" "}
                {plan?.charAt(0).toUpperCase() + plan?.slice(1)}
              </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Card Number
                  </label>
                  <Input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Expiry Date
                    </label>
                    <Input type="text" placeholder="MM/YY" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      CVC
                    </label>
                    <Input type="text" placeholder="123" required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Name on Card
                  </label>
                  <Input type="text" placeholder="John Doe" required />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  "Processing..."
                ) : (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Pay Securely
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              Your payment is secured with SSL encryption
            </p>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default PaymentPage;
