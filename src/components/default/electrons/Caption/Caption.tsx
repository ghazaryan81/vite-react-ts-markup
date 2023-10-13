import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface CaptionProps extends CoreUIProps {}

export const Caption: FC<CaptionProps> = ({ ...props }) => (
  <CoreUI {...props} as="caption" />
);
