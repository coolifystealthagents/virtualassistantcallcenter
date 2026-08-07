import {notFound} from 'next/navigation';
import {getContent} from '../../content';
import {ContentArticle} from '../../content-article';
export function generateStaticParams(){return getContent('research').map(p=>({slug:p.slug}))}
export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=getContent('research').find(p=>p.slug===slug);if(!post)notFound();return <ContentArticle entry={post}/>}
