import { cn } from "../lib/utils";

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full px-4 py-2 border rounded-xl text-base outline-none focus:ring-2 focus:ring-black/40 transition",
        className
      )}
      {...props}
    />
  );
}
