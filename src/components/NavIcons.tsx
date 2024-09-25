"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";
import { useRouter } from "next/navigation";

const NavIcons = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);
  const router = useRouter();

  //Temporarily
  const isLoggedIn = true;
  const handleProfile = () => {
    isLoggedIn ? setisProfileOpen((prev) => !prev) : router.push("/login");
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src={"/profile.png"}
        alt="profile icon"
        width={22}
        height={22}
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute top-12 left-0 text-sm p-2 shadow-lg z-20">
          <Link href={"/"}>
            <p>Profile</p>
          </Link>
          <Link href={"/"}>
            <p className="mt-2 cursor-pointer">Logout</p>
          </Link>
        </div>
      )}
      <Image
        src={"/notification.png"}
        alt="notification icon"
        width={22}
        height={22}
      />
      <div className="relative">
        <Image
          src={"/cart.png"}
          alt="cart icon"
          width={22}
          height={22}
          onClick={() => {
            setisCartOpen((prev) => !prev);
          }}
        />
        <div className="flex items-center justify-center w-6 h-6 rounded-full absolute -top-4 -right-4 bg-accent text-white text- sm">5</div>
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
};

export default NavIcons;
