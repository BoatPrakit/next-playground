"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "../page";
import axios from "axios";

export default function UserProfilePage() {
  const params = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const callApi = async () => {
      const user = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(user.data);
    };

    callApi();
  });

  return (
    <div>
      <p>User Id: {params.id}</p>
      <p>Name: {user?.name}</p>
    </div>
  );
}
