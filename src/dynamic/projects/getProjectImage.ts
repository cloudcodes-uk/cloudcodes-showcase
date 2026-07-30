/**
 * Returns the project image URL.
 * If a custom image is provided, it's used as-is.
 * Otherwise, a live screenshot is generated from the project's live URL
 * using the free microlink.io screenshot API.
 */
export function getProjectImage(image?: string, liveUrl?: string): string {
  if (image) return image;

  if (liveUrl) {
    return `https://api.microlink.io/?url=${encodeURIComponent(liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
  }

  // Fallback placeholder
  return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop";
}
