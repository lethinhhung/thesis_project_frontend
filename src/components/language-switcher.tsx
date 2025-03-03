import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon">
          <Languages />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="right" className="w-full">
        <div className="grid gap-5">
          <Label>{t("languages")}</Label>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => changeLanguage("en")}
              variant={i18n.language === "en" ? "default" : "ghost"}
            >
              {t("english")}
            </Button>
            <Button
              onClick={() => changeLanguage("vi")}
              variant={i18n.language === "vi" ? "default" : "ghost"}
            >
              {t("vietnamese")}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;
