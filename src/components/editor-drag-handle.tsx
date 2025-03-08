import DragHandle from "@tiptap-pro/extension-drag-handle-react";
import { EditorContent, useCurrentEditor } from "@tiptap/react";
import { GripVertical, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const EditorDragHandle = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;

  return (
    <DragHandle
      className="items-center justify-center hidden md:flex"
      editor={editor}
      tippyOptions={{
        placement: "left",
      }}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button size={"icon"} variant={"ghost"}>
            <Plus />
          </Button>
        </PopoverTrigger>
        <PopoverContent>wdadwa</PopoverContent>
      </Popover>

      <GripVertical />
    </DragHandle>
  );
};

export default EditorDragHandle;
