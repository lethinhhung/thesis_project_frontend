import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50">
      <Button className="m-5" onClick={handleLogin}>
        <LogIn />
        {t("login")}
      </Button>
    </div>
  );
}

export default Home;
