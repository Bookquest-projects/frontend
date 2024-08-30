import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

import DefaultLayout from "@/layouts/default.tsx";
import { useAuth } from "@/auth/AuthProvider.tsx";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <div>
        <Button
          onClick={() => {
            login();
            navigate("/frontend/", { replace: true });
          }}
        >
          Login
        </Button>
      </div>
    </DefaultLayout>
  );
};
