import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface AsideProps extends CoreUIProps {}

export const Aside: FC<AsideProps> = ({ ...props }) => (
  <CoreUI {...props} as="aside" />
);
