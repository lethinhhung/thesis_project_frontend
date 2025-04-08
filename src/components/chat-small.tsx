import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Message } from "@/interfaces/message";
import { chatCompletions } from "@/utils/test.api";
import { ChevronDown, Plus, Send, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Input } from "./ui/input";

function ChatBoxSmall() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const scrollToBottom = () => {
    const chatContainer = document.getElementById("scroll");
    if (chatContainer) {
      chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: "smooth",
      });
    }
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

    const newMessage: Message = {
      role: "user",
      content: input.trim(),
    };
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
    <div className="flex flex-col w-full h-80 space-y-4 items-center">
      {messages?.length > 0 && (
        <div id="scroll" className="w-full h-full overflow-y-auto scrollbar">
          {messages?.map((message, index) =>
            message?.role === "user" ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div key={index} className="flex justify-end mb-2 p-2">
                  <div className="p-2 rounded-md bg-background">
                    {message?.content}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div key={index} className="flex flex-col gap-2 p-2">
                  <Sparkles size={16} />
                  <div className="flex flex-col max-w-full mb-2 bg-secondary rounded-md">
                    {message?.content}
                  </div>
                </div>
              </motion.div>
            )
          )}
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-2 p-1">
                <small className="text-sm font-medium leading-none">
                  Thinking...
                </small>
                <Skeleton className="w-30 p-4 mb-5 rounded-md h-10" />
              </div>
            </motion.div>
          )}
        </div>
      )}
      {messages?.length == 0 && (
        <p className="flex h-full items-center text-sm text-muted-foreground"></p>
      )}
      <div className="flex flex-col items-center w-full p-1">
        <Input
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          spellCheck={false}
          placeholder="Ask anything..."
          className="bg-background"
        ></Input>
        <div className="w-full pt-1 md:pt-2 flex gap-1 md:gap-2 items-center justify-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setMessages([])}
                size={"sm"}
                variant={"ghost"}
              >
                <Plus />
              </Button>
            </TooltipTrigger>
            <TooltipContent>New chat</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={"sm"} onClick={scrollToBottom} variant={"ghost"}>
                <ChevronDown />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Scroll to bottom</TooltipContent>
          </Tooltip>
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
            size={"sm"}
            variant={"ghost"}
          >
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatBoxSmall;
