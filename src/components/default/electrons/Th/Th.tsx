import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface ThProps extends CoreUIProps {}

export const Th: FC<ThProps> = ({ ...props }) => <CoreUI {...props} as="th" />;
