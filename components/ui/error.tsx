"use client";

import React from "react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
    error,
    reset,
  }: {
    error: Error;
    reset: () => void;
  }) {
  return (
    <div className="grid min-h-[calc(100vh-98px)] place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <article className="text-center">
        <p className="text-base font-semibold text-primary">
          There was a problem
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight">
          {error.message}
        </h1>
      </article>
      <div>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
}
