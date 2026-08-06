import { Check, ShieldAlert, CircleCheck } from "lucide-react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

/**
 * Abstract product mockups used on the homepage hero and the Platform
 * page — no stock imagery, no fake screenshots claiming to be the
 * real product UI. Each is a stylized, brand-colored illustration of
 * what the product does.
 */

function StatTile({ label, value, primary }: { label: string; value: string; primary?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-muted/40 p-3">
      <p className={cn("text-xl font-semibold", primary ? "text-primary" : "text-foreground")}>
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

const CASES = [
  { id: "CASE-4471", label: "Anomalous login — APAC region", severity: "High" },
  { id: "CASE-4468", label: "Endpoint isolation completed", severity: "Resolved" },
  { id: "CASE-4462", label: "Policy drift detected — AWS", severity: "Medium" },
];

export function MellivorOneVisual() {
  return (
    <BrowserFrame>
      <div className="grid grid-cols-3 gap-3">
        <StatTile label="Open cases" value="24" />
        <StatTile label="Critical" value="3" primary />
        <StatTile label="Resolved (7d)" value="118" />
      </div>

      <div className="mt-4 space-y-2">
        {CASES.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border border-border px-3 py-2"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="font-mono text-xs text-muted-foreground">{item.id}</span>
              <span className="truncate text-xs text-foreground">{item.label}</span>
            </div>
            <Tag>{item.severity}</Tag>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

const SIGNAL_BARS = [30, 45, 25, 55, 35, 80, 40, 60, 30, 65, 45, 38];

const ALERTS = [
  { icon: ShieldAlert, text: "Lateral movement blocked — endpoint isolated", time: "2s ago" },
  { icon: CircleCheck, text: "Playbook completed — access revoked", time: "41s ago" },
];

export function Behind24Visual() {
  return (
    <BrowserFrame>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Live
        </span>
        <span className="text-xs text-muted-foreground">Last 60 seconds</span>
      </div>

      <div className="mt-4 flex h-16 items-end gap-1">
        {SIGNAL_BARS.map((height, index) => (
          <span
            key={index}
            style={{ height: `${height}%` }}
            className={cn(
              "flex-1 rounded-sm",
              height === Math.max(...SIGNAL_BARS) ? "bg-primary" : "bg-border"
            )}
          />
        ))}
      </div>

      <div className="mt-4 space-y-2">
        {ALERTS.map((alert) => (
          <div key={alert.text} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
            <alert.icon aria-hidden className="h-4 w-4 flex-shrink-0 text-primary" />
            <span className="flex-1 truncate text-xs text-foreground">{alert.text}</span>
            <span className="text-xs text-muted-foreground">{alert.time}</span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

const GRAPH_NODES = [
  { x: 42, y: 32, active: true },
  { x: 268, y: 36 },
  { x: 58, y: 138 },
  { x: 252, y: 132 },
  { x: 150, y: 18 },
];
const CENTER = { x: 150, y: 82 };

export function AIPlatformVisual() {
  return (
    <BrowserFrame>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground">Signal correlation</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          <Check aria-hidden className="h-3 w-3" />
          98% confidence
        </span>
      </div>

      <svg viewBox="0 0 300 164" className="mt-2 h-40 w-full" aria-hidden>
        {GRAPH_NODES.map((node, index) => (
          <line
            key={index}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={node.x}
            y2={node.y}
            stroke={node.active ? "var(--color-primary)" : "var(--color-border)"}
            strokeWidth={node.active ? 2 : 1.5}
          />
        ))}
        {GRAPH_NODES.map((node, index) => (
          <circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={node.active ? 7 : 5}
            fill={node.active ? "var(--color-primary)" : "var(--color-border)"}
          />
        ))}
        <circle cx={CENTER.x} cy={CENTER.y} r={11} fill="var(--color-primary)" />
      </svg>
    </BrowserFrame>
  );
}
