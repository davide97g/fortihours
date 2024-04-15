import { User } from "@nextui-org/react";
import { IUser } from "../../types/user.types";

export const Employee = ({ user }: { user: IUser }) => {
  return (
    <User
      style={{
        display: "flex",
        background: "rgba( 255, 255, 255, 0 )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.5 ",
      }}
      className="p-2 flex justify-start bg-background w-full"
      key={user.displayName}
      name={user.displayName}
      description={<p>{user.id}</p>}
      avatarProps={{
        src: user.photoURL,
      }}
    />
  );
};
