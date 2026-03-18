"use client";

import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "model";
  text: string;
  timestamp: string;
}

export default function ChatMessage({ role, text, timestamp }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex items-end gap-2 mb-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Bot avatar */}
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mb-5"
          style={{ background: "linear-gradient(135deg,#f97316,#fb923c)" }}
        >
          <span className="text-white text-[10px] font-bold select-none">श्री</span>
        </div>
      )}

      <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} max-w-[82%]`}>
        {/* Bubble */}
        <div
          className={`
            px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed
            ${isUser
              ? "bg-orange-500 text-white rounded-br-sm"
              : "bg-white border border-orange-100 text-neutral-800 rounded-bl-sm shadow-sm"
            }
          `}
        >
          {isUser ? (
            // User messages: plain text
            <p className="whitespace-pre-wrap break-words">{text}</p>
          ) : (
            // Bot messages: full markdown rendering
            <div className="prose-chat">
              <ReactMarkdown
                components={{
                  // Paragraphs
                  p: ({ children }) => (
                    <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
                  ),
                  // Bold
                  strong: ({ children }) => (
                    <strong className="font-semibold text-orange-900">{children}</strong>
                  ),
                  // Italic
                  em: ({ children }) => (
                    <em className="italic text-orange-800">{children}</em>
                  ),
                  // Unordered lists
                  ul: ({ children }) => (
                    <ul className="mt-1.5 mb-2 space-y-1 pl-0">{children}</ul>
                  ),
                  // Ordered lists
                  ol: ({ children }) => (
                    <ol className="mt-1.5 mb-2 space-y-1 pl-0 list-none counter-reset-none">{children}</ol>
                  ),
                  // List items
                  li: ({ children }) => (
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  // Links — open in new tab and styled orange
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline underline-offset-2 hover:text-orange-700 break-all"
                    >
                      {children}
                    </a>
                  ),
                  // Inline code
                  code: ({ children }) => (
                    <code className="bg-orange-50 text-orange-700 px-1 py-0.5 rounded text-[12px] font-mono">
                      {children}
                    </code>
                  ),
                  // Headings
                  h1: ({ children }) => (
                    <h3 className="font-bold text-orange-900 text-sm mt-2 mb-1">{children}</h3>
                  ),
                  h2: ({ children }) => (
                    <h3 className="font-bold text-orange-900 text-sm mt-2 mb-1">{children}</h3>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-semibold text-orange-800 text-sm mt-2 mb-1">{children}</h3>
                  ),
                  // Horizontal rule
                  hr: () => <hr className="border-orange-100 my-2" />,
                  // Block quote
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-orange-300 pl-3 italic text-neutral-600 my-2">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {text}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Timestamp */}
        <span className="text-[10px] text-neutral-400 mt-1 px-1 select-none">{timestamp}</span>
      </div>
    </div>
  );
}
