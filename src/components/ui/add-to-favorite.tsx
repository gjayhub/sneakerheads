"use client";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useFavorite } from "@/utils/store/useShoes";

import { Heart } from "lucide-react";

export default function AddToFavorite({
  id,
  className,
}: {
  id: number;
  className?: string;
}) {
  const { isFavorite, addFavorite } = useFavorite();

  const handleAddToFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    addFavorite(id);
    if (isFavorite(id)) {
      toast({
        title: `Shoe is Added to the favorites`,
        className: "bg-green-200 z-50",
      });
    }
  };
  return (
    <button type='submit' onClick={handleAddToFavorite}>
      <Heart
        className={cn("absolute top-2 right-2", className)}
        fill={isFavorite(id) ? "black" : "transparent"}
        size={30}
      />
    </button>
  );
}
