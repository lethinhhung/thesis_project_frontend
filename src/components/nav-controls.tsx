"use client";

import LanguageSwitcher from "./language-switcher";
import { DarkModeSwitcher } from "./dark-mode-switcher";

export function NavControls() {
  return (
    <div className="w-full h-full flex gap-1 items-center">
      <DarkModeSwitcher variant={"ghost"} />

      <LanguageSwitcher variant={"ghost"} />
    </div>
  );
}
