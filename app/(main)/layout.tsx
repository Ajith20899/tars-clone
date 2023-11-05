import React from "react";

import NavBar from "./(navbar)";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-backgroundShade h-full w-full grid grid-cols-[3.5rem_1fr] p-5 gap-4">
      <NavBar />
      {children}
    </div>
  );
}
