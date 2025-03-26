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
import {
  SquareSplitVertical,
  Quote as QuoteIcon,
  Heading4 as Heading4Icon,
  Code,
  Type,
} from "lucide-react";
import CustomEmojiPicker from "./blocks/emoji";
import { useEffect } from "react";
import { Quote } from "./blocks/quote";
import { Heading4 } from "./blocks/heading4";
import { InlineCode } from "./blocks/inline-code";
import { Muted } from "./blocks/muted";

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
    quote: Quote,
    heading4: Heading4,
    inlinecode: InlineCode,
    muted: Muted,
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
  icon: <SquareSplitVertical size={18} />,
});

const insertQuote = (editor: typeof schema.BlockNoteEditor) => ({
  title: "Quote",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "quote",
    });
  },
  aliases: [
    "quote",
    "blockquote",
    "citation",
    "reference",
    "source",
    "cite",
    "quotation",
    "epigraph",
    "excerpt",
  ],
  group: "More",
  icon: <QuoteIcon size={18} />,
});

const insertHeading4 = (editor: typeof schema.BlockNoteEditor) => ({
  title: "Heading 4",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "heading4",
    });
  },
  aliases: ["heading4", "h4", "subheading", "subheader", "subtitle"],
  group: "More",
  icon: <Heading4Icon size={18} />,
});

const insertInlineCode = (editor: typeof schema.BlockNoteEditor) => ({
  title: "Inline code",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "inlinecode",
    });
  },
  aliases: ["inlinecode", "code", "monospace", "monospaced", "typewriter"],
  group: "More",
  icon: <Code size={18} />,
});

const insertMuted = (editor: typeof schema.BlockNoteEditor) => ({
  title: "Muted text",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "muted",
    });
  },
  aliases: ["muted", "dim", "faded", "subdued", "soft"],
  group: "More",
  icon: <Type size={18} />,
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
  });
  const isMobile = useIsMobile();

  // Xác định theme của editor
  const editorTheme =
    isPlainBackground && isDarkTheme
      ? plainTheme.dark
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
    localStorage.setItem("content", html);
  }
  useEffect(() => {
    loadInitialHTML();
  }, []);

  return (
    <BlockNoteView
      className="w-full col-span-full"
      onChange={saveContent}
      editor={editor}
      theme={editorTheme}
      slashMenu={false}
      emojiPicker={false}
      // onClick={() => console.log(editor.getSelection()?.blocks)}
    >
      <SuggestionMenuController
        triggerCharacter={"/"}
        getItems={async (query) =>
          // Gets all default slash menu items and `insertAlert` item.
          filterSuggestionItems(
            [
              ...getDefaultReactSlashMenuItems(editor),
              insertDivider(editor),
              insertQuote(editor),
              insertHeading4(editor),
              insertInlineCode(editor),
              insertMuted(editor),
            ],
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
