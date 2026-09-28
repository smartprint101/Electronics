import { config } from '@/lib/data';
import { Icon } from './icons';

export function WhatsAppButton() {
  const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage)}`;
  return <a className="whatsapp-float" href={url} target="_blank" rel="noreferrer" aria-label="WhatsApp-এ যোগাযোগ করুন"><span className="whatsapp-copy">{config.whatsappCta}</span><span className="whatsapp-circle"><Icon name="message" size={23} /></span></a>;
}
