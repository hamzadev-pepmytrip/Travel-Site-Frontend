import { Destination } from "@/types/destination"

export async function fetchDestinations(): Promise<Destination[]> {
  const response = await fetch("http://127.0.0.1:8000/destinations", {
    headers: { "Content-Type": "application/json" },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch destinations")
  }

  return response.json()
}

export async function fetchDestinationBySlug(slug: string): Promise<Destination | null> {
  const response = await fetch(`http://127.0.0.1:8000/destinations/slug/${slug}`, {
    headers: { "Content-Type": "application/json" },
  })

  if (!response.ok) {
    if (response.status === 404) {
      return null
    }
    throw new Error("Failed to fetch destination")
  }

  return response.json()
}
