"use client";
import { UserList } from "@/components/UserList";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };

    callApi();
  }, []);

  return (
    <div>
      {users.map((u, i) => {
        return <UserList key={i} email={u.email} id={u.id} />;
      })}
    </div>
  );
}
