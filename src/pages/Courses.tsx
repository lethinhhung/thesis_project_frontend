import Editor from "@/components/editor";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Square, SquareDashed } from "lucide-react";
import { useState, useEffect } from "react";

function Courses() {
  const [isPlainBackground, setIsPlainBackground] = useState(false);
  const { theme } = useTheme();
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

  const handlePlainBackground = () => {
    setIsPlainBackground(!isPlainBackground);
  };

  return (
    <div className="flex flex-col items-center h-full w-full">
      {isDarkTheme && (
        <Button
          className="fixed right-3 bottom-4 lg:bottom-4 lg:right-[17rem] z-50"
          onClick={handlePlainBackground}
          size="icon"
          variant="outline"
        >
          {isPlainBackground ? <SquareDashed /> : <Square />}
        </Button>
      )}
      <div
        className="w-full max-w-[1000px] font-inherit relative"
        spellCheck="false"
      >
        <Editor
          isPlainBackground={isPlainBackground}
          isDarkTheme={isDarkTheme}
        />
      </div>
    </div>
  );
}

export default Courses;
