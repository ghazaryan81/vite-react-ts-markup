/*prettier-ignore*/ import { css }  from "styled-components";

export const layerXyCenter = () => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const layerYCenter = () => css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const layerXCenter = () => css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
