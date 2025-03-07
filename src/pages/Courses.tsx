import Editor from "@/components/editor";

function Courses() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className="w-full max-w-[1000px] font-inherit" spellCheck="false">
        <Editor />
      </div>
    </div>
  );
}

export default Courses;
