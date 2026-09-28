import Link from 'next/link';
import { Icon } from './icons';

export function SectionHeading({ eyebrow, title, description, href, linkLabel = 'সব দেখুন' }: { eyebrow?: string; title: string; description?: string; href?: string; linkLabel?: string }) {
  return <div className="section-heading">
    <div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
    {href && <Link href={href} className="text-link">{linkLabel}<Icon name="arrow-right" size={17} /></Link>}
  </div>;
}
