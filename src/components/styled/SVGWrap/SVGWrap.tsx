/*prettier-ignore*/ import styled        from "styled-components";

/*prettier-ignore*/ import { fn, fr }    from "@/styled";

/*prettier-ignore*/ import { SizesType } from "@/types/main";

export interface SVGWrapAttrsProps {
  opacity?: string;
  color?: string;
}

export interface SVGWrapProps {
  opacity?: string;
  color?: string;
}

export const SVGWrap = styled.div.attrs<SVGWrapAttrsProps>(
  ({ color, opacity }) => ({
    color,
    opacity
  })
)<SVGWrapProps>`
  color: rgba(
    var(--color--${({ color }) => color}),
    ${({ opacity }) => opacity}
  );
  font-size: 0;
  margin-right: 0.3rem;
`;
