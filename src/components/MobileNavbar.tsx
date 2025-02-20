"use client";

import {
  AwardIcon,
  BellIcon,
  BookMarkedIcon,
  ContactIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  MoonIcon,
  PartyPopperIcon,
  SunIcon,
  UserIcon,
  
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex md:hidden items-center space-x-2">
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <div className="fixed right-4 px-5 py-2 rounded-full flex items-center gap-2 border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
              <MenuIcon className="w-full"/>
              <p>Menu</p>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-black flex flex-col justify-center items-center">
          <SheetHeader>
            <SheetTitle className="text-3xl font-primary">MENU</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6 ">
            <Button variant="ghost" className="text-5xl font-primary font-bold menuLink" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="/">HOME</Link>
            </Button>

            <Button variant="ghost" className="text-5xl font-primary font-bold menuLink" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="/work">WORK</Link>
            </Button>

            <Button variant="ghost" className="text-5xl font-primary font-bold menuLink" asChild onClick={() => setShowMobileMenu(false)}>
            <Link href="/about">ABOUT</Link>
            </Button>

            <Button variant="ghost" className="text-5xl font-primary font-bold menuLink" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="/contact">CONTACT</Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;