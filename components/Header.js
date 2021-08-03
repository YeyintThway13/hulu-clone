import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  UserIcon,
  SearchIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image className="object-contain" src="/Images/hulu-white.png" width={200} height={100}></Image>
    </header>
  );
};

export default Header;
