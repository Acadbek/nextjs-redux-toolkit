import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from "../../public/icons/postsIcon.svg";
const Sidebar = () => {
  return (
    <div className="bg-white px-3 h-full py-8">
      <button className="bg-[#F5F6FA] rounded-lg w-full h-[40px] font-normal text-sm leading-4 text-black flex items-center justify-start py-[8px] px-4 gap-2">
        <Image src={icon} alt="" />
        <Link href={"/posts"}>Posts</Link>
      </button>
    </div>
  );
};

export default Sidebar;
