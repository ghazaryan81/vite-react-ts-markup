import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface EmProps extends CoreUIProps {}

export const Em: FC<EmProps> = ({ ...props }) => <CoreUI {...props} as="em" />;
