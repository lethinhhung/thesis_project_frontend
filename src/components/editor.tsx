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
  const editor = useCreateBlockNote({ schema });
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

  return (
    <BlockNoteView
      editor={editor}
      theme={editorTheme}
      sideMenu={!isMobile}
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
