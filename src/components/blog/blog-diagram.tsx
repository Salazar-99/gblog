import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BlogDiagramProps = {
  children: ReactNode;
  className?: string;
};

export function BlogDiagram({ children, className }: BlogDiagramProps) {
  return (
    <div className={cn("not-prose my-8 flex justify-center", className)}>
      {children}
    </div>
  );
}
