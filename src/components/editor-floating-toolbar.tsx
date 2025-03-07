import { FloatingMenu, useCurrentEditor } from "@tiptap/react";

const FloatingToolbar = () => {
  const editor = useCurrentEditor();
  if (!editor) return null;

  return (
    <FloatingMenu editor={null} tippyOptions={{ duration: 100 }}>
      <div className="bg-white shadow-lg border rounded-md p-2">
        <button
          className="px-2 py-1 text-sm hover:bg-gray-100"
          onClick={() => editor.editor?.chain().focus().toggleBold().run()}
        >
          Bold
        </button>
        <button
          className="px-2 py-1 text-sm hover:bg-gray-100"
          onClick={() => editor.editor?.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>
      </div>
    </FloatingMenu>
  );
};

export default FloatingToolbar;
