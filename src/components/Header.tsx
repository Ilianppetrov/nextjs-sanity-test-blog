import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between font-bold px-10 py-5">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://links.papareact.com/1m8"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        PAPAFAM
      </div>
      <div></div>
    </header>
  );
}

export default Header;
