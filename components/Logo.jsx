import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <img src="/logo.png" className=" h-full" priority alt="logo" />
    </Link>
  );
}

export default Logo
