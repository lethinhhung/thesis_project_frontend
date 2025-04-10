import { Skeleton } from "./ui/skeleton";

function LoadingPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
