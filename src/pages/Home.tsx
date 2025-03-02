import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useNavigate } from "react-router-dom";
import { Languages, LogIn, Moon, Sun, SunMoon } from "lucide-react";
import { Upload } from "@/components/ui/upload";

function Home() {
  const { setTheme } = useTheme();
  const { i18n, t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="w-svw h-svh w-100 flex flex-col items-center justify-center py-2">
      <Upload
        label="File"
        type="file"
        accept=".pdf, .docx, .txt"
        title="Drag and drop a file or click to browse"
        description="Document files"
      ></Upload>
      <Button className="m-5" onClick={handleLogin}>
        <LogIn />
        {t("login")}
      </Button>
      <Button className="m-5" onClick={() => setTheme("light")}>
        <Sun />
        {t("lightMode")}
      </Button>
      <Button className="m-5" onClick={() => setTheme("dark")}>
        <Moon />
        {t("darkMode")}
      </Button>
      <Button className="m-5" onClick={() => setTheme("system")}>
        <SunMoon />
        {t("system")}
      </Button>
      <Button className="m-5" onClick={() => changeLanguage("en")}>
        <Languages />
        {t("english")}
      </Button>
      <Button className="m-5" onClick={() => changeLanguage("vi")}>
        <Languages />
        {t("vietnamese")}
      </Button>
    </div>
  );
}

export default Home;
