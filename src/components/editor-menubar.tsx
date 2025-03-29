import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ArrowUpRight, Square, SquareDashed } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import ChatMedium from "./chat-medium";

function EditorMenubar({
  isDarkTheme,
  isPlainBackground,
  setIsPlainBackground,
}: {
  isDarkTheme: boolean;
  isPlainBackground: boolean;
  setIsPlainBackground: (value: boolean) => void;
}) {
  return (
    <Menubar className="justify-between col-span-full sticky z-10 top-16 dark:border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center space-x-2">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Export to</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>PDF</MenubarItem>
                <MenubarItem>HTML</MenubarItem>
                <MenubarItem>Markdown</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Save</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>AI tools</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Translate to</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>English</MenubarItem>
                <MenubarItem>Vietnamese</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem onSelect={() => window.open("/chat", "_blank")}>
              Asking
              <MenubarShortcut>
                <ArrowUpRight />
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Summarize</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {isDarkTheme && (
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="px-2 py-1 h-7 rounded-sm text-sm font-medium"
                    onClick={() => {
                      setIsPlainBackground(!isPlainBackground);
                    }}
                    size="sm"
                    variant={isPlainBackground ? "ghost" : "secondary"}
                  >
                    {isPlainBackground ? <Square /> : <SquareDashed />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>
                    {"Switch to " +
                      (isPlainBackground
                        ? "default background"
                        : "transparent background")}
                  </p>
                </TooltipContent>
              </Tooltip>
            </MenubarTrigger>
          </MenubarMenu>
        )}
      </div>
      <div className="hidden 2xl:flex px-12">
        <MenubarMenu>
          <Popover>
            <MenubarTrigger asChild>
              <PopoverTrigger className="text-sm">Chatbox</PopoverTrigger>
            </MenubarTrigger>
            <PopoverContent
              side="right"
              className="hidden 2xl:flex mt-16 w-106"
            >
              <ChatMedium />
            </PopoverContent>
          </Popover>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
export default EditorMenubar;
