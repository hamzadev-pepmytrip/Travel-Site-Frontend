"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Destination } from "@/types/destination";

interface MobileMenuProps {
  destinations: Destination[];
}

export default function MobileMenu({ destinations }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-white border-t">
      <nav className="container mx-auto px-4 py-4 space-y-4">
        <div className="relative">
          <span className="block font-medium text-gray-700">Destinations</span>
          <ul className="mt-2 space-y-2">
            {destinations.map((destination) => (
              <li key={destination.id}>
                <Link
                  href={`/destinations/${destination.slug}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded"
                >
                  {destination.country_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/packages"
          className="block text-gray-700 hover:text-blue-600"
        >
          Packages
        </Link>
        <Link
          href="/visa"
          className="block text-gray-700 hover:text-blue-600"
        >
          Visa
        </Link>
        <Link
          href="#contact"
          className="block text-gray-700 hover:text-blue-600"
        >
          Contact
        </Link>
        <div className="pt-4 space-y-2">
          <Button variant="ghost" className="w-full">
            Sign In
          </Button>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Book Now
          </Button>
        </div>
      </nav>
    </div>
  );
}