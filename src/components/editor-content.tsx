import { EditorContent, useCurrentEditor } from "@tiptap/react";

const Content = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;
  return <EditorContent editor={editor} />;
};

export default Content;
