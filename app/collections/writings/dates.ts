// Frontmatter dates are written by hand in Pacific time (PST/PDT).
export const POST_TIME_ZONE = "America/Los_Angeles";

// Offset of `timeZone` from UTC at the given instant, in milliseconds.
function zoneOffset(instant: number, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).formatToParts(instant);
  const get = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  const asUTC = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
  return asUTC - (instant - (instant % 1000));
}

// YAML reads `2026-10-10` (or `2026-10-10 21:00`) as UTC. Reinterpret that wall-clock
// time as Pacific so the post shows the date that was typed, regardless of server zone.
export function parsePostDate(raw: unknown): Date | undefined {
  if (raw == null || raw === "") return undefined;
  const typed = raw instanceof Date ? raw : new Date(String(raw));
  if (Number.isNaN(+typed)) return undefined;

  const wallClock = +typed;
  let instant = wallClock - zoneOffset(wallClock, POST_TIME_ZONE);
  // Re-check once in case the guess landed on the other side of a DST change.
  instant = wallClock - zoneOffset(instant, POST_TIME_ZONE);
  return new Date(instant);
}
