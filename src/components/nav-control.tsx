"use client";

import { Moon, Sun, SunMoon } from "lucide-react";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import LanguageSwitcher from "./language-switcher";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function NavControl() {
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
    <SidebarMenu>
      <SidebarMenuItem className="flex gap-3 items-center">
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

        <LanguageSwitcher />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
