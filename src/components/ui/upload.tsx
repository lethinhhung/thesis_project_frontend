import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CloudUpload } from "lucide-react";

export function Upload({
  label,
  title,
  description,
  type,
  accept,
}: {
  label?: string;
  title?: string;
  description?: string;
  type: string;
  accept: string;
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center">
            <CloudUpload className="w-12 h-12" />
            <span className="text-sm font-medium text-gray-500">{title}</span>
            <span className="text-xs text-gray-500">{description}</span>
          </div>
          <div className="space-y-2 text-sm">
            <Label htmlFor="file" className="text-sm font-medium">
              {label}
            </Label>
            <Input id="file" type={type} placeholder="File" accept={accept} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
