import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface TbodyProps extends CoreUIProps {}

export const Tbody: FC<TbodyProps> = ({ ...props }) => (
  <CoreUI {...props} as="tbody" />
);
