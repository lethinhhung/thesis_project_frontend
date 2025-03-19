import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Image, Settings } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Document } from "@/interfaces/document";
import { DocumentCard } from "@/components/document-card";
import { useState } from "react";
import DocumentPreviewMobile from "@/components/document-preview-mobile";
import { LessonCardLarge } from "@/components/lesson-card-large";
import { Lesson } from "@/interfaces/lesson";

const badges = [
  { title: "Math" },
  { title: "Physics" },
  { title: "Chemistry" },
  { title: "Biology" },
  { title: "Computer Science" },
];

const lessons: Lesson[] = [
  {
    id: "lesson-001",
    title: "Introduction to JavaScript",
    description:
      "Learn the basics of JavaScript, including syntax, variables, and data types.",
    date: "2025-03-10",
  },
  {
    id: "lesson-002",
    title: "React Components and Props",
    description:
      "Understand how to build reusable components and pass data using props in React.",
    date: "2025-03-12",
  },
  {
    id: "lesson-003",
    title: "Data Structures: Arrays and Linked Lists",
    description:
      "Explore the fundamentals of arrays and linked lists, their operations, and use cases.",
    date: "2025-03-15",
  },
  {
    id: "lesson-004",
    title: "Introduction to Python for Data Analysis",
    description:
      "Learn how to use Python for data analysis with Pandas and NumPy.",
    date: "2025-03-18",
  },
  {
    id: "lesson-005",
    title: "Building RESTful APIs with Node.js",
    description:
      "Discover how to create RESTful APIs using Node.js and Express.",
    date: "2025-03-20",
  },
];

const documents: Document[] = [
  {
    id: "1",
    title: "JavaScript Basics",
    description:
      "This document provides a fundamental introduction to JavaScript, covering basic syntax, data types, loops, functions, and event handling. It is designed for beginners who want to understand how JavaScript works in the web development ecosystem.",
    summary:
      "Introduction to JavaScript covering syntax, data types, loops, and event handling. Introduction to JavaScript covering syntax, data types, loops, and event handling. Introduction to JavaScript covering syntax, data types, loops, and event handling. Introduction to JavaScript covering syntax, data types, loops, and event handling.",
    tags: ["JavaScript", "Programming", "Beginner"],
    date: "2023-06-10",
    status: true,
  },
  {
    id: "2",
    title: "React Guide",
    description:
      "A comprehensive guide to React framework, explaining core concepts such as components, props, state management, hooks, and best practices. This document is suitable for both beginners and experienced developers looking to build modern web applications with React.",
    summary:
      "Comprehensive guide to React, covering components, state, and best practices.",
    tags: ["React", "Frontend", "Web Development"],
    date: "2023-07-15",
    status: true,
  },
  {
    id: "3",
    title: "Node.js for Backend",
    description:
      "An in-depth resource on Node.js for backend development, including server-side programming, asynchronous operations, Express.js, database interactions, and REST API development. Ideal for developers seeking to build scalable web applications.",
    summary:
      "Guide to Node.js for backend development, covering Express.js and REST APIs.",
    tags: ["Node.js", "Backend", "API"],
    date: "2023-08-20",
    status: false,
  },
  {
    id: "4",
    title: "MongoDB Essentials",
    description:
      "This document provides an essential overview of MongoDB, a NoSQL database. It covers data modeling, CRUD operations, indexing, and best practices for handling large-scale data efficiently.",
    summary:
      "Essential guide to MongoDB, including data modeling and CRUD operations.",
    tags: ["MongoDB", "Database", "NoSQL"],
    date: "2023-09-05",
    status: true,
  },
];

function Course() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );
  const [openDocumentPreview, setOpenDocumentPreview] = useState(false);

  const handleDocumentSelect = (document: Document) => {
    setSelectedDocument(document);
    setOpenDocumentPreview(true);
  };
  return (
    <div className="flex flex-col items-center mx-auto h-full w-full max-w-7xl rounded-xl">
      <div className="w-full flex p-4 flex-col gap-4 border-b border-dashed">
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleContent
            className={
              "text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            }
          >
            <div className="flex mb-4">
              <img
                src="/placeholder.svg"
                alt="Image"
                className="inset-0 h-[30vh] w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CollapsibleContent>
          <div className="flex justify-between items-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {"Javascript basic" + (isExpanded ? " 💻" : "")}
              <p className="text-sm text-muted-foreground">12/10/2021</p>
            </h3>
            <div className="flex gap-2 items-center">
              <CollapsibleTrigger asChild>
                <Button size={"icon"} variant={"ghost"}>
                  <Image />
                </Button>
              </CollapsibleTrigger>
              <Button size={"icon"} variant={"ghost"}>
                <Settings />
              </Button>
            </div>
          </div>
        </Collapsible>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge
              onClick={() => console.log(badge.title)}
              variant={"secondary"}
              className="cursor-pointer"
              key={badge.title}
            >
              {badge.title}
            </Badge>
          ))}
        </div>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </div>
      <div className="w-full flex p-4 flex-col gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Lessons ({lessons.length})
        </h4>
        <div className="w-full flex grid grid-col-1 md:grid-cols-2 xl:grid-col-3 gap-4">
          {lessons.map((lesson) => (
            <LessonCardLarge
              key={lesson.id}
              lesson={lesson}
              className="col-span-1"
            />
          ))}
        </div>
      </div>
      <div className="w-full flex p-4 flex-col gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Documents ({documents.length})
        </h4>
        <DocumentPreviewMobile
          open={openDocumentPreview}
          onOpenChange={setOpenDocumentPreview}
          document={selectedDocument}
          header={false}
        />

        <div className="w-full flex grid grid-col-1 md:grid-cols-2 xl:grid-col-3 gap-4">
          {documents.map((document) => (
            <DocumentCard
              className="col-span-1"
              key={document.id}
              document={document}
              onClick={() => {
                handleDocumentSelect(document);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
