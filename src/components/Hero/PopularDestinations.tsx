"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
import { Destination } from "@/types/destination";

interface PopularDestinationsProps {
  destinations: Destination[];
}

export default function PopularDestinations({ destinations }: PopularDestinationsProps) {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            Popular Destinations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where Will You Go Next?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From pristine beaches to majestic mountains, discover the world's
            most captivating destinations curated just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image_url || "/placeholder.svg"}
                  alt={destination.country_name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-900">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    4.3
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {destination.country_name}
                </h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">50000</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}