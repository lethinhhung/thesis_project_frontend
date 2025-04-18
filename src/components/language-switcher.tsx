import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./ui/dropdown-menu";
import { Button, buttonVariants } from "./ui/button";
import { VariantProps } from "class-variance-authority";

const LanguageSwitcher = ({
  isSidebarOpen = true,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { isSidebarOpen?: boolean }) => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    document.documentElement.lang = lng;
  };

  return (
    <TooltipProvider>
      <DropdownMenu modal={false}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button {...props}>
                <Languages />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side={isSidebarOpen ? "top" : "right"}>
            Change language
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Languages</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={language}
            onValueChange={(e) => changeLanguage(e)}
          >
            <DropdownMenuRadioItem value="en">
              {t("english")}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="vi">
              {t("vietnamese")}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
};

export default LanguageSwitcher;
