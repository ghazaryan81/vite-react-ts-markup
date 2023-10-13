import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface H1Props extends CoreUIProps {}

export const H1: FC<H1Props> = ({ ...props }) => <CoreUI {...props} as="h1" />;
