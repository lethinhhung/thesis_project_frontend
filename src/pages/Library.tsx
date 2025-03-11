import { DocumentCard } from "@/components/document-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Calculator,
  Calendar,
  CalendarClock,
  CreditCard,
  Filter,
  Search,
  Settings,
  Smile,
  SortAsc,
  Tag,
  User,
} from "lucide-react";
import { date } from "zod";

const documents = [
  {
    id: "1",
    title: "Document 1",
    description: "Description 1",
    tags: ["Code", "Code", "Code", "Code", "Code", "Code"],
    type: "pdf",
    date: "2022-01-01",
  },
  {
    id: "2",
    title: "Document 2",
    description: "Description 2",
    tags: ["Code", "Code", "Code", "Code", "Code", "Code"],
    type: "pdf",
    date: "2022-01-01",
  },
  {
    id: "3",
    title: "Document 3",
    description: "Description 3",
    tags: ["Code", "Code", "Code", "Code", "Code", "Code"],
    type: "pdf",
    date: "2022-01-01",
  },
  {
    id: "4",
    title: "Document 4",
    description: "Description 4",
    tags: ["Code", "Code", "Code", "Code", "Code", "Code"],
    type: "pdf",
    date: "2022-01-01",
  },
  {
    id: "5",
    title: "Document 5",
    description: "Description 5",
    tags: ["Code", "Code", "Code", "Code", "Code", "Code"],
    type: "pdf",
    date: "2022-01-01",
  },
  {
    id: "6",
    title: "Document 6",
    description: "Description 6",
    tags: ["Code", "Code", "Code", "Code", "Code", "Code"],
    type: "pdf",
    date: "2022-01-01",
  },
  {
    id: "7",
    title: "Document 7",
    description: "Description 7",
    tags: ["Code", "Code", "Code", "Code", "Code", "Code"],
    type: "pdf",
    date: "2022-01-01",
  },
  {
    id: "8",
    title: "Document 8",
    description: "Description 8",
    tags: ["Code", "Code", "Code", "Code", "Code", "Code"],
    type: "pdf",
    date: "2022-01-01",
  },
  {
    id: "9",
    title: "Document 9",
    description: "Description 9",
    tags: ["Code", "Code", "Code", "Code", "Code", "Code"],
    type: "pdf",
    date: "2022-01-01",
  },
];

function Library() {
  return (
    <div className="w-full h-[calc(100vh-92px)] sm:p-2 bg-muted/50 rounded-xl">
      <div className="sm:columns-2 items-center w-full h-full">
        <div className="h-full w-full relative">
          <div className="w-full absolute z-10 flex flex-col gap-2 items-center p-2 rounded-xl border border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex gap-2 w-full">
              <Input className="w-full" placeholder="Search documents" />
              <TooltipProvider>
                <DropdownMenu>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <Button size={"icon"}>
                          <SortAsc />
                        </Button>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="top">Sorting</TooltipContent>
                  </Tooltip>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      Title
                      <DropdownMenuShortcut>
                        <Tag />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Date
                      <DropdownMenuShortcut>
                        <CalendarClock />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipProvider>
              <Button size={"icon"}>
                <Search />
              </Button>
            </div>

            <div className="flex gap-2 w-full overflow-x-auto py-2 scrollbar">
              <Badge>All</Badge>
              <Badge variant={"secondary"}>Code</Badge>
              <Badge variant={"secondary"}>Math</Badge>
              {/* <Badge variant={"secondary"}>English</Badge>
              <Badge variant={"secondary"}>English</Badge>
              <Badge variant={"secondary"}>English</Badge>
              <Badge variant={"secondary"}>English</Badge>
              <Badge variant={"secondary"}>English</Badge> */}
            </div>
          </div>
          <ScrollArea className="h-full w-full pl-3 pb-3">
            <div className="flex pt-30 h-full w-full grid grid-cols-1 xl:grid-cols-2 gap-4 pr-3">
              {documents.map((document) => (
                <DocumentCard key={document.id} document={document} />
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="hidden sm:flex h-full w-full">Content</div>
      </div>
    </div>
  );
}

export default Library;
