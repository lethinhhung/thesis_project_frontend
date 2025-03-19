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

export function DarkModeSwitcher({
  variant,
}: {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}) {
  const [icon, setIcon] = useState(<Sun />);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIcon(
      theme === "light" ? <Sun /> : theme === "dark" ? <Moon /> : <SunMoon />
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
          <Button onClick={handleSwitch} size={"icon"} variant={variant}>
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
