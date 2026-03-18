"use client";

import { useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export default function ChatInput({ value, onChange, onSend, isLoading }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea up to ~3 lines
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 90) + "px";
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && value.trim()) onSend();
    }
  };

  return (
    <div
      className="flex items-end gap-2 px-3 py-3 border-t border-orange-100"
      style={{ background: "#fffbf7" }}
    >
      <textarea
        ref={textareaRef}
        rows={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        placeholder="Ask about tours, temples, timings…"
        className="
          flex-1 resize-none bg-white border border-orange-200 rounded-xl px-3 py-2.5
          text-sm text-neutral-800 placeholder-neutral-400 outline-none
          focus:border-orange-400 focus:ring-2 focus:ring-orange-100
          transition-all duration-200 disabled:opacity-60 leading-snug
        "
        style={{ maxHeight: 90, overflowY: "auto" }}
      />

      <button
        onClick={() => { if (!isLoading && value.trim()) onSend(); }}
        disabled={isLoading || !value.trim()}
        aria-label="Send message"
        className="
          w-10 h-10 rounded-xl flex items-center justify-center shrink-0
          bg-orange-500 hover:bg-orange-600 disabled:bg-orange-200
          text-white transition-all duration-200 active:scale-95
          disabled:cursor-not-allowed shadow-sm
        "
      >
        {isLoading ? (
          /* Spinner */
          <svg
            className="w-4 h-4 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        ) : (
          <Send size={16} />
        )}
      </button>
    </div>
  );
}
