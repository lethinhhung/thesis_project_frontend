import { PageTransition } from "@/components/page-transition";
import AuthLayout from "@/layouts/AuthLayout";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "@/layouts/DefaultLayout";
import Landing from "@/pages/Landing";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = localStorage.getItem("token"); // Kiểm tra đăng nhập
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />}></Route>
          <Route element={<DefaultLayout />}>
            <Route path="/home" element={<Home />} />
          </Route>
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
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default AppRoutes;
