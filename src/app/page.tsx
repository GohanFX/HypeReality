import Navbar from "@/components/Navbars/Navbar";
import Image from "next/image";
import Frame from "../utils/Frame.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import ContentSlide from "@/components/ContentSlide";
import { AiOutlineArrowRight } from "react-icons/ai";
import LatestRow from "@/components/Rows";
import ShoeRow from "@/components/Rows";
import ShoeRandomizer from "@/components/ShoeRandomizer";
import DropDownMenu from "@/components/DropDown/DropDownMenu";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 ">
      <div className="space-y-12 flex-col w-full text-xl">
        <ContentSlide />
        <ShoeRow filter="" title="Latest Shoes" />
        <ShoeRow filter="" title="Most liked shoes"/>
        <ShoeRandomizer />
      </div>
    </main>
  );
}
