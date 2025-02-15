import React from "react";
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

interface HeaderProps {
  onBack?: () => void;
  showBackButton?: boolean;
}

const Header = ({ onBack, showBackButton = false }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isHomePage = location.pathname === "/";

  const handleUpgrade = () => {
    navigate("/pricing");
  };

  return (
    <header className="w-full h-20 bg-gradient-to-r from-slate-900 to-slate-800 px-6 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-white hover:text-blue-200 transition-transform hover:scale-110"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
            Transcription AI
          </h1>
        </Link>

        {!showBackButton && (
          <nav className="hidden md:flex items-center gap-6 ml-8">
            <Link
              to="/features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/enterprise"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Enterprise
            </Link>
            <Link
              to="/documentation"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
          </nav>
        )}
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            {user.plan === "free" && (
              <Button
                variant="secondary"
                size="sm"
                className="hidden md:flex items-center gap-2"
                onClick={handleUpgrade}
              >
                <Crown className="w-4 h-4" />
                Upgrade to Premium
              </Button>
            )}

            {!isHomePage && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/history")}
                className="text-gray-300 hover:text-white"
              >
                <History className="h-5 w-5" />
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                      <User className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
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
                <DropdownMenuItem onClick={logout} className="text-red-500">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
