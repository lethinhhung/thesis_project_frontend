import { useTranslation } from "react-i18next";
import { ThemeProvider, useTheme } from "./components/theme-provider";
import { useEffect } from "react";
import AppRoutes from "./route/routes";
import "./App.css";
import { Toaster } from "sonner";

function App() {
  const { i18n } = useTranslation();
  const { theme } = useTheme();

  useEffect(() => {
    if (i18n.language === "vi") {
      document.documentElement.classList.remove("font-[Geist]");
      document.body.classList.remove("font-[Geist]");
    } else {
      document.documentElement.classList.add("font-[Geist]");
      document.body.classList.add("font-[Geist]");
    }
  }, [i18n.language]);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRoutes />
      </ThemeProvider>
      <Toaster theme={theme} />
    </>
  );
}

export default App;
