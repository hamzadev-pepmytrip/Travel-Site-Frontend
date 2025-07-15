import { fetchDestinationBySlug } from "@/lib/api/destination";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const destination = await fetchDestinationBySlug(params.slug);

  if (!destination) {
    notFound(); 
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">{destination.country_name}</h1>

      <div className="w-full h-96 relative rounded overflow-hidden">
        <Image
          src={destination.image_url}
          alt={destination.country_name}
          layout="fill"
          objectFit="cover"
          className="rounded"
          priority
        />
      </div>

      <p className="mt-4 text-lg">{destination.description}</p>
    </div>
  );
}
