/* prettier-ignore */ import { createGlobalStyle } from "styled-components";

export const Normalize = createGlobalStyle`
  ul,
  ol,
  p,
  h1,
  h2 {
    display: block;
    margin-right: 0;
    margin-left: 0;
  }

  h1,
  h2 {
    font-weight: 700;
  }

  ul {
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 4rem;
    list-style-type: disc;
  }

  ol {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 4rem;
    list-style-type: decimal;
  }

  li {
    display: list-item;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    margin-top: 0.67rem;
    margin-bottom: 0.67rem;
  }

 h2 {
   font-size: 1.5rem;
   margin-top: 0.83rem;
   margin-bottom: 0.83rem;
 }
`;
