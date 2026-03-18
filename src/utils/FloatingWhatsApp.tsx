'use client';

import { usePathname } from "next/navigation";

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  const whatsappNumber = "7302265809"; 
  const message = encodeURIComponent(
    "Hi, I want to enquire about Mathura Vrindavan tour packages."
  );

  return (
   <a
  href={`https://wa.me/${whatsappNumber}?text=${message}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="
    fixed bottom-14 right-6 z-[999]
    w-16 h-16
    rounded-full
    bg-[#25D366]
    flex items-center justify-center
    whatsapp-float whatsapp-glow
    transition-transform duration-300
    hover:scale-110
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="white"
    className="w-7 h-7"
  >
    <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.8L0 32l8.4-2.2c2.3 1.3 4.9 2 7.6 2h.1c8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.5h-.1c-2.4 0-4.7-.6-6.8-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.2 20.7 2.5 18.4 2.5 16 2.5 8.5 8.5 2.5 16 2.5S29.5 8.5 29.5 16 23.5 29 16 29zm7.7-9.9c-.4-.2-2.5-1.2-2.9-1.3-.4-.2-.7-.2-1 .2-.3.4-1.2 1.3-1.4 1.6-.3.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-1-2.4-1.3-3.3-.3-.9-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.2-1.3 3 0 1.8 1.3 3.6 1.5 3.8.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.2.8.9.3 1.7.3 2.3.2.7-.1 2.5-1 2.8-2 .3-1 .3-1.9.2-2-.1-.2-.4-.3-.8-.5z"/>
  </svg>
</a>

  );
}
