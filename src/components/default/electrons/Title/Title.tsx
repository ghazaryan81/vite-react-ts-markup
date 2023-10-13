import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface TitleProps extends CoreUIProps {}

export const Title: FC<TitleProps> = ({ ...props }) => (
  <CoreUI {...props} as="title" />
);
