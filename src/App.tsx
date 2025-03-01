import { useTranslation } from "react-i18next";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
      <Button onClick={() => i18n.changeLanguage("vi")}>
        {t("vietnamese")}
      </Button>
      <Button onClick={() => i18n.changeLanguage("en")}>{t("english")}</Button>
    </ThemeProvider>
  );
}

export default App;
