"use client";

import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Destination } from "@/types/destination";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

interface HeaderProps {
  destinations: Destination[];
}

export default function Header({ destinations }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Plane className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Wanderlust</span>
        </Link>

        <DesktopMenu destinations={destinations} />

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-700">
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Book Now</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && <MobileMenu destinations={destinations} />}
    </header>
  );
}