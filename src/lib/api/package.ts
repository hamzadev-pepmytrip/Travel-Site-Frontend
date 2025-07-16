import { Package } from "@/types/package";

export async function fetchPackages(): Promise<Package[]> {

    const response = await fetch ("http://127.0.0.1:8000/packages/")

    if(!response.ok) {
        throw new Error("Failed to fetch packages");
    }
    return response.json();
}


export async function fetchPackageBySlug(slug: string): Promise<Package | null> {
    const response = await fetch(`http://127.0.0.1:8000/packages/slug/${slug}`)
    if (!response.ok) {
        if (response.status === 404) {
            return null;
        }
            throw new Error("Failed to fetch package");
        }
        const data: Package = await response.json();
        return data;
    }