import { blogPosts } from "../../../data";
import { getContent } from "../../../content";
import { BlogListing, PAGE_SIZE } from "../../blog-listing";
export function generateStaticParams() {
  return Array.from(
    {
      length: Math.max(
        1,
        Math.ceil((getContent("blog").length + blogPosts.length) / PAGE_SIZE),
      ),
    },
    (_, i) => ({ page: String(i + 1) }),
  ).filter(({ page }) => Number(page) > 1
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  return {
    title: `Blog - Page ${page}`,
    description: "Guides for planning Philippines-based staffing.",
    alternates: { canonical: `/blog/page/${page}` },
    openGraph: {
      title: `Blog - Page ${page}`,
      description: "Guides for planning Philippines-based staffing.",
      url: `/blog/page/${page}`,
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Virtual Assistant Call Center editorial guides" }],
    },
  };
}
export default async function NumberedBlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const n = Number(page);
  return <BlogListing page={n} />;
}
