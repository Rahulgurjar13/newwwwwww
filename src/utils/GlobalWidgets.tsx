"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const GlobalQuickEnquiry = dynamic(
  () => import("@/components/Home/GlobalWrapQuickEnquiry"),
  { ssr: false }
);

const FloatingActionStack = dynamic(
  () => import("@/utils/FloatingActionStack"),
  { ssr: false }
);

const ChatbotWidget = dynamic(
  () => import("@/utils/Chatbot/ChatbotWidget"),
  { ssr: false }
);

const HIDDEN_PATHS = ["/2-days-mathura-vrindavan-tour"];

export default function GlobalWidgets() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  if (HIDDEN_PATHS.includes(pathname)) return null;

  return (
    <>
      <GlobalQuickEnquiry />
      <FloatingActionStack />
      <ChatbotWidget />
    </>
  );
}