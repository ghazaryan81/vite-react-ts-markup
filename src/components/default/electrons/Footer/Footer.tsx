import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface FooterProps extends CoreUIProps {}

export const Footer: FC<FooterProps> = ({ ...props }) => (
  <CoreUI {...props} as="footer" />
);
