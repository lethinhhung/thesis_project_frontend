import { PageTransition } from "@/components/page-transition";
import AuthLayout from "@/layouts/AuthLayout";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { ReactNode, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "@/layouts/DefaultLayout";
import Landing from "@/pages/Landing";
import Courses from "@/pages/Courses";
import Pages from "@/pages/Pages";
import Library from "@/pages/Library";
import Chat from "@/pages/Chat";
import Account from "@/pages/Account";
import Settings from "@/pages/Settings";
import Inbox from "@/pages/Inbox";
import Page from "@/pages/Page";
import Calendar from "@/pages/Calendar";
import NotFound from "@/pages/NotFound";
import Course from "@/pages/Course";
import Lesson from "@/pages/Lesson";
import ScrollToTop from "@/utils/scroll-to-top";
import CoursesAll from "@/pages/CoursesAll";
import CoursesSearch from "@/pages/CoursesSearch";
import CoursesCompleted from "@/pages/CoursesCompleted";
import { AuthProvider, useAuth } from "@/components/auth-context";
import LoadingPage from "@/components/loading-page";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, loading, checkAuth } = useAuth();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const verify = async () => {
      await checkAuth();
      setIsChecking(false);
    };
    verify();
  }, []);

  // Hiển thị loading khi đang kiểm tra trạng thái xác thực
  if (loading || isChecking) {
    return <LoadingPage />;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            {/* Public Routes */}
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Landing />}></Route>

            <Route element={<AuthLayout />}>
              <Route
                path="/login"
                element={
                  <PageTransition>
                    <Login />
                  </PageTransition>
                }
              />
              <Route
                path="/register"
                element={
                  <PageTransition>
                    <Register />
                  </PageTransition>
                }
              />
            </Route>

            {/* Private Routes */}
            <Route
              element={
                <PrivateRoute>
                  <DefaultLayout />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/courses" element={<Courses />} /> */}
              <Route path="/pages" element={<Pages />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/library" element={<Library />} />

              <Route path="/account" element={<Account />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/inbox" element={<Inbox />} />

              <Route path="/pages/:pageId" element={<Page />} />
              <Route path="/courses" element={<Courses />}>
                <Route index element={<Navigate to="all" replace />} />
                <Route path="all" element={<CoursesAll />} />
                <Route path="search" element={<CoursesSearch />} />
                <Route path="completed" element={<CoursesCompleted />} />
                <Route path="ongoing" element={<CoursesCompleted />} />
              </Route>
              <Route path="/courses/:courseId" element={<Course />}></Route>

              <Route
                path="/courses/:courseId/lessons/:lessonId"
                element={<Lesson />}
              />

              <Route path="/calendar" element={<Calendar />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
