"use client";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Home,
  Briefcase,
  Sparkles,
  LayoutDashboard,
  LibraryBig,
  Book,
  Inbox,
  Plus,
  Library,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "./language-switcher";
import { DarkModeSwitcher } from "./dark-mode-switcher";

const navigattionItems = [
  { title: "Home", url: "/home", icon: Home },
  { title: "Courses", url: "/courses", icon: Briefcase },
  { title: "Pages", url: "/pages", icon: Book },
  { title: "Chat", url: "/chat", icon: Sparkles },
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Library", url: "/library", icon: LibraryBig },
  { title: "Account", url: "/account", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Inbox", url: "/inbox", icon: Inbox },
];

const actionsItems = [
  {
    title: "New course",
    url: "/new-course",
    icon: Briefcase,
    action: <Plus />,
  },
  { title: "New page", url: "/new-page", icon: Book, action: <Plus /> },
  {
    title: "New document",
    url: "/new-document",
    icon: Library,
    action: <Plus />,
  },
];

export default function SearchBarDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen, open]);

  const navigate = useNavigate();

  const handleClick = (url: string) => {
    setOpen(false);
    navigate(url);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search for everything..." />
      <CommandList className="scrollbar">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Courses">
          <CommandItem>
            <Calendar />
            <span>React</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Node.js</span>
          </CommandItem>
          <CommandItem>
            <Calculator />
            <span>AI</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Documents">
          <CommandItem>
            <User />
            <span>Javascript</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Embedding vectors</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Blockchain</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pages">
          <CommandItem>
            <User />
            <span>Javascript basics</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Chapter 2: Digged in</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Chapter 1: Introduction</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          {actionsItems.map((item) => (
            <CommandItem onSelect={() => handleClick(item.url)} key={item.url}>
              <item.icon />
              <span>{item.title}</span>
              <CommandShortcut>{item.action}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Navigation">
          {navigattionItems.map((item) => (
            <CommandItem onSelect={() => handleClick(item.url)} key={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Controls">
          <CommandItem value="appearance dark light mode">
            <span>Appearance</span>
            <CommandShortcut>
              <DarkModeSwitcher />
            </CommandShortcut>
          </CommandItem>
          <CommandItem value="languages english vietnamese">
            <span>Languagues</span>
            <CommandShortcut>
              <LanguageSwitcher />
            </CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
