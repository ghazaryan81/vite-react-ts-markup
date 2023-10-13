import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface LiProps extends CoreUIProps {}

export const Li: FC<LiProps> = ({ ...props }) => <CoreUI {...props} as="li" />;
