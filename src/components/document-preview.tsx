import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Sparkles, Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Document {
  id: string;
  title: string;
  description: string;
  summary: string;
  tags: string[];
  date: string;
}

function DocumentPreview({ document }: { document: Document }) {
  return (
    <div className="w-full h-full relative hidden lg:flex">
      <ScrollArea className="h-full w-full rounded-xl">
        <Card className="w-full sticky top-0 left-0 z-10 rounded-xl border border-dashed shadow-none bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <CardHeader>
            <CardTitle>{document.title}</CardTitle>
            <CardDescription>{document.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap ">
              {document.tags.map((tag) => (
                <Badge key={tag} variant={"secondary"}>
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full flex gap-2 justify-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size={"icon"} variant={"outline"}>
                      <Sparkles />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Ask AI</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size={"icon"} variant={"destructive"}>
                      <Trash />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Delete</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size={"icon"}>
                      <Download />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Download</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardFooter>
        </Card>
        <div className="flex flex-col py-2 gap-2 h-full w-full rounded-xl">
          <Card className="w-full bg-background rounded-xl border border-dashed shadow-none">
            <CardContent>{document.description}</CardContent>
            <CardFooter>
              <div className="w-full flex justify-end">
                <Button variant={"secondary"}>
                  <Sparkles />
                  <span>Re-summerize</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="w-full h-150 bg-background rounded-xl border border-dashed shadow-none">
            <CardContent className="h-full">
              <img
                alt="Document preview"
                src="/placeholder.svg"
                className="inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}

export default DocumentPreview;
