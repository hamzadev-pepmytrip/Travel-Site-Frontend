"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  MapPin,
  Star,
  Calendar,
  Users,
  Shield,
  Globe,
  Camera,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Destination } from "@/types/destination";
import { fetchDestinations } from "@/lib/api/destination";
import { useEffect } from "react";

export default function TravelLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    fetchDestinations()
      .then(setDestinations)
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Wanderlust</span>
          </Link>

          {/* Desktop Navigation */}
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
              href="#experiences"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Experiences
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <div className="relative">
                <span className="block font-medium text-gray-700">
                  Destinations
                </span>
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
                href="#experiences"
                className="block text-gray-700 hover:text-blue-600"
              >
                Experiences
              </Link>
              <Link
                href="#about"
                className="block text-gray-700 hover:text-blue-600"
              >
                About
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
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
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
              Explore breathtaking destinations, create unforgettable memories,
              and embark on journeys that will change your perspective forever.
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

        {/* Popular Destinations */}
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
                From pristine beaches to majestic mountains, discover the
                world's most captivating destinations curated just for you.
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
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                      50000
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="experiences" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-800">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Travel with Confidence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide everything you need for an unforgettable journey,
                from expert planning to 24/7 support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Globe className="h-12 w-12 text-blue-600" />,
                  title: "Global Network",
                  description:
                    "Access to destinations worldwide with local expertise and insider knowledge.",
                },
                {
                  icon: <Shield className="h-12 w-12 text-green-600" />,
                  title: "Safe & Secure",
                  description:
                    "Your safety is our priority with comprehensive insurance and 24/7 support.",
                },
                {
                  icon: <Users className="h-12 w-12 text-purple-600" />,
                  title: "Expert Guides",
                  description:
                    "Professional local guides who bring destinations to life with their stories.",
                },
                {
                  icon: <Camera className="h-12 w-12 text-orange-600" />,
                  title: "Unique Experiences",
                  description:
                    "Curated experiences that go beyond typical tourist attractions.",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
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
              {[
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
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
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

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about
              exclusive deals, new destinations, and travel tips.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
              <p className="text-blue-100 text-sm mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
            <p>
              &copy; {new Date().getFullYear()} Wanderlust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
