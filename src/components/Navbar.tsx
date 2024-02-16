"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logoBlack.png";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();
  const [userIp, setUserIp] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("/api/getip");
        const data = await response.json();
        console.log("API Response:", data);
        setUserIp(data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };

    fetchIp();
  }, []);

  useEffect(() => {
    const closeMenuOnClickOutside = (event) => {
      // Check if the clicked element is not inside the dropdown menu
      if (isMenuOpen && !event.target.closest(".absolute.top-16.right-0")) {
        setIsMenuOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", closeMenuOnClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeMenuOnClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navBarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "AboutUs",
      link: "/about",
    },
    {
      title: "ContactUS",
      link: "/contact",
    },
    ...(userIp !== "localhost:3000"
      ? []
      : [
          {
            title: "Studio",
            link: "/studio",
          },
        ]),
  ];

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky top-0 z-50">
      <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <Link href={"/"}>
          <span className="font-semibold text-[2rem]">TUBZ</span>
        </Link>

        <div className="hidden md:inline-flex items-center gap-2">
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-400 duration-200 last:border-r-0 ${
                pathname === item?.link && "text-gray-950 underline"
              }`}
            >
              {item?.title}
            </Link>
          ))}
          {session?.user && (
            <button
              onClick={() => signOut()}
              className="flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-red-600 md:border-r-[2px] border-r-gray-300 duration-200 last:border-r-0"
            >
              Logout
            </button>
          )}
        </div>
        <HiMenuAlt2
          onClick={toggleMenu}
          className={`inline-flex md:hidden cursor-pointer w-8 h-6 ${
            isMenuOpen ? "text-gray-950" : ""
          }`}
        />
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white border border-gray-400 p-4">
            {navBarList.map((item) => (
              <Link
                key={item?.link}
                href={item?.link}
                className="block py-2 text-gray-600 hover:text-gray-950 hover:underline cursor-pointer"
              >
                {item?.title}
              </Link>
            ))}
            {session?.user && (
              <button
                onClick={() => signOut()}
                className="block py-2 text-gray-500 hover:text-red-600 hover:underline cursor-pointer"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
