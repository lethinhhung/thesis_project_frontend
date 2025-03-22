import { useIsMobile } from "@/hooks/use-mobile";
import "@blocknote/core/fonts/inter.css";
import {
  BlockNoteView,
  darkDefaultTheme,
  lightDefaultTheme,
} from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import {
  getDefaultReactSlashMenuItems,
  GridSuggestionMenuController,
  SuggestionMenuController,
  useCreateBlockNote,
} from "@blocknote/react";
import { Divider } from "./blocks/divider";
import {
  BlockNoteSchema,
  defaultBlockSpecs,
  filterSuggestionItems,
  insertOrUpdateBlock,
} from "@blocknote/core";
import { SquareSplitVertical } from "lucide-react";
import CustomEmojiPicker from "./blocks/emoji";
import { useEffect } from "react";

const plainTheme = {
  light: lightDefaultTheme,
  dark: {
    ...darkDefaultTheme,
    colors: {
      editor: {
        background: "oklch(0.145 0 0)",
        text: "#cfcfcf",
      },
    },
  },
};

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    divider: Divider,
  },
});

const insertDivider = (editor: typeof schema.BlockNoteEditor) => ({
  title: "Divider",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "divider",
    });
  },
  aliases: ["divider", "hr", "line", "separator", "rule", "thematic break"],
  group: "More",
  icon: <SquareSplitVertical />,
});

const Editor = ({
  isPlainBackground,
  isDarkTheme,
}: {
  isPlainBackground: boolean;
  isDarkTheme: boolean;
}) => {
  const editor = useCreateBlockNote({
    schema,
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
    ],
  });
  const isMobile = useIsMobile();

  // Xác định theme của editor
  const editorTheme =
    isPlainBackground && isDarkTheme
      ? plainTheme.dark
      : isPlainBackground
      ? plainTheme.light
      : isDarkTheme
      ? "dark"
      : "light";
  async function loadInitialHTML() {
    const content = await localStorage.getItem("content");
    if (!content) return;
    const blocks = await editor.tryParseHTMLToBlocks(content);
    editor.replaceBlocks(editor.document, blocks);
  }

  async function saveContent() {
    const html = await editor.blocksToFullHTML(editor.document);
    console.log(html);
    localStorage.setItem("content", html);
  }
  useEffect(() => {
    loadInitialHTML();
  }, [editor]);

  return (
    <BlockNoteView
      onChange={saveContent}
      editor={editor}
      theme={editorTheme}
      slashMenu={false}
      emojiPicker={false}
    >
      <SuggestionMenuController
        triggerCharacter={"/"}
        getItems={async (query) =>
          // Gets all default slash menu items and `insertAlert` item.
          filterSuggestionItems(
            [...getDefaultReactSlashMenuItems(editor), insertDivider(editor)],
            query
          )
        }
      />
      <GridSuggestionMenuController
        triggerCharacter={":"}
        gridSuggestionMenuComponent={CustomEmojiPicker}
        columns={isMobile ? 6 : 10}
        minQueryLength={2}
      />
    </BlockNoteView>
  );
};

export default Editor;
