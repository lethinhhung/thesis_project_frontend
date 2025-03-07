import { BubbleMenu, useCurrentEditor } from "@tiptap/react";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import {
  Baseline,
  Bold,
  ChevronDown,
  Code,
  Ellipsis,
  Italic,
  Link,
  Radical,
  Strikethrough,
  Underline,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

const BubbleToolbar = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;

  return (
    <BubbleMenu
      className="bg-background flex flex-row items-center gap-1 rounded-md border p-1 shadow-xs"
      editor={editor}
      tippyOptions={{
        maxWidth: "none",
        hideOnClick: false,
        interactive: true,
        appendTo: "parent",
      }}
    >
      <Button
        size={"sm"}
        variant={"ghost"}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold />
      </Button>
      <Button
        size={"sm"}
        variant={"ghost"}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Underline />
      </Button>
      <Button
        size={"sm"}
        variant={"ghost"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic />
      </Button>
      <Button
        size={"sm"}
        variant={"ghost"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough />
      </Button>
      <Button
        size={"sm"}
        variant={"ghost"}
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <Code />
      </Button>
      <Button size={"sm"} variant={"ghost"}>
        <Radical />
      </Button>
      <Button size={"sm"} variant={"ghost"}>
        <Link />
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button size={"sm"} variant={"ghost"}>
            <div className="flex flex-row items-center gap-0">
              <Baseline />
              <ChevronDown />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent>hehe</PopoverContent>
      </Popover>

      <Button size={"sm"} variant={"ghost"}>
        <Ellipsis />
      </Button>
    </BubbleMenu>
  );
};

export default BubbleToolbar;
