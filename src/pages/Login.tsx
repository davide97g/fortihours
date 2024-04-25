import { Button } from "@nextui-org/react";
import { Auth } from "../api/auth";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h3 className="text-4xl font-bold">Login</h3>
      <Button color="primary" onClick={Auth.login}>
        Login
      </Button>
    </div>
  );
}
