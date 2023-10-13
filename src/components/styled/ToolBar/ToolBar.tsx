/*prettier-ignore*/ import styled        from "styled-components";

/*prettier-ignore*/ import { fn, fr }    from "@/styled";

export interface ToolBarProps {}

export const ToolBar = styled.div<ToolBarProps>`
  border-bottom: 1px solid ${fn.color("violet-200", "0.5")};
  display: block;
  width: 100%;
`;
