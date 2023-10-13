/*prettier-ignore*/ import styled, { css } from "styled-components";

/*prettier-ignore*/ import { fn, fr }      from "@/styled";

/*prettier-ignore*/ import { SizesType }   from "@/types/main";

export interface InputProps {
  size?: SizesType;
}

export const Input = styled.input<InputProps>`
  ${fr.transition(["border-color", "background-color"])};

  appearance: none;
  padding: ${({ size }) =>
    size === "lg"
      ? "1.4rem 2.2rem"
      : size === "md"
      ? "1.2rem 2rem"
      : size === "sm"
      ? "1rem 1.8rem"
      : ""};
  background-color: ${fn.color("white-100")};
  border-radius: var(--border-radius--80);
  border: 1px solid ${fn.color("violet-200")};
  color: ${fn.color("violet-400")};
  display: block;

  ${fr.placeholder(css`
    color: ${fn.color("violet-400")};
  `)};

  ${fr.placeholderAnimateByX()}
  &:focus {
    background-color: ${fn.color("violet-200", "0.2")};
    border: 1px solid ${fn.color("violet-200", "0.2")};
  }
`;
