"use client";

import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Wanderlust</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating unforgettable travel experiences around the world.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                Facebook
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Europe
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Asia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Americas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Africa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}