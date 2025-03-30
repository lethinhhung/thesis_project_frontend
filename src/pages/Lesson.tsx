import ChatMedium from "@/components/chat-medium";
import Editor from "@/components/editor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ArrowUpRight,
  Copy,
  FileText,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useDelayedHidden } from "@/hooks/use-delay-hidden";
import { motion } from "framer-motion";

function Lesson() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const isFullyHidden = useDelayedHidden(!isChatOpen, 75);

  const copyText = () => {
    const text = document?.getElementById("summary")?.innerText;
    navigator.clipboard
      .writeText(text?.toString() || "")
      .then(() => toast.success("Copied to clipboard!"))
      .catch((err) => {
        console.error("Err:", err);
      });
  };

  return (
    <div className="flex justify-center h-full w-full gap-4">
      <div
        className="w-full grid grid-cols-2 gap-4 max-w-5xl font-inherit relative"
        spellCheck="false"
      >
        <div className="col-span-2 gap-4 columns-md space-y-4">
          <Card className="dark:border-dashed break-inside-avoid-column">
            <div className="flex justify-between">
              <CardHeader>
                <CardTitle>Lesson 1 📄</CardTitle>
                <CardDescription>22/12/2013</CardDescription>
                <CardDescription>User's lesson note</CardDescription>
              </CardHeader>
              <div className="px-4">
                <Button size={"sm"} variant={"ghost"}>
                  <MoreHorizontal />
                </Button>
              </div>
            </div>
            <CardContent className="border border-dashed mx-6 p-4 rounded-lg">
              <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
                <p className="col-span-2 md:col-span-3 text-sm text-muted-foreground">
                  Reference documents
                </p>
                <Button variant={"ghost"}>
                  <FileText />
                  <p className="line-clamp-1">Document.docx</p>
                </Button>
                <Button variant={"ghost"}>
                  <FileText />
                  <p className="line-clamp-1">Document.docx</p>
                </Button>
                <Button variant={"ghost"}>
                  <FileText />
                  <p className="line-clamp-1">Document.docx</p>
                </Button>
                <Button variant={"ghost"}>
                  <FileText />
                  <p className="line-clamp-1">Document.docx</p>
                </Button>
                <Button variant={"ghost"}>
                  <FileText />
                  <p className="line-clamp-1">Document.docx</p>
                </Button>
                <Button variant={"ghost"}>
                  <FileText />
                  <p className="line-clamp-1">Document.docx</p>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card
            className={
              "dark:border-dashed justify-between break-inside-avoid-column"
            }
          >
            <div className="flex justify-between">
              <CardHeader>
                <CardTitle>Summary</CardTitle>
                <CardDescription id="summary">
                  This is the summary of this lesson. It can be a brief
                  description of the lesson content. It can be a brief
                  description of the lesson content.
                </CardDescription>
              </CardHeader>
              <div className="px-4">
                <Button size={"sm"} variant={"ghost"} onClick={copyText}>
                  <Copy />
                </Button>
              </div>
            </div>
            <CardFooter className="flex flex-wrap justify-end gap-2">
              <Button
                size={"sm"}
                variant={"ghost"}
                onClick={() => window.open("/chat", "_blank")}
              >
                <ArrowUpRight /> Chat with AI
              </Button>
              <Button size={"sm"} variant={"secondary"}>
                <Sparkles /> Re-summarize
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* <EditorMenubar
          isDarkTheme={isDarkTheme}
          isPlainBackground={isPlainBackground}
          setIsPlainBackground={setIsPlainBackground}
        /> */}

        <Editor isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      </div>

      <motion.div
        hidden={isFullyHidden} // Ẩn khi không cần thiết
        initial={{ opacity: 0, x: 50 }} // Bắt đầu từ bên phải và mờ đi
        animate={{ opacity: isChatOpen ? 1 : 0, x: isChatOpen ? 0 : 50 }} // Hiện ra khi mở chat
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={
          "hidden 2xl:flex sticky dark:border-dashed h-[calc(100svh-92px)] w-full min-w-100 flex-1 top-16"
        }
      >
        <ChatMedium />
      </motion.div>
    </div>
  );
}

export default Lesson;
