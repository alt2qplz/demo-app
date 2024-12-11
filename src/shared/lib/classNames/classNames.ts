export type Mods = Record<string, boolean | string | undefined> // ключ string, значение boolean или string

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string => {
  return [
    cls,
    ...Object.keys(mods).filter(k => mods[k]),
    ...additional.filter(Boolean)
  ].join(' ');
};
