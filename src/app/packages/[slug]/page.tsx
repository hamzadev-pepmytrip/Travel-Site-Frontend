import { fetchPackageBySlug } from "@/lib/api/package";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function SinglePackagePage({params}: PageProps){
    const pkg = await fetchPackageBySlug(params.slug); 
    if (!pkg) {
        notFound();
    }


return (
    <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold mb-4">{pkg.title}</h1>

          <p>{pkg.description}</p>
    
          {/* <div className="w-full h-96 relative rounded overflow-hidden">
            <Image
              src={pkg.image_url}
              alt={pkg.title}
              layout="fill"
              objectFit="cover"
              className="rounded"
              priority
            />
          </div> */}
    
          <p className="mt-4 text-lg">{pkg.price}</p>
        </div>
)
}