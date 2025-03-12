"use client";

import LanguageSwitcher from "./language-switcher";
import { DarkModeSwitcher } from "./dark-mode-switcher";

export function NavControls() {
  return (
    <div className="w-full h-full flex gap-2 items-center">
      <DarkModeSwitcher />

      <LanguageSwitcher />
    </div>
  );
}
