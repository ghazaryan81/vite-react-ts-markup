export function color(color: string, opacity: string = "1") {
  return opacity === "1"
    ? `rgb(var(--color--${color}))`
    : `rgba(var(--color--${color}), ${opacity})`;
}
