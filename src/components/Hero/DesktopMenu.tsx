"use client";

import Link from "next/link";
import { Destination } from "@/types/destination";

interface DesktopMenuProps {
  destinations: Destination[];
}

export default function DesktopMenu({ destinations }: DesktopMenuProps) {
  return (
    <nav className="hidden md:flex items-center space-x-8 relative">
      <div className="relative group">
        <button className="text-gray-700 hover:text-blue-600 transition-colors">
          Destinations
        </button>
        <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
          <ul className="py-2">
            {destinations.map((destination) => (
              <li key={destination.id}>
                <Link
                  href={`/destinations/${destination.slug || "#"}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                >
                  {destination.country_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href="/packages"
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        Packages
      </Link>
      <Link
        href="/visa"
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        Visa
      </Link>
      <Link
        href="#contact"
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
}