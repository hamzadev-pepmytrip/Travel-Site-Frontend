"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Beautiful travel destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Your Next
          <span className="block text-blue-400">Adventure</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Explore breathtaking destinations, create unforgettable memories, and
          embark on journeys that will change your perspective forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Explore Destinations
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-transparent"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Plan Your Trip
          </Button>
        </div>
      </div>
    </section>
  );
}