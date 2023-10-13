import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface TheadProps extends CoreUIProps {}

export const Thead: FC<TheadProps> = ({ ...props }) => (
  <CoreUI {...props} as="thead" />
);
