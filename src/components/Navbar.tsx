"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const supabase = createClientComponentClient();
  const path = usePathname();

  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const isAuthPage = path === "/auth";

  return (
    <div className="flex justify-between py-3">
      <Link className="cursor-pointer" href={"/"}>
        <div className="flex gap-2 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7933/7933336.png"
            className="w-8"
            alt="logo"
          />
          <h1 className="font-semibold">Supa Calender</h1>
        </div>
      </Link>
      {!isAuthPage && <Button onClick={handleLogout}>Logout</Button>}
    </div>
  );
}
