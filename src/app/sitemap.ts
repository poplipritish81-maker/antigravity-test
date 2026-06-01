import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.omegaautomatics.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/products",
    "/products/sliding",
    "/products/swing",
    "/products/revolving",
    "/products/telescopic",
    "/products/hermetic",
    "/products/hospital",
    "/products/retail",
    "/products/commercial",
    "/industries",
    "/projects",
    "/resources",
    "/contact",
    "/careers",
    "/case-studies",
    "/support",
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
