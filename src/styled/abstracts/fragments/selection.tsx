/*prettier-ignore*/ import { css }   from "styled-components";

/*prettier-ignore*/ import { color } from "@/styled/abstracts/functions";

export const selection = (
  textColor = `${color("white-100")}`,
  textBg = `${color("violet-400")}`
) => css`
  ::selection {
    color: ${textColor};
    background: ${textBg};
  }
`;
