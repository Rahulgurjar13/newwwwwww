"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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

export default function GlobalWidgets() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return (
    <>
      <GlobalQuickEnquiry />
      <FloatingActionStack />
      <ChatbotWidget />
    </>
  );
}