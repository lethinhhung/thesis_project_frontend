import { CourseCard } from "@/components/course-card";
import { LessonCardLarge } from "@/components/lesson-card-large";
import SearchBarWithTags from "@/components/search-bar-with-tags";
import { Button } from "@/components/ui/button";
import { Lesson } from "@/interfaces/lesson";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: "course-001",
    title: "Basic JavaScript Programming",
    summary:
      "This course introduces fundamental JavaScript concepts. This course introduces fundamental JavaScript concepts. This course introduces fundamental JavaScript concepts. This course introduces fundamental JavaScript concepts. This course introduces fundamental JavaScript concepts. This course introduces fundamental JavaScript concepts.",
    description:
      "This course helps you get familiar with concepts such as variables, loops, conditions, and functions in JavaScript.",
    tags: [
      "JavaScript",
      "Programming",
      "Basic",
      "Super super super long long long",
    ],
    type: "online",
    status: true,
    date: "2025-03-13",
    emoji: "💻",
  },
  {
    id: "course-002",
    title: "Web Development with React",
    summary: "A guide to developing web applications with React.",
    description:
      "Learn how to use React to build modern web applications, including state management, components, and hooks.",
    tags: ["React", "Front-end", "JavaScript"],
    type: "online",
    status: true,
    date: "2025-03-10",
    emoji: "⚛️",
  },
  {
    id: "course-003",
    title: "Data Structures and Algorithms",
    summary: "Master essential data structures and common algorithms.",
    description:
      "This course covers linked lists, stacks, queues, trees, graphs, and search and sorting algorithms.",
    tags: ["Computer Science", "Algorithms", "Data"],
    type: "offline",
    status: false,
    date: "2025-02-28",
    emoji: "📊",
  },
  {
    id: "course-004",
    title: "Data Analysis with Python",
    summary: "Learn how to use Python for data analysis and visualization.",
    description:
      "An introduction to Pandas, NumPy, Matplotlib, and other data analysis tools.",
    tags: ["Python", "Data Science", "Analysis"],
    type: "online",
    status: true,
    date: "2025-03-05",
    emoji: "🐍",
  },
  {
    id: "course-005",
    title: "API Development with Node.js",
    summary: "Create RESTful APIs using Node.js and Express.",
    description:
      "This course focuses on building APIs, security, user authentication, and performance optimization.",
    tags: ["Node.js", "Backend", "API"],
    type: "online",
    status: false,
    date: "2025-03-01",
    emoji: "🌐",
  },
  {
    id: "course-006",
    title: "API Development with Node.js",
    summary: "Create RESTful APIs using Node.js and Express.",
    description:
      "This course focuses on building APIs, security, user authentication, and performance optimization.",
    tags: ["Node.js", "Backend", "API"],
    type: "online",
    status: false,
    date: "2025-03-01",
    emoji: "🌐",
  },
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
];

function CoursesCompleted() {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 max-w-6xl w-full">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          className="col-span-12 md:col-span-6 2xl:col-span-4"
          course={course}
        />
      ))}
    </div>
  );
}

export default CoursesCompleted;
