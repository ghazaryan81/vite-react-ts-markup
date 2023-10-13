/*prettier-ignore*/ import { css }  from "styled-components";

export const media = (
  bp: string,
  cssContent: any,
  maxMin: string = "max"
) => css`
  @media screen and (${maxMin}-width: ${bp}) {
    ${cssContent}
  }
`;
