import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <nav className="flex space-x-4 py-8">
        <Link href="/">
          <a className={router.pathname === "/" ? "font-bold" : null}>about</a>
        </Link>
        <Link href="/posts">
          <a
            className={
              router.pathname.startsWith("/posts") ? "font-bold" : null
            }
          >
            blog
          </a>
        </Link>
      </nav>
    </>
  );
}
