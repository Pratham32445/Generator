"use client";
import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Links = [
  { name: "Videos", href: "/videos" },
  { name: "Ideas", href: "/ideas" },
  { name: "Settings", href: "/settings" },
];

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  console.log(user);
  const [selectedLink, setSelectedLink] = useState("");
  return (
    <div className="flex items-center p-8 px-10 justify-between">
      <div>
        <Link href={"/"} onClick={()=>setSelectedLink("")}>
          <h1 className="text-4xl">YT</h1>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        {isSignedIn ? (
          <div className="flex items-center gap-10">
            {Links.map(({ name, href }, idx) => (
              <Link href={href} key={idx}>
                <div
                  className={`cursor-pointer pb-2 ${
                    selectedLink == name && "border-b-2 border-b-red-500"
                  }`}
                  onClick={() => setSelectedLink(name)}
                >
                  <p
                    className={`text-xl ${
                      selectedLink == name ? "text-red-500" : "text-black"
                    }`}
                  >
                    {name}
                  </p>
                </div>
              </Link>
            ))}
            <div>
                {user && <Image className="rounded-full" src={user.imageUrl!} alt="avatar" width={40} height={40}/> } 
            </div>
          </div>
        ) : (
          <div>
            <Link href={"/videos"}>
              <Button className="bg-red-500 px-14 py-6 to-red-200">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
