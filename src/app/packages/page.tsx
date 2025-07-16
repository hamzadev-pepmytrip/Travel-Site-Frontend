"use client";

import { useEffect, useState } from "react";
import { Package } from "@/types/package";
import { fetchPackages } from "@/lib/api/package";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function PackagePage() {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    fetchPackages()
      .then(setPackages)
      .catch((error) => {
        console.error("Failed to fetch packages:", error);
        setPackages([]);
      });
  }, []); 

  return (
    <>
      {packages.map((pkg) => (
        <div key={pkg.id}>
          <Card className="mb-4 p-4">
            <h2 className="text-2xl font-bold">{pkg.title}</h2>
            <p>{pkg.description}</p>
            <p className="text-lg font-semibold">{pkg.price}</p>
            {/* <div className="w-full h-64 relative rounded overflow-hidden">
              <Image
                src={"https://picsum.photos/200"}
                alt={pkg.title}
                fill
                className="object-cover rounded"
                priority
              />
            </div> */}
          </Card>
        </div>
      ))}
    </>
  );
}
