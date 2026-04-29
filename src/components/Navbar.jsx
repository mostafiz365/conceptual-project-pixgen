"use client";
import Image from "next/image";
import Link from "next/link";
import MyLink from "./MyLink";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user);


  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <MyLink href={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink href={"/all-photos"}>All Photos</MyLink>
          </li>
          <li>
            <MyLink href={"/pricing"}>Pricing</MyLink>
          </li>
          <li>
            <MyLink href={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        <div className="flex">
          { !user && <ul className="flex items-center  text-sm gap-4">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>}

            {
                user && <div className="flex items-center gap-2">
                    <p>Hello,{user.name}</p>
                    <Avatar size="sm">
        <Avatar.Image alt={user.name} src={user.image} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Button variant="danger" size="sm" onClick={async() => await authClient.signOut()}>LogOut</Button>
                </div>

            }

        </div>
      </nav>
    </div>
  );
};

export default Navbar;