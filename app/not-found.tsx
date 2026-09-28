import Link from 'next/link';
import { Icon } from '@/components/icons';

export default function NotFound() {
  return <section className="order-success"><div className="container"><div className="success-card"><span className="success-icon"><Icon name="search" size={25} /></span><h1>পৃষ্ঠাটি পাওয়া যায়নি</h1><p>আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরানো হয়েছে বা ঠিকানাটি সঠিক নয়।</p><Link href="/" className="btn btn-dark" style={{ marginTop: 22 }}>হোমে ফিরে যান <Icon name="arrow-right" size={16} /></Link></div></div></section>;
}
