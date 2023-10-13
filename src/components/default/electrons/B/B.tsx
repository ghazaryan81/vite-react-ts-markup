import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface BProps extends CoreUIProps {}

export const B: FC<BProps> = ({ ...props }) => <CoreUI {...props} as="b" />;
