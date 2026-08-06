import { Check } from "lucide-react";

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check aria-hidden className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          <span className="text-sm leading-6 text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}
