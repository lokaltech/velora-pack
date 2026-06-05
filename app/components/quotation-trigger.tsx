"use client";

import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { useQuotationModal } from "./quotation-modal-provider";

type QuotationTriggerProps = ComponentPropsWithoutRef<"button"> & {
  asChild?: false;
};

export function QuotationTrigger({
  className,
  onClick,
  children,
  type = "button",
  ...props
}: QuotationTriggerProps) {
  const { openModal } = useQuotationModal();

  return (
    <button
      type={type}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openModal();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

type QuotationLinkProps = ComponentPropsWithoutRef<"a">;

export function QuotationLink({
  className,
  onClick,
  children,
  href = "#quotation",
  ...props
}: QuotationLinkProps) {
  const { openModal } = useQuotationModal();

  return (
    <a
      href={href}
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          event.preventDefault();
          openModal();
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
}
