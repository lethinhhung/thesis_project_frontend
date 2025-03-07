import { EditorContent, EditorProvider } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Underline } from "@tiptap/extension-underline";
import { Highlight } from "@tiptap/extension-highlight";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import BubbleToolbar from "./editor-bubble-toolbar";
import EditorDragHandle from "./editor-drag-handle";
import Content from "./editor-content";

const extensions = [
  StarterKit,
  Placeholder.configure({
    placeholder: "Viết nội dung ở đây...",
  }),
  Highlight,
  Underline,
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableCell,
  TableHeader,
];

const Editor = () => {
  const content = "<p>Chào mừng bạn đến với  Editor!</p>";

  return (
    <EditorProvider extensions={extensions} content={content}>
      <BubbleToolbar />
      <EditorDragHandle />
      <Content />
    </EditorProvider>
  );
};

export default Editor;
