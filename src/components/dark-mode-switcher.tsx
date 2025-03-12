"use client";

import { Moon, Sun, SunMoon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function DarkModeSwitcher() {
  const [icon, setIcon] = useState(<Sun />);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIcon(
      theme === "light" ? (
        <Sun className="text-secondary" />
      ) : theme === "dark" ? (
        <Moon className="text-secondary" />
      ) : (
        <SunMoon className="text-secondary" />
      )
    );
  }, [theme]);

  const handleSwitch = () => {
    setTheme(
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    );
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleSwitch} size={"icon"}>
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Change appearance</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
