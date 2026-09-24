import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/assets/footerLogo.png";

function Footer() {
  return (
    <footer className="w-full bg-[#121316] text-white border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-[24px] py-[40px] flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={footerLogo}
            alt="FITLOG Logo"
            width={28}
            height={28}
            className="object-contain"
          />
          <span className="font-extrabold text-[18px] tracking-wider uppercase font-sans">
            FITLOG
          </span>
        </Link>

        <p className="text-[14px] text-gray-400 font-normal text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
