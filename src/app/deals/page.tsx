"use client";
import { useState, useEffect } from "react";
import { Package } from "@/types/package";
import { fetchDeals } from "@/lib/api/deals";

export default function DealsPage() {
  const [deals, setDeals] = useState<Package[]>([]);

  useEffect(() => {
    fetchDeals()
      .then((data) => setDeals(data))
      .catch((error) => console.error("Error fetching packages:", error));
  });

  return (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {deals.map((deal, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* <div className="relative h-48 w-full">
        <img
          src={deal.image_url}
          alt={deal.title}
          className="object-cover w-full h-full"
        />
      </div> */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{deal.title}</h3>
        <p className="text-gray-500 text-sm">{deal.description}</p>
        <p className="mt-2 text-blue-600 font-bold">LKR {deal.price.toLocaleString()}</p>
        <p className="text-sm text-gray-400">Duration: {deal.duration_days} days</p>
        <p className="text-sm text-yellow-500">⭐ {deal.rating}</p>
      </div>
    </div>
  ))}
</div>


  )
  
  
}
