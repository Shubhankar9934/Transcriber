import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { History, User, ArrowLeft, Crown } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onBack?: () => void;
  showBackButton?: boolean;
}

const Header = ({ onBack, showBackButton = false }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  let authContext;
  try {
    authContext = useAuth();
  } catch {
    authContext = { user: null, logout: () => {}, isLoading: false };
  }
  const { user, logout } = authContext;
  const isHomePage = location.pathname === "/";

  const handleUpgrade = () => {
    navigate("/pricing");
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-95" />

        {/* Animated border */}
        <div className="absolute inset-x-0 bottom-0 h-px animate-border-slide">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>

        <div className="relative px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onBack}
                  className="text-white hover:text-blue-200 transition-all"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </motion.div>
            )}

            <Link to="/" className="flex items-center gap-2 group">
              <motion.h1
                className="text-2xl font-bold bg-gradient-to-r from-blue-100 via-blue-200 to-white bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-blue-100 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Transcription AI
              </motion.h1>
            </Link>

            {!showBackButton && (
              <nav className="hidden md:flex items-center gap-6 ml-8">
                {[
                  { to: "/features", label: "Features" },
                  { to: "/pricing", label: "Pricing" },
                  { to: "/enterprise", label: "Enterprise" },
                  { to: "/documentation", label: "Docs" },
                  { to: "/blog", label: "Blog" },
                ].map((item) => (
                  <motion.div
                    key={item.to}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      to={item.to}
                      className={cn(
                        "text-gray-300 hover:text-white transition-colors relative group",
                        location.pathname === item.to && "text-white",
                      )}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                {user.plan === "free" && (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                      onClick={handleUpgrade}
                    >
                      <Crown className="w-4 h-4" />
                      Upgrade to Premium
                    </Button>
                  </motion.div>
                )}

                {!isHomePage && (
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => navigate("/history")}
                      className="text-gray-300 hover:text-white"
                    >
                      <History className="h-5 w-5" />
                    </Button>
                  </motion.div>
                )}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button
                        variant="ghost"
                        className="relative h-10 w-10 rounded-full overflow-hidden"
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>
                            <User className="h-6 w-6" />
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </motion.div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 animate-in fade-in-0 zoom-in-95"
                  >
                    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/profile")}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/documentation" className="w-full">
                        Documentation
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/support" className="w-full">
                        Support
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={logout}
                      className="text-red-500 focus:text-red-500"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="ghost"
                    asChild
                    className="text-gray-300 hover:text-white"
                  >
                    <Link to="/login">Sign In</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
