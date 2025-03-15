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
import { CheckCircle2, Download, Trash } from "lucide-react";
import { Document } from "@/interfaces/document";
import { useState } from "react";
import { set } from "react-hook-form";

export function DocumentCard({
  document,
  onClick,
}: {
  document: Document;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <Card
      onClick={onClick}
      className={
        "duration-200 border-dashed hover:shadow-lg dark:hover:border-solid cursor-pointer "
      }
    >
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-1 line=clamp-1">
            {document.title}

            {document.status && <CheckCircle2 size={"1rem"} />}
          </div>
        </CardTitle>
        <CardDescription className="line-clamp-3 min-h-[4rem]">
          {document.summary}
        </CardDescription>
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
            }}
          >
            <Trash />
          </Button>
          <Button
            size={"icon"}
            onClick={(event) => {
              event.stopPropagation(); // Ngăn chặn sự kiện click lan lên card
            }}
          >
            <Download />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
