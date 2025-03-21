import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

function Account() {
  return (
    <div className="flex flex-col gap-4 items-center mx-auto h-full w-full max-w-3xl rounded-xl">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center p-2 md:p-4 gap-4">
          <Avatar className="w-12 h-12 md:w-18 md:h-18 rounded-full">
            <AvatarImage className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
            <AvatarFallback className="rounded-full">KT</AvatarFallback>
          </Avatar>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            kongtrua
            <p className="text-sm text-muted-foreground">
              thung260803@gmail.com
            </p>
          </h3>
        </div>
        <div className="flex items-center gap-2 p-2 md:p-4">
          <Button size={"icon"} variant={"ghost"}>
            <Edit />
          </Button>
        </div>
      </div>
      <div className="flex p-4 flex-col border border-dashed rounded-xl">
        <p className="text-sm text-muted-foreground">About</p>
        <p className="p-2">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
      </div>
    </div>
  );
}

export default Account;
