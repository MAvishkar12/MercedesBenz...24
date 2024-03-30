"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/app/utils/cn";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "h-10 w-full   border-neutral-100  rounded-lg bg-gray-900 dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 " />
      <IconClipboard className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <div className="relative z-40">{children}</div>
    </div>
  );
};
