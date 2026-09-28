import Link from 'next/link';
import { Icon } from '@/components/icons';

export default function OrderConfirmedPage() {
  return <section className="order-success"><div className="container"><div className="success-card"><span className="success-icon"><Icon name="check" size={28} /></span><h1>আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে!</h1><p>আপনার অর্ডারের জন্য ধন্যবাদ। এটি একটি Demo order confirmation।</p><span className="order-number">অর্ডার নম্বর: #TEC-10245</span><div className="track-card"><strong>অর্ডারের বর্তমান অবস্থা</strong><div className="track-steps"><span className="track-step"><i>✓</i>অর্ডার হয়েছে</span><span className="track-step"><i>✓</i>প্রস্তুত হচ্ছে</span><span className="track-step"><i>✓</i>পথে আছে</span><span className="track-step"><i>•</i>ডেলিভারি</span></div></div><Link href="/" className="btn btn-dark">হোমে ফিরে যান <Icon name="arrow-right" size={16} /></Link></div></div></section>;
}
