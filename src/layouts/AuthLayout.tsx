import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="w-svw flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Outlet />
      </div>
    </div>
  );
}
