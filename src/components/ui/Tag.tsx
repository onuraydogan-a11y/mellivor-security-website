export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}
