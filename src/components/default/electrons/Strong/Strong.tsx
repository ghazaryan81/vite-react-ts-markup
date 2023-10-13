import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface StrongProps extends CoreUIProps {}

export const Strong: FC<StrongProps> = ({ ...props }) => (
  <CoreUI {...props} as="strong" />
);
