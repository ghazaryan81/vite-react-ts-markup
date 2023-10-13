export interface IJsonToVars {
  [key: string]: { [key: string]: string };
}

export function JsonToVars(theme: IJsonToVars) {
  let cssVars = "";
  Object.keys(theme).forEach((parentItem: string) =>
    Object.keys(theme[parentItem]).forEach(
      (childItem) =>
        (cssVars += `--${parentItem}--${childItem}: ${theme[parentItem][childItem]};`)
    )
  );
  return cssVars;
}
