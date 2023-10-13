export const position = (position = "rel") =>
  position === "rel"
    ? "relative"
    : position === "abs"
    ? "absolute"
    : position === "fix"
    ? "fixed"
    : "";
