/*prettier-ignore*/ import { css }  from "styled-components";

export const truncat = (numberLines: number) => css`
  white-space: normal;
  text-overflow: ellipsis;
  display: box !important;
  overflow: hidden;
  -webkit-line-clamp: ${numberLines};
  -webkit-box-orient: vertical;
`;
