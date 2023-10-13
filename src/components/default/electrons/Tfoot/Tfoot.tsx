import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface TfootProps extends CoreUIProps {}

export const Tfoot: FC<TfootProps> = ({ ...props }) => (
  <CoreUI {...props} as="tfoot" />
);
