"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};
export default NavLink;

//why was this component needed -> Although we can use "use client " for any compoonent , its advised to use as below as possible , to allow the next js feature of server side rendering be effective,its using as below as possible seems a difficult taks, then create another component and provide there the code which requires client side rendering.
