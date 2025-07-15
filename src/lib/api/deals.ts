import { Package } from "@/types/package";

export async function fetchDeals(): Promise<Package[]> {
  const response = await fetch("http://127.0.0.1:8000/packages/api/deals/");
  if (!response.ok) {
    throw new Error("Failed to fetch deals");
  }
  return response.json();
}
