import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { ContentArticle } from '../../content-article';
import { getContent, getEntry } from '../../content';
import { site } from '../../data';

export function generateStaticParams() { return getContent('alternatives').map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry('alternatives', slug);
  return entry ? {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `${site.url}/alternatives/${slug}` },
    openGraph: { title: entry.title, description: entry.description, url: `${site.url}/alternatives/${slug}`, type: 'article', images: [{ url: entry.image, alt: entry.imageAlt }] },
  } : {};
}
export default async function AlternativeArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry('alternatives', slug);
  if (!entry) notFound();
  return <><Header/><ContentArticle entry={entry}/><Footer/></>;
}
