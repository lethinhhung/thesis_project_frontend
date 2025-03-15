import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Trash } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DocumentPreview from "./document-preview";

interface Document {
  id: string;
  title: string;
  description: string;
  summary: string;
  tags: string[];
  date: string;
  status: boolean;
}

function DocumentPreviewMobile({ document }: { document: Document }) {
  return (
    <Drawer>
      <DrawerTrigger
        onClick={(e) => {
          e.currentTarget.blur();
        }}
      >
        Open
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex justify-between w-full">
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-1">
                  {document.title}{" "}
                  {document.status && <CheckCircle2 size={"1rem"} />}
                </div>
                <Button size={"sm"} variant={"ghost"}></Button>
              </div>
            </DrawerTitle>
            <DrawerDescription>{document.date}</DrawerDescription>
            <div className="flex gap-2 flex-nowrap">
              {document.tags.map((tag) => (
                <Badge key={tag} variant={"secondary"}>
                  {tag}
                </Badge>
              ))}
            </div>
          </DrawerHeader>
          <div className="p-4">
            <Button size={"icon"} variant={"destructive"}>
              <Trash />
            </Button>
          </div>
        </div>
        <div className="flex p-2 justify-center overflow-y-auto h-full w-full">
          <div className="max-w-xl">
            <DocumentPreview document={document} />
          </div>
        </div>
        <DrawerFooter>
          <Button>Download</Button>

          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DocumentPreviewMobile;
