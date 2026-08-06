import { ChevronDown } from "lucide-react";

type FaqItemProps = {
  question: string;
  answer: string;
};

/**
 * Native <details>/<summary> disclosure — no client JS, no state.
 * Keeps the FAQ interactive without adding a client component.
 */
export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group rounded-2xl border border-border bg-surface p-7 shadow-sm transition-shadow open:shadow-md">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronDown
          aria-hidden
          className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{answer}</p>
    </details>
  );
}
