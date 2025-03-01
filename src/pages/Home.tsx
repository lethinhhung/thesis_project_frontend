import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useNavigate } from "react-router-dom";

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
      <Button className="m-5" onClick={handleLogin}>
        {t("login")}
      </Button>
      <Button className="m-5" onClick={() => setTheme("light")}>
        {t("lightMode")}
      </Button>
      <Button className="m-5" onClick={() => setTheme("dark")}>
        {t("darkMode")}
      </Button>
      <Button className="m-5" onClick={() => setTheme("system")}>
        {t("system")}
      </Button>
      <Button className="m-5" onClick={() => changeLanguage("en")}>
        {t("english")}
      </Button>
      <Button className="m-5" onClick={() => changeLanguage("vi")}>
        {t("vietnamese")}
      </Button>
    </div>
  );
}

export default Home;
