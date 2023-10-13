/*prettier-ignore*/ import styled        from "styled-components";

/*prettier-ignore*/ import { fn, fr }    from "@/styled";

/*prettier-ignore*/ import { SizesType } from "@/types/main";

export interface ButtonProps {
  size?: SizesType;
}

export const Button = styled.button<ButtonProps>`
  padding: ${({ size }) =>
    size === "lg"
      ? "1.4rem 2.2rem"
      : size === "md"
      ? "1.2rem 2rem"
      : size === "sm"
      ? "1rem 1.8rem"
      : ""};
  background-color: ${fn.color("violet-200", "0.2")};
  border: 1px solid ${fn.color("violet-200", "0.2")};
  border-radius: var(--border-radius--80);
  color: ${fn.color("violet-400")};
  ${fr.transition(["border-color", "background-color"])};
  appearance: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: ${fn.color("violet-200", "0.4")};
    border: 1px solid ${fn.color("violet-200")};
  }
`;
