import LanguageSwitcher from "@/components/language-switcher";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="w-full flex min-h-dvh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Outlet />
      </div>
      <LanguageSwitcher size={"icon"} className="absolute bottom-4 right-4" />
    </div>
  );
}
