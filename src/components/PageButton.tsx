"use client";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps } from "../../type";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const PageButton = () => {
  const { productData } = useSelector((state: StateProps) => state.orebi);
  const { data: session } = useSession();

  return (
    <div className="fixed top-60 right-2 z-20 flex flex-col gap-2">
      
    </div>
  );
};

export default PageButton;
