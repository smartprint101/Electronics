import type { SVGProps } from 'react';

type IconName =
  | 'arrow-right' | 'arrow-up-right' | 'bag' | 'bar-chart' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right'
  | 'clock' | 'close' | 'compare' | 'cpu' | 'credit-card' | 'edit' | 'filter' | 'headphones' | 'heart' | 'home'
  | 'laptop' | 'lock' | 'mail' | 'map-pin' | 'menu' | 'minus' | 'monitor' | 'phone' | 'plus' | 'search'
  | 'send' | 'info' | 'settings' | 'shield' | 'shopping-bag' | 'sliders' | 'star' | 'trash' | 'truck' | 'tv' | 'user'
  | 'watch' | 'wifi' | 'x' | 'zap' | 'cable' | 'desktop' | 'message' | 'help' | 'package' | 'refresh';

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size = 20, strokeWidth = 1.8, ...props }: Props) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, ...props };
  switch (name) {
    case 'arrow-right': return <svg {...common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;
    case 'arrow-up-right': return <svg {...common}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>;
    case 'bag': return <svg {...common}><path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>;
    case 'bar-chart': return <svg {...common}><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V7"/><path d="M16 16v-8"/></svg>;
    case 'check': return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
    case 'chevron-down': return <svg {...common}><path d="m6 9 6 6 6-6"/></svg>;
    case 'chevron-left': return <svg {...common}><path d="m15 18-6-6 6-6"/></svg>;
    case 'chevron-right': return <svg {...common}><path d="m9 18 6-6-6-6"/></svg>;
    case 'clock': return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'close': case 'x': return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>;
    case 'compare': return <svg {...common}><path d="M8 3v18M16 3v18"/><path d="M3 8h5M16 8h5M3 16h5M16 16h5"/></svg>;
    case 'cpu': return <svg {...common}><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>;
    case 'credit-card': return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></svg>;
    case 'edit': return <svg {...common}><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>;
    case 'filter': return <svg {...common}><path d="M4 5h16M7 12h10M10 19h4"/></svg>;
    case 'headphones': return <svg {...common}><path d="M4 14a8 8 0 0 1 16 0"/><path d="M4 14v4a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2ZM20 14v4a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z"/></svg>;
    case 'heart': return <svg {...common}><path d="M20.8 8.6c0 5.5-8.8 10.4-8.8 10.4S3.2 14.1 3.2 8.6A4.4 4.4 0 0 1 12 6.2a4.4 4.4 0 0 1 8.8 2.4Z"/></svg>;
    case 'home': return <svg {...common}><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>;
    case 'laptop': return <svg {...common}><rect x="5" y="4" width="14" height="10" rx="1"/><path d="M3 18h18M8 18l1-2h6l1 2"/></svg>;
    case 'lock': return <svg {...common}><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>;
    case 'mail': return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
    case 'map-pin': return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case 'menu': return <svg {...common}><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
    case 'minus': return <svg {...common}><path d="M5 12h14"/></svg>;
    case 'monitor': return <svg {...common}><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/></svg>;
    case 'phone': return <svg {...common}><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10 5h4M11 18.5h2"/></svg>;
    case 'plus': return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case 'search': return <svg {...common}><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>;
    case 'send': return <svg {...common}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>;
    case 'settings': return <svg {...common}><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m4.9 4.9 1.4 1.4M17.7 17.7l1.4 1.4M4 12H2M22 12h-2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4M12 4V2M12 22v-2"/></svg>;
    case 'shield': return <svg {...common}><path d="M12 3 20 6v5c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-4.8"/></svg>;
    case 'shopping-bag': return <svg {...common}><path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><path d="M8 12h.01M16 12h.01"/></svg>;
    case 'sliders': return <svg {...common}><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h10M18 18h2"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="18" r="2"/></svg>;
    case 'star': return <svg {...common}><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>;
    case 'trash': return <svg {...common}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"/></svg>;
    case 'truck': return <svg {...common}><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="1.5"/><circle cx="18" cy="19" r="1.5"/></svg>;
    case 'tv': return <svg {...common}><rect x="3" y="5" width="18" height="12" rx="1"/><path d="m8 2 4 3 4-3M12 17v4M8 21h8"/></svg>;
    case 'user': return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case 'watch': return <svg {...common}><rect x="7" y="6" width="10" height="12" rx="3"/><path d="M9 2h6v4H9zM9 18h6v4H9z"/></svg>;
    case 'wifi': return <svg {...common}><path d="M2 8.5a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0M12 19h.01"/></svg>;
    case 'zap': return <svg {...common}><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/></svg>;
    case 'cable': return <svg {...common}><path d="M7 3v5a5 5 0 0 0 5 5h0a5 5 0 0 1 5 5v3"/><path d="M4 3h6M14 21h6"/></svg>;
    case 'desktop': return <svg {...common}><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/></svg>;
    case 'message': return <svg {...common}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9.6 9.6 0 0 1-4-.8L4 20l1.7-3.6A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 1 1 20 11.5Z"/></svg>;
    case 'help': return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.7 2.7 0 1 1 4.2 2.2c-1 .7-1.7 1.1-1.7 2.8M12 17h.01"/></svg>;
    case 'package': return <svg {...common}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.5 7.7 7.5 4.2 7.5-4.2M12 12v9"/></svg>;
    case 'refresh': return <svg {...common}><path d="M20 11a8 8 0 0 0-14.7-3L3 11"/><path d="M3 5v6h6M4 13a8 8 0 0 0 14.7 3L21 13"/><path d="M21 19v-6h-6"/></svg>;
    default: return null;
  }
}
