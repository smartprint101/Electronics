import type { Metadata } from 'next';
// Premium self-hosted typography (Fontsource) — Bengali-first with a premium Latin companion.
import '@fontsource-variable/noto-sans-bengali/wght.css'; // variable weight 100–900, bengali + latin subsets
import '@fontsource-variable/manrope/wght.css'; // variable weight 200–800, latin
import './globals.css';
import { ClientProviders } from '@/components/client-providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'TECHORA — প্রিমিয়াম ইলেকট্রনিক্স ও গ্যাজেট শপ',
  description: 'TECHORA হলো বাংলাদেশি মার্কেটের জন্য তৈরি একটি প্রিমিয়াম Electronics E-commerce Demo Website by CodePixel Web.',
  keywords: ['electronics Bangladesh', 'laptop', 'mobile', 'gadget', 'TECHORA'],
  openGraph: { title: 'TECHORA — প্রযুক্তি হোক আপনার প্রতিদিনের সঙ্গী', description: 'বাংলাদেশের জন্য premium technology shopping experience.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body><ClientProviders><Header /><main>{children}</main><Footer /><WhatsAppButton /></ClientProviders></body></html>;
}
