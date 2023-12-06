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
    secure: false,
    httpOnly: true,
    sameSite: "lax",
    maxAge: 3600,
    pacth: "/"
  },
};

type RandomizedShoe = {
  title: string;
  id: number;
  image: StaticImageData;
  description: string;
};








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


export const Shoes: RandomizedShoe[] = [
  {
    title: "Yeezy 350 Boost",
    id: 0,
    image: Yeezy,
    description:
      "A Kanye West neve fémjelezte YEEZY sorozat legkedveltebbmodellje egyértelműen a Yeezy Boost 350 v2. Sikere töretlen az első Beluga megjelenése óta: több tucat színváltozata látott már napvilágot: vannak a korábbi, SPLY350 feliratos és az átlátszó csíkos, a pull-tabes és a pull tab nélküli változatok, de ami mindegyikben megegyezik: a kényelmes Boost talp és a rugalmas Primeknit felsőrész.",
  },
  {
    title: "Yeezy 350 Boost",
    id: 1,
    image: Yeezy,
    description:
      "A Kanye West neve fémjelezte YEEZY sorozat legkedveltebbmodellje egyértelműen a Yeezy Boost 350 v2. Sikere töretlen az első Beluga megjelenése óta: több tucat színváltozata látott már napvilágot: vannak a korábbi, SPLY350 feliratos és az átlátszó csíkos, a pull-tabes és a pull tab nélküli változatok, de ami mindegyikben megegyezik: a kényelmes Boost talp és a rugalmas Primeknit felsőrész.",
  },
  {
    title: "Nike Jordan 1",
    id: 4,
    image: Jordan,
    description:
      "A Kanye West neve fémjelezte YEEZY sorozat legkedveltebbmodellje egyértelműen a Yeezy Boost 350 v2. Sikere töretlen az első Beluga megjelenése óta: több tucat színváltozata látott már napvilágot: vannak a korábbi, SPLY350 feliratos és az átlátszó csíkos, a pull-tabes és a pull tab nélküli változatok, de ami mindegyikben megegyezik: a kényelmes Boost talp és a rugalmas Primeknit felsőrész.",
  },
  {
    title: "Yeezy 350 Boost",
    id: 3,
    image: Yeezy,
    description:
      "A Kanye West neve fémjelezte YEEZY sorozat legkedveltebbmodellje egyértelműen a Yeezy Boost 350 v2. Sikere töretlen az első Beluga megjelenése óta: több tucat színváltozata látott már napvilágot: vannak a korábbi, SPLY350 feliratos és az átlátszó csíkos, a pull-tabes és a pull tab nélküli változatok, de ami mindegyikben megegyezik: a kényelmes Boost talp és a rugalmas Primeknit felsőrész.",
  },
  {
    title: "Nike AirForce 1",
    id: 2,
    image: AirForce,
    description:
      "A Kanye West neve fémjelezte YEEZY sorozat legkedveltebbmodellje egyértelműen a Yeezy Boost 350 v2. Sikere töretlen az első Beluga megjelenése óta: több tucat színváltozata látott már napvilágot: vannak a korábbi, SPLY350 feliratos és az átlátszó csíkos, a pull-tabes és a pull tab nélküli változatok, de ami mindegyikben megegyezik: a kényelmes Boost talp és a rugalmas Primeknit felsőrész.",
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
