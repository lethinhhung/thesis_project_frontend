import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        english: "English",
        vietnamese: "Vietnamese",
        languages: "Languages",

        // Login page
        welcome: "Welcome back",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        system: "System",
        login_to: "Login to your Notebok account",
        password: "Password",
        forgot_password: "Forgot your password?",
        login: "Login",
        or_continue_with: "Or continue with",
        dont_have_account: "Don't have an account?",
        sign_up: "Sign up",

        // Register page
        create_account: "Create an account",
        join_study: "Join Notebok today",
        username: "Username",
        confirm_password: "Confirm Password",
        use_strong_password: "Use strong password.",
        your_unique_display_name: "Your unique display name.",
        re_enter_password: "Re-enter your password.",
        back: "Back",
        submit: "Submit",

        //Register form
        username_required: "Username must be at least 2 characters.",
        username_contain:
          "Username can only contain letters, numbers, and underscores.",
        email_required: "Invalid email address.",
        password_required: "Password must be at least 8 characters.",
        password_contain:
          "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.",
        confirm_password_required:
          "Confirm Password must be the same as Password.",
        password_not_match: "Passwords do not match.",
        already_have_account: "Already have an account?",
        sign_in: "Sign in",
      },
    },
    vi: {
      translation: {
        english: "Tiếng Anh",
        vietnamese: "Tiếng Việt",
        languages: "Ngôn ngữ",

        // Login page
        welcome: "Chào mừng trở lại",
        darkMode: "Chế độ tối",
        lightMode: "Chế độ sáng",
        system: "Hệ thống",
        login_to: "Đăng nhập vào tài khoản Notebok của bạn",
        password: "Mật khẩu",
        forgot_password: "Quên mật khẩu?",
        login: "Đăng nhập",
        or_continue_with: "Hoặc tiếp tục với",
        dont_have_account: "Chưa có tài khoản?",
        sign_up: "Đăng ký",

        // Register page
        create_account: "Tạo tài khoản",
        join_study: "Tham gia Notebok ngay hôm nay",
        username: "Tên người dùng",
        confirm_password: "Xác nhận mật khẩu",
        use_strong_password: "Sử dụng mật khẩu mạnh.",
        your_unique_display_name: "Tên hiển thị duy nhất của bạn.",
        re_enter_password: "Nhập lại mật khẩu của bạn.",
        back: "Quay lại",
        submit: "Gửi",

        // Register form
        username_required: "Tên người dùng phải có ít nhất 2 ký tự.",
        username_contain:
          "Tên người dùng chỉ có thể chứa các chữ cái, số và dấu gạch dưới",
        email_required: "Địa chỉ email không hợp lệ.",
        password_required: "Mật khẩu phải có ít nhất 8 ký tự.",
        password_contain:
          "Mật khẩu phải chứa ít nhất một chữ cái viết thường, một chữ cái viết hoa, một số và một ký tự đặc biệt.",
        confirm_password_required: "Phải giống với Mật khẩu trước đó.",
        password_not_match: "Mật khẩu không khớp.",
        already_have_account: "Đã có tài khoản?",
        sign_in: "Đăng nhập",
      },
    },
  },
  lng: localStorage.getItem("language") || "vi",
  fallbackLng: "vi",
  interpolation: { escapeValue: false },
});

export default i18n;
