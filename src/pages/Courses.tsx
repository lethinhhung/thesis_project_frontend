import SearchBarWithTags from "@/components/search-bar-with-tags";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

function Courses() {
  return (
    <div className="flex flex-col items-center w-full space-y-6">
      <SearchBarWithTags
        className="max-w-3xl top-18"
        placeholder="Search for courses or lessons"
      />
      <div className="grid grid-cols-12 space-y-8 w-full h-full max-w-7xl">
        <div className="col-span-12 grid grid-cols-12 gap-2">
          <div className="col-span-12 flex justify-between items-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Recent lessons
            </h4>
          </div>
          <Card className="col-span-12 md:col-span-6 xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>

          <Card className="col-span-12 md:col-span-6 xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>

          <Card className="col-span-12 md:col-span-6 xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-2">
          <div className="col-span-12 flex justify-between items-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              On progress courses
            </h4>
            <Button variant={"ghost"}>
              View all
              <ArrowRight />
            </Button>
          </div>
          <Card className="col-span-12 md:col-span-6 xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card className="col-span-12 md:col-span-6 xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card className="col-span-12 md:col-span-6 xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card className="col-span-12 md:col-span-6 xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-2">
          <div className="col-span-12 flex justify-between items-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Completed courses
            </h4>
            <Button variant={"ghost"}>
              View all
              <ArrowRight />
            </Button>
          </div>
          <Card className="col-span-12 md:col-span-6 xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Courses;
