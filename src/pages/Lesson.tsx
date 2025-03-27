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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowUpRight,
  FileText,
  MoreHorizontal,
  Sparkles,
  Square,
  SquareDashed,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lesson() {
  const [isPlainBackground, setIsPlainBackground] = useState(false);
  const { theme } = useTheme();
  const [isSystemDark, setIsSystemDark] = useState(false);
  const navigate = useNavigate();

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

  const handlePlainBackground = () => {
    setIsPlainBackground(!isPlainBackground);
  };

  return (
    <div className="flex flex-col items-center h-full w-full">
      {isDarkTheme && (
        <div className="flex flex-col gap-2 fixed right-3 bottom-4 xl:bottom-4 2xl:right-[17rem] z-50">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handlePlainBackground}
                size="icon"
                variant={isPlainBackground ? "ghost" : "default"}
              >
                {isPlainBackground ? <Square /> : <SquareDashed />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>
                {"Switch to " +
                  (isPlainBackground
                    ? "default background"
                    : "transparent background")}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      )}
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
            <div className="grid grid-cols-3 gap-2">
              <Button variant={"ghost"}>
                <FileText />
                Document.docx
              </Button>
              <Button variant={"ghost"}>
                <FileText />
                Document.docx
              </Button>
              <Button variant={"ghost"}>
                <FileText />
                Document.docx
              </Button>
              <Button variant={"ghost"}>
                <FileText />
                Document.docx
              </Button>
              {/* <Card className="p-3">
                <CardHeader className="px-0 flex flex-row items-center gap-2">
                  <CardDescription>
                    <FileText />
                  </CardDescription>
                  <CardDescription className="line-clamp-1">
                    Document.docx
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-3">
                <CardHeader className="px-0 flex flex-row items-center gap-2">
                  <CardDescription>
                    <FileText />
                  </CardDescription>
                  <CardDescription className="line-clamp-1">
                    Document.docx
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-3">
                <CardHeader className="px-0 flex flex-row items-center gap-2">
                  <CardDescription>
                    <FileText />
                  </CardDescription>
                  <CardDescription className="line-clamp-1">
                    Document.docx
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-3">
                <CardHeader className="px-0 flex flex-row items-center gap-2">
                  <CardDescription>
                    <FileText />
                  </CardDescription>
                  <CardDescription className="line-clamp-1">
                    Document.docx
                  </CardDescription>
                </CardHeader>
              </Card> */}
            </div>
          </CardContent>
        </Card>
        <Card className="dark:border-dashed justify-between col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
            <CardDescription>
              This is the summary of this lesson. It can be a brief description
              of the lesson content. It can be a brief description of the lesson
              content.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap justify-end gap-2">
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => navigate("/chat")}
            >
              <ArrowUpRight /> Chat with AI
            </Button>
            <Button size={"sm"} variant={"secondary"}>
              <Sparkles /> Re-summerize
            </Button>
          </CardFooter>
        </Card>
        <Editor
          isPlainBackground={isPlainBackground}
          isDarkTheme={isDarkTheme}
        />
      </div>
    </div>
  );
}

export default Lesson;
