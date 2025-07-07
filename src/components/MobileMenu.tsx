"use client";
import Link from "next/link";

import Image from "next/image";
export default function MobileBrandHeader() {
  return (
    <div className="mobile-logo-header">
      <Link href="/">
        <Image src="/images/KR_logo.png" alt="KR Logo" width={48} height={48} className="mobile-logo-img" priority />
      </Link>
    </div>
  );
}
