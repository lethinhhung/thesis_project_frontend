import LanguageSwitcher from "@/components/language-switcher";
import { LoginForm } from "@/components/login-form";

function Login() {
  return (
    <>
      <LoginForm />
      <LanguageSwitcher className="absolute bottom-4 right-4" />
    </>
  );
}

export default Login;
