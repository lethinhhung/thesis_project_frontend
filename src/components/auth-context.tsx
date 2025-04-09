import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "@/utils/axios.custiomize";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "@/utils/auth.api";
import { getProfileAPI } from "@/utils/users.api";
import { toast } from "sonner";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  checkAuth: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Kiểm tra token hợp lệ và lấy thông tin user
  const checkAuth = async (): Promise<boolean> => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      setUser(null);
      return false;
    }

    try {
      // Gọi API để kiểm tra token và lấy thông tin user
      const response = await getProfileAPI();
      console.log("Profile response:", response);
      if (response.status === 200) {
        const userData = response.data.data;
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return true;
      } else {
        setUser(null);
        return false;
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
      return false;
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);

      // Thử lấy user từ local storage trước
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

      // Kiểm tra token hợp lệ
      await checkAuth();
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      const response = await loginAPI(username, password);

      if (response.data?.success) {
        const { id, username, email, accessToken } = response.data.data;

        // Lưu access token và thông tin user
        localStorage.setItem("access_token", accessToken);

        const userData = { id, username, email };
        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);
        navigate("/home");
      } else {
        const response = await loginAPI(username, password);
        console.log(response);
        if (response) {
          if (response.status == 401 || response.status == 404) {
            if (response.data.error.code == "INVALID_CREDENTIALS") {
              toast.error("Invalid credentials", {
                description: "Please check your username and password",
              });
            } else if (response.status == 404) {
              toast.error("User not found", {
                description: "Please check your username",
              });
            }
          } else if (response.status == 200) {
            toast.success("Login successful", {
              description: "Welcome back!",
            });
            localStorage.setItem("access_token", response.data.access_token);
            navigate("/home");
          } else {
            toast.error("Login failed", {
              description: "Please try again later",
            });
          }
        }
      }
    } catch (error) {
      console.error("Login API call failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/auth/logout");
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      // Luôn xóa dữ liệu local ngay cả khi API thất bại
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
