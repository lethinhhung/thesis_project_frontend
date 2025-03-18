import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CalendarClock, Search, SortAsc, Tag } from "lucide-react";

function SearchBarWithTags({
  className,
  placeholder,
}: {
  className?: string;
  placeholder?: string;
}) {
  return (
    <div
      className={cn(
        "w-full h-full sticky top-0 left-0 z-10 flex flex-wrap flex-col gap-2 items-center p-2 rounded-xl border border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="flex flex-row flex-wrap gap-2 p-2 w-full">
        <Input className="flex-1" placeholder={placeholder} />

        <TooltipProvider>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button size={"icon"} variant={"outline"}>
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

      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar">
        <div className="inline-flex flex-wrap gap-2">
          <Badge className="cursor-pointer">All (30)</Badge>
          <Badge className="cursor-pointer" variant={"secondary"}>
            Programming (10)
          </Badge>
          <Badge className="cursor-pointer" variant={"secondary"}>
            Math (5)
          </Badge>
          <Badge className="cursor-pointer" variant={"secondary"}>
            English (2)
          </Badge>
          <Badge className="cursor-pointer" variant={"secondary"}>
            React (3)
          </Badge>
          <Badge className="cursor-pointer" variant={"secondary"}>
            Web development (5)
          </Badge>
          <Badge className="cursor-pointer" variant={"secondary"}>
            Frontend (5)
          </Badge>
          <Badge className="cursor-pointer" variant={"secondary"}>
            Node.js (5)
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default SearchBarWithTags;
