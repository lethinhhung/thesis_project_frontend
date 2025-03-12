import {
  PaginationNextNoTitle,
  PaginationPreviousNoTitle,
} from "@/components/custom-ui/pagination";
import { DocumentCard } from "@/components/document-card";
import DocumentPreview from "@/components/document-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CalendarClock,
  Download,
  Search,
  SortAsc,
  Sparkle,
  Sparkles,
  Tag,
  Trash,
} from "lucide-react";

const documents = [
  {
    id: "1",
    title: "JavaScript Basics",
    description:
      "This document provides a fundamental introduction to JavaScript, covering basic syntax, data types, loops, functions, and event handling. It is designed for beginners who want to understand how JavaScript works in the web development ecosystem.",
    summary:
      "Introduction to JavaScript covering syntax, data types, loops, and event handling.",
    tags: ["JavaScript", "Programming", "Beginner"],
    type: "pdf",
    date: "2023-06-10",
  },
  {
    id: "2",
    title: "React Guide",
    description:
      "A comprehensive guide to React framework, explaining core concepts such as components, props, state management, hooks, and best practices. This document is suitable for both beginners and experienced developers looking to build modern web applications with React.",
    summary:
      "Comprehensive guide to React, covering components, state, and best practices.",
    tags: ["React", "Frontend", "Web Development"],
    type: "docx",
    date: "2023-07-15",
  },
  {
    id: "3",
    title: "Node.js for Backend",
    description:
      "An in-depth resource on Node.js for backend development, including server-side programming, asynchronous operations, Express.js, database interactions, and REST API development. Ideal for developers seeking to build scalable web applications.",
    summary:
      "Guide to Node.js for backend development, covering Express.js and REST APIs.",
    tags: ["Node.js", "Backend", "API"],
    type: "pdf",
    date: "2023-08-20",
  },
  {
    id: "4",
    title: "MongoDB Essentials",
    description:
      "This document provides an essential overview of MongoDB, a NoSQL database. It covers data modeling, CRUD operations, indexing, and best practices for handling large-scale data efficiently.",
    summary:
      "Essential guide to MongoDB, including data modeling and CRUD operations.",
    tags: ["MongoDB", "Database", "NoSQL"],
    type: "epub",
    date: "2023-09-05",
  },
  {
    id: "5",
    title: "CSS Grid & Flexbox",
    description:
      "A complete reference to CSS layout techniques, focusing on Grid and Flexbox. It explains how to create responsive designs, align elements efficiently, and implement modern UI structures.",
    summary:
      "Mastering CSS Grid and Flexbox for responsive layouts and modern UI design.",
    tags: ["CSS", "Web Design", "Frontend"],
    type: "pdf",
    date: "2023-10-01",
  },
  {
    id: "6",
    title: "Software Engineering Principles",
    description:
      "An extensive discussion on software engineering principles, covering software design patterns, clean coding practices, testing methodologies, and agile development workflows.",
    summary:
      "Discussion on software engineering principles, design patterns, and best practices.",
    tags: ["Software Engineering", "Development", "Best Practices"],
    type: "docx",
    date: "2023-11-12",
  },
  {
    id: "7",
    title: "Machine Learning Basics",
    description:
      "An introductory guide to machine learning concepts, including supervised and unsupervised learning, neural networks, feature engineering, and model evaluation techniques.",
    summary:
      "Introduction to machine learning concepts, including supervised learning and neural networks.",
    tags: ["Machine Learning", "AI", "Data Science"],
    type: "pdf",
    date: "2023-12-08",
  },
  {
    id: "8",
    title: "Python for Data Science",
    description:
      "A practical guide to using Python for data science, featuring NumPy, Pandas, Matplotlib, and Scikit-Learn for data manipulation, visualization, and machine learning tasks.",
    summary:
      "Using Python for data science with libraries like Pandas and Scikit-Learn.",
    tags: ["Python", "Data Science", "Pandas"],
    type: "epub",
    date: "2024-01-20",
  },
  {
    id: "9",
    title: "System Design Interview Guide",
    description:
      "A strategic resource for system design interviews, covering scalable architectures, microservices, caching strategies, database sharding, and real-world case studies.",
    summary:
      "Guide to system design interviews, including scalability and microservices.",
    tags: ["System Design", "Interviews", "Architecture"],
    type: "pdf",
    date: "2024-02-14",
  },
  {
    id: "10",
    title: "Blockchain Fundamentals",
    description:
      "An overview of blockchain technology, including consensus mechanisms, smart contracts, cryptographic principles, and decentralized applications.",
    summary:
      "Introduction to blockchain, covering smart contracts and decentralization.",
    tags: ["Blockchain", "Cryptocurrency", "Decentralization"],
    type: "pdf",
    date: "2024-03-10",
  },
];

function Library() {
  return (
    <div className="w-full h-[calc(100vh-92px)] rounded-xl">
      <div className="w-full h-full rounded-xl columns-1 lg:columns-2">
        <div className="h-full w-full rounded-xl">
          <ScrollArea className="h-full w-full rounded-xl">
            <div className="w-full sticky top-0 left-0 z-10 flex flex-wrap flex-col gap-2 items-center p-2 rounded-xl border border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex flex-row flex-wrap gap-2 p-2 w-full">
                <Input className="flex-1" placeholder="Search documents" />

                <TooltipProvider>
                  <DropdownMenu>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                          <Button size={"icon"} variant={"outline"}>
                            <SortAsc />
                          </Button>
                        </DropdownMenuTrigger>
                      </TooltipTrigger>
                      <TooltipContent side="top">Sorting</TooltipContent>
                    </Tooltip>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        Title
                        <DropdownMenuShortcut>
                          <Tag />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Date
                        <DropdownMenuShortcut>
                          <CalendarClock />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipProvider>
                <Button size={"icon"}>
                  <Search />
                </Button>
              </div>

              <div className="w-full overflow-x-auto whitespace-nowrap scrollbar">
                <div className="inline-flex flex-wrap gap-2">
                  <Badge className="cursor-pointer">All</Badge>
                  <Badge className="cursor-pointer" variant={"secondary"}>
                    Programming
                  </Badge>
                  <Badge className="cursor-pointer" variant={"secondary"}>
                    Math
                  </Badge>
                  <Badge className="cursor-pointer" variant={"secondary"}>
                    English
                  </Badge>
                  <Badge className="cursor-pointer" variant={"secondary"}>
                    React
                  </Badge>
                  <Badge className="cursor-pointer" variant={"secondary"}>
                    Web development
                  </Badge>
                  <Badge className="cursor-pointer" variant={"secondary"}>
                    Frontend
                  </Badge>
                  <Badge className="cursor-pointer" variant={"secondary"}>
                    Node.js
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex h-full py-2 w-full grid grid-cols-1 xl:grid-cols-2 gap-4 px-3">
              {documents.map((document) => (
                <DocumentCard key={document.id} document={document} />
              ))}
            </div>

            <Pagination className="w-full sticky bottom-0 left-0 z-10 rounded-xl border border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPreviousNoTitle href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNextNoTitle href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </ScrollArea>
        </div>

        <DocumentPreview document={documents[0]} />
      </div>
    </div>
  );
}

export default Library;
