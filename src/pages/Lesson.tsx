import Editor from "@/components/editor";
import { useTheme } from "@/components/theme-provider";
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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditorMenubar from "@/components/editor-menubar";
import { toast } from "sonner";

function Lesson() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [isPlainBackground, setIsPlainBackground] = useState(false);
  const [isSystemDark, setIsSystemDark] = useState(false);

  // Kiểm tra hệ thống có đang ở dark mode không (chỉ khi theme = "system")
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsSystemDark(mediaQuery.matches);

    // Lắng nghe sự thay đổi theme của hệ thống
    const handleChange = (e: MediaQueryListEvent) => {
      setIsSystemDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Xác định theme thực tế mà user đang dùng
  const isDarkTheme = theme === "dark" || (theme === "system" && isSystemDark);

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
    <div className="flex flex-col items-center h-full w-full">
      <div
        className="w-full grid grid-cols-2 gap-4 max-w-5xl font-inherit relative"
        spellCheck="false"
      >
        <Card className="dark:border-dashed col-span-2 lg:col-span-1">
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
          <CardContent className="flex flex-col gap-4 border border-dashed mx-6 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Reference documents</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
            "dark:border-dashed justify-between col-span-2 lg:col-span-1"
          }
        >
          <div className="flex justify-between">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
              <CardDescription id="summary">
                This is the summary of this lesson. It can be a brief
                description of the lesson content. It can be a brief description
                of the lesson content.
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

        <EditorMenubar
          isDarkTheme={isDarkTheme}
          isPlainBackground={isPlainBackground}
          setIsPlainBackground={setIsPlainBackground}
        />

        <Editor
          isPlainBackground={isPlainBackground}
          isDarkTheme={isDarkTheme}
        />
      </div>
    </div>
  );
}

export default Lesson;
