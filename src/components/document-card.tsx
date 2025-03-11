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
import { Trash } from "lucide-react";

interface Document {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  date: string;
}

export function DocumentCard({ document }: { document: Document }) {
  return (
    <Card onClick={() => console.log("Clicked")}>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
        <CardDescription>{document.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="w-full h-full bg-secondary p-2 rounded-lg">
            This is the short summary of this document, about 2-3 lines long.
          </div>
          <div className="flex flex-nowrap gap-2 overflow-hidden py-2">
            {document.tags.map((tag, index) => (
              <Badge variant={"outline"} key={index}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex h-full w-full justify-end">
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
        </div>
      </CardFooter>
    </Card>
  );
}
