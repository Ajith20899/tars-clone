"use client";

import React, { useState } from "react";

import { Check } from "lucide-react";

import { Label } from "@radix-ui/react-menu";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import ImageFallBack from "@/app/_library/image";

import AuthLayout from "../(common)/AuthLayout";

const categories = ["crypto", "stocks", "forex", "NFT"];

export default function FavoriteCategory() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <AuthLayout title="Select a Favorite categories">
      <div className="grid justify-between w-full grid-cols-2 gap-5 mt-5">
        {categories.map((d) => (
          <div
            onClick={() => setSelectedCategory(d)}
            className={cn(
              "relative cursor-pointer aspect-square rounded-xl border border-borderColor p-3 flex flex-col gap-3 justify-center items-center hover:border-primary hover:bg-primary/5",
              selectedCategory === d && "border-primary bg-primary/5"
            )}
          >
            <ImageFallBack src={`/${d}.svg`} alt={d} className="w-8 h-8" />
            <Label className="capitalize text-textPrimary">{d}</Label>
            {selectedCategory === d && (
              <Check
                size={"18"}
                color="hsl(var(--primary))"
                strokeWidth={4}
                className="absolute right-3 top-3"
              />
            )}
          </div>
        ))}
      </div>
      <Button className="mt-8 rounded-full">Next</Button>
    </AuthLayout>
  );
}
