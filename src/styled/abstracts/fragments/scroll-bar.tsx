/*prettier-ignore*/ import { css }   from "styled-components";

/*prettier-ignore*/ import { color } from "@/styled/abstracts/functions";

export const scrollBar = (
  width = "8px",
  thumbBg = `${color("violet-400", "0.5")}`,
  trackBg = `${color("violet-200", "0.5")}`
) => css`
  &::-webkit-scrollbar {
    width: ${width};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${thumbBg};
  }

  &::-webkit-scrollbar-track {
    background-color: ${trackBg};
  }
`;
