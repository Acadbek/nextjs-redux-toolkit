import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/icons/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full h-[48px] bg-white border-b border-b-[#EBEEF6] flex items-center pl-[30px]">
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
