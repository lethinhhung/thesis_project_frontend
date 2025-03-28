import ButtonWithBadge from "@/components/button-with-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Textarea } from "@/components/ui/textarea";
import {
  ChevronDown,
  MessageCircleMoreIcon,
  Paperclip,
  Plus,
  Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
  message: string;
  sender: string;
  date: string;
}

function Chat() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      message: "Hello! How can I assist you today?",
      sender: "ai",
      date: "3/21/2025",
    },
    {
      message: "Hi! Can you help me understand recursion?",
      sender: "user",
      date: "3/21/2025",
    },
    {
      message:
        "Of course! Recursion is a technique where a function calls itself to solve a problem. Do you need an example?",
      sender: "ai",
      date: "3/21/2025",
    },
    {
      message: "Yes, please show me an example using JavaScript.",
      sender: "user",
      date: "3/21/2025",
    },
    {
      message:
        "Sure! Here's a simple recursive function to calculate the factorial of a number:\n\n```javascript\nfunction factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5)); // Output: 120\n```",
      sender: "ai",
      date: "3/21/2025",
    },
    {
      message:
        "Got it! So the function keeps calling itself until n reaches 0?",
      sender: "user",
      date: "3/21/2025",
    },
    {
      message:
        "Exactly! The base case (n === 0) stops the recursion, preventing infinite loops.",
      sender: "ai",
      date: "3/21/2025",
    },
    {
      message: "That makes sense. Thanks a lot!",
      sender: "user",
      date: "3/21/2025",
    },
    {
      message: "You're welcome! Let me know if you have any other questions.",
      sender: "ai",
      date: "3/21/2025",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    setMessages([
      ...messages,
      {
        message: input.trim(),
        sender: "user",
        date: new Date().toLocaleDateString(),
      },
      {
        message: "Sorry. I can't help with that yet.",
        sender: "ai",
        date: new Date().toLocaleDateString(),
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col mx-auto space-y-4 items-center justify-between w-full h-[calc(100dvh-92px)] max-w-5xl rounded-xl">
      <div id="scroll" className="w-full overflow-y-auto md:p-4 scrollbar">
        {messages.map((message, index) =>
          message.sender === "user" ? (
            <div key={index} className="flex justify-end mb-5">
              <div className="p-4 rounded-md border border-dashed">
                {message.message}
                <p className="text-xs text-muted-foreground flex justify-end pt-4">
                  {message.date}
                </p>
              </div>
            </div>
          ) : (
            <div key={index} className="flex">
              <div className="flex flex-col max-w-full p-4 mb-5 bg-secondary rounded-md">
                {message.message}
                <p className="text-xs text-muted-foreground flex pt-4">
                  {message.date}
                </p>
              </div>
            </div>
          )
        )}
        <div ref={messagesEndRef}></div>
      </div>
      {messages.length === 0 && (
        <h4 className="flex gap-1 scroll-m-20 text-xl font-semibold tracking-tight">
          <MessageCircleMoreIcon /> Ask for anything...
        </h4>
      )}

      <div className="flex flex-col items-center w-full rounded-2xl md:px-4 bg-background">
        <Textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          spellCheck={false}
          placeholder="Ask anything..."
          className="resize-none max-h-[17rem] border-dashed scrollbar"
        ></Textarea>
        <div className="w-full pt-1 md:pt-2 flex gap-1 md:gap-2 items-center justify-end">
          <Badge variant="outline">2 content attched</Badge>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ButtonWithBadge
                variant={"ghost"}
                size={"icon"}
                isBadgeVisible={true}
                badgeColor="bg-sky-500"
              >
                <Paperclip />
              </ButtonWithBadge>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Attach content</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            onClick={() => setMessages([])}
            size={"icon"}
            variant={"ghost"}
          >
            <Plus />
          </Button>
          <Button size={"icon"} onClick={scrollToBottom} variant={"ghost"}>
            <ChevronDown />
          </Button>
          <Button
            disabled={!input.trim()}
            onClick={() => {
              if (!input.trim()) return;
              handleSendMessage();
            }}
            size={"icon"}
          >
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
