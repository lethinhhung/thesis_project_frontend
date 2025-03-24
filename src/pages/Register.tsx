import LanguageSwitcher from "@/components/language-switcher";
import { RegisterForm } from "@/components/register-form";

function Register() {
  return (
    <>
      <RegisterForm />
      <LanguageSwitcher className="absolute bottom-4 right-4" />
    </>
  );
}

export default Register;
