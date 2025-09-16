import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

function Navbar() {
  return (
    <nav className="p-3 flex justify-between items-center text-primary bg-secondary">
        <div className="text-primary">
            Wonder Academy
        </div>

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