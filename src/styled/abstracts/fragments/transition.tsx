/*prettier-ignore*/ import { css }  from "styled-components";

export const transition = (
  propArr: (
    | string
    | { "prop": string; "duration"?: string; "ease"?: string }
  )[],
  duration: string = "--duration--160",
  ease: string = "--ease--300"
) => {
  let willChange = "";
  let transition = "";
  propArr.forEach((item) => {
    willChange += typeof item === "string" ? `${item},` : `${item.prop},`;
    transition +=
      typeof item === "string"
        ? `${item} var(${duration}) var(${ease}),`
        : typeof item === "object"
        ? `${item.prop} var(${item.duration ?? duration}) var(${
            item.ease ?? ease
          }),`
        : ``;
  });

  return css`
    transition: ${transition.slice(0, -1)};
    will-change: ${willChange.slice(0, -1)};
  `;
};
