/*prettier-ignore*/ import { css }  from "styled-components";
/*prettier-ignore*/ import { mp }   from "@/styled/abstracts/functions";

/*prettier-ignore*/ import { vars } from "@/styled/abstracts/variables";

const gunit: string = vars.global.unit;

export const spaceX = (
  name: string,
  top: number,
  bottom?: number,
  unit = gunit
) => css`
  ${mp(name)}-top: ${top}${unit};
  ${mp(name)}-bottom: ${bottom ?? top}${unit};
`;

export const spaceY = (
  name: string,
  left: number,
  right?: number,
  unit = gunit
) => css`
  ${mp(name)}-left: ${left}${unit};
  ${mp(name)}-right: ${right ?? left}${unit};
`;

export const spaceTr = (
  name: string,
  top: number,
  right?: number,
  unit = gunit
) => css`
  ${mp(name)}-top: ${top}${unit};
  ${mp(name)}-right: ${right ?? top}${unit};
`;

export const spaceTl = (
  name: string,
  top: number,
  left?: number,
  unit = gunit
) => css`
  ${mp(name)}-top: ${top}${unit};
  ${mp(name)}-left: ${left ?? top}${unit};
`;

export const spaceBr = (
  name: string,
  bottom: number,
  right?: number,
  unit = gunit
) => css`
  ${mp(name)}-bottom: ${bottom ?? right}${unit};
  ${mp(name)}-right: ${right}${unit};
`;

export const spaceBl = (
  name: string,
  bottom: number,
  left?: number,
  unit = gunit
) => css`
  ${mp(name)}-bottom: ${bottom ?? left}${unit};
  ${mp(name)}-left: ${left}${unit};
`;

export const spaceAuto = () => css`
  margin-left: auto;
  margin-right: auto;
`;
