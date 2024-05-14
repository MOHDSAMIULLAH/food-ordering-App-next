import Right from "@/components/icons/Right";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:mt-14 mb-20">
      <div className="py-8 md:py-20">
        
        <h1 className="text-4xl font-semibold">
          Let's eat some Delicious &nbsp;
          <span className="text-[#fac031]">
            Food
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Tasty food is the missing piece that makes every day complete, a simple yet delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <Link href={"/menu"}  className="flex justify-center bg-teal-500 hover:bg-white hover:text-rose-600 hover:border-rose-600 border-2 uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Explore
            <Right />
          </Link>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        {/* <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} /> */}
        <div class="banner-img-wp ">
          <div class="banner-img" >
            <Image src={'/main-b.jpg'} layout={'fill'} objectFit={'cover'} alt={'pizza'} className="banner-img" />
          </div>
        </div>
      </div>
    </section>
  );
}