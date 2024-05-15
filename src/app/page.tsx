"use client";
import NormalNavbar from "@/components/Navbars/NormalNavbar";
import Image from "next/image";
import Frame from "../utils/Frame.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import ContentSlide from "@/components/ContentSlide";
import { AiOutlineArrowRight } from "react-icons/ai";
import ShoeRow from "@/components/ShoeRelateds/Rows";
import ShoeRandomizer from "@/components/ShoeRandomizer";
import { get } from "http";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data, status} = useSession();
  console.log(data);
  return (
    <>
    <NormalNavbar user={data?.user!} />  
    <main className="flex flex-col items-center justify-between p-24 ">
      <div className="space-y-12 flex-col w-full text-xl">
        <ContentSlide />
        <ShoeRow filter="" title="Latest Shoes" />
        <ShoeRow filter="" title="Most liked shoes"/>
        <ShoeRandomizer />
      </div>
    </main>
      </>
  );
}
