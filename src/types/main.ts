export type SizesType = "sm" | "md" | "lg";

export type TagVariantsType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label"
  | "a";

export type IdType = { "id": number };
export type ParentIdType = { "parentId": number };
export type LabelType = { "label"?: string };

export type ItemCatType = IdType & LabelType;
export type ItemSubCatType = IdType & LabelType & ParentIdType;

export type ITodoCat = {
  cat: ItemCatType[];
};

export type ITodoSubCat = {
  subCat: ItemSubCatType[];
};

export type ITodo = {
  todo: ITodoCat & ITodoSubCat;
};
