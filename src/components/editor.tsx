import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, lightDefaultTheme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

const plainTheme = {
  light: lightDefaultTheme,
  dark: {
    colors: {
      editor: {
        background: "oklch(0.145 0 0)",
      },
    },
  },
};

const Editor = ({
  isPlainBackground,
  isDarkTheme,
}: {
  isPlainBackground: boolean;
  isDarkTheme: boolean;
}) => {
  const editor = useCreateBlockNote();

  // Xác định theme của editor
  const editorTheme =
    isPlainBackground && isDarkTheme
      ? plainTheme.dark
      : isPlainBackground
      ? plainTheme.light
      : isDarkTheme
      ? "dark"
      : "light";

  return <BlockNoteView editor={editor} theme={editorTheme} />;
};

export default Editor;
