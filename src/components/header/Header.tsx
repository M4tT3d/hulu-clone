import Image from "next/image"
import HeaderIteam from "./HeaderIteam"
import HuluLogo from "../../assets/images/Hulu_Logo.svg"
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/outline"

function Header(): JSX.Element {
  return (
    <header className="m-5 flex h-auto flex-col items-center justify-between sm:flex-row">
      <div className="flex max-w-2xl grow justify-evenly">
        <HeaderIteam title="HOME" Icon={HomeIcon} />
        <HeaderIteam title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderIteam title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderIteam title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderIteam title="SEARCH" Icon={SearchIcon} />
        <HeaderIteam title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image src={HuluLogo} alt="hulu_logo" width={150} height={50} />
    </header>
  )
}
export default Header
