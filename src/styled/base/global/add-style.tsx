/* prettier-ignore */ import { css, createGlobalStyle }  from "styled-components";
/* prettier-ignore */ import { fr, fn}              from "@/styled";

export const AddStyle = createGlobalStyle`${css`
  body {
    ${fr.scrollBar()};
    ${fr.selection()};
    color: ${fn.color("violet-400")};
  }

  body,
  button,
  input {
    font-family: var(--font-family--poppins);
    font-size: var(--font-size--180);
    font-weight: var(--font-weight--300);
  }
`}`;
