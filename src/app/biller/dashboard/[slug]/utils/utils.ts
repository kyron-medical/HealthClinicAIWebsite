export function displayDate(date: Date | string | null | undefined) {
  if (!date) return "--:--";
  // Handle string or Date
  const d = typeof date === "string" ? new Date(date) : date;
  // Check for sentinel value (e.g., 1900-01-01)
  if (
    d instanceof Date &&
    !isNaN(d.getTime()) &&
    (d.toISOString().startsWith("1900-01-01") ||
      d.toISOString().startsWith("1000-01-01"))
  ) {
    return "--:--";
  }
  // Format as YYYY-MM-DD
  return d instanceof Date && !isNaN(d.getTime())
    ? d.toISOString().slice(0, 10)
    : "--:--";
}
