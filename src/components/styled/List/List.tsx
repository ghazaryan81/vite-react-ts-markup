/*prettier-ignore*/ import styled        from "styled-components";

/*prettier-ignore*/ import { fn, fr }    from "@/styled";

/*prettier-ignore*/ import { SizesType } from "@/types/main";

export interface ListProps {}

export const List = styled.ul<ListProps>`
  text-decoration: none;
`;

export interface ListItProps {}

export const ListIt = styled.li<ListItProps>`
  font-size: var(--font-size--180);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${fn.color("violet-200", "0.5")};
`;
