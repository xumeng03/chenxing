const ns: string = "x";

export const useNS = (name: string) => {
  const className = `${ns}-${name}`;

  const b = (block: string) => {
    return `${className}-${block}`;
  };

  const e = (element: string) => {
    return `${className}__${element}`;
  };

  const m = (modifier: string) => {
    return `${className}--${modifier}`;
  };

  const be = (block: string, element: string) => {
    return `${className}-${block}__${element}`;
  };

  const em = (element: string, modifier: string) => {
    return `${className}__${element}--${modifier}`;
  };

  const bm = (block: string, modifier: string) => {
    return `${className}-${block}--${modifier}`;
  };

  return {
    className,
    b,
    e,
    m,
    be,
    em,
    bm,
  };
};
