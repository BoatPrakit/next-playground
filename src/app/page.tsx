"use client";
import api from "@/api/instance";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  // const [user, setUser] = useState<User>({
  //   name: "boat",
  // });

  useEffect(() => {
    const callApi = async () => {
      const posts = await api.get("/posts");
      console.log(posts);
    };
    callApi();
  }, []);

  const handleClick = async () => {
    setCount(count + 1);
  };

  return (
    <div className="h-screen">
      {/* <div className="relative">
        <div className="bg-green-500 w-[500px] h-64 absolute z-10"></div>
        <div className="bg-amber-800 w-32 h-64 top-36 left-28 absolute "></div>
      </div> */}
      {/* <div className="w-full border border-b-2 border-amber-400"></div> */}
      <div>{count}</div>
      <div className="text-7xl md:text-[150px] md:text-red-500 lg:text-[200px] bg-cyan-300 p-[-100px]">
        Hello World
      </div>
      <button className="text-red-400" onClick={handleClick}>
        Add
      </button>
    </div>
  );

  // return (
  //   <div className="flex bg-blue-400 w-full justify-center h-screen flex-col items-center">
  //     <div className="flex w-8/12 justify-center h-2/5">
  //       <div className="w-1/3 bg-green-400">
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quidem
  //           odit quasi ipsum perferendis sapiente libero aspernatur velit, sint
  //           alias totam. Repudiandae id laudantium dolor delectus alias omnis,
  //           vero quos?
  //         </p>
  //       </div>
  //       <div className="w-1/3">
  //         <img
  //           src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
  //           alt="ss"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
}
