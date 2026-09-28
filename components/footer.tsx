import Link from 'next/link';
import { config } from '@/lib/data';
import { Icon } from './icons';
import { LogoMark } from './logo';

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div className="footer-brand-col"><Link href="/" className="brand footer-brand"><LogoMark size={30} gradientId="logo-gradient-footer" /><span className="brand-word">TECH<span className="brand-accent">ORA</span></span></Link><p>{config.tagline}</p><div className="footer-socials"><a href={config.socialLinks.facebook} aria-label="Facebook">f</a><a href={config.socialLinks.instagram} aria-label="Instagram">◎</a><a href={config.socialLinks.youtube} aria-label="YouTube">▶</a></div></div>
      <div className="footer-col"><h3>পণ্য</h3><Link href="/shop?category=laptop">ল্যাপটপ</Link><Link href="/shop?category=mobile">মোবাইল</Link><Link href="/shop?category=computer">কম্পিউটার</Link><Link href="/shop?category=gadget">গ্যাজেট</Link><Link href="/shop?category=accessories">অ্যাক্সেসরিজ</Link><Link href="/shop?category=home">হোম ইলেকট্রনিক্স</Link></div>
      <div className="footer-col"><h3>সহায়তা</h3><Link href="/shop">যোগাযোগ</Link><Link href="/shop">ডেলিভারি তথ্য</Link><Link href="/shop">ওয়ারেন্টি</Link><Link href="/shop">রিটার্ন ও রিপ্লেসমেন্ট</Link><Link href="/shop">সাধারণ জিজ্ঞাসা</Link></div>
      <div className="footer-contact"><h3>যোগাযোগ</h3><p><Icon name="message" size={17} /><span>WhatsApp<br /><strong>{config.whatsappDisplayNumber}</strong></span></p><p><Icon name="phone" size={17} /><span>ফোন<br /><strong>{config.phone}</strong></span></p><p><Icon name="mail" size={17} /><span>ইমেইল<br /><strong>{config.email}</strong></span></p><p><Icon name="map-pin" size={17} /><span>বাংলাদেশ</span></p></div>
    </div>
    <div className="container footer-bottom"><p>© ২০২৬ TECHORA. সর্বস্বত্ব সংরক্ষিত।</p><p>{config.footerInformation} <span className="footer-credit">Demo Website by <strong>CodePixel Web</strong></span></p></div>
  </footer>;
}
