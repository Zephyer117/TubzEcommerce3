"use client";
import Link from "next/link";
import { ProductProps } from "../../type";
import Price from "./Price";
import Image from "next/image";
import messenger from "../assets/messenger.png";
import whatsapp from "../assets/whatsapp.png";
import { PortableText } from "@portabletext/react";

interface Props {
  product: ProductProps;
}
const ProudctInfo = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{product?.title}</h2>
      <div className="flex items-center gap-4">
        <p className="text-lg font-normal text-gray-500 line-through">
          <Price amount={product?.rowprice} />
        </p>

        <Price amount={product?.price} className="text-lg font-bold" />

        <p className="text-sm">
          you saved{" "}
          <Price
            className="bg-green-700 text-white px-2 rounded-md"
            amount={product?.rowprice - product?.price}
          />{" "}
          from this item
        </p>
      </div>
      <p className="text-sm tracking-wide text-gray-600">
        {product?.description}
      </p>
      <p className="text-sm text-gray-500">Be the first to leave a review.</p>
      <span className="w-[100px] bg-gray-600 hover:bg-black-100 duration-100 transition hover:scale-110 text-white text-lg rounded-md text-center cursor-pointer">
        Buy Now
      </span>
      <div className="flex">
        <Link href={"/"}>
          <div className="w-[170px] h-[78px] text-white flex items-center font-bold hover:text-white hover:font-bold duration-200 transform bg-green-700 transition hover:scale-110 hover:bg-green-600 rounded-lg py-1 pl-1 lg:pl-2 lg:py-[15px] lg:pr-[50px] mr-5">
            <Image
              src={whatsapp}
              alt="/"
              width={50}
              height={50}
              className="ml-[7px]"
            />
            <span className="uppercase pl-1.5 ml-[5px]">Whatsapp</span>
          </div>
        </Link>
        <Link href={"https://m.me/MAngaTalker/"}>
          <div className="w-[175px] text-white flex items-center font-bold  hover:font-bold duration-100 transform bg-primeColor transition hover:scale-110 hover:bg-gray-700 rounded-lg py-1 lg:pr-[80px]">
            <Image src={messenger} alt="/" width={70} height={70} />
            <span className="uppercase hover:text-blue-300">Messenger</span>
          </div>
        </Link>
      </div>
      <p className="font-normal text-sm">
        <span className="text-base font-medium">Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProudctInfo;
