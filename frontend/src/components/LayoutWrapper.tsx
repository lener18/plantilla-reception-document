import React from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="ml-64 min-h-screen flex flex-col bg-background text-on-background">
      {children}
    </main>
  );
}
