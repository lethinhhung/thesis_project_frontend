import DragHandle from "@tiptap-pro/extension-drag-handle-react";
import { EditorContent, useCurrentEditor } from "@tiptap/react";
import { GripVertical, Plus } from "lucide-react";
import { Button } from "./ui/button";

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
      <Button size={"icon"} variant={"ghost"}>
        <Plus />
      </Button>
      <GripVertical />
    </DragHandle>
  );
};

export default EditorDragHandle;
