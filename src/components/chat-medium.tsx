import { Send, Sparkles, User } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function ChatMedium() {
  return (
    <Card className="h-full w-full flex flex-col flex-nowrap gap-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles size={16} />
          Ask AI
        </CardTitle>
        <CardDescription>About this lesson</CardDescription>
      </CardHeader>
      <CardContent className="h-full w-full overflow-x-auto flex flex-col gap-2 py-2 space-y-2">
        <div className="w-full pl-6 flex justify-end">
          <div className="flex flex-col space-y-2 items-end flex-wrap bg-background word-break break-all border border-dashed p-2 rounded-lg">
            <div>What is the capital of France and US?</div>
            <User size={12} />
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex flex-wrap word-break break-all">
            The capital of France is Paris and the capital of US is Washington
            D.C.
          </div>
        </div>
        <div className="w-full pl-6 flex justify-end">
          <div className="flex flex-col space-y-2 items-end flex-wrap bg-background word-break break-all border border-dashed p-2 rounded-lg">
            <div>What is the capital of France and US?</div>
            <User size={12} />
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex flex-wrap word-break break-all">
            The capital of France is Paris and the capital of US is Washington
            D.C.
          </div>
        </div>
        <div className="w-full pl-6 flex justify-end">
          <div className="flex flex-col space-y-2 items-end flex-wrap bg-background word-break break-all border border-dashed p-2 rounded-lg">
            <div>What is the capital of France and US?</div>
            <User size={12} />
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex flex-wrap word-break break-all">
            The capital of France is Paris and the capital of US is Washington
            D.C.
          </div>
        </div>
        <div className="w-full pl-6 flex justify-end">
          <div className="flex flex-col space-y-2 items-end flex-wrap bg-background word-break break-all border border-dashed p-2 rounded-lg">
            <div>What is the capital of France and US?</div>
            <User size={12} />
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex flex-wrap word-break break-all">
            The capital of France is Paris and the capital of US is Washington
            D.C.
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Input />
        <Button size={"icon"}>
          <Send />
        </Button>
      </CardFooter>
    </Card>
  );
}
export default ChatMedium;
