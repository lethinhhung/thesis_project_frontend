import { useTranslation } from "react-i18next";
import { ThemeProvider } from "./components/theme-provider";
import { useEffect } from "react";
import AppRoutes from "./route/routes";

function App() {
  const { i18n } = useTranslation();

  // useEffect(() => {
  //   if (i18n.language === "vi") {
  //     document.documentElement.classList.remove("font-[Geist]");
  //     document.body.classList.remove("font-[Geist]");
  //   } else {
  //     document.documentElement.classList.add("font-[Geist]");
  //     document.body.classList.add("font-[Geist]");
  //   }
  // }, [i18n.language]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
