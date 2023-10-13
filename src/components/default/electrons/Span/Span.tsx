import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/default/electrons/CoreUI";

export interface SpanProps extends CoreUIProps {}

export const Span: FC<SpanProps> = ({ ...props }) => (
  <CoreUI {...props} as="span" />
);
