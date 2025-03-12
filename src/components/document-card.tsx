import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Loader, Trash } from "lucide-react";

interface Document {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  type: string;
  status: boolean;
  date: string;
}

export function DocumentCard({
  document,
  isSelected,
}: {
  document: Document;
  isSelected: boolean;
}) {
  return (
    <Card
      onClick={() => console.log("Clicked")}
      className={
        "duration-200 border-dashed hover:shadow-lg dark:hover:border-solid cursor-pointer " +
        (isSelected && "bg-muted/50")
      }
    >
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-1">
            {document.title}

            {document.status && <CheckCircle2 size={"1rem"} />}
          </div>
        </CardTitle>
        <CardDescription>{document.summary}</CardDescription>
        <CardDescription>{document.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-nowrap gap-2 overflow-hidden">
          {document.tags.map((tag, index) => (
            <Badge variant={"outline"} key={index}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex lg:hidden">
        <div className="flex gap-2 h-full w-full justify-end">
          <Button
            size={"icon"}
            variant={"destructive"}
            onClick={(event) => {
              event.stopPropagation(); // Ngăn chặn sự kiện click lan lên card
              console.log("Button clicked");
            }}
          >
            <Trash />
          </Button>
          <Button
            size={"icon"}
            onClick={(event) => {
              event.stopPropagation(); // Ngăn chặn sự kiện click lan lên card
              console.log("Button clicked");
            }}
          >
            <Download />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
