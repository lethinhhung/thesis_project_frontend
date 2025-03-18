import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";

function Chat() {
  return (
    <div className="flex flex-col items-center justify-between m-auto w-full h-[calc(100vh-92px)] max-w-5xl rounded-xl">
      <ScrollArea className="flex-1 w-full overflow-y-auto p-4 rounded-2xl">
        <div className="flex justify-end mb-5">
          <div className="border border-dashed p-4 rounded-md border border-dashed">
            What can you do?
          </div>
        </div>
        <div className="flex max-w-full p-4 mb-5 bg-muted/50  rounded-md">
          I can do everything I can do everything I can do everything I can do
          everything I can do everything I can do everything I can do everything
          I can do everythingI can do everythingI can do everythingI can do
          everythingI can do everythingI can do everythingI can do everythingI
          can do everythingI can do everythingI can do everything
        </div>
        <div className="flex max-w-full p-4 mb-5 bg-muted/50  rounded-md">
          I can do everything I can do everything I can do everything I can do
          everything I can do everything I can do everything I can do everything
          I can do everythingI can do everythingI can do everythingI can do
          everythingI can do everythingI can do everythingI can do everythingI
          can do everythingI can do everythingI can do everything
        </div>
        <div className="flex max-w-full p-4 mb-5 bg-muted/50  rounded-md">
          I can do everything I can do everything I can do everything I can do
          everything I can do everything I can do everything I can do everything
          I can do everythingI can do everythingI can do everythingI can do
          everythingI can do everythingI can do everythingI can do everythingI
          can do everythingI can do everythingI can do everything
        </div>
        <div className="flex max-w-full p-4 mb-5 bg-muted/50  rounded-md">
          I can do everything I can do everything I can do everything I can do
          everything I can do everything I can do everything I can do everything
          I can do everythingI can do everythingI can do everythingI can do
          everythingI can do everythingI can do everythingI can do everythingI
          can do everythingI can do everythingI can do everything
        </div>
        <div className="flex max-w-full p-4 mb-5 bg-muted/50  rounded-md">
          I can do everything I can do everything I can do everything I can do
          everything I can do everything I can do everything I can do everything
          I can do everythingI can do everythingI can do everythingI can do
          everythingI can do everythingI can do everythingI can do everythingI
          can do everythingI can do everythingI can do everything
        </div>
        <div className="flex max-w-full p-4 mb-5 bg-muted/50  rounded-md">
          I can do everything I can do everything I can do everything I can do
          everything I can do everything I can do everything I can do everything
          I can do everythingI can do everythingI can do everythingI can do
          everythingI can do everythingI can do everythingI can do everythingI
          can do everythingI can do everythingI can do everything
        </div>
        <div className="flex max-w-full p-4 mb-5 bg-muted/50  rounded-md">
          I can do everything I can do everything I can do everything I can do
          everything I can do everything I can do everything I can do everything
          I can do everythingI can do everythingI can do everythingI can do
          everythingI can do everythingI can do everythingI can do everythingI
          can do everythingI can do everythingI can do everything
        </div>
        <div className="flex max-w-full p-4 mb-5 bg-muted/50  rounded-md">
          I can do everything I can do everything I can do everything I can do
          everything I can do everything I can do everything I can do everything
          I can do everythingI can do everythingI can do everythingI can do
          everythingI can do everythingI can do everythingI can do everythingI
          can do everythingI can do everythingI can do everything
        </div>
      </ScrollArea>

      <div className="relative flex flex-col items-center w-full rounded-2xl p-4 bg-background">
        <Textarea
          spellCheck={false}
          placeholder="Ask anything..."
          className="resize-none max-h-[17rem] border-dashed scrollbar"
        ></Textarea>
        <div className="w-full pt-2 flex justify-end">
          <Button size={"icon"}>
            <ArrowUp />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
