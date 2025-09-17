import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import Image from "next/image";

import img from "../../../../public/imgs/logo.jpeg"


function Navbar() {
  return (
    <nav className="p-3 flex justify-between items-center text-primary bg-secondary">
        <Image
        src={img}  
        alt="Logo"
        width={60}
        height={50}
        className="rounded-full w-auto h-auto"
        />

        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link className="text-primary pe-5 font-semibold hover:underline" href={"/"}> Home </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link className="text-primary pe-5 font-semibold hover:underline" href={"/admin/dashboard"}> Dashboard Admin </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link className="text-primary pe-5 font-semibold hover:underline" href={"/student/dashboard"}> Dashboard Student </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <div>
            <ModeToggle />
        </div>
    </nav>
  )
}

export default Navbar