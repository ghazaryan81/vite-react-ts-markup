/*prettier-ignore*/ import { ElementType, FC }            from "react";
/*prettier-ignore*/ import { CoreUI }                     from "@/components/default/electrons/CoreUI";
/*prettier-ignore*/ import MetaHeadData                   from "@/components/atoms/MetaHead/MetaHeadData.json";

export type TMetaHeadData = typeof MetaHeadData;

export interface MetaHeadDataProps {
  data: TMetaHeadData;
}

export const MetaHead: FC<MetaHeadDataProps> = ({ data }) => {
  return Object.keys(data)
    .map((item) => data[item as keyof ElementType])
    .filter((item: any) => !item["list"])
    .map((item: any, index: number) => (
      <CoreUI key={index} as={item.tagName} {...item.attrs} />
    ));
};
{
  /* <MetaHead data={MetaHeadData} /> */
}
