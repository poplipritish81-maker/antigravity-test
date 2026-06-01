import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.omegaautomatics.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/industries",
    "/pricing",
    "/case-studies",
    "/testimonials",
    "/blog",
    "/contact",
    "/careers",
    "/privacy",
    "/terms"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/pricing" || route === "/contact" ? 0.9 : 0.7,
  }));
}
