import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Button onClick={() => navigate("/home")}>Go to home</Button>
    </div>
  );
}

export default Landing;
