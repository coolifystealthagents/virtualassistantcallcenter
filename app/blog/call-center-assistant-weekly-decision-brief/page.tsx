import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','call-center-assistant-weekly-decision-brief');
export default function Page(){return renderAug19Article('blog','call-center-assistant-weekly-decision-brief')}
