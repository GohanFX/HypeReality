import { StaticImageData } from "next/image";
import Frame from "./images/Frame.png";
import Logo from "./images/Logo.png";
import AirForce from "./images/af1.png";
import Yeezy from "./images/yeezy.png";
import Jordan from "./images/jordair.png";

export const IronOptions = {
    password: "AbwnDoPET4XNW7Tyx8wtXmgdtHEGgtCG",
    cookieName: "HypeSession",
    cookieOptions: {
      secure: false
    }
}


type NavItems = {
  text: string;
  href: string;
};
type SlideableItem = {
  banner: StaticImageData;
  href: string;
  alt: string;
};

export type ShoeFrame = {
  banner: StaticImageData;
  Seller: string;
  href: string;
  ShoeName: string;
  liked: boolean;
};

export const NavbarItems: NavItems[] = [
  {
    text: "Browse",
    href: "/browse",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "FAQ",
    href: "/faq",
  },
  {
    text: "Sell",
    href: "/sell",
  },
];
export const SlideableContent: SlideableItem[] = [
  {
    banner: Frame,
    href: "/recommended",
    alt: "",
  },
  {
    banner: Logo,
    href: "/recommended",
    alt: "",
  },
  {
    banner: Frame,
    href: "/recommended",
    alt: "",
  },
  {
    banner: Frame,
    href: "/recommended",
    alt: "",
  },
  {
    banner: Frame,
    href: "/recommended",
    alt: "",
  },
  {
    banner: Frame,
    href: "/recommended",
    alt: "",
  },
  {
    banner: Frame,
    href: "/recommended",
    alt: "",
  },
  {
    banner: Logo,
    href: "/recommended",
    alt: "",
  },
];
export const ShoeFrames: ShoeFrame[] = [
  {
    banner: AirForce,
    ShoeName: "Nike Airforce 1",
    Seller: "GohanFY",
    href: "/users/gohanfy/<shoeid>",
    liked: false,
  },
  {
    banner: Yeezy,
    Seller: "GohanFY",
    ShoeName: "Yeezy 350v2",
    href: "/users/gohanfy/<shoeid>",
    liked: true,
  },
  {
    banner: Jordan,
    Seller: "GohanFY",
    ShoeName: "Nike Jordan 1",
    href: "/users/gohanfy/<shoeid>",
    liked: true,
  },
  {
    banner: AirForce,
    Seller: "GohanFY",
    ShoeName: "Nike Airforce 1",
    href: "/users/gohanfy/<shoeid>",
    liked: false,
  },
  {
    banner: Jordan,
    Seller: "GohanFY",
    ShoeName: "Nike Airforce 1",
    href: "/users/gohanfy/<shoeid>",
    liked: false,
  },
  
];
