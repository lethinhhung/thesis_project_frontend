import { PencilLine, Settings } from "lucide-react";
import SortButton from "./sort-button";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

function CourseTestsProjects() {
  return (
    <div className="w-full flex p-2 md:p-4 flex-col gap-4">
      <div className="w-full flex justify-between items-center sticky top-16">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Tests & Projects
        </h4>
        <div className="flex gap-2 items-center">
          <SortButton variant={"secondary"} />

          <Button>new</Button>
        </div>
      </div>
      <div className="w-full flex grid grid-cols-1 sm:px-2 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex flex-row items-center justify-between">
              <CardTitle>Tests</CardTitle>
              <Button size={"sm"} variant={"ghost"}>
                <Settings />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card>
              <div className="flex flex-row items-center justify-between">
                <CardHeader>
                  <CardTitle>Essay</CardTitle>
                  <CardDescription>1/1/2021</CardDescription>
                </CardHeader>
                <div className="pr-6">
                  <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                    10
                  </h2>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex flex-row items-center justify-between">
                <CardHeader>
                  <CardTitle>Mid-term</CardTitle>
                  <CardDescription>1/1/2021</CardDescription>
                </CardHeader>
                <div className="pr-6">
                  <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                    10
                  </h2>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex flex-row items-center justify-between">
                <CardHeader>
                  <CardTitle>End-term</CardTitle>
                  <CardDescription>1/1/2021</CardDescription>
                </CardHeader>
                <div className="pr-6">
                  <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                    10
                  </h2>
                </div>
              </div>
            </Card>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex flex-row items-center justify-between">
              <CardTitle>Projects</CardTitle>
              <Button size={"sm"} variant={"ghost"}>
                <Settings />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4"></CardContent>
        </Card>
      </div>
    </div>
  );
}
export default CourseTestsProjects;
