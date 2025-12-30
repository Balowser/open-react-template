import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="BusLotse">
      <Image src={logo} alt="BusLotse Logo" width={32} height={32} />
      <span className="text-xl font-bold text-gray-900">BusLotse</span>
    </Link>
  );
}
