import { LucideIcon } from "lucide-react";
import { PopoverTrigger } from "./ui/popover";

const CustomPopoverTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <PopoverTrigger className="focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none">
      {children}
    </PopoverTrigger>
  );
};

export default CustomPopoverTrigger;
