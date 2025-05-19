"use client"

import { usePathname } from "next/navigation";
export default function Page() {
    const pathname = usePathname();

  return(
    <>
    <p>Invoices Page</p>
    <p>{pathname}</p>
    </>
  );
}