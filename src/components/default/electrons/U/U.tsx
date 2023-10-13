import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface UProps extends CoreUIProps {}

export const U: FC<UProps> = ({ ...props }) => <CoreUI {...props} as="u" />;
