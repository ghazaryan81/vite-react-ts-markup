import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface NavProps extends CoreUIProps {}

export const Nav: FC<NavProps> = ({ ...props }) => (
  <CoreUI {...props} as="nav" />
);
