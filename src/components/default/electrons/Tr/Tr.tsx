import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface TrProps extends CoreUIProps {}

export const Tr: FC<TrProps> = ({ ...props }) => <CoreUI {...props} as="tr" />;
