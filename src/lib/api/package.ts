import { Package } from "@/types/package";

export async function fetchPackages(): Promise<Package[]> {

    const response = await fetch ("http://127.0.0.1:8000/packages/")

    if(!response.ok) {
        throw new Error("Failed to fetch packages");
    }

    return response.json();
}