import {notFound} from 'next/navigation';
import {getContent} from '../../content';
import {ContentArticle} from '../../content-article';
import {site} from '../../data';
export function generateStaticParams(){return getContent('research').map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=getContent('research').find(p=>p.slug===slug);return post?{title:post.title,description:post.description,alternates:{canonical:`${site.url}/research/${slug}`},openGraph:{title:post.title,description:post.description,url:`${site.url}/research/${post.slug}`,type:'article',images:[{url:`${site.url}${post.image}`,alt:post.imageAlt}]}}:{}}
export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=getContent('research').find(p=>p.slug===slug);if(!post)notFound();return <ContentArticle entry={post}/>}
