"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";
import { usePathname } from "next/navigation";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickReplies from "./QuickReplies";

interface Message {
  role: "user" | "model";
  text: string;
  timestamp: string;
}

interface LeadInfo {
  name: string;
  phone: string;
}

function getTimestamp() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function buildGreeting(name: string): Message {
  return {
    role: "model",
    text: `Jai Shri Krishna 🙏 Namaste **${name}**! I'm Radha, your personal spiritual travel guide for Mathura and Vrindavan. How can I help you plan your divine yatra today?`,
    timestamp: getTimestamp(),
  };
}

const LS_KEY = "vmg_lead";

export default function ChatbotWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lead, setLead] = useState<LeadInfo | null>(null);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formError, setFormError] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  if (pathname.startsWith("/admin")) return null;

  // Restore lead from localStorage on mount
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) {
      const parsed: LeadInfo = JSON.parse(saved);
      setLead(parsed);
      setMessages([buildGreeting(parsed.name)]);
    }
  }, []);

  // Listen for open-chatbot event
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handler = () => setOpen((o) => !o);
    window.addEventListener("open-chatbot", handler);
    return () => window.removeEventListener("open-chatbot", handler);
  }, []);

  // Scroll to bottom
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (open) setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  }, [messages, isLoading, open]);

  // Lock body scroll on mobile
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (open && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = formName.trim();
    const phone = formPhone.trim();

    if (!name) { setFormError("Please enter your name."); return; }
    if (!/^[0-9]{10}$/.test(phone)) { setFormError("Please enter a valid 10-digit mobile number."); return; }

    const info: LeadInfo = { name, phone };
    localStorage.setItem(LS_KEY, JSON.stringify(info));
    setLead(info);
    setMessages([buildGreeting(name)]);
    setFormError("");
  }

  const hasUserMessages = messages.some((m) => m.role === "user");

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", text: text.trim(), timestamp: getTimestamp() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputValue("");
    setIsLoading(true);

    const geminiHistory = updatedMessages.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: geminiHistory }),
      });
      const data = await res.json();
      const replyText: string =
        data.reply || data.error || "Sorry, I couldn't get a response. Please try again. 🙏";
      setMessages((prev) => [
        ...prev,
        { role: "model", text: replyText, timestamp: getTimestamp() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Oops! Something went wrong. Please try again or contact us at +91 7302265809 🙏",
          timestamp: getTimestamp(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  if (!open) return null;

  return (
    <>
      {/* Backdrop — mobile */}
      <div
        className="fixed inset-0 z-[994] bg-black/40 sm:hidden"
        onClick={() => setOpen(false)}
      />

      {/* Chat Window */}
      <div
        className="
          fixed z-[995]
          inset-x-0 bottom-0 top-0
          sm:inset-auto sm:bottom-28 sm:right-4
          sm:w-[380px] sm:h-[590px]
          transition-all duration-300
        "
      >
        <div
          className="flex flex-col w-full h-full rounded-none sm:rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 8px 40px rgba(249,115,22,0.2), 0 2px 16px rgba(0,0,0,0.1)",
            border: "1px solid rgba(249,115,22,0.2)",
          }}
        >
          {/* ── Header ── */}
          <div className="shrink-0" style={{ background: "linear-gradient(135deg,#ea580c 0%,#f97316 60%,#fb923c 100%)" }}>
            <div className="flex items-center gap-3 px-4 py-4">
              <div className="relative shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.18)", border: "2px solid rgba(255,255,255,0.35)" }}
                >
                  <span className="text-white font-bold select-none" style={{ fontSize: "18px", fontFamily: "serif" }}>श्री</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-orange-500 bg-green-400" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-[17px] leading-snug tracking-tight">Radha</span>
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.25)" />
                    <path d="M6 10.5L8.5 13L14 7.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-orange-50 text-[12px] leading-snug font-medium mt-0.5">Mathura Vrindavan Tour Guide</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse shrink-0" />
                  <span className="text-orange-100 text-[11px]">Online · Typically replies in seconds</span>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0"
                style={{ background: "rgba(0,0,0,0.15)" }}
              >
                <X size={18} />
              </button>
            </div>
            <div className="px-4 py-1.5 flex items-center gap-2" style={{ background: "rgba(0,0,0,0.1)" }}>
              <svg className="w-3 h-3 text-orange-100 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-orange-100 text-[11px]">Mathura–Vrindavan · Braj Spiritual Tours since 2018</span>
            </div>
          </div>

          {/* ── LEAD CAPTURE (show if no lead yet) ── */}
          {!lead ? (
            <div className="flex-1 flex flex-col justify-center px-6 py-8" style={{ background: "#fffbf5" }}>
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">🙏</div>
                <h3 className="text-lg font-bold text-gray-800">Welcome to Mathura Vrindavan Guide</h3>
                <p className="text-sm text-gray-500 mt-1">Please share your details to start chatting with Radha, your personal spiritual travel guide.</p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => { setFormName(e.target.value); setFormError(""); }}
                    placeholder="e.g. Rohit Sharma"
                    className="
                      w-full px-4 py-3 rounded-xl
                      border border-orange-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                      text-sm text-gray-800 bg-white outline-none
                      transition-all duration-200
                    "
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Mobile Number *</label>
                  <div className="flex">
                    <span className="
                      flex items-center px-3 rounded-l-xl
                      border border-r-0 border-orange-200
                      bg-orange-50 text-gray-600 text-sm font-medium
                    ">🇮🇳 +91</span>
                    <input
                      type="tel"
                      value={formPhone}
                      onChange={(e) => { setFormPhone(e.target.value.replace(/\D/g, "").slice(0, 10)); setFormError(""); }}
                      placeholder="10-digit number"
                      className="
                        flex-1 px-4 py-3 rounded-r-xl
                        border border-orange-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                        text-sm text-gray-800 bg-white outline-none
                        transition-all duration-200
                      "
                    />
                  </div>
                </div>

                {/* Error */}
                {formError && (
                  <p className="text-xs text-red-500 font-medium">{formError}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    w-full py-3 rounded-xl
                    text-white font-semibold text-sm
                    flex items-center justify-center gap-2
                    transition-all duration-200
                    hover:opacity-90 active:scale-95
                  "
                  style={{ background: "linear-gradient(135deg,#f97316,#fb923c)" }}
                >
                  <Send size={16} />
                  Start Chatting
                </button>

                <p className="text-[10px] text-gray-400 text-center">
                  Your details are safe and will only be used for travel assistance. 🔒
                </p>
              </form>
            </div>
          ) : (
            /* ── CHAT (after lead capture) ── */
            <>
              <div
                className="flex-1 overflow-y-auto py-4 px-3.5 scroll-smooth"
                style={{ background: "#fffbf5" }}
              >
                {messages.map((msg, i) => (
                  <ChatMessage key={i} role={msg.role} text={msg.text} timestamp={msg.timestamp} />
                ))}

                {isLoading && (
                  <div className="flex items-end gap-2 mb-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg,#f97316,#fb923c)" }}
                    >
                      <span className="text-white text-xs font-bold" style={{ fontFamily: "serif" }}>श्री</span>
                    </div>
                    <div className="bg-white border border-orange-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                      <div className="flex gap-1 items-center">
                        {[0, 1, 2].map((i) => (
                          <span key={i} className="w-2 h-2 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {!hasUserMessages && !isLoading && (
                <div style={{ background: "#fffbf5" }}>
                  <QuickReplies onSelect={sendMessage} />
                </div>
              )}

              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSend={() => sendMessage(inputValue)}
                isLoading={isLoading}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
