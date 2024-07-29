import Link from "next/link";

interface UserListProps {
  email: string;
  id?: number;
}

export const UserList: React.FC<UserListProps> = ({ email, id }) => {
  return (
    <div className="flex w-1/3 justify-between">
      <p>Email: {email}</p>
      {/* <Link href={`/users/${id}`}>View Profile</Link> */}
    </div>
  );
};
