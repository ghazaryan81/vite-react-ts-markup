import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface SmallProps extends CoreUIProps {}

export const Small: FC<SmallProps> = ({ ...props }) => (
  <CoreUI {...props} as="small" />
);
