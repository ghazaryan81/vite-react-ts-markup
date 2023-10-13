import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface TdProps extends CoreUIProps {}

export const Td: FC<TdProps> = ({ ...props }) => <CoreUI {...props} as="td" />;
