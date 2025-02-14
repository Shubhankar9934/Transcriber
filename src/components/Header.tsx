import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { History, User, ArrowLeft } from "lucide-react";

interface HeaderProps {
  onBack?: () => void;
  showBackButton?: boolean;
  userName?: string;
  userImage?: string;
  onHistoryClick?: () => void;
  onProfileClick?: () => void;
  onLogoutClick?: () => void;
}

const Header = ({
  onBack,
  showBackButton = false,
  userName = "John Doe",
  userImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  onHistoryClick = () => console.log("History clicked"),
  onProfileClick = () => console.log("Profile clicked"),
  onLogoutClick = () => console.log("Logout clicked"),
}: HeaderProps) => {
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
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
          Transcription Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onHistoryClick}
          className="text-gray-600 hover:text-gray-900"
        >
          <History className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src={userImage} alt={userName} />
                <AvatarFallback>
                  <User className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{userName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onProfileClick}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onLogoutClick}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
