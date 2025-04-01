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
import { Skeleton } from "@/components/ui/skeleton";

import { Textarea } from "@/components/ui/textarea";
import { Message } from "@/interfaces/message";
import { chatCompletions } from "@/utils/api";
import {
  ChevronDown,
  MessageCircleMoreIcon,
  Paperclip,
  Plus,
  Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Chat() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getChatCompletions = async (updatedMessages: Message[]) => {
    setLoading(true);
    try {
      const res = await chatCompletions(updatedMessages);

      console.log(res);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: res?.data.choices[0]?.message?.content,
        },
      ]);
    } catch (error) {
      console.error("Error fetching chat completions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);
    setInput("");

    // Gọi API sau khi `messages` cập nhật
    getChatCompletions(updatedMessages);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col mx-auto space-y-4 items-center justify-between w-full h-[calc(100dvh-92px)] max-w-5xl rounded-xl">
      <div id="scroll" className="w-full overflow-y-auto md:p-4 scrollbar">
        {messages?.map((message, index) =>
          message?.role === "user" ? (
            <div key={index} className="flex justify-end mb-5">
              <div className="p-4 rounded-md border border-dashed">
                {message?.content}
              </div>
            </div>
          ) : (
            <div key={index} className="flex">
              <div className="flex flex-col max-w-full p-4 mb-5 bg-secondary rounded-md">
                {message?.content}
              </div>
            </div>
          )
        )}
        {loading && (
          <div className="flex">
            <Skeleton className="flex flex-col w-100 p-4 mb-5 bg-secondary rounded-md h-10" />
          </div>
        )}
        <div ref={messagesEndRef}></div>
      </div>

      {messages?.length === 0 && (
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
              setMessages([
                ...messages,
                {
                  role: "user",
                  content: input.trim(),
                },
              ]);
              setInput("");
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
