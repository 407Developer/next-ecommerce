import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <nav className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
      {/* Mobile  */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">AyoMa</div>
        </Link>
        <Menu />
      </div>

      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left side  */}
        <div className="w-1/3 lg:w-1/2 flex items-center">
          <Link href={"/"} className="flex gap-3 items-center">
            <Image src={"/logo.png"} width={24} height={24} alt="logo image" />
            <div className="text-2xl tracking-wide flex items-center w-40 h-7 m-0 p-0 appearance-none">
              AyoMa
            </div>
          </Link>
          <div className="hidden lg:flex gap-4 box-border">
            <Link href={"/"}>Homepage</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>AyoMa
            <Link href={"/"}>Contact</Link>
          </div>
        </div>

        {/* Right side  */}
        <div className="w-2/3 lg:w-1/2 flex justify-between gap-8">
          <SearchBar />
          <NavIcons />
          <div className="lg:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
