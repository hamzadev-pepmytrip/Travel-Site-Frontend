"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Shield, Users, Camera } from "lucide-react";

export default function FeaturesSection() {
  const features = [
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
  ];

  return (
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
            We provide everything you need for an unforgettable journey, from
            expert planning to 24/7 support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
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
  );
}