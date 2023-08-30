"use client";

import React from "react";

import Character from "./components/character";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Character />
    </main>
  );
}
