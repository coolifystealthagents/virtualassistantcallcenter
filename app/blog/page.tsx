import { BlogListing } from "./blog-listing";
export const metadata = {
  title: "Blog",
  description: "Guides for planning Philippines-based staffing.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog",
    description: "Guides for planning Philippines-based staffing.",
    url: "/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Virtual Assistant Call Center editorial guides" }],
  },
};
export default function Blog() {
  return <BlogListing />;
}
