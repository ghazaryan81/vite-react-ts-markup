/*prettier-ignore*/ import { css }   from "styled-components";

export const flexXYCenter = (display = "flex") => css`
  display: ${display};
  justify-content: center;
  align-items: center;
`;

export const flexYCenter = (display = "flex") => css`
  display: ${display};
  align-items: center;
`;

export const flexXCenter = (display = "flex") => css`
  display: ${display};
  align-content: center;
`;

export const flexXEnd = (display = "flex") => css`
  display: ${display};
  align-content: flex-end;
`;

export const flexXBetween = (display = "flex") => css`
  display: ${display};
  justify-content: space-between;
`;

export const flexXBetweenYCenter = (
  display = "flex",
  flexDirection = "column"
) => css`
  display: ${display};
  flex-direction: ${flexDirection};
  align-items: center;
`;

export const flexReversYCenter = (
  display = "flex",
  flexDirection = "column"
) => css`
  flex-direction: ${flexDirection};
  align-items: center;
`;
