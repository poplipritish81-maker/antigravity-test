import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.omegaautomatics.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/products",
    "/industries",
    "/projects",
    "/resources",
    "/contact",
    "/careers",
    "/privacy",
    "/terms"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/contact" || route === "/products" ? 0.9 : 0.7,
  }));
}
