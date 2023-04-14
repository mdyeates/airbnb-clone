"use client";

import Image from "next/image";
import logo from "../../../public/logo.svg";
import airbnb from "../../../public/airbnb.svg";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      className="
      cursor-pointer
      flex
      justify-center
      items-center
        "
    >
      <Image priority src={logo} alt="airbnb image logo" className="-mr-2 hidden md:block" width="38" />
      <Image
        priority
        src={airbnb}
        alt="airbnb text logo"
        className="
        hidden
        lg:block
        -ml-5
      "
      />
    </div>
  );
};

export default Logo;
