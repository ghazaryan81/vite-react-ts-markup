import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface InputProps extends CoreUIProps {}

export const Input: FC<InputProps> = ({ ...props }) => (
  <CoreUI {...props} as="input" />
);
