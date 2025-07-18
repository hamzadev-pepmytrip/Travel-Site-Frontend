"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "The trip to Santorini was absolutely magical! Every detail was perfectly planned, and the local guide was incredible.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      text: "Wanderlust made our dream trip to Japan a reality. The cultural experiences were authentic and unforgettable.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      text: "Outstanding service from start to finish. The Machu Picchu trek was the adventure of a lifetime!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Travelers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}