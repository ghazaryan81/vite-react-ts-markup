import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons";

export interface AProps extends CoreUIProps {
  href?: string;
}

export const A: FC<AProps> = ({ ...props }) => <CoreUI {...props} as="a" />;
