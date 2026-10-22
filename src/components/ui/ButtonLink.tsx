import type { ComponentPropsWithoutRef } from "react";
import { ArrowUpRight } from "lucide-react";
type Props = ComponentPropsWithoutRef<"a"> & { variant?: "primary" | "secondary" };
export default function ButtonLink({ children, variant = "primary", className = "", ...props }: Props) {
  return <a className={`button-link button-${variant} ${className}`} {...props}>{children}<ArrowUpRight size={17} aria-hidden="true" /></a>;
}
