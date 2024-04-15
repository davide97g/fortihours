import { users } from "../../mocks/users";
import { Employee } from "./Employee";

export const PeopleList = () => {
  return (
    <div
      className="flex gap-4 p-4 flex-col items-start justify-items-start bg-background rounded-md w-full"
      style={{
        borderRadius: "10px",
        background: "#022d37",
      }}
    >
      <h3>People</h3>
      {users.map((user) => (
        <Employee key={user.id} user={user} />
      ))}
    </div>
  );
};
