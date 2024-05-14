"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          {/* <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} /> */}
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          {/* <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} /> */}
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={"check out"}
          mainHeader={"Our Best Sellers"}
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 &&
          bestSellers.map((item) => <MenuItem key={item._id} {...item} />)}
      </div>
        <div className="flex  mx-auto justify-center  ">
      <Link  href={"/menu"} >

        <button
          className=" w-auto  mt-8 rounded-lg bg-orange-500 py-2  px-6 md:px-20 font-sans text-md sm:text-xl font-semibold sm:font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
          data-ripple-light="true"
        >
          Explore Menu Items{" "}
          <i className="fa-solid fa-user pl-2" style={{ color: "#ffffff" }}></i>
        </button>
      </Link>
        </div>
    </section>
  );
}
