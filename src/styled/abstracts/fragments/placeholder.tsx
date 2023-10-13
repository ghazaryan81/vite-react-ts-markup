/*prettier-ignore*/ import { css }  from "styled-components";

export const placeholder = (cssContent: any) => css`
  &:-moz-placeholder {
    ${cssContent}
  }
  &::-moz-placeholder {
    ${cssContent}
  }
  &:-ms-input-placeholder {
    ${cssContent}
  }
  &::-webkit-input-placeholder {
    ${cssContent}
  }
`;

export const placeholderAnimateByXStart = () => css`
  text-indent: 0;
  opacity: 1;
  transition: linear all 0.16s;
`;

export const placeholderAnimateByXEnd = (
  position: string = "r",
  delta: string = "20px"
) => css`
  text-indent: ${position === "l" ? "-" : ""}${delta};
  opacity: 0;
  transition: linear all 0.16s;
`;

export const placeholderAnimateByX = () => css`
  &::-webkit-input-placeholder {
    ${placeholderAnimateByXStart()}
  }
  &::-moz-placeholder {
    ${placeholderAnimateByXStart()}
  }
  &:-moz-placeholder {
    ${placeholderAnimateByXStart()}
  }
  &:-ms-input-placeholder {
    ${placeholderAnimateByXStart()}
  }
  &:focus::-webkit-input-placeholder {
    ${placeholderAnimateByXEnd()}
  }
  &:focus::-moz-placeholder {
    ${placeholderAnimateByXEnd()}
  }
  &:focus:-moz-placeholder {
    ${placeholderAnimateByXEnd()}
  }
  &:focus:-ms-input-placeholder {
    ${placeholderAnimateByXEnd()}
  }
`;
