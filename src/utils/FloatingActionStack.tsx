"use client";

import { usePathname } from "next/navigation";

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-6 h-6">
      <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.8L0 32l8.4-2.2c2.3 1.3 4.9 2 7.6 2h.1c8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.5h-.1c-2.4 0-4.7-.6-6.8-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.2 20.7 2.5 18.4 2.5 16 2.5 8.5 8.5 2.5 16 2.5S29.5 8.5 29.5 16 23.5 29 16 29zm7.7-9.9c-.4-.2-2.5-1.2-2.9-1.3-.4-.2-.7-.2-1 .2-.3.4-1.2 1.3-1.4 1.6-.3.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-1-2.4-1.3-3.3-.3-.9-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.2-1.3 3 0 1.8 1.3 3.6 1.5 3.8.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.2.8.9.3 1.7.3 2.3.2.7-.1 2.5-1 2.8-2 .3-1 .3-1.9.2-2-.1-.2-.4-.3-.8-.5z" />
    </svg>
  );
}

// Messenger-style chat bubble icon
function ChatBubbleIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 2C7.373 2 2 7.029 2 13.2c0 3.33 1.515 6.32 3.923 8.38L5.6 26l4.44-2.34A12.6 12.6 0 0014 24.4c6.627 0 12-5.029 12-11.2C26 7.029 20.627 2 14 2z"
        fill="white"
      />
      <circle cx="9" cy="13" r="1.5" fill="#f97316" />
      <circle cx="14" cy="13" r="1.5" fill="#f97316" />
      <circle cx="19" cy="13" r="1.5" fill="#f97316" />
    </svg>
  );
}

const WHATSAPP_NUMBER = "7302265809";
const WHATSAPP_MSG = encodeURIComponent("Hi, I want to enquire about Mathura Vrindavan tour packages.");

export default function FloatingActionStack() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  function openChatbot() {
    window.dispatchEvent(new CustomEvent("open-chatbot"));
  }

  return (
    <div className="fixed bottom-6 right-5 z-[990] flex flex-col items-center gap-3">

      {/* AI Chat — messenger-style bubble icon */}
      <button
        onClick={openChatbot}
        aria-label="Chat with Radha AI"
        className="
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-xl shadow-orange-300/50
          ring-2 ring-white
          transition-transform duration-200 hover:scale-110 active:scale-95
          cursor-pointer
        "
        style={{ background: "linear-gradient(135deg,#f97316,#fb923c)" }}
      >
        <ChatBubbleIcon />
      </button>

      {/* WhatsApp — no label */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        className="
          w-14 h-14 rounded-full
          bg-[#25D366]
          flex items-center justify-center
          shadow-xl shadow-green-300/50
          ring-2 ring-white
          transition-transform duration-200 hover:scale-110 active:scale-95
        "
      >
        <WhatsAppIcon />
      </a>

    </div>
  );
}
