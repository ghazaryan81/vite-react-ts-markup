import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface FormProps extends CoreUIProps {}

export const Form: FC<FormProps> = ({ ...props }) => (
  <CoreUI {...props} as="form" />
);
